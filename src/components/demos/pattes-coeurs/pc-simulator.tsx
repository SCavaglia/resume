import { useState } from 'react';
import {
    Check,
    CheckCircle2,
    Dog,
    Heart,
    PawPrint,
    Plus,
    Rabbit,
    Scissors,
    Stethoscope,
    Syringe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type Animal = 'Chien' | 'Chat' | 'Rongeur / NAC';

const animals: {
    name: Animal;
    emoji: string;
    icon: typeof Dog;
}[] = [
    { name: 'Chien', emoji: '🐶', icon: Dog },
    { name: 'Chat', emoji: '🐱', icon: PawPrint },
    { name: 'Rongeur / NAC', emoji: '🐰', icon: Rabbit },
];

const options = [
    {
        id: 'grooming',
        title: 'Toilettage Thérapeutique',
        description: 'Soin de peau, coupe griffes & bain doux',
        price: 35,
        suffix: '€',
        icon: Scissors,
    },
    {
        id: 'health',
        title: 'Bilan Santé Vétérinaire',
        description: 'Examen complet par notre docteur',
        price: 25,
        suffix: '€',
        icon: Stethoscope,
    },
    {
        id: 'medication',
        title: 'Administration Soins Spécifiques',
        description: 'Médicaments prescrits injectables ou oraux',
        price: 4,
        suffix: '€/j',
        icon: Syringe,
        perNight: true,
    },
];

export function PcSimulator() {
    const [animal, setAnimal] = useState<Animal>('Chien');
    const [nights, setNights] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const basePrice = 25;

    const selectedServices = options.filter((option) =>
        selectedOptions.includes(option.id),
    );

    const optionsTotal = selectedServices.reduce(
        (total, option) =>
            total + option.price * (option.perNight ? nights : 1),
        0,
    );

    const baseTotal = basePrice * nights;
    const total = baseTotal + optionsTotal;

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0,
        }).format(price);

    const toggleOption = (id: string) => {
        setSelectedOptions((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id],
        );
    };

    return (
        <section
            id="simulateur"
            className="relative overflow-hidden bg-[#f5f1eb] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
        >
            {/* Décoration */}
            <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
                        <Heart className="size-4" />
                        Estimer le budget
                    </div>

                    <h2 className="font-cormorant text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
                        Calculateur de Pension & Soins
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                        <span className="text-[#a88b6b]">✦</span>
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                    </div>

                    <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
                        Personnalisez le séjour de votre animal en sélectionnant
                        nos formules et nos soins de confort. Obtenez une
                        estimation transparente instantanément.
                    </p>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Configuration */}
                    <div className="space-y-7">
                        {/* Animal */}
                        <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-sm sm:p-8 dark:border-[#494035] dark:bg-[#2c2721]">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full bg-[#92785b] text-sm font-semibold text-white">
                                    1
                                </span>
                                <h3 className="font-cormorant text-2xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                                    Choisissez le type d'animal
                                </h3>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {animals.map((item) => {
                                    const active = animal === item.name;

                                    return (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => setAnimal(item.name)}
                                            aria-pressed={active}
                                            className={`relative flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border p-3 transition-all duration-200 ${
                                                active
                                                    ? 'border-[#a88b6b] bg-[#f3ece3] text-[#725a40] shadow-sm dark:border-[#b49a7b] dark:bg-[#41372d] dark:text-[#e2c8a9]'
                                                    : 'border-[#e8dfd3] bg-[#faf9f7] text-[#776e64] hover:border-[#b49a7b]/60 dark:border-[#494035] dark:bg-[#26221e] dark:text-[#bdb2a5]'
                                            }`}
                                        >
                                            {active && (
                                                <CheckCircle2 className="absolute top-2 right-2 size-4 text-[#92785b]" />
                                            )}
                                            <span className="text-3xl">
                                                {item.emoji}
                                            </span>
                                            <span className="text-center text-sm font-medium">
                                                {item.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Durée */}
                        <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-sm sm:p-8 dark:border-[#494035] dark:bg-[#2c2721]">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full bg-[#92785b] text-sm font-semibold text-white">
                                    2
                                </span>
                                <h3 className="font-cormorant text-2xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                                    Formule de pension
                                </h3>
                            </div>

                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                        Pension Standard
                                    </p>
                                    <p className="mt-1 text-sm text-[#8a7e70] dark:text-[#b5a797]">
                                        Durée du séjour
                                    </p>
                                </div>

                                <div className="rounded-xl bg-[#f2ece4] px-4 py-2 text-center dark:bg-[#41372d]">
                                    <span className="text-2xl font-semibold text-[#80674c] tabular-nums dark:text-[#e2c8a9]">
                                        {nights}
                                    </span>
                                    <span className="ml-1 text-sm text-[#80674c] dark:text-[#e2c8a9]">
                                        {nights > 1 ? 'nuits' : 'nuit'}
                                    </span>
                                </div>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={30}
                                value={nights}
                                onChange={(event) =>
                                    setNights(Number(event.target.value))
                                }
                                aria-label="Durée du séjour en nuits"
                                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#e8dfd3] accent-[#92785b] dark:bg-[#514538]"
                            />

                            <div className="mt-3 flex justify-between text-xs text-[#968979] dark:text-[#a99b89]">
                                <span>1 nuit</span>
                                <span>15 nuits</span>
                                <span>30 nuits</span>
                            </div>

                            <p className="mt-5 flex items-center gap-2 text-sm text-[#8a7e70] dark:text-[#b5a797]">
                                <Heart className="size-4 text-[#a88b6b]" />
                                Maximum de 30 nuits en ligne
                            </p>
                        </div>

                        {/* Options */}
                        <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-sm sm:p-8 dark:border-[#494035] dark:bg-[#2c2721]">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full bg-[#92785b] text-sm font-semibold text-white">
                                    3
                                </span>
                                <h3 className="font-cormorant text-2xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                                    Options & Services complémentaires
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {options.map((option) => {
                                    const Icon = option.icon;
                                    const active = selectedOptions.includes(
                                        option.id,
                                    );

                                    return (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() =>
                                                toggleOption(option.id)
                                            }
                                            aria-pressed={active}
                                            className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                                                active
                                                    ? 'border-[#a88b6b] bg-[#f7f2eb] dark:border-[#b49a7b] dark:bg-[#41372d]'
                                                    : 'border-[#eee8e0] bg-[#fcfbf9] hover:border-[#c5a98b]/60 dark:border-[#494035] dark:bg-[#26221e] dark:hover:border-[#80674c]'
                                            }`}
                                        >
                                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eee6dc] text-[#92785b] dark:bg-[#514538] dark:text-[#dfc5a5]">
                                                <Icon className="size-5" />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                                    {option.title}
                                                </p>
                                                <p className="mt-1 text-xs leading-5 text-[#8a7e70] sm:text-sm dark:text-[#b5a797]">
                                                    {option.description}
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 flex-col items-end gap-2">
                                                <span className="font-semibold text-[#80674c] dark:text-[#e2c8a9]">
                                                    +{option.price}{' '}
                                                    {option.suffix}
                                                </span>
                                                <span
                                                    className={`flex size-5 items-center justify-center rounded-md border transition-colors ${
                                                        active
                                                            ? 'border-[#92785b] bg-[#92785b] text-white'
                                                            : 'border-[#cfc3b4] bg-white dark:border-[#71604d] dark:bg-[#2c2721]'
                                                    }`}
                                                >
                                                    {active && (
                                                        <Check className="size-3.5" />
                                                    )}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Récapitulatif */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="overflow-hidden rounded-2xl border border-[#d9cbb9] bg-white shadow-lg shadow-[#6b5845]/10 dark:border-[#514538] dark:bg-[#2c2721] dark:shadow-black/20">
                            <div className="bg-[#92785b] px-6 py-6 text-white">
                                <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                                    <PawPrint className="size-4" />
                                    Votre estimation
                                </div>
                                <h3 className="font-cormorant text-3xl font-semibold">
                                    Détails du Séjour
                                </h3>
                            </div>

                            <div className="space-y-5 p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm text-[#8a7e70] dark:text-[#b5a797]">
                                        Compagnon
                                    </span>
                                    <span className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                        {animal}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm text-[#8a7e70] dark:text-[#b5a797]">
                                        Formule d'accueil
                                    </span>
                                    <span className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                        Pension Standard
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm text-[#8a7e70] dark:text-[#b5a797]">
                                        Durée de garde
                                    </span>
                                    <span className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                        {nights} {nights > 1 ? 'nuits' : 'nuit'}
                                    </span>
                                </div>

                                <div className="border-t border-dashed border-[#e4dbd0] dark:border-[#514538]" />

                                <div className="space-y-3">
                                    <div className="flex justify-between gap-3 text-sm">
                                        <span className="text-[#8a7e70] dark:text-[#b5a797]">
                                            Tarif Base Pension
                                        </span>
                                        <span className="font-medium text-[#443a30] dark:text-[#f0e6da]">
                                            {formatPrice(baseTotal)}
                                        </span>
                                    </div>

                                    <p className="text-xs text-[#a09384] dark:text-[#a99b89]">
                                        {formatPrice(basePrice)} × {nights}{' '}
                                        {nights > 1 ? 'nuits' : 'nuit'}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 text-sm font-medium text-[#443a30] dark:text-[#f0e6da]">
                                        Options choisies :
                                    </p>

                                    {selectedServices.length === 0 ? (
                                        <p className="text-sm text-[#a09384] dark:text-[#a99b89]">
                                            Aucune option · 0 €
                                        </p>
                                    ) : (
                                        <div className="space-y-3">
                                            {selectedServices.map((option) => (
                                                <div
                                                    key={option.id}
                                                    className="flex justify-between gap-3 text-sm"
                                                >
                                                    <span className="text-[#8a7e70] dark:text-[#b5a797]">
                                                        {option.title}
                                                        {option.perNight &&
                                                            ` (${nights} nuits)`}
                                                    </span>
                                                    <span className="shrink-0 font-medium text-[#443a30] dark:text-[#f0e6da]">
                                                        {formatPrice(
                                                            option.price *
                                                                (option.perNight
                                                                    ? nights
                                                                    : 1),
                                                        )}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-dashed border-[#e4dbd0] dark:border-[#514538]" />

                                <div className="rounded-xl bg-[#f5f1eb] p-4 dark:bg-[#41372d]">
                                    <div className="mb-1 text-sm text-[#80674c] dark:text-[#d0b99c]">
                                        Total estimé :
                                    </div>
                                    <div className="font-cormorant text-4xl font-bold text-[#443a30] dark:text-[#f3eae0]">
                                        {formatPrice(total)}
                                    </div>
                                    <p className="mt-1 text-xs text-[#968979] dark:text-[#b5a797]">
                                        Estimation indicative du séjour
                                    </p>
                                </div>

                                <Button
                                    type="button"
                                    className="h-12 w-full bg-[#92785b] text-white shadow-md shadow-[#92785b]/20 transition-all hover:bg-[#796247] hover:shadow-lg dark:bg-[#a88b6b] dark:text-[#211e1a] dark:hover:bg-[#c0a17e]"
                                    onClick={() => {
                                        document
                                            .getElementById('contact')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                    }}
                                >
                                    Réserver ce séjour
                                    <Plus className="ml-2 size-4" />
                                </Button>

                                <p className="text-center text-xs leading-5 text-[#a09384] dark:text-[#a99b89]">
                                    Cette estimation ne constitue pas une
                                    réservation définitive.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
