import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Dashes n Hyphens Capital Advisory.",
};

export default function Disclaimer() {
  return (
    <main>
      <Navbar />
      <section style={{ background: "#0B1F2F", paddingTop: "120px", paddingBottom: "48px" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>Legal</div>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: "44px" }}>Disclaimer</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", marginTop: "10px" }}>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section style={{ padding: "64px 0 80px", background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Alert box */}
          <div style={{ background: "rgba(78,195,199,0.08)", border: "1px solid rgba(78,195,199,0.3)", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
            <p className="font-sans font-semibold" style={{ fontSize: "14px", color: "#0B1F2F", marginBottom: "6px" }}>Important Notice</p>
            <p className="font-sans" style={{ fontSize: "13px", color: "#4A5568", lineHeight: 1.75 }}>
              The content on this website is for informational purposes only. Nothing on dashesnhyphens.com constitutes
              financial advice, investment advice, or a solicitation to buy or sell any securities. Always consult a
              qualified financial or legal professional before making capital markets decisions.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {[
              {
                title: "1. General Information Only",
                content: `The information provided on dashesnhyphens.com and by Dashes n Hyphens in any communication is for general informational and educational purposes only. It does not constitute and should not be construed as financial advice, investment advice, legal advice, or any other form of professional advice unless explicitly provided through a formal, signed engagement letter.`
              },
              {
                title: "2. Not a SEBI Registered Investment Adviser",
                content: `Dashes n Hyphens provides Company Secretary services and capital markets advisory including IPO consulting. We are not a SEBI Registered Investment Adviser (RIA) under the SEBI (Investment Advisers) Regulations, 2013 for the purpose of providing investment advice on securities. Our IPO advisory services relate to process management, DRHP drafting, compliance, and coordination — not to advice on investing in securities.`
              },
              {
                title: "3. No Guarantee of Outcomes",
                content: `Past successes in IPO listings, fundraising mandates, or grant applications discussed on this website or in our communications do not guarantee future results. Capital markets outcomes depend on a wide range of factors including market conditions, SEBI review, investor sentiment, and macroeconomic factors outside our control. We make no warranty, express or implied, as to the outcome of any advisory engagement.`
              },
              {
                title: "4. Third-Party Information",
                content: `Our website may reference government schemes, SEBI regulations, stock exchange eligibility criteria, and other third-party information. While we strive to keep this information current and accurate, regulations and eligibility criteria change frequently. We recommend verifying all regulatory and eligibility information directly with the relevant authority (SEBI, NSE, BSE, DPIIT, SIDBI, etc.) before taking any action.`
              },
              {
                title: "5. No Solicitation",
                content: `Nothing on this website constitutes a public offer or solicitation to raise funds, issue securities, or participate in any financial scheme. Any discussions regarding investments, fundraising, or securities are private, confidential, and subject to applicable Indian laws and SEBI regulations.`
              },
              {
                title: "6. Accuracy of Information",
                content: `While Dashes n Hyphens makes every effort to ensure the accuracy of information on this website, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of information contained herein. Any reliance you place on such information is strictly at your own risk.`
              },
              {
                title: "7. External Links",
                content: `This website may contain links to external websites operated by third parties, including government portals, stock exchanges, and our digital partner EyE PunE. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`
              },
              {
                title: "8. Jurisdiction",
                content: `This website is operated from New Delhi, India. We make no representation that materials on this site are appropriate or available for use in locations outside India. Those who choose to access this site from outside India do so on their own initiative and are responsible for compliance with local laws.`
              },
              {
                title: "9. Contact",
                content: `If you have any questions about this Disclaimer or our services, please contact us at: support@dashesnhyphens.com | +91 77188 99466 | New Delhi, India.`
              },
            ].map((section) => (
              <div key={section.title} style={{ paddingBottom: "28px", borderBottom: "1px solid #E2E8F0" }}>
                <h2 className="font-serif font-bold mb-3" style={{ fontSize: "20px", color: "#0B1F2F" }}>{section.title}</h2>
                <p className="font-sans leading-relaxed" style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.8 }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EyePuneBanner />
      <Footer />
    </main>
  );
}
