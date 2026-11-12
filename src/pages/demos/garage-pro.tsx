import { GpContact } from "@/components/demos/garage-pro/gp-contact";
import { GpFaq } from "@/components/demos/garage-pro/gp-faq";
import { GpHeader } from "@/components/demos/garage-pro/gp-header";
import { GpHero } from "@/components/demos/garage-pro/gp-hero";
import { GpLocation } from "@/components/demos/garage-pro/gp-location";
import { GpServices } from "@/components/demos/garage-pro/gp-services";
import { GpShowroom } from "@/components/demos/garage-pro/gp-showroom";
import { GpSimulator } from "@/components/demos/garage-pro/gp-simulator";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { CarFront } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Prestations", href: "#prestations" },
    { title: "Occasions", href: "#showroom" },
    { title: "Dépannage 24/7", href: "#depannage" },
    { title: "Calculer mon RDV", href: "#calculer-mon-rdv" },
    { title: "Garanties et FAQ", href: "#garanties" },
    { title: "Contact", href: "#contact" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a
      href="/resume/demos/garage-pro#accueil"
      className="mb-8 flex items-center gap-2 font-oswald text-3xl font-bold uppercase"
    >
      <CarFront className="size-12 rounded-md bg-[#e63946] p-2 text-black" />
      <span className="text-white">Garage</span>
      <span className="bg-[#e63946] bg-clip-text text-transparent">Pro</span>
    </a>
  ),
  description:
    "Atelier indépendant spécialisé dans la réparation, la carrosserie et la commercialisation de véhicules d'occasion toutes marques à [Ville]. Performance, rigueur et satisfaction client garantie.",

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
export default function GaragePro() {
  return (
    <>
      <div className="font-inter">
        <DemosTopbar />
        <GpHeader />
        <main>
          <GpHero />
          <GpServices />
          <GpShowroom />
          <GpLocation />
          <GpSimulator />
          <GpFaq />
          <GpContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
