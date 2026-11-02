import { Link } from "react-router";
import AppearanceDropdown from "../buttons/appearance-dropdown";
import { cn } from "@/lib/utils";
import { useEffect, useState, type PropsWithChildren } from "react";

export function DemosTopbar({ children }: PropsWithChildren) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pt-30">
      <div
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex h-10 items-center justify-between border-b px-4 transition-colors duration-300",
          isScrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background/30 backdrop-blur-sm",
        )}
      >
        <Link to="/" className="text-sm font-medium text-foreground hover:text-primary">
          Retour au site principal
        </Link>

        <AppearanceDropdown />
      </div>

      {children}
    </div>
  );
}
