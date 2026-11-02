import { useState } from 'react';
import {
    ArrowRight,
    Check,
    MapPin,
    ShoppingBag,
    ShoppingCart,
} from 'lucide-react';

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type MnProductsProps = {
    onAddToCart: (
        product: Omit<Product, 'description' | 'category' | 'image'>,
    ) => void;
};

const products: Product[] = [
    {
        id: 1,
        name: "Robe d'été fleurie",
        price: 49.9,
        description:
            "Coupe fluide aérienne, manches courtes délicates. Tissage 100% lin bio éco-certifié, imprimé à base d'encres végétales.",
        category: 'Prêt-à-porter',
        image: '/demos/maison-nouvelle/robe.jpg',
    },
    {
        id: 2,
        name: 'Baskets blanches vegan',
        price: 79,
        description:
            "Cuir de raisin végétal d'une souplesse absolue. Semelle cousue main en caoutchouc recyclé, semelle intérieure ergonomique.",
        category: 'Chaussures',
        image: '/demos/maison-nouvelle/baskets.jpg',
    },
    {
        id: 3,
        name: 'Sac cabas en cuir',
        price: 129,
        description:
            'Cuir tannage végétal pleine fleur double face. Compartiment zippé amovible, conçu artisanalement dans notre atelier parisien.',
        category: 'Accessoires & Bijoux',
        image: '/demos/maison-nouvelle/sac.jpg',
    },
    {
        id: 4,
        name: 'Montre minimaliste',
        price: 189,
        description:
            "Boîtier ultra-plat en acier inoxydable brossé or. Mouvement suisse d'une grande précision, bracelet en cuir véritable interchangeable.",
        category: 'Accessoires & Bijoux',
        image: '/demos/maison-nouvelle/montre.jpg',
    },
];

const filters = [
    'Tout voir',
    'Prêt-à-porter',
    'Chaussures',
    'Accessoires & Bijoux',
];

const stores = [
    'Paris — Le Marais',
    'Paris — Saint-Germain',
    "Lyon — Presqu'île",
    'Bordeaux — Centre-ville',
];

export function MnProducts({ onAddToCart }: MnProductsProps) {
    const [activeFilter, setActiveFilter] = useState('Tout voir');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedStore, setSelectedStore] = useState('');
    const [availabilityChecked, setAvailabilityChecked] = useState(false);

    const filteredProducts =
        activeFilter === 'Tout voir'
            ? products
            : products.filter((product) => product.category === activeFilter);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        }).format(price);

    const checkAvailability = () => {
        if (selectedProduct && selectedStore) {
            setAvailabilityChecked(true);
        }
    };

    return (
        <section
            id="catalogue"
            className="bg-white px-6 py-20 text-[#29251f] lg:px-8 lg:py-28 dark:bg-[#191714] dark:text-[#f3eee6]"
        >
            <div className="mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#bfa888]" />
                            <span className="text-xs font-medium tracking-[0.25em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
                                Nos sélections
                            </span>
                        </div>

                        <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
                            Le{' '}
                            <span className="text-[#b49a79] italic">
                                Catalogue
                            </span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#766e64] sm:text-base dark:text-[#bdb5a9]">
                            Une collection raisonnée, fabriquée en petites
                            séries éthiques. Ajoutez vos favoris au panier pour
                            un retrait immédiat en boutique.
                        </p>
                    </div>

                    <ShoppingBag
                        className="hidden size-12 text-[#bfa888]/50 md:block"
                        strokeWidth={1}
                    />
                </div>

                {/* Filtres */}
                <div className="mt-10 flex flex-wrap gap-2 border-b border-[#e7e1d8] pb-5 dark:border-white/10">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                                activeFilter === filter
                                    ? 'bg-[#bfa888] text-white'
                                    : 'text-[#766e64] hover:bg-[#bfa888]/10 hover:text-[#9c8263] dark:text-[#bdb5a9] dark:hover:text-[#c7aa83]'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Produits */}
                <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <article
                            key={product.id}
                            className="group flex flex-col"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#f0ede8] dark:bg-[#27231e]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#746653] uppercase backdrop-blur-sm dark:bg-black/70 dark:text-[#e5d5bd]">
                                    {product.category}
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col pt-5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-cormorant text-xl font-semibold">
                                        {product.name}
                                    </h3>
                                    <span className="shrink-0 text-sm font-semibold text-[#9c8263] dark:text-[#c7aa83]">
                                        {formatPrice(product.price)}
                                    </span>
                                </div>

                                <p className="mt-3 flex-1 text-sm leading-7 text-[#766e64] dark:text-[#aaa196]">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() =>
                                        onAddToCart({
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                        })
                                    }
                                    className="group/button mt-6 flex w-full items-center justify-center gap-3 border border-[#bfa888] px-4 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#8d7657] transition-all duration-300 hover:bg-[#bfa888] hover:text-white dark:text-[#c7aa83] dark:hover:text-[#191714]"
                                >
                                    <ShoppingCart className="size-4" />
                                    AJOUTER AU PANIER
                                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Disponibilité en boutique */}
                <div
                    id="disponibilite"
                    className="mt-24 border border-[#ded7cc] bg-[#faf8f5] p-7 sm:p-10 dark:border-white/10 dark:bg-[#211e1a]"
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="flex size-12 shrink-0 items-center justify-center bg-[#bfa888]/15 text-[#a58b68]">
                            <MapPin className="size-6" />
                        </div>

                        <div>
                            <h3 className="font-cormorant text-2xl font-semibold sm:text-3xl">
                                Vérifier la disponibilité locale
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-[#766e64] dark:text-[#aaa196]">
                                Sélectionnez un article et un magasin pour
                                vérifier la disponibilité en boutique.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="availability-product"
                                className="mb-2 block text-xs font-semibold tracking-wider text-[#766e64] uppercase dark:text-[#bdb5a9]"
                            >
                                Article
                            </label>

                            <select
                                id="availability-product"
                                value={selectedProduct}
                                onChange={(event) => {
                                    setSelectedProduct(event.target.value);
                                    setAvailabilityChecked(false);
                                }}
                                className="h-14 w-full border border-[#ded7cc] bg-white px-4 text-sm text-[#51483e] transition-colors outline-none focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-[#e5ddd1]"
                            >
                                <option value="">Choisir un article...</option>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="availability-store"
                                className="mb-2 block text-xs font-semibold tracking-wider text-[#766e64] uppercase dark:text-[#bdb5a9]"
                            >
                                Boutique
                            </label>

                            <select
                                id="availability-store"
                                value={selectedStore}
                                onChange={(event) => {
                                    setSelectedStore(event.target.value);
                                    setAvailabilityChecked(false);
                                }}
                                className="h-14 w-full border border-[#ded7cc] bg-white px-4 text-sm text-[#51483e] transition-colors outline-none focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-[#e5ddd1]"
                            >
                                <option value="">
                                    Choisir une boutique...
                                </option>
                                {stores.map((store) => (
                                    <option key={store} value={store}>
                                        {store}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={checkAvailability}
                        disabled={!selectedProduct || !selectedStore}
                        className="mt-5 inline-flex items-center justify-center gap-3 bg-[#bfa888] px-7 py-4 text-xs font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#a99070] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        VÉRIFIER LA DISPONIBILITÉ
                        <ArrowRight className="size-4" />
                    </button>

                    {availabilityChecked && (
                        <div className="mt-6 flex items-start gap-3 border border-[#8b9b78]/30 bg-[#8b9b78]/10 p-4 text-sm text-[#687b58] dark:text-[#b7c9a5]">
                            <Check className="mt-0.5 size-5 shrink-0" />
                            <div>
                                <p className="font-semibold">
                                    Demande de disponibilité enregistrée
                                </p>
                                <p className="mt-1 leading-6">
                                    {
                                        products.find(
                                            (product) =>
                                                product.id ===
                                                Number(selectedProduct),
                                        )?.name
                                    }{' '}
                                    — {selectedStore}
                                </p>
                                <p className="mt-1 text-xs opacity-80">
                                    Démonstration frontend : le stock réel n'est
                                    pas encore connecté.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
