import { NsCommitments } from "@/components/demos/nova-sante/ns-commitments";
import { NsContact } from "@/components/demos/nova-sante/ns-contact";
import { NsFaq } from "@/components/demos/nova-sante/ns-faq";
import { NsHeader } from "@/components/demos/nova-sante/ns-header";
import { NsHero } from "@/components/demos/nova-sante/ns-hero";
import { NsReservation } from "@/components/demos/nova-sante/ns-reservation";
import { NsServicesFilter } from "@/components/demos/nova-sante/ns-services-filter";
import { NsStatsBar } from "@/components/demos/nova-sante/ns-stats-bar";
import { NsTeam } from "@/components/demos/nova-sante/ns-team";
import { NsTestimonials } from "@/components/demos/nova-sante/ns-testimonials";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Heart } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Engagements", href: "#engagements" },
    { title: "Tarifs & Soins", href: "#specialites" },
    { title: "Notre Équipe", href: "#equipe" },
    { title: "Témoignages", href: "#temoignages" },
    { title: "FAQ", href: "#faq" },
    { title: "Accès", href: "#contact" },
    { title: "Réservation", href: "#reservation" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/resume/demos/nova-sante#accueil" className="flex items-center gap-2">
      <Heart className="size-12 rounded-2xl border bg-linear-to-r from-sky-500 to-teal-500 p-2" />
      <span className="font-figtree text-2xl font-extrabold tracking-wide">
        Nova
        <span className="bg-linear-to-r from-sky-500 to-teal-500 bg-clip-text pl-2 text-transparent">
          Santé
        </span>
      </span>
    </a>
  ),
  description:
    "Cabinet pluridisciplinaire d'excellence réunissant des praticiens conventionnés et coordonnés pour votre suivi médical global au cœur de Paris.",

  className: "mt-24 border-t bg-black/90 dark:bg-black/50",
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
export default function NovaSante() {
  return (
    <>
      <div className="font-noto">
        <DemosTopbar />
        <NsHeader />
        <main>
          <NsHero />
          <NsStatsBar />
          <NsCommitments />
          <NsServicesFilter />
          <NsTeam />
          <NsTestimonials />
          <NsFaq />
          <NsContact />
          <NsReservation />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
