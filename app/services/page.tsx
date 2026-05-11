import type { Metadata } from "next";
export const metadata: Metadata = { title: "Services" };

const services = [
  { icon: "🔌", title: "Full Rewiring", highlight: false, details: ["Domestic and commercial rewiring", "All cables replaced to 18th Edition standards", "Full test and inspection certificate issued", "Plastering and decoration not included (but surfaces made good)"] },
  { icon: "⚡", title: "Consumer Unit Upgrades", highlight: false, details: ["Upgrade from old fuse boxes to modern RCBO units", "Individual circuit protection for maximum safety", "Part P building regulations certificate", "Usually completed in one day"] },
  { icon: "🚗", title: "EV Charger Installation", highlight: false, details: ["Home and workplace charge points", "Compatible with all EV and PHEV models", "OZEV approved installer", "Smart charger options available"] },
  { icon: "🔍", title: "PAT Testing", highlight: false, details: ["Landlord and business PAT testing", "Pass/fail labels and detailed report", "Certificate issued same day", "Annual reminder service available"] },
  { icon: "🛠️", title: "Fault Finding & Diagnosis", highlight: false, details: ["Tripping circuit breakers", "Dead sockets or switches", "Intermittent electrical faults", "Outdoor and garden electrics"] },
  { icon: "🆘", title: "Emergency Call-Out (24hr)", highlight: true, details: ["Available 24 hours, 7 days a week", "Typical response time under 60 minutes in Salford", "Power cuts, unsafe installations, urgent faults", "No call-out charge during business hours"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Our electrical services</h1>
          <p className="text-white/80 mt-3 max-w-2xl">All work NICEIC certified. Free quotes on domestic and commercial jobs across Salford.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s) => (
            <article key={s.title} className={`rounded-lg p-8 border ${s.highlight ? "bg-[var(--color-secondary)] border-[var(--color-secondary-dark)]" : "bg-white border-[var(--color-border)]"}`}>
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-3"><span aria-hidden="true">{s.icon}</span>{s.title}</h2>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4" role="list">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm"><span className="font-bold mt-0.5">✓</span>{d}</li>
                ))}
              </ul>
              {s.highlight && (
                <a href="tel:01610000005" className="mt-6 inline-block bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-md">
                  Call 0161 000 0005 — 24hrs
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
