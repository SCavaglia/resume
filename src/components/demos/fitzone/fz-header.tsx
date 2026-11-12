import { Dumbbell, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Cours", href: "#cours" },
  { title: "Planning", href: "#planning" },
  { title: "Simulateur", href: "#simulateur" },
  { title: "Coachs", href: "#coachs" },
  { title: "Le Club", href: "#club" },
];

export function FzHeader() {
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

                <a
                  href="/demos/fitzone#accueil"
                  className="group flex items-end text-2xl font-black uppercase"
                >
                  <Dumbbell className="mr-3 size-7" />
                  <span>FIT</span>
                  <span className="bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                    ZONE
                  </span>
                </a>
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

                  <a
                    href="#contact"
                    className="mt-4 rounded-lg bg-linear-to-br from-red-500 to-orange-500 px-4 py-3 text-center text-sm font-semibold text-white uppercase"
                  >
                    Je m'inscris
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <a
          href="/resume/demos/fitzone#accueil"
          className="group flex shrink-0 items-end text-3xl font-black uppercase"
        >
          <Dumbbell className="mr-4 size-8 rounded-md transition-all duration-200 group-hover:-translate-y-1" />
          <span className="hidden sm:inline">
            <span className="-translate-y-0.5">FIT</span>
            <span className="bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
              ZONE
            </span>
          </span>
        </a>

        {/* Navigation desktop */}
        <nav className="mx-auto mr-12 hidden h-full items-center lg:flex">
          <NavigationMenu className="flex h-full items-stretch">
            <NavigationMenuList className="flex h-full items-stretch space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                  <a
                    href={item.href}
                    className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-[13.5px] tracking-wide uppercase transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
          href="#contact"
          className="ml-auto mr-2 rounded-lg bg-linear-to-br from-red-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white uppercase transition-opacity hover:opacity-90 sm:mr-10 lg:ml-0"
        >
          Je m'inscris
        </a>
      </div>
    </header>
  );
}
