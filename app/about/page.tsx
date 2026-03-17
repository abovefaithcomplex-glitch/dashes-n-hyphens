import Navbar from "@/components/Navbar";
import EyePuneBanner from "@/components/EyePuneBanner";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dashes n Hyphens — led by Company Secretary & IPO Consultant Avinash Pratap, helping Indian startups and SMEs access capital markets.",
};

const values = [
  {
    icon: Target,
    title: "Compliance-First Approach",
    description: "As a practising Company Secretary firm, we ensure every capital markets transaction is structurally sound, legally compliant, and built to pass SEBI scrutiny.",
  },
  {
    icon: Users,
    title: "Founder-First Advisory",
    description: "We work exclusively for founders and promoters — not banks, not investors. Our advice is always aligned with your long-term interest and growth vision.",
  },
  {
    icon: Award,
    title: "End-to-End Execution",
    description: "From company incorporation and secretarial compliance to IPO filing and post-listing obligations, we manage the full lifecycle so you can focus on your business.",
  },
  {
    icon: TrendingUp,
    title: "Pan-India Reach",
    description: "Headquartered in Delhi with clients across Mumbai, Bangalore, Hyderabad, Jaipur, and Ahmedabad. We bring institutional-quality advisory to every corner of India.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(155deg, #0B1F2F 0%, #0d2a3f 50%, #142e45 100%)", paddingTop: "140px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, background: "radial-gradient(circle at 30% 50%, #4EC3C7, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "18px" }}>
              About Us
            </div>
            <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
              Delhi&apos;s Leading<br />
              <em style={{ color: "#4EC3C7" }}>Capital Advisory Practice</em>
            </h1>
            <p className="font-sans leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px", maxWidth: "540px" }}>
              Founded and led by Avinash Pratap, a practising Company Secretary and seasoned
              IPO Consultant, Dashes n Hyphens bridges the gap between ambitious Indian
              businesses and the capital markets.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
                Our Story
              </div>
              <h2 className="font-serif font-bold leading-tight mb-6" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0B1F2F" }}>
                Built on Compliance,<br /><em>Driven by Growth</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="font-sans leading-relaxed" style={{ fontSize: "15px", color: "#4A5568" }}>
                  Dashes n Hyphens was founded with a clear mission: to make high-quality IPO
                  advisory and capital markets access available to every deserving Indian business —
                  not just large corporations with deep pockets and established networks.
                </p>
                <p className="font-sans leading-relaxed" style={{ fontSize: "15px", color: "#4A5568" }}>
                  Rooted in secretarial practice and SEBI regulations, our approach is different
                  from traditional investment banks. We bring a compliance-led perspective to
                  every mandate — ensuring your IPO, funding round, or grant application is
                  not just successful, but structurally bulletproof.
                </p>
                <p className="font-sans leading-relaxed" style={{ fontSize: "15px", color: "#4A5568" }}>
                  Based in Delhi and serving clients pan-India, we have advised on 50+ IPO
                  listings, facilitated over Rs. 500 Cr in capital, and secured Rs. 25 Cr+
                  in government grants for startups and SMEs across diverse sectors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "IPOs Advised" },
                { number: "Rs. 500 Cr+", label: "Capital Facilitated" },
                { number: "Rs. 25 Cr+", label: "Grants Secured" },
                { number: "Pan-India", label: "Client Reach" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl text-center" style={{ background: "#F5F7FA", padding: "32px 16px" }}>
                  <div className="font-serif font-bold mb-2" style={{ fontSize: "28px", color: "#0B1F2F" }}>{s.number}</div>
                  <div className="font-sans" style={{ fontSize: "13px", color: "#4A5568" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 0", background: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
              Our Values
            </div>
            <h2 className="font-serif font-bold" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0B1F2F" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl p-7" style={{ background: "#fff", border: "1px solid #E2E8F0" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(78,195,199,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <Icon size={20} style={{ color: "#4EC3C7" }} />
                  </div>
                  <h3 className="font-serif font-bold mb-3" style={{ fontSize: "17px", color: "#0B1F2F" }}>{v.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#4A5568" }}>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
              Leadership
            </div>
            <h2 className="font-serif font-bold" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0B1F2F" }}>
              The Expert Behind the Work
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "680px", width: "100%", display: "grid", gridTemplateColumns: "280px 1fr", gap: "40px", alignItems: "start" }}>
              {/* Photo */}
              <div>
                <div style={{ width: "100%", height: "320px", borderRadius: "16px", overflow: "hidden", position: "relative", background: "#0B1F2F" }}>
                  <Image
                    src="/avinash-pratap.png"
                    alt="Avinash Pratap"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, transparent, #4EC3C7, transparent)" }} />
                </div>
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  <a
                    href="https://www.linkedin.com/in/avinash-pratap-37294a24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 20px", background: "#0B1F2F", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#4EC3C7" }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Founder & Principal Consultant
                </div>
                <h3 className="font-serif font-bold mb-1" style={{ fontSize: "28px", color: "#0B1F2F" }}>Avinash Pratap</h3>
                <div className="font-sans font-medium mb-5" style={{ fontSize: "15px", color: "#4A5568" }}>Company Secretary · IPO Consultant</div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
                  <p className="font-sans leading-relaxed" style={{ fontSize: "14px", color: "#4A5568" }}>
                    Avinash Pratap is a practising Company Secretary (CS) and experienced IPO Consultant
                    with deep expertise in capital markets, SEBI regulations, and corporate governance.
                    He founded Dashes n Hyphens to bridge the gap between ambitious Indian businesses
                    and the public markets.
                  </p>
                  <p className="font-sans leading-relaxed" style={{ fontSize: "14px", color: "#4A5568" }}>
                    With hands-on experience across SME and mainboard IPO listings on NSE and BSE,
                    he has guided promoters through the entire DRHP drafting, SEBI filing, merchant
                    banker coordination, and post-listing compliance journey.
                  </p>
                  <p className="font-sans leading-relaxed" style={{ fontSize: "14px", color: "#4A5568" }}>
                    Beyond IPOs, Avinash advises growth-stage startups on institutional fundraising,
                    government grant identification, and DPIIT recognition — making him a
                    one-stop advisor for any company on the path to becoming a public company.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "IPO Listings Advised", val: "50+" },
                    { label: "Years of Experience", val: "10+" },
                    { label: "CS Compliance Filings", val: "500+" },
                    { label: "States Served", val: "12+" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl text-center" style={{ background: "#F5F7FA", padding: "16px 12px", border: "1px solid #E2E8F0" }}>
                      <div className="font-serif font-bold" style={{ fontSize: "22px", color: "#0B1F2F", marginBottom: "3px" }}>{s.val}</div>
                      <div className="font-sans" style={{ fontSize: "11px", color: "#718096" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EyePuneBanner />
      <Footer />
    </main>
  );
}
