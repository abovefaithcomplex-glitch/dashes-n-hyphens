import Navbar from "@/components/Navbar";
import EyePuneBanner from "@/components/EyePuneBanner";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import { CheckCircle2, BarChart3, FileText, Users, Shield, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO Advisory",
  description: "End-to-end IPO advisory services by a practising Company Secretary — DRHP preparation, SEBI compliance, merchant banker coordination, NSE & BSE listing.",
};

const services = [
  { icon: BarChart3, title: "IPO Readiness Assessment", description: "We conduct a detailed pre-IPO diagnostic of your financials, governance, shareholding structure, and regulatory compliance — identifying gaps before SEBI does." },
  { icon: FileText, title: "DRHP Drafting & Filing", description: "Our CS-led team drafts your Draft Red Herring Prospectus with precision — all disclosures, risk factors, financials, and MD&A aligned with ICDR regulations." },
  { icon: Users, title: "Merchant Banker Coordination", description: "We identify the right SEBI Category I Merchant Banker for your deal size and sector, manage the appointment, and coordinate throughout the process." },
  { icon: Shield, title: "SEBI Compliance & Filings", description: "Full management of SEBI observation letters, query responses, and resubmissions. Our CS background means we understand exactly what SEBI is looking for." },
  { icon: TrendingUp, title: "Roadshow & Investor Relations", description: "We support your investor roadshow preparation, anchor investor strategy, and pricing discussions to maximise subscription and listing performance." },
  { icon: Clock, title: "Post-Listing Compliance", description: "Quarterly filings, SEBI disclosure obligations, board meeting compliance, and annual report support — we keep you compliant after you list." },
];

const faqs = [
  { q: "What types of IPOs do you advise on?", a: "We advise on both SME IPOs (NSE Emerge and BSE SME) and mainboard IPOs. Our sweet spot is SME IPOs for companies with revenues between Rs. 10 Cr and Rs. 250 Cr, though we also work on mainboard mandates." },
  { q: "What is the minimum eligibility for an SME IPO?", a: "For NSE Emerge: minimum Rs. 1 Cr PAT in the latest year, 3-year track record, and net worth of Rs. 3 Cr. For BSE SME: post-issue capital between Rs. 1 Cr and Rs. 25 Cr with profit in 2 of 3 years. We do a free eligibility check for every new client." },
  { q: "How long does the IPO process take?", a: "SME IPOs typically take 10-16 months from engagement to listing. Mainboard IPOs take 18-24 months. Timeline depends on how IPO-ready your company is at the start — which is why our assessment phase is so critical." },
  { q: "What makes your IPO advisory different?", a: "We are led by a practising Company Secretary, which means compliance is built into every step. We do not outsource DRHP drafting or SEBI correspondence — everything is handled in-house, reducing delays and errors significantly." },
  { q: "Do you work with companies outside Delhi?", a: "Yes. While we are headquartered in Delhi, we serve clients pan-India including Mumbai, Bangalore, Hyderabad, Jaipur, and Ahmedabad. Critical meetings are handled in-person; day-to-day work is managed remotely with regular video calls." },
];

export default function IPOAdvisoryPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(155deg, #0B1F2F, #0d2a3f, #142e45)", paddingTop: "140px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "50%", opacity: 0.08, background: "radial-gradient(ellipse at right, #4EC3C7, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "18px" }}>IPO Advisory</div>
            <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
              From Private Company<br /><em style={{ color: "#4EC3C7" }}>to Publicly Listed</em>
            </h1>
            <p className="font-sans leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px", maxWidth: "520px" }}>
              India&apos;s SME IPO market is booming — over 200 companies listed in FY2024 alone.
              Led by a practising Company Secretary, we manage your entire IPO journey from
              readiness assessment to ringing the listing bell.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/startup-funding" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", background: "#4EC3C7", color: "#0B1F2F", fontSize: "13px", fontWeight: 600, borderRadius: "4px", textDecoration: "none" }}>
                Start Your IPO Journey →
              </Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: "13px", fontWeight: 500, borderRadius: "4px", textDecoration: "none" }}>
                Free Eligibility Check
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>What We Do</div>
            <h2 className="font-serif font-bold" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0B1F2F" }}>Full-Spectrum IPO Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl p-7 group transition-all duration-200" style={{ background: "#F5F7FA", border: "1px solid #E2E8F0" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#0B1F2F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <Icon size={20} style={{ color: "#4EC3C7" }} />
                  </div>
                  <h3 className="font-serif font-bold mb-3" style={{ fontSize: "17px", color: "#0B1F2F" }}>{s.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#4A5568" }}>{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#0B1F2F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>Why Dashes n Hyphens</div>
              <h2 className="font-serif font-bold mb-6 leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#fff" }}>
                A CS-Led Practice —<br /><em style={{ color: "#4EC3C7" }}>Not Just Advisors</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Led by a practising Company Secretary — compliance is our DNA",
                  "In-house DRHP drafting — no outsourcing, faster turnarounds",
                  "50+ IPO listings with zero SEBI rejections on our watch",
                  "Deep relationships with NSE Emerge and BSE SME merchant bankers",
                  "Post-listing secretarial compliance included in our engagement",
                  "Flat fee + success model — we earn when you list",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={15} style={{ color: "#4EC3C7", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "IPOs Listed", val: "50+" },
                { label: "SEBI Rejections", val: "Zero" },
                { label: "Avg. Listing Premium", val: "32%+" },
                { label: "SME IPOs", val: "40+" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "28px 16px" }}>
                  <div className="font-serif font-bold mb-2" style={{ fontSize: "28px", color: "#4EC3C7" }}>{s.val}</div>
                  <div className="font-sans" style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#F5F7FA" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>FAQs</div>
            <h2 className="font-serif font-bold" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0B1F2F" }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E2E8F0" }}>
                <h3 className="font-sans font-semibold mb-3" style={{ color: "#0B1F2F", fontSize: "14px" }}>{faq.q}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#4A5568" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <EyePuneBanner />
      <Footer />
    </main>
  );
}
