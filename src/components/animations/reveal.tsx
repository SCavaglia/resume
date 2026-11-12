import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  as?: ElementType;
  animateOnLoad?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  animateOnLoad = false,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(animateOnLoad);

  useEffect(() => {
    if (animateOnLoad) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animateOnLoad]);

  return (
    <Tag
      ref={elementRef}
      className={cn("reveal", `reveal-${direction}`, isVisible && "reveal-visible", className)}
      style={
        delay
          ? ({
              "--reveal-delay": `${delay}ms`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
