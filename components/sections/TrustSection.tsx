"use client";

const testimonials = [
  {
    quote: "They brought structure, creativity, and clarity to how we position Happy Nature. The outcome was not just good design, but a stronger brand identity and their work supported us in building investor confidence and raising funds.",
    author: "Vikash Singh",
    title: "Founder & CEO",
    company: "Happy Nature",
    raise: "Investor Funding",
  },
  {
    quote: "What stood out was their ability to align our narrative with investor expectations. This played an important role in our successful debt and SISFS funding journey.",
    author: "Vandana",
    title: "Founder",
    company: "Diagnomitra",
    raise: "Debt & SISFS Funding",
  },
  {
    quote: "Their ecosystem understanding and network access helped us engage with a strong set of investors while also unlocking relevant government grant opportunities.",
    author: "Megha Manchanda",
    title: "Founder",
    company: "Santure.ai",
    raise: "Investor & Grants",
  },
];

const sectors = ["Real Estate", "FinTech", "Manufacturing", "EdTech", "AgriTech", "Logistics", "Healthcare", "Retail"];

export default function TrustSection() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
            Client Success Stories
          </div>
          <h2 className="font-serif font-bold" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0B1F2F" }}>
            Trusted by India&apos;s <em>Most Ambitious Founders</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl p-8 transition-all duration-300 card-3d" style={{ background: "#F5F7FA", border: "1px solid transparent", position: "relative" }}>
              <div style={{ fontSize: "32px", color: "rgba(78,195,199,0.3)", marginBottom: "12px", lineHeight: 1 }}>&ldquo;</div>
              <div style={{ position: "absolute", top: "20px", right: "20px", padding: "3px 10px", background: "rgba(78,195,199,0.1)", borderRadius: "4px", color: "#4EC3C7", fontSize: "10px", fontWeight: 700 }}>
                {t.raise}
              </div>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "#0B1F2F", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B1F2F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="font-serif font-bold text-white" style={{ fontSize: "14px" }}>{t.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-sans font-semibold" style={{ fontSize: "13px", color: "#0B1F2F" }}>{t.author}</div>
                  <div className="font-sans" style={{ fontSize: "11px", color: "#718096" }}>{t.title}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "36px" }}>
          <p style={{ textAlign: "center", color: "#4A5568", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
            Sectors We Have Served
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {sectors.map((s) => (
              <span key={s} className="font-sans font-medium" style={{ padding: "7px 16px", border: "1px solid #E2E8F0", borderRadius: "20px", color: "#4A5568", fontSize: "12px" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
