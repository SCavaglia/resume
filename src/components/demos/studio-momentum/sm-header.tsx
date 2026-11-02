import { Aperture, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
    { title: "Portfolio", href: "#portfolio" },
    { title: "Services", href: "#services" },
    { title: "Simulateur", href: "#simulateur" },
    { title: "FAQ", href: "#faq" },
];

export function SmHeader() {
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
                                <div className="font-cormorant text-xl uppercase">Studio Momentum</div>
                            </SheetHeader>

                            <nav className="flex h-full flex-1 flex-col p-4">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center space-x-2 text-sm font-medium uppercase tracking-wide"
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
                    href="/demos/studio-momentum#accueil"
                    className="flex shrink-0 items-center gap-2 font-cormorant text-3xl uppercase"
                >
                    <Aperture className="size-12 rounded-md bg-linear-to-tr from-[#967021] to-[#d6b76d] p-2 text-white" />
                    <span>Studio</span>
                    <span className="bg-linear-to-r from-[#967021] via-[#d6b76d] to-[#967021] bg-clip-text text-transparent">
                        Momentum
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
                                        className="group inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-4 focus-visible:outline-1"
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
                    className="ml-auto inline-block rounded border-2 border-[#967021] bg-linear-to-tr from-[#967021] to-[#d6b76d] p-4 text-lg font-medium text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:border-foreground lg:ml-0"
                >
                    Devis
                </a>
            </div>
        </header>
    );
}