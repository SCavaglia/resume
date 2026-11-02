import { ArrowRight, CheckCircle } from 'lucide-react';

export function NsHero() {
    return (
        <section id="accueil" className="px-6 py-16 sm:py-24 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 lg:flex-row">
                {/* Partie gauche : Texte */}
                <div className="flex max-w-2xl flex-col items-start gap-6">
                    <p className="flex gap-2 rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-sky-500 uppercase">
                        <CheckCircle />
                        Cabinet pluridisciplinaire d'excellence
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        Votre santé,
                        <br />
                        <span className="text-primary">
                            notre engagement quotidien.
                        </span>
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        NovaSanté réunit des praticiens de confiance au sein
                        d'une structure moderne et accueillante. Prenez
                        rendez-vous en ligne pour des soins coordonnés de haute
                        qualité.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="#rendez-vous"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            Prendre rendez-vous
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </a>

                        <a
                            href="#tarifs"
                            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                        >
                            Consulter les tarifs
                        </a>
                    </div>
                </div>

                {/* Partie droite : Photo */}
                <div className="relative">
                    <img
                        src="/demos/nova-sante/clinic_lobby.webp"
                        alt="Cabinet médical NovaSanté, moderne et accueillant"
                        className="aspect-[3/4] w-xs rounded-2xl object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
