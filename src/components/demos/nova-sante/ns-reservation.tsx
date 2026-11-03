import { useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
    CheckCircle2,
    Clock,
    HeartPulse,
    ShieldCheck,
    UserRound,
    Users,
} from 'lucide-react';

const practitioners = [
    {
        name: 'Dr Marc Dubois',
        specialty: 'Médecin Généraliste',
        icon: HeartPulse,
    },
    {
        name: 'Dr Sophie Lambert',
        specialty: 'Chirurgien-Dentiste',
        icon: UserRound,
    },
    {
        name: 'Thomas Renard',
        specialty: 'Kinésithérapeute',
        icon: Users,
    },
    {
        name: 'Claire Moreau',
        specialty: 'Psychologue Clinicienne',
        icon: UserRound,
    },
];

const timeSlots = ['09:00', '10:30', '14:00', '15:30', '17:00'];

const steps = [
    { title: 'Praticien', description: 'Choisissez votre spécialiste' },
    { title: 'Créneau', description: 'Date et heure du rendez-vous' },
    { title: 'Informations', description: 'Vos coordonnées' },
    { title: 'Récapitulatif', description: 'Vérifiez votre demande' },
];

const initialDate = '2026-10-28';

 const today = new Date().toLocaleDateString("en-CA");

type FormData = {
    practitioner: number | null;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    reason: string;
};

const initialFormData: FormData = {
    practitioner: 0,
    date: initialDate,
    time: '09:00',
    name: '',
    email: '',
    phone: '',
    reason: '',
};

function formatAppointmentDate(date: string, time: string) {
    if (!date || !time) return 'Non renseigné';

    const [year, month, day] = date.split('-').map(Number);
    const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
        'fr-FR',
        {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        },
    );

    return `${formattedDate} à ${time}`;
}

export function NsReservation() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [confirmed, setConfirmed] = useState(false);

    const selectedPractitioner =
        formData.practitioner !== null
            ? practitioners[formData.practitioner]
            : null;

    const updateField = <K extends keyof FormData>(
        field: K,
        value: FormData[K],
    ) => {
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const canContinue = () => {
        if (step === 0) return formData.practitioner !== null;
        if (step === 1) return Boolean(formData.date && formData.time);
        if (step === 2) {
            return (
                formData.name.trim().length > 0 &&
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                formData.phone.trim().length > 0
            );
        }

        return true;
    };

    const handleNext = () => {
        if (!canContinue()) return;
        setStep((current) => Math.min(current + 1, 3));
    };

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setStep(0);
        setConfirmed(false);
    };

    return (
        <section id="reservation" className="scroll-mt-6 px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Réservations
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Prise de rendez-vous en ligne
                    </h2>
                    <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                        Planifiez votre consultation médicale ou paramédicale en
                        moins de 2 minutes avec confirmation instantanée.
                    </p>
                </div>

                <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[300px_minmax(0,1fr)]">
                    {/* Navigation verticale */}
                    <aside className="flex flex-col border-b border-border bg-muted/40 p-6 sm:p-8 lg:border-r lg:border-b-0">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                <HeartPulse
                                    className="size-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <p className="font-semibold">NovaSanté RDV</p>
                                <p className="text-xs text-muted-foreground">
                                    Votre santé, notre priorité
                                </p>
                            </div>
                        </div>

                        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                            Suivez les étapes ci-dessous pour planifier votre
                            rendez-vous de santé.
                        </p>

                        <nav
                            aria-label="Étapes du rendez-vous"
                            className="mb-8"
                        >
                            <ol className="space-y-2">
                                {steps.map((item, index) => {
                                    const isCurrent =
                                        step === index && !confirmed;
                                    const isComplete =
                                        step > index || confirmed;

                                    return (
                                        <li key={item.title}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (confirmed) return;
                                                    if (index < step)
                                                        setStep(index);
                                                }}
                                                disabled={
                                                    confirmed || index >= step
                                                }
                                                aria-current={
                                                    isCurrent
                                                        ? 'step'
                                                        : undefined
                                                }
                                                className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors ${
                                                    isCurrent
                                                        ? 'bg-primary/10'
                                                        : 'hover:bg-muted'
                                                }`}
                                            >
                                                <span
                                                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                                                        isCurrent
                                                            ? 'border-primary bg-primary text-primary-foreground'
                                                            : isComplete
                                                              ? 'border-primary bg-primary text-primary-foreground'
                                                              : 'border-border bg-background text-muted-foreground'
                                                    }`}
                                                >
                                                    {isComplete ? (
                                                        <Check
                                                            className="size-4"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        index + 1
                                                    )}
                                                </span>
                                                <span className="flex flex-col gap-1 pt-0.5">
                                                    <span
                                                        className={`text-sm font-semibold ${
                                                            isCurrent
                                                                ? 'text-primary'
                                                                : ''
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </span>
                                                    <span className="text-xs leading-relaxed text-muted-foreground">
                                                        {item.description}
                                                    </span>
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>

                        <div className="mt-auto rounded-xl border border-border bg-card p-4">
                            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                                <ShieldCheck
                                    className="size-4 text-primary"
                                    aria-hidden="true"
                                />
                                Une urgence médicale ?
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                                En cas de risque vital, contactez directement le{' '}
                                <a
                                    href="tel:15"
                                    className="font-semibold text-foreground underline underline-offset-2"
                                >
                                    15
                                </a>{' '}
                                ou le{' '}
                                <a
                                    href="tel:112"
                                    className="font-semibold text-foreground underline underline-offset-2"
                                >
                                    112
                                </a>
                                .
                            </p>
                        </div>
                    </aside>

                    {/* Formulaire */}
                    <div className="min-w-0 p-6 sm:p-8 lg:p-10">
                        {confirmed ? (
                            <div className="flex min-h-120 flex-col items-center justify-center py-10 text-center">
                                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <CheckCircle2
                                        className="size-11"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p className="mb-3 text-sm font-semibold tracking-[0.15em] text-primary uppercase">
                                    Confirmation
                                </p>
                                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                    Rendez-vous validé !
                                </h3>
                                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                                    Votre rendez-vous avec{' '}
                                    <span className="font-medium text-foreground">
                                        {selectedPractitioner?.name}
                                    </span>{' '}
                                    est enregistré le{' '}
                                    <span className="font-medium text-foreground">
                                        {formatAppointmentDate(
                                            formData.date,
                                            formData.time,
                                        )}
                                    </span>
                                    .
                                </p>

                                <div className="mt-8 w-full max-w-md rounded-xl border border-border bg-muted/30 p-5 text-left">
                                    <p className="text-sm text-muted-foreground">
                                        Référence dossier
                                    </p>
                                    <p className="mt-1 text-xl font-semibold tracking-wide">
                                        NS-352429
                                    </p>
                                    <div className="mt-4 border-t border-border pt-4">
                                        <p className="text-sm font-medium">
                                            Démonstration uniquement
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            Aucun rendez-vous réel n'est
                                            enregistré et aucun e-mail n'est
                                            envoyé. Cette confirmation est
                                            fictive.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                >
                                    Retour au formulaire
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-primary">
                                            Étape {step + 1} sur {steps.length}
                                        </p>
                                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                            {
                                                [
                                                    'Sélectionnez votre praticien',
                                                    'Date & heure souhaitées',
                                                    'Informations personnelles',
                                                    'Confirmez vos informations',
                                                ][step]
                                            }
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                            {
                                                [
                                                    'Choisissez le professionnel de santé que vous souhaitez consulter.',
                                                    'Choisissez une date et un créneau pour votre consultation.',
                                                    'Renseignez vos coordonnées pour préparer votre rendez-vous.',
                                                    'Vérifiez les informations avant de confirmer votre demande.',
                                                ][step]
                                            }
                                        </p>
                                    </div>
                                    <span className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                                        {step === 0 && (
                                            <Users
                                                className="size-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                        {step === 1 && (
                                            <CalendarDays
                                                className="size-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                        {step === 2 && (
                                            <UserRound
                                                className="size-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                        {step === 3 && (
                                            <CheckCircle2
                                                className="size-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </span>
                                </div>

                                {/* Étape 1 */}
                                {step === 0 && (
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {practitioners.map(
                                            (practitioner, index) => {
                                                const Icon = practitioner.icon;
                                                const selected =
                                                    formData.practitioner ===
                                                    index;

                                                return (
                                                    <button
                                                        key={practitioner.name}
                                                        type="button"
                                                        onClick={() =>
                                                            updateField(
                                                                'practitioner',
                                                                index,
                                                            )
                                                        }
                                                        aria-pressed={selected}
                                                        className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                                                            selected
                                                                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                                                : 'border-border hover:border-primary/50 hover:bg-muted/40'
                                                        }`}
                                                    >
                                                        <span
                                                            className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                                                                selected
                                                                    ? 'bg-primary text-primary-foreground'
                                                                    : 'bg-muted text-muted-foreground'
                                                            }`}
                                                        >
                                                            <Icon
                                                                className="size-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                        <span className="min-w-0 flex-1">
                                                            <span className="block font-semibold">
                                                                {
                                                                    practitioner.name
                                                                }
                                                            </span>
                                                            <span className="mt-1 block text-sm text-muted-foreground">
                                                                {
                                                                    practitioner.specialty
                                                                }
                                                            </span>
                                                        </span>
                                                        <span
                                                            className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                                                                selected
                                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                                    : 'border-border'
                                                            }`}
                                                        >
                                                            {selected && (
                                                                <Check
                                                                    className="size-3"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </button>
                                                );
                                            },
                                        )}
                                    </div>
                                )}

                                {/* Étape 2 */}
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <label
                                                htmlFor="appointment-date"
                                                className="block text-sm font-medium"
                                            >
                                                Date de consultation
                                            </label>
                                            <input
                                                id="appointment-date"
                                                type="date"
                                                min={today}
                                                value={formData.date}
                                                onChange={(event) =>
                                                    updateField(
                                                        'date',
                                                        event.target.value,
                                                    )
                                                }
                                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 sm:max-w-sm"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm font-medium">
                                                Créneaux disponibles
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                                {timeSlots.map((time) => {
                                                    const selected =
                                                        formData.time === time;

                                                    return (
                                                        <button
                                                            key={time}
                                                            type="button"
                                                            onClick={() =>
                                                                updateField(
                                                                    'time',
                                                                    time,
                                                                )
                                                            }
                                                            aria-pressed={
                                                                selected
                                                            }
                                                            className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                                                                selected
                                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                                    : 'border-border hover:border-primary/50 hover:bg-muted/40'
                                                            }`}
                                                        >
                                                            <Clock
                                                                className="size-4"
                                                                aria-hidden="true"
                                                            />
                                                            {time}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            <p className="text-xs leading-relaxed text-muted-foreground">
                                                Créneaux fictifs pour cette
                                                démonstration. Leur
                                                disponibilité réelle n'est pas
                                                vérifiée.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Étape 3 */}
                                {step === 2 && (
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="patient-name"
                                                className="text-sm font-medium"
                                            >
                                                Nom & Prénom
                                            </label>
                                            <input
                                                id="patient-name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                value={formData.name}
                                                onChange={(event) =>
                                                    updateField(
                                                        'name',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Jean Dupont"
                                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="patient-email"
                                                className="text-sm font-medium"
                                            >
                                                Adresse Email
                                            </label>
                                            <input
                                                id="patient-email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={formData.email}
                                                onChange={(event) =>
                                                    updateField(
                                                        'email',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="jean@exemple.fr"
                                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                            />
                                        </div>

                                        <div className="space-y-2 sm:col-span-2">
                                            <label
                                                htmlFor="patient-phone"
                                                className="text-sm font-medium"
                                            >
                                                Numéro de Téléphone
                                            </label>
                                            <input
                                                id="patient-phone"
                                                type="tel"
                                                autoComplete="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(event) =>
                                                    updateField(
                                                        'phone',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="00 00 00 00 00"
                                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                            />
                                        </div>

                                        <div className="space-y-2 sm:col-span-2">
                                            <label
                                                htmlFor="patient-reason"
                                                className="text-sm font-medium"
                                            >
                                                Motif de consultation{' '}
                                                <span className="font-normal text-muted-foreground">
                                                    (Optionnel)
                                                </span>
                                            </label>
                                            <textarea
                                                id="patient-reason"
                                                rows={4}
                                                value={formData.reason}
                                                onChange={(event) =>
                                                    updateField(
                                                        'reason',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Décrivez brièvement le motif de votre consultation..."
                                                className="w-full resize-y rounded-md border border-input bg-background px-3 py-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Étape 4 */}
                                {step === 3 && (
                                    <div className="space-y-5">
                                        <div className="rounded-xl border border-border">
                                            <div className="flex items-center gap-3 border-b border-border p-4">
                                                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <CalendarDays
                                                        className="size-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Votre consultation
                                                    </p>
                                                    <p className="font-semibold">
                                                        {formatAppointmentDate(
                                                            formData.date,
                                                            formData.time,
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <dl className="divide-y divide-border">
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Praticien
                                                    </dt>
                                                    <dd className="text-sm font-medium">
                                                        {selectedPractitioner?.name ??
                                                            'Non renseigné'}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Spécialité
                                                    </dt>
                                                    <dd className="text-sm font-medium">
                                                        {selectedPractitioner?.specialty ??
                                                            'Non renseignée'}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Date & Heure
                                                    </dt>
                                                    <dd className="text-sm font-medium">
                                                        {formatAppointmentDate(
                                                            formData.date,
                                                            formData.time,
                                                        )}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Patient
                                                    </dt>
                                                    <dd className="text-sm font-medium wrap-break-word">
                                                        {formData.name}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Email
                                                    </dt>
                                                    <dd className="text-sm font-medium wrap-break-word">
                                                        {formData.email}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Téléphone
                                                    </dt>
                                                    <dd className="text-sm font-medium">
                                                        {formData.phone}
                                                    </dd>
                                                </div>
                                                <div className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                                                    <dt className="text-sm text-muted-foreground">
                                                        Motif
                                                    </dt>
                                                    <dd className="text-sm font-medium">
                                                        {formData.reason.trim() ||
                                                            'Non précisé'}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                                            <ShieldCheck
                                                className="mt-0.5 size-5 shrink-0 text-primary"
                                                aria-hidden="true"
                                            />
                                            <p className="text-xs leading-relaxed text-muted-foreground">
                                                En validant, vous acceptez le
                                                partage de ces données dans le
                                                cadre de votre prise en charge.
                                                Dans cette maquette, aucune
                                                donnée n'est envoyée à un
                                                serveur.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation du formulaire */}
                                <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setStep((current) =>
                                                Math.max(current - 1, 0),
                                            )
                                        }
                                        disabled={step === 0}
                                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
                                    >
                                        <ArrowLeft
                                            className="size-4"
                                            aria-hidden="true"
                                        />
                                        Retour
                                    </button>

                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={!canContinue()}
                                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
                                        >
                                            Continuer
                                            <ArrowRight
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleConfirm}
                                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                        >
                                            <CheckCircle2
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                            Confirmer le Rendez-vous
                                        </button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
                    Maquette de démonstration : les praticiens, créneaux et
                    confirmations sont fictifs. Aucun rendez-vous réel n'est
                    pris et aucun e-mail n'est envoyé.
                </p>
            </div>
        </section>
    );
}
