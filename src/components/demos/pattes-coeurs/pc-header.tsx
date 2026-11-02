import { Menu, PawPrint } from "lucide-react";
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
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>

                        <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                            <SheetHeader className="flex justify-start text-left">
                                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                                <div className="font-playfair text-xl font-bold">Les Pattes Aux Cœurs</div>
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
                    href="/demos/pattes-coeurs#accueil"
                    className="flex shrink-0 items-center gap-2 font-playfair text-3xl font-bold tracking-tight"
                >
                    <PawPrint className="size-12 rounded-md bg-linear-to-tr from-yellow-950 to-orange-900 p-2 text-white" />
                    <span>Les Pattes Aux</span>
                    <span className="bg-linear-to-r from-orange-900 via-amber-900 to-yellow-900 bg-clip-text text-transparent dark:from-orange-100 dark:via-amber-100 dark:to-yellow-100">
                        Cœurs
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
                    href="#simulateur"
                    className="ml-auto block rounded-full bg-[rgb(192,138,94)] p-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(177,140,104)] lg:ml-0"
                >
                    Prendre RDV
                </a>
            </div>
        </header>
    );
}