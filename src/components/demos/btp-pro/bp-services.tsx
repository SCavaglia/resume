import {
    BrickWall,
    Check,
    Droplet,
    Fence,
    PaintRoller,
    SunSnow,
    Zap,
} from "lucide-react";

const services = [
    {
        icon: Droplet,
        title: "Plomberie Technique",
        description:
            "Installations de réseaux d'eau, raccordements sanitaires, pose de chauffe-eau thermodynamiques et recherche de fuites destructives ou non-destructives.",
        features: [
            "Création de salle d'eau de A à Z",
            "Remplacement de réseaux fonte et cuivre",
            "Pose d'adoucisseurs et purificateurs",
        ],
    },
    {
        icon: Zap,
        title: "Électricité Générale",
        description:
            "Mise en conformité selon la norme NF C 15-100. Diagnostic d'installations anciennes, câblage complet, tableaux divisionnaires et domotique connectée.",
        features: [
            "Tableaux électriques & disjoncteurs",
            "Éclairage LED & appareillage premium",
            "Bornes de recharge véhicule électrique",
        ],
    },
    {
        icon: BrickWall,
        title: "Gros Œuvre & Maçonnerie",
        description:
            "Travaux de structures, ouvertures de murs porteurs avec pose d'IPN, dalles de béton armé, fondations, maçonnerie de briques ou parpaings.",
        features: [
            "Ouverture IPN avec calcul de descente de charge",
            "Chape béton fluide autonivelante",
            "Extension & surélévation de bâtiments",
        ],
    },
    {
        icon: PaintRoller,
        title: "Peinture & Revêtements",
        description:
            "Préparation soignée des supports, ratissage d'enduits de lissage, application de peintures écologiques acryliques ou alkydes, pose de parquets et sols souples.",
        features: [
            "Ratissage complet et peinture Airless",
            "Pose de parquet contrecollé & stratifié",
            "Pose de toiles de verre et papiers peints",
        ],
    },
    {
        icon: Fence,
        title: "Menuiseries Extérieures / Intérieures",
        description:
            "Fourniture et pose de fenêtres double ou triple vitrage (PVC, Alu, Bois), portes d'entrée de haute sécurité, volets roulants motorisés et dressings sur mesure.",
        features: [
            "Pose certifiée RGE sous avis technique",
            "Baies vitrées coulissantes en Aluminium",
            "Agencements intérieurs en menuiserie fine",
        ],
    },
    {
        icon: SunSnow,
        title: "Chauffage & Isolation",
        description:
            "Audit énergétique de votre logement. Rénovation thermique globale : isolation thermique par l'extérieur (ITE), isolation des combles et pompes à chaleur.",
        features: [
            "Isolation soufflée dans les combles perdus",
            "Pompes à chaleur Air/Eau de grande marque",
            "Montage de votre dossier MaPrimeRénov'",
        ],
    },
];

export function BpServices() {
    return (
        <section id="prestations" className="py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* En-tête */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                        Nos corps d'état & expertises
                        <span className="mx-auto mt-3 block h-1 w-20 bg-primary" />
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Vérifiez si votre commune est couverte.
                    </p>
                </div>

                {/* Prestations */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-md border bg-background p-8 shadow-xl transition-transform hover:-translate-y-2 dark:bg-white/3"
                            >
                                {/* Décoration supérieure */}
                                <div className="absolute top-0 right-0 left-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                                <span className="text-sm font-semibold text-muted-foreground">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Icône */}
                                <div className="group mt-4 w-fit border bg-secondary p-3 transition-colors group-hover:bg-primary [&_svg]:size-8 [&_svg]:text-primary [&_svg]:transition-colors [&_svg]:group-hover:text-secondary">
                                    <Icon />
                                </div>

                                {/* Texte */}
                                <h3 className="mt-4 font-semibold uppercase">
                                    {service.title}
                                </h3>

                                <p className="mt-3 font-cabin leading-7 text-muted-foreground">
                                    {service.description}
                                </p>

                                {/* Liste des caractéristiques */}
                                <div className="mx-auto mt-3 h-0.5 w-1/2 bg-secondary" />

                                <ul className="mt-3 space-y-3">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 pl-4"
                                        >
                                            <Check className="mt-1 size-4 shrink-0 text-green-700 dark:text-green-500" />
                                            <span className="font-cabin text-sm leading-6">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}