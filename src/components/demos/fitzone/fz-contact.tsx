import { useState } from "react";
import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";

export function FzContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        objective: "",
        message: "",
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("Demande de contact :", form);
    }

    return (
        <section id="contact" className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
            {/* Heading */}
            <div className="mb-10 mx-auto max-w-2xl text-center">
                <p className="font-semibold tracking-wider text-red-500 uppercase">
                    Inscription & Contact
                </p>

                <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
                    Prêt à{" "}
                    <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        t'entraîner ?
                    </span>
                </h2>

                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Renseignez vos coordonnées pour valider votre séance d'essai offerte ou votre pré-inscription.
                </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-2">
                {/* Contact information */}
                <div className="w-full space-y-8">
                    <div className="flex items-center gap-3">
                        <Dumbbell className="size-6" />
                        <h3 className="text-xl font-semibold">Nos coordonnées</h3>
                    </div>

                    <div className="ml-4 space-y-5">
                        <div className="flex gap-4">
                            <MapPin className="size-10 shrink-0 rounded-xl border border-red-500/50 bg-red-500/10 p-2" />
                            <div>
                                <p className="font-medium">Adresse du Club</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    42 Rue du Sport, 69002 [Ville] (Presqu'île)
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Phone className="size-10 shrink-0 rounded-xl border border-red-500/50 bg-red-500/10 p-2" />
                            <div>
                                <p className="font-medium">Téléphone</p>
                                <a href="tel:0472345678" className="mt-1 text-sm text-muted-foreground hover:text-foreground">
                                    04 72 34 56 78
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Mail className="size-10 shrink-0 rounded-xl border border-red-500/50 bg-red-500/10 p-2" />
                            <div>
                                <p className="font-medium">Email de contact</p>
                                <a href="mailto:contact@fitzone-[Ville].fr" className="mt-1 text-sm text-muted-foreground hover:text-foreground">
                                    contact@fitzone-[Ville].fr
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Opening hours */}
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold">Horaires d'ouverture</h3>

                        <div className="mt-4 space-y-3">
                            <div className="flex justify-between gap-4 text-sm">
                                <span className="text-muted-foreground">Lundi – Vendredi</span>
                                <span className="font-medium">06:00 – 22:00</span>
                            </div>

                            <div className="flex justify-between gap-4 text-sm">
                                <span className="text-muted-foreground">Samedi – Dimanche</span>
                                <span className="font-medium">08:00 – 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="w-full rounded-2xl border bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">Demande d'informations</h3>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium uppercase tracking-wide">
                                Nom & Prénom
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Votre nom et prénom"
                                value={form.name}
                                onChange={(event) => setForm({ ...form, name: event.target.value })}
                                className="h-12 w-full rounded-md border bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Adresse Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="vous@exemple.fr"
                                value={form.email}
                                onChange={(event) => setForm({ ...form, email: event.target.value })}
                                className="h-12 w-full rounded-md border bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                                Numéro de Téléphone
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Votre numéro de téléphone"
                                value={form.phone}
                                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                                className="h-12 w-full rounded-md border bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="objective" className="text-sm font-medium">
                                Objectif de remise en forme
                            </label>
                            <select
                                id="objective"
                                name="objective"
                                value={form.objective}
                                onChange={(event) => setForm({ ...form, objective: event.target.value })}
                                className="h-12 w-full rounded-md border bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            >
                                <option value="">Choisissez votre objectif</option>
                                <option value="weight-loss">Perte de poids</option>
                                <option value="muscle-gain">Prise de muscle</option>
                                <option value="fitness">Remise en forme</option>
                                <option value="wellness">Bien-être</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Détails complémentaires..."
                                value={form.message}
                                onChange={(event) => setForm({ ...form, message: event.target.value })}
                                className="w-full resize-y rounded-md border bg-background px-3 py-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-20 w-full cursor-pointer rounded-md bg-linear-to-br from-red-500 to-orange-500 text-xl font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg"
                        >
                            Envoyer la demande — Essai offert
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}