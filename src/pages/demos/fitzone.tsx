import { FzContact } from "@/components/demos/fitzone/fz-contact";
import { FzFaq } from "@/components/demos/fitzone/fz-faq";
import { FzGallery } from "@/components/demos/fitzone/fz-gallery";
import { FzHeader } from "@/components/demos/fitzone/fz-header";
import { FzHero } from "@/components/demos/fitzone/fz-hero";
import { FzLocation } from "@/components/demos/fitzone/fz-location";
import { FzPlanning } from "@/components/demos/fitzone/fz-planning";
import { FzServices } from "@/components/demos/fitzone/fz-services";
import { FzSimulator } from "@/components/demos/fitzone/fz-simulator";
import { FzStatsBar } from "@/components/demos/fitzone/fz-stats-bar";
import { FzTeam } from "@/components/demos/fitzone/fz-team";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosTopbar } from "@/components/landmarks/demos-topbar";
import { Dumbbell } from "lucide-react";

const footerProps = {
    navigationLinks: [
        { title: 'Accueil', href: '#accueil' },
        { title: 'Cours', href: '#cours' },
        { title: 'Planning', href: '#planning' },
        { title: 'Simulateur', href: '#simulateur' },
        { title: 'Coachs', href: '#coachs' },
        { title: 'Localisation', href: '#localisation' },
        { title: 'Le Club', href: '#club' },
        { title: 'FAQ', href: '#faq' },
        { title: 'Contact', href: '#contact' },
    ],
    legalLinks: [
        { title: 'Mentions légales', href: '#' },
        { title: 'Politique de confidentialité', href: '#' },
        { title: "Conditions générales d'utilisation", href: '#' },
        { title: 'Cookies', href: '#' },
    ],
    logo: (
        <a
            href="/resume/demos/fitzone#accueil"
            className="group flex items-end text-3xl font-black uppercase"
        >
            <Dumbbell className="mr-4 size-8 text-white transition-all duration-200 group-hover:-translate-y-1" />
            <span className="-translate-y-0.5 text-white">FIT</span>
            <span className="bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                ZONE
            </span>
        </a>
    ),

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
    navigationClassName: '',
    legalClassName: '',
    headingClassName: 'text-background dark:text-foreground',
    linksClassName: 'mt-4 space-y-3',
    linkClassName:
        'text-sm text-muted-foreground transition-colors hover:text-foreground font-cabin text-secondary dark:text-secondary-foreground hover:text-background dark:hover:text-foreground',
    bottomClassName:
        'mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between',
    copyrightClassName: '',
    poweredByClassName: '',
};

export function Fitzone() {
  return (
    <div className="font-inter">
                <DemosTopbar />
                <FzHeader />
                <main>
                <FzHero />
                <FzStatsBar />
                <FzServices />
                <FzPlanning />
                <FzSimulator />
                <FzTeam />
                <FzLocation />
                <FzGallery />
                <FzFaq />
                <FzContact />
                </main>
                <DemosFooter {...footerProps} />
            </div>
  );
}
