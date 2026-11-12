import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FooterLink = {
  title: string;
  href: string;
};

type Props = {
  logo: ReactNode;
  tagline?: string;
  description?: string;
  socialLinks?: ReactNode;
  navigationLinks: FooterLink[];
  legalLinks: FooterLink[];
  poweredBy?: string;

  className?: string;
  containerClassName?: string;
  gridClassName?: string;
  brandClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
  descriptionClassName?: string;
  socialLinksClassName?: string;
  navigationClassName?: string;
  legalClassName?: string;
  headingClassName?: string;
  linksClassName?: string;
  linkClassName?: string;
  bottomClassName?: string;
  copyrightClassName?: string;
  poweredByClassName?: string;
};

const currentYear = new Date().getFullYear();

export function DemosFooter({
  logo,
  tagline,
  description,
  socialLinks,
  navigationLinks,
  legalLinks,
  poweredBy,

  className,
  containerClassName,
  gridClassName,
  brandClassName,
  taglineClassName,
  descriptionClassName,
  socialLinksClassName,
  headingClassName,
  linksClassName,
  linkClassName,
  bottomClassName,
  copyrightClassName,
  poweredByClassName,
}: Props) {
  return (
    <footer className={className}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          <div className={brandClassName}>
            {logo}
            {tagline && <p className={taglineClassName}>{tagline}</p>}
            {description && <p className={descriptionClassName}>{description}</p>}
            {socialLinks && <div className={socialLinksClassName}>{socialLinks}</div>}
          </div>

          <div>
            <h2 className={headingClassName}>Navigation</h2>
            <ul className={linksClassName}>
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className={linkClassName}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClassName}>Informations</h2>
            <ul className={linksClassName}>
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <span className={cn(linkClassName, "cursor-pointer")}>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={bottomClassName}>
          <p className={copyrightClassName}>© {currentYear} — Tous droits réservés.</p>
          <p className={poweredByClassName}>{poweredBy}</p>
        </div>
      </div>
    </footer>
  );
}
