import { Heart, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
    { title: "Engagements", href: "#engagements" },
    { title: "Tarifs & Soins", href: "#specialites" },
    { title: "Notre Équipe", href: "#equipe" },
    { title: "Accès", href: "#contact" },
];

export function NsHeader() {
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
                                <div className="flex items-center gap-2 font-figtree text-xl font-extrabold">
                                    <Heart className="size-8 rounded-xl border bg-linear-to-r from-sky-500 to-teal-500 p-1" />
                                    Nova <span className="bg-linear-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">Santé</span>
                                </div>
                            </SheetHeader>

                            <nav className="flex h-full flex-1 flex-col p-4">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center space-x-2 text-[15px] font-medium tracking-wide"
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
                <a href="/resume/demos/nova-sante#accueil" className="flex shrink-0 items-center gap-2">
                    <Heart className="size-12 rounded-2xl border bg-linear-to-r from-sky-500 to-teal-500 p-2" />
                    <span className="font-figtree text-2xl font-extrabold tracking-wide">
                        Nova
                        <span className="bg-linear-to-r from-sky-500 to-teal-500 bg-clip-text pl-2 text-transparent">
                            Santé
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
                                        className="group inline-flex cursor-pointer items-center justify-center rounded-md bg-transparent px-2 py-2 text-center text-[15px] font-medium tracking-wide backdrop-blur-lg transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
                    className="ml-auto inline-block rounded-full bg-[rgb(251,146,60)] px-8 py-6 text-lg font-semibold text-white transition-all hover:bg-[rgb(154,117,50)] lg:ml-0"
                >
                    Prendre RDV
                </a>
            </div>
        </header>
    );
}