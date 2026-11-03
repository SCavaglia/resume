import { ArrowRight, UserRound } from 'lucide-react';

const team = [
    {
        specialty: 'Médecin Généraliste',
        name: 'Dr Marc Dubois',
        description:
            'Diplômé de la Faculté de Médecine de Paris. Spécialisé en médecine préventive, suivi des pathologies chroniques et gériatrie.',
        registration: 'RPPS : 10100874635',
    },
    {
        specialty: 'Chirurgien-Dentiste',
        name: 'Dr Sophie Lambert',
        description:
            "Diplômée d'odontologie. Spécialisée en parodontologie clinique et réhabilitation esthétique de la denture chez l'adulte.",
        registration: 'RPPS : 10099472654',
    },
    {
        specialty: 'Masseur-Kinésithérapeute',
        name: 'Thomas Renard',
        description:
            "Diplômé d'État en Masso-Kinésithérapie. Expertise en rééducation sportive, réhabilitation post-opératoire et thérapie manuelle.",
        registration: 'RPPS : 10103762894',
    },
    {
        specialty: 'Psychologue Clinicienne',
        name: 'Claire Moreau',
        description:
            "Diplômée de l'Université Paris Cité. Prise en charge des troubles anxieux, burn-out, et thérapies cognitives et comportementales (TCC).",
        registration: 'N° ADELI : 759325674',
    },
];

export function NsTeam() {
    return (
        <section id="equipe" className="scroll-mt-6 px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Introduction */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Notre Équipe
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Des professionnels de santé à votre écoute
                    </h2>

                    <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                        Tous nos professionnels de santé sont diplômés d'État et
                        inscrits à leurs ordres professionnels respectifs.
                    </p>
                </div>

                {/* Cartes des praticiens */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Avatar */}
                            <div className="mb-6 flex justify-center">
                                <div className="flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-primary/5">
                                    <UserRound
                                        className="size-12"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            {/* Identité */}
                            <div className="flex flex-1 flex-col">
                                <p className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase">
                                    {member.specialty}
                                </p>

                                <h3 className="text-xl font-semibold tracking-tight">
                                    {member.name}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {member.description}
                                </p>

                                <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                                    {member.registration}
                                </p>

                                <a
                                    href="#rendez-vous"
                                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                >
                                    Réserver
                                    <ArrowRight
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
