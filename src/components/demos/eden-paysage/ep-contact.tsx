import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function EpContact() {
    return (
        <section id="contact" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
                    {/* Décoration */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 -right-20 size-80 rounded-full border border-current/10"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-12 -right-8 size-56 rounded-full border border-current/10"
                    />

                    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase opacity-80">
                                Donnons vie à vos idées
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                                Démarrons votre projet
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 opacity-85 sm:text-lg">
                                Une idée d'aménagement extérieur ? Un projet de
                                rénovation complète d'intérieur ? Prenez
                                rendez-vous dès aujourd'hui avec notre bureau
                                d'études dans la région.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                                <a
                                    href="mailto:contact@exemple.fr"
                                    className="inline-flex items-center gap-3 transition-opacity hover:opacity-75"
                                >
                                    <Mail className="size-5 shrink-0" />
                                    <span className="font-medium">
                                        contact@exemple.fr
                                    </span>
                                </a>

                                <a
                                    href="tel:0478563412"
                                    className="inline-flex items-center gap-3 transition-opacity hover:opacity-75"
                                >
                                    <Phone className="size-5 shrink-0" />
                                    <span className="font-medium">
                                        00 00 00 00 00
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <a
                                href="mailto:contact@exemple.fr?subject=Demande%20de%20rendez-vous"
                                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Parlons de votre projet
                                <ArrowRight className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Informations légales */}
                <footer className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-xs leading-6 text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-2">
                        <MapPin className="mt-1 size-4 shrink-0" />
                        <p>
                            Vert & Home SAS — Capital de 50 000 € — RCS [Ville]
                            B 789 654 321 — Siège social : 18 Rue des Jardins,
                            69000 [Ville]
                        </p>
                    </div>

                    <a
                        href="mailto:contact@exemple.fr"
                        className="shrink-0 transition-colors hover:text-foreground"
                    >
                        Nous contacter
                    </a>
                </footer>
            </div>
        </section>
    );
}
