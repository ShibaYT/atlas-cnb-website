"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

/* ── Intersection Observer hook ── */
export function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/* ── Fade-in wrapper ── */
export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const [ref, inView] = useInView();
    return (
        <div ref={ref} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }}>{children}</div>
    );
}

/* ── Greek meander line ── */
export function MeanderLine({ opacity = 0.4 }: { opacity?: number }) {
    return (
        <svg width="100%" height="14" viewBox="0 0 300 14" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
            <defs>
                <pattern id="mpx" x="0" y="0" width="28" height="14" patternUnits="userSpaceOnUse">
                    <path d="M0,10 L3,10 L3,4 L10,4 L10,10 L14,10 L14,7 L18,7 L18,0 L25,0 L25,7 L28,7"
                        fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeOpacity={opacity} />
                </pattern>
            </defs>
            <rect width="300" height="14" fill="url(#mpx)" />
        </svg>
    );
}

/* ── Gold divider with centered icon ── */
export function GoldDivider({ icon = "✦" }: { icon?: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 20, maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)" }} />
            <span className="cinzel" style={{ color: "#c9a84c", fontSize: 18, opacity: 0.7 }}>{icon}</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)" }} />
        </div>
    );
}

/* ── Page hero banner for sub-pages ── */
export function PageHero({ label, title }: { label: string; title: string }) {
    return (
        <section className="page-hero bg-tex">
            <div style={{ position: "relative", zIndex: 2, maxWidth: 1120, margin: "0 auto" }}>
                <FadeIn>
                    <span className="section-label">— {label} —</span>
                    <h1 className="section-title" style={{ marginBottom: 20 }}>{title}</h1>
                    <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "0 auto" }} />
                    <div style={{ marginTop: 16 }}><MeanderLine opacity={0.25} /></div>
                </FadeIn>
            </div>
        </section>
    );
}
