import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Spark Safe Electrical</h1>
          <p className="text-white/80 mt-3 max-w-2xl">NICEIC Approved electricians serving Salford and Greater Manchester for over 8 years.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our story</h2>
            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>Spark Safe Electrical was founded in Eccles with one goal: deliver reliable, properly certified electrical work at a fair price. Too many homeowners had been let down by uncertified contractors leaving unsafe installations behind.</p>
              <p>Every job we complete is certified, Part P compliant, and leaves your home or business safer than we found it. We&apos;re NICEIC Approved — the electrical industry&apos;s equivalent of Gas Safe — and we never cut corners.</p>
              <p>From a single fuse board upgrade to a full commercial rewire, every job gets the same attention to detail.</p>
            </div>
          </div>
          <div className="bg-[var(--color-surface)] rounded-lg p-8">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">Accreditations</h2>
            <ul className="space-y-3" role="list">
              {["NICEIC Approved Contractor", "18th Edition Wiring Regulations", "Part P Building Regulations", "OZEV-approved EV charger installer", "Fully insured — £2m public liability"].map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <span className="text-[var(--color-secondary)] font-bold mt-0.5">✓</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">Areas we cover</h2>
          <div className="flex flex-wrap gap-2">
            {["M30 Eccles", "M28 Worsley", "M27 Pendlebury", "M6 Salford", "M5 Ordsall", "M50 Salford Quays", "M44 Irlam"].map((a) => (
              <span key={a} className="bg-white border border-[var(--color-border)] text-sm px-3 py-1.5 rounded-full text-[var(--color-text-muted)]">{a}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
