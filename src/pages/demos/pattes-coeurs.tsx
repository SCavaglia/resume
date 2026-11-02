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
import { PawPrint } from "lucide-react";

const footerProps = {
  logo: (
    <a href="/demos/pattes-coeurs#accueil" className="mb-8 flex items-center gap-2 font-playfair text-3xl font-bold tracking-tight">
      <PawPrint className="size-12 rounded-md bg-linear-to-tr from-yellow-950 to-orange-900 p-2 text-black" />
      <span className="text-white">Les Pattes Aux</span>
      <span className="bg-linear-to-r from-orange-100 via-amber-100 to-yellow-100 bg-clip-text text-transparent">Cœurs</span>
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
    { title: "Contact", href: "#contact" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  description:
    "Cabinet de conception d'espaces paysagers et intérieurs sur-mesure de standing à [Ville]. Nous réunissons paysagistes, architectes d'intérieur et menuisiers qualifiés pour sublimer votre cadre de vie.",

  className: "py-24 px-6 border-t bg-black/90 dark:bg-black/50 lg:px-8",
  containerClassName: "mx-auto max-w-7xl  ",
  gridClassName: "grid gap-10 lg:grid-cols-4",
  brandClassName: "lg:col-span-2 lg:-translate-y-8",
  descriptionClassName: "mt-3 max-w-md text-balance text-sm leading-loose text-background dark:text-foreground",
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
  bottomClassName: "mt-12 pt-6 flex flex-col gap-4 border-t text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
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
