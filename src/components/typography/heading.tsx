import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "h1" | "h2" | "h2-legal" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const headingStyles = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight text-balance",
  h2: "text-3xl sm:text-4xl font-semibold tracking-tight text-balance",
  "h2-legal": "text-2xl sm:text-3xl font-semibold tracking-tight text-balance",
  h3: "text-2xl font-semibold tracking-tight text-balance",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-base font-semibold tracking-tight",
} as const;

export function Heading({ children, as = "h2", variant = as, className }: HeadingProps) {
  const Tag = as;

  return <Tag className={cn(headingStyles[variant], className)}>{children}</Tag>;
}
