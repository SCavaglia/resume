import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const questions = [
  {
    question: "Quels sont les horaires d’arrivée (check-in) et de départ (check-out) ?",
    answer:
      "Afin de vous accueillir dans les meilleures conditions et de soigner la préparation de votre chambre, les arrivées s’effectuent entre 16h00 et 19h30. Les départs s’effectuent au plus tard à 11h00 le jour de votre fin de séjour. Merci de nous prévenir pour toute arrivée tardive.",
  },
  {
    question: "La piscine est-elle ouverte et chauffée toute l’année ?",
    answer:
      "Notre grand bassin extérieur de 12 × 6 m, entouré de transats et d’une plage en pierre de Gordes, est ouvert et chauffé à 28°C de début mai à mi-octobre, en fonction des conditions climatiques. L’accès est sécurisé et réservé exclusivement à nos résidents.",
  },
  {
    question: "Quelles sont vos conditions de réservation et d’annulation ?",
    answer:
      "Un acompte de 30% du montant total du séjour est demandé lors de la validation finale de votre réservation. L’annulation est gratuite jusqu’à 30 jours avant la date d’arrivée prévue. Au-delà de ce délai, l’acompte de 30% est conservé.",
  },
  {
    question: "Le Domaine dispose-t-il d’un parking sécurisé et de bornes de recharge ?",
    answer:
      "Oui. Le Domaine des Sources dispose d’un parking clos et sécurisé par un portail digicode à l’entrée de la propriété (gratuit). Nous mettons également à disposition de nos hôtes deux bornes de recharge accélérée pour véhicules électriques (charge payante au tarif réel d’électricité).",
  },
  {
    question: "Les animaux de compagnie sont-ils admis au Domaine ?",
    answer:
      "Pour des raisons de tranquillité et de sécurité de notre faune locale et des animaux présents sur le domaine (nos poules provençales en liberté), les chiens et autres animaux de compagnie ne sont pas acceptés dans nos hébergements.",
  },
];

export function EbFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#faf8f5] px-4 py-20 text-[#232720] transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#1e211b] dark:text-[#f0ece3]  "
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Heading */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#c99d63] uppercase">
            <span className="h-px w-10 bg-[#c99d63]" />
            Besoin d’informations ?
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Questions <span className="text-[#4a5740] italic dark:text-[#a2b095]">fréquentes</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-[#6e7468] dark:text-[#b5b7aa]">
            Préparer votre venue sereinement en consultant les réponses aux interrogations de nos
            hôtes.
          </p>

          <div className="mt-8 hidden items-center gap-3 text-sm text-[#8b907f] lg:flex dark:text-[#a5a896]">
            <HelpCircle className="size-5 text-[#c99d63]" strokeWidth={1.5} />
            <span>Une question supplémentaire ? Contactez-nous.</span>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#dedbd2] dark:border-[#414439]">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="border-b border-[#dedbd2] dark:border-[#414439]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 font-serif text-sm text-[#c99d63]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-balance font-serif text-lg leading-snug transition-colors sm:text-xl ${
                        isOpen
                          ? "text-[#606f53] dark:text-[#b7c5a8]"
                          : "text-[#30352c] group-hover:text-[#606f53] dark:text-[#f0ece3] dark:group-hover:text-[#b7c5a8]"
                      }`}
                    >
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#606f53] bg-[#606f53] text-white dark:border-[#7f916f] dark:bg-[#7f916f]"
                        : "border-[#dedbd2] text-[#606f53] group-hover:border-[#606f53] dark:border-[#484b40] dark:text-[#b7c5a8]"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-9 text-sm leading-7 text-[#6e7468] sm:pl-10 dark:text-[#b5b7aa]">
                      {item.answer}
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
