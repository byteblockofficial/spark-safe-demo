import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-lg mb-2">⚡ Spark Safe Electrical</p>
            <p className="text-white/70 text-sm leading-relaxed">NICEIC Approved electricians in Salford. Domestic and commercial. Available 24hrs for emergencies.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-semibold text-sm mb-3 text-white/80 uppercase tracking-wide">Pages</p>
            <ul className="space-y-2" role="list">
              {[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold text-sm mb-3 text-white/80 uppercase tracking-wide">Contact</p>
            <ul className="space-y-2 text-sm text-white/70" role="list">
              <li><a href="tel:01610000005" className="hover:text-white transition-colors font-medium">0161 000 0005</a></li>
              <li><a href="mailto:info@spark-safe.demo" className="hover:text-white transition-colors">info@spark-safe.demo</a></li>
              <li>Eccles, Salford, Greater Manchester</li>
              <li className="pt-1 text-white/50 text-xs">Mon–Fri 7am–7pm · Sat 8am–4pm<br />24hr emergency: 0161 000 0005</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Spark Safe Electrical Ltd. All rights reserved.</p>
          <p>Demo site built by <a href="https://byteblock.co.uk" className="hover:text-white/70 underline">Byteblock</a></p>
        </div>
      </div>
    </footer>
  );
}
