import { ScAppointment } from "@/components/demos/synergie-conseil/sc-appointment";
import { ScContact } from "@/components/demos/synergie-conseil/sc-contact";
import { ScFeeSimulator } from "@/components/demos/synergie-conseil/sc-fee-simulator";
import { ScHeader } from "@/components/demos/synergie-conseil/sc-header";
import { ScHero } from "@/components/demos/synergie-conseil/sc-hero";
import { ScPartners } from "@/components/demos/synergie-conseil/sc-partners";
import { ScServices } from "@/components/demos/synergie-conseil/sc-services";
import { ScTeam } from "@/components/demos/synergie-conseil/sc-team";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Scale } from "lucide-react";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Expertises", href: "#expertises" },
    { title: "Associés", href: "#associes" },
    { title: "Honoraires", href: "#honoraires" },
    { title: "Prendre RDV", href: "#prendre-rdv" },
    { title: "Contact", href: "#contact" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  logo: (
    <a href="/demos/synergie-conseil#accueil" className="mb-8 flex items-center gap-2 font-cormorant text-3xl uppercase">
      <Scale className="size-12 rounded-md bg-linear-to-r from-cyan-900 to-sky-900 p-2 text-[#c6a77e]" />
      <span className="text-white">Synergie</span>
      <span className="bg-linear-to-r from-[#c6a77e] via-[#d8c19b] to-[#c6a77e] bg-clip-text text-transparent">Conseil</span>
    </a>
  ),
  description:
    "Le Cabinet Synergie Conseil unit les compétences réglementées d'avocats, experts-comptables et notaires associés pour offrir aux entreprises d'exploitation et à leurs fondateurs une ingénierie globale de haut niveau.",

  className: "py-24 px-6 border-t bg-black/90 dark:bg-black/50 lg:px-8",
  containerClassName: "mx-auto max-w-7xl  ",
  gridClassName: "grid gap-10 lg:grid-cols-4",
  brandClassName: "lg:col-span-2 lg:-translate-y-8",
  descriptionClassName: "mt-3 max-w-md text-balance text-sm leading-loose text-background dark:text-foreground",
  socialLinks: (
    <>
      <FacebookIcon className="size-6" aria-hidden="true" />
      <InstagramIcon className="size-6" aria-hidden="true" />
      <LinkedinIcon className="size-6" aria-hidden="true" />
    </>
  ),
  socialLinksClassName: "mt-8 flex gap-4",
  headingClassName: "font-semibold text-background dark:text-foreground",
  linksClassName: "mt-4 space-y-3",
  linkClassName:
    "relative inline-block text-sm text-background transition-all duration-300 hover:-translate-y-1 hover:text-white dark:text-foreground dark:hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
  bottomClassName: "mt-12 pt-6 flex flex-col gap-4 border-t text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
};
export default function SynergieConseil() {
  return (
    <>
      <div className="font-inter">
        <DemosTopbar />
        <ScHeader />
        <main>
          <ScHero />
          <ScServices />
          <ScTeam />
          <ScPartners />
          <ScAppointment />
          <ScFeeSimulator />
          <ScContact />
        </main>
        <DemosFooter {...footerProps} />
      </div>
    </>
  );
}
