import { SmContact } from "@/components/demos/studio-momentum/sm-contact";
import { SmFaq } from "@/components/demos/studio-momentum/sm-faq";
import { SmGallery } from "@/components/demos/studio-momentum/sm-gallery";
import { SmHeader } from "@/components/demos/studio-momentum/sm-header";
import { SmHero } from "@/components/demos/studio-momentum/sm-hero";
import { SmServices } from "@/components/demos/studio-momentum/sm-services";
import { SmSimulator } from "@/components/demos/studio-momentum/sm-simulator";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Sparkles } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Services", href: "#services" },
    { title: "Simulateur", href: "#simulateur" },
    { title: "FAQ", href: "#faq" },
    { title: "Devis", href: "#devis" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/resume/demos/studio-momentum#accueil" className="mb-8 flex items-center gap-2 font-cormorant text-3xl uppercase">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gold-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#967021" />
            <stop offset="100%" stopColor="#d6b76d" />
          </linearGradient>
        </defs>
      </svg>
      <Sparkles style={{ stroke: "url(#gold-gradient)" }} />
      <span className="text-white">Studio</span>
      <span className="bg-linear-to-r from-[#967021] via-[#d6b76d] to-[#967021] bg-clip-text text-transparent">Momentum</span>
    </a>
  ),
  description:
    "Studio Momentum est un studio de création et d'événementiel spécialisé dans la production de contenus visuels et audiovisuels. Nous offrons des services de photographie, de vidéographie, de design graphique et d'organisation d'événements pour aider nos clients à atteindre leurs objectifs créatifs et commerciaux.",

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
export default function StudioMomentum() {
  return (
    <>
      <div className="font-inter">
        <DemosTopbar />
        <SmHeader />
        <main>
          <SmHero />
          <SmGallery />
          <SmServices />
          <SmSimulator />
          <SmFaq />
          <SmContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
