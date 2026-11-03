import { useState } from 'react';
import {
    ArrowRight,
    CalendarDays,
    Fuel,
    Gauge,
    ShieldCheck,
} from 'lucide-react';

const vehicles = [
    {
        name: 'Peugeot 308 1.5 BlueHDi',
        price: '15 990 €',
        year: 2022,
        mileage: '45 000 km',
        fuel: 'Diesel',
        warranty: '12 mois',
        image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/peugeot-308-front-tracking.jpg',
    },
    {
        name: 'Renault Captur TCe 130',
        price: '17 500 €',
        year: 2023,
        mileage: '22 000 km',
        fuel: 'Essence',
        warranty: '24 mois',
        image: 'https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/1eefccf7-c97d-4407-9126-5139b89343a9/19678-NewCapturE-TechHybrid2021.jpg',
    },
    {
        name: 'Citroën Berlingo XL',
        price: '13 990 €',
        year: 2021,
        mileage: '68 000 km',
        fuel: 'Diesel',
        warranty: '12 mois',
        image: 'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/berlingo-paning.jpg',
    },
];

const filters = ['Tous les véhicules', 'Essence', 'Diesel'] as const;

type Filter = (typeof filters)[number];

type GpShowroomProps = {
    className?: string;
};

export function GpShowroom({ className }: GpShowroomProps) {
    const [activeFilter, setActiveFilter] =
        useState<Filter>('Tous les véhicules');

    const filteredVehicles = vehicles.filter(
        (vehicle) =>
            activeFilter === 'Tous les véhicules' ||
            vehicle.fuel === activeFilter,
    );

    return (
        <section
            id="showroom"
            className={`relative overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#15171c] ${className ?? ''}`}
        >
            <div className="pointer-events-none absolute top-40 -left-40 size-96 rounded-full bg-[#e63946]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#e63946] uppercase">
                            <span className="h-px w-7 bg-[#e63946]" />
                            Notre sélection
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl lg:text-5xl dark:text-white">
                            Showroom{' '}
                            <span className="text-[#e63946]">
                                Véhicules d'Occasion
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Découvrez notre stock d'occasions révisées et
                            garanties. Tous nos véhicules subissent une
                            inspection rigoureuse de 110 points de contrôle
                            avant mise en vente.
                        </p>
                    </div>

                    {/* Filtres */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                                    activeFilter === filter
                                        ? 'bg-[#e63946] text-white shadow-lg shadow-[#e63946]/20'
                                        : 'border border-neutral-200 bg-white text-neutral-600 hover:border-[#e63946]/50 hover:text-[#e63946] dark:border-white/10 dark:bg-[#202329] dark:text-neutral-300 dark:hover:border-[#e63946]/50 dark:hover:text-[#e63946]'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Véhicules */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {filteredVehicles.map((vehicle) => (
                        <article
                            key={vehicle.name}
                            className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#e63946]/30 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-[#1e2128] dark:hover:border-[#e63946]/40 dark:hover:shadow-black/30"
                        >
                            {/* Photo */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-[#292c33]">
                                <img
                                    src={vehicle.image}
                                    alt={`Voiture d'occasion ${vehicle.name} en showroom`}
                                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                                    <ShieldCheck
                                        size={14}
                                        className="text-[#e63946]"
                                    />
                                    Garantie {vehicle.warranty}
                                </div>

                                <div className="absolute right-4 bottom-4 rounded-lg bg-white/95 px-3 py-2 text-lg font-extrabold text-[#17191e] shadow-lg backdrop-blur-sm">
                                    {vehicle.price}
                                </div>
                            </div>

                            {/* Informations */}
                            <div className="p-6">
                                <div className="mb-5">
                                    <span className="text-xs font-semibold tracking-wider text-[#e63946] uppercase">
                                        Véhicule contrôlé
                                    </span>
                                    <h3 className="mt-1 text-xl font-bold text-[#17191e] transition-colors group-hover:text-[#e63946] dark:text-white">
                                        {vehicle.name}
                                    </h3>
                                </div>

                                <div className="mb-6 grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <CalendarDays
                                            size={17}
                                            className="shrink-0 text-[#e63946]"
                                        />
                                        Année {vehicle.year}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <Gauge
                                            size={17}
                                            className="shrink-0 text-[#e63946]"
                                        />
                                        {vehicle.mileage}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <Fuel
                                            size={17}
                                            className="shrink-0 text-[#e63946]"
                                        />
                                        {vehicle.fuel}
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-[#e63946] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#e63946]/15 transition-all duration-300 hover:bg-[#cf2938] hover:shadow-lg hover:shadow-[#e63946]/25"
                                >
                                    Réserver un essai
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                                    />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bas de section */}
                <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        <ShieldCheck size={19} className="text-[#e63946]" />
                        Tous nos véhicules sont inspectés sur 110 points de
                        contrôle
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                        Un véhicule vous intéresse ? Contactez notre équipe pour
                        organiser votre essai.
                    </p>
                </div>
            </div>
        </section>
    );
}
