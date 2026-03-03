"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MeanderLine } from "./ui";

const navLinks = [
    { href: "/", label: "Acasa" },
    { href: "/competitii", label: "Competitii" },
    { href: "/echipa", label: "Echipa" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn);
        fn();
        return () => window.removeEventListener("scroll", fn);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [pathname]);

    // Prevent scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header style={{
            position: "sticky", top: 0, zIndex: 100,
            background: scrolled ? "rgba(13,11,26,0.96)" : "transparent",
            borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            transition: "all 0.4s ease",
        }}>
            {scrolled && <MeanderLine opacity={0.2} />}
            <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
                    <img src="/atlas-logo.png" alt="Atlas CNB Logo" style={{
                        width: 56, height: 56, borderRadius: "50%",
                        border: "2px solid rgba(201,168,76,0.6)", objectFit: "cover",
                        background: "#000",
                        boxShadow: "0 0 18px rgba(201,168,76,0.25), 0 0 6px rgba(201,168,76,0.15)",
                        transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    }} />
                    <div>
                        <div className="cinzel-deco" style={{ fontSize: 18, fontWeight: 700, color: "#c9a84c", letterSpacing: "0.04em" }}>Atlas CNB</div>
                        <div className="cinzel" style={{ fontSize: 11, color: "#5a5080", letterSpacing: "0.2em", textTransform: "uppercase" }}>FTC #20732 · Timișoara</div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className={`nav-desktop${mobileOpen ? " mobile-open" : ""}`} style={{ display: "flex", alignItems: "center", gap: 36 }}>
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href}
                            className={`nav-link${pathname === l.href ? " active" : ""}`}
                            onClick={() => setMobileOpen(false)}>
                            {l.label}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-gold" style={{ padding: "9px 20px", fontSize: "0.68rem" }}
                        onClick={() => setMobileOpen(false)}>
                        Contact
                    </Link>
                </nav>

                {/* Hamburger */}
                <button className={`hamburger${mobileOpen ? " open" : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation">
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}
