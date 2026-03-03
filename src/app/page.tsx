"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FadeIn, MeanderLine, GoldDivider } from "@/src/components/ui";

const stats = [
  { value: "5+", label: "Sezoane" },
  { value: "20732", label: "Echipa FTC" },
  { value: "15", label: "Membri" },
  { value: "2021", label: "Anul Infiintarii" },
];

const aboutCards = [
  { icon: "⚙️", title: "Inginerie & Design", greek: "Technologia", text: "De la CAD și prototipuri la fabricație și testare — construim roboți fiabili, gata pentru competiții FTC internaționale." },
  { icon: "💾", title: "Dezvoltare Software", greek: "Logismos", text: "Rutine autonome, sisteme de control tele-op și unelte de analiză în Java — codul nostru câștigă meciuri." },
  { icon: "🤝", title: "Comunitate & Outreach", greek: "Koinotita", text: "Promovăm STEM prin ateliere, demonstrații și colaborări cu școli și universități din Timișoara." },
  { icon: "✨", title: "Cultura de Echipă", greek: "Arete", text: "Curiozitate, corectitudine și profesionalism — valori pe care le trăim în fiecare zi în laboratorul nostru de robotică." },
];

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [letters, setLetters] = useState(() => "ATLAS CNB".split("").map(c => ({ c, on: false })));

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 120);
    "ATLAS CNB".split("").forEach((_, i) => {
      setTimeout(() => setLetters(p => p.map((l, j) => j === i ? { ...l, on: true } : l)), 400 + i * 90);
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-tex" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px 100px" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 70 }, (_, i) => (
            <circle key={i} cx={`${(i * 137.5) % 100}%`} cy={`${(i * 73.1) % 100}%`} r={(i % 3) * 0.6 + 0.3}
              fill={i % 3 === 0 ? "#c9a84c" : "#b8b8e8"} opacity="0">
              <animate attributeName="opacity" values="0;0.7;0" dur={`${(i % 4) + 2.5}s`} begin={`${(i * 0.3) % 5}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
        <div style={{ position: "absolute", top: "8%", left: "3%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(74,63,138,0.22) 0%,transparent 70%)", animation: "orb1 10s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "3%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)", animation: "orb2 13s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "3%", top: "50%", pointerEvents: "none", animation: "floatY 8s ease-in-out infinite" }}>
          <img src="/atlas-logo.png" alt="" style={{ width: 520, height: 520, borderRadius: "50%", objectFit: "cover", opacity: 0.05 }} />
        </div>

        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.1s", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, border: "1px solid rgba(201,168,76,0.25)", borderRadius: 2, padding: "7px 18px", background: "rgba(201,168,76,0.05)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", animation: "glowPulse 2s ease-in-out infinite" }} />
            <span className="cinzel" style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#9a8040" }}>FTC #20732 · Colegiul Național Bănățean · Timișoara</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: "clamp(3.5rem,10vw,9rem)", fontWeight: 900, lineHeight: 0.92, marginBottom: 16, perspective: "600px" }}>
            {letters.map((l, i) =>
              l.c === " " ? <span key={i} style={{ display: "inline-block", width: "0.25em" }} /> :
                <span key={i} className="cinzel-deco gold-shimmer" style={{
                  display: "inline-block",
                  opacity: l.on ? 1 : 0,
                  transform: l.on ? "translateY(0) rotateX(0)" : "translateY(-60px) rotateX(-90deg)",
                  transition: `opacity 0.55s cubic-bezier(0.34,1.56,0.64,1) ${400 + i * 90}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${400 + i * 90}ms`,
                }}>{l.c}</span>
            )}
          </h1>

          <div className="hero-subtitle-line" style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28, opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.1s" }}>
            <div style={{ width: 50, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c)" }} />
            <p className="cinzel" style={{ fontSize: "clamp(0.75rem,1.4vw,1rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "#6a5a30" }}>The World Is On Your Back</p>
            <div style={{ width: 50, height: 1, background: "linear-gradient(90deg,#c9a84c,transparent)" }} />
          </div>

          <p style={{ maxWidth: 560, fontSize: "clamp(1.05rem,1.5vw,1.25rem)", lineHeight: 1.85, color: "#9090c8", marginBottom: 48, opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.3s" }}>
            Echipă de robotică FTC fondată în 2021 la{" "}
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Colegiul Național Bănățean</span> din Timișoara.
            Construim roboți, câștigăm premii și inspirăm generații noi de ingineri.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.5s", marginBottom: 64 }}>
            <Link href="/competitii" className="btn-gold">Competiții &rarr;</Link>
            <Link href="/echipa" className="btn-ghost">Echipa noastră</Link>
          </div>

          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, maxWidth: 520, borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: 28, opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.7s" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ paddingRight: i < 3 ? 20 : 0, paddingLeft: i > 0 ? 20 : 0, borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                <div className="cinzel" style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#c9a84c" }}>{s.value}</div>
                <div className="cinzel" style={{ fontSize: 11, color: "#5a5080", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><MeanderLine opacity={0.2} /></div>
      </section>

      <div style={{ padding: "20px 0" }}><GoldDivider icon="⊕" /></div>

      {/* DESPRE NOI — Redesigned */}
      <section id="despre" style={{ padding: "80px 24px 100px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">— Despre Noi —</span>
            <h2 className="section-title">Moștenitorii lui Atlas</h2>
            <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "20px auto" }} />
          </div>
        </FadeIn>

        {/* Big intro block */}
        <FadeIn delay={60}>
          <div style={{
            position: "relative", overflow: "hidden",
            borderRadius: 12, padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(20,16,40,0.97), rgba(30,24,60,0.94))",
            border: "1px solid rgba(201,168,76,0.15)",
            marginBottom: 40,
          }}>
            {/* Decorative glow */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,63,138,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div className="about-intro-layout" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "center" }}>
              {/* Logo emblem */}
              <div style={{ position: "relative", width: 160, height: 160 }}>
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.2)",
                  animation: "spin 25s linear infinite",
                  backgroundImage: "conic-gradient(from 0deg, transparent 0%, rgba(201,168,76,0.3) 15%, transparent 30%)",
                  WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                }} />
                <div style={{
                  position: "absolute", inset: 12, borderRadius: "50%", overflow: "hidden",
                  border: "2px solid rgba(201,168,76,0.35)",
                  boxShadow: "0 0 30px rgba(201,168,76,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
                }}>
                  <img src="/atlas-logo.png" alt="Atlas CNB" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>

              {/* Text content */}
              <div>
                <p style={{ fontSize: "1.2rem", lineHeight: 2, color: "#9090c8", marginBottom: 24 }}>
                  Suntem o echipă de elevi de la{" "}
                  <span style={{ color: "#c9a84c", fontWeight: 600 }}>Colegiul Național Bănățean</span>{" "}
                  din Timișoara, fondată în <span style={{ color: "#e8d898", fontWeight: 600 }}>2021</span>.
                  Construim roboți, câștigăm premii și inspirăm generații noi de ingineri.
                  Lucrăm în primul laborator de robotică din vestul României.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "#6a6098", fontStyle: "italic" }}>
                  &ldquo;Ca Atlas, care poartă bolta cerului, noi purtăm visul roboticii românești.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature cards — full-width 4 columns */}
        <div className="about-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {aboutCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 100}>
              <div className="card" style={{
                padding: "32px 24px", height: "100%", position: "relative", overflow: "hidden",
                borderRadius: 8,
                background: "linear-gradient(180deg, rgba(20,16,40,0.97), rgba(30,24,60,0.94))",
              }}>
                {/* Top accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
                }} />
                {/* Subtle corner glow */}
                <div style={{
                  position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(74,63,138,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                <div style={{ fontSize: 36, marginBottom: 16, filter: "drop-shadow(0 0 6px rgba(201,168,76,0.2))" }}>{card.icon}</div>
                <div className="cinzel" style={{ fontSize: 10, letterSpacing: "0.25em", color: "#3a3060", marginBottom: 8, fontStyle: "italic", textTransform: "uppercase" }}>{card.greek}</div>
                <h3 className="cinzel" style={{ fontSize: "1rem", fontWeight: 600, color: "#e8d898", marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontSize: "1rem", color: "#7070a8", lineHeight: 1.8 }}>{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div style={{ padding: "8px 0" }}><GoldDivider icon="✦" /></div>

      {/* CTA — Redesigned */}
      <section style={{ padding: "0 24px 96px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div className="cta-inner" style={{
            position: "relative", overflow: "hidden", borderRadius: 12,
            border: "1px solid rgba(201,168,76,0.25)",
            background: "linear-gradient(135deg, rgba(15,12,32,0.99) 0%, rgba(25,18,50,0.98) 40%, rgba(40,28,70,0.97) 100%)",
            padding: "80px 48px",
            textAlign: "center",
          }}>
            {/* Animated background orbs */}
            <div style={{ position: "absolute", top: "20%", left: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,63,138,0.15) 0%, transparent 65%)", animation: "orb1 12s ease-in-out infinite", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)", animation: "orb2 15s ease-in-out infinite", pointerEvents: "none" }} />

            {/* Top meander */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><MeanderLine opacity={0.2} /></div>

            {/* Floating stars decoration */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
              {Array.from({ length: 20 }, (_, i) => (
                <circle key={i} cx={`${(i * 137.5) % 100}%`} cy={`${(i * 73.1) % 100}%`} r={0.8 + (i % 3) * 0.4}
                  fill={i % 2 === 0 ? "#c9a84c" : "#8080c0"} opacity="0">
                  <animate attributeName="opacity" values="0;0.6;0" dur={`${(i % 3) + 2}s`} begin={`${(i * 0.5) % 4}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2 }}>
              {/* Logo with glow */}
              <div style={{ marginBottom: 32 }}>
                <div style={{
                  display: "inline-block", position: "relative",
                  width: 72, height: 72,
                }}>
                  <div style={{
                    position: "absolute", inset: -4, borderRadius: "50%",
                    background: "conic-gradient(from 0deg, rgba(201,168,76,0.5), rgba(74,63,138,0.3), rgba(201,168,76,0.5))",
                    animation: "spin 8s linear infinite",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  }} />
                  <img src="/atlas-logo.png" alt="Atlas CNB" style={{
                    width: 72, height: 72, borderRadius: "50%", objectFit: "cover",
                    border: "2px solid rgba(201,168,76,0.5)", background: "#000",
                    boxShadow: "0 0 30px rgba(201,168,76,0.2)",
                  }} />
                </div>
              </div>

              <span className="section-label" style={{ display: "block", marginBottom: 16 }}>— Alătură-te Legendei —</span>
              <h2 className="cinzel" style={{
                fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#c9a84c",
                marginBottom: 20, lineHeight: 1.2,
              }}>
                Vrei să colaborezi<br />sau să sponsorizezi?
              </h2>
              <p style={{
                color: "#7070a8", maxWidth: 520, margin: "0 auto 40px",
                fontSize: "1.15rem", lineHeight: 1.9,
              }}>
                Suntem mereu în căutare de parteneri, sponsori și pasionați de robotică.
                Hai să construim ceva extraordinar împreună.
              </p>

              {/* Dual buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-gold">Ia legătura cu noi →</Link>
                <Link href="/echipa" className="btn-ghost">Cunoaște echipa</Link>
              </div>
            </div>

            {/* Bottom meander */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><MeanderLine opacity={0.2} /></div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
