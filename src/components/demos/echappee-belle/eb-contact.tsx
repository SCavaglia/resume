import { useState } from 'react';
import {
    ArrowRight,
    Check,
    Clock,
    Mail,
    MapPin,
    Phone,
    Plane,
    TrainFront,
} from 'lucide-react';

type Props = {
    className?: string;
};

export function EbContact({ className = '' }: Props) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="reservation"
            className={`bg-[#faf8f5] px-4 py-20 text-[#232720] transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#1e211b] dark:text-[#f0ece3] ${className}`}
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#c99d63] uppercase">
                        <span className="h-px w-10 bg-[#c99d63]" />
                        Réservation et Contact
                    </p>

                    <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Demande de{' '}
                        <span className="text-[#4a5740] italic dark:text-[#a2b095]">
                            réservation
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e7468] sm:text-lg dark:text-[#b5b7aa]">
                        Remplissez le formulaire de demande, nous vous
                        recontacterons sous 24 heures pour valider votre devis
                        et fixer vos dates de séjour.
                    </p>
                </div>

                {/* Content */}
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Left: Contact information */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl">
                                <MapPin
                                    className="size-5 text-[#c99d63]"
                                    strokeWidth={1.5}
                                />
                                Contact & Itinéraire
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="flex size-11 shrink-0 items-center justify-center bg-[#eeece5] text-[#606f53] dark:bg-[#292c24] dark:text-[#b7c5a8]">
                                        <MapPin
                                            className="size-5"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            Adresse du Domaine
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                            350 Route de Sénanque,
                                            <br />
                                            84220 Gordes (Vaucluse)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex size-11 shrink-0 items-center justify-center bg-[#eeece5] text-[#606f53] dark:bg-[#292c24] dark:text-[#b7c5a8]">
                                        <Phone
                                            className="size-5"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            Téléphone de contact
                                        </p>
                                        <a
                                            href="tel:+33490723456"
                                            className="mt-1 block text-sm text-[#6e7468] transition-colors hover:text-[#606f53] dark:text-[#b5b7aa] dark:hover:text-[#b7c5a8]"
                                        >
                                            00 00 00 00 00
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex size-11 shrink-0 items-center justify-center bg-[#eeece5] text-[#606f53] dark:bg-[#292c24] dark:text-[#b7c5a8]">
                                        <Mail
                                            className="size-5"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            Adresse Email
                                        </p>
                                        <a
                                            href="mailto:contact@exemple.com"
                                            className="mt-1 block text-sm break-all text-[#6e7468] transition-colors hover:text-[#606f53] dark:text-[#b5b7aa] dark:hover:text-[#b7c5a8]"
                                        >
                                            contact@exemple.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Practical information */}
                        <div className="border-l-2 border-[#c99d63] bg-[#f0eee6] p-6 dark:bg-[#292c24]">
                            <h4 className="mb-5 flex items-center gap-3 font-serif text-xl">
                                <Clock
                                    className="size-5 text-[#c99d63]"
                                    strokeWidth={1.5}
                                />
                                Informations Pratiques
                            </h4>

                            <p className="text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                Le domaine est ouvert d'Avril à Fin Octobre.
                            </p>

                            <div className="mt-5 flex flex-col gap-4">
                                <div className="flex gap-3">
                                    <TrainFront className="mt-0.5 size-5 shrink-0 text-[#606f53] dark:text-[#b7c5a8]" />
                                    <p className="text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                        Gare d'Avignon TGV : environ 45 minutes
                                        en voiture.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <Plane className="mt-0.5 size-5 shrink-0 text-[#606f53] dark:text-[#b7c5a8]" />
                                    <p className="text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                        Aéroport Marseille-Provence : environ
                                        1h10 en voiture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Reservation form */}
                    <div className="border border-[#e1ded6] bg-white/60 p-6 sm:p-8 lg:p-10 dark:border-[#414439] dark:bg-[#292c24]/70">
                        <div className="mb-8">
                            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#c99d63] uppercase">
                                Votre séjour
                            </p>

                            <h3 className="font-serif text-3xl">
                                Formulaire de pré-réservation
                            </h3>

                            <p className="mt-2 text-sm text-[#6e7468] dark:text-[#b5b7aa]">
                                Présentez-nous votre projet de séjour.
                            </p>
                        </div>

                        {submitted ? (
                            <div
                                role="status"
                                className="flex min-h-80 flex-col items-center justify-center text-center"
                            >
                                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#e5eadf] text-[#606f53] dark:bg-[#343d2e] dark:text-[#b7c5a8]">
                                    <Check className="size-8" />
                                </div>

                                <h4 className="font-serif text-2xl">
                                    Merci pour votre demande !
                                </h4>

                                <p className="mt-3 max-w-sm text-sm leading-6 text-[#6e7468] dark:text-[#b5b7aa]">
                                    Votre demande de pré-réservation a bien été
                                    prise en compte dans cette maquette. Nous
                                    serions ravis de vous accueillir au Domaine
                                    des Sources.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-7 text-sm font-semibold text-[#606f53] underline underline-offset-4 dark:text-[#b7c5a8]"
                                >
                                    Faire une nouvelle demande
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="eb-name"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Nom & Prénom
                                        </label>
                                        <input
                                            id="eb-name"
                                            name="name"
                                            type="text"
                                            placeholder="Jean Dupont"
                                            required
                                            autoComplete="name"
                                            className="h-12 w-full border border-[#dedbd2] bg-[#faf8f5] px-4 text-sm transition outline-none focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="eb-email"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Adresse Email
                                        </label>
                                        <input
                                            id="eb-email"
                                            name="email"
                                            type="email"
                                            placeholder="jean@exemple.fr"
                                            required
                                            autoComplete="email"
                                            className="h-12 w-full border border-[#dedbd2] bg-[#faf8f5] px-4 text-sm transition outline-none focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="eb-phone"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Numéro de Téléphone
                                        </label>
                                        <input
                                            id="eb-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="00 00 00 00 00"
                                            required
                                            autoComplete="tel"
                                            className="h-12 w-full border border-[#dedbd2] bg-[#faf8f5] px-4 text-sm transition outline-none focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b]"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="eb-guests"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Nombre d'adultes prévus
                                        </label>
                                        <select
                                            id="eb-guests"
                                            name="guests"
                                            required
                                            defaultValue="2"
                                            className="h-12 w-full border border-[#dedbd2] bg-[#faf8f5] px-4 text-sm transition outline-none focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b]"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(
                                                (count) => (
                                                    <option
                                                        key={count}
                                                        value={count}
                                                    >
                                                        {count}{' '}
                                                        {count > 1
                                                            ? 'adultes'
                                                            : 'adulte'}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="eb-message"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Message
                                            <span className="ml-1 font-normal text-[#8b907f]">
                                                (Dates souhaitées &
                                                configurations)
                                            </span>
                                        </label>
                                        <textarea
                                            id="eb-message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Indiquez-nous vos dates de séjour, le type d'hébergement souhaité et toute information utile..."
                                            className="w-full resize-y border border-[#dedbd2] bg-[#faf8f5] px-4 py-3 text-sm leading-6 transition outline-none placeholder:text-[#a3a497] focus:border-[#879477] focus:ring-2 focus:ring-[#879477]/20 dark:border-[#484b40] dark:bg-[#1e211b] dark:placeholder:text-[#777b70]"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-2 inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#606f53] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#4a5740] dark:bg-[#7f916f] dark:hover:bg-[#91a382]"
                                >
                                    Envoyer ma demande de pré-réservation
                                    <ArrowRight className="size-4" />
                                </button>

                                <p className="text-center text-xs leading-5 text-[#929587] dark:text-[#a5a896]">
                                    Votre demande ne constitue pas une
                                    réservation définitive. Nous vous
                                    recontacterons sous 24 heures.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
