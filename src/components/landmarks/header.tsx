import { Aperture, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router";

const mainNavItems = [
  {
    title: "Accueil",
    href: "#accueil",
  },
  {
    title: "Sites Démos",
    href: "#demos",
  },
];

export function Header() {
  return (
    <>
      <div className="border-b border-sidebar-border/80">
        <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetHeader className="flex justify-start text-left">
                  <Menu className="h-6 w-6 fill-current text-black dark:text-white" />
                </SheetHeader>
                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                  <div className="flex h-full flex-col justify-between text-sm">
                    <div className="flex flex-col space-y-4">
                      {mainNavItems.map((item) => (
                        <a key={item.title} href={item.href} className="flex items-center space-x-2 font-medium">
                          <span>{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            to="/"
            // prefetch
            className="flex items-center space-x-2"
          >
            <Aperture />
          </Link>

          {/* Desktop Navigation */}
          <div className="mx-auto hidden h-full items-center space-x-6 lg:flex">
            <NavigationMenu className="flex h-full items-stretch">
              <NavigationMenuList className="flex h-full items-stretch space-x-2">
                {mainNavItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative flex h-full items-center">
                    <a href={item.href} className="h-9 cursor-pointer px-3">
                      {item.title}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  );
}
