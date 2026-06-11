"use client";

import { FormEvent, useMemo, useState } from "react";
import { MaterialIcon } from "@/components/material-icon";
import {
  APPOINTMENT_SERVICES,
  formatAppointmentDate,
  formatAppointmentDateLong,
  fromDateKey,
  getBookableDates,
  getTimeSlotsForDate,
  toDateKey,
  type AppointmentService,
} from "@/lib/appointments";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/images";

const STEPS = [
  { id: 1, label: "Prestation" },
  { id: 2, label: "Créneau" },
  { id: 3, label: "Confirmation" },
] as const;

function buildWhatsAppLink(message: string): string {
  const base = WHATSAPP_URL.split("?")[0];
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function AppointmentBooking() {
  const bookableDates = useMemo(() => getBookableDates(), []);
  const [step, setStep] = useState(1);
  const [service, setService] = useState<AppointmentService>(
    APPOINTMENT_SERVICES[0],
  );
  const [device, setDevice] = useState("");
  const [dateKey, setDateKey] = useState(() => toDateKey(bookableDates[0]));
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [summary, setSummary] = useState<{
    dateLabel: string;
    slotLabel: string;
    service: AppointmentService;
    whatsappLink: string;
  } | null>(null);

  const selectedDate = fromDateKey(dateKey);
  const timeSlots = useMemo(
    () => getTimeSlotsForDate(selectedDate),
    [selectedDate],
  );
  const availableSlots = timeSlots.filter((item) => item.available);

  function goToStep(next: number) {
    setStep(next);
  }

  function handleDateChange(nextKey: string) {
    setDateKey(nextKey);
    setSlot(null);
  }

  function handleStepTwoNext() {
    if (!slot) return;
    goToStep(3);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const notes = String(data.get("notes") ?? "");
    const selectedSlot = timeSlots.find((item) => item.value === slot);

    if (!selectedSlot) return;

    const dateLabel = formatAppointmentDateLong(selectedDate);
    const slotLabel = selectedSlot.label;
    const message = [
      "Bonjour Répatech,",
      "",
      "Je souhaite réserver un rendez-vous :",
      `• Prestation : ${service}`,
      device ? `• Appareil : ${device}` : null,
      `• Date : ${dateLabel}`,
      `• Créneau : ${slotLabel}`,
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      email ? `Email : ${email}` : null,
      notes ? `Notes : ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (email) {
      window.open(
        `mailto:?subject=${encodeURIComponent(`Rendez-vous Répatech — ${dateLabel} ${slotLabel}`)}&body=${encodeURIComponent(message)}`,
        "_blank",
      );
    }

    setSummary({
      dateLabel,
      slotLabel,
      service,
      whatsappLink: buildWhatsAppLink(message),
    });
    setConfirmed(true);
  }

  if (confirmed && summary) {
    return (
      <div className="rounded-xl border-2 border-primary bg-primary-fixed p-lg text-center">
        <MaterialIcon
          name="check_circle"
          size={48}
          className="mx-auto mb-md text-primary"
        />
        <p className="mb-sm font-headline-md text-primary">
          Demande de rendez-vous envoyée
        </p>
        <p className="mb-md text-on-surface-variant">
          Créneau souhaité :{" "}
          <strong className="text-on-surface">
            {summary.dateLabel} à {summary.slotLabel}
          </strong>{" "}
          — {summary.service}. Envoyez la demande sur WhatsApp ou appelez-nous
          pour confirmation.
        </p>
        <div className="flex flex-col items-center justify-center gap-sm sm:flex-row">
          <a
            href={summary.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-xs rounded-lg bg-primary px-lg py-sm font-label-bold text-white hard-shadow"
          >
            Envoyer sur WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="btn-press inline-flex items-center gap-xs rounded-lg border-2 border-primary bg-white px-lg py-sm font-label-bold text-primary hard-shadow"
          >
            <MaterialIcon name="call" size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-lg">
      <ol className="grid grid-cols-3 gap-xs">
        {STEPS.map(({ id, label }) => {
          const active = step === id;
          const done = step > id;
          return (
            <li
              key={id}
              className={`rounded-lg border-2 px-sm py-sm text-center text-sm font-label-bold transition-colors ${
                active
                  ? "border-primary bg-primary text-white"
                  : done
                    ? "border-secondary-container bg-secondary-container/30 text-primary"
                    : "border-outline-variant bg-surface-container-low text-on-surface-variant"
              }`}
            >
              <span className="block text-[10px] opacity-80">Étape {id}</span>
              {label}
            </li>
          );
        })}
      </ol>

      {step === 1 && (
        <div className="space-y-md">
          <h3 className="flex items-center gap-sm font-headline-md text-primary">
            <MaterialIcon name="engineering" className="text-secondary-container" />
            Quelle prestation ?
          </h3>
          <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
            {APPOINTMENT_SERVICES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setService(item)}
                className={`rounded-lg border-2 px-md py-sm text-left font-label-bold transition-all ${
                  service === item
                    ? "border-primary bg-primary-fixed text-primary hard-shadow"
                    : "border-outline-variant bg-white text-on-surface hover:border-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <label
              htmlFor="appointment-device"
              className="mb-xs block font-label-bold text-primary"
            >
              Appareil / modèle (optionnel)
            </label>
            <input
              id="appointment-device"
              type="text"
              value={device}
              onChange={(event) => setDevice(event.target.value)}
              placeholder="Ex : Dualtron Ultra, iPhone 13..."
              className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => goToStep(2)}
              className="btn-press rounded-lg border-2 border-primary bg-secondary-container px-xl py-sm font-label-bold text-on-secondary-container hard-shadow"
            >
              Choisir un créneau
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-md">
          <h3 className="flex items-center gap-sm font-headline-md text-primary">
            <MaterialIcon
              name="calendar_month"
              className="text-secondary-container"
            />
            Date et heure
          </h3>

          <div>
            <p className="mb-sm font-label-bold text-primary">Jour</p>
            <div className="flex gap-sm overflow-x-auto pb-xs">
              {bookableDates.map((date) => {
                const key = toDateKey(date);
                const active = key === dateKey;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleDateChange(key)}
                    className={`min-w-[5.5rem] shrink-0 rounded-lg border-2 px-sm py-sm text-center transition-all ${
                      active
                        ? "border-primary bg-primary text-white hard-shadow"
                        : "border-outline-variant bg-white text-on-surface hover:border-primary"
                    }`}
                  >
                    <span className="block text-[10px] uppercase opacity-80">
                      {new Intl.DateTimeFormat("fr-FR", {
                        weekday: "short",
                      }).format(date)}
                    </span>
                    <span className="block font-label-bold">
                      {date.getDate()}{" "}
                      {new Intl.DateTimeFormat("fr-FR", {
                        month: "short",
                      }).format(date)}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-xs text-sm text-on-surface-variant">
              {formatAppointmentDate(selectedDate)} — Lun.–Sam. 10h–19h
            </p>
          </div>

          <div>
            <p className="mb-sm font-label-bold text-primary">Créneau</p>
            {availableSlots.length === 0 ? (
              <p className="rounded-lg border-2 border-outline-variant bg-surface-container-low p-md text-on-surface-variant">
                Aucun créneau disponible ce jour. Choisissez une autre date.
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-sm sm:grid-cols-4 md:grid-cols-5">
                {timeSlots.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    disabled={!item.available}
                    onClick={() => setSlot(item.value)}
                    className={`rounded-lg border-2 py-sm font-label-bold transition-all ${
                      slot === item.value
                        ? "border-primary bg-secondary-container text-on-secondary-container hard-shadow"
                        : item.available
                          ? "border-outline-variant bg-white text-on-surface hover:border-primary"
                          : "cursor-not-allowed border-outline-variant/50 bg-surface-container text-on-surface-variant/50 line-through"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-sm sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => goToStep(1)}
              className="inline-flex items-center justify-center gap-xs rounded-lg border-2 border-outline-variant px-lg py-sm font-label-bold text-primary"
            >
              <MaterialIcon name="chevron_left" size={18} />
              Retour
            </button>
            <button
              type="button"
              disabled={!slot}
              onClick={handleStepTwoNext}
              className="btn-press rounded-lg border-2 border-primary bg-secondary-container px-xl py-sm font-label-bold text-on-secondary-container hard-shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continuer
            </button>
          </div>
        </div>
      )}

      {step === 3 && slot && (
        <form className="space-y-md" onSubmit={handleSubmit}>
          <div className="rounded-lg border-2 border-secondary-container bg-secondary-container/20 p-md">
            <p className="font-label-bold text-primary">Récapitulatif</p>
            <p className="mt-xs text-on-surface-variant">
              {service}
              {device ? ` — ${device}` : ""}
            </p>
            <p className="font-headline-md text-primary">
              {formatAppointmentDateLong(selectedDate)} à{" "}
              {timeSlots.find((item) => item.value === slot)?.label}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            <div>
              <label
                htmlFor="appointment-name"
                className="mb-xs block font-label-bold text-primary"
              >
                Nom complet
              </label>
              <input
                id="appointment-name"
                name="name"
                type="text"
                required
                placeholder="Ex : Jean Dupont"
                className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="appointment-phone"
                className="mb-xs block font-label-bold text-primary"
              >
                Téléphone
              </label>
              <input
                id="appointment-phone"
                name="phone"
                type="tel"
                required
                placeholder="06 00 00 00 00"
                className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="appointment-email"
              className="mb-xs block font-label-bold text-primary"
            >
              Email (optionnel)
            </label>
            <input
              id="appointment-email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="appointment-notes"
              className="mb-xs block font-label-bold text-primary"
            >
              Précisions (optionnel)
            </label>
            <textarea
              id="appointment-notes"
              name="notes"
              rows={3}
              placeholder="Décrivez brièvement la panne..."
              className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
            />
          </div>

          <label className="flex items-start gap-sm text-label-sm text-on-surface-variant">
            <input
              type="checkbox"
              name="rgpd"
              required
              className="mt-1 h-5 w-5 rounded border-2 border-primary text-primary focus:ring-secondary-container"
            />
            J&apos;accepte que mes données soient traitées pour organiser mon
            rendez-vous (RGPD).
          </label>

          <div className="flex flex-col gap-sm sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => goToStep(2)}
              className="inline-flex items-center justify-center gap-xs rounded-lg border-2 border-outline-variant px-lg py-sm font-label-bold text-primary"
            >
              <MaterialIcon name="chevron_left" size={18} />
              Modifier le créneau
            </button>
            <button
              type="submit"
              className="btn-press inline-flex items-center justify-center gap-xs rounded-lg border-2 border-primary bg-secondary-container px-xl py-md font-label-bold text-on-secondary-container hard-shadow"
            >
              <MaterialIcon name="calendar_today" size={20} />
              Confirmer le rendez-vous
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
