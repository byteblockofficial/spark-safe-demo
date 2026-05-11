"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

function validate(data: FormData): Record<string, string> {
  const errs: Record<string, string> = {};
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errs.name = "Your name is required.";
  if (!phone) errs.phone = "A phone number is required so we can call you back.";
  else if (!/^[\d\s()+-]{7,20}$/.test(phone)) errs.phone = "Please enter a valid UK phone number.";
  if (!message) errs.message = "Please tell us what you need help with.";
  return errs;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), phone: data.get("phone"), email: data.get("email"), message: data.get("message") }) });
      setState(res.ok ? "success" : "error");
    } catch { setState("error"); }
  }

  if (state === "success") {
    return (
      <div role="alert" className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold text-green-800 mb-2">Message sent!</p>
        <p className="text-green-700">We&apos;ll get back to you shortly. For emergencies call <a href="tel:01610000005" className="font-semibold underline">0161 000 0005</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form" className="space-y-5">
      {state === "error" && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
          Something went wrong. Please try again or call <a href="tel:01610000005" className="underline font-semibold">0161 000 0005</a>.
        </div>
      )}
      {[
        { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
        { id: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
        { id: "email", label: "Email (optional)", type: "email", required: false, autoComplete: "email" },
      ].map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} className="block text-sm font-medium text-[var(--color-text)] mb-1">
            {f.label}{f.required && <span aria-hidden="true" className="text-[var(--color-error)] ml-1">*</span>}
          </label>
          <input id={f.id} name={f.id} type={f.type} autoComplete={f.autoComplete} required={f.required} aria-required={f.required} aria-describedby={errors[f.id] ? `${f.id}-error` : undefined} aria-invalid={!!errors[f.id]}
            className={`w-full rounded-md border px-4 py-3 text-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${errors[f.id] ? "border-[var(--color-error)]" : "border-[var(--color-border)]"}`} />
          {errors[f.id] && <p id={`${f.id}-error`} role="alert" className="mt-1 text-sm text-[var(--color-error)]">{errors[f.id]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">Message <span aria-hidden="true" className="text-[var(--color-error)]">*</span></label>
        <textarea id="message" name="message" rows={4} required aria-required="true" aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={!!errors.message}
          className={`w-full rounded-md border px-4 py-3 text-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none ${errors.message ? "border-[var(--color-error)]" : "border-[var(--color-border)]"}`} />
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-[var(--color-error)]">{errors.message}</p>}
      </div>
      <button type="submit" disabled={state === "submitting"}
        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:opacity-60 text-white font-semibold py-3.5 rounded-md transition-colors">
        {state === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
