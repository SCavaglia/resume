import { PcContact } from "@/components/demos/pattes-coeurs/pc-contact";
import { PcFaq } from "@/components/demos/pattes-coeurs/pc-faq";
import { PcGallery } from "@/components/demos/pattes-coeurs/pc-gallery";
import { PcHeader } from "@/components/demos/pattes-coeurs/pc-header";
import { PcHero } from "@/components/demos/pattes-coeurs/pc-hero";
import { PcServices } from "@/components/demos/pattes-coeurs/pc-services";
import { PcSimulator } from "@/components/demos/pattes-coeurs/pc-simulator";
import { PcStatsBar } from "@/components/demos/pattes-coeurs/pc-stats-bar";
import { PcTeam } from "@/components/demos/pattes-coeurs/pc-team";
import { PcUrgencyChecker } from "@/components/demos/pattes-coeurs/pc-urgency-checker";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Heart, PawPrint } from "lucide-react";

const footerProps = {
  logo: (
    <a
      href="/resume/demos/pattes-coeurs#accueil"
      className="mb-8 flex items-center gap-2 font-playfair text-3xl font-bold tracking-tight"
    >
      <div className="relative size-16">
        <svg className="size-full" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <Heart className="size-full" fill="url(#heart-gradient)" stroke="url(#heart-gradient)" />
        </svg>
        <PawPrint className="absolute inset-0 m-auto size-8 text-white" />
      </div>
      <span className="text-white">La Patte Au</span>
      <span className="bg-linear-to-r from-orange-100 via-amber-100 to-yellow-100 bg-clip-text text-transparent">
        Cœur
      </span>
    </a>
  ),
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Services", href: "#services" },
    { title: "Simulateur", href: "#simulateur" },
    { title: "Urgences", href: "#urgences" },
    { title: "L'Équipe", href: "#equipe" },
    { title: "Gallerie", href: "#gallerie" },
    { title: "FAQ", href: "#faq" },
    { title: "Prendre RDV", href: "#rendez-vous" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  description:
    "Clinique vétérinaire dédiée à la santé et au bien-être de vos animaux à [Ville]. Notre équipe de vétérinaires et d'auxiliaires spécialisés vous accompagne avec expertise et bienveillance à chaque étape de leur vie.",

  className: "py-24 px-6 border-t bg-black/90 dark:bg-black/50 lg:px-8",
  containerClassName: "mx-auto max-w-7xl  ",
  gridClassName: "grid gap-10 lg:grid-cols-4",
  brandClassName: "lg:col-span-2 lg:-translate-y-8",
  descriptionClassName:
    "mt-3 max-w-md text-balance text-sm leading-loose text-background dark:text-foreground",
  socialLinks: (
    <>
      <FacebookIcon className="size-6" aria-hidden="true" />
      <InstagramIcon className="size-6" aria-hidden="true" />
    </>
  ),
  socialLinksClassName: "mt-8 flex gap-4",
  headingClassName: "font-semibold text-background dark:text-foreground",
  linksClassName: "mt-4 space-y-3",
  linkClassName:
    "relative inline-block text-sm text-background transition-all duration-300 hover:-translate-y-1 hover:text-white dark:text-foreground dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
  bottomClassName:
    "mt-12 pt-6 flex flex-col gap-4 border-t text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
};
export default function PattesCoeurs() {
  return (
    <>
      <div className="font-inter">
        <DemosTopbar />
        <PcHeader />
        <main>
          <PcHero />
          <PcStatsBar />
          <PcServices />
          <PcSimulator />
          <PcUrgencyChecker />
          <PcTeam />
          <PcGallery />
          <PcFaq />
          <PcContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
