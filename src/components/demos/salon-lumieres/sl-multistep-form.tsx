import { useState, type FormEvent } from 'react';
import {
    CalendarDays,
    Check,
    ChevronLeft,
    ChevronRight,
    Clock,
    Mail,
    MapPin,
    Phone,
    RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const services = [
    {
        id: 'hydratant',
        name: 'Soin Hydratant',
        category: 'Soin Visage',
        duration: '60 min',
        price: 65,
    },
    {
        id: 'anti-age',
        name: 'Soin Anti-Âge',
        category: 'Soin Visage',
        duration: '75 min',
        price: 85,
    },
    {
        id: 'biologique',
        name: 'Soin Biologique Recherche',
        category: 'Soin Visage',
        duration: '90 min',
        price: 110,
    },
    {
        id: 'relaxant',
        name: 'Massage Relaxant',
        category: 'Massage',
        duration: '60 min',
        price: 75,
    },
    {
        id: 'pierres-chaudes',
        name: 'Massage Pierres Chaudes',
        category: 'Massage',
        duration: '75 min',
        price: 95,
    },
    {
        id: 'drainage',
        name: 'Drainage Lymphatique',
        category: 'Massage',
        duration: '60 min',
        price: 85,
    },
    {
        id: 'brushing',
        name: 'Coupe & Brushing',
        category: 'Coiffure',
        duration: '45 min',
        price: 55,
    },
    {
        id: 'coloration',
        name: 'Coloration Complète',
        category: 'Coiffure',
        duration: '120 min',
        price: 95,
    },
    {
        id: 'manucure',
        name: 'Manucure Classique',
        category: 'Onglerie',
        duration: '30 min',
        price: 38,
    },
    {
        id: 'gel',
        name: 'Pose Gel',
        category: 'Onglerie',
        duration: '60 min',
        price: 58,
    },
    {
        id: 'serenite',
        name: 'Forfait Sérénité',
        category: 'Forfait',
        duration: '2h',
        price: 120,
    },
    {
        id: 'signature',
        name: 'Forfait Lumière Signature',
        category: 'Forfait',
        duration: '3h30',
        price: 220,
    },
];

const timeSlots = [
    '09:30',
    '10:30',
    '11:30',
    '13:00',
    '14:00',
    '15:00',
    '16:30',
    '17:30',
    '18:30',
];

const steps = [
    { number: 1, label: 'Soin' },
    { number: 2, label: 'Créneau' },
    { number: 3, label: 'Infos' },
];

type BookingDetails = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    notes: string;
};

const initialDetails: BookingDetails = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
};

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function formatDate(date: string) {
    if (!date) return '';

    return new Date(`${date}T12:00:00`).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function SlMultistepForm() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [bookingDate, setBookingDate] = useState('');
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [details, setDetails] = useState<BookingDetails>(initialDetails);
    const [errors, setErrors] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    const service = services.find((item) => item.id === selectedService);

    function validateStep(): boolean {
        const nextErrors: string[] = [];

        if (step === 1 && !selectedService) {
            nextErrors.push('Veuillez sélectionner un soin pour continuer.');
        }

        if (step === 2) {
            if (!bookingDate) {
                nextErrors.push('Veuillez sélectionner une date.');
            }

            if (bookingDate && bookingDate < getToday()) {
                nextErrors.push(
                    "La date sélectionnée doit être aujourd'hui ou ultérieure.",
                );
            }

            if (!selectedTime) {
                nextErrors.push('Veuillez sélectionner un créneau horaire.');
            }
        }

        if (step === 3) {
            if (!details.firstName.trim())
                nextErrors.push('Le prénom est obligatoire.');
            if (!details.lastName.trim())
                nextErrors.push('Le nom est obligatoire.');
            if (!details.phone.trim())
                nextErrors.push('Le téléphone est obligatoire.');

            if (!details.email.trim()) {
                nextErrors.push("L'adresse email est obligatoire.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
                nextErrors.push('Veuillez saisir une adresse email valide.');
            }
        }

        setErrors(nextErrors);

        return nextErrors.length === 0;
    }

    function handleNext() {
        if (validateStep()) {
            setErrors([]);
            setStep((current) => Math.min(current + 1, 3));
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (validateStep()) {
            setErrors([]);
            setIsComplete(true);
        }
    }

    function restart() {
        setStep(1);
        setSelectedService(null);
        setBookingDate('');
        setSelectedTime(null);
        setDetails(initialDetails);
        setErrors([]);
        setIsComplete(false);
    }

    function updateDetails(field: keyof BookingDetails, value: string) {
        setDetails((current) => ({ ...current, [field]: value }));
    }

    return (
        <section id="reservation" className="px-6 py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Partie 1 : Présentation */}
                <div className="flex flex-col items-start">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 pb-12 text-[#C5A059]">
                            <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
                            <div className="text-sm font-semibold tracking-widest uppercase">
                                Une parenthèse
                            </div>
                        </div>

                        <h2 className="pb-8 font-playfair text-3xl font-normal tracking-tight sm:text-5xl">
                            Planifiez votre instant de plénitude
                        </h2>

                        <p className="pb-12 leading-loose text-balance text-muted-foreground">
                            L'assistant interactif ci-contre vous permet de
                            formuler votre demande de réservation en moins de 60
                            secondes. Nos praticiennes valideront
                            personnellement votre demande pour s'assurer que
                            votre expérience soit magique.
                        </p>
                    </div>

                    <div className="mx-auto w-1/2 rounded-full border-t" />
                    <div className="flex w-full flex-col gap-5 pt-12">
                        <div className="flex items-start gap-3">
                            <MapPin className="size-12 shrink-0 rounded-full border border-[#C5A059] bg-foreground/5 p-3 text-[#C5A059]" />
                            <p className="leading-relaxed font-medium tracking-wide text-foreground/85">
                                12 Rue du Faubourg Saint-Honoré,
                                <br />
                                75001 [Ville]
                            </p>
                        </div>

                        <a
                            href="tel:0123456789"
                            className="flex items-center gap-3 leading-relaxed font-medium tracking-wide text-foreground/85 transition-colors hover:text-[#C5A059]"
                        >
                            <Phone className="size-12 shrink-0 rounded-full border border-[#C5A059] bg-foreground/5 p-3 text-[#C5A059]" />
                            00 00 00 00 00
                        </a>

                        <a
                            href="mailto:contact@exemple.fr"
                            className="flex items-center gap-3 leading-relaxed font-medium tracking-wide text-foreground/85 transition-colors hover:text-[#C5A059]"
                        >
                            <Mail className="size-12 shrink-0 rounded-full border border-[#C5A059] bg-foreground/5 p-3 text-[#C5A059]" />
                            contact@exemple.fr
                        </a>

                        <div className="flex items-start gap-3">
                            <Clock className="size-12 shrink-0 rounded-full border border-[#C5A059] bg-foreground/5 p-3 text-[#C5A059]" />
                            <p className="leading-relaxed font-medium tracking-wide text-foreground/85">
                                Lun - Ven : 9h00 - 20h00
                                <br />
                                Sam : 9h00 - 18h00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Partie 2 : Formulaire multistep */}
                <div className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
                    {!isComplete ? (
                        <>
                            {/* Indicateur des étapes */}
                            <div className="mb-8 flex items-center">
                                {steps.map((item, index) => (
                                    <div
                                        key={item.number}
                                        className="flex flex-1 items-center last:flex-none"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <div
                                                className={`flex size-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                                                    step === item.number
                                                        ? 'border-[#C5A059] bg-[#C5A059] text-white'
                                                        : step > item.number
                                                          ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#C5A059]'
                                                          : 'border-border text-muted-foreground'
                                                }`}
                                            >
                                                {step > item.number ? (
                                                    <Check className="size-4" />
                                                ) : (
                                                    item.number
                                                )}
                                            </div>

                                            <span
                                                className={`text-xs sm:text-sm ${
                                                    step === item.number
                                                        ? 'font-medium text-foreground'
                                                        : 'text-muted-foreground'
                                                }`}
                                            >
                                                {item.label}
                                            </span>
                                        </div>

                                        {index < steps.length - 1 && (
                                            <div
                                                className={`mx-3 mb-5 h-px flex-1 ${
                                                    step > item.number
                                                        ? 'bg-[#C5A059]'
                                                        : 'bg-border'
                                                }`}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <form
                                onSubmit={
                                    step === 3
                                        ? handleSubmit
                                        : (event) => {
                                              event.preventDefault();
                                              handleNext();
                                          }
                                }
                            >
                                {/* Étape 1 : Choix du soin */}
                                {step === 1 && (
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <h3 className="font-playfair text-2xl">
                                                Sélectionnez votre soin
                                            </h3>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                Choisissez la prestation qui
                                                vous fait envie.
                                            </p>
                                        </div>

                                        <div className="grid gap-3 sm:grid-cols-2">
                                            {services.map((item) => {
                                                const isSelected =
                                                    selectedService === item.id;

                                                return (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedService(
                                                                item.id,
                                                            );
                                                            setErrors([]);
                                                        }}
                                                        aria-pressed={
                                                            isSelected
                                                        }
                                                        className={`flex min-w-0 items-start justify-between gap-3 rounded-xl border p-4 text-left transition-colors ${
                                                            isSelected
                                                                ? 'border-[#C5A059] bg-[#C5A059]/10 ring-1 ring-[#C5A059]'
                                                                : 'border-border hover:border-[#C5A059]/60'
                                                        }`}
                                                    >
                                                        <span className="min-w-0">
                                                            <span className="block text-sm leading-snug font-medium">
                                                                {item.name}
                                                            </span>
                                                            <span className="mt-1 block text-xs text-muted-foreground">
                                                                {item.category}{' '}
                                                                ·{' '}
                                                                {item.duration}
                                                            </span>
                                                        </span>

                                                        <span className="shrink-0 text-sm font-semibold">
                                                            {item.price}€
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Étape 2 : Date et horaire */}
                                {step === 2 && (
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <h3 className="font-playfair text-2xl">
                                                Choisissez votre date
                                            </h3>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                Sélectionnez le jour et
                                                l'horaire souhaités.
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="booking-date">
                                                Date souhaitée
                                            </Label>
                                            <div className="relative">
                                                <CalendarDays className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                                <Input
                                                    id="booking-date"
                                                    type="date"
                                                    min={getToday()}
                                                    value={bookingDate}
                                                    onChange={(event) => {
                                                        setBookingDate(
                                                            event.target.value,
                                                        );
                                                        setErrors([]);
                                                    }}
                                                    className="pl-10"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <Label>
                                                Choisissez votre créneau horaire
                                            </Label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedTime(
                                                                time,
                                                            );
                                                            setErrors([]);
                                                        }}
                                                        aria-pressed={
                                                            selectedTime ===
                                                            time
                                                        }
                                                        className={`rounded-lg border px-2 py-3 text-sm transition-colors ${
                                                            selectedTime ===
                                                            time
                                                                ? 'border-[#C5A059] bg-[#C5A059] font-medium text-white'
                                                                : 'border-border hover:border-[#C5A059]'
                                                        }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Créneaux fictifs pour cette
                                                maquette.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Étape 3 : Coordonnées */}
                                {step === 3 && (
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <h3 className="font-playfair text-2xl">
                                                Saisissez vos coordonnées
                                            </h3>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                Pour que notre équipe puisse
                                                vous recontacter.
                                            </p>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="first-name">
                                                    Prénom *
                                                </Label>
                                                <Input
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    value={details.firstName}
                                                    onChange={(event) =>
                                                        updateDetails(
                                                            'firstName',
                                                            event.target.value,
                                                        )
                                                    }
                                                    placeholder="Votre prénom"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="last-name">
                                                    Nom *
                                                </Label>
                                                <Input
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    value={details.lastName}
                                                    onChange={(event) =>
                                                        updateDetails(
                                                            'lastName',
                                                            event.target.value,
                                                        )
                                                    }
                                                    placeholder="Votre nom"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="phone">
                                                    Téléphone *
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    autoComplete="tel"
                                                    value={details.phone}
                                                    onChange={(event) =>
                                                        updateDetails(
                                                            'phone',
                                                            event.target.value,
                                                        )
                                                    }
                                                    placeholder="00 00 00 00 00"
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="email">
                                                    Adresse Email *
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={details.email}
                                                    onChange={(event) =>
                                                        updateDetails(
                                                            'email',
                                                            event.target.value,
                                                        )
                                                    }
                                                    placeholder="vous@exemple.fr"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="booking-notes">
                                                Demande particulière ou allergie
                                                connue
                                            </Label>
                                            <Textarea
                                                id="booking-notes"
                                                value={details.notes}
                                                onChange={(event) =>
                                                    updateDetails(
                                                        'notes',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Une précision à nous communiquer ? (facultatif)"
                                                rows={4}
                                            />
                                        </div>

                                        {/* Récapitulatif avant validation */}
                                        <div className="rounded-xl bg-muted/50 p-4">
                                            <p className="mb-3 text-sm font-medium">
                                                Récapitulatif de votre demande
                                            </p>
                                            <div className="flex flex-col gap-2 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-muted-foreground">
                                                        Soin
                                                    </span>
                                                    <span className="text-right font-medium">
                                                        {service?.name}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-muted-foreground">
                                                        Date
                                                    </span>
                                                    <span className="text-right">
                                                        {formatDate(
                                                            bookingDate,
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-muted-foreground">
                                                        Horaire
                                                    </span>
                                                    <span>{selectedTime}</span>
                                                </div>
                                                <div className="flex justify-between gap-4 border-t border-border pt-3">
                                                    <span className="font-medium">
                                                        Prix indicatif
                                                    </span>
                                                    <span className="font-semibold">
                                                        {service?.price}€
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Erreurs de validation */}
                                {errors.length > 0 && (
                                    <div
                                        role="alert"
                                        className="mt-5 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                                    >
                                        <ul className="list-inside list-disc space-y-1">
                                            {errors.map((error) => (
                                                <li key={error}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
                                    {step > 1 ? (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setStep(
                                                    (current) => current - 1,
                                                );
                                                setErrors([]);
                                            }}
                                        >
                                            <ChevronLeft className="size-4" />
                                            Retour
                                        </Button>
                                    ) : (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={restart}
                                        >
                                            <RotateCcw className="size-4" />
                                            Recommencer
                                        </Button>
                                    )}

                                    <Button
                                        type="submit"
                                        className="bg-[#C5A059] text-white hover:bg-[#B18D48]"
                                    >
                                        {step === 3
                                            ? 'Valider ma demande'
                                            : 'Continuer'}
                                        {step < 3 && (
                                            <ChevronRight className="size-4" />
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        /* Confirmation fictive */
                        <div className="flex flex-col items-center gap-6 py-8 text-center sm:py-12">
                            <div className="flex size-16 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                                <Check className="size-8" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-sm font-medium tracking-[0.2em] text-[#C5A059] uppercase">
                                    Demande terminée
                                </p>
                                <h3 className="font-playfair text-3xl">
                                    Merci {details.firstName} !
                                </h3>
                                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                                    Votre demande de réservation a bien été
                                    simulée. Cette maquette n'envoie aucune
                                    donnée et ne crée aucune réservation réelle.
                                </p>
                            </div>

                            <div className="w-full rounded-xl border border-border p-5 text-left">
                                <h4 className="mb-4 font-medium">
                                    Récapitulatif
                                </h4>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Prestation
                                        </span>
                                        <span className="text-right font-medium">
                                            {service?.name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Durée
                                        </span>
                                        <span>{service?.duration}</span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Date
                                        </span>
                                        <span className="text-right">
                                            {formatDate(bookingDate)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Horaire
                                        </span>
                                        <span>{selectedTime}</span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Nom
                                        </span>
                                        <span>
                                            {details.firstName}{' '}
                                            {details.lastName}
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-muted-foreground">
                                            Email
                                        </span>
                                        <span className="text-right break-all">
                                            {details.email}
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4 border-t border-border pt-4">
                                        <span className="font-medium">
                                            Prix indicatif
                                        </span>
                                        <span className="text-lg font-semibold">
                                            {service?.price}€
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="button"
                                onClick={restart}
                                className="bg-[#C5A059] text-white hover:bg-[#B18D48]"
                            >
                                <RotateCcw className="size-4" />
                                Recommencer une réservation
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
