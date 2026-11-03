import { useState, type FormEvent } from "react";
import { CalendarDays, Check, Clock, Users } from "lucide-react";

const timeSlots = ["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

const atmospheres = ["Peu importe", "Salle calme", "Près de la fenêtre", "Ambiance animée", "Terrasse"];

const steps = ["Créneau", "Détails", "Confirmation"];

  const today = new Date().toLocaleDateString("en-CA");


export function BgReservation() {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [atmosphere, setAtmosphere] = useState("Peu importe");
  const [comments, setComments] = useState("");

  function handleRestart() {
    setStep(1);
    setGuests("2");
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setAtmosphere("Peu importe");
    setComments("");
  }

  function handleSlotSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep(2);
  }

  function handleDetailsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep(3);
  }

  const inputClassName =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30";

  const labelClassName = "mb-2 block text-sm font-medium text-white/90";

  return (
    <section id="reservation" className="pt-46">
      <div className="w-full bg-[rgb(20,12,6)] px-8 py-16 sm:py-20">
        <div className="mb-12 pr-16 pl-8">
          <p className="text-white/80">Réservation</p>

          <h2 className="pt-2 font-playfair text-5xl tracking-wide text-background [font-variant-caps:small-caps] sm:text-6xl dark:text-foreground">
            Réservez votre table
          </h2>

          <div className="pt-2 text-xl text-yellow-500">✦</div>

          <p className="pt-4 text-lg font-light text-white/80">
            Pour garantir la qualité de notre accueil, nous limitons le nombre de tables par service. L'assistant ci-contre vous permet de
            configurer vos souhaits de placement en direct.
          </p>
        </div>

        {/* Navigation des étapes */}
        <div className="mx-auto mb-12 flex max-w-xl items-center">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            const isCompleted = step > stepNumber;
            const isCurrent = step === stepNumber;

            return (
              <div key={label} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                      isCompleted || isCurrent
                        ? "border-yellow-600 bg-yellow-600 text-white"
                        : "border-muted-foreground bg-foreground text-muted-foreground dark:bg-background"
                    }`}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    {isCompleted ? <Check className="size-5" /> : stepNumber}
                  </div>

                  <span
                    className={`text-xs whitespace-nowrap sm:text-sm ${
                      isCurrent ? "font-semibold text-background dark:text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 mb-6 h-0.5 flex-1 transition-colors ${step > stepNumber ? "bg-yellow-600" : "bg-muted-foreground"}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border bg-[rgb(35,18,11)] p-5 shadow-sm sm:p-8">
          {/* ÉTAPE 1 : CRÉNEAU */}
          {step === 1 && (
            <form onSubmit={handleSlotSubmit} className="space-y-8">
              <div>
                <h3 className="font-playfair text-3xl text-white/90">Choisissez votre créneau</h3>
                <p className="mt-2 text-sm text-muted-foreground">Quand souhaitez-vous venir au Bistrot Gourmand ?</p>
              </div>

              <div>
                <label className={labelClassName}>
                  <Users className="mr-2 inline size-4 text-white/90" />
                  Nombre de personnes
                </label>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {["1", "2", "3", "4", "5", "6+"].map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={guests === value}
                      onClick={() => setGuests(value)}
                      className={`rounded-lg border px-3 py-3 text-lg font-medium transition-colors ${
                        guests === value
                          ? "border-yellow-600 bg-yellow-600 text-white"
                          : "border-muted-foreground bg-white/5 text-white/90 hover:border-yellow-600"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="reservation-date" className={labelClassName}>
                    <CalendarDays className="mr-2 inline size-4" />
                    Date *
                  </label>
                  <input
                    id="reservation-date"
                    type="date"
                    required
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    min={today}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="reservation-time" className={labelClassName}>
                    <Clock className="mr-2 inline size-4" />
                    Heure *
                  </label>
                  <select
                    id="reservation-time"
                    required
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className={inputClassName}
                  >
                    <option value="" disabled>
                      Choisir une heure
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end border-t pt-6">
                <button
                  type="submit"
                  className="rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-700"
                >
                  Continuer
                </button>
              </div>
            </form>
          )}

          {/* ÉTAPE 2 : DÉTAILS */}
          {step === 2 && (
            <form onSubmit={handleDetailsSubmit} className="space-y-8">
              <div>
                <h3 className="font-playfair text-3xl text-white/90">Vos coordonnées</h3>
                <p className="mt-2 text-sm text-muted-foreground">Pour préparer votre venue, indiquez-nous vos informations.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="reservation-name" className={labelClassName}>
                    Nom complet *
                  </label>
                  <input
                    id="reservation-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jean Dupont"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="reservation-phone" className={labelClassName}>
                    Téléphone *
                  </label>
                  <input
                    id="reservation-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="00 00 00 00 00"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="reservation-email" className={labelClassName}>
                    Email *
                  </label>
                  <input
                    id="reservation-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jean@exemple.fr"
                    className={inputClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="reservation-atmosphere" className={labelClassName}>
                    Ambiance de salle souhaitée
                  </label>
                  <select
                    id="reservation-atmosphere"
                    value={atmosphere}
                    onChange={(event) => setAtmosphere(event.target.value)}
                    className={inputClassName}
                  >
                    {atmospheres.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="reservation-comments" className={labelClassName}>
                    Commentaires ou régimes alimentaires
                  </label>
                  <textarea
                    id="reservation-comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                    placeholder="Allergies, régime alimentaire, occasion spéciale..."
                    rows={4}
                    className={`${inputClassName} resize-y`}
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse justify-between gap-3 border-t pt-6 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-md border px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-muted"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-700"
                >
                  Vérifier ma réservation
                </button>
              </div>
            </form>
          )}

          {/* ÉTAPE 3 : CONFIRMATION */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  <Check className="size-8" />
                </div>

                <h3 className="font-playfair text-2xl text-white/90 sm:text-3xl">Votre demande est prête !</h3>
                <p className="mt-3 text-sm text-muted-foreground">Voici le récapitulatif de votre demande de réservation.</p>
              </div>

              <div className="space-y-4 rounded-xl bg-white/5 p-5 text-white/90 sm:p-6">
                <h4 className="font-semibold">Votre créneau</h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Nombre de personnes</p>
                    <p className="mt-1 font-medium">
                      {guests === "6+" ? "6 personnes ou plus" : `${guests} personne${guests === "1" ? "" : "s"}`}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Date et heure</p>
                    <p className="mt-1 font-medium">
                      {new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      à {time}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="mb-3 font-semibold">Vos coordonnées</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Nom</p>
                      <p className="mt-1 font-medium">{name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="mt-1 font-medium">{phone}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="mt-1 font-medium wrap-break-word">{email}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-sm text-muted-foreground">Ambiance souhaitée</p>
                      <p className="mt-1 font-medium">{atmosphere}</p>
                    </div>
                    {comments.trim() && (
                      <div className="sm:col-span-2">
                        <p className="text-sm text-muted-foreground">Commentaires</p>
                        <p className="mt-1 font-medium whitespace-pre-wrap">{comments}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Démonstration front-end : cette demande n'est pas envoyée au restaurant.
              </p>

              <div className="flex justify-center border-t pt-6">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-700"
                >
                  Recommencer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
