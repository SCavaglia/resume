import { EpContact } from "@/components/demos/eden-paysage/ep-contact";
import { EpFaqWarranty } from "@/components/demos/eden-paysage/ep-faq-warranty";
import { EpHeader } from "@/components/demos/eden-paysage/ep-header";
import { EpLocation } from "@/components/demos/eden-paysage/ep-location";
import { EpProcessTimeline } from "@/components/demos/eden-paysage/ep-process-timeline";
import { EpServices } from "@/components/demos/eden-paysage/ep-services";
import { EpSimulator } from "@/components/demos/eden-paysage/ep-simulator";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { TreePine } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "aaa", href: "#aaa" },
    { title: "aaa", href: "#aaa" },
    { title: "aaa", href: "#aaa" },
    { title: "aaa", href: "#aaa" },
    { title: "aaa", href: "#aaa" },
    { title: "aaa", href: "#aaa" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/demos/eden-paysage#accueil" className="mb-8 flex items-center gap-2 text-3xl font-bold">
      <TreePine className="size-12 rounded-md bg-linear-to-r from-lime-500 to-emerald-500 p-2 text-black" />
      <span className="text-white">EDEN</span>
      <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">PAYSAGE</span>
    </a>
  ),
  description:
    "Cabinet de conception d'espaces paysagers et intérieurs sur-mesure de standing à [Ville]. Nous réunissons paysagistes, architectes d'intérieur et menuisiers qualifiés pour sublimer votre cadre de vie.",

  className: "mt-24 py-24 px-6 border-t bg-black/90 dark:bg-black/50 lg:px-8",
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
  bottomClassName:
    "mt-12 pt-6 flex flex-col gap-4 border-t border-green-400/25 text-sm text-green-400/50 sm:flex-row sm:items-center sm:justify-between",
};
export default function EdenPaysage() {
  return (
    <>
      <div className="font-jakarta">
        <DemosTopbar />
        <EpHeader />
        <main>
          <EpServices />
          <EpProcessTimeline />
          <EpLocation />
          <EpSimulator />
          <EpFaqWarranty />
          <EpContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
