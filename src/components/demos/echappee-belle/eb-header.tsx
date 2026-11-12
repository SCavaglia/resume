import { Menu, MountainSnow } from "lucide-react";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Hébergements", href: "#hebergements" },
  { title: "Simulateur", href: "#simulateur" },
  { title: "Guide Local", href: "#guide-local" },
  { title: "Le Domaine", href: "#le-domaine" },
  { title: "FAQ", href: "#faq" },
];

export function EbHeader() {
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

            <SheetContent
              side="left"
              className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
            >
              <SheetHeader className="flex justify-start text-left">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex items-center gap-2 font-cormorant text-xl font-thin">
                  <MountainSnow className="size-9 rounded-md bg-linear-to-tr from-[rgb(96,112,85)] to-[rgb(96,112,85)] p-2 text-[rgb(201,157,99)]" />
                  <span>L'Échappée</span>
                  <span className="bg-linear-to-t from-[#46563f] via-[#8e805d] to-[#c5a477] bg-clip-text text-transparent dark:from-[#607055] dark:via-[#b5a477] dark:to-[#e8d5a9]">
                    Belle
                  </span>
                </div>
              </SheetHeader>

              <nav className="flex h-full flex-1 flex-col p-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-2 text-sm uppercase tracking-wide"
                    >
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
          href="/resume/demos/echappee-belle#accueil"
          className="flex shrink-0 items-center gap-2 font-cormorant text-3xl font-thin"
        >
          <MountainSnow className="size-12 rounded-md bg-linear-to-tr from-[rgb(96,112,85)] to-[rgb(96,112,85)] p-2 text-[rgb(201,157,99)]" />
          <span className="hidden sm:inline">
            <span>L'Échappée</span>
            <span className="pl-1 bg-linear-to-t from-[#46563f] via-[#8e805d] to-[#c5a477] bg-clip-text text-transparent dark:from-[#607055] dark:via-[#b5a477] dark:to-[#e8d5a9]">
              Belle
            </span>
          </span>
        </a>

        {/* Navigation desktop */}
        <nav className="mx-auto hidden h-full items-center lg:flex">
          <NavigationMenu className="flex h-full items-stretch">
            <NavigationMenuList className="flex h-full items-stretch space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                  <a
                    href={item.href}
                    className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm uppercase tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
        group relative ml-auto inline-block overflow-hidden rounded-lg
        border border-[#607055]/70
        px-8 py-2 text-base font-semibold tracking-wide uppercase
        text-[#f5ead8]
        shadow-md shadow-[#607055]/20
        transition-all duration-300
        hover:shadow-lg hover:shadow-[#607055]/30
        active:scale-[0.98]
        dark:border-[#8b9b7b]/60
        lg:ml-0
    "
        >
          {/* Dégradé normal */}
          <span className="absolute inset-0 bg-linear-to-r from-[#607055] via-[#718365] to-[#607055]" />

          {/* Dégradé hover */}
          <span
            className="
            absolute inset-0 bg-linear-to-r from-[#c99d63] via-[#dfbd8b] to-[#c99d63]
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
        "
          />

          {/* Texte */}
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#34412f]">
            Réserver
          </span>
        </a>
      </div>
    </header>
  );
}
