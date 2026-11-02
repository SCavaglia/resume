import { useState } from 'react';
import {
    ArrowRight,
    CarFront,
    Church,
    Grape,
    Landmark,
    Leaf,
    MapPin,
    MapPinned,
    Search,
    Sun,
} from 'lucide-react';

const categories = [
    { id: 'villages', label: 'Villages Perchés', icon: Church },
    { id: 'nature', label: 'Nature & Rando', icon: Leaf },
    { id: 'vignobles', label: 'Vignobles', icon: Grape },
    { id: 'culture', label: 'Culture & Patrimoine', icon: Landmark },
] as const;

type CategoryId = (typeof categories)[number]['id'];

type Destination = {
    name: string;
    duration: string;
    description: string;
    category: CategoryId;
    image: string;
    distance: number;
    minutes: number;
};

const destinations: Destination[] = [
    {
        name: 'Gordes',
        duration: '0 min',
        description:
            "Suspendu sur son rocher de calcaire, dominé par son château Renaissance, c'est l'un des plus célèbres villages de France.",
        category: 'villages',
        image: '/demos/echappee-belle/gordes.jpg',
        distance: 0,
        minutes: 0,
    },
    {
        name: 'Roussillon',
        duration: '12 min en voiture',
        description:
            "Célèbre pour ses falaises d'ocre flamboyantes et son harmonie de façades aux teintes rouges, orangées et jaunes.",
        category: 'villages',
        image: '/demos/echappee-belle/roussillon.jpg',
        distance: 10,
        minutes: 12,
    },
    {
        name: 'Ménerbes',
        duration: '15 min en voiture',
        description:
            'Bâti sur une crête rocheuse offrant un panorama grandiose, ce village a séduit de nombreux artistes dont Dora Maar et Picasso.',
        category: 'villages',
        image: '/demos/echappee-belle/menerbes.jpg',
        distance: 13,
        minutes: 15,
    },
    {
        name: 'Village des Bories',
        duration: '5 min en voiture',
        description:
            'Ancien hameau de cabanes de bergers entièrement construites en pierre sèche sans aucun mortier, chef-d’œuvre architectural.',
        category: 'nature',
        image: '/demos/echappee-belle/village-bories.jpg',
        distance: 3,
        minutes: 5,
    },
    {
        name: 'Sentier des Ocres',
        duration: '12 min en voiture',
        description:
            "Une randonnée inoubliable au cœur d'un canyon ocreux aux couleurs surnaturelles, sculpté par l'érosion et la main de l'homme.",
        category: 'nature',
        image: '/demos/echappee-belle/sentier-ocres.jpg',
        distance: 10,
        minutes: 12,
    },
    {
        name: 'Fontaine-de-Vaucluse',
        duration: '20 min en voiture',
        description:
            'Découvrez la source mystérieuse de la Sorgue, jaillissant au pied d’une falaise impressionnante dans un écrin de verdure.',
        category: 'nature',
        image: '/demos/echappee-belle/fontaine-vaucluse.jpg',
        distance: 17,
        minutes: 20,
    },
    {
        name: 'Domaine de la Citadelle',
        duration: '18 min en voiture',
        description:
            'Parcourez les vignes du Luberon, découvrez les secrets de la vinification et dégustez des cuvées aux accents provençaux.',
        category: 'vignobles',
        image: '/demos/echappee-belle/domaine-citadelle.jpg',
        distance: 15,
        minutes: 18,
    },
    {
        name: 'Château la Canorgue',
        duration: '22 min en voiture',
        description:
            'Un domaine viticole de caractère niché dans un paysage préservé, réputé pour ses vins biologiques et son cadre authentique.',
        category: 'vignobles',
        image: '/demos/echappee-belle/chateau-canorgue.jpg',
        distance: 19,
        minutes: 22,
    },
    {
        name: 'Domaine de Marie',
        duration: '20 min en voiture',
        description:
            'Profitez d’une parenthèse au milieu des vignes, entre paysages vallonnés, architecture provençale et art de vivre méridional.',
        category: 'vignobles',
        image: '/demos/echappee-belle/domaine-marie.jpg',
        distance: 17,
        minutes: 20,
    },
    {
        name: 'Abbaye de Sénanque',
        duration: '10 min en voiture',
        description:
            'Une abbaye cistercienne du XIIe siècle lovée dans un vallon paisible, entourée de champs de lavande en saison.',
        category: 'culture',
        image: '/demos/echappee-belle/abbaye-senanque.jpg',
        distance: 7,
        minutes: 10,
    },
    {
        name: 'Château de Lourmarin',
        duration: '35 min en voiture',
        description:
            'Explorez un élégant château Renaissance, ses collections et ses jardins au cœur de l’un des plus beaux villages du Luberon.',
        category: 'culture',
        image: '/demos/echappee-belle/chateau-lourmarin.jpg',
        distance: 32,
        minutes: 35,
    },
    {
        name: 'Musée de la Lavande',
        duration: '15 min en voiture',
        description:
            'Plongez dans l’histoire de la lavande provençale et découvrez les savoir-faire, les outils et les traditions de sa culture.',
        category: 'culture',
        image: '/demos/echappee-belle/musee-lavande.jpg',
        distance: 12,
        minutes: 15,
    },
];

type Props = {
    className?: string;
};

export function EbDiscover({ className = '' }: Props) {
    const [activeCategory, setActiveCategory] =
        useState<CategoryId>('villages');
    const [destination, setDestination] = useState('');
    const [route, setRoute] = useState<Destination | null>(null);
    const [customRoute, setCustomRoute] = useState<string | null>(null);

    const filteredDestinations = destinations.filter(
        (item) => item.category === activeCategory,
    );

    const calculateRoute = (name: string) => {
        const query = name.trim();

        if (!query) return;

        const found = destinations.find(
            (item) => item.name.toLowerCase() === query.toLowerCase(),
        );

        setRoute(found ?? null);
        setCustomRoute(found ? null : query);
        setDestination(query);
    };

    const openDirections = (name: string) => {
        const url = `https://www.google.com/maps/dir/?api=1&origin=Gordes&destination=${encodeURIComponent(name)}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="decouverte"
            className={`bg-[#faf8f5] px-4 py-20 text-[#232720] transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#1e211b] dark:text-[#f0ece3] ${className}`}
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-10 max-w-3xl">
                    <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#c99d63] uppercase">
                        <span className="h-px w-10 bg-[#c99d63]" />
                        Découverte de la Région
                    </p>

                    <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Explorez le{' '}
                        <span className="text-[#4a5740] italic dark:text-[#a2b095]">
                            Luberon
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e7468] sm:text-lg dark:text-[#b5b7aa]">
                        Notre domaine constitue le point de départ idéal pour
                        découvrir les plus beaux trésors historiques et naturels
                        de Provence.
                    </p>
                </div>

                {/* Category navigation */}
                <div
                    role="tablist"
                    aria-label="Catégories de découvertes"
                    className="mb-8 grid grid-cols-2 border border-[#dedbd2] lg:grid-cols-4 dark:border-[#414439]"
                >
                    {categories.map(({ id, label, icon: Icon }) => {
                        const isActive = activeCategory === id;

                        return (
                            <button
                                key={id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCategory(id)}
                                className={`flex min-h-16 items-center justify-center gap-3 border-[#dedbd2] px-3 py-4 text-sm font-medium transition-colors sm:px-5 dark:border-[#414439] ${
                                    isActive
                                        ? 'bg-[#606f53] text-white dark:bg-[#66765a]'
                                        : 'text-[#4b5046] hover:bg-[#eeece5] dark:text-[#d1d2c8] dark:hover:bg-[#292c24]'
                                }`}
                            >
                                <Icon
                                    className="size-5 shrink-0"
                                    strokeWidth={1.6}
                                />
                                <span>{label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Destination cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDestinations.map((item) => (
                        <article
                            key={item.name}
                            className="group flex h-full flex-col overflow-hidden border border-[#e1ded6] bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:border-[#414439] dark:bg-[#292c24]/70 dark:hover:shadow-black/20"
                        >
                            <div className="relative aspect-[5/3] overflow-hidden bg-[#e8e4da] dark:bg-[#34372e]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-[#faf8f5]/95 px-3 py-1.5 text-xs font-medium text-[#4a5740] shadow-sm dark:bg-[#1e211b]/95 dark:text-[#d1d9c8]">
                                    <MapPin className="size-3.5" />
                                    {item.duration}
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-[#9a9d8e] uppercase dark:text-[#a5a896]">
                                    {
                                        categories.find(
                                            (category) =>
                                                category.id === item.category,
                                        )?.label
                                    }
                                </p>

                                <h3 className="font-serif text-2xl">
                                    {item.name}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                    {item.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDestination(item.name);
                                        setRoute(item);
                                        setCustomRoute(null);
                                        document
                                            .getElementById('itineraire')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'center',
                                            });
                                    }}
                                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#606f53] transition-colors hover:text-[#8a6941] dark:text-[#b7c5a8] dark:hover:text-[#d7b887]"
                                >
                                    Calculer l’itinéraire
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Itinerary planner */}
                <div
                    id="itineraire"
                    className="mt-16 grid overflow-hidden bg-[#f0eee6] lg:grid-cols-[0.8fr_1.2fr] dark:bg-[#292c24]"
                >
                    <div className="relative min-h-64 bg-[#ded9ca] lg:min-h-full dark:bg-[#34372e]">
                        <img
                            src="/demos/echappee-belle/luberon-panorama.jpg"
                            alt="Panorama sur les collines et les paysages du Luberon"
                            loading="lazy"
                            className="absolute inset-0 size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                        <div className="absolute bottom-5 left-5 text-white">
                            <p className="text-xs font-medium tracking-[0.2em] uppercase">
                                Au départ du Domaine
                            </p>
                            <p className="mt-1 font-serif text-2xl">
                                La Provence vous attend
                            </p>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 lg:p-12">
                        <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#c99d63] uppercase">
                            <MapPinned className="size-5" />
                            Outil d’Itinéraire Provençal
                        </p>

                        <h3 className="font-serif text-3xl sm:text-4xl">
                            Calculez votre{' '}
                            <span className="italic">trajet</span>
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                            Saisissez le nom d’un site touristique ou cliquez
                            sur « Calculer l’itinéraire » ci-dessus pour estimer
                            votre trajet depuis le Domaine.
                        </p>

                        <form
                            className="mt-6 flex flex-col gap-3 sm:flex-row"
                            onSubmit={(event) => {
                                event.preventDefault();
                                calculateRoute(destination);
                            }}
                        >
                            <div className="relative min-w-0 flex-1">
                                <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-[#7c8173]" />
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(event) => {
                                        setDestination(event.target.value);
                                        setRoute(null);
                                        setCustomRoute(null);
                                    }}
                                    placeholder="Nom du lieu, ville ou site touristique..."
                                    aria-label="Destination"
                                    className="h-12 w-full border border-[#d1cec2] bg-[#faf8f5] pr-4 pl-12 text-sm text-[#232720] transition outline-none focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b] dark:text-[#f0ece3]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-[#606f53] px-5 text-sm font-medium text-white transition hover:bg-[#4a5740] dark:bg-[#7f916f] dark:hover:bg-[#91a382]"
                            >
                                Calculer le trajet
                                <ArrowRight className="size-4" />
                            </button>
                        </form>

                        {/* Mock itinerary result */}
                        {(route || customRoute) && (
                            <div
                                aria-live="polite"
                                className="mt-5 border border-[#d9d6cb] bg-white/60 p-5 dark:border-[#484b40] dark:bg-[#1e211b]/70"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex size-10 shrink-0 items-center justify-center bg-[#e4e8dc] text-[#606f53] dark:bg-[#343d2e] dark:text-[#c3cbb8]">
                                        <CarFront className="size-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="font-serif text-xl">
                                            {route?.name ?? customRoute}
                                        </p>

                                        <p className="mt-1 text-sm text-[#6e7468] dark:text-[#b5b7aa]">
                                            {route
                                                ? route.minutes === 0
                                                    ? 'Vous êtes déjà sur place'
                                                    : `Environ ${route.minutes} min en voiture`
                                                : 'Estimation indicative pour votre destination'}
                                        </p>
                                    </div>

                                    <span className="shrink-0 text-sm font-semibold text-[#606f53] dark:text-[#b7c5a8]">
                                        {route
                                            ? `${route.distance} km`
                                            : 'À estimer'}
                                    </span>
                                </div>

                                <p className="mt-4 text-xs leading-5 text-[#7b8073] dark:text-[#aeb1a4]">
                                    {route
                                        ? 'Estimation fictive pour cette maquette. Le temps et la distance réels dépendent de votre itinéraire.'
                                        : 'Cette maquette ne consulte pas de service cartographique : aucun calcul réel n’est effectué.'}
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        openDirections(
                                            route?.name ??
                                                customRoute ??
                                                destination,
                                        )
                                    }
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#606f53] hover:text-[#8a6941] dark:text-[#b7c5a8]"
                                >
                                    Ouvrir dans Google Maps
                                    <ArrowRight className="size-4" />
                                </button>
                            </div>
                        )}

                        <div className="mt-7 grid grid-cols-1 gap-4 border-t border-[#d9d6cb] pt-6 sm:grid-cols-3 dark:border-[#484b40]">
                            <div className="flex items-center gap-3">
                                <CarFront
                                    className="size-6 shrink-0 text-[#606f53] dark:text-[#b7c5a8]"
                                    strokeWidth={1.5}
                                />
                                <span className="text-xs leading-5 text-[#6e7468] dark:text-[#b5b7aa]">
                                    Temps de trajet estimé
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPinned
                                    className="size-6 shrink-0 text-[#606f53] dark:text-[#b7c5a8]"
                                    strokeWidth={1.5}
                                />
                                <span className="text-xs leading-5 text-[#6e7468] dark:text-[#b5b7aa]">
                                    Distance depuis le domaine
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sun
                                    className="size-6 shrink-0 text-[#606f53] dark:text-[#b7c5a8]"
                                    strokeWidth={1.5}
                                />
                                <span className="text-xs leading-5 text-[#6e7468] dark:text-[#b5b7aa]">
                                    Nos conseils d’itinéraires
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
