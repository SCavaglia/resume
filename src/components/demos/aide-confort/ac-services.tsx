import {
  ArrowRight,
  Baby,
  ClipboardList,
  CookingPot,
  HeartHandshake,
  House,
  Leaf,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Ménage & Repassage",
    description:
      "Entretien courant de votre maison, nettoyage en profondeur, vitres, repassage de votre linge. Une fée du logis attitrée pour un intérieur impeccable.",
    price: "12,00 €/h",
  },
  {
    icon: Baby,
    title: "Garde d'enfants",
    description:
      "Baby-sitting ponctuel, garde périscolaire, sorties d'école ou de crèche. Vos enfants sont encadrés en toute sécurité avec des activités ludo-éducatives.",
    price: "13,00 €/h",
  },
  {
    icon: HeartHandshake,
    title: "Aide aux Seniors",
    description:
      "Accompagnement aux gestes du quotidien, présence bienveillante, aide aux courses, préparation des repas et stimulation cognitive.",
    price: "14,00 €/h",
  },
  {
    icon: CookingPot,
    title: "Portage de repas",
    description:
      "Livraison quotidienne à domicile de repas sains et équilibrés, élaborés par des diététiciens. Adaptation aux régimes spécifiques sans sel ou sans sucre.",
    price: "7,50 €/repas",
  },
  {
    icon: ClipboardList,
    title: "Aide Administrative",
    description:
      "Tri du courrier, classement de documents, aide aux déclarations en ligne, rédaction de courriers et assistance aux formalités complexes.",
    price: "15,00 €/h",
  },
  {
    icon: Leaf,
    title: "Petits Travaux & Jardin",
    description:
      "Menues réparations, montage de meubles, pose de cadres, taille de haies légère, tonte de pelouse ou entretien de terrasse. Un coup de main indispensable.",
    price: "17,50 €/h",
  },
];

export function AcServices() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
            Nos services
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos Prestations à Domicile
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Des solutions sur-mesure adaptées à chaque étape de la vie, réalisées par des
            professionnels rigoureusement recrutés et formés.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl sm:p-8 dark:hover:border-sky-800"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-950 dark:text-sky-300 dark:group-hover:bg-sky-500">
                  <Icon className="size-7" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    Dès{" "}
                    <span className="text-lg font-bold text-sky-700 dark:text-sky-400">
                      {service.price}
                    </span>{" "}
                    <span className="text-xs">net*</span>
                  </p>

                  <a
                    href="#simulateur"
                    className="group/link mt-4 inline-flex items-center gap-2 font-semibold text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Simuler
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * Tarifs indicatifs après avantage fiscal, sous réserve d'éligibilité.
        </p>
      </div>
    </section>
  );
}
