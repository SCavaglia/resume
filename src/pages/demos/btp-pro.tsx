import { BpBeforeAfter } from "@/components/demos/btp-pro/bp-before-after";
import { BpHeader } from "@/components/demos/btp-pro/bp-header";
import { BpHero } from "@/components/demos/btp-pro/bp-hero";
import { BpLocation } from "@/components/demos/btp-pro/bp-location";
import { BpServices } from "@/components/demos/btp-pro/bp-services";
import { BpSimulator } from "@/components/demos/btp-pro/bp-simulator";
import { BpTrustBar } from "@/components/demos/btp-pro/bp-trust-bar";
import { BpFaq } from "@/components/demos/btp-pro/bp-faq";
import { BpContact } from "@/components/demos/btp-pro/bp-contact";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { House } from "lucide-react";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";

const footerProps = {
    navigationLinks: [
        { title: 'Accueil', href: '#accueil' },
        { title: 'Prestations', href: '#prestations' },
        { title: 'Avant / Après', href: '#avant-apres' },
        { title: "Zone d'intervention", href: '#zone-intervention' },
        { title: 'Simulateur', href: '#simulateur' },
        { title: 'FAQ', href: '#faq' },
        { title: 'Contact', href: '#contact' },
    ],
    legalLinks: [
        { title: 'Mentions légales', href: '#' },
        { title: 'Politique de confidentialité', href: '#' },
        { title: "Conditions générales d'utilisation", href: '#' },
        { title: 'Cookies', href: '#' },
    ],
    id: 'footer',
    logo: (
        <a
            href="/demos/btp-pro#accueil"
            className="flex items-center gap-2 text-3xl font-bold text-white uppercase"
        >
            <House className="size-10" />
            <span>BTP</span>
            <span className="text-primary-without-black">PRO</span>
        </a>
    ),
    logoHref: '#accueil',
    tagline:
        'Votre partenaire pour tous vos projets de construction et de rénovation.',
    description:
        'Entreprise de rénovation générale de référence à [Ville]. Nous réalisons vos projets de rénovation de salles de bains, mise aux normes électriques, peintures et isolation de bâtiments.',

    className: 'border-t bg-black/90 dark:bg-black/50',
    containerClassName: 'mx-auto max-w-7xl px-6 py-12 lg:px-8',
    gridClassName: 'grid gap-10 lg:grid-cols-4',
    brandClassName: 'lg:col-span-2',
    logoClassName:
        'flex w-fit items-center gap-3 text-4xl font-semibold tracking-tight uppercase',
    nameClassName: 'text-primary-without-black',
    taglineClassName:
        'mt-3 max-w-md text-sm leading-relaxed text-secondary dark:text-secondary-foreground',
    descriptionClassName:
        'mt-3 max-w-md text-sm leading-relaxed text-muted-foreground font-cabin text-secondary dark:text-secondary-foreground',
    socialLinks: (
        <>
            <FacebookIcon className="size-6" aria-hidden="true" />
            <InstagramIcon className="size-6" aria-hidden="true" />
        </>
    ),
    socialLinksClassName: 'mt-8 flex gap-4',
    headingClassName: 'text-background dark:text-foreground',
    linksClassName: 'mt-4 space-y-3',
    linkClassName:
        'font-cabin text-sm text-secondary transition-colors hover:text-background dark:text-secondary-foreground dark:hover:text-foreground',
    bottomClassName:
        'mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between',
    copyrightClassName: '',
    poweredByClassName: '',
};

export function BtpPro() {
  return (
    <div className="font-oswald">
      <DemosTopbar />
      <BpHeader />
      <main>
        <BpHero />
        <BpTrustBar />
        <BpServices />
        <BpBeforeAfter />
        <BpLocation />
        <BpSimulator />
        <BpFaq />
        <BpContact />
      </main>
      <DemosFooter {...footerProps} />
    </div>
  );
}
