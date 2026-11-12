import { useEffect, useRef, useState } from "react";

const DURATION = 3000;

const stats = [
  { value: "15+", label: "Praticiens spécialisés" },
  { value: "12 000+", label: "Patients accompagnés" },
  { value: "98%", label: "Patients satisfaits" },
  { value: "10+", label: "Années d'expérience" },
];

function useCountUp(target: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / DURATION, 1);
      const easedProgress = 1 - (1 - progress) ** 8;

      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, target]);

  return count;
}

function AnimatedValue({ value }: { value: string }) {
  const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  const target = match ? Number(match[2].replace(/[,.]/g, "")) : 0;
  const count = useCountUp(target, started);

  if (!match || Number.isNaN(target)) {
    return <span>{value}</span>;
  }

  const [, prefix, , suffix] = match;
  const formattedCount = new Intl.NumberFormat("fr-FR").format(count);

  return (
    <span ref={ref}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}

export function NsStatsBar() {
  return (
    <section className="px-6 py-10 sm:py-14">
      <div className="mx-auto grid grid-cols-2 gap-y-10 rounded-xl border bg-slate-900 py-12 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-2 text-center ${
              index !== 0 ? "lg:border-l lg:border-border" : ""
            }`}
          >
            <p className="text-3xl font-bold tracking-tight text-sky-400 sm:text-4xl">
              <AnimatedValue value={stat.value} />
            </p>

            <p className="text-sm text-slate-400 sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
