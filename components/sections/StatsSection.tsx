"use client";

const stats = [
  { value: "50+", label: "IPOs Advised & Listed", sub: "SME & Mainboard · NSE & BSE" },
  { value: "Rs. 500 Cr+", label: "Capital Facilitated", sub: "Fundraising & IPO mandates" },
  { value: "Rs. 25 Cr+", label: "Govt. Grants Secured", sub: "DPIIT, SIDBI & state schemes" },
  { value: "500+", label: "CS & SEBI Filings", sub: "ROC, MCA, SEBI compliance" },
];

export default function StatsSection() {
  return (
    <section style={{ background: "#0B1F2F", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "32px 24px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                className="font-serif font-bold text-white"
                style={{ fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "6px" }}
              >
                {stat.value}
              </div>
              <div
                className="font-sans font-medium"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", marginBottom: "3px" }}
              >
                {stat.label}
              </div>
              <div
                className="font-sans"
                style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
