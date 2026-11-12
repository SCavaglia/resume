import { SlHeader } from "@/components/demos/salon-lumieres/sl-header";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { SlHero } from "@/components/demos/salon-lumieres/sl-hero";
import { SlStatsBar } from "@/components/demos/salon-lumieres/sl-stats-bar";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { SlTeam } from "@/components/demos/salon-lumieres/sl-team";
import { SlFaq } from "@/components/demos/salon-lumieres/sl-faq";
import { SlMultistepForm } from "@/components/demos/salon-lumieres/sl-multistep-form";
import { SlLocation } from "@/components/demos/salon-lumieres/sl-location";
import SlAbout from "@/components/demos/salon-lumieres/sl-about";
import { SlMultistepQuiz } from "@/components/demos/salon-lumieres/sl-multistep-quiz";
import { SlServices } from "@/components/demos/salon-lumieres/sl-services";
import { SlPricing } from "@/components/demos/salon-lumieres/sl-pricing";
import { SlTestimonials } from "@/components/demos/salon-lumieres/sl-testimonials";
import { SlGallery } from "@/components/demos/salon-lumieres/sl-gallery";
import { SlExperience } from "@/components/demos/salon-lumieres/sl-experience";

const footerProps = {
  navigationLinks: [
    { title: "Accueil", href: "#accueil" },
    { title: "Notre maison", href: "#notre-maison" },
    { title: "Diagnostic", href: "#diagnostic" },
    { title: "Prestations", href: "#prestations" },
    { title: "Galerie", href: "#galerie" },
    { title: "L'équipe", href: "#equipe" },
    { title: "Témoignages", href: "#temoignages" },
    { title: "Forfaits", href: "#forfaits" },
    { title: "FAQ", href: "#faq" },
    { title: "Réservation", href: "#reservation" },
    { title: "Contact", href: "#contact" },
  ],
  legalLinks: [
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité", href: "#" },
    { title: "Conditions générales d'utilisation", href: "#" },
    { title: "Cookies", href: "#" },
  ],
  id: "footer",
  logo: (
    <a
      href="/resume/demos/salon-lumieres#accueil"
      className="font-playfair text-2xl tracking-wider uppercase"
    >
      <span className="font-playfair text-2xl tracking-wider uppercase">Salon Lumières</span>
    </a>
  ),
  logoHref: "#accueil",
  description:
    "Maison de Beauté et de Bien-être de prestige à Paris. Votre havre de douceur dédié aux rituels de soin exclusifs et à la cosmétique de pointe.",

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
export default function SalonLumieres() {
  return (
    <div className="font-inter">
      <DemosTopbar />
      <SlHeader />
      <main>
        <SlHero />
        <SlStatsBar />
        <SlAbout />
        <SlMultistepQuiz />
        <SlExperience />
        <SlServices />
        <SlGallery />
        <SlTeam />
        <SlTestimonials />
        <SlPricing />
        <SlFaq />
        <SlMultistepForm />
        <SlLocation />
      </main>
      <DemosFooter {...footerProps} />
    </div>
  );
}
