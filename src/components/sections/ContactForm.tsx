"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const fieldClass =
  "w-full rounded-2xl border border-ink/25 bg-transparent p-4 text-base text-ink placeholder:text-ink/45 transition-colors focus:border-ink aria-[invalid=true]:border-red-700";
const labelClass =
  "font-mono text-xs uppercase tracking-[0.16em] text-ink/70";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Formulario de contacto conectado a Web3Forms.
 * Endpoint, método, access_key y nombres de campo se conservan tal cual.
 * `action` y `method` siguen en el <form>, así que también funciona sin JavaScript;
 * con JavaScript se envía por fetch para mostrar estados de carga, éxito y error.
 */
export function ContactForm({ t }: { t: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = t.errors.name;
    if (!EMAIL_PATTERN.test(email)) next.email = t.errors.email;
    if (message.length < 10) next.message = t.errors.message;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return; // evita envíos repetidos

    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);

    const firstInvalid = (["name", "email", "message"] as const).find(
      (f) => found[f],
    );
    if (firstInvalid) {
      const field = form.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result: { success?: boolean } = await response
        .json()
        .catch(() => ({}));

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onInput={() => {
        if (status === "success" || status === "error") setStatus("idle");
      }}
      className="space-y-6"
    >
      <input
        type="hidden"
        name="access_key"
        value="fdb0e5fd-6361-4451-85ab-4a0f9196a898"
      />

      <input
        type="hidden"
        name="subject"
        value="Nuevo mensaje desde el portfolio de Nicole"
      />

      {/* Anti-spam de Web3Forms: debe permanecer vacío y oculto */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className={labelClass}>
            {t.fields.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder={t.fields.namePlaceholder}
            required
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-red-800">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className={labelClass}>
            {t.fields.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder={t.fields.emailPlaceholder}
            required
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-red-800">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className={labelClass}>
          {t.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder={t.fields.messagePlaceholder}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-red-800">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="solid"
        disabled={sending}
        className="w-full py-4 text-base font-bold"
      >
        {sending ? (
          <span className="inline-flex items-center gap-2">
            <Loader2
              aria-hidden="true"
              className="size-4 animate-spin motion-reduce:animate-none"
            />
            {t.sending}
          </span>
        ) : (
          t.submit
        )}
      </Button>

      <div aria-live="polite" className="min-h-6">
        {status === "success" && (
          <p
            role="status"
            className="rounded-2xl bg-blush px-4 py-3 text-sm text-ink"
          >
            {t.success}
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="rounded-2xl border border-red-800/40 px-4 py-3 text-sm text-red-900"
          >
            {t.error}
          </p>
        )}
      </div>
    </form>
  );
}
