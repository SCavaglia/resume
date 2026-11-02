import {
    ArrowUpRight,
    BriefcaseBusiness,
    Calculator,
    ChartNoAxesCombined,
    Landmark,
    Scale,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: Scale,
        title: 'Droit des Affaires',
        description:
            'Conseil et contentieux corporate, rédaction de contrats complexes, fusions-acquisitions, protection de la propriété intellectuelle et structuration de gouvernance.',
        expert: 'Cabinet Dubois',
        number: '01',
    },
    {
        icon: Calculator,
        title: 'Expertise-Comptable',
        description:
            'Tenue et surveillance des comptes, déclarations fiscales de groupe, audit comptable et financier, situations trimestrielles et optimisation de liasse fiscale.',
        expert: 'Cabinet Martin',
        number: '02',
    },
    {
        icon: ChartNoAxesCombined,
        title: 'Conseil en Stratégie',
        description:
            "Accompagnement de restructuration d'exploitation, conduite du changement, plans de croissance organique et transformation digitale des processus métiers B2B.",
        expert: 'M. Laurent',
        number: '03',
    },
    {
        icon: ShieldCheck,
        title: 'Gestion de Patrimoine',
        description:
            "Ingénierie patrimoniale, optimisation de fiscalité personnelle, stratégies de transmission d'entreprise aux successeurs et placements financiers sécurisés.",
        expert: 'M. Legrand',
        number: '04',
    },
    {
        icon: Landmark,
        title: 'Actes Notariés',
        description:
            "Rédaction d'actes authentiques de vente immobilière commerciale, donations entre époux, successions de parts d'associés et conventions familiales.",
        expert: 'Étude Notariale',
        number: '05',
    },
    {
        icon: BriefcaseBusiness,
        title: 'Marketing & Image B2B',
        description:
            "Études de marché ciblées, positionnement de marque B2B de prestige, campagnes d'acquisition professionnelles et de réputation institutionnelle.",
        expert: 'M. Martin',
        number: '06',
    },
];

export function ScServices() {
    return (
        <section
            id="services"
            className="relative isolate overflow-hidden bg-[#f5f3ee] px-6 py-24 sm:px-10 lg:py-32 dark:bg-[#0d1f2d]"
        >
            {/* Lumières d'ambiance */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 -left-48 size-[500px] rounded-full bg-[#b4966e]/[0.07] blur-[130px] dark:bg-[#b4966e]/[0.08]" />
                <div className="absolute -right-48 bottom-0 size-[550px] rounded-full bg-[#52758b]/[0.08] blur-[140px]" />

                <div className="absolute top-20 right-[10%] size-72 rotate-45 rounded-[60px] border border-[#b4966e]/[0.08] dark:border-white/[0.035]" />
                <div className="absolute top-48 -right-20 size-96 rotate-45 rounded-[80px] border border-[#b4966e]/[0.06] dark:border-[#b4966e]/[0.08]" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-5 py-2.5">
                        <Sparkles className="size-3.5 text-[#a17d50] dark:text-[#c6a77e]" />
                        <span className="text-[10px] font-semibold tracking-[0.24em] text-[#92734d] uppercase dark:text-[#d0b997]">
                            Synergie & Expertise
                        </span>
                    </div>

                    <h2 className="font-cormorant text-4xl font-medium tracking-tight text-[#172b39] sm:text-5xl lg:text-6xl dark:text-[#f3f0e9]">
                        Nos Domaines d'
                        <span className="text-[#a17d50] dark:text-[#c6a77e]">
                            Expertise
                        </span>
                    </h2>

                    <div className="my-7 flex items-center justify-center gap-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#b4966e]" />
                        <div className="size-1.5 rotate-45 bg-[#b4966e]" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#b4966e]" />
                    </div>

                    <p className="text-sm leading-8 text-[#687580] sm:text-base dark:text-[#b3c0c8]">
                        Une synergie unique de compétences juridiques, fiscales
                        et de gestion au service exclusif des dirigeants, PME et
                        grands groupes.
                    </p>
                </div>

                {/* Cartes */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className={cn(
                                    'group relative flex flex-col overflow-hidden rounded-2xl border',
                                    'border-[#d9d2c5] bg-white/80 shadow-[0_12px_40px_-25px_rgba(20,35,45,0.2)]',
                                    'transition-all duration-500 hover:-translate-y-2 hover:border-[#b4966e]/60',
                                    'hover:shadow-[0_25px_55px_-25px_rgba(20,35,45,0.3)]',
                                    'dark:border-white/10 dark:bg-[#172b39]/80 dark:shadow-[0_15px_45px_-25px_rgba(0,0,0,0.5)]',
                                    'dark:hover:border-[#b4966e]/50 dark:hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]',
                                )}
                            >
                                {/* Reflet bronze au survol */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#b4966e] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                                <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-[#b4966e]/[0.07] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                                    {/* Numéro et icône */}
                                    <div className="mb-8 flex items-start justify-between">
                                        <div className="flex size-14 items-center justify-center rounded-2xl border border-[#b4966e]/30 bg-gradient-to-br from-[#b4966e]/20 to-[#b4966e]/5 text-[#947044] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#b4966e]/60 group-hover:shadow-[0_8px_25px_-10px_rgba(180,150,110,0.5)] dark:text-[#d1b48b]">
                                            <Icon
                                                className="size-6"
                                                strokeWidth={1.6}
                                            />
                                        </div>

                                        <span className="font-cormorant text-3xl text-[#b4966e]/50 transition-colors group-hover:text-[#a17d50] dark:text-[#b4966e]/40 dark:group-hover:text-[#c6a77e]">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Contenu */}
                                    <h3 className="font-cormorant text-2xl font-semibold text-[#1b303e] transition-colors group-hover:text-[#947044] sm:text-[27px] dark:text-[#f1eee7] dark:group-hover:text-[#d1b48b]">
                                        {service.title}
                                    </h3>

                                    <div className="my-5 h-px w-12 bg-gradient-to-r from-[#b4966e] to-[#b4966e]/10 transition-all duration-500 group-hover:w-24" />

                                    <p className="flex-1 text-sm leading-7 text-[#697681] dark:text-[#b3c0c8]">
                                        {service.description}
                                    </p>

                                    {/* Expert et action */}
                                    <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#d9d2c5]/70 pt-6 dark:border-white/10">
                                        <div>
                                            <span className="block text-[9px] font-semibold tracking-[0.17em] text-[#9a805e] uppercase dark:text-[#b4966e]">
                                                Votre interlocuteur
                                            </span>
                                            <span className="mt-1 block text-sm font-medium text-[#293d49] dark:text-[#e2ded5]">
                                                {service.expert}
                                            </span>
                                        </div>

                                        <a
                                            href="#contact"
                                            className="group/link inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#b4966e]/40 px-4 py-2.5 text-[10px] font-semibold tracking-[0.12em] text-[#896b45] uppercase transition-all duration-300 hover:border-[#b4966e] hover:bg-[#b4966e] hover:text-[#14232d] dark:text-[#d0b997] dark:hover:text-[#14232d]"
                                        >
                                            Prendre RDV
                                            <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Signature */}
                <div className="mt-14 flex items-center justify-center gap-3 text-center">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#b4966e]/50" />
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#92734d] uppercase dark:text-[#b4966e]">
                        Une expertise, une vision commune
                    </span>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#b4966e]/50" />
                </div>
            </div>
        </section>
    );
}
