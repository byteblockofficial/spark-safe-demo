import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Testimonials />
      <section className="py-16 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need an electrician today?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">NICEIC approved. Available for emergencies 24 hours. Free quotes on all domestic and commercial work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01610000005" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-text)] font-bold px-8 py-4 rounded-md transition-colors">Call 0161 000 0005</a>
            <a href="/contact" className="border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors">Get a free quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
