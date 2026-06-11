"use client";

import { FormEvent, useState } from "react";
import { MaterialIcon } from "@/components/material-icon";
import { EMAIL, PHONE, PHONE_DISPLAY } from "@/lib/images";

const REQUEST_TYPES = [
  "Réparation trottinette électrique",
  "Réparation smartphone",
  "Devis batterie trottinette",
  "Diagnostic",
  "Autre demande",
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Email : ${email}`,
      `Demande : ${type}`,
      "",
      message,
    ].join("\n");

    window.open(
      `mailto:${EMAIL}?subject=${encodeURIComponent(`Contact Répatech — ${type}`)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );

    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border-2 border-primary bg-primary-fixed p-lg text-center">
        <MaterialIcon
          name="check_circle"
          size={48}
          className="mx-auto mb-md text-primary"
        />
        <p className="mb-sm font-headline-md text-primary">Message prêt à envoyer</p>
        <p className="mb-md text-on-surface-variant">
          Appelez-nous directement ou envoyez votre demande par email.
        </p>
        <a
          href={`tel:${PHONE}`}
          className="btn-press inline-block rounded-lg bg-primary px-lg py-sm font-label-bold text-white hard-shadow"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form className="space-y-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-xs block font-label-bold text-primary"
          >
            Nom complet
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Ex : Jean Dupont"
            className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-xs block font-label-bold text-primary"
          >
            Téléphone
          </label>
          <input
            id="contact-phone"
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
          htmlFor="contact-email"
          className="mb-xs block font-label-bold text-primary"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="votre@email.com"
          className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
        />
      </div>

      <div className="relative">
        <label
          htmlFor="contact-type"
          className="mb-xs block font-label-bold text-primary"
        >
          Type de demande
        </label>
        <select
          id="contact-type"
          name="type"
          required
          className="w-full appearance-none border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
        >
          {REQUEST_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <MaterialIcon
          name="expand_more"
          className="pointer-events-none absolute top-9 right-2 text-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-xs block font-label-bold text-primary"
        >
          Votre message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Décrivez votre panne..."
          className="w-full border-0 border-b-2 border-primary bg-surface-container-low px-xs py-sm font-body-md focus:border-secondary focus:ring-0 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-md pt-base md:flex-row">
        <label className="flex max-w-xs items-start gap-sm text-label-sm text-on-surface-variant">
          <input
            type="checkbox"
            name="rgpd"
            required
            className="mt-1 h-5 w-5 rounded border-2 border-primary text-primary focus:ring-secondary-container"
          />
          J&apos;accepte que mes données soient traitées pour répondre à ma
          demande (RGPD).
        </label>
        <button
          type="submit"
          className="btn-press w-full rounded-lg border-2 border-primary bg-secondary-container px-xl py-md font-label-bold text-on-secondary-container hard-shadow md:w-auto"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
