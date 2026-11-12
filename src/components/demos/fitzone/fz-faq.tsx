import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FzFaq() {
  const items = [
    {
      question: "Comment se passe la première séance d'essai gratuite ?",
      answer:
        "Il vous suffit de remplir le formulaire d'inscription ou de sélectionner un cours sur le planning. À votre arrivée, un de nos coachs certifiés d'État vous accueillera, vous fera visiter le club et vous accompagnera sur votre première séance pour s'assurer que vous évoluez en toute sécurité.",
    },
    {
      question: "Un certificat médical est-il obligatoire pour s'inscrire ?",
      answer:
        "Oui, conformément à la réglementation française pour les établissements sportifs (Code du sport), un certificat médical de non-contre-indication à la pratique du fitness/CrossFit datant de moins de 3 mois est requis pour valider votre abonnement définitif.",
    },
    {
      question: "Les abonnements sont-ils avec ou sans engagement ?",
      answer:
        "Par défaut, l'ensemble de nos formules d'abonnement mensuel (Découverte, Illimité, Premium) sont sans engagement, résiliables sur simple demande par mail avant le 20 du mois en cours. Si vous optez pour la formule avec engagement de 12 mois dans notre simulateur, vous profitez de 15% de réduction sur l'ensemble.",
    },
    {
      question: "Le club dispose-t-il de vestiaires et de douches ?",
      answer:
        "Absolument. FitZone met à votre disposition des vestiaires séparés hommes/femmes spacieux, équipés de cabines de douches individuelles gratuites, de miroirs et de sèche-cheveux. Des casiers sécurisés sont disponibles (apportez un cadenas ou profitez de l'option vestiaire privé).",
    },
    {
      question: "Quels sont les diplômes et certifications des coachs ?",
      answer:
        "Tous nos entraîneurs sont titulaires de diplômes d'État officiels (BPJEPS Activités de la Forme, Licence STAPS entraînement sportif) et de certifications spécifiques à l'instar des diplômes officiels CrossFit Inc. (CrossFit Level 1 & 2) ou de formations agréées en Vinyasa Yoga et Pilates.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-4xl px-8 py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold tracking-wider text-red-500 uppercase">FAQ</p>

        <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
          Des questions ?{" "}
          <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            On y répond
          </span>
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Retrouvez toutes les réponses pour bien débuter vos entraînements chez FitZone.
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-8">
        <Accordion className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="text-left text-xl font-medium tracking-wide hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
