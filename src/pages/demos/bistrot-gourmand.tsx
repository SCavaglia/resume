import { BgContact } from "@/components/demos/bistrot-gourmand/bg-contact";
import { BgGallery } from "@/components/demos/bistrot-gourmand/bg-gallery";
import { BgHeader } from "@/components/demos/bistrot-gourmand/bg-header";
import { BgHero } from "@/components/demos/bistrot-gourmand/bg-hero";
import { BgLocation } from "@/components/demos/bistrot-gourmand/bg-location";
import { BgMenuCard } from "@/components/demos/bistrot-gourmand/bg-menu-card";
import { BgProgressBar } from "@/components/demos/bistrot-gourmand/bg-progress-bar";
import { BgReservation } from "@/components/demos/bistrot-gourmand/bg-reservation";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Utensils } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Notre carte", href: "#carte" },
    { title: "Gallerie", href: "#gallerie" },
    { title: "Infos", href: "#infos" },
    { title: "Réservation", href: "#reservation" },
    { title: "Accès", href: "#acces" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  id: "footer",
  logo: (
    <a href="/resume/demos/bistrot-gourmand#accueil" className="flex items-center text-white">
      <Utensils className="mr-4 size-8 shrink-0" />
      <span className="font-playfair text-2xl tracking-wider [font-variant-caps:small-caps]">
        Le <span className="inline-block translate-y-0.5 text-[34px] text-[#8a1e1e]">Bistrot</span>{" "}
        Gourmand
      </span>
    </a>
  ),
  logoHref: "#accueil",
  description:
    "Une cuisine de saison faite maison, une sélection de vignerons locaux et la convivialité des bistrots d'antan. Labellisé Maître Restaurateur.",

  className: "border-t bg-black/90 dark:bg-black/50",
  containerClassName: "mx-auto max-w-7xl px-6 py-12 lg:px-8",
  gridClassName: "grid gap-10 lg:grid-cols-4",
  brandClassName: "lg:col-span-2",
  logoClassName: "flex w-fit items-center gap-3 text-4xl font-semibold tracking-tight uppercase",
  nameClassName: "text-primary-without-black",
  taglineClassName:
    "mt-3 max-w-md text-sm leading-relaxed text-secondary dark:text-secondary-foreground",
  descriptionClassName:
    "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground font-cabin text-secondary dark:text-secondary-foreground",
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
    "mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
};

export default function BistrotGourmand() {
  return (
    <>
      <div className="font-karla">
        <BgProgressBar />
        <DemosTopbar />
        <BgHeader />
        <main>
          <BgHero />
          <BgMenuCard />
          <BgGallery />
          <BgContact />
          <BgReservation />
          <BgLocation />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
