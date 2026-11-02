import { BgProgressBar } from "@/components/demos/bistrot-gourmand/bg-progress-bar";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { DemosFooter } from "@/components/landmarks/demos-footer";
import { DemosHeader } from "@/components/landmarks/demos-header";
import { Button } from "@base-ui/react";
import { Utensils } from "lucide-react";

const headerProps = {
    transparentText: true,
    logo: (
        <a href="/demos/bistrot-gourmand#accueil" className="flex items-center">
            <Utensils className="mr-4 size-8 shrink-0" />
            <span className="font-playfair text-2xl tracking-wider [font-variant-caps:small-caps]">
                Le{' '}
                <span className="inline-block translate-y-0.5 text-[34px] text-[#8a1e1e]">
                    Bistrot
                </span>{' '}
                Gourmand
            </span>
        </a>
    ),
    navigation: [
        { title: 'Notre carte', href: '#carte' },
        { title: 'Gallerie', href: '#gallerie' },
        { title: 'Infos', href: '#infos' },
    ],
    action: (
        <Button
          
            className="mr-10 rounded-sm bg-red-900/90 px-8 py-6 text-white uppercase hover:bg-[#8a1e1e]"
        >
            <a href="#reservation">Réserver une table</a>
        </Button>
    ),
    navigationClassName: 'mr-12',
    navigationItemClassName:
        'py-2 px-3 cursor-pointer rounded-md text-[14.5px] uppercase tracking-widest backdrop-blur-lg bg-transparent',
};
const footerProps = {
    navigationLinks: [
        { title: 'Notre carte', href: '#carte' },
        { title: 'Gallerie', href: '#gallerie' },
        { title: 'Infos', href: '#infos' },
        { title: 'Réservation', href: '#reservation' },
        { title: 'Accès', href: '#acces' },
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
            href="/demos/bistrot-gourmand#accueil"
            className="flex items-center text-white"
        >
            <Utensils className="mr-4 size-8 shrink-0" />
            <span className="font-playfair text-2xl tracking-wider [font-variant-caps:small-caps]">
                Le{' '}
                <span className="inline-block translate-y-0.5 text-[34px] text-[#8a1e1e]">
                    Bistrot
                </span>{' '}
                Gourmand
            </span>
        </a>
    ),
    logoHref: '#accueil',
    description:
        "Une cuisine de saison faite maison, une sélection de vignerons locaux et la convivialité des bistrots d'antan. Labellisé Maître Restaurateur.",

    className: 'mt-24 border-t bg-black/90 dark:bg-black/50',
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
        'font-cabin text-sm text-secondary transition-colors hover:text-background dark:text-secondary-foreground dark:hover:text-foreground',
    bottomClassName:
        'mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between',
    copyrightClassName: '',
    poweredByClassName: '',
};

export default function BistrotGourmand() {
    return (
        <>
            <div className="font-karla">
                <BgProgressBar />
                <DemosHeader {...headerProps} />
                <main>
                  vzvz
                </main>
                <DemosFooter {...footerProps} />
            </div>
        </>
    );
}
