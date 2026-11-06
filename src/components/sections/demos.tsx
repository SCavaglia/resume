import { Link } from "react-router";
import { Heading } from "@/components/typography/heading";
import { CardExpandable } from "../animations/card-expandable";

const demos = [
  {
    name: "BTP Pro",
    category: "Bâtiment",
    image: "/resume/z-screenshots/btp-pro.png",
    color: "border-orange-500/10 bg-gradient-to-br from-orange-500/15 via-orange-500/5 via-20% to-transparent",
    features: ["Comparaison Avant/Après", "Estimateur de prix", "Vérificateur de zone", "Localisation Google Maps"],
    to: "/demos/btp-pro",
  },
  {
    name: "Fitzone",
    category: "Sport",
    image: "/resume/z-screenshots/fitzone.png",
    color: "border-red-500/10 bg-gradient-to-br from-red-500/15 via-red-500/5 via-20% to-transparent hover:bg-red-500/5",
    features: ["Planning", "Estimateur de prix", "Vérificateur de zone"],
    to: "/demos/fitzone",
  },
  {
    name: "Bistrot Gourmand",
    category: "Restaurant",
    image: "/resume/z-screenshots/bistrot-gourmand.png",
    color: "border-rose-500/10 bg-gradient-to-br from-rose-500/15 via-rose-500/5 via-20% to-transparent hover:bg-rose-500/5",
    features: ["Carte du restaurant", "Commande avec retrait sur place", "Réservation en ligne", "Localisation Google Maps"],
    to: "/demos/bistrot-gourmand",
  },
  {
    name: "Salon Lumières",
    category: "Beauté & Bien-être",
    image: "/resume/z-screenshots/salon-lumieres.png",
    color: "border-[#C5A059]/20 bg-gradient-to-br from-[#C5A059]/15 via-[#C5A059]/5 via-20% to-transparent hover:bg-[#C5A059]/5",
    features: ["Quiz de diagnostic", "Réservation en ligne", "Localisation Google Maps"],
    to: "/demos/salon-lumieres",
  },
  {
    name: "Nova Santé",
    category: "Santé & Paramédical",
    image: "/resume/z-screenshots/nova-sante.png",
    color: "border-sky-500/10 bg-gradient-to-br from-sky-500/15 via-sky-500/5 via-20% to-transparent hover:bg-sky-500/5",
    features: ["Prise de RDV", "Localisation Google Maps"],
    to: "/demos/nova-sante",
  },
  {
    name: "Eden Paysage",
    category: "Jardin & Aménagement",
    image: "/resume/z-screenshots/eden-paysage.png",
    color: "border-lime-500/10 bg-gradient-to-br from-lime-500/15 via-lime-500/5 via-20% to-transparent hover:bg-lime-500/5",
    features: ["Estimateur de prix", "Localisation Google Maps"],
    to: "/demos/eden-paysage",
  },
  {
    name: "Garage Pro",
    category: "Automobile & Mobilité",
    image: "/resume/z-screenshots/garage-pro.png",
    color: "border-[#e63946]/10 bg-gradient-to-br from-[#e63946]/15 via-[#e63946]/5 via-20% to-transparent hover:bg-[#e63946]/5",
    features: ["Catalogue de véhicules", "Estimateur de prix", "Réservation en ligne", "Localisation Google Maps"],
    to: "/demos/garage-pro",
  },
  {
    name: "Maison Nouvelle",
    category: "Commerce & Boutiques",
    image: "/resume/z-screenshots/maison-nouvelle.png",
    color: "border-[#bfa888]/10 bg-gradient-to-br from-[#bfa888]/15 via-[#bfa888]/5 via-20% to-transparent hover:bg-[#bfa888]/5",
    features: ["Catalogue de produits", "Commande avec retrait sur place"],
    to: "/demos/maison-nouvelle",
  },
  {
    name: "Aide & Confort",
    category: "Services à la personne",
    image: "/resume/z-screenshots/aide-confort.png",
    color: "border-blue-500/10 bg-gradient-to-br from-blue-500/15 via-blue-500/5 via-20% to-transparent hover:bg-blue-500/5",
    features: ["Estimateur de prix", "Réservation en ligne"],
    to: "/demos/aide-confort",
  },
  {
    name: "Synergie Conseil",
    category: "Professions libérales & B2B",
    image: "/resume/z-screenshots/synergie-conseil.png",
    color: "border-[#c6a77e]/10 bg-gradient-to-br from-[#c6a77e]/15 via-[#c6a77e]/5 via-20% to-transparent hover:bg-[#c6a77e]/5",
    features: ["Estimateur de prix", "Prise de RDV"],
    to: "/demos/synergie-conseil",
  },
  {
    name: "Maison Rêve",
    category: "Immobilier",
    image: "/resume/z-screenshots/maison-reve.png",
    color: "border-[#c4a470]/10 bg-gradient-to-br from-[#c4a470]/15 via-[#c4a470]/5 via-20% to-transparent hover:bg-[#c4a470]/5",
    features: ["Catalogue immobilier", "Estimateur de prix"],
    to: "/demos/maison-reve",
  },
  {
    name: "L'Échappée Belle",
    category: "Tourisme & Hébergement",
    image: "/resume/z-screenshots/echappee-belle.png",
    color: "border-[#7f916f]/10 bg-gradient-to-br from-[#7f916f]/15 via-[#7f916f]/5 via-20% to-transparent hover:bg-[#7f916f]/5",
    features: ["Catalogue de chambres", "Réservation en ligne", "Guide local"],
    to: "/demos/echappee-belle",
  },
  {
    name: "Studio Momentum",
    category: "Événementiel & Créatifs",
    image: "/resume/z-screenshots/studio-momentum.png",
    color: "border-[#d6b76d]/10 bg-gradient-to-br from-[#d6b76d]/15 via-[#d6b76d]/5 via-20% to-transparent hover:bg-[#d6b76d]/5",
    features: ["Portfolio de réalisations", "Estimateur de prix"],
    to: "/demos/studio-momentum",
  },
  {
    name: "Atelier Création",
    category: "Métiers d'art & Créateurs",
    image: "/resume/z-screenshots/atelier-creation.png",
    color: "border-[#A27B45]/10 bg-gradient-to-br from-[#A27B45]/15 via-[#A27B45]/5 via-20% to-transparent hover:bg-[#A27B45]/5",
    features: ["Catalogue de produits", "Estimateur de prix"],
    to: "/demos/atelier-creation",
  },

  {
    name: "La Patte Au Cœur",
    category: "Animaux",
    image: "/resume/z-screenshots/patte-coeur.png",
    color: "border-[#c08a5e]/10 bg-gradient-to-br from-[#c08a5e]/15 via-[#c08a5e]/5 via-20% to-transparent hover:bg-[#c08a5e]/5",
    features: ["Estimateur de prix", "Questionnaire d'urgences vétérinaires"],
    to: "/demos/pattes-coeurs",
  },
];

export function Demos() {
  return (
    <section id="demos" className="scroll-mt-6 mx-auto max-w-7xl px-8 pb-46">
      <header className="mb-16">
        <Heading className="text-3xl font-semibold tracking-tight sm:text-2xl">Quelques démos de sites vitrines :</Heading>
      </header>

      <div className="w-4/5 grid grid-cols-1 justify-items-start gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link key={demo.name} to={demo.to} className="block">
            <CardExpandable
              title={demo.name}
              category={demo.category}
              image={demo.image}
              imageAlt={demo.name}
              infos={demo.features}
              className={demo.color}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
