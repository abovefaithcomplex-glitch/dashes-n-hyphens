import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dashes n Hyphens Capital Advisory.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <section style={{ background: "#0B1F2F", paddingTop: "120px", paddingBottom: "48px" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>Legal</div>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: "44px" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", marginTop: "10px" }}>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section style={{ padding: "64px 0 80px", background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {[
              {
                title: "1. Introduction",
                content: `Dashes n Hyphens ("we", "our", or "us"), a capital advisory and Company Secretary practice based in New Delhi, India, is committed to protecting the privacy of our clients, website visitors, and prospective clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at dashesnhyphens.com or engage with our services.`
              },
              {
                title: "2. Information We Collect",
                content: `We collect information you voluntarily provide to us when you submit a startup application, fill out the contact form, or communicate with us directly. This includes: full name, email address, phone number, company name, sector, funding stage, and pitch decks or other documents you upload. We also collect standard technical data such as IP address, browser type, and pages visited through cookies and analytics tools.`
              },
              {
                title: "3. How We Use Your Information",
                content: `We use the information we collect to respond to your inquiries and service requests, evaluate your startup application for funding or IPO advisory, provide capital markets advisory services, send relevant updates or communications you have opted into, improve our website and service offerings, and comply with applicable legal obligations under Indian law.`
              },
              {
                title: "4. Confidentiality",
                content: `All business information, financial data, pitch decks, and personal details shared with Dashes n Hyphens are treated as strictly confidential. We do not disclose your information to third parties without your explicit consent, except where required by law, regulation, or court order. Our team members are bound by confidentiality obligations.`
              },
              {
                title: "5. Data Storage & Security",
                content: `Your data is stored securely using industry-standard encryption and access controls. We use Supabase (a SOC 2 compliant infrastructure provider) for database and file storage. While we take reasonable measures to protect your information, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.`
              },
              {
                title: "6. Cookies",
                content: `Our website may use cookies to enhance user experience and gather analytics data. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly if you disable cookies.`
              },
              {
                title: "7. Third-Party Services",
                content: `Our website may contain links to third-party websites, including EyE PunE (our digital partner) and LinkedIn. We are not responsible for the privacy practices of those third-party sites and encourage you to review their privacy policies independently.`
              },
              {
                title: "8. Your Rights",
                content: `You have the right to access, correct, or request deletion of the personal data we hold about you. To exercise these rights, please contact us at support@dashesnhyphens.com. We will respond to your request within 30 days in accordance with applicable Indian data protection laws.`
              },
              {
                title: "9. Changes to This Policy",
                content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website following any changes constitutes your acceptance of the revised policy.`
              },
              {
                title: "10. Contact Us",
                content: `If you have questions about this Privacy Policy, please contact us at: support@dashesnhyphens.com | +91 77188 99466 | New Delhi, India.`
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
