import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Dashes n Hyphens Capital Advisory.",
};

export default function TermsOfService() {
  return (
    <main>
      <Navbar />
      <section style={{ background: "#0B1F2F", paddingTop: "120px", paddingBottom: "48px" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>Legal</div>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: "44px" }}>Terms of Service</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", marginTop: "10px" }}>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section style={{ padding: "64px 0 80px", background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                content: `By accessing and using the website dashesnhyphens.com or engaging the services of Dashes n Hyphens, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site or our services.`
              },
              {
                title: "2. Description of Services",
                content: `Dashes n Hyphens provides capital advisory services including IPO advisory, startup funding facilitation, government grant navigation, and Company Secretary compliance services. The information and services provided on this website are for general informational and advisory purposes and do not constitute financial, legal, or investment advice unless explicitly agreed in a signed engagement letter.`
              },
              {
                title: "3. Engagement & Fees",
                content: `Our advisory engagements are governed by individual engagement letters signed by both parties. Fee structures vary by mandate type and scope. Retainer fees, milestone-based payments, and success fees will be clearly outlined in the engagement letter. No fees are charged for initial consultations or eligibility assessments.`
              },
              {
                title: "4. Client Obligations",
                content: `Clients engaging our services agree to provide accurate, complete, and up-to-date information relevant to their mandate. Providing false, misleading, or incomplete information may result in termination of the engagement. Clients are responsible for decisions made based on our advisory, and final business and investment decisions rest solely with the client.`
              },
              {
                title: "5. Intellectual Property",
                content: `All content on this website including text, graphics, logos, and documents is the property of Dashes n Hyphens or its content suppliers and is protected under applicable Indian intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.`
              },
              {
                title: "6. Confidentiality",
                content: `Both parties agree to maintain confidentiality of all non-public information shared during the engagement. This includes but is not limited to financial projections, business plans, investor communications, and DRHP drafts. This obligation survives the termination of the engagement for a period of three (3) years.`
              },
              {
                title: "7. Limitation of Liability",
                content: `Dashes n Hyphens shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services or website. Our total liability in any matter arising out of our engagement shall not exceed the fees paid to us in the three months preceding the claim.`
              },
              {
                title: "8. Governing Law & Jurisdiction",
                content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.`
              },
              {
                title: "9. Termination",
                content: `Either party may terminate an engagement by providing 30 days written notice, subject to the terms of the engagement letter. We reserve the right to immediately terminate access to our services if a client breaches these Terms of Service or engages in fraudulent, illegal, or unethical conduct.`
              },
              {
                title: "10. Contact",
                content: `For questions about these Terms of Service, contact us at: support@dashesnhyphens.com | +91 77188 99466 | New Delhi, India.`
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
