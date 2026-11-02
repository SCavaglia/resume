import { Clock, Mail, MapPin, Phone, Send, TramFront } from 'lucide-react';

const services = [
    'Ménage et Repassage',
    "Garde d'enfants à domicile",
    'Aide et Présence aux seniors',
    'Portage de repas équilibrés',
    'Assistance Administrative',
    'Bricolage et Petits travaux',
];

export function AcQuote() {
    return (
        <section id="devis" className="px-6 py-20 md:py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                    Votre Devis Gratuit & Personnalisé
                </h2>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
                    {/* Agence */}
                    <div className="flex flex-1 flex-col gap-7">
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-bold">
                                <MapPin className="size-6 text-sky-600 dark:text-sky-400" />
                                Notre agence de [Ville]
                            </h3>

                            <p className="mt-4 leading-7 text-muted-foreground">
                                Nos conseillers vous reçoivent dans nos locaux
                                au cœur du quartier des Olivettes, à quelques
                                pas du centre-ville, pour concevoir votre
                                accompagnement sur-mesure.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <MapPin className="size-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    Adresse de l'agence
                                </h4>
                                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                    10 Rue des Olivettes, 44000 [Ville]
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <TramFront className="size-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    Accès en transports
                                </h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Tram lignes 2 & 3 (arrêt Aimé Delrue)
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <Phone className="size-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    Téléphone direct
                                </h4>
                                <a
                                    href="tel:+33240567890"
                                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-sky-600"
                                >
                                    00 00 00 00 00
                                </a>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Du lundi au vendredi de 9h à 18h
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <Mail className="size-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Courriel</h4>
                                <a
                                    href="mailto:contact@exemple.fr"
                                    className="mt-1 inline-block text-sm break-all text-muted-foreground transition-colors hover:text-sky-600"
                                >
                                    contact@exemple.fr
                                </a>
                            </div>
                        </div>

                        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-200">
                            <p className="font-semibold">
                                Agrément d'État SAP N° 849 203 103
                            </p>
                            <p className="mt-2">
                                Paiement par titres CESU (Chèque Emploi Service
                                Universel) préfinancés accepté.
                            </p>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        <h3 className="text-2xl font-bold">
                            Parlons de votre projet
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Décrivez-nous votre besoin. Notre équipe vous
                            recontactera pour vous proposer une solution
                            adaptée.
                        </p>

                        <form
                            className="mt-8 flex flex-col gap-5"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="ac-name"
                                        className="text-sm font-medium"
                                    >
                                        Nom et prénom
                                    </label>
                                    <input
                                        id="ac-name"
                                        name="name"
                                        type="text"
                                        placeholder="Jean Dupont"
                                        required
                                        className="h-11 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="ac-email"
                                        className="text-sm font-medium"
                                    >
                                        Adresse e-mail
                                    </label>
                                    <input
                                        id="ac-email"
                                        name="email"
                                        type="email"
                                        placeholder="jean@exemple.fr"
                                        required
                                        className="h-11 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="ac-phone"
                                        className="text-sm font-medium"
                                    >
                                        Téléphone
                                    </label>
                                    <input
                                        id="ac-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="00 00 00 00 00"
                                        required
                                        className="h-11 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="ac-postal"
                                        className="text-sm font-medium"
                                    >
                                        Code postal
                                    </label>
                                    <input
                                        id="ac-postal"
                                        name="postal_code"
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={5}
                                        placeholder="44000"
                                        required
                                        className="h-11 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="ac-request-service"
                                    className="text-sm font-medium"
                                >
                                    Services souhaités
                                </label>
                                <select
                                    id="ac-request-service"
                                    name="service"
                                    defaultValue=""
                                    required
                                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                >
                                    <option value="" disabled>
                                        Sélectionnez un service
                                    </option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="ac-message"
                                    className="text-sm font-medium"
                                >
                                    Précisez votre demande
                                </label>
                                <textarea
                                    id="ac-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Vos besoins, horaires souhaités, fréquence des interventions..."
                                    className="resize-y rounded-lg border border-input bg-background px-3 py-3 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                            >
                                Demander mon devis gratuit
                                <Send className="size-4" />
                            </button>

                            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                <Clock className="size-3.5" />
                                Réponse pendant nos horaires d'ouverture
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
