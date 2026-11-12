import { Menu, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Notre Histoire", href: "#notre-histoire" },
  { title: "Collection", href: "#collection" },
  { title: "Créations Sur-Mesure", href: "#creations-sur-mesure" },
  { title: "FAQ", href: "#faq" },
];

export function AtcHeader() {
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
                <div className="flex items-center gap-2 font-playfair text-xl font-thin tracking-wide">
                  L'Atelier
                  <Sparkle className="text-[#A27B45]" />
                  Création
                </div>
              </SheetHeader>

              <nav className="flex h-full flex-1 flex-col p-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a key={item.title} href={item.href} className="flex items-center space-x-2 text-sm tracking-wide">
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
          href="/resume/demos/atelier-creation#accueil"
          className="flex shrink-0 items-center gap-2 font-playfair text-3xl font-thin tracking-wide"
        >
          <span className="hidden sm:inline">L'Atelier</span>
          <Sparkle className="text-[#A27B45]" />
          <span className="hidden sm:inline">Création</span>
        </a>

        {/* Navigation desktop */}
        <nav className="mx-auto hidden h-full items-center lg:flex">
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
          href="#me-contacter"
          className="
        group relative ml-auto inline-block overflow-hidden rounded-lg
        border border-[rgb(162,123,69)]/70
        px-8 py-2 font-semibold tracking-wide
        text-[rgb(248,245,239)]
        shadow-md shadow-[rgb(48,41,31)]/20
        transition-all duration-300
        hover:shadow-lg hover:shadow-[rgb(162,123,69)]/30
        active:scale-[0.98]
        lg:ml-0
    "
        >
          {/* Dégradé normal */}
          <span className="absolute inset-0 bg-linear-to-r from-[rgb(48,41,31)] via-[#403729] to-[rgb(48,41,31)]" />

          {/* Dégradé hover */}
          <span
            className="
            absolute inset-0 bg-linear-to-r from-[rgb(162,123,69)] via-[#c4a477] to-[rgb(162,123,69)]
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
        "
          />

          {/* Texte */}
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[rgb(48,41,31)]">Me contacter</span>
        </a>
      </div>
    </header>
  );
}
