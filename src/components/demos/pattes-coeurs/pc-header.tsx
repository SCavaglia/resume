import { Heart, Menu, PawPrint } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Services", href: "#services" },
  { title: "Simulateur", href: "#simulateur" },
  { title: "Urgences", href: "#urgences" },
  { title: "L'Équipe", href: "#equipe" },
  { title: "FAQ", href: "#faq" },
];

export function PcHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-10 right-0 left-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-sidebar-border/80 bg-background/90 text-foreground shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent text-foreground shadow-none backdrop-blur-none",
      )}
    >
      <div className="mx-auto flex h-20 items-center px-4 md:max-w-7xl">
        {/* Menu mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center justify-center">
              <Menu className="mr-4 h-7 w-7" />
            </SheetTrigger>

            <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
              <SheetHeader className="flex justify-start text-left">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="font-playfair text-xl font-bold">La Patte Au Cœur</div>
              </SheetHeader>

              <nav className="flex h-full flex-1 flex-col p-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a key={item.title} href={item.href} className="flex items-center space-x-2 font-medium">
                      {item.title}
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <a
          href="/resume/demos/pattes-coeurs#accueil"
          className="flex shrink-0 items-center gap-2 font-playfair text-3xl font-bold tracking-tight"
        >
          <div className="relative size-16">
            <svg className="size-full" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <Heart className="size-full" fill="url(#heart-gradient)" stroke="url(#heart-gradient)" />
            </svg>
            <PawPrint className="absolute inset-0 m-auto size-8 text-white" />
          </div>
          <span className="hidden sm:inline">
            <span>La Patte Au</span>
            <span className="pl-2 bg-linear-to-r from-orange-900 via-amber-900 to-yellow-900 bg-clip-text text-transparent dark:from-orange-100 dark:via-amber-100 dark:to-yellow-100">
              Cœur
            </span>
          </span>
        </a>

        {/* Navigation desktop */}
        <nav className="mx-auto hidden h-full items-center lg:mr-16 lg:flex">
          <NavigationMenu className="flex h-full items-stretch">
            <NavigationMenuList className="flex h-full items-stretch space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                  <a
                    href={item.href}
                    className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
                  >
                    {item.title}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action */}
        <a
          href="#rendez-vous"
          className="ml-auto block rounded-full bg-[rgb(192,138,94)] p-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(177,140,104)] lg:ml-0"
        >
          Prendre RDV
        </a>
      </div>
    </header>
  );
}
