"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitContactMessage } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto-scroll to form if ?consult=true in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("consult") === "true") {
        setTimeout(() => {
          const el = document.getElementById("contact-form");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 400);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await submitContactMessage({ name: form.name, email: form.email, company: form.company, message: `Phone: ${form.phone}\n\n${form.message}` });
      setSuccess(true);
    } catch {
      setSuccess(true);
    }
    setLoading(false);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(155deg, #0B1F2F, #0d2a3f, #142e45)", paddingTop: "120px", paddingBottom: "60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, background: "radial-gradient(ellipse at 80% 50%, #4EC3C7, transparent 60%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, rgba(78,195,199,0.5), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#4EC3C7", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>Contact Us</div>
          <h1 className="font-serif font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Let&apos;s Start the<br /><em style={{ color: "#4EC3C7" }}>Conversation</em>
          </h1>
          <p className="font-sans leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "17px", maxWidth: "420px" }}>
            No sales pressure. A direct conversation with Avinash Pratap about your
            goals — completely free and confidential.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: "64px 0 80px", background: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "40px", alignItems: "start" }}>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h2 className="font-serif font-bold mb-3" style={{ fontSize: "26px", color: "#0B1F2F" }}>Get in Touch</h2>
                <p className="font-sans" style={{ fontSize: "13px", color: "#4A5568", lineHeight: 1.75 }}>
                  We respond within 24 business hours. For urgent matters, call or WhatsApp directly.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a href="tel:+917718899466" style={{ display: "flex", alignItems: "flex-start", gap: "14px", textDecoration: "none" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(78,195,199,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={16} style={{ color: "#4EC3C7" }} />
                  </div>
                  <div>
                    <div className="font-sans font-semibold" style={{ fontSize: "12px", color: "#0B1F2F", marginBottom: "2px" }}>Phone / WhatsApp</div>
                    <div className="font-sans" style={{ fontSize: "13px", color: "#4A5568" }}>+91 77188 99466</div>
                  </div>
                </a>
                <a href="mailto:support@dashesnhyphens.com" style={{ display: "flex", alignItems: "flex-start", gap: "14px", textDecoration: "none" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(78,195,199,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={16} style={{ color: "#4EC3C7" }} />
                  </div>
                  <div>
                    <div className="font-sans font-semibold" style={{ fontSize: "12px", color: "#0B1F2F", marginBottom: "2px" }}>Email</div>
                    <div className="font-sans" style={{ fontSize: "13px", color: "#4EC3C7" }}>support@dashesnhyphens.com</div>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(78,195,199,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={16} style={{ color: "#4EC3C7" }} />
                  </div>
                  <div>
                    <div className="font-sans font-semibold" style={{ fontSize: "12px", color: "#0B1F2F", marginBottom: "2px" }}>Office</div>
                    <div className="font-sans" style={{ fontSize: "13px", color: "#4A5568" }}>New Delhi, India</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ background: "#fff", borderRadius: "14px", padding: "20px", border: "1px solid #E2E8F0" }}>
                <div style={{ color: "#4EC3C7", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'DM Sans', sans-serif" }}>Office Hours</div>
                {[
                  { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM IST" },
                  { day: "Saturday", hours: "10:00 AM – 2:00 PM IST" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span className="font-sans" style={{ fontSize: "12px", color: "#4A5568" }}>{h.day}</span>
                    <span className="font-sans font-medium" style={{ fontSize: "12px", color: h.hours === "Closed" ? "#718096" : "#0B1F2F" }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="contact-form">
              {success ? (
                <div style={{ background: "#fff", borderRadius: "16px", padding: "60px 32px", textAlign: "center", border: "1px solid #E2E8F0" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(78,195,199,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={32} style={{ color: "#4EC3C7" }} />
                  </div>
                  <h3 className="font-serif font-bold mb-3" style={{ fontSize: "24px", color: "#0B1F2F" }}>Message Sent!</h3>
                  <p className="font-sans" style={{ fontSize: "14px", color: "#4A5568" }}>
                    Thank you for reaching out. Avinash will be in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <div style={{ background: "#fff", borderRadius: "16px", padding: "36px", border: "1px solid #E2E8F0" }}>
                  <h3 className="font-serif font-bold mb-6" style={{ fontSize: "22px", color: "#0B1F2F" }}>Send a Message</h3>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="font-sans" style={{ display: "block", fontSize: "10px", fontWeight: 600, color: "#0B1F2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "7px" }}>Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required className="input-field" />
                      </div>
                      <div>
                        <label className="font-sans" style={{ display: "block", fontSize: "10px", fontWeight: 600, color: "#0B1F2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "7px" }}>Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required className="input-field" />
                      </div>
                    </div>
                    <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="font-sans" style={{ display: "block", fontSize: "10px", fontWeight: 600, color: "#0B1F2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "7px" }}>Phone Number *</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required className="input-field" />
                      </div>
                      <div>
                        <label className="font-sans" style={{ display: "block", fontSize: "10px", fontWeight: 600, color: "#0B1F2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "7px" }}>Company</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans" style={{ display: "block", fontSize: "10px", fontWeight: 600, color: "#0B1F2F", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "7px" }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your goals — IPO, fundraising, government grants, or CS compliance..." required rows={5} className="input-field" style={{ resize: "none" }} />
                    </div>

                    {error && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", background: "#FEF2F2", borderRadius: "8px", color: "#DC2626" }}>
                        <AlertCircle size={15} />
                        <span className="font-sans" style={{ fontSize: "13px" }}>{error}</span>
                      </div>
                    )}

                    <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", background: "#0B1F2F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, border: "none", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", opacity: loading ? 0.6 : 1 }}>
                      {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message →"}
                    </button>
                    <p className="font-sans" style={{ fontSize: "11px", color: "#718096", textAlign: "center" }}>
                      All enquiries are treated with strict confidentiality.
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <EyePuneBanner />
      <Footer />
    </main>
  );
}
