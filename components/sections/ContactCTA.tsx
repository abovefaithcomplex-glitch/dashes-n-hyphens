import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section style={{ background: "#0B1F2F", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(78,195,199,0.07), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, rgba(78,195,199,0.4), transparent)" }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
        <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
          Ready to Begin?
        </div>
        <h2 className="font-serif font-bold text-white mb-5 leading-tight" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
          Start Your Capital<br /><em style={{ color: "#4EC3C7" }}>Journey Today</em>
        </h2>
        <p className="font-sans leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>
          Whether you are raising your first round, preparing for an IPO, or seeking
          government grants — speak directly with Avinash Pratap, Company Secretary
          and IPO Consultant, for a free initial consultation.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
          <Link href="/startup-funding" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", background: "#4EC3C7", color: "#0B1F2F", fontSize: "13px", fontWeight: 600, borderRadius: "4px", textDecoration: "none" }}>
            Apply for Funding <ArrowRight size={14} />
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", border: "1.5px solid rgba(255,255,255,0.22)", color: "#fff", fontSize: "13px", fontWeight: 500, borderRadius: "4px", textDecoration: "none" }}>
            <Phone size={14} style={{ color: "#4EC3C7" }} />
            Schedule a Free Call
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "420px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}>
          {[
            { label: "Free Consultation", sub: "No obligation, ever" },
            { label: "Confidential", sub: "NDA on first call" },
            { label: "24 hr Response", sub: "Guaranteed reply" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div className="font-sans font-semibold text-white" style={{ fontSize: "12px", marginBottom: "3px" }}>{item.label}</div>
              <div className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
