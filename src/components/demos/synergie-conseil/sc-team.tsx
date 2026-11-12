import { ArrowUpRight, Award, Scale, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const members = [
  {
    name: "Me Anne Dubois",
    role: "Avocate Associée",
    initials: "AD",
    icon: Scale,
    number: "01",
  },
  {
    name: "Pierre Martin",
    role: "Expert-Comptable Associé",
    initials: "PM",
    icon: Award,
    number: "02",
  },
  {
    name: "Sophie Laurent",
    role: "Consultante Stratégie",
    initials: "SL",
    icon: Sparkles,
    number: "03",
  },
  {
    name: "Marc Legrand",
    role: "Conseiller en Patrimoine",
    initials: "ML",
    icon: Award,
    number: "04",
  },
];

export function ScTeam() {
  return (
    <section
      id="associes"
      className="relative isolate overflow-hidden bg-[#0d1f2d] px-6 py-24 sm:px-10 lg:py-32"
    >
      {/* Lumières et formes décoratives */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-48 size-[550px] rounded-full bg-[#b4966e]/[0.09] blur-[140px]" />
        <div className="absolute -right-48 bottom-0 size-[550px] rounded-full bg-[#52758b]/[0.15] blur-[140px]" />

        <div className="absolute top-24 -right-24 size-[420px] rotate-45 rounded-[80px] border border-white/[0.035]" />
        <div className="absolute top-40 -right-8 size-[300px] rotate-45 rounded-[60px] border border-[#b4966e]/[0.09]" />
        <div className="absolute -bottom-40 -left-32 size-[420px] rotate-45 rounded-[80px] border border-[#b4966e]/[0.06]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-5 py-2.5">
            <Sparkles className="size-3.5 text-[#c6a77e]" />
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#d0b997] uppercase">
              Notre gouvernance
            </span>
          </div>

          <h2 className="font-cormorant text-4xl font-medium tracking-tight text-[#f3f0e9] sm:text-5xl lg:text-6xl">
            Les Associés du <span className="text-[#c6a77e]">Cabinet</span>
          </h2>

          <div className="my-7 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#b4966e]" />
            <div className="size-1.5 rotate-45 bg-[#b4966e]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#b4966e]" />
          </div>

          <p className="text-sm leading-8 text-[#b3c0c8] sm:text-base">
            Des experts de haut niveau diplômés des plus grandes écoles et facultés de droit, unis
            par une charte déontologique d'excellence.
          </p>
        </div>

        {/* Cartes des associés */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => {
            const Icon = member.icon;

            return (
              <article
                key={member.number}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border",
                  "border-white/10 bg-[#172b39]/80 shadow-[0_15px_45px_-25px_rgba(0,0,0,0.6)]",
                  "transition-all duration-500 hover:-translate-y-2 hover:border-[#b4966e]/50",
                  "hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.8)]",
                )}
              >
                {/* Reflet supérieur */}
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#b4966e] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                {/* Zone monogramme */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c3444] via-[#172b39] to-[#102330]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(180,150,110,0.13),transparent_65%)]" />

                  <div className="absolute -top-12 -right-12 size-48 rounded-full border border-[#b4966e]/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -top-5 -right-5 size-32 rounded-full border border-[#b4966e]/10" />
                  <div className="absolute -bottom-20 -left-12 size-48 rounded-full border border-white/[0.05]" />

                  <div className="relative flex size-32 items-center justify-center rounded-full border border-[#b4966e]/40 bg-gradient-to-br from-[#b4966e]/20 to-[#b4966e]/[0.04] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#c6a77e]/70 group-hover:shadow-[0_15px_50px_-10px_rgba(180,150,110,0.2)]">
                    <div className="absolute inset-2 rounded-full border border-[#b4966e]/20" />
                    <span className="font-cormorant text-5xl font-medium tracking-wider text-[#d0b997]">
                      {member.initials}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-[#b4966e] uppercase">
                    <Icon className="size-3.5" />
                    Associé du cabinet
                  </div>

                  <span className="absolute top-6 right-6 font-cormorant text-2xl text-white/20">
                    {member.number}
                  </span>
                </div>

                {/* Informations */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#f3f0e9] transition-colors group-hover:text-[#d0b997]">
                    {member.name}
                  </h3>

                  <div className="my-4 h-px w-10 bg-gradient-to-r from-[#b4966e] to-transparent transition-all duration-500 group-hover:w-20" />

                  <p className="flex-1 text-sm leading-6 text-[#b3c0c8]">{member.role}</p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center justify-between border-t border-white/10 pt-5 text-[10px] font-semibold tracking-[0.15em] text-[#d0b997] uppercase transition-colors hover:text-white"
                  >
                    Consulter le profil
                    <span className="flex size-8 items-center justify-center rounded-full border border-[#b4966e]/30 transition-all duration-300 group-hover:border-[#b4966e] group-hover:bg-[#b4966e] group-hover:text-[#14232d]">
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Signature */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#b4966e]/50" />
          <span className="text-center text-[10px] font-medium tracking-[0.2em] text-[#b4966e] uppercase">
            L'expertise au service de votre ambition
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#b4966e]/50" />
        </div>
      </div>
    </section>
  );
}
