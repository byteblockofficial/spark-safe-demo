import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Get a free quote</h1>
          <p className="text-white/80 mt-3">Fill in the form and we&apos;ll get back to you within the hour. For emergencies, call us directly.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-[var(--color-secondary)] rounded-lg p-6">
              <h2 className="font-bold text-lg text-[var(--color-text)] mb-2">Emergency? Call us directly</h2>
              <p className="text-[var(--color-text)] text-sm mb-4">24-hour emergency electrical response across Salford and surrounding areas.</p>
              <a href="tel:01610000005" className="inline-block bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-md">0161 000 0005</a>
            </div>
            <div>
              <h2 className="font-semibold text-[var(--color-text)] mb-3">Business hours</h2>
              <dl className="space-y-1 text-sm text-[var(--color-text-muted)]">
                <div className="flex gap-4"><dt className="w-32 font-medium text-[var(--color-text)]">Mon–Fri</dt><dd>7am – 7pm</dd></div>
                <div className="flex gap-4"><dt className="w-32 font-medium text-[var(--color-text)]">Saturday</dt><dd>8am – 4pm</dd></div>
                <div className="flex gap-4"><dt className="w-32 font-medium text-[var(--color-text)]">Emergency</dt><dd>24hrs / 7 days</dd></div>
              </dl>
            </div>
            <div aria-label="Map placeholder — Eccles, Salford" className="bg-[var(--color-surface)] rounded-lg h-48 flex items-center justify-center text-[var(--color-text-muted)] text-sm border border-[var(--color-border)]">
              Map — Eccles, Salford GM
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
