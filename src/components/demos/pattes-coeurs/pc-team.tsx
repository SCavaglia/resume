import { Award, BadgeCheck, Heart, PawPrint } from 'lucide-react';

const team = [
    {
        name: 'Dr. Sophie Laurent',
        role: 'Docteur Vétérinaire',
        image: '/demos/pattes-coeurs/team-sophie.jpg',
        credential: "Diplômée de l'ENVA · Ordre n° 18274",
        description:
            "Diplômée de l'École Nationale Vétérinaire d'Alfort (ENVA), inscrite à l'Ordre National sous le n° 18274. Spécialiste en chirurgie des tissus mous et imagerie médicale.",
        specialty: 'Chirurgie & imagerie',
    },
    {
        name: 'Thomas Dubois',
        role: 'Éducateur Comportementaliste',
        image: '/demos/pattes-coeurs/team-thomas.jpg',
        credential: "Certifié ACACED · 8 ans d'expérience",
        description:
            "Certifié d'État (ACACED n° 44-329) et fort de 8 ans d'accompagnement canin. Expert en rééducation positive et méthodes d'apprentissage douces et amicales.",
        specialty: 'Éducation positive',
    },
    {
        name: 'Julie Moreau',
        role: 'Toiletteuse Comportementale',
        image: '/demos/pattes-coeurs/team-julie.jpg',
        credential: 'Titulaire du CTM Toiletteur',
        description:
            'Titulaire du CTM Toiletteur Canin et Félin. Formée aux soins de peaux sensibles et au toilettage à faible stress (Low-Stress Grooming) pour les animaux craintifs.',
        specialty: 'Toilettage doux',
    },
    {
        name: 'Marine Petit',
        role: 'Ostéopathe Animalier',
        image: '/demos/pattes-coeurs/team-marine.jpg',
        credential: 'Registre national · N° OA 419',
        description:
            "Inscrite sur le registre national d'aptitude de l'Ordre sous le n° OA 419. Accompagne le rétablissement moteur et soulage les maux chroniques.",
        specialty: 'Mobilité & bien-être',
    },
];

export function PcTeam() {
    return (
        <section
            id="equipe"
            className="relative overflow-hidden bg-[#f5f1eb] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
        >
            {/* Décoration */}
            <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
                        <Heart className="size-4" />
                        Une équipe qualifiée
                    </div>

                    <h2 className="font-cormorant text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
                        Vos Praticiens Dévoués
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                        <span className="text-[#a88b6b]">✦</span>
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                    </div>

                    <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
                        Des vétérinaires, soignants et thérapeutes diplômés
                        d'État inscrits aux ordres professionnels nationaux.
                    </p>
                </div>

                {/* Équipe */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="group overflow-hidden rounded-2xl border border-[#e8dfd3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6b5845]/10 dark:border-[#494035] dark:bg-[#2c2721] dark:hover:shadow-black/20"
                        >
                            {/* Portrait */}
                            <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e8dfd3] dark:bg-[#41372d]">
                                <img
                                    src={member.image}
                                    alt={`Portrait de ${member.name}, ${member.role.toLowerCase()}`}
                                    loading="lazy"
                                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                                    <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
                                        {member.specialty}
                                    </span>
                                    <div className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                                        <PawPrint className="size-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Informations */}
                            <div className="p-6">
                                <h3 className="font-cormorant text-2xl leading-tight font-semibold text-[#443a30] dark:text-[#f0e6da]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#92785b] dark:text-[#d0b99c]">
                                    {member.role}
                                </p>

                                <div className="my-5 h-px bg-[#eee8e0] dark:bg-[#494035]" />

                                <p className="min-h-32 text-sm leading-7 text-[#776e64] dark:text-[#bdb2a5]">
                                    {member.description}
                                </p>

                                <div className="mt-5 flex items-start gap-2 rounded-lg bg-[#f5f1eb] p-3 dark:bg-[#41372d]">
                                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-[#92785b] dark:text-[#d0b99c]" />
                                    <span className="text-xs leading-5 font-medium text-[#796b5b] dark:text-[#d0b99c]">
                                        {member.credential}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Signature */}
                <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex size-12 items-center justify-center rounded-full border border-[#c5a98b]/40 bg-[#b49a7b]/10 text-[#92785b] dark:text-[#d0b99c]">
                        <Award className="size-5" />
                    </div>

                    <p className="max-w-xl font-cormorant text-xl text-[#756b60] italic sm:text-2xl dark:text-[#c4b6a5]">
                        Des compétences complémentaires, une même passion :
                        prendre soin de vos compagnons.
                    </p>
                </div>
            </div>
        </section>
    );
}
