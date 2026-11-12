import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function MrContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section
      id="agence"
      className="bg-[#faf8f5] px-4 py-20 text-[#39342e] sm:px-6 lg:px-8 dark:bg-[#191714] dark:text-[#f4eee5]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Titre */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a78d6d] uppercase">
            <span className="h-px w-8 bg-[#bfa888]" />
            Parlons ensemble
            <span className="h-px w-8 bg-[#bfa888]" />
          </span>

          <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
            Discutons de votre projet
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777066] sm:text-base dark:text-[#b8afa3]">
            Une question, une envie ou un projet immobilier ? Notre équipe est à votre écoute pour
            vous accompagner.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Informations agence */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#a78d6d] uppercase">
                <MapPin className="mr-2 inline h-4 w-4" />
                Notre showroom de [Ville]
              </span>

              <p className="mt-5 text-sm leading-8 text-[#777066] dark:text-[#b8afa3]">
                Nos négociateurs d'exception vous accueillent au sein de notre espace de [Ville] de
                la Presqu'île pour élaborer votre projet d'acquisition ou de mise en vente.
              </p>
            </div>

            <div className="space-y-7">
              {/* Adresse */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#eee8de] text-[#a78d6d] dark:bg-[#302a22]">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold">Adresse de l'agence</h3>

                  <p className="mt-2 text-sm leading-6 text-[#777066] dark:text-[#b8afa3]">
                    42 Rue de la Charité, 69002 [Ville]
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#9b9184]">
                    Métro Bellecour (Ligne A) · Ampère (Ligne A)
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#eee8de] text-[#a78d6d] dark:bg-[#302a22]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold">Téléphone direct</h3>

                  <a
                    href="tel:+33478901234"
                    className="mt-2 inline-block text-sm text-[#777066] transition-colors hover:text-[#a78d6d] dark:text-[#b8afa3]"
                  >
                    00 00 00 00 00
                  </a>

                  <p className="mt-1 text-xs leading-6 text-[#9b9184]">
                    Accueil téléphonique de 9h00 à 19h00, du lundi au samedi
                  </p>
                </div>
              </div>

              {/* Courriel */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#eee8de] text-[#a78d6d] dark:bg-[#302a22]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold">Courriel</h3>

                  <a
                    href="mailto:contact@exemple.fr"
                    className="mt-2 inline-block text-sm text-[#777066] transition-colors hover:text-[#a78d6d] dark:text-[#b8afa3]"
                  >
                    contact@exemple.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="mt-10 border-t border-[#e5ded3] pt-6 dark:border-[#39332b]">
              <div className="flex items-center gap-3 text-[#a78d6d]">
                <Clock className="h-5 w-5" />
                <span className="text-xs font-semibold tracking-widest uppercase">
                  Disponibilité de notre équipe
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#777066] dark:text-[#b8afa3]">
                Notre équipe vous accueille du lundi au samedi pour échanger sur vos projets
                immobiliers.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="border border-[#e5ded3] bg-white p-6 shadow-sm sm:p-9 dark:border-[#39332b] dark:bg-[#211e1a]">
            <div className="mb-8">
              <h3 className="font-cormorant text-3xl font-medium">Envoyez-nous un message</h3>

              <p className="mt-2 text-sm leading-6 text-[#8a8176] dark:text-[#b8afa3]">
                Complétez le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eee8de] text-[#a78d6d] dark:bg-[#302a22]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h4 className="mt-6 font-cormorant text-2xl font-semibold">Message envoyé !</h4>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#777066] dark:text-[#b8afa3]">
                  Merci pour votre message. Notre équipe reviendra vers vous rapidement.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-none border-[#bfa888] text-[#927858] hover:bg-[#f4f1eb]"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="mr-contact-name" className="text-xs font-semibold">
                      Nom complet *
                    </label>

                    <Input
                      id="mr-contact-name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          name: event.target.value,
                        })
                      }
                      placeholder="Votre nom"
                      required
                      className="h-12 rounded-none border-[#e5ded3] bg-[#faf8f5] focus-visible:border-[#a78d6d] focus-visible:ring-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mr-contact-email" className="text-xs font-semibold">
                      Adresse e-mail *
                    </label>

                    <Input
                      id="mr-contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                        })
                      }
                      placeholder="vous@exemple.fr"
                      required
                      className="h-12 rounded-none border-[#e5ded3] bg-[#faf8f5] focus-visible:border-[#a78d6d] focus-visible:ring-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="mr-contact-phone" className="text-xs font-semibold">
                      Téléphone
                    </label>

                    <Input
                      id="mr-contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          phone: event.target.value,
                        })
                      }
                      placeholder="00 00 00 00 00"
                      className="h-12 rounded-none border-[#e5ded3] bg-[#faf8f5] focus-visible:border-[#a78d6d] focus-visible:ring-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mr-contact-subject" className="text-xs font-semibold">
                      Sujet *
                    </label>

                    <select
                      id="mr-contact-subject"
                      value={formData.subject}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          subject: event.target.value,
                        })
                      }
                      required
                      className="h-12 w-full rounded-none border border-[#e5ded3] bg-[#faf8f5] px-3 text-sm outline-none focus:border-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                    >
                      <option value="" disabled>
                        Choisir un sujet
                      </option>
                      <option value="achat">Projet d'acquisition</option>
                      <option value="vente">Mise en vente</option>
                      <option value="location">Projet de location</option>
                      <option value="estimation">Estimation immobilière</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mr-contact-message" className="text-xs font-semibold">
                    Votre message *
                  </label>

                  <Textarea
                    id="mr-contact-message"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        message: event.target.value,
                      })
                    }
                    placeholder="Décrivez-nous votre projet immobilier..."
                    required
                    rows={5}
                    className="resize-none rounded-none border-[#e5ded3] bg-[#faf8f5] focus-visible:border-[#a78d6d] focus-visible:ring-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                  />
                </div>

                <p className="text-xs leading-5 text-[#9b9184]">
                  * Champs obligatoires. Vos informations sont utilisées uniquement pour répondre à
                  votre demande.
                </p>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-none bg-[#a78d6d] text-white hover:bg-[#927858] sm:w-auto sm:min-w-52"
                >
                  Envoyer mon message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
