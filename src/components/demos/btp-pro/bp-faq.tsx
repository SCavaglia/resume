import { CheckCircle2, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quels sont vos délais d'intervention pour un devis à [Ville] ?",
    answer:
      "Nous intervenons sous 24 à 48 heures ouvrées pour réaliser le métré sur place à [Ville] et dans les communes limitrophes. Votre devis final vous est envoyé par e-mail sous 3 jours maximum après notre visite.",
  },
  {
    question: "Quels travaux permettent de bénéficier des aides de l'État ?",
    answer:
      "En tant qu'entreprise certifiée RGE, nos travaux d'isolation, de menuiseries isolantes et de pompes à chaleur peuvent être éligibles à MaPrimeRénov', aux primes CEE et à l'Éco-PTZ, selon les conditions applicables.",
  },
  {
    question: "Vos travaux de plomberie et électricité sont-ils garantis ?",
    answer:
      "Oui, nos travaux sont couverts par les garanties et assurances applicables, notamment notre assurance décennale souscrite auprès de la SMABTP lorsque celle-ci s'applique.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Pour les projets de rénovation complète, les modalités de paiement sont précisées dans le devis selon l'avancement du chantier.",
  },
];

const warrantyDetails = [
  "Recherche et colmatage de fuite d'eau",
  "Remplacement de disjoncteur brûlé",
  "Dégorgement urgent de canalisations",
  "Remise en route de chaudière en hiver",
];

export function BpFaq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Questions fréquentes & Garanties
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-primary" />
        </div>

        <div className="mt-8 flex flex-col justify-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* FAQ */}
          <div className="min-w-0 flex-1 lg:max-w-xl">
            <Accordion className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-md border bg-white/3 p-4 shadow-xl last:border-b"
                >
                  <AccordionTrigger className="text-left text-balance text-xl uppercase [&>svg]:size-6 [&>svg]:text-primary">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="font-cabin text-base tracking-wide">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Dépannage urgent */}
          <div className="h-fit w-full rounded-2xl border bg-card p-6 shadow-sm sm:p-8 lg:max-w-md">
            <div className="-mt-12 mb-8 w-fit rounded-lg border-3 border-primary bg-primary p-2 text-sm font-semibold tracking-wider text-primary-foreground uppercase">
              Urgences 24/7
            </div>

            <h3 className="mt-3 text-2xl font-bold tracking-tight">
              Besoin d’un dépannage immédiat ?
            </h3>

            <p className="mt-4 font-cabin leading-7 text-muted-foreground">
              Une fuite d’eau majeure ? Plus d’électricité sur votre tableau général ? Notre équipe
              d’astreinte intervient 7j/7 et 24h/24 dans toute la région de [Ville].
            </p>

            <div className="mt-6 flex items-center gap-3 border bg-white/3 p-4 text-lg leading-8 text-muted-foreground">
              <div className="flex size-18 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                <Phone className="animate-ring-phone size-8 text-red-500" />
              </div>

              <div className="min-w-0">
                <p className="tracking-wide uppercase">Appelez-nous</p>
                <a
                  href="tel:0000000000"
                  className="text-3xl font-semibold text-foreground hover:underline"
                >
                  00 00 00 00 00
                </a>
              </div>
            </div>

            <ul className="mt-6 space-y-3 border-t pt-6">
              {warrantyDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-3 font-cabin text-base leading-6">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
