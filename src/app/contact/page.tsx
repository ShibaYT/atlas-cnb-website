"use client";
import { useState } from "react";
import { FadeIn, MeanderLine, GoldDivider, PageHero } from "@/src/components/ui";

const contactInfo = [
    { icon: "✉️", label: "Email", value: "contact@atlascnb.ro", href: "mailto:contact@atlascnb.ro" },
    { icon: "📍", label: "Locație", value: "Colegiul Național Bănățean, Timișoara, România", href: "https://maps.google.com/?q=Colegiul+Na%C8%9Bional+B%C4%83n%C4%83%C8%9Bean+Timi%C8%99oara" },
    { icon: "🤖", label: "Echipa FTC", value: "#20732 — Atlas CNB", href: "https://ftc-events.firstinspires.org/team/20732" },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: "📸" },
    { label: "Facebook", href: "https://facebook.com", icon: "👥" },
    { label: "FIRST Inspires", href: "https://ftc-events.firstinspires.org/team/20732", icon: "🏆" },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Placeholder — in production, connect to an API
        setSubmitted(true);
    }

    return (
        <>
            <PageHero label="Contactează-ne" title="Ia Legătura" />

            <section style={{ padding: "60px 24px 96px", maxWidth: 1120, margin: "0 auto" }}>
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 60px" }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "#9090c8" }}>
                            Vrei să ne sponsorizezi, să colaborezi sau pur și simplu să afli mai multe?
                            Scrie-ne și îți răspundem cât mai curând!
                        </p>
                    </div>
                </FadeIn>

                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
                    {/* Form */}
                    <FadeIn delay={0}>
                        <div className="card" style={{ padding: 36 }}>
                            <h3 className="cinzel" style={{ fontSize: "1rem", fontWeight: 600, color: "#c9a84c", marginBottom: 6 }}>Trimite un Mesaj</h3>
                            <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,#c9a84c,transparent)", marginBottom: 28 }} />

                            {submitted ? (
                                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
                                    <h4 className="cinzel" style={{ color: "#c9a84c", fontSize: "1.1rem", marginBottom: 10 }}>Mulțumim!</h4>
                                    <p style={{ color: "#7070a8", fontSize: "1rem", lineHeight: 1.7 }}>Mesajul tău a fost trimis. Te vom contacta în curând.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                                    <div>
                                        <label className="cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5080", marginBottom: 6, display: "block" }}>Nume</label>
                                        <input className="form-input" type="text" placeholder="Numele tău"
                                            value={formState.name} onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} required />
                                    </div>
                                    <div>
                                        <label className="cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5080", marginBottom: 6, display: "block" }}>Email</label>
                                        <input className="form-input" type="email" placeholder="email@exemplu.ro"
                                            value={formState.email} onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} required />
                                    </div>
                                    <div>
                                        <label className="cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5080", marginBottom: 6, display: "block" }}>Subiect</label>
                                        <input className="form-input" type="text" placeholder="Sponsorizare / Colaborare / Altele"
                                            value={formState.subject} onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))} required />
                                    </div>
                                    <div>
                                        <label className="cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5080", marginBottom: 6, display: "block" }}>Mesaj</label>
                                        <textarea className="form-input" rows={5} placeholder="Scrie mesajul tău aici..."
                                            style={{ resize: "vertical", minHeight: 120 }}
                                            value={formState.message} onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} required />
                                    </div>
                                    <button type="submit" className="btn-gold" style={{ alignSelf: "flex-start", marginTop: 6 }}>Trimite mesajul ✦</button>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    {/* Info Sidebar */}
                    <div>
                        <FadeIn delay={100}>
                            <div className="card" style={{ padding: 32, marginBottom: 20 }}>
                                <h3 className="cinzel" style={{ fontSize: "1rem", fontWeight: 600, color: "#c9a84c", marginBottom: 6 }}>Informații de Contact</h3>
                                <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,#c9a84c,transparent)", marginBottom: 24 }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                                    {contactInfo.map(c => (
                                        <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                                            style={{ display: "flex", gap: 14, alignItems: "flex-start", textDecoration: "none", transition: "transform 0.2s" }}
                                            onMouseEnter={e => (e.currentTarget.style.transform = "translateX(4px)")}
                                            onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                                            <span style={{ fontSize: 22, lineHeight: 1 }}>{c.icon}</span>
                                            <div>
                                                <div className="cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5080", marginBottom: 4 }}>{c.label}</div>
                                                <div style={{ fontSize: "1rem", color: "#b8b8e8", lineHeight: 1.5 }}>{c.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="card" style={{ padding: 32 }}>
                                <h3 className="cinzel" style={{ fontSize: "1rem", fontWeight: 600, color: "#c9a84c", marginBottom: 6 }}>Social Media</h3>
                                <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,#c9a84c,transparent)", marginBottom: 24 }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    {socialLinks.map(s => (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                display: "flex", alignItems: "center", gap: 12,
                                                padding: "12px 16px", borderRadius: 4,
                                                border: "1px solid rgba(201,168,76,0.1)",
                                                background: "rgba(201,168,76,0.03)",
                                                textDecoration: "none",
                                                transition: "border-color 0.3s,transform 0.2s",
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"; e.currentTarget.style.transform = "none"; }}>
                                            <span style={{ fontSize: 20 }}>{s.icon}</span>
                                            <span className="cinzel" style={{ fontSize: "0.85rem", color: "#b8b8e8", letterSpacing: "0.1em" }}>{s.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
