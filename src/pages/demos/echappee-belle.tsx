import { EbAccommodations } from "@/components/demos/echappee-belle/eb-accommodations";
import { EbContact } from "@/components/demos/echappee-belle/eb-contact";
import { EbDiscover } from "@/components/demos/echappee-belle/eb-discover";
import { EbFaq } from "@/components/demos/echappee-belle/eb-faq";
import { EbGallery } from "@/components/demos/echappee-belle/eb-gallery";
import { EbHeader } from "@/components/demos/echappee-belle/eb-header";
import { EbHero } from "@/components/demos/echappee-belle/eb-hero";
import { EbSimulator } from "@/components/demos/echappee-belle/eb-simulator";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { MountainSnow } from "lucide-react";


const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Hébergements", href: "#hebergements" },
    { title: "Simulateur", href: "#simulateur" },
    { title: "Guide Local", href: "#guide-local" },
    { title: "Le Domaine", href: "#le-domaine" },
    { title: "FAQ", href: "#faq" },
    { title: "Réservation", href: "#reservation" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/resume/demos/echappee-belle#accueil" className="mb-8 flex items-center gap-2 font-cormorant text-3xl font-thin">
      <MountainSnow className="size-12 rounded-md bg-linear-to-tr from-[rgb(96,112,85)] to-[rgb(96,112,85)] p-2 text-[rgb(201,157,99)]" />
      <span>L'Échappée</span>
      <span className="bg-linear-to-t from-[rgb(96,112,85)] via-yellow-500 to-yellow-200 bg-clip-text text-transparent">Belle</span>
    </a>
  ),

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
export default function EchappeeBelle() {
  return (
    <>
      <div className="font-inter">
        <DemosTopbar />
        <EbHeader />
        <main>
          <EbHero />
          <EbAccommodations />
          <EbSimulator />
          <EbDiscover />
          <EbGallery />
          <EbFaq />
          <EbContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
