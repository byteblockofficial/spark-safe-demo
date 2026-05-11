const testimonials = [
  { quote: "Consumer unit upgrade done in a day. Tidy work, fully certified. No mess left behind.", author: "R.H.", location: "Eccles" },
  { quote: "Called at 7pm for a fault, arrived within the hour. Brilliant service when you really need it.", author: "M.T.", location: "Worsley" },
  { quote: "EV charger installed professionally. Knows exactly what he's doing. Highly recommended.", author: "D.K.", location: "Swinton" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">What our customers say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="border-l-4 border-[var(--color-secondary)] bg-[var(--color-surface)] p-6 rounded-r-lg">
              <blockquote className="italic text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-sm font-semibold text-[var(--color-text-muted)]">{t.author} &mdash; {t.location}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
