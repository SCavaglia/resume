import { AcCallbackRequest } from "@/components/demos/aide-confort/ac-callback-request";
import { AcHeader } from "@/components/demos/aide-confort/ac-header";
import { AcHero } from "@/components/demos/aide-confort/ac-hero";
import { AcQuote } from "@/components/demos/aide-confort/ac-quote";
import { AcServices } from "@/components/demos/aide-confort/ac-services";
import { AcSimulator } from "@/components/demos/aide-confort/ac-simulator";
import { AcWarranty } from "@/components/demos/aide-confort/ac-warranty";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { HeartHandshake } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Services", href: "#services" },
    { title: "Garanties", href: "#garanties" },
    { title: "Simulateur", href: "#simulateur" },
    { title: "Nous Contacter", href: "#contact" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/resume/demos/aide-confort#accueil" className="mb-8 flex items-center gap-2 text-3xl font-bold">
      <HeartHandshake className="size-12 rounded-md bg-linear-to-r from-sky-300 to-teal-400 p-2 text-black" />
      <span className="text-white">Aide &</span>
      <span className="bg-linear-to-r from-sky-300 via-blue-400 to-teal-500 bg-clip-text text-transparent">Confort</span>
    </a>
  ),
  description:
    "Depuis plus de 10 ans, notre agence accompagne les familles, les parents pressés et les aînés dans la métropole nantaise. Nous mettons le bien-être au centre de nos préoccupations.",

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
export function AideConfort() {
  return (
    <div className="font-outfit">
      <DemosTopbar />
      <AcHeader />
      <main>
        <AcHero />
        <AcServices />
        <AcWarranty />
        <AcSimulator />
        <AcCallbackRequest />
        <AcQuote />
      </main>
      <DemosFooter {...footerProps} />
    </div>
  );
}
