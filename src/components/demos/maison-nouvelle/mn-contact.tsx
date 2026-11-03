import { useState, type FormEvent } from 'react';
import {
    Clock,
    Mail,
    MapPin,
    Phone,
    ShoppingBag,
    Sparkles,
} from 'lucide-react';

export function MnContact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <section
            id="boutique"
            className="bg-[#faf8f5] px-6 py-20 text-[#29251f] lg:px-8 lg:py-28 dark:bg-[#191714] dark:text-[#f3eee6]"
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-14 max-w-2xl">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#bfa888]" />
                        <span className="text-xs font-medium tracking-[0.25em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
                            Nous rencontrer
                        </span>
                    </div>

                    <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
                        La Boutique{' '}
                        <span className="text-[#b49a79] italic">Bastille</span>
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    {/* Informations boutique */}
                    <div className="flex flex-col">
                        <div className="relative overflow-hidden border border-[#ded7cc] bg-white p-7 sm:p-9 dark:border-white/10 dark:bg-[#211e1a]">
                            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-[#bfa888]/10 blur-3xl" />

                            <div className="relative">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex size-12 items-center justify-center bg-[#bfa888]/15 text-[#a58b68]">
                                        <MapPin
                                            className="size-6"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-cormorant text-2xl font-semibold">
                                            Notre showroom de [Ville]
                                        </h3>
                                        <p className="text-xs tracking-wide text-[#9c8263] uppercase dark:text-[#c7aa83]">
                                            [Ville] — 11ème arrondissement
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm leading-7 text-[#766e64] dark:text-[#bdb5a9]">
                                    Plongez dans l'univers minimaliste de notre
                                    concept store historique situé au cœur du
                                    11ème arrondissement.
                                </p>

                                <div className="mt-8 space-y-6">
                                    <div className="flex gap-4">
                                        <MapPin className="mt-1 size-5 shrink-0 text-[#b49a79]" />
                                        <div>
                                            <p className="text-xs font-semibold tracking-wider uppercase">
                                                Adresse
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-[#766e64] dark:text-[#bdb5a9]">
                                                34 Rue de Charonne,
                                                <br />
                                                75011 [Ville]
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <MapPin className="mt-1 size-5 shrink-0 text-[#b49a79]" />
                                        <div>
                                            <p className="text-xs font-semibold tracking-wider uppercase">
                                                Accès métro
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-[#766e64] dark:text-[#bdb5a9]">
                                                Ledru-Rollin (Ligne 8)
                                                <br />
                                                Bastille (Ligne 1, 5, 8)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Phone className="mt-1 size-5 shrink-0 text-[#b49a79]" />
                                        <div>
                                            <p className="text-xs font-semibold tracking-wider uppercase">
                                                Téléphone
                                            </p>
                                            <a
                                                href="tel:+33143567890"
                                                className="mt-1 block text-sm text-[#766e64] transition-colors hover:text-[#b49a79] dark:text-[#bdb5a9]"
                                            >
                                                01 43 56 78 90
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Mail className="mt-1 size-5 shrink-0 text-[#b49a79]" />
                                        <div>
                                            <p className="text-xs font-semibold tracking-wider uppercase">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:contact@exemple.fr"
                                                className="mt-1 block text-sm break-all text-[#766e64] transition-colors hover:text-[#b49a79] dark:text-[#bdb5a9]"
                                            >
                                                contact@exemple.fr
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-9 border-t border-[#e7e1d8] pt-7 dark:border-white/10">
                                    <div className="mb-5 flex items-center gap-3">
                                        <Clock className="size-5 text-[#b49a79]" />
                                        <h4 className="text-xs font-semibold tracking-wider uppercase">
                                            Horaires d'ouverture
                                        </h4>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#766e64] dark:text-[#bdb5a9]">
                                                Lun. – Sam.
                                            </span>
                                            <span className="font-medium">
                                                10h00 – 19h00
                                            </span>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#766e64] dark:text-[#bdb5a9]">
                                                Dimanche
                                            </span>
                                            <span className="font-medium">
                                                14h00 – 18h00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Click & Collect */}
                        <div className="mt-5 flex gap-4 border border-[#bfa888]/30 bg-[#bfa888]/10 p-6">
                            <div className="flex size-11 shrink-0 items-center justify-center bg-[#bfa888]/20 text-[#9c8263] dark:text-[#c7aa83]">
                                <ShoppingBag className="size-5" />
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-cormorant text-xl font-semibold">
                                    Click & Collect
                                    <Sparkles className="size-4 text-[#b49a79]" />
                                </h4>
                                <p className="mt-2 text-sm leading-7 text-[#766e64] dark:text-[#bdb5a9]">
                                    Réservez gratuitement vos articles en ligne
                                    et retirez-les sous 2h en boutique.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="border border-[#ded7cc] bg-white p-7 sm:p-9 dark:border-white/10 dark:bg-[#211e1a]">
                        <div className="mb-8">
                            <p className="text-xs font-semibold tracking-[0.2em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
                                Écrivez-nous
                            </p>
                            <h3 className="mt-2 font-cormorant text-3xl font-semibold">
                                Une question ? Un projet ?
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#766e64] dark:text-[#bdb5a9]">
                                Notre équipe se tient à votre disposition pour
                                vous accompagner.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="flex min-h-72 flex-col items-center justify-center text-center">
                                <div className="flex size-14 items-center justify-center rounded-full bg-[#bfa888]/15 text-[#a58b68]">
                                    <Mail className="size-6" />
                                </div>
                                <h4 className="mt-5 font-cormorant text-2xl font-semibold">
                                    Merci pour votre message !
                                </h4>
                                <p className="mt-2 max-w-sm text-sm leading-7 text-[#766e64] dark:text-[#bdb5a9]">
                                    Votre message a bien été pris en compte dans
                                    cette démonstration.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-xs font-semibold tracking-wider text-[#9c8263] uppercase hover:text-[#bfa888]"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="contact-firstname"
                                            className="mb-2 block text-xs font-semibold"
                                        >
                                            Prénom
                                        </label>
                                        <input
                                            id="contact-firstname"
                                            name="firstname"
                                            type="text"
                                            required
                                            placeholder="Votre prénom"
                                            className="h-12 w-full border border-[#ded7cc] bg-[#faf8f5] px-4 text-sm transition-colors outline-none placeholder:text-[#a69d91] focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-lastname"
                                            className="mb-2 block text-xs font-semibold"
                                        >
                                            Nom
                                        </label>
                                        <input
                                            id="contact-lastname"
                                            name="lastname"
                                            type="text"
                                            required
                                            placeholder="Votre nom"
                                            className="h-12 w-full border border-[#ded7cc] bg-[#faf8f5] px-4 text-sm transition-colors outline-none placeholder:text-[#a69d91] focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-xs font-semibold"
                                    >
                                        Adresse e-mail
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="vous@exemple.fr"
                                        className="h-12 w-full border border-[#ded7cc] bg-[#faf8f5] px-4 text-sm transition-colors outline-none placeholder:text-[#a69d91] focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-subject"
                                        className="mb-2 block text-xs font-semibold"
                                    >
                                        Sujet
                                    </label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        defaultValue=""
                                        className="h-12 w-full border border-[#ded7cc] bg-[#faf8f5] px-4 text-sm transition-colors outline-none focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-white"
                                    >
                                        <option value="" disabled>
                                            Choisir un sujet
                                        </option>
                                        <option value="product">
                                            Question sur un produit
                                        </option>
                                        <option value="order">
                                            Commande & Click and Collect
                                        </option>
                                        <option value="store">
                                            Informations boutique
                                        </option>
                                        <option value="other">
                                            Autre demande
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="mb-2 block text-xs font-semibold"
                                    >
                                        Votre message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full resize-none border border-[#ded7cc] bg-[#faf8f5] px-4 py-3 text-sm transition-colors outline-none placeholder:text-[#a69d91] focus:border-[#bfa888] dark:border-white/10 dark:bg-[#191714] dark:text-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-3 bg-[#bfa888] px-6 py-4 text-xs font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#a99070]"
                                >
                                    ENVOYER LE MESSAGE
                                    <Mail className="size-4" />
                                </button>

                                <p className="text-center text-xs leading-5 text-[#9a9185]">
                                    Vos informations restent confidentielles et
                                    ne sont pas partagées.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
