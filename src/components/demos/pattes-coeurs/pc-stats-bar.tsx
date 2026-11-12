import { useEffect, useRef, useState } from "react";
import { Heart, PawPrint, Star, Stethoscope } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 12,
    suffix: "",
    label: "Ans d'expérience",
    icon: Heart,
  },
  {
    id: 2,
    value: 18400,
    suffix: "",
    label: "Animaux soignés",
    icon: PawPrint,
  },
  {
    id: 3,
    value: 9,
    suffix: "",
    label: "Praticiens experts",
    icon: Stethoscope,
  },
  {
    id: 4,
    value: 4.9,
    suffix: "",
    label: "Avis Google",
    icon: Star,
    decimals: 1,
  },
];

function AnimatedNumber({
  value,
  decimals = 0,
  isVisible,
}: {
  value: number;
  decimals?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Courbe ease-out pour une animation plus naturelle
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value]);

  return (
    <>
      {new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(count)}
    </>
  );
}

export function PcStatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[#9c8068]/15 bg-[#eee7dd] px-4 py-12 sm:px-6 lg:px-8 dark:border-[#c2a487]/10 dark:bg-[#302820]"
    >
      {/* Décorations */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />
      <div className="pointer-events-none absolute -right-20 -bottom-32 h-72 w-72 rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${index > 0 ? "lg:border-l lg:border-[#9c8068]/20 dark:lg:border-[#c2a487]/15" : ""} `}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-[#9c7657] dark:bg-white/5 dark:text-[#c6a17e]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>

              <p className="font-playfair text-4xl font-semibold tracking-tight text-[#57483b] sm:text-5xl dark:text-[#f0e5d8]">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  isVisible={isVisible}
                />
                {stat.id === 4 && (
                  <span className="ml-1 text-2xl text-[#a78d6d] dark:text-[#c6a17e]">/5</span>
                )}
              </p>

              <p className="mt-2 text-xs font-medium tracking-wide text-[#87786b] sm:text-sm dark:text-[#b9a895]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
