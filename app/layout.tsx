import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spark-safe.vercel.app"),
  title: {
    default: "Spark Safe Electrical | Electrician in Salford",
    template: "%s | Spark Safe Electrical",
  },
  description: "NICEIC approved electricians in Salford. Rewiring, consumer units, EV chargers, emergency call-out. Call 0161 000 0005.",
  openGraph: { siteName: "Spark Safe Electrical", locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
