const services = [
  { icon: "🔌", title: "Full Rewiring", desc: "Complete domestic and commercial rewiring. All work certified and Part P compliant." },
  { icon: "⚡", title: "Consumer Unit Upgrades", desc: "Fuse board upgrades to modern RCBO units. Increased safety and compliance with current regs." },
  { icon: "🚗", title: "EV Charger Installation", desc: "Home and workplace EV charger installation. OZEV-approved installer. All makes and models." },
  { icon: "🔍", title: "PAT Testing", desc: "Portable appliance testing for landlords and businesses. Certificates issued same day." },
  { icon: "🛠️", title: "Fault Finding", desc: "Fast, accurate fault diagnosis. Tripping circuits, dead sockets, intermittent faults — all found." },
  { icon: "🆘", title: "Emergency Call-Out", desc: "24-hour emergency electrical response across Salford and surrounding areas." },
];

export default function Services() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">Our electrical services</h2>
        <ul role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <li key={s.title} className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3" aria-hidden="true">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
