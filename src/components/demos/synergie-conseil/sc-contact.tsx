import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ScContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f5f3ee] px-6 py-24 sm:px-10 lg:px-16 dark:bg-[#0d1f2d]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#b4966e]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#35536b]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#94764e] uppercase dark:text-[#d0b997]">
            <Mail className="size-4" />
            Échange confidentiel
          </div>

          <h2 className="font-cormorant text-4xl font-semibold text-[#172b3a] sm:text-5xl lg:text-6xl dark:text-[#f5f3ee]">
            Briefing & <span className="text-[#a88960] dark:text-[#c6a77e]">Contact Privé</span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b4966e]/50" />
            <span className="size-1.5 rotate-45 bg-[#b4966e]" />
            <span className="h-px w-12 bg-[#b4966e]/50" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#77736c] dark:text-[#b6c0c8]">
            Notre équipe est à votre écoute pour étudier vos enjeux professionnels et vous orienter
            vers les experts adaptés.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Left: Contact information */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#172b3a] via-[#102333] to-[#0b1925] p-8 text-white shadow-xl shadow-[#172b3a]/15 sm:p-10">
            <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full border border-[#b4966e]/15" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-[#b4966e]/10 blur-[70px]" />

            <div className="relative">
              <div className="mb-7 flex size-12 items-center justify-center rounded-xl border border-[#b4966e]/30 bg-[#b4966e]/10 text-[#d0b997]">
                <MapPin className="size-6" />
              </div>

              <span className="text-xs font-semibold tracking-[0.2em] text-[#d0b997] uppercase">
                Nous trouver
              </span>

              <h3 className="mt-2 font-cormorant text-3xl font-semibold sm:text-4xl">
                Notre cabinet de [Ville]
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Idéalement situé au cœur du 8ème arrondissement, à quelques minutes de la place de
                la Madeleine. Nous accueillons nos clients professionnels dans des salons privatifs
                garantissant une totale confidentialité.
              </p>

              <div className="my-9 h-px bg-gradient-to-r from-[#b4966e]/50 to-transparent" />

              <div className="space-y-7">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#d0b997]">
                    <MapPin className="size-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.15em] text-[#d0b997] uppercase">
                      Adresse
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      32 Boulevard Malesherbes,
                      <br />
                      75008 [Ville]
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Métro Saint-Augustin (Ligne 9)
                      <br />
                      Madeleine (L12, L14)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#d0b997]">
                    <Phone className="size-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.15em] text-[#d0b997] uppercase">
                      Secrétariat
                    </h4>
                    <a
                      href="tel:+33145678901"
                      className="mt-2 block text-sm text-white/85 transition-colors hover:text-[#d0b997]"
                    >
                      00 00 00 00 00
                    </a>
                    <p className="mt-2 flex items-center gap-2 text-xs text-white/45">
                      <Clock3 className="size-3.5" />
                      Du lundi au vendredi
                      <br />
                      de 9h00 à 18h00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#d0b997]">
                    <Mail className="size-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.15em] text-[#d0b997] uppercase">
                      Courriel
                    </h4>
                    <a
                      href="mailto:contact@exemple.com"
                      className="mt-2 block text-sm break-all text-white/85 transition-colors hover:text-[#d0b997]"
                    >
                      contact@exemple.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-9 rounded-xl border border-[#b4966e]/20 bg-white/[0.04] p-5">
                <div className="flex items-start gap-3">
                  <LockKeyhole className="mt-0.5 size-5 shrink-0 text-[#d0b997]" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#d0b997]">
                      Confidentialité & déontologie
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-white/55">
                      Confidentialité professionnelle et secret déontologique garantis dans le
                      respect des règles applicables aux avocats et experts-comptables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-2xl border border-[#b4966e]/20 bg-white p-7 shadow-sm sm:p-10 dark:bg-[#142b3b]">
            {submitted ? (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                <div className="mb-7 flex size-20 items-center justify-center rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 text-[#a88960] dark:text-[#d0b997]">
                  <CheckCircle2 className="size-10" />
                </div>

                <span className="text-xs font-semibold tracking-[0.2em] text-[#a88960] uppercase dark:text-[#c6a77e]">
                  Message envoyé
                </span>

                <h3 className="mt-3 font-cormorant text-4xl font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                  Merci pour votre confiance.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#77736c] dark:text-[#b6c0c8]">
                  Votre demande a bien été prise en compte. Notre secrétariat reviendra vers vous
                  dans les meilleurs délais.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#b4966e]/40 px-6 py-3 text-sm font-semibold text-[#94764e] transition-colors hover:bg-[#b4966e]/10 dark:text-[#d0b997]"
                >
                  Nouveau message
                  <ArrowRight className="size-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#a88960] uppercase dark:text-[#c6a77e]">
                    Votre demande
                  </span>

                  <h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#172b3a] sm:text-4xl dark:text-[#f5f3ee]">
                    Parlons de vos enjeux.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#77736c] dark:text-[#b6c0c8]">
                    Présentez-nous votre besoin. Un membre de notre équipe vous recontactera
                    personnellement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sc-contact-name"
                        className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                      >
                        Nom & Prénom *
                      </label>
                      <input
                        id="sc-contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jean Dupont"
                        className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sc-contact-company"
                        className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                      >
                        Entreprise
                      </label>
                      <input
                        id="sc-contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nom de votre société"
                        className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sc-contact-email"
                        className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                      >
                        Email professionnel *
                      </label>
                      <input
                        id="sc-contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="jean@entreprise.fr"
                        className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sc-contact-phone"
                        className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                      >
                        Téléphone
                      </label>
                      <input
                        id="sc-contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="00 00 00 00 00"
                        className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sc-contact-subject"
                      className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                    >
                      Objet de votre demande *
                    </label>
                    <select
                      id="sc-contact-subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 text-sm text-[#172b3a] transition-colors outline-none focus:border-[#b4966e] dark:bg-[#142b3b] dark:text-[#f5f3ee]"
                    >
                      <option value="" disabled>
                        Sélectionnez un sujet
                      </option>
                      <option value="legal">Droit & Juridique B2B</option>
                      <option value="accounting">Expertise-Comptable</option>
                      <option value="strategy">Conseil & Transformation</option>
                      <option value="wealth">Gestion de Patrimoine</option>
                      <option value="other">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="sc-contact-message"
                      className="mb-2 block text-xs font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                    >
                      Votre message *
                    </label>
                    <textarea
                      id="sc-contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Décrivez brièvement votre besoin et les enjeux de votre entreprise..."
                      className="w-full resize-y rounded-lg border border-[#b4966e]/20 bg-[#f8f6f1] px-4 py-3 text-sm leading-6 text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                    />
                  </div>

                  <p className="text-xs leading-5 text-[#89847b] dark:text-[#aab5bd]">
                    * Champs obligatoires. Vos informations sont utilisées uniquement pour traiter
                    votre demande.
                  </p>

                  <button
                    type="submit"
                    className={cn(
                      "group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#b4966e] px-6 py-4 text-sm font-semibold text-white shadow-md shadow-[#b4966e]/15 transition-all duration-300",
                      "hover:-translate-y-0.5 hover:bg-[#9d8058] hover:shadow-lg hover:shadow-[#b4966e]/20",
                    )}
                  >
                    Envoyer ma demande
                    <Send className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[10px] tracking-wide text-[#aaa49a] dark:text-white/35">
                    <LockKeyhole className="size-3.5" />
                    Échange confidentiel et sécurisé
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
