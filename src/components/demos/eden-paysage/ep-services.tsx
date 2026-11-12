import {
  Flower2,
  Hammer,
  Droplets,
  Trees,
  Fence,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}[] = [
  {
    icon: PanelsTopLeft,
    title: "Conception paysagère",
    description:
      "Des plans personnalisés et des visualisations 3D pour imaginer votre futur jardin avant sa réalisation.",
    number: "01",
  },
  {
    icon: Trees,
    title: "Création de jardins",
    description:
      "Des espaces extérieurs harmonieux, pensés selon vos envies, votre terrain et votre mode de vie.",
    number: "02",
  },
  {
    icon: Hammer,
    title: "Aménagement extérieur",
    description:
      "Terrasses, allées et espaces de vie conçus avec des matériaux durables et des finitions soignées.",
    number: "03",
  },
  {
    icon: Droplets,
    title: "Arrosage & irrigation",
    description:
      "Des systèmes d'arrosage adaptés à vos plantations pour préserver l'eau et simplifier l'entretien.",
    number: "04",
  },
  {
    icon: Fence,
    title: "Clôtures & délimitations",
    description:
      "Des solutions esthétiques pour structurer votre terrain, préserver votre intimité et sécuriser vos espaces.",
    number: "05",
  },
  {
    icon: Flower2,
    title: "Entretien de jardins",
    description:
      "Taille, soin des végétaux et entretien saisonnier pour conserver un jardin beau et en pleine santé.",
    number: "06",
  },
];

export function EpServices() {
  return (
    <section id="services" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Nos expertises
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Des solutions pour votre jardin
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            De la conception à l'entretien, nous donnons vie à vos projets extérieurs avec passion
            et savoir-faire.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-6 text-5xl font-semibold tracking-tighter text-muted-foreground/10 transition-colors group-hover:text-primary/15"
                >
                  {service.number}
                </span>

                <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" strokeWidth={1.7} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-12 bg-primary/50 transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
