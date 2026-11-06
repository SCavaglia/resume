import { Menu, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Notre maison", href: "#notre-maison" },
  { title: "Diagnostic", href: "#diagnostic" },
  { title: "Prestations", href: "#prestations" },
  { title: "Galerie", href: "#galerie" },
  { title: "L'équipe", href: "#equipe" },
  { title: "Forfaits", href: "#forfaits" },
  { title: "Contact", href: "#contact" },
];

export function SlHeader() {
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
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
              <SheetHeader className="flex justify-start text-left">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <span className="font-playfair text-2xl tracking-wider uppercase">Salon Lumières</span>
              </SheetHeader>

              <nav className="flex h-full flex-1 flex-col p-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a key={item.title} href={item.href} className="flex items-center space-x-2 text-sm uppercase tracking-wide">
                      {item.title}
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <a href="/resume/demos/salon-lumieres#accueil" className="relative flex shrink-0 items-center">
          <Sun className="-rotate-27 absolute left-44.5 -top-5.5 size-12 text-yellow-500 opacity-70 drop-shadow-[0_0_8px_#d6b66f]" />

          <span className="relative z-10 bg-background font-playfair text-2xl tracking-wider leading-none uppercase">Salon Lumières</span>
        </a>

        {/* Navigation desktop */}
        <nav className="mx-auto mr-4 hidden h-full items-center lg:flex">
          <NavigationMenu className="flex h-full items-stretch">
            <NavigationMenuList className="flex h-full items-stretch gap-0">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                  <a
                    href={item.href}
                    className="group inline-flex cursor-pointer items-center justify-center rounded-md px-2 py-2 text-center text-[13px] uppercase tracking-wide backdrop-blur-lg transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
          href="#reservation"
          className="
        group relative ml-auto -mr-2 overflow-hidden rounded-sm
        border border-[#d6b98c]/70
        px-6 py-4 font-medium tracking-wide uppercase
        text-[#70583e]
        shadow-md shadow-[#b99b70]/15
        transition-all duration-300
        hover:shadow-lg hover:shadow-[#b99b70]/25
        dark:border-[#c5a77e]/50
        dark:text-[#fff8ed]
        lg:ml-0
    "
        >
          {/* Dégradé normal */}
          <span className="absolute inset-0 bg-linear-to-r from-[#ead9bd] via-[#f5eadd] to-[#ead9bd] dark:from-[#806c55] dark:via-[#a58a6b] dark:to-[#806c55]" />

          {/* Dégradé hover */}
          <span
            className="
            absolute inset-0 bg-linear-to-r from-[#d6b98c] via-[#ead9bd] to-[#d6b98c]
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            dark:from-[#a58a6b] dark:via-[#c5a77e] dark:to-[#a58a6b]
        "
          />

          <span className="relative z-10">Réserver un soin</span>
        </a>
      </div>
    </header>
  );
}
