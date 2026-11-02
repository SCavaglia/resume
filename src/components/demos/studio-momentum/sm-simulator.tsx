import { useState } from 'react';
import {
    Camera,
    Clapperboard,
    Music2,
    Flower2,
    CalendarCheck,
    Users,
    Check,
    Plus,
    ArrowRight,
    Calculator,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
    {
        id: 'photo',
        icon: Camera,
        title: 'Reportage Photo Artistique',
        description: "10 heures de présence, galerie en ligne & coffret d'art",
        price: 1200,
    },
    {
        id: 'film',
        icon: Clapperboard,
        title: 'Film Cinématique 4K',
        description:
            'Film de 15 minutes, teaser réseaux et prises de vues au sol',
        price: 1500,
    },
    {
        id: 'dj',
        icon: Music2,
        title: 'DJ Set, Acoustique & Lumières',
        description:
            'Régie de prestige, mise en lumière de piste et sonorisation',
        price: 900,
    },
    {
        id: 'flowers',
        icon: Flower2,
        title: 'Scénographie Florale & Décor',
        description:
            "Créations végétales suspendues, bouquet d'accueil & art de table",
        price: 1100,
    },
    {
        id: 'planning',
        icon: CalendarCheck,
        title: 'Coordination complète Jour J',
        description: 'Gestion planning, accueil des prestataires et logistique',
        price: 1800,
    },
];

const extraOptions = [
    {
        id: 'drone',
        title: 'Prises de vues Drone',
        description: 'Des images aériennes spectaculaires',
        price: 300,
    },
    {
        id: 'photobooth',
        title: 'Borne Photobooth',
        description: 'Un espace photo ludique pour vos invités',
        price: 450,
    },
    {
        id: 'night',
        title: 'DJ Set de nuit extra',
        description: 'Prolongez la soirée avec un set supplémentaire',
        price: 200,
    },
];

const formatPrice = (price: number) =>
    new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(price);

export function SmSimulator() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [guests, setGuests] = useState(150);

    const toggleService = (id: string) => {
        setSelectedServices((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id],
        );
    };

    const toggleOption = (id: string) => {
        setSelectedOptions((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id],
        );
    };

    const selectedServiceDetails = services.filter((service) =>
        selectedServices.includes(service.id),
    );

    const selectedOptionDetails = extraOptions.filter((option) =>
        selectedOptions.includes(option.id),
    );

    const serviceTotal = selectedServiceDetails.reduce(
        (total, service) => total + service.price,
        0,
    );

    const optionTotal = selectedOptionDetails.reduce(
        (total, option) => total + option.price,
        0,
    );

    const guestTotal = guests * 5;
    const total = serviceTotal + optionTotal + guestTotal;

    const hasSelection =
        selectedServices.length > 0 || selectedOptions.length > 0;

    const handleProjectRequest = () => {
        const summary = [
            "Bonjour, je souhaite discuter d'un projet avec Moment Studio.",
            '',
            'Prestations :',
            ...selectedServiceDetails.map(
                (service) =>
                    `- ${service.title} : ${formatPrice(service.price)}`,
            ),
            '',
            `Nombre d'invités : ${guests}`,
            `Logistique invités : ${formatPrice(guestTotal)}`,
            '',
            'Options :',
            ...selectedOptionDetails.map(
                (option) => `- ${option.title} : ${formatPrice(option.price)}`,
            ),
            '',
            `Estimation totale : ${formatPrice(total)}`,
        ].join('\n');

        sessionStorage.setItem('moment-studio-estimate', summary);
        window.location.href = '#contact';
    };

    return (
        <section
            id="simulateur"
            className="relative isolate bg-[#faf8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#171613]"
        >
            {/* Décoration */}
            <div className="pointer-events-none absolute top-20 -left-40 h-96 w-96 rounded-full bg-[#c49a45]/10 blur-[120px] dark:bg-[#c49a45]/10" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#e5c982]/20 blur-[120px] dark:bg-[#a98235]/10" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#b58a35]/40 bg-[#e9d7aa]/30 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#80601e] uppercase dark:border-[#c5a04e]/40 dark:bg-[#c5a04e]/10 dark:text-[#e2c47f]">
                        <Calculator className="h-4 w-4" />
                        Planificateur de Devis
                    </span>

                    <h2 className="mt-6 font-cormorant text-4xl font-semibold text-[#29251e] sm:text-5xl lg:text-6xl dark:text-[#f5f0e5]">
                        Estimer mes prestations
                    </h2>

                    <div className="mt-5 flex items-center justify-center gap-3 text-[#b58a35] dark:text-[#c5a04e]">
                        <span className="h-px w-12 bg-current" />
                        <span>✦</span>
                        <span className="h-px w-12 bg-current" />
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-[#6e675b] sm:text-lg dark:text-[#c0b8a8]">
                        Sélectionnez vos besoins artistiques, ajustez la taille
                        de votre événement et obtenez une estimation budgétaire
                        en temps réel.
                    </p>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:gap-10">
                    {/* Colonne gauche */}
                    <div className="flex flex-col gap-10">
                        {/* Prestations */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a77b27] text-sm font-semibold text-white dark:bg-[#c5a04e] dark:text-[#211b10]">
                                    1
                                </span>
                                <h3 className="font-cormorant text-3xl font-semibold text-[#302a20] sm:text-4xl dark:text-[#f0e8d8]">
                                    Choisissez vos prestations phares
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    const isSelected =
                                        selectedServices.includes(service.id);

                                    return (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() =>
                                                toggleService(service.id)
                                            }
                                            aria-pressed={isSelected}
                                            className={`group relative flex min-h-[190px] flex-col rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                                isSelected
                                                    ? 'border-[#b58a35] bg-[#f4ead2] shadow-[0_10px_35px_-15px_rgba(167,123,39,0.35)] dark:border-[#c5a04e] dark:bg-[#332b1d]'
                                                    : 'border-[#e2d8c5] bg-white/80 hover:border-[#c5a04e]/70 hover:shadow-[0_12px_35px_-18px_rgba(167,123,39,0.3)] dark:border-[#49402f] dark:bg-[#211e19] dark:hover:border-[#c5a04e]/60'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div
                                                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                                                        isSelected
                                                            ? 'bg-[#a77b27] text-white dark:bg-[#c5a04e] dark:text-[#211b10]'
                                                            : 'bg-[#f3ead6] text-[#92702d] group-hover:bg-[#e9d7aa] dark:bg-[#393020] dark:text-[#dfbd70] dark:group-hover:bg-[#493b25]'
                                                    }`}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <span
                                                    className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all ${
                                                        isSelected
                                                            ? 'border-[#a77b27] bg-[#a77b27] text-white dark:border-[#c5a04e] dark:bg-[#c5a04e] dark:text-[#211b10]'
                                                            : 'border-[#d9cdb5] text-transparent dark:border-[#675b43]'
                                                    }`}
                                                >
                                                    <Check className="h-3.5 w-3.5" />
                                                </span>
                                            </div>

                                            <div className="mt-5">
                                                <h4 className="font-cormorant text-2xl font-semibold text-[#302a20] dark:text-[#f0e8d8]">
                                                    {service.title}
                                                </h4>
                                                <p className="mt-2 text-xs leading-6 text-[#746b5d] dark:text-[#bcb09e]">
                                                    {service.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-5 text-lg font-semibold text-[#92702d] dark:text-[#dfbd70]">
                                                {formatPrice(service.price)}
                                            </div>

                                            {/* Reflet doré au hover */}
                                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6ca82]/0 via-transparent to-[#c49a45]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#e6ca82]/10 group-hover:to-[#c49a45]/5 group-hover:opacity-100" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Nombre d'invités */}
                        <div className="rounded-2xl border border-[#e2d8c5] bg-white/80 p-6 shadow-sm sm:p-8 dark:border-[#49402f] dark:bg-[#211e19]">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3ead6] text-[#92702d] dark:bg-[#393020] dark:text-[#dfbd70]">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-cormorant text-2xl font-semibold text-[#302a20] dark:text-[#f0e8d8]">
                                            Nombre d'invités estimé
                                        </h3>
                                        <p className="mt-1 text-xs text-[#746b5d] dark:text-[#bcb09e]">
                                            Impacte la sonorisation et les
                                            besoins de staff (+5€/convive)
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-[#d9c69d] bg-[#f7efd9] px-5 py-3 text-center dark:border-[#67542f] dark:bg-[#393020]">
                                    <p className="font-cormorant text-3xl font-semibold text-[#92702d] dark:text-[#dfbd70]">
                                        {guests}
                                    </p>
                                    <p className="text-[10px] font-semibold tracking-widest text-[#806c48] uppercase dark:text-[#bba36e]">
                                        Personnes
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <input
                                    type="range"
                                    min={50}
                                    max={500}
                                    step={50}
                                    value={guests}
                                    onChange={(event) =>
                                        setGuests(Number(event.target.value))
                                    }
                                    aria-label="Nombre d'invités"
                                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#e7ddc9] accent-[#a77b27] dark:bg-[#49402f] dark:accent-[#c5a04e]"
                                />

                                <div className="mt-3 flex justify-between text-xs font-medium text-[#8b806f] dark:text-[#a99d89]">
                                    <span>50</span>
                                    <span>150</span>
                                    <span>250</span>
                                    <span>350</span>
                                    <span>500</span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-[#e8dfd3] pt-5 dark:border-[#49402f]">
                                <span className="text-sm text-[#746b5d] dark:text-[#bcb09e]">
                                    Logistique invités
                                </span>
                                <span className="font-semibold text-[#92702d] dark:text-[#dfbd70]">
                                    {formatPrice(guestTotal)}
                                </span>
                            </div>
                        </div>

                        {/* Options complémentaires */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a77b27] text-sm font-semibold text-white dark:bg-[#c5a04e] dark:text-[#211b10]">
                                    2
                                </span>
                                <h3 className="font-cormorant text-3xl font-semibold text-[#302a20] sm:text-4xl dark:text-[#f0e8d8]">
                                    Options complémentaires
                                </h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {extraOptions.map((option) => {
                                    const isSelected = selectedOptions.includes(
                                        option.id,
                                    );

                                    return (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() =>
                                                toggleOption(option.id)
                                            }
                                            aria-pressed={isSelected}
                                            className={`flex items-center justify-between gap-4 rounded-xl border p-4 text-left transition-all duration-300 hover:border-[#c5a04e]/70 hover:shadow-md ${
                                                isSelected
                                                    ? 'border-[#b58a35] bg-[#f4ead2] dark:border-[#c5a04e] dark:bg-[#332b1d]'
                                                    : 'border-[#e2d8c5] bg-white/80 dark:border-[#49402f] dark:bg-[#211e19]'
                                            }`}
                                        >
                                            <div className="flex min-w-0 items-center gap-3">
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                                        isSelected
                                                            ? 'bg-[#a77b27] text-white dark:bg-[#c5a04e] dark:text-[#211b10]'
                                                            : 'bg-[#f3ead6] text-[#92702d] dark:bg-[#393020] dark:text-[#dfbd70]'
                                                    }`}
                                                >
                                                    {isSelected ? (
                                                        <Check className="h-4 w-4" />
                                                    ) : (
                                                        <Plus className="h-4 w-4" />
                                                    )}
                                                </span>

                                                <span className="min-w-0">
                                                    <span className="block text-sm font-semibold text-[#393329] dark:text-[#eee5d5]">
                                                        {option.title}
                                                    </span>
                                                    <span className="mt-1 block text-xs text-[#817667] dark:text-[#bcb09e]">
                                                        {option.description}
                                                    </span>
                                                </span>
                                            </div>

                                            <span className="shrink-0 text-sm font-semibold text-[#92702d] dark:text-[#dfbd70]">
                                                +{formatPrice(option.price)}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Récapitulatif sticky */}
                    <aside className="lg:sticky lg:top-32">
                        <div className="relative overflow-hidden rounded-3xl border border-[#c5a04e]/50 bg-[#fffdf8] p-6 shadow-[0_20px_60px_-25px_rgba(107,81,37,0.25)] sm:p-8 dark:border-[#67542f] dark:bg-[#211e19]">
                            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#d9b65e]/15 blur-3xl dark:bg-[#c49a45]/10" />

                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3ead6] text-[#92702d] dark:bg-[#393020] dark:text-[#dfbd70]">
                                        <Calculator className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold tracking-[0.2em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                                            Votre sélection
                                        </p>
                                        <h3 className="font-cormorant text-3xl font-semibold text-[#302a20] dark:text-[#f0e8d8]">
                                            Détails du Devis
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-5">
                                    <div>
                                        <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                                            Prestations
                                        </p>

                                        {selectedServiceDetails.length > 0 ? (
                                            <div className="flex flex-col gap-3">
                                                {selectedServiceDetails.map(
                                                    (service) => (
                                                        <div
                                                            key={service.id}
                                                            className="flex items-start justify-between gap-3 text-sm"
                                                        >
                                                            <span className="text-[#655c50] dark:text-[#c0b8a8]">
                                                                {service.title}
                                                            </span>
                                                            <span className="shrink-0 font-medium text-[#393329] dark:text-[#eee5d5]">
                                                                {formatPrice(
                                                                    service.price,
                                                                )}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-[#a69a8c] italic dark:text-[#82766a]">
                                                Aucune prestation sélectionnée
                                            </p>
                                        )}
                                    </div>

                                    <div className="h-px bg-gradient-to-r from-[#b58a35]/50 via-[#b58a35]/15 to-transparent" />

                                    <div className="flex items-start justify-between gap-3 text-sm">
                                        <span className="text-[#655c50] dark:text-[#c0b8a8]">
                                            Logistique invité ({guests} pers.)
                                        </span>
                                        <span className="shrink-0 font-medium text-[#393329] dark:text-[#eee5d5]">
                                            +{formatPrice(guestTotal)}
                                        </span>
                                    </div>

                                    <div className="h-px bg-gradient-to-r from-[#b58a35]/50 via-[#b58a35]/15 to-transparent" />

                                    <div>
                                        <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                                            Options
                                        </p>

                                        {selectedOptionDetails.length > 0 ? (
                                            <div className="flex flex-col gap-3">
                                                {selectedOptionDetails.map(
                                                    (option) => (
                                                        <div
                                                            key={option.id}
                                                            className="flex items-start justify-between gap-3 text-sm"
                                                        >
                                                            <span className="text-[#655c50] dark:text-[#c0b8a8]">
                                                                {option.title}
                                                            </span>
                                                            <span className="shrink-0 font-medium text-[#393329] dark:text-[#eee5d5]">
                                                                +
                                                                {formatPrice(
                                                                    option.price,
                                                                )}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-[#a69a8c] italic dark:text-[#82766a]">
                                                Aucune option sélectionnée
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#b58a35]/60 to-transparent" />

                                <div className="text-center">
                                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                                        Estimation Budgétaire
                                    </p>
                                    <p className="mt-3 font-cormorant text-5xl font-semibold tracking-tight text-[#92702d] sm:text-6xl dark:text-[#dfbd70]">
                                        {formatPrice(total)}
                                    </p>
                                    <p className="mt-2 text-xs text-[#968a7d] dark:text-[#9d9184]">
                                        Estimation indicative, hors frais
                                        éventuels
                                    </p>
                                </div>

                                <Button
                                    type="button"
                                    onClick={handleProjectRequest}
                                    disabled={!hasSelection}
                                    className="mt-8 h-13 w-full rounded-full bg-[#a77b27] text-sm font-semibold text-white shadow-lg shadow-[#a77b27]/20 transition-all hover:-translate-y-0.5 hover:bg-[#89631e] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 dark:bg-[#c5a04e] dark:text-[#211b10] dark:hover:bg-[#dfbd70]"
                                >
                                    Créer mon étude de projet
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                <p className="mt-4 text-center text-[10px] leading-relaxed text-[#968a7d] dark:text-[#9d9184]">
                                    Cette estimation ne constitue pas un devis
                                    contractuel. Chaque projet fait l'objet
                                    d'une étude personnalisée.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
