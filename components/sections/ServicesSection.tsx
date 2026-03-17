"use client";

import Link from "next/link";
import { TrendingUp, Building2, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "IPO Advisory",
    href: "/ipo-advisory",
    tag: "Capital Markets",
    description: "End-to-end IPO lifecycle management — from pre-IPO structuring and DRHP preparation to merchant banker coordination and successful listing on NSE/BSE.",
    highlights: ["DRHP Drafting", "SEBI Compliance", "Merchant Banker Tie-up", "IPO Listing Support"],
    cta: "Explore IPO Services",
    featured: false,
  },
  {
    icon: Building2,
    title: "Startup Funding",
    href: "/startup-funding",
    tag: "Growth Capital",
    description: "Strategic fundraising support for seed through pre-IPO stages. We connect high-potential startups with the right investors and structure optimal deal terms.",
    highlights: ["Investor Network", "Deal Structuring", "Pitch Deck Review", "Term Sheet Guidance"],
    cta: "Raise Capital",
    featured: true,
  },
  {
    icon: FileText,
    title: "Government Grants",
    href: "/government-grants",
    tag: "Non-dilutive Capital",
    description: "Navigate India's complex government grant landscape. We identify, apply, and secure non-dilutive funding from DPIIT, SIDBI, DST, and other schemes.",
    highlights: ["DPIIT Recognition", "SIDBI Schemes", "State Incentives", "Grant Writing"],
    cta: "Explore Grants",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div style={{ color: "#4EC3C7", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
            Our Services
          </div>
          <h2 className="font-serif font-bold leading-tight mb-4" style={{ fontSize: "clamp(30px, 4vw, 46px)", color: "#0B1F2F" }}>
            Comprehensive Capital{" "}
            <em>Advisory Services</em>
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: "#4A5568" }}>
            From your first funding round to your stock market debut, expert guidance at every inflection point.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl p-8 flex flex-col transition-all duration-300"
                style={{
                  background: service.featured ? "#0B1F2F" : "#F5F7FA",
                  border: "1px solid transparent",
                  position: "relative",
                }}
              >
                {service.featured && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", background: "#4EC3C7", color: "#0B1F2F", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "3px" }}>
                    Most Popular
                  </div>
                )}

                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4EC3C7", marginBottom: "18px" }}>
                  {service.tag}
                </div>

                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: service.featured ? "rgba(78,195,199,0.1)" : "rgba(11,31,47,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <Icon size={20} style={{ color: service.featured ? "#4EC3C7" : "#0B1F2F" }} />
                </div>

                <h3 className="font-serif font-bold mb-3" style={{ fontSize: "22px", color: service.featured ? "#fff" : "#0B1F2F" }}>
                  {service.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed mb-6 flex-grow" style={{ color: service.featured ? "rgba(255,255,255,0.55)" : "#4A5568" }}>
                  {service.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {service.highlights.map((h) => (
                    <div key={h} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4EC3C7", flexShrink: 0 }} />
                      <span className="font-sans text-xs" style={{ color: service.featured ? "rgba(255,255,255,0.65)" : "#4A5568" }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold transition-all"
                  style={{ color: service.featured ? "#4EC3C7" : "#0B1F2F" }}
                >
                  {service.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
