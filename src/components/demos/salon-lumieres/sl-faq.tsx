import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment se déroule la réservation en ligne ?",
    answer:
      "Il vous suffit de remplir les 3 étapes de notre assistant de réservation ci-dessous. Notre équipe vérifie nos disponibilités en temps réel et vous confirme le créneau par SMS ou email sous un délai maximum de 2 heures.",
  },
  {
    question: "Quel est le protocole à l'arrivée au salon ?",
    answer:
      "Afin de vivre votre rituel sans précipitation, nous vous conseillons de vous présenter 10 minutes avant l'heure prévue. Cela vous permettra de déguster notre tisane de bienvenue et de remplir votre fiche de diagnostic cutané.",
  },
  {
    question: "Quelles marques cosmétiques utilisez-vous ?",
    answer:
      "Pour le visage, nous utilisons principalement les formules hautement dosées de Biologique Recherche et les soins d'origine naturelle de Caudalie. L'onglerie s'appuie sur la marque végane et respectueuse OPI. Tous nos produits coiffure sont formulés sans sulfates ni parabènes.",
  },
  {
    question: "Quelles sont vos conditions d'annulation ?",
    answer:
      "Vous pouvez reporter ou annuler votre séance gratuitement jusqu'à 24 heures avant l'horaire convenu. En deçà de ce délai réglementaire, 50 % de la valeur de la prestation pourra vous être facturée pour compenser la perte du créneau pour nos équipes.",
  },
];

export function SlFaq() {
  return (
    <section id="faq" className="scroll-mt-6 px-8 py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-12 lg:flex-row lg:gap-20">
        {/* Partie 1 : Présentation */}
        <div className="flex flex-col items-start lg:w-3/7">
          <div className="flex items-center gap-2 pb-6 text-[#C5A059]">
            <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
            <div className="text-sm font-semibold tracking-widest uppercase">Des réponses</div>
          </div>

          <h2 className="pb-6 font-playfair text-3xl font-normal tracking-wide sm:text-6xl">
            Foire aux Questions
          </h2>

          <p className="pb-16 leading-loose text-balance text-muted-foreground">
            Vous vous interrogez sur le déroulement d'un rituel ou sur nos conditions ? Nos réponses
            ci-dessous. Pour toute question spécifique, contactez-nous directement par téléphone.
          </p>

          <a
            href="tel:0000000000"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#C5A059] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#B18D48]"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>Nous appeler : 00 00 00 00 00</span>
          </a>
        </div>

        {/* Partie 2 : FAQ */}
        <div className="min-w-0 lg:w-4/7">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index + 1}`}
                className="border-b border-border py-2"
              >
                <AccordionTrigger className="gap-4 py-5 text-left font-playfair text-lg font-medium hover:text-[#C5A059] hover:no-underline sm:text-xl">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
