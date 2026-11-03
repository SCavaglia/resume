import { Menu, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
    { title: "Expertises", href: "#expertises" },
    { title: "Associés", href: "#associes" },
    { title: "Honoraires", href: "#honoraires" },
    { title: "Prendre RDV", href: "#prendre-rdv" },
];

export function ScHeader() {
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
                                <div className="font-cormorant text-xl uppercase">Synergie Conseil</div>
                            </SheetHeader>

                            <nav className="flex h-full flex-1 flex-col p-4">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wide text-[rgb(13,31,45)] dark:text-[rgb(230,242,250)]"
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
                    href="/resume/demos/synergie-conseil#accueil"
                    className="flex shrink-0 items-center gap-2 font-cormorant text-3xl uppercase"
                >
                    <Scale className="size-12 rounded-md bg-linear-to-r from-cyan-900 to-sky-900 p-2 text-[#c6a77e]" />
                    <span>Synergie</span>
                    <span className="bg-linear-to-r from-[#806342] via-[#a88960] to-[#806342] bg-clip-text text-transparent dark:from-[#c6a77e] dark:via-[#d8c19b] dark:to-[#c6a77e]">
                        Conseil
                    </span>
                </a>

                {/* Navigation desktop */}
                <nav className="mx-auto hidden h-full items-center lg:mr-12 lg:flex">
                    <NavigationMenu className="flex h-full items-stretch">
                        <NavigationMenuList className="flex h-full items-stretch space-x-2">
                            {navigation.map((item) => (
                                <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                                    <a
                                        href={item.href}
                                        className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[rgb(13,31,45)] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1 dark:text-[rgb(230,242,250)]"
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
                    className="ml-auto inline-block rounded border border-[rgb(13,31,45)] bg-transparent p-4 text-xl text-[rgb(13,31,45)] hover:bg-transparent dark:border-[rgb(230,242,250)] dark:text-[rgb(230,242,250)] lg:ml-0"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}