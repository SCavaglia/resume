import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Clock, ClipboardList, Gauge, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const vehicleTypes = [
  { id: "citadine", label: "Citadine", description: "Clio, 208, Twingo..." },
  {
    id: "berline",
    label: "Compacte / Berline",
    description: "308, Golf, Série 3...",
  },
  {
    id: "suv",
    label: "SUV / Utilitaire",
    description: "3008, Tiguan, Trafic...",
  },
];

const services = [
  {
    id: "revision",
    title: "Révision Générale & Vidange",
    description: "Changement huile moteur, filtres, mise à niveau et 45 points de contrôle.",
    prices: {
      citadine: [76, 92],
      berline: [95, 125],
      suv: [120, 155],
    },
    duration: "1h30 à 2h",
  },
  {
    id: "freins",
    title: "Remplacement Plaquettes & Disques",
    description: "Changement des éléments de friction avant ou arrière (pièces Brembo/Bosch).",
    prices: {
      citadine: [180, 260],
      berline: [220, 320],
      suv: [260, 390],
    },
    duration: "2h à 3h",
  },
  {
    id: "pneus",
    title: "Montage Pneus & Parallélisme",
    description: "Montage 2 pneus Michelin/Continental et réglage parallélisme 3D.",
    prices: {
      citadine: [180, 240],
      berline: [210, 280],
      suv: [240, 330],
    },
    duration: "1h à 1h30",
  },
  {
    id: "distribution",
    title: "Courroie de Distribution",
    description: "Remplacement kit de distribution complet, galets et pompe à eau.",
    prices: {
      citadine: [450, 650],
      berline: [500, 750],
      suv: [550, 850],
    },
    duration: "4h à 6h",
  },
  {
    id: "diagnostic",
    title: "Diagnostic Électronique",
    description: "Lecture des calculateurs, effacement des codes défauts, contrôle faisceau.",
    prices: {
      citadine: [49, 79],
      berline: [59, 89],
      suv: [69, 99],
    },
    duration: "45 min à 1h",
  },
];

const timeSlots = ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"];

type FormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  registration: string;
  notes: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  registration: "",
  notes: "",
};

type GpSimulatorProps = {
  className?: string;
};
const today = new Date().toISOString().split("T")[0];

export function GpSimulator({ className }: GpSimulatorProps) {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState("citadine");
  const [service, setService] = useState("revision");
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const selectedVehicle = vehicleTypes.find((item) => item.id === vehicle)!;
  const selectedService = services.find((item) => item.id === service)!;
  const price = selectedService.prices[vehicle as keyof typeof selectedService.prices];

  const updateForm = (field: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors([]);
  };

  const nextStep = () => {
    setErrors([]);

    if (step === 3) {
      const missingFields = [
        !form.name.trim() && "Nom complet",
        !form.phone.trim() && "Téléphone mobile",
        !form.email.trim() && "Adresse e-mail",
        !form.date && "Date souhaitée",
        !form.time && "Créneau horaire",
      ].filter(Boolean) as string[];

      if (missingFields.length > 0) {
        setErrors(missingFields);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setErrors(["Adresse e-mail invalide"]);
        return;
      }

      setCompleted(true);
      return;
    }

    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => {
    setErrors([]);
    setStep((current) => Math.max(current - 1, 1));
  };

  const restart = () => {
    setStep(1);
    setVehicle("citadine");
    setService("revision");
    setForm(initialForm);
    setErrors([]);
    setCompleted(false);
  };

  const inputClass =
    "h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/15 dark:border-white/10 dark:bg-[#111318] dark:text-white";

  const fieldLabel = "mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300";

  return (
    <section
      id="simulator"
      className={`relative overflow-hidden bg-[#f4f5f7] px-6 py-24 transition-colors duration-300 dark:bg-[#0f1115] ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute top-20 -right-40 size-96 rounded-full bg-[#e63946]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#e63946] uppercase">
            <span className="h-px w-7 bg-[#e63946]" />
            Votre entretien en quelques clics
            <span className="h-px w-7 bg-[#e63946]" />
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl lg:text-5xl dark:text-white">
            Simulateur de Devis <span className="text-[#e63946]">& Réservation</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Choisissez votre catégorie de véhicule et l'opération d'entretien souhaitée pour estimer le coût en temps réel. Bloquez ensuite
            votre rendez-vous dans le calendrier de l'atelier.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* COLONNE GAUCHE */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                  <ClipboardList size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#17191e] dark:text-white">Tarifs transparents</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Pas de mauvaise surprise. Les prix incluent les pièces d'origine constructeur et la main d'œuvre.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#17191e] dark:text-white">Garantie Constructeur Préservée</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Nous respectons scrupuleusement la fiche d'entretien de votre voiture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                  <Gauge size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#17191e] dark:text-white">Prise en charge véhicule</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Voiture de courtoisie gratuite mise à disposition pendant toute l'intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e63946]/20 bg-[#e63946]/5 p-6">
              <p className="text-xs font-bold tracking-wider text-[#e63946] uppercase">Besoin d'aide ?</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                Notre secrétariat est à votre disposition pour vos rendez-vous.
              </p>
              <a
                href="tel:0472890123"
                className="mt-4 inline-flex items-center gap-2 text-xl font-extrabold text-[#17191e] transition-colors hover:text-[#e63946] dark:text-white"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#e63946] text-white">
                  <Clock size={19} />
                </span>
                00 00 00 00 00
              </a>
            </div>
          </div>

          {/* COLONNE DROITE : SIMULATEUR */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-black/5 dark:border-white/10 dark:bg-[#191c22] dark:shadow-black/20">
            {/* Progression */}
            <div className="border-b border-neutral-200 px-6 py-7 sm:px-8 dark:border-white/10">
              <div className="flex items-center">
                {[
                  { number: 1, label: "Auto" },
                  { number: 2, label: "Prestation" },
                  { number: 3, label: "Planification" },
                ].map((item, index) => (
                  <div key={item.number} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`flex size-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                          step >= item.number
                            ? "border-[#e63946] bg-[#e63946] text-white shadow-lg shadow-[#e63946]/20"
                            : "border-neutral-200 bg-neutral-50 text-neutral-400 dark:border-white/10 dark:bg-[#111318]"
                        }`}
                      >
                        {step > item.number ? <Check size={18} /> : item.number}
                      </div>
                      <span
                        className={`text-xs font-semibold whitespace-nowrap ${step >= item.number ? "text-[#e63946]" : "text-neutral-400"}`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {index < 2 && (
                      <div className="mx-3 mb-6 h-0.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
                        <div className={`h-full bg-[#e63946] transition-all duration-500 ${step > item.number ? "w-full" : "w-0"}`} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {!completed ? (
              <div className="p-6 sm:p-8">
                {/* ÉTAPE 1 */}
                {step === 1 && (
                  <div className="animate-in duration-300 fade-in slide-in-from-right-3">
                    <div className="mb-7">
                      <span className="text-xs font-bold tracking-wider text-[#e63946] uppercase">Étape 01</span>
                      <h3 className="mt-2 text-2xl font-bold text-[#17191e] dark:text-white">Gabarit de votre véhicule</h3>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Sélectionnez la catégorie correspondant à votre voiture.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {vehicleTypes.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setVehicle(item.id)}
                          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                            vehicle === item.id
                              ? "border-[#e63946] bg-[#e63946]/5 shadow-md shadow-[#e63946]/5"
                              : "border-neutral-200 bg-white hover:border-[#e63946]/40 dark:border-white/10 dark:bg-[#111318]"
                          }`}
                        >
                          <div
                            className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                              vehicle === item.id
                                ? "bg-[#e63946] text-white"
                                : "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400"
                            }`}
                          >
                            <Gauge size={23} />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-[#17191e] dark:text-white">{item.label}</p>
                            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{item.description}</p>
                          </div>
                          <div
                            className={`flex size-5 items-center justify-center rounded-full border-2 ${
                              vehicle === item.id
                                ? "border-[#e63946] bg-[#e63946] text-white"
                                : "border-neutral-300 dark:border-neutral-600"
                            }`}
                          >
                            {vehicle === item.id && <Check size={12} />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ÉTAPE 2 */}
                {step === 2 && (
                  <div className="animate-in duration-300 fade-in slide-in-from-right-3">
                    <div className="mb-7">
                      <span className="text-xs font-bold tracking-wider text-[#e63946] uppercase">Étape 02</span>
                      <h3 className="mt-2 text-2xl font-bold text-[#17191e] dark:text-white">Sélectionnez l'intervention</h3>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Choisissez la prestation à réaliser sur votre véhicule.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {services.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setService(item.id)}
                          className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                            service === item.id
                              ? "border-[#e63946] bg-[#e63946]/5 shadow-md shadow-[#e63946]/5"
                              : "border-neutral-200 bg-white hover:border-[#e63946]/40 dark:border-white/10 dark:bg-[#111318]"
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg ${
                              service === item.id
                                ? "bg-[#e63946] text-white"
                                : "bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400"
                            }`}
                          >
                            <Wrench size={19} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-[#17191e] dark:text-white">{item.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{item.description}</p>
                            <p className="mt-2 text-xs font-semibold text-[#e63946]">
                              {item.prices[vehicle as keyof typeof item.prices][0]} – {item.prices[vehicle as keyof typeof item.prices][1]}{" "}
                              €
                            </p>
                          </div>
                          <div
                            className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                              service === item.id
                                ? "border-[#e63946] bg-[#e63946] text-white"
                                : "border-neutral-300 dark:border-neutral-600"
                            }`}
                          >
                            {service === item.id && <Check size={12} />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ÉTAPE 3 */}
                {step === 3 && (
                  <div className="animate-in duration-300 fade-in slide-in-from-right-3">
                    <div className="mb-7">
                      <span className="text-xs font-bold tracking-wider text-[#e63946] uppercase">Étape 03</span>
                      <h3 className="mt-2 text-2xl font-bold text-[#17191e] dark:text-white">Choisissez votre créneau</h3>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Renseignez vos coordonnées pour préparer votre demande de rendez-vous.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className={fieldLabel} htmlFor="gp-name">
                          Nom complet *
                        </label>
                        <input
                          id="gp-name"
                          value={form.name}
                          onChange={(e) => updateForm("name", e.target.value)}
                          placeholder="Jean Dupont"
                          className={inputClass}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={fieldLabel} htmlFor="gp-phone">
                            Téléphone mobile *
                          </label>
                          <input
                            id="gp-phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                            placeholder="00 00 00 00 00"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={fieldLabel} htmlFor="gp-email">
                            Adresse e-mail *
                          </label>
                          <input
                            id="gp-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            placeholder="jean@email.fr"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={fieldLabel} htmlFor="gp-date">
                          Date souhaitée *
                        </label>
                        <input
                          id="gp-date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={(e) => updateForm("date", e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <span className={fieldLabel}>Créneau horaire *</span>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => updateForm("time", slot)}
                              className={`rounded-lg border px-3 py-3 text-xs font-semibold transition-all ${
                                form.time === slot
                                  ? "border-[#e63946] bg-[#e63946]/10 text-[#e63946]"
                                  : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-[#e63946]/40 dark:border-white/10 dark:bg-[#111318] dark:text-neutral-400"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={fieldLabel} htmlFor="gp-registration">
                          Plaque d'immatriculation (Optionnel)
                        </label>
                        <input
                          id="gp-registration"
                          value={form.registration}
                          onChange={(e) => updateForm("registration", e.target.value.toUpperCase())}
                          placeholder="AB-123-CD"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={fieldLabel} htmlFor="gp-notes">
                          Modèle du véhicule ou remarques
                        </label>
                        <textarea
                          id="gp-notes"
                          rows={3}
                          value={form.notes}
                          onChange={(e) => updateForm("notes", e.target.value)}
                          placeholder="Précisez le modèle, l'année ou toute information utile..."
                          className="w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/15 dark:border-white/10 dark:bg-[#111318] dark:text-white"
                        />
                      </div>
                    </div>

                    {errors.length > 0 && (
                      <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-400">
                        <p className="font-bold">Veuillez vérifier les informations suivantes :</p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {errors.map((error) => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* ESTIMATION */}
                <div className="mt-8 rounded-xl border border-[#e63946]/20 bg-[#e63946]/5 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-[#e63946]" />
                    <p className="text-sm font-bold text-[#17191e] dark:text-white">Estimation tarifaire immédiate</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="text-neutral-500 dark:text-neutral-400">Gabarit</span>
                      <span className="font-semibold text-[#17191e] dark:text-white">{selectedVehicle.label}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-neutral-500 dark:text-neutral-400">Opération</span>
                      <span className="text-right font-semibold text-[#17191e] dark:text-white">{selectedService.title}</span>
                    </div>
                  </div>

                  <div className="my-4 border-t border-[#e63946]/15" />

                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Estimation TTC</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Pièces et main d'œuvre comprises</p>
                    </div>
                    <p className="text-2xl font-black tracking-tight text-[#e63946]">
                      {price[0]} – {price[1]} €
                    </p>
                  </div>

                  <p className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <ShieldCheck size={14} className="text-[#e63946]" />
                    Garantie 24 mois · Estimation indicative
                  </p>
                </div>

                {/* Navigation */}
                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-neutral-200 px-5 text-sm font-bold text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/5"
                    >
                      <ArrowLeft size={17} />
                      Retour
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#e63946] px-6 text-sm font-bold text-white shadow-lg shadow-[#e63946]/20 transition-all hover:-translate-y-0.5 hover:bg-[#cf2938] hover:shadow-xl hover:shadow-[#e63946]/25"
                  >
                    {step === 3 ? "Confirmer mon RDV" : "Étape suivante"}
                    {step === 3 ? <Check size={18} /> : <ArrowRight size={18} />}
                  </button>
                </div>
              </div>
            ) : (
              /* RÉCAPITULATIF FINAL */
              <div className="p-6 text-center sm:p-10">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={42} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase dark:text-emerald-400">
                  Demande préparée
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#17191e] dark:text-white">Votre demande de rendez-vous</h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Voici le récapitulatif de votre simulation. Cette maquette ne transmet pas réellement de réservation à l'atelier.
                </p>

                <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-left dark:border-white/10 dark:bg-[#111318]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Récapitulatif</span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Simulation
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    {[
                      ["Véhicule", selectedVehicle.label],
                      ["Prestation", selectedService.title],
                      ["Durée estimée", selectedService.duration],
                      ["Nom", form.name],
                      ["Téléphone", form.phone],
                      ["E-mail", form.email],
                      ["Date souhaitée", form.date],
                      ["Créneau", form.time],
                      ...(form.registration ? [["Immatriculation", form.registration]] : []),
                      ...(form.notes ? [["Remarques", form.notes]] : []),
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                        <span className="text-neutral-500 dark:text-neutral-400">{label}</span>
                        <span className="font-semibold text-[#17191e] sm:text-right dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-5 dark:border-white/10">
                    <span className="font-bold text-[#17191e] dark:text-white">Estimation tarifaire</span>
                    <span className="text-xl font-black text-[#e63946]">
                      {price[0]} – {price[1]} €
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={restart}
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#e63946] px-7 text-sm font-bold text-white shadow-lg shadow-[#e63946]/20 transition-all hover:-translate-y-0.5 hover:bg-[#cf2938]"
                >
                  <ArrowLeft size={17} />
                  Recommencer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
