import { Mail, MapPin, Phone } from "lucide-react";

export function BpContact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                        Prendre contact
                    </h2>

                    <div className="mx-auto mt-3 h-1 w-20 bg-primary" />

                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                        Pour tout autre type de projet de construction, d'agrandissement ou de
                        questions techniques, n'hésitez pas à nous appeler ou à nous écrire.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    <a
                        href="tel:0000000000"
                        className="flex flex-col items-center gap-4 rounded-xl border bg-card p-8 text-center shadow-sm transition-colors hover:bg-accent"
                    >
                        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Phone className="size-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold uppercase tracking-wide">Téléphone</h3>
                            <p className="mt-2 text-lg text-muted-foreground">00 00 00 00 00</p>
                        </div>
                    </a>

                    <a
                        href="mailto:contact@exemple.com"
                        className="flex flex-col items-center gap-4 rounded-xl border bg-card p-8 text-center shadow-sm transition-colors hover:bg-accent"
                    >
                        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Mail className="size-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold uppercase tracking-wide">E-mail</h3>
                            <p className="mt-2 text-lg text-muted-foreground">
                                contact@exemple.com
                            </p>
                        </div>
                    </a>

                    <div className="flex flex-col items-center gap-4 rounded-xl border bg-card p-8 text-center shadow-sm">
                        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <MapPin className="size-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold uppercase tracking-wide">Adresse</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Siège social : 14 Rue des Artisans, 51100 [Ville]
                                <br />
                                Visite uniquement sur rendez-vous
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-6 text-center">
                    <p className="text-xs leading-6 text-muted-foreground">
                        BTP PRO [Ville] — SAS au capital de 25 000€ — RCS [Ville] B 845 678 901
                        — RGE Qualibat N° E-187265
                    </p>
                </div>
            </div>
        </section>
    );
}