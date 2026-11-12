import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment entretenir mon mobilier en chêne massif ?",
    answer:
      "Nos créations en chêne massif sont finies avec une huile-cire protectrice naturelle. Pour l'entretien quotidien, un simple chiffon doux en microfibre légèrement humide suffit. Évitez les produits chimiques agressifs et les sources de chaleur directe. Nous vous conseillons de réappliquer une fine couche d'huile protectrice naturelle (huile de lin ou cire d'abeille d'artisan) une fois par an pour nourrir le bois et lui redonner son éclat.",
  },
  {
    question: "La vaisselle et les vases en grès émaillé passent-ils au lave-vaisselle ?",
    answer:
      "Oui. Notre grès est cuit à haute température (1280°C), ce qui le rend totalement étanche, vitrifié et très résistant. La vaisselle en grès émaillé passe sans problème au lave-vaisselle ainsi qu’au micro-ondes. Pour les vases de collection à émail céladon délicat, nous conseillons un lavage doux à la main pour préserver les fines craquelures de surface.",
  },
  {
    question: "Comment se patine le cuir à tannage végétal de ma maroquinerie ?",
    answer:
      "Le cuir à tannage végétal est une matière vivante qui réagit à son environnement (lumière du soleil, humidité, frottements). Au fil des mois, il va développer une patine unique et s'assouplir. Sa couleur d'origine va s'intensifier pour prendre une nuance ambre/cognac noble. Pour l'entretenir, appliquez occasionnellement un lait nourrissant pour cuir incolore à base de cire d'abeille.",
  },
  {
    question: "Proposez-vous la personnalisation et la gravure sur-mesure ?",
    answer:
      "Absolument. Qu'il s'agisse de graver des initiales dans le cuir de votre portefeuille, d'ajuster le diamètre de votre bague en argent, ou d'inscrire une date sous la base d'un tabouret en chêne, nos artisans proposent la gravure personnalisée sur demande. Spécifiez vos besoins lors de l'envoi de votre demande de contact.",
  },
  {
    question: "Comment expédiez-vous les pièces d’art fragiles ?",
    answer:
      "La livraison de pièces d'art fragiles requiert un soin extrême. Chaque céramique ou bijou est enveloppé dans plusieurs couches de protection biodégradable et calé dans un double carton renforcé. Les meubles en bois massif sont expédiés par un transporteur spécialisé en mobilier d'art, avec prise de rendez-vous à votre domicile. Toutes nos expéditions sont couvertes par une assurance ad valorem.",
  },
];

export function AtcFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F8F5EF] px-6 py-20 text-[#30291F] sm:px-10 lg:py-28 dark:bg-[#201D18] dark:text-[#F4EDE1]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#A27B45] uppercase">
            Conseils d’Artisans
          </p>
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            Questions &amp; Entretien
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6F665A] sm:text-base dark:text-[#C6BBAA]">
            Découvrez comment prendre soin de vos pièces uniques pour préserver leur beauté à
            travers les années.
          </p>
        </div>

        <div className="border-t border-[#DED4C4]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#DED4C4]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#A27B45] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-sm leading-7 text-[#6F665A] sm:text-base dark:text-[#C6BBAA]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
