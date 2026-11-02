import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/typography/heading";
import { cn } from "@/lib/utils";

const demos = [
  {
    name: "BTP Pro",
    category: "Bâtiment · Rénovation",
    color: "border-orange-500/10 bg-gradient-to-br from-orange-500/15 via-orange-500/5 via-20% to-transparent hover:bg-orange-500/5",
    description:
      "Site d'artisan pour entreprises de bâtiment et de rénovation. \n Galerie de projets (avant/après), descriptif des prestations et demande de devis.",
    to: "/demos/btp-pro",
  },
  {
    name: "Fitzone",
    category: "Sport, Fitness & Loisirs",
    color: "border-red-500/10 bg-gradient-to-br from-red-500/15 via-red-500/5 via-20% to-transparent hover:bg-red-500/5",
    description:
      "Site pour clubs de fitness, salles de sport et coachs. \n Grille des cours collectifs, présentation des abonnements, de l'équipe et inscriptions.",
    to: "/demos/fitzone",
  },
  {
    name: "Bistrot Gourmand",
    category: "Restauration & Métiers de bouche",
    color: "border-rose-500/10 bg-gradient-to-br from-rose-500/15 via-rose-500/5 via-20% to-transparent hover:bg-rose-500/5",
    description:
      "Vitrine gastronomique haut de gamme. \n Menu interactif, mise en valeur des produits locaux, présentation du chef et système de réservation de table.",
    to: "/demos/bistrot-gourmand",
  },
  {
    name: "Salon Lumières",
    category: "Beauté & Bien-être",
    color: "border-[#C5A059]/20 bg-gradient-to-br from-[#C5A059]/15 via-[#C5A059]/5 via-20% to-transparent hover:bg-[#C5A059]/5",
    description:
      "Site élégant pour institut de spa et de beauté. \n Présentation des soins, tarifs clairs, formulaire de réservation et espace d'avis clients de confiance.",
    to: "/demos/salon-lumieres",
  },
  {
    name: "Nova Santé",
    category: "Santé & Paramédical",
    color: "border-sky-500/10 bg-gradient-to-br from-sky-500/15 via-sky-500/5 via-20% to-transparent hover:bg-sky-500/5",
    description:
      "Portail professionnel pour cabinet médical et paramédical. \n Informations d'accès, présentation des praticiens, des spécialités et des horaires.",
    to: "/demos/nova-sante",
  },
  {
    name: "Eden Paysage",
    category: "Jardin & Aménagement",
    color: "border-lime-500/10 bg-gradient-to-br from-lime-500/15 via-lime-500/5 via-20% to-transparent hover:bg-lime-500/5",
    description:
      "Vitrine pour paysagistes et architectes d'extérieur. \n Présentation des projets d'aménagement paysager, entretien d'espaces verts et soins.",
    to: "/demos/eden-paysage",
  },
  {
    name: "Garage Pro",
    category: "Automobile & Mobilité",
    color: "border-[#e63946]/10 bg-gradient-to-br from-[#e63946]/15 via-[#e63946]/5 via-20% to-transparent hover:bg-[#e63946]/5",
    description:
      "Portail pour garages indépendants et concessionnaires. \n Présentation du parc automobile d'occasion, prise de rendez-vous en ligne pour l'atelier.",
    to: "/demos/garage-pro",
  },
  {
    name: "Maison Nouvelle",
    category: "Commerce & Boutiques",
    color: "border-[#bfa888]/10 bg-gradient-to-br from-[#bfa888]/15 via-[#bfa888]/5 via-20% to-transparent hover:bg-[#bfa888]/5",
    description:
      "Site de concept-store ou boutique physique. \n Catalogue d'articles de créateurs, système de retrait en Click & Collect et vérification de stock local.",
    to: "/demos/maison-nouvelle",
  },
  {
    name: "Aide & Confort",
    category: "Services à la personne",
    color: "border-blue-500/10 bg-gradient-to-br from-blue-500/15 via-blue-500/5 via-20% to-transparent hover:bg-blue-500/5",
    description:
      "Site pour entreprises d'aide à domicile. \n Présentation des services (ménage, garde d'enfants, dépendance), tarifs conventionnés et contact rapide.",
    to: "/demos/aide-confort",
  },
  {
    name: "Synergie Conseil",
    category: "Professions libérales & B2B",
    color: "border-[#c6a77e]/10 bg-gradient-to-br from-[#c6a77e]/15 via-[#c6a77e]/5 via-20% to-transparent hover:bg-[#c6a77e]/5",
    description:
      "Vitrine corporate pour consultants, comptables ou professions juridiques. \n Fiches d'expertises, méthodologie, études de cas et prise de contact.",
    to: "/demos/synergie-conseil",
  },
  {
    name: "Maison Rêve",
    category: "Immobilier",
    color: "border-[#c4a470]/10 bg-gradient-to-br from-[#c4a470]/15 via-[#c4a470]/5 via-20% to-transparent hover:bg-[#c4a470]/5",
    description:
      "Site d'agence immobilière. \n Catalogue d'annonces avec moteur de recherche, outils d'estimation rapide en ligne et demande de visites.",
    to: "/demos/maison-reve",
  },
  {
    name: "L'Échappée Belle",
    category: "Tourisme & Hébergement",
    color: "border-[#7f916f]/10 bg-gradient-to-br from-[#7f916f]/15 via-[#7f916f]/5 via-20% to-transparent hover:bg-[#7f916f]/5",
    description:
      "Vitrine immersive pour gîtes, maisons d'hôtes et hôtels. \n Galerie d'images grand format, calendrier des disponibilités et demande de réservation",
    to: "/demos/echappee-belle",
  },
  {
    name: "Studio Momentum",
    category: "Événementiel & Créatifs",
    color: "border-[#d6b76d]/10 bg-gradient-to-br from-[#d6b76d]/15 via-[#d6b76d]/5 via-20% to-transparent hover:bg-[#d6b76d]/5",
    description:
      "Site pour wedding planners, photographes ou traiteurs. \n Galerie de portfolios créatifs, présentation des formules de prestations et devis en ligne.",
    to: "/demos/studio-momentum",
  },
  {
    name: "Atelier Création",
    category: "Métiers d'art & Créateurs",
    color: "border-[#A27B45]/10 bg-gradient-to-br from-[#A27B45]/15 via-[#A27B45]/5 via-20% to-transparent hover:bg-[#A27B45]/5",
    description:
      "Vitrine d'artisan d'art, céramiste ou producteur indépendant. \n Philosophie de création, calendrier des ateliers d'initiation et espace exposition.",
    to: "/demos/atelier-creation",
  },

  {
    name: "Les Pattes Aux Cœurs",
    category: "Animaux",
    color: "border-[#c08a5e]/10 bg-gradient-to-br from-[#c08a5e]/15 via-[#c08a5e]/5 via-20% to-transparent hover:bg-[#c08a5e]/5",
    description:
      "Site de pension pour animaux ou éducateur canin. \n Informations pratiques sur la garde, l'éducation, conseils du comportementaliste et réservation.",
    to: "/demos/pattes-coeurs",
  },
];

export default function Demos() {
  useEffect(() => {
    document.title = "Sites web démos";
  }, []);

  return (
    <section id="demos" className="mx-auto max-w-7xl px-8 pb-24">
      <header className="mb-12">
        <p className="mb-3 text-sm text-muted-foreground">Portfolio / Expérimentations</p>

        <Heading className="text-3xl font-semibold tracking-tight sm:text-5xl">Sites web démos</Heading>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {demos.map((demo, index) => (
          <Link
            key={demo.name}
            to={demo.to}
            className={cn("group flex min-h-48 flex-col rounded-xl border p-6 transition-all hover:-translate-y-1 sm:p-7", demo.color)}
          >
            <div className="flex items-start justify-between">
              <span className="text-sm text-muted-foreground tabular-nums">{String(index + 1).padStart(2, "0")}</span>

              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{demo.name}</h2>

              <p className="mx-auto mt-2 w-fit rounded-full border bg-accent px-3 py-1 text-center text-sm font-semibold text-balance text-muted-foreground">
                {demo.category}
              </p>

              <p className="mt-4 text-sm text-balance whitespace-pre-line text-muted-foreground">{demo.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
