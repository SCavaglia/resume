import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Siren, Send, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Adresse Clinique & Pension",
    value: "8 Rue des Animaux, 44000 [Ville]",
  },
  {
    icon: Phone,
    title: "Téléphone standard",
    value: "00 00 00 00 00",
    href: "tel:0000000000",
  },
  {
    icon: Mail,
    title: "Courriel direct",
    value: "contact@exemple.fr",
    href: "mailto:contact@exemple.fr",
  },
  {
    icon: Clock,
    title: "Heures d'ouverture",
    value: "Lun - Ven : 9h00 – 18h00\nSam : 9h00 – 12h00",
  },
];

const prestations = [
  "Consultation vétérinaire",
  "Toilettage thérapeutique",
  "Pension / Garde nature",
  "Éducation canine positive",
  "Ostéopathie animale",
  "Promenade & Pet-sitting",
  "Autre demande",
];

export function PcContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Démonstration : aucun envoi réel n'est effectué.
    console.log("Demande de contact :", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <section
      id="rendez-vous"
      className="scroll-mt-6 relative overflow-hidden bg-[#f5f1eb] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute top-20 -left-40 h-96 w-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
            <Mail className="h-4 w-4" />
            Discutons de vos besoins
          </span>

          <h2 className="font-cormorant text-4xl font-semibold text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
            Demande de RDV & Informations
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3 text-[#b49a7b]">
            <span className="h-px w-12 bg-current" />
            <span>✦</span>
            <span className="h-px w-12 bg-current" />
          </div>

          <p className="mt-5 text-base leading-relaxed text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
            Planifiez une consultation ou une visite de pension en quelques clics.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Coordonnées */}
          <div className="flex flex-col">
            <div className="mb-7">
              <h3 className="font-cormorant text-3xl font-semibold text-[#3d352d] sm:text-4xl dark:text-[#f3eae0]">
                Coordonnées & Accès
              </h3>
              <p className="mt-2 text-sm text-[#756b60] dark:text-[#bdb2a5]">
                Retrouvez-nous et contactez notre équipe.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eae1d5] text-[#92785b] dark:bg-[#41372d] dark:text-[#d0b99c]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h4 className="text-sm font-semibold text-[#3d352d] dark:text-[#f3eae0]">
                        {item.title}
                      </h4>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-flex items-center gap-1 text-sm text-[#756b60] transition-colors hover:text-[#92785b] dark:text-[#bdb2a5] dark:hover:text-[#d0b99c]"
                        >
                          {item.value}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-relaxed whitespace-pre-line text-[#756b60] dark:text-[#bdb2a5]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Urgences */}
            <div className="mt-9 rounded-2xl border border-[#d9b9a8] bg-[#f3e5dc] p-5 dark:border-[#795044] dark:bg-[#392721]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ead0c1] text-[#a34f37] dark:bg-[#55372d] dark:text-[#e9a18a]">
                  <Siren className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#85432f] dark:text-[#e9a18a]">
                    Service d'Urgences 7j/7
                  </h4>
                  <p className="mt-1 text-xs text-[#956b5c] dark:text-[#c9a395]">
                    En dehors des ouvertures cliniques
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#765448] dark:text-[#d1b5a8]">
                Pour toute urgence, composez notre ligne d'astreinte :
              </p>

              <a
                href="tel:0698765432"
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[#85432f] transition-colors hover:text-[#a34f37] dark:text-[#e9a18a]"
              >
                <Phone className="h-4 w-4" />
                00 00 00 00 00
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-3xl border border-[#e8dfd3] bg-white p-6 shadow-sm sm:p-8 lg:p-10 dark:border-[#494035] dark:bg-[#2c2721]">
            <div className="mb-8">
              <h3 className="font-cormorant text-3xl font-semibold text-[#3d352d] sm:text-4xl dark:text-[#f3eae0]">
                Envoyez votre message
              </h3>
              <p className="mt-2 text-sm text-[#756b60] dark:text-[#bdb2a5]">
                Nous vous répondrons dans les meilleurs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Nom */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-[#51473d] dark:text-[#e5d9ca]"
                >
                  Nom & Prénom
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border border-[#e8dfd3] bg-[#faf8f5] px-4 text-sm text-[#3d352d] transition-all outline-none placeholder:text-[#a69a8c] focus:border-[#b49a7b] focus:ring-2 focus:ring-[#b49a7b]/20 dark:border-[#494035] dark:bg-[#211e1a] dark:text-[#f3eae0] dark:placeholder:text-[#82766a]"
                />
              </div>

              {/* Email et téléphone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-[#51473d] dark:text-[#e5d9ca]"
                  >
                    Adresse Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="exemple@email.fr"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-[#e8dfd3] bg-[#faf8f5] px-4 text-sm text-[#3d352d] transition-all outline-none placeholder:text-[#a69a8c] focus:border-[#b49a7b] focus:ring-2 focus:ring-[#b49a7b]/20 dark:border-[#494035] dark:bg-[#211e1a] dark:text-[#f3eae0] dark:placeholder:text-[#82766a]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-[#51473d] dark:text-[#e5d9ca]"
                  >
                    Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="00 00 00 00 00"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[#e8dfd3] bg-[#faf8f5] px-4 text-sm text-[#3d352d] transition-all outline-none placeholder:text-[#a69a8c] focus:border-[#b49a7b] focus:ring-2 focus:ring-[#b49a7b]/20 dark:border-[#494035] dark:bg-[#211e1a] dark:text-[#f3eae0] dark:placeholder:text-[#82766a]"
                  />
                </div>
              </div>

              {/* Prestation */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-service"
                  className="text-sm font-medium text-[#51473d] dark:text-[#e5d9ca]"
                >
                  Prestation requise
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-[#e8dfd3] bg-[#faf8f5] px-4 text-sm text-[#756b60] transition-all outline-none focus:border-[#b49a7b] focus:ring-2 focus:ring-[#b49a7b]/20 dark:border-[#494035] dark:bg-[#211e1a] dark:text-[#bdb2a5]"
                >
                  <option value="" disabled>
                    Choisissez une prestation
                  </option>
                  {prestations.map((prestation) => (
                    <option key={prestation} value={prestation}>
                      {prestation}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-[#51473d] dark:text-[#e5d9ca]"
                >
                  Détails de la demande
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez-nous votre besoin..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 w-full resize-y rounded-xl border border-[#e8dfd3] bg-[#faf8f5] px-4 py-3 text-sm text-[#3d352d] transition-all outline-none placeholder:text-[#a69a8c] focus:border-[#b49a7b] focus:ring-2 focus:ring-[#b49a7b]/20 dark:border-[#494035] dark:bg-[#211e1a] dark:text-[#f3eae0] dark:placeholder:text-[#82766a]"
                />
              </div>

              {/* Bouton */}
              <Button
                type="submit"
                className="mt-2 h-13 w-full rounded-xl bg-[#8b7257] text-sm font-semibold text-white transition-all hover:bg-[#725b44] dark:bg-[#a58a6a] dark:text-[#211e1a] dark:hover:bg-[#c0a581]"
              >
                Envoyer ma demande
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-[#968a7d] dark:text-[#9d9184]">
                Vos informations sont utilisées uniquement pour répondre à votre demande.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
