import { MnCartSheet } from "@/components/demos/maison-nouvelle/mn-cart-sheet";
import { MnContact } from "@/components/demos/maison-nouvelle/mn-contact";
import { MnHero } from "@/components/demos/maison-nouvelle/mn-hero";
import { MnProductCategories } from "@/components/demos/maison-nouvelle/mn-product-categories";
import { MnProducts } from "@/components/demos/maison-nouvelle/mn-products";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosHeader } from "@/components/landmarks/demos-header";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";

// Type du panier
export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const footerProps = {
    navigationLinks: [
        { title: 'Accueil', href: '#accueil' },
        { title: 'Rayons', href: '#rayons' },
        { title: 'Catalogue', href: '#catalogue' },
        { title: 'Disponibilité', href: '#disponibilite' },
        { title: 'La Boutique', href: '#boutique' },
        { title: 'Contact', href: '#contact' },
    ],
    legalLinks: [
        { title: 'Mentions légales', href: '#' },
        { title: 'Politique de confidentialité', href: '#' },
        { title: "Conditions générales d'utilisation", href: '#' },
        { title: 'Cookies', href: '#' },
    ],
    logo: (
        <a
            href="/demos/maison-nouvelle#accueil"
            className="mb-8 flex items-center gap-2 font-cormorant text-3xl font-thin uppercase"
        >
            <span>Maison</span>
            <span className="text-[rgb(191,168,136)]">Nouvelle</span>
        </a>
    ),
    description:
        'Maison Nouvelle est un concept store engagé fondé à Paris. Nous sélectionnons des pièces intemporelles de créateurs indépendants, avec une charte stricte de respect environnemental et social.',

    className: 'py-24 px-6 border-t bg-black/90 dark:bg-black/50 lg:px-8',
    containerClassName: 'mx-auto max-w-7xl  ',
    gridClassName: 'grid gap-10 lg:grid-cols-4',
    brandClassName: 'lg:col-span-2 lg:-translate-y-8',
    descriptionClassName:
        'mt-3 max-w-md text-balance text-sm leading-loose text-background dark:text-foreground',
    socialLinks: (
        <>
            <FacebookIcon className="size-6" aria-hidden="true" />
            <InstagramIcon className="size-6" aria-hidden="true" />
        </>
    ),
    socialLinksClassName: 'mt-8 flex gap-4',
    headingClassName: 'font-semibold text-background dark:text-foreground',
    linksClassName: 'mt-4 space-y-3',
    linkClassName:
        'relative inline-block text-sm text-background transition-all duration-300 hover:-translate-y-1 hover:text-white dark:text-foreground dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100',
    bottomClassName:
        'mt-12 pt-6 flex flex-col gap-4 border-t text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between',
};
export default function MaisonNouvelle() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
    );

    const headerProps = {
        logo: (
            <a
                href="/demos/maison-nouvelle#accueil"
                className="flex items-center gap-2 font-cormorant text-3xl font-thin uppercase"
            >
                <span>Maison</span>
                <span className="text-[rgb(191,168,136)]">Nouvelle</span>
            </a>
        ),
        navigation: [
            { title: 'Rayons', href: '#rayons' },
            { title: 'Catalogue', href: '#catalogue' },
            { title: 'Disponibilité', href: '#disponibilite' },
            { title: 'La Boutique', href: '#boutique' },
        ],
        action: (
            <button
                onClick={() => setCartOpen(true)}
                className="flex items-center justify-center gap-2 rounded border-2 p-4 text-sm font-medium transition-all duration-300 hover:border-foreground"
            >
                <ShoppingBasket className="size-5" />
                PANIER
                <span className="rounded-full bg-[rgb(191,168,136)] px-2.5 py-1 text-xs text-black">
                    {cartCount}
                </span>
            </button>
        ),
        navigationItemClassName:
            'py-2 px-3 cursor-pointer rounded-md text-sm uppercase tracking-wide hover:bg-accent hover:text-accent-foreground',
    };

    // Ajouter un produit au panier
    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id,
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [...currentItems, { ...product, quantity: 1 }];
        });
    };

    return (
        <>
            <div className="font-montserrat">
                <DemosTopbar />
                <DemosHeader {...headerProps} />
                <main>
                    <MnHero />
                    <MnProductCategories />
                    <MnProducts onAddToCart={addToCart} />
                    <MnContact />
                </main>
                <DemosFooter {...footerProps} />
                <MnCartSheet
                    open={cartOpen}
                    onOpenChange={setCartOpen}
                    items={cartItems}
                    onItemsChange={setCartItems}
                />
            </div>
        </>
    );
}
