"use client";

const steps = [
  { number: "01", title: "Assessment", description: "Comprehensive evaluation of your business, financials, and IPO readiness. We identify gaps and build a 12-18 month roadmap.", duration: "4-6 weeks", deliverable: "IPO Readiness Report" },
  { number: "02", title: "Financial Structuring", description: "Optimization of balance sheet, revenue recognition, and corporate governance to meet SEBI listing requirements.", duration: "2-4 months", deliverable: "Restructured Financials" },
  { number: "03", title: "Compliance Preparation", description: "Complete regulatory compliance including secretarial audits, statutory filings, and legal due diligence.", duration: "1-3 months", deliverable: "Compliance Certificate" },
  { number: "04", title: "Merchant Banker Alignment", description: "Selection and onboarding of SEBI-registered Category I Merchant Bankers suited to your industry and deal size.", duration: "2-4 weeks", deliverable: "MB Agreement" },
  { number: "05", title: "DRHP Preparation", description: "Drafting of the Draft Red Herring Prospectus with all disclosures, risk factors, and financial projections.", duration: "3-4 months", deliverable: "DRHP Document" },
  { number: "06", title: "SEBI Review", description: "Management of SEBI observations, responding to queries, and obtaining final approval for the IPO.", duration: "30-75 days", deliverable: "SEBI Approval" },
  { number: "07", title: "IPO Listing", description: "Roadshow management, pricing strategy, allotment coordination, and successful listing on NSE/BSE.", duration: "2-4 weeks", deliverable: "Listed Company" },
];

export default function IPOTimeline() {
  return (
    <section style={{ padding: "80px 0", background: "#F5F7FA", position: "relative", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mb-14">
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
            IPO Journey
          </div>
          <h2 className="font-serif font-bold leading-tight mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0B1F2F" }}>
            From Startup to <em>Public Company</em>
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: "#4A5568" }}>
            Our proven 7-step framework has guided 24+ companies through successful IPO listings.
          </p>
        </div>

        <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {steps.map((step) => (
            <div key={step.number} className="rounded-xl p-6 transition-all duration-200 card-3d" style={{ background: "#fff", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span className="font-sans font-bold" style={{ color: "#4EC3C7", fontSize: "13px", letterSpacing: "0.1em" }}>{step.number}</span>
                <span className="font-sans" style={{ color: "#718096", fontSize: "10px", border: "1px solid #E2E8F0", padding: "2px 8px", borderRadius: "10px" }}>{step.duration}</span>
              </div>
              <h3 className="font-serif font-bold mb-2" style={{ fontSize: "17px", color: "#0B1F2F" }}>{step.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>{step.description}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(78,195,199,0.08)", padding: "4px 10px", borderRadius: "10px" }}>
                <span style={{ color: "#4EC3C7", fontSize: "11px" }}>✓</span>
                <span className="font-sans font-medium" style={{ fontSize: "11px", color: "#0B1F2F" }}>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="/ipo-advisory" className="inline-flex items-center gap-3 font-sans font-semibold text-sm rounded transition-all" style={{ padding: "14px 28px", background: "#0B1F2F", color: "#fff" }}>
            Start Your IPO Assessment &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
