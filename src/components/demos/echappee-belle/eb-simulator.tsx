import { useState } from 'react';
import {
    ArrowRight,
    CalendarDays,
    Check,
    Clock,
    Coffee,
    Heart,
    Utensils,
    Bike,
} from 'lucide-react';

const accommodations = [
    { id: 'lavande', name: 'Chambre Lavande', price: 120 },
    { id: 'vignes', name: 'Suite des Vignes', price: 180 },
    { id: 'mas', name: 'Le Mas Provençal', price: 350 },
];

const services = [
    {
        id: 'breakfast',
        name: 'Petits-déjeuners gourmands',
        description: 'Pain frais, confitures maison, jus pressés, miel local',
        price: 18,
        unit: 'pers. / jour',
        icon: Coffee,
        perPersonPerNight: true,
    },
    {
        id: 'dinner',
        name: "Table d'Hôtes Provençale",
        description:
            'Menu 3 plats cuisinés par vos hôtes (accord mets & vins inclus)',
        price: 45,
        unit: 'pers.',
        icon: Utensils,
        perPersonPerNight: false,
    },
    {
        id: 'massage',
        name: 'Massage & Soin Aromathérapie',
        description:
            '60 minutes de relaxation aux huiles essentielles de lavande',
        price: 90,
        unit: 'séance',
        icon: Heart,
        perPersonPerNight: false,
    },
    {
        id: 'bikes',
        name: 'Location de Vélos Électriques',
        description: 'Idéal pour gravir les ruelles de Gordes sans effort',
        price: 30,
        unit: 'vélo / jour',
        icon: Bike,
        perPersonPerNight: false,
    },
];

export function EbSimulator() {
    const [accommodationId, setAccommodationId] = useState('lavande');
    const [nights, setNights] = useState(3);
    const [guests, setGuests] = useState(2);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const accommodation = accommodations.find(
        (item) => item.id === accommodationId,
    )!;

    const servicesTotal = services.reduce((total, service) => {
        if (!selectedServices.includes(service.id)) return total;

        if (service.perPersonPerNight) {
            return total + service.price * guests * nights;
        }

        if (service.id === 'bikes') {
            return total + service.price * nights;
        }

        return total + service.price;
    }, 0);

    const accommodationTotal = accommodation.price * nights;
    const total = accommodationTotal + servicesTotal;

    function toggleService(id: string) {
        setSelectedServices((current) =>
            current.includes(id)
                ? current.filter((serviceId) => serviceId !== id)
                : [...current, id],
        );
        setSubmitted(false);
    }

    return (
        <section
            id="simulateur"
            className="bg-[rgb(250,248,245)] px-6 py-20 text-[rgb(35,39,32)] sm:px-10 lg:py-28 dark:bg-[#1e211b] dark:text-[#f0ece3]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.25em] text-[rgb(201,157,99)] uppercase">
                        <span className="h-px w-8 bg-[rgb(201,157,99)]" />
                        Planification de votre Séjour
                        <span className="h-px w-8 bg-[rgb(201,157,99)]" />
                    </p>

                    <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                        Estimez votre{' '}
                        <span className="text-[rgb(74,87,64)] italic dark:text-[#a2b095]">
                            réservation
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                        Configurez votre séjour provençal sur-mesure et
                        découvrez immédiatement l'estimation de votre budget
                        vacances.
                    </p>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
                    {/* Partie 1 : configuration du séjour */}
                    <div className="flex flex-col gap-8">
                        <div className="border border-[#DED8CC] bg-white/60 p-6 sm:p-8 dark:border-[#414438] dark:bg-[#292c24]">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgb(96,112,85)] text-sm font-medium text-white dark:bg-[#7f916f]">
                                    1
                                </span>
                                <div>
                                    <h3 className="font-serif text-2xl">
                                        Choisissez votre hébergement
                                    </h3>
                                    <p className="mt-1 text-sm text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        Sélectionnez votre cocon provençal.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {accommodations.map((item) => {
                                    const isSelected =
                                        accommodationId === item.id;

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            aria-pressed={isSelected}
                                            onClick={() => {
                                                setAccommodationId(item.id);
                                                setSubmitted(false);
                                            }}
                                            className={`relative flex flex-col items-start border p-4 text-left transition-all duration-200 ${
                                                isSelected
                                                    ? 'border-[rgb(96,112,85)] bg-[rgb(96,112,85)]/10 ring-1 ring-[rgb(96,112,85)] dark:border-[#91a382] dark:bg-[#7f916f]/10 dark:ring-[#91a382]'
                                                    : 'border-[#DED8CC] hover:border-[rgb(201,157,99)] dark:border-[#414438] dark:hover:border-[#c99d63]'
                                            }`}
                                        >
                                            {isSelected && (
                                                <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-[rgb(96,112,85)] text-white dark:bg-[#7f916f]">
                                                    <Check className="size-3" />
                                                </span>
                                            )}

                                            <span className="pr-5 font-serif text-base">
                                                {item.name}
                                            </span>
                                            <span className="mt-3 font-serif text-2xl text-[rgb(74,87,64)] dark:text-[#c3cbb8]">
                                                {item.price} €
                                            </span>
                                            <span className="mt-1 text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                                par nuit
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-7 grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="eb-nights"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Nombre de nuits
                                    </label>
                                    <div className="flex h-12 items-center border border-[#DED8CC] dark:border-[#414438]">
                                        <CalendarDays className="ml-4 size-4 text-[rgb(201,157,99)]" />
                                        <select
                                            id="eb-nights"
                                            value={nights}
                                            onChange={(event) => {
                                                setNights(
                                                    Number(event.target.value),
                                                );
                                                setSubmitted(false);
                                            }}
                                            className="h-full w-full bg-transparent px-3 text-sm outline-none"
                                        >
                                            {Array.from(
                                                { length: 29 },
                                                (_, index) => index + 2,
                                            ).map((night) => (
                                                <option
                                                    key={night}
                                                    value={night}
                                                    className="bg-white text-[#232720]"
                                                >
                                                    {night}{' '}
                                                    {night > 1
                                                        ? 'nuits'
                                                        : 'nuit'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className="mt-2 text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        <Clock className="mr-1 inline size-3.5" />
                                        Minimum 2 nuits en saison
                                    </p>
                                </div>

                                <div>
                                    <label
                                        htmlFor="eb-guests"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Nombre de voyageurs
                                    </label>
                                    <select
                                        id="eb-guests"
                                        value={guests}
                                        onChange={(event) => {
                                            setGuests(
                                                Number(event.target.value),
                                            );
                                            setSubmitted(false);
                                        }}
                                        className="h-12 w-full border border-[#DED8CC] bg-transparent px-4 text-sm outline-none focus:border-[rgb(201,157,99)] dark:border-[#414438]"
                                    >
                                        {[1, 2, 3, 4].map((count) => (
                                            <option
                                                key={count}
                                                value={count}
                                                className="bg-white text-[#232720]"
                                            >
                                                {count}{' '}
                                                {count > 1
                                                    ? 'voyageurs'
                                                    : 'voyageur'}
                                            </option>
                                        ))}
                                    </select>
                                    {accommodationId === 'mas' &&
                                        guests > 4 && (
                                            <p className="mt-2 text-xs text-red-600">
                                                Maximum 4 voyageurs.
                                            </p>
                                        )}
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#DED8CC] bg-white/60 p-6 sm:p-8 dark:border-[#414438] dark:bg-[#292c24]">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgb(96,112,85)] text-sm font-medium text-white dark:bg-[#7f916f]">
                                    2
                                </span>
                                <div>
                                    <h3 className="font-serif text-2xl">
                                        Complétez avec nos services
                                    </h3>
                                    <p className="mt-1 text-sm text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        Ajoutez quelques plaisirs à votre
                                        escapade.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col divide-y divide-[#DED8CC] dark:divide-[#414438]">
                                {services.map((service) => {
                                    const isSelected =
                                        selectedServices.includes(service.id);
                                    const Icon = service.icon;

                                    return (
                                        <button
                                            key={service.id}
                                            type="button"
                                            aria-pressed={isSelected}
                                            onClick={() =>
                                                toggleService(service.id)
                                            }
                                            className="flex w-full items-start gap-4 py-5 text-left first:pt-0 last:pb-0"
                                        >
                                            <span
                                                className={`mt-1 flex size-11 shrink-0 items-center justify-center transition-colors ${
                                                    isSelected
                                                        ? 'bg-[rgb(96,112,85)] text-white dark:bg-[#7f916f]'
                                                        : 'bg-[#EEE9DF] text-[rgb(74,87,64)] dark:bg-[#383c31] dark:text-[#c3cbb8]'
                                                }`}
                                            >
                                                <Icon className="size-5" />
                                            </span>

                                            <span className="min-w-0 flex-1">
                                                <span className="flex flex-wrap items-center justify-between gap-2">
                                                    <span className="font-medium">
                                                        {service.name}
                                                    </span>
                                                    <span className="font-serif text-lg text-[rgb(74,87,64)] dark:text-[#c3cbb8]">
                                                        +{service.price} €
                                                        <span className="ml-1 font-sans text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                                            / {service.unit}
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="mt-1 block text-sm leading-6 text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                                    {service.description}
                                                </span>
                                            </span>

                                            <span
                                                className={`mt-1 flex size-5 shrink-0 items-center justify-center border transition-colors ${
                                                    isSelected
                                                        ? 'border-[rgb(96,112,85)] bg-[rgb(96,112,85)] text-white dark:border-[#7f916f] dark:bg-[#7f916f]'
                                                        : 'border-[#C9C3B7] dark:border-[#626657]'
                                                }`}
                                            >
                                                {isSelected && (
                                                    <Check className="size-3.5" />
                                                )}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Partie 2 : récapitulatif et estimation */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="border border-[#DED8CC] bg-[#F0ECE3] p-6 sm:p-8 dark:border-[#414438] dark:bg-[#292c24]">
                            <p className="text-xs font-medium tracking-[0.22em] text-[rgb(201,157,99)] uppercase">
                                Votre escapade
                            </p>
                            <h3 className="mt-3 font-serif text-3xl">
                                Détails du Séjour
                            </h3>

                            <div className="mt-7 flex flex-col gap-4 border-b border-[#D8D0C3] pb-6 dark:border-[#414438]">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-medium">
                                            {accommodation.name}
                                        </p>
                                        <p className="mt-1 text-sm text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                            {accommodation.price} € / nuit
                                        </p>
                                    </div>
                                    <p className="shrink-0 text-sm">
                                        {nights} nuits
                                    </p>
                                </div>

                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        Hébergement
                                    </span>
                                    <span>
                                        {accommodationTotal.toLocaleString(
                                            'fr-FR',
                                        )}{' '}
                                        €
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        Voyageurs
                                    </span>
                                    <span>{guests}</span>
                                </div>
                            </div>

                            <div className="border-b border-[#D8D0C3] py-6 dark:border-[#414438]">
                                <p className="mb-4 text-sm font-medium">
                                    Options sélectionnées
                                </p>

                                {selectedServices.length === 0 ? (
                                    <p className="text-sm text-[rgb(110,116,104)] italic dark:text-[#b5b7aa]">
                                        Aucune option sélectionnée
                                    </p>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        {services
                                            .filter((service) =>
                                                selectedServices.includes(
                                                    service.id,
                                                ),
                                            )
                                            .map((service) => {
                                                const optionPrice =
                                                    service.perPersonPerNight
                                                        ? service.price *
                                                          guests *
                                                          nights
                                                        : service.id === 'bikes'
                                                          ? service.price *
                                                            nights
                                                          : service.price;

                                                return (
                                                    <div
                                                        key={service.id}
                                                        className="flex justify-between gap-3 text-sm"
                                                    >
                                                        <span className="text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                                            {service.name}
                                                            {service.perPersonPerNight && (
                                                                <span className="block text-xs">
                                                                    {guests}{' '}
                                                                    pers. ×{' '}
                                                                    {nights}{' '}
                                                                    nuits
                                                                </span>
                                                            )}
                                                            {service.id ===
                                                                'bikes' && (
                                                                <span className="block text-xs">
                                                                    {nights}{' '}
                                                                    jours
                                                                </span>
                                                            )}
                                                        </span>
                                                        <span className="shrink-0">
                                                            {optionPrice.toLocaleString(
                                                                'fr-FR',
                                                            )}{' '}
                                                            €
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                )}
                            </div>

                            <div className="pt-6">
                                <p className="text-sm text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                    Coût total estimé
                                </p>
                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className="font-serif text-5xl text-[rgb(74,87,64)] dark:text-[#c3cbb8]">
                                        {total.toLocaleString('fr-FR')}
                                    </span>
                                    <span className="font-serif text-2xl text-[rgb(74,87,64)] dark:text-[#c3cbb8]">
                                        €
                                    </span>
                                </div>
                                <p className="mt-2 text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                    Estimation indicative pour {nights} nuits.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(true)}
                                    className="group mt-7 flex min-h-14 w-full items-center justify-center gap-3 bg-[rgb(96,112,85)] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[rgb(74,87,64)] dark:bg-[#7f916f] dark:hover:bg-[#91a382]"
                                >
                                    Demander une option de réservation
                                    <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                </button>

                                {submitted && (
                                    <p
                                        role="status"
                                        className="mt-4 border border-[#DED8CC] bg-white/60 p-4 text-sm leading-6 text-[rgb(74,87,64)] dark:border-[#414438] dark:bg-[#1e211b] dark:text-[#c3cbb8]"
                                    >
                                        Votre estimation est prête ! Cette
                                        démonstration est frontend uniquement :
                                        aucune demande n'a été envoyée.
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
