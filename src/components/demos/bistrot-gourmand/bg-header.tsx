import { Utensils, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
    { title: "Notre carte", href: "#carte" },
    { title: "Galerie", href: "#gallerie" },
    { title: "Infos", href: "#infos" },
];

export function BgHeader() {
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
                    : "border-transparent bg-transparent text-white shadow-none backdrop-blur-none",
            )}
        >
            <div className="mx-auto flex h-20 items-center px-4 md:max-w-7xl">
                {/* Menu mobile */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger className="flex items-center justify-center">
                            <Menu className="size-6" />
                        </SheetTrigger>

                        <SheetContent
                            side="left"
                            className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
                        >
                            <SheetHeader className="flex justify-start text-left">
                                <SheetTitle className="sr-only">
                                    Navigation menu
                                </SheetTitle>

                                <a
                                    href="/demos/bistrot-gourmand#accueil"
                                    className="flex items-center"
                                >
                                    <Utensils className="mr-3 size-7 shrink-0" />
                                    <span className="font-playfair text-xl tracking-wider [font-variant-caps:small-caps]">
                                        Le Bistrot Gourmand
                                    </span>
                                </a>
                            </SheetHeader>

                            <nav className="flex h-full flex-1 flex-col p-4">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="text-sm uppercase tracking-widest"
                                        >
                                            {item.title}
                                        </a>
                                    ))}

                                    <a
                                        href="#reservation"
                                        className="mt-4 rounded-sm bg-red-900/90 px-4 py-3 text-center text-sm text-white uppercase"
                                    >
                                        Réserver une table
                                    </a>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <a
                    href="/resume/demos/bistrot-gourmand#accueil"
                    className="flex shrink-0 items-center"
                >
                    <Utensils className="mr-4 size-8 shrink-0" />

                    <span className="font-playfair text-2xl tracking-wider [font-variant-caps:small-caps]">
                        Le{" "}
                        <span className="inline-block translate-y-0.5 text-[34px] text-[#8a1e1e]">
                            Bistrot
                        </span>{" "}
                        Gourmand
                    </span>
                </a>

                {/* Navigation desktop */}
                <nav className="mx-auto mr-12 hidden h-full items-center lg:flex">
                    <NavigationMenu className="flex h-full items-stretch">
                        <NavigationMenuList className="flex h-full items-stretch space-x-2">
                            {navigation.map((item) => (
                                <NavigationMenuItem
                                    key={item.title}
                                    className="relative flex h-full items-center"
                                >
                                    <a
                                        href={item.href}
                                        className="inline-flex cursor-pointer items-center justify-center rounded-md bg-transparent px-3 py-2 text-[14.5px] uppercase tracking-widest backdrop-blur-lg transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
                                    >
                                        {item.title}
                                    </a>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Réservation */}
                <a
                    href="#reservation"
                    className="ml-auto mr-2 rounded-sm bg-red-900/90 px-4 py-3 text-center text-sm text-white uppercase transition-colors hover:bg-[#8a1e1e] sm:mr-10 sm:px-8 sm:py-4"
                >
                    Réserver une table
                </a>
            </div>
        </header>
    );
}