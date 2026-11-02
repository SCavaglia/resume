import { Mail, MapPin, Phone, ArrowUpRight, Building2 } from 'lucide-react';

export function GpContact() {
    return (
        <section
            id="contact"
            className="bg-[#f4f5f7] px-4 py-20 sm:px-6 lg:py-28 dark:bg-[#0f1115]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    {/* Contact */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#e63946]" />
                            <span className="text-sm font-bold tracking-[0.2em] text-[#e63946] uppercase">
                                Contact
                            </span>
                        </div>

                        <h2 className="max-w-xl text-3xl leading-tight font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
                            Prendre contact avec{' '}
                            <span className="text-[#e63946]">l'Atelier</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
                            Pour toute demande de diagnostic complexe,
                            tarification spéciale de flotte commerciale ou
                            question relative à l'achat d'un véhicule
                            d'occasion, écrivez-nous ou appelez-nous.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="mailto:contact@exemple.fr"
                                className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e63946]/40 hover:shadow-lg hover:shadow-[#e63946]/5 dark:border-white/10 dark:bg-[#191c22]"
                            >
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#e63946]/10 text-[#e63946]">
                                    <Mail className="size-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                                        Adresse e-mail
                                    </p>
                                    <p className="mt-1 truncate font-bold text-neutral-900 dark:text-white">
                                        contact@exemple.fr
                                    </p>
                                </div>

                                <ArrowUpRight className="size-5 shrink-0 text-neutral-400 transition-colors group-hover:text-[#e63946]" />
                            </a>

                            <a
                                href="tel:+33472890123"
                                className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e63946]/40 hover:shadow-lg hover:shadow-[#e63946]/5 dark:border-white/10 dark:bg-[#191c22]"
                            >
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#e63946]/10 text-[#e63946]">
                                    <Phone className="size-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                                        Téléphone
                                    </p>
                                    <p className="mt-1 font-bold text-neutral-900 dark:text-white">
                                        00 00 00 00 00
                                    </p>
                                </div>

                                <ArrowUpRight className="size-5 shrink-0 text-neutral-400 transition-colors group-hover:text-[#e63946]" />
                            </a>
                        </div>
                    </div>

                    {/* Informations */}
                    <div className="flex flex-col gap-5">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 shadow-xl shadow-neutral-900/5 sm:p-9 dark:border-white/10 dark:bg-[#191c22] dark:shadow-black/20">
                            <div className="absolute top-0 right-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#e63946]/10 blur-3xl" />

                            <div className="relative">
                                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                                    <MapPin className="size-6" />
                                </div>

                                <p className="text-xs font-bold tracking-[0.2em] text-[#e63946] uppercase">
                                    Nous trouver
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-neutral-900 dark:text-white">
                                    Garage Pro [Ville]
                                </h3>

                                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                                    32 Avenue de la Mobilité
                                    <br />
                                    69003 [Ville]
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-600 dark:bg-white/5 dark:text-neutral-300">
                                    <MapPin className="size-4 text-[#e63946]" />
                                    Accès tram T3 — Gare de [Ville]
                                </div>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=32+Avenue+de+la+Mobilit%C3%A9+69003+Lyon"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#e63946] transition-colors hover:text-[#c92e3a]"
                                >
                                    Voir l'itinéraire
                                    <ArrowUpRight className="size-4" />
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 dark:border-white/10 dark:bg-[#191c22]">
                            <div className="flex items-center gap-3">
                                <Building2 className="size-5 text-[#e63946]" />
                                <h3 className="font-bold text-neutral-900 dark:text-white">
                                    Informations légales
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                                GARAGE PRO [Ville] — SARL au capital de 100 000€
                                <br />
                                RCS [Ville] B 123 456 789
                                <br />
                                TVA FR 84 123 456 789
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
