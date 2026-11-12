import { Menu } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavigationItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type Props = {
  transparentText?: boolean;
  logo: ReactNode;
  navigation: NavigationItem[];
  action?: ReactNode;
  navigationClassName?: string;
  navigationItemClassName?: string;
};

export function DemosHeader({
  transparentText = false,
  logo,
  navigation,
  action,
  navigationClassName,
  navigationItemClassName,
}: Props) {
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
          : cn(
              "border-transparent bg-transparent shadow-none backdrop-blur-none",
              transparentText ? "text-white" : "text-foreground",
            ),
      )}
    >
      <div className="mx-auto flex h-20 items-center px-4 md:max-w-7xl">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="mr-4 h-7 w-7" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetHeader className="flex justify-start text-left">
                <div> app logo icon</div>
              </SheetHeader>
              <nav className="flex h-full flex-1 flex-col p-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-2 font-medium"
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}

                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="shrink-0">{logo}</div>

        {/* Desktop Navigation */}
        <nav className={cn("mx-auto hidden h-full items-center lg:flex", navigationClassName)}>
          <NavigationMenu className="flex h-full items-stretch">
            <NavigationMenuList className="flex h-full items-stretch space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                  <a
                    href={item.href}
                    className={cn(
                      "group inline-flex items-center justify-center ring-ring/10 outline-ring/50 transition-[color,box-shadow] focus:bg-accent focus:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[state=open]:bg-accent/50 dark:ring-ring/20 dark:outline-ring/40",
                      navigationItemClassName,
                    )}
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.title}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action */}
        {action && <div className="ml-auto lg:ml-0">{action}</div>}
      </div>
    </header>
  );
}
