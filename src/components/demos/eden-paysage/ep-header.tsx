import { Leaf, Menu, TreePine, Trees } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
    { title: "Nos Services", href: "#services" },
    { title: "Nos Réalisations", href: "#realisations" },
    { title: "Notre Méthode", href: "#methode" },
    { title: "Zone [Ville]", href: "#zone" },
];

export function EpHeader() {
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
                                <div className="flex items-center gap-2 text-xl font-bold">
                                    <TreePine className="size-9 rounded-md bg-linear-to-r from-lime-500 to-emerald-500 p-2 text-white" />
                                    EDEN <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">PAYSAGE</span>
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
                    href="/resume/demos/eden-paysage#accueil"
                    className="relative flex shrink-0 items-center gap-2 text-3xl font-bold"
                >
                    <Trees className="size-12 rounded-md bg-linear-to-r from-lime-500 to-emerald-500 p-2 text-white" />
                    <span>EDEN</span>
                    <Leaf className="absolute -top-2 left-1/2 size-6 -translate-x-1/2 text-lime-500" />
                    <span className="pl-2 translate-y-0.5 bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                        PAYSAGE
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
                                        className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-center text-sm uppercase font-semibold tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
                    className="ml-auto inline-block py-3 px-4 border-2 rounded-full text-xl font-semibold bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 text-white transition-all duration-300 lg:ml-0 hover:border-foreground hover:-translate-y-1"
                >
                    Estimateur Projet
                </a>
            </div>
        </header>
    );
}