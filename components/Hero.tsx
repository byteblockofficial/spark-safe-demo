export default function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-[var(--color-secondary)] text-[var(--color-text)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
            24-hour emergency call-out available
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Salford&apos;s trusted electricians
          </h1>
          <p className="text-white/80 text-lg mb-8">
            NICEIC Approved Contractor · EV chargers · Rewiring · Consumer units · 24hr call-out
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:01610000005" className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-text)] font-bold px-6 py-3.5 rounded-md transition-colors">
              Call 0161 000 0005
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-md transition-colors">
              Get a free quote
            </a>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="text-[var(--color-secondary)] text-xl font-bold">4.8★</span>
            <span className="text-white/70 text-sm">from 31 Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
