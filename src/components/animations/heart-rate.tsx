import { useEffect, useRef } from "react";

export function HeartRate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let progress = 0;
    let lastTime = 0;
    let running = true;

    const duration = 2_000;
    const maxDpr = 2;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ECG shape: straight baseline, heartbeat spike, then straight baseline.
    const getY = (x: number, centerY: number, amplitude: number) => {
      const beats = [
        { position: 0.2, width: 0.035 },
        { position: 0.76, width: 0.035 },
      ];

      for (const beat of beats) {
        const start = beat.position - beat.width * 2;
        const peak1 = beat.position - beat.width;
        const peak2 = beat.position;
        const peak3 = beat.position + beat.width;
        const end = beat.position + beat.width * 2;

        if (x >= start && x < peak1) {
          return centerY;
        }

        if (x >= peak1 && x < peak2) {
          const t = (x - peak1) / (peak2 - peak1);
          return centerY + t * amplitude * 0.95;
        }

        if (x >= peak2 && x < peak3) {
          const t = (x - peak2) / (peak3 - peak2);
          return centerY + amplitude * 0.95 - t * amplitude * 2.05;
        }

        if (x >= peak3 && x < end) {
          const t = (x - peak3) / (end - peak3);
          return centerY - amplitude * 1.1 + t * amplitude * 1.1;
        }
      }

      return centerY;
    };

    const draw = (timestamp: number) => {
      if (!running) return;

      const delta = lastTime ? Math.min(timestamp - lastTime, 50) : 0;
      lastTime = timestamp;

      progress += delta / duration;

      if (progress >= 1) {
        progress = 0;
      }

      context.clearRect(0, 0, width, height);

      const centerY = height * 0.72;
      const amplitude = height * 0.2;
      const left = 0;
      const right = width;
      const lineWidth = right - left;

      // Ambient background glow.
      const ambient = context.createRadialGradient(
        width * 0.5,
        centerY,
        0,
        width * 0.5,
        centerY,
        width * 0.8,
      );

      ambient.addColorStop(0, "rgba(124, 58, 237, 0.14)");
      ambient.addColorStop(0.5, "rgba(236, 72, 153, 0.05)");
      ambient.addColorStop(1, "rgba(8, 9, 18, 0)");

      context.fillStyle = ambient;
      context.fillRect(0, 0, width, height);

      // Subtle grid.
      context.strokeStyle = "rgba(160, 180, 220, 0.055)";
      context.lineWidth = 1;

      for (let x = 0; x < width; x += 24) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += 24) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      const headX = left + lineWidth * progress;
      const headY = getY(progress, centerY, amplitude);

      // Draw only the part the luminous point has already reached.
      if (progress > 0) {
        const steps = Math.max(2, Math.ceil(lineWidth * progress));

        const points: { x: number; y: number }[] = [];

        for (let i = 0; i <= steps; i++) {
          const xProgress = progress * (i / steps);
          points.push({
            x: left + lineWidth * xProgress,
            y: getY(xProgress, centerY, amplitude),
          });
        }

        // Outer glow.
        context.save();
        context.beginPath();
        points.forEach((point, index) => {
          if (index === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        });
        context.strokeStyle = "rgba(236, 72, 153, 0.55)";
        context.lineWidth = 5;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.shadowColor = "#ec4899";
        context.shadowBlur = 16;
        context.stroke();
        context.restore();

        // Persistent gradient line.
        const gradient = context.createLinearGradient(left, 0, right, 0);
        gradient.addColorStop(0, "#8b5cf6");
        gradient.addColorStop(0.5, "#ec4899");
        gradient.addColorStop(1, "#67e8f9");

        context.beginPath();
        points.forEach((point, index) => {
          if (index === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        });
        context.strokeStyle = gradient;
        context.lineWidth = 2;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
      }

      // The luminous point that writes the curve.
      const lightX = headX;
      const lightY = headY;

      const glow = context.createRadialGradient(lightX, lightY, 0, lightX, lightY, 30);

      glow.addColorStop(0, "rgba(255, 255, 255, 1)");
      glow.addColorStop(0.12, "rgba(103, 232, 249, 0.95)");
      glow.addColorStop(0.35, "rgba(236, 72, 153, 0.45)");
      glow.addColorStop(1, "rgba(236, 72, 153, 0)");

      context.fillStyle = glow;
      context.beginPath();
      context.arc(lightX, lightY, 30, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.shadowColor = "#67e8f9";
      context.shadowBlur = 18;
      context.fillStyle = "#ffffff";
      context.beginPath();
      context.arc(lightX, lightY, 2.5, 0, Math.PI * 2);
      context.fill();
      context.restore();

      animationFrame = requestAnimationFrame(draw);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative isolate flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080912]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(ellipse_at_75%_70%,rgba(236,72,153,0.1),transparent_45%)]"
      />

      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080912]/60" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-4xl shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-sm"
          aria-hidden="true"
        >
          <span className="animate-heartbeat text-6xl">💪</span>
        </div>

        <h3 className="text-3xl font-black tracking-widest text-white">
          FIT<span className="text-[#ec4899]">✦</span>ZONE
        </h3>

        <p className="mt-2 text-sm tracking-wide text-white/50">Active energy tracker</p>

        <div className="mt-8 flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-1.5 text-xs font-medium tracking-wider text-emerald-200/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          SYSTEM ACTIVE
        </div>
      </div>
    </div>
  );
}
