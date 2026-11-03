
import { Clock } from "lucide-react";

export function FzServices() {
    const services = [
        {
            icon: "🏋️",
            title: "CrossFit",
            subtitle: "Lun / Mer / Ven — 7h & 18h",
            description:
                "Entraînements fonctionnels intenses (WOD). Améliorez votre force athlétique, endurance et explosivité avec du matériel haut de gamme.",
        },
        {
            icon: "🧘",
            title: "Yoga Vinyasa",
            subtitle: "Mar / Jeu / Sam — 9h & 17h",
            description:
                "Fluidité, respiration, postures toniques et équilibre intérieur. Parfait pour améliorer votre souplesse et évacuer les tensions.",
        },
        {
            icon: "🥊",
            title: "Boxe Anglaise",
            subtitle: "Lun / Mer / Ven — 12h & 19h",
            description:
                "Développez votre technique de frappe, votre jeu de jambes et votre cardio via du shadow boxing et du sparring sécurisé.",
        },
        {
            icon: "💃",
            title: "Danse Fitness",
            subtitle: "Mar / Jeu — 12h & 18h",
            description:
                "Associez danse, rythmes entraînants et entraînement cardio. Brûlez un maximum de calories tout en vous amusant sur de la musique rythmée.",
        },
        {
            icon: "🏃",
            title: "HIIT Cardio",
            subtitle: "Lun / Mer / Ven / Sam — 8h",
            description:
                "Entraînement par intervalles de haute intensité. Élimination maximale des graisses et amélioration drastique du souffle en 30-45 minutes.",
        },
        {
            icon: "🤸",
            title: "Pilates",
            subtitle: "Mar / Jeu — 10h & 16h",
            description:
                "Renforcement de la sangle abdominale profonde, correction de l'alignement et de la posture. Idéal pour un dos fort et des muscles longs.",
        },
    ];

    return (
        <section id="cours" className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
                <p className="font-semibold tracking-wider text-red-500 uppercase">
                    Programmes d'entraînement
                </p>

                <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
                    Trouve{" "}
                    <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        ton cours
                    </span>
                </h2>

                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Du CrossFit à haute intensité au Yoga relaxant, nos cours s'adaptent à vos objectifs et à tous les
                    niveaux.
                </p>
            </div>

            {/* Services */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="group relative rounded-xl p-4 py-12 shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-white/3"
                    >
                        <div className="absolute inset-y-0 left-0 w-1 rounded-tl-md rounded-bl-md bg-linear-to-b from-red-500 to-orange-500 transition-all duration-300 group-hover:w-2" />

                        <div className="ml-4 text-5xl">{service.icon}</div>

                        <h3 className="mt-4 font-oswald text-2xl font-bold tracking-wide uppercase">
                            {service.title}
                        </h3>

                        <p className="mt-4 flex items-center gap-2 font-semibold text-red-400">
                            <Clock className="size-5 shrink-0" />
                            {service.subtitle}
                        </p>

                        <p className="mt-4 font-light text-muted-foreground">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
