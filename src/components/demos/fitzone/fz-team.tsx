
export function FzTeam() {
    const coaches = [
        {
            id: "alex",
            name: "Alexandre",
            role: "Crossfit et HIIT (level 2)",
            description:
                "Spécialiste en préparation physique et mouvements d'haltérophilie. Il vous poussera à dépasser vos limites avec rigueur et bienveillance.",
            visual: "🏋️",
            gradient: "from-rose-500 to-amber-500",
        },
        {
            id: "marie",
            name: "Marie",
            role: "Yoga Vinyasa & Pilates",
            description:
                "Formée en Inde aux techniques de respiration et postures fluides. Adepte de l'alignement corporel précis et du renforcement profond.",
            visual: "🧘‍♀️",
            gradient: "from-pink-500 to-violet-500",
        },
        {
            id: "thomas",
            name: "Thomas",
            role: "Boxe Anglaise & Cardio",
            description:
                "Ancien compétiteur régional. Expert du travail de jambes et de la gestion de l'effort cardiovasculaire. Intensité garantie.",
            visual: "🏃",
            gradient: "from-blue-500 to-emerald-500",
        },
        {
            id: "sophie",
            name: "Sophie",
            role: "Danse & Pilates",
            description:
                "Passionnée de danse moderne et de renforcement ciblé. Son but : brûler des calories dans la bonne humeur et renforcer la posture profonde.",
            visual: "💃",
            gradient: "from-lime-500 to-teal-500",
        },
    ];

    return (
        <section id="coachs" className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
                <p className="font-semibold tracking-wider text-red-500 uppercase">
                    Les experts
                </p>

                <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
                    Des coachs{" "}
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        diplômés d'État
                    </span>
                </h2>

                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Une équipe de professionnels passionnés, certifiés et à votre écoute pour accompagner chaque séance.
                </p>
            </div>

            {/* Coaches */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {coaches.map((coach) => (
                    <div
                        key={coach.id}
                        className="flex flex-col items-center justify-center overflow-hidden rounded-2xl border px-6 py-8"
                    >
                        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden">
                            <div
                                className={`mx-auto flex size-30 items-center justify-center rounded-full bg-gradient-to-br ${coach.gradient} text-6xl`}
                            >
                                {coach.visual}
                            </div>
                        </div>

                        <h3 className="mt-2 text-center font-oswald text-3xl font-semibold tracking-wider uppercase">
                            {coach.name}
                        </h3>

                        <p className="mt-1 text-center font-semibold tracking-wider text-red-500 uppercase">
                            {coach.role}
                        </p>

                        <p className="mx-auto mt-4 max-w-xl text-center font-light text-muted-foreground">
                            {coach.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}