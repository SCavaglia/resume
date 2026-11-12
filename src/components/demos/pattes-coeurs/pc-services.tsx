import { Activity, Bone, Dog, HeartPulse, Scissors, Stethoscope, Trees } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation Vétérinaire",
    description:
      "Vaccination, médecine préventive, chirurgies spécialisées et examens d'imagerie. Un suivi sur mesure dans des salles adaptées et calmes pour minimiser le stress.",
    number: "01",
  },
  {
    icon: Scissors,
    title: "Toilettage Thérapeutique",
    description:
      "Bains relaxants, tonte hygiénique, nettoyage d'oreilles et coupe de griffes adaptés à la sensibilité cutanée de chaque chien, chat ou rongeur.",
    number: "02",
  },
  {
    icon: Trees,
    title: "Pension / Garde Nature",
    description:
      "Garde dans nos chalets individuels douillets avec un accès quotidien à notre grand parc arboré clôturé. Activités et tendresse au programme de leur séjour.",
    number: "03",
  },
  {
    icon: Dog,
    title: "Éducation Canine Positive",
    description:
      "Apprentissage basé sur le renforcement positif et la socialisation. Compréhension mutuelle renforcée et bilans comportementaux individuels à domicile.",
    number: "04",
  },
  {
    icon: Bone,
    title: "Ostéopathie Animale",
    description:
      "Soulagement des douleurs musculaires et articulaires, amélioration de la souplesse. Parfait pour les animaux seniors ou après un effort sportif intense.",
    number: "05",
  },
  {
    icon: HeartPulse,
    title: "Promenade & Pet-sitting",
    description:
      "Visite de courtoisie et balade active dans les parcs nantais en cas d'absence. Pour que votre animal conserve ses habitudes dans son cocon familier.",
    number: "06",
  },
];

export function PcServices() {
  return (
    <section
      id="services"
      className="scroll-mt-6 relative overflow-hidden bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute top-20 -right-32 size-80 rounded-full bg-[#c5a98b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
            <Activity className="size-4" />
            Ce que nous faisons
          </div>

          <h2 className="font-playfair text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
            Nos Services de Soins
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b49a7b]/60" />
            <span className="text-[#a88b6b]">✦</span>
            <span className="h-px w-12 bg-[#b49a7b]/60" />
          </div>

          <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
            Une approche globale combinant médecine conventionnelle de pointe et soins naturels
            alternatifs pour veiller sur leur santé.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e9e1d7] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c5a98b]/60 hover:shadow-xl hover:shadow-[#6b5845]/10 dark:border-[#494035] dark:bg-[#2c2721] dark:hover:border-[#9e8467] dark:hover:shadow-black/20"
              >
                {/* Numéro décoratif */}
                <span className="absolute top-5 right-6 font-playfair text-5xl font-semibold text-[#eee8e0] transition-colors duration-300 group-hover:text-[#e3d5c5] dark:text-[#40382f] dark:group-hover:text-[#514537]">
                  {service.number}
                </span>

                {/* Icône */}
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-[#f2ece4] text-[#92785b] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#92785b] group-hover:text-white dark:bg-[#41372d] dark:text-[#d0b99c] dark:group-hover:bg-[#a88b6b] dark:group-hover:text-[#211e1a]">
                  <Icon className="size-7" strokeWidth={1.7} />
                </div>

                <h3 className="mb-3 font-playfair text-2xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                  {service.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-[#776e64] dark:text-[#bdb2a5]">
                  {service.description}
                </p>

                {/* Accent inférieur */}
                <div className="mt-7 h-0.5 w-10 rounded-full bg-[#c5a98b] transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>

        {/* Bas de section */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#8a7e70] dark:text-[#b5a797]">
            Chaque animal est unique. Nos soins s'adaptent à ses besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
