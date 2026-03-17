"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F2F 0%, #0d2a3f 50%, #142e45 100%)" }}>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Glow orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(78,195,199,0.07), transparent 70%)" }} />
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(to right, transparent, rgba(78,195,199,0.5), transparent)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hero-grid">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 hero-animate hero-animate-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full glow-pulse" style={{ background: "#4EC3C7" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#4EC3C7", opacity: 0.6 }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#4EC3C7", opacity: 0.3 }} />
              </div>
              <span className="text-[#4EC3C7] text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                Company Secretary · IPO Consultant · Capital Advisory
              </span>
            </div>

            <h1 className="font-serif font-bold text-white leading-[1.05] mb-6 hero-animate hero-animate-2" style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}>
              Preparing
              <br />
              <span className="italic" style={{ color: "#4EC3C7" }}>Tomorrow&apos;s</span>
              <br />
              Public Companies
            </h1>

            <p className="font-sans text-lg max-w-lg mb-5 leading-relaxed hero-animate hero-animate-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              From DRHP drafting to IPO listing, startup fundraising to government grants —
              Dashes n Hyphens is your end-to-end capital markets partner, led by a
              practising Company Secretary with deep SEBI expertise.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 hero-animate hero-animate-4">
              {["IPO Advisory", "Startup Capital", "Government Grants", "CS Compliance"].map((s) => (
                <span key={s} className="px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide" style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.6)" }}>
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 hero-animate hero-animate-5">
              <Link href="/ipo-advisory" className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-4 font-sans font-semibold text-sm rounded">
                <TrendingUp size={16} />
                Start Your IPO Journey
                <ArrowRight size={14} />
              </Link>
              <Link href="/startup-funding" className="btn-magnetic inline-flex items-center gap-2.5 px-7 py-4 font-sans font-medium text-sm rounded" style={{ border: "1.5px solid rgba(255,255,255,0.22)", color: "#fff" }}>
                <DollarSign size={16} style={{ color: "#4EC3C7" }} />
                Raise Funding
              </Link>
            </div>
          </div>

          {/* Right: floating stat cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {[
              { label: "SME & Mainboard IPOs", value: "50+", sub: "Successfully advised & listed", delay: "0s" },
              { label: "Capital Facilitated", value: "Rs. 500 Cr+", sub: "Across fundraising mandates", delay: "0.5s" },
              { label: "Govt. Grants Secured", value: "Rs. 25 Cr+", sub: "DPIIT, SIDBI & state schemes", delay: "1s" },
              { label: "CS & Compliance Filings", value: "500+", sub: "ROC, SEBI, MCA filings", delay: "1.5s" },
            ].map((card) => (
              <div
                key={card.label}
                className="glass-card rounded-xl p-5 float-anim"
                style={{ animationDelay: card.delay }}
              >
                <div className="font-serif font-bold mb-0.5" style={{ color: "#4EC3C7", fontSize: "24px" }}>{card.value}</div>
                <div className="font-sans font-medium text-sm text-white mb-0.5">{card.label}</div>
                <div className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{card.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-sans tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </div>
    </section>
  );
}
