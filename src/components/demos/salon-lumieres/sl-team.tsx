import { Reveal } from "@/components/animations/reveal";

const team = [
  {
    id: "isa",
    name: "Isabelle Moreau",
    role: "Fondatrice & Directrice Technique",
    description:
      "Esthéticienne diplômée d'État CIDESCO avec 14 ans d'expertise acquise à Paris et New York. Passionnée par la médecine douce et le soin de peau.",
    image: "/resume/salon-lumieres/team-01.jpg",
  },
  {
    id: "clara",
    name: "Clara Vidal",
    role: "Experte Dermo-Soin & Massages",
    description:
      "Spécialiste en diagnostics et massages thérapeutiques du visage, certifiée en thérapies tissulaires par la maison Biologique Recherche.",
    image: "/resume/salon-lumieres/team-02.jpg",
  },
];

export function SlTeam() {
  return (
    <section id="equipe" className="bg-[#faf6f0] py-24 dark:bg-[#24211d]">
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}
        <Reveal direction="up">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-[#C5A059] uppercase">
              <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
              L'Excellence technique
            </div>

            <h2 className="pt-8 text-center font-playfair text-5xl leading-none">
              Des praticiennes diplômées
              <span className="block text-center text-[#6E6E73] italic dark:text-muted-foreground">
                et passionnées
              </span>
            </h2>

            <p className="pt-6 text-center text-muted-foreground">
              Formées en continu aux rituels de soin exclusifs et aux nouvelles technologies
              esthétiques.
            </p>
          </div>
        </Reveal>

        {/* Team */}
        <div className="mt-8 flex flex-col justify-center gap-6 md:flex-row">
          {team.map((member, index) => (
            <Reveal
              key={member.id}
              direction="up"
              delay={index * 150}
              className="flex max-w-xs flex-col items-center overflow-hidden rounded-md border bg-background p-10"
            >
              <div className="aspect-[2/3] w-full overflow-hidden">
                <img src={member.image} alt={member.name} className="size-full object-cover" />
              </div>

              <h3 className="pt-8 text-center font-playfair text-3xl font-semibold tracking-wider [font-variant-caps:small-caps]">
                {member.name}
              </h3>

              <p className="pt-2 text-center text-xs font-semibold tracking-wider text-[rgb(197,160,89)] uppercase">
                {member.role}
              </p>

              <p className="mx-auto mt-6 max-w-xl text-center font-light text-muted-foreground">
                {member.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
