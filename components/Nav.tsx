"use client";
import { useState } from "react";
import Link from "next/link";

const PHONE = "0161 000 0005";
const PHONE_HREF = "tel:01610000005";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary)] border-b border-white/10 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg text-white leading-tight" aria-label="Spark Safe Electrical — go to home page">
            ⚡ Spark Safe
          </Link>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">{l.label}</Link>
            ))}
          </nav>
          <a href={PHONE_HREF} className="hidden md:inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-text)] font-semibold text-sm px-4 py-2.5 rounded-md transition-colors">
            <PhoneIcon />{PHONE}
          </a>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md text-white hover:bg-white/10" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <XIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-[var(--color-primary)]">
          <nav aria-label="Mobile navigation" className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white font-medium hover:bg-white/10">{l.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-2 flex items-center gap-2 bg-[var(--color-secondary)] text-[var(--color-text)] font-semibold px-4 py-3 rounded-md"><PhoneIcon />{PHONE}</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function BurgerIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect y="4" width="22" height="2" rx="1" fill="currentColor"/><rect y="10" width="22" height="2" rx="1" fill="currentColor"/><rect y="16" width="22" height="2" rx="1" fill="currentColor"/></svg>;
}
function XIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
