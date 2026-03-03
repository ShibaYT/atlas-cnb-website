"use client";
import Link from "next/link";
import { MeanderLine } from "./ui";

const footerLinks = [
    { label: "Acasa", href: "/" },
    { label: "Competitii", href: "/competitii" },
    { label: "Echipa", href: "/echipa" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "contact@atlascnb.ro", href: "mailto:contact@atlascnb.ro" },
];

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            <MeanderLine opacity={0.18} />
            <div className="footer-inner" style={{
                maxWidth: 1120, margin: "0 auto", padding: "36px 24px",
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                flexWrap: "wrap", gap: 28,
            }}>
                {/* Brand */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <img src="/atlas-logo.png" alt="Logo" style={{
                            width: 34, height: 34, borderRadius: "50%",
                            border: "1px solid rgba(201,168,76,0.3)", objectFit: "cover",
                            background: "#000",
                        }} />
                        <div>
                            <div className="cinzel-deco" style={{ fontSize: 12, fontWeight: 700, color: "#c9a84c" }}>Atlas CNB</div>
                            <div className="cinzel" style={{ fontSize: 9, color: "#3a3060", letterSpacing: "0.15em" }}>FTC #20732</div>
                        </div>
                    </div>
                    <p className="cinzel" style={{ fontSize: 11, color: "#3a3060", letterSpacing: "0.14em", maxWidth: 280, lineHeight: 1.7 }}>
                        Colegiul Național Bănățean · Timișoara, România
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <div className="cinzel" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#5a5080", marginBottom: 14 }}>Navigare</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {footerLinks.map(l => (
                            <Link key={l.href} href={l.href} className="cinzel" style={{
                                fontSize: 11, color: "#4a4070", textDecoration: "none",
                                letterSpacing: "0.15em", transition: "color 0.25s",
                            }}
                                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#4a4070")}>
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social / Contact */}
                <div>
                    <div className="cinzel" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#5a5080", marginBottom: 14 }}>Contact</div>
                    <div className="footer-links" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {socialLinks.map(l => (
                            <a key={l.label} href={l.href} className="cinzel" style={{
                                fontSize: 11, color: "#4a4070", textDecoration: "none",
                                letterSpacing: "0.15em", transition: "color 0.25s",
                            }}
                                target={l.href.startsWith("http") ? "_blank" : undefined}
                                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#4a4070")}>
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div style={{
                borderTop: "1px solid rgba(201,168,76,0.08)",
                padding: "16px 24px", textAlign: "center",
            }}>
                <span className="cinzel" style={{ fontSize: 10, color: "#2a2050", letterSpacing: "0.14em" }}>
                    © {new Date().getFullYear()} Atlas CNB · Toate drepturile rezervate
                </span>
            </div>
        </footer>
    );
}
