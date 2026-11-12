import { MrContact } from "@/components/demos/maison-reve/mr-contact";
import { MrHeader } from "@/components/demos/maison-reve/mr-header";
import { MrHero } from "@/components/demos/maison-reve/mr-hero";
import { MrShowroom } from "@/components/demos/maison-reve/mr-showroom";
import { MrSimulator } from "@/components/demos/maison-reve/mr-simulator";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Showroom", href: "#showroom" },
    { title: "Estimation Mandat", href: "estimation-mandat" },
    { title: "L'Agence", href: "#agence" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a
      href="/resume/demos/maison-reve#accueil"
      className="mb-8 flex items-center gap-2 font-cormorant text-3xl text-white uppercase"
    >
      Maison
      <span className="text-[rgb(196,164,112)]">✦</span>
      Rêve
    </a>
  ),
  description:
    "Cabinet de conception d'espaces paysagers et intérieurs sur-mesure de standing à [Ville]. Nous réunissons paysagistes, architectes d'intérieur et menuisiers qualifiés pour sublimer votre cadre de vie.",

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
export default function MaisonReve() {
  return (
    <>
      <div className="font-outfit">
        <DemosTopbar />
        <MrHeader />
        <main>
          <MrHero />
          <MrShowroom />
          <MrSimulator />
          <MrContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
