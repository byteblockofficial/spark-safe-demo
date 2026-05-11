export default function TrustBar() {
  return (
    <section className="py-10 border-y border-[var(--color-border)] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap gap-8">
            {[
              { stat: "4.8★", label: "Google rating" },
              { stat: "31", label: "verified reviews" },
              { stat: "8+", label: "years trading" },
              { stat: "24hr", label: "emergency cover" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-[var(--color-primary)]">{item.stat}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["NICEIC Approved", "18th Edition", "Part P Certified", "Fully Insured"].map((b) => (
              <span key={b} className="bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
