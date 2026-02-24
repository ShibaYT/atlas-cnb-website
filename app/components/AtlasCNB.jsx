import { useState, useEffect, useRef } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { href: "#despre", label: "Despre" },
  { href: "#competitii", label: "Competiții" },
  { href: "#echipa", label: "Echipă" },
  { href: "#contact", label: "Contact" },
];

const competitions = [
  {
    season: "2024–2025",
    game: "FIRST Tech Challenge",
    highlight: "Calificative Regionale România",
    result: "Design Award – Finalist",
    icon: "⚡",
  },
  {
    season: "2023–2024",
    game: "Centerstage",
    highlight: "Campionatul Național Timișoara",
    result: "Inspire Award – Alianță Finalist",
    icon: "🏛️",
  },
  {
    season: "2022–2023",
    game: "PowerPlay",
    highlight: "Evenimente Regionale în România",
    result: "Multiple Premii Judecate & Performanță",
    icon: "🔱",
  },
];

const teamMembers = [
  { name: "Alex M.", role: "Căpitan / Mecanic Principal", initials: "AM", god: "Hephaestus" },
  { name: "Radu P.", role: "Lider Software", initials: "RP", god: "Athena" },
  { name: "Ioana C.", role: "Outreach & Business", initials: "IC", god: "Hermes" },
  { name: "Mihai T.", role: "Designer CAD", initials: "MT", god: "Daedalus" },
  { name: "Elena D.", role: "Programator", initials: "ED", god: "Prometheus" },
  { name: "Andrei V.", role: "Inginer Mecanic", initials: "AV", god: "Ares" },
];

const stats = [
  { value: "3+", label: "Sezoane", sub: "de competiție" },
  { value: "10+", label: "Premii", sub: "câștigate" },
  { value: "6", label: "Eroi", sub: "în echipă" },
  { value: "∞", label: "Pasiune", sub: "pentru roboți" },
];

// ── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── SVG Components ───────────────────────────────────────────────────────────

function MeanderBorder({ color = "#c9a84c", opacity = 0.5, height = 16 }) {
  const id = `m${color.replace(/[^a-z0-9]/gi,"")}`;
  return (
    <svg width="100%" height={height} viewBox="0 0 200 16" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
      <defs>
        <pattern id={id} x="0" y="0" width="32" height="16" patternUnits="userSpaceOnUse">
          <path d="M0,12 L4,12 L4,4 L12,4 L12,12 L16,12 L16,8 L20,8 L20,0 L28,0 L28,8 L32,8"
            fill="none" stroke={color} strokeWidth="1.5" strokeOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="200" height="16" fill={`url(#${id})`} />
    </svg>
  );
}

function ColumnDecor() {
  return (
    <svg width="40" height="160" viewBox="0 0 40 160" style={{ opacity: 0.12 }}>
      <rect x="4" y="0" width="32" height="10" rx="2" fill="#c9a84c" />
      <rect x="8" y="10" width="24" height="3" fill="#c9a84c" opacity="0.6" />
      <rect x="11" y="13" width="18" height="120" rx="1" fill="none" stroke="#c9a84c" strokeWidth="1" />
      <line x1="16" y1="13" x2="16" y2="133" stroke="#c9a84c" strokeWidth="0.4" />
      <line x1="20" y1="13" x2="20" y2="133" stroke="#c9a84c" strokeWidth="0.4" />
      <line x1="24" y1="13" x2="24" y2="133" stroke="#c9a84c" strokeWidth="0.4" />
      <rect x="8" y="133" width="24" height="3" fill="#c9a84c" opacity="0.6" />
      <rect x="4" y="136" width="32" height="10" rx="2" fill="#c9a84c" />
      <rect x="0" y="146" width="40" height="4" rx="1" fill="#c9a84c" opacity="0.4" />
    </svg>
  );
}

function AtlasGlyph({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <defs>
        <radialGradient id="atlasGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5d78e" />
          <stop offset="60%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8b6914" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="48" r="24" fill="none" stroke="url(#atlasGrad)" strokeWidth="1.5" opacity="0.9" />
      <ellipse cx="40" cy="48" rx="11" ry="24" fill="none" stroke="url(#atlasGrad)" strokeWidth="1" opacity="0.55" />
      <line x1="16" y1="48" x2="64" y2="48" stroke="url(#atlasGrad)" strokeWidth="1" opacity="0.55" />
      <line x1="19" y1="38" x2="61" y2="38" stroke="url(#atlasGrad)" strokeWidth="0.7" opacity="0.35" />
      <line x1="19" y1="58" x2="61" y2="58" stroke="url(#atlasGrad)" strokeWidth="0.7" opacity="0.35" />
      <circle cx="40" cy="12" r="5.5" fill="url(#atlasGrad)" opacity="0.95" />
      <line x1="40" y1="17" x2="40" y2="30" stroke="url(#atlasGrad)" strokeWidth="2.2" />
      <line x1="30" y1="22" x2="50" y2="22" stroke="url(#atlasGrad)" strokeWidth="2.2" />
      <line x1="40" y1="30" x2="32" y2="42" stroke="url(#atlasGrad)" strokeWidth="1.8" />
      <line x1="40" y1="30" x2="48" y2="42" stroke="url(#atlasGrad)" strokeWidth="1.8" />
    </svg>
  );
}

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    x: (i * 137.5) % 100,
    y: (i * 73.1) % 100,
    r: (i % 3) * 0.5 + 0.3,
    delay: (i * 0.3) % 5,
    dur: (i % 4) + 2.5,
  }));
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
      {stars.map((s, i) => (
        <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r} fill="#f5d78e" opacity="0">
          <animate attributeName="opacity" values="0;0.75;0" dur={`${s.dur}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function AtlasCNB() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [letters, setLetters] = useState(() => "ATLAS CNB".split("").map(c => ({ c, on: false })));

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    "ATLAS CNB".split("").forEach((_, i) => {
      setTimeout(() => setLetters(p => p.map((l, j) => j === i ? { ...l, on: true } : l)), 350 + i * 90);
    });
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", background: "#080603", color: "#e8dcc8", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:#080603;}
        ::-webkit-scrollbar-thumb{background:#c9a84c;border-radius:3px;}
        .cinzel{font-family:'Cinzel',serif;}
        .cinzel-deco{font-family:'Cinzel Decorative',serif;}

        @keyframes shimmer{
          0%{background-position:-200% center;}
          100%{background-position:200% center;}
        }
        .gold-shimmer{
          background:linear-gradient(90deg,#7a5c10 0%,#f5d78e 25%,#c9a84c 50%,#f5d78e 75%,#7a5c10 100%);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
          animation:shimmer 5s linear infinite;
        }

        @keyframes letterFall{
          from{opacity:0;transform:translateY(-50px) rotateX(-90deg);}
          to{opacity:1;transform:translateY(0) rotateX(0deg);}
        }

        @keyframes runeGlow{
          0%,100%{opacity:0.5;filter:drop-shadow(0 0 4px rgba(201,168,76,0.3));}
          50%{opacity:1;filter:drop-shadow(0 0 12px rgba(201,168,76,0.8));}
        }
        .rune-glow{animation:runeGlow 2.8s ease-in-out infinite;}

        @keyframes orbPulse1{
          0%,100%{transform:translate(0,0) scale(1);}
          50%{transform:translate(18px,-28px) scale(1.06);}
        }
        @keyframes orbPulse2{
          0%,100%{transform:translate(0,0);}
          50%{transform:translate(-22px,18px);}
        }
        @keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes spinRev{from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}

        @keyframes laurelSway{
          0%,100%{transform:rotate(-3deg);}
          50%{transform:rotate(3deg);}
        }

        .card-greek{
          position:relative;
          background:linear-gradient(135deg,rgba(18,12,3,0.97) 0%,rgba(28,18,5,0.93) 100%);
          border:1px solid rgba(201,168,76,0.16);
          transition:transform 0.35s cubic-bezier(0.16,1,0.3,1),box-shadow 0.35s,border-color 0.35s;
        }
        .card-greek::before{
          content:'';position:absolute;inset:0;border-radius:inherit;
          background:linear-gradient(135deg,rgba(201,168,76,0.05),transparent 60%);
          opacity:0;transition:opacity 0.35s;
        }
        .card-greek:hover{
          transform:translateY(-5px);
          box-shadow:0 20px 60px rgba(0,0,0,0.75),0 0 36px rgba(201,168,76,0.08);
          border-color:rgba(201,168,76,0.42);
        }
        .card-greek:hover::before{opacity:1;}

        .cta-btn{
          position:relative;overflow:hidden;
          font-family:'Cinzel',serif;font-size:0.72rem;letter-spacing:0.22em;text-transform:uppercase;
          text-decoration:none;padding:13px 32px;border-radius:2px;
          display:inline-flex;align-items:center;gap:10px;
          transition:transform 0.25s,box-shadow 0.25s;
        }
        .cta-btn::before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.12) 50%,transparent 100%);
          transform:translateX(-100%);transition:transform 0.5s;
        }
        .cta-btn:hover::before{transform:translateX(100%);}
        .cta-btn:hover{transform:translateY(-2px);}
        .cta-primary{background:linear-gradient(135deg,#c9a84c,#8b6914);color:#0a0804;box-shadow:0 4px 24px rgba(201,168,76,0.25);}
        .cta-primary:hover{box-shadow:0 8px 36px rgba(201,168,76,0.4);}
        .cta-outline{background:transparent;border:1px solid rgba(201,168,76,0.35);color:#c9a84c;}
        .cta-outline:hover{border-color:#c9a84c;box-shadow:0 4px 24px rgba(201,168,76,0.15);}

        .nav-link-g{
          position:relative;font-family:'Cinzel',serif;font-size:0.7rem;
          letter-spacing:0.2em;text-transform:uppercase;color:#9a7e4a;text-decoration:none;
          padding-bottom:3px;transition:color 0.3s;
        }
        .nav-link-g::after{
          content:'';position:absolute;bottom:0;left:50%;right:50%;height:1px;
          background:linear-gradient(90deg,transparent,#c9a84c,transparent);
          transition:left 0.3s,right 0.3s;
        }
        .nav-link-g:hover{color:#f5d78e;}
        .nav-link-g:hover::after{left:0;right:0;}

        .marble-texture{
          background-image:
            radial-gradient(ellipse at 15% 25%,rgba(201,168,76,0.07) 0%,transparent 45%),
            radial-gradient(ellipse at 85% 75%,rgba(160,100,30,0.05) 0%,transparent 45%),
            repeating-linear-gradient(43deg,transparent,transparent 100px,rgba(201,168,76,0.012) 100px,rgba(201,168,76,0.012) 101px),
            repeating-linear-gradient(-43deg,transparent,transparent 100px,rgba(201,168,76,0.012) 100px,rgba(201,168,76,0.012) 101px);
        }

        .progress-bar{height:2px;background:rgba(201,168,76,0.1);border-radius:99px;overflow:hidden;margin-top:18px;}
        .progress-fill{height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,#5a3a08,#f5d78e,#c9a84c);transition:width 1.5s cubic-bezier(0.4,0,0.2,1);}
        .progress-fill.on{width:100%;}

        .tag-gold{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.18em;text-transform:uppercase;
          padding:5px 14px;border-radius:2px;border:1px solid rgba(201,168,76,0.3);
          background:rgba(201,168,76,0.06);color:#c9a84c;white-space:nowrap;}

        .divider{display:flex;align-items:center;gap:20px;max-width:1120px;margin:0 auto;padding:0 24px;}
        .divider .dl{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent);}

        .side-accent{position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,transparent,#c9a84c 30%,#c9a84c 70%,transparent);opacity:0.5;}
      `}</style>

      {/* NAVBAR */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(8,6,3,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s ease",
      }}>
        {scrolled && <MeanderBorder color="#c9a84c" opacity={0.2} height={3} />}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <AtlasGlyph size={40} />
            <div>
              <div className="cinzel-deco" style={{ fontSize: 13, fontWeight: 700, color: "#c9a84c", letterSpacing: "0.1em" }}>Atlas CNB</div>
              <div className="cinzel" style={{ fontSize: 9, color: "#5a4a2a", letterSpacing: "0.2em", textTransform: "uppercase" }}>FTC Robotics · Timișoara</div>
            </div>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link-g">{l.label}</a>)}
            <a href="mailto:contact@atlascnb.ro" className="cta-btn cta-primary" style={{ padding: "8px 18px", fontSize: "0.65rem" }}>Contactează</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="marble-texture" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 24px 100px" }}>
        <StarField />

        {/* Ambient orbs */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.1) 0%,transparent 70%)", animation: "orbPulse1 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(160,100,30,0.07) 0%,transparent 70%)", animation: "orbPulse2 11s ease-in-out infinite", pointerEvents: "none" }} />

        {/* Columns */}
        <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}><ColumnDecor /></div>
        <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}><ColumnDecor /></div>

        {/* Giant bg Atlas */}
        <div style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", opacity: 0.035, pointerEvents: "none" }}>
          <svg width="560" height="560" viewBox="0 0 200 200">
            <circle cx="100" cy="140" r="55" fill="none" stroke="#c9a84c" strokeWidth="2" />
            <ellipse cx="100" cy="140" rx="25" ry="55" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            <line x1="45" y1="140" x2="155" y2="140" stroke="#c9a84c" strokeWidth="1.5" />
            <line x1="47" y1="118" x2="153" y2="118" stroke="#c9a84c" strokeWidth="1" />
            <line x1="47" y1="162" x2="153" y2="162" stroke="#c9a84c" strokeWidth="1" />
            <circle cx="100" cy="40" r="18" fill="none" stroke="#c9a84c" strokeWidth="2" />
            <line x1="100" y1="58" x2="100" y2="85" stroke="#c9a84c" strokeWidth="3.5" />
            <line x1="72" y1="70" x2="128" y2="70" stroke="#c9a84c" strokeWidth="3.5" />
            <line x1="100" y1="85" x2="78" y2="108" stroke="#c9a84c" strokeWidth="3" />
            <line x1="100" y1="85" x2="122" y2="108" stroke="#c9a84c" strokeWidth="3" />
          </svg>
        </div>

        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Badge */}
          <div style={{
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)",
            transition: "all 0.6s ease 0.1s", display: "inline-flex", alignItems: "center", gap: 10,
            marginBottom: 24, border: "1px solid rgba(201,168,76,0.22)", borderRadius: 2,
            padding: "6px 18px", background: "rgba(201,168,76,0.04)",
          }}>
            <span style={{ color: "#c9a84c", fontSize: 13 }} className="rune-glow">⚡</span>
            <span className="cinzel" style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8a7040" }}>Robotică FTC · România · Timișoara</span>
          </div>

          {/* Animated title */}
          <h1 style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: 12, perspective: "600px" }}>
            {letters.map((l, i) =>
              l.c === " " ? <span key={i} style={{ display: "inline-block", width: "0.3em" }} /> :
              <span key={i} className="cinzel-deco gold-shimmer" style={{
                display: "inline-block",
                opacity: l.on ? 1 : 0,
                transform: l.on ? "translateY(0) rotateX(0deg)" : "translateY(-60px) rotateX(-90deg)",
                transition: `opacity 0.55s cubic-bezier(0.34,1.56,0.64,1) ${350 + i * 90}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${350 + i * 90}ms`,
              }}>{l.c}</span>
            )}
          </h1>

          {/* Tagline */}
          <div style={{
            display: "flex", alignItems: "center", gap: 18, marginBottom: 28,
            opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.1s",
          }}>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c)" }} />
            <p className="cinzel" style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.9rem)", letterSpacing: "0.4em", textTransform: "uppercase", color: "#7a6035" }}>
              Purtătorii Lumii · Constructorii Viitorului
            </p>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,#c9a84c,transparent)" }} />
          </div>

          {/* Description */}
          <p style={{
            maxWidth: 540, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85, color: "#7a6035", marginBottom: 44,
            opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.3s",
          }}>
            O echipă de robotică din{" "}
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Colegiul Național „C. D. Loga"</span>,
            construind roboți care schimbă lumea prin inginerie, teamwork și creativitate — ca Atlas, care poartă cerul pe umeri.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.5s" }}>
            <a href="#despre" className="cta-btn cta-primary">Descoperă echipa →</a>
            <a href="#competitii" className="cta-btn cta-outline">Competiții ↓</a>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0,
            borderTop: "1px solid rgba(201,168,76,0.12)", paddingTop: 28, maxWidth: 580,
            opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 1.7s",
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ paddingRight: i < 3 ? 20 : 0, paddingLeft: i > 0 ? 20 : 0, borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                <div className="cinzel" style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#c9a84c" }}>{s.value}</div>
                <div className="cinzel" style={{ fontSize: 9, color: "#5a4820", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#3a2e14", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <MeanderBorder color="#c9a84c" opacity={0.22} />
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ padding: "20px 0" }}>
        <div className="divider">
          <div className="dl" />
          <span className="cinzel rune-glow" style={{ color: "#c9a84c", fontSize: 22 }}>⊕</span>
          <div className="dl" />
        </div>
      </div>

      {/* ABOUT */}
      <section id="despre" style={{ padding: "80px 24px 96px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#5a4820", marginBottom: 10 }}>— Despre Noi —</div>
            <h2 className="cinzel" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#c9a84c", marginBottom: 20 }}>Moștenitorii lui Atlas</h2>
            <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "0 auto 20px" }} />
            <MeanderBorder color="#c9a84c" opacity={0.28} />
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 64, alignItems: "start" }}>
          <FadeIn delay={80}>
            <div style={{ position: "relative", textAlign: "center" }}>
              <div style={{ position: "relative", width: 240, height: 240, margin: "0 auto" }}>
                <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: "absolute", inset: 0 }}>
                  <circle cx="120" cy="120" r="115" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
                  <circle cx="120" cy="120" r="95" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" strokeDasharray="6 4" style={{ animation: "spin 25s linear infinite", transformOrigin: "120px 120px" }} />
                  <circle cx="120" cy="120" r="75" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" style={{ animation: "spinRev 18s linear infinite", transformOrigin: "120px 120px" }} />
                  {[0,60,120,180,240,300].map(a => {
                    const r = 115, rad = a * Math.PI / 180;
                    return <circle key={a} cx={120 + r * Math.cos(rad)} cy={120 + r * Math.sin(rad)} r="3" fill="#c9a84c" opacity="0.4" />;
                  })}
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AtlasGlyph size={130} />
                </div>
              </div>
              <p style={{ marginTop: 28, fontSize: "1.05rem", lineHeight: 1.9, color: "#5a4820", fontStyle: "italic", maxWidth: 260, margin: "28px auto 0" }}>
                „Ca Atlas, care poartă bolta cerului, noi purtăm visul roboticii românești."
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "⚙️", title: "Inginerie & Design", greek: "Τεχνολογία", text: "De la CAD și prototipuri la fabricație și testare — construim roboți fiabili și gata de competiție." },
              { icon: "💾", title: "Dezvoltare Software", greek: "Λογισμός", text: "Rutine autonome, sisteme de control tele-op și unelte de analiză — codul nostru câștigă meciuri." },
              { icon: "🤝", title: "Comunitate & Outreach", greek: "Κοινότητα", text: "Promovăm STEM prin ateliere, demonstrații și colaborări cu școli din Timișoara." },
              { icon: "✨", title: "Cultură de Echipă", greek: "Ἀρετή", text: "Curiozitate, corectitudine și profesionalism — valori pe care le trăim în fiecare zi." },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 100}>
                <div className="card-greek" style={{ borderRadius: 4, padding: 24, height: "100%" }}>
                  <div style={{ fontSize: 26, marginBottom: 12 }}>{card.icon}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#3a2e14", marginBottom: 6, fontStyle: "italic" }}>{card.greek}</div>
                  <h3 className="cinzel" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c9a84c", marginBottom: 10, letterSpacing: "0.1em" }}>{card.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#5a4820", lineHeight: 1.75 }}>{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider" style={{ padding: "0 24px" }}>
        <div className="dl" />
        <span className="cinzel rune-glow" style={{ color: "#c9a84c", fontSize: 18 }}>✦</span>
        <div className="dl" />
      </div>

      {/* COMPETITIONS */}
      <section id="competitii" style={{ padding: "96px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#5a4820", marginBottom: 10 }}>— Gloriile Noastre —</div>
            <h2 className="cinzel" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#c9a84c", marginBottom: 20 }}>Competiții & Victorii</h2>
            <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "0 auto 20px" }} />
            <MeanderBorder color="#c9a84c" opacity={0.28} />
          </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {competitions.map((comp, i) => (
            <FadeIn key={comp.season} delay={i * 120}>
              <CompCard comp={comp} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider" style={{ padding: "0 24px" }}>
        <div className="dl" />
        <span className="cinzel rune-glow" style={{ color: "#c9a84c", fontSize: 18 }}>⚡</span>
        <div className="dl" />
      </div>

      {/* TEAM */}
      <section id="echipa" style={{ padding: "96px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#5a4820", marginBottom: 10 }}>— Eroii —</div>
            <h2 className="cinzel" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#c9a84c", marginBottom: 20 }}>Olimpienii Noștri</h2>
            <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "0 auto 20px" }} />
            <MeanderBorder color="#c9a84c" opacity={0.28} />
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(165px,1fr))", gap: 18 }}>
          {teamMembers.map((m, i) => (
            <FadeIn key={m.name} delay={i * 80}>
              <div className="card-greek" style={{ borderRadius: 4, padding: "28px 18px", textAlign: "center", cursor: "default" }}>
                <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 10px" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "linear-gradient(135deg,rgba(201,168,76,0.15),rgba(100,60,10,0.3))",
                    border: "1.5px solid rgba(201,168,76,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span className="cinzel" style={{ fontSize: 17, fontWeight: 700, color: "#c9a84c" }}>{m.initials}</span>
                  </div>
                  <div style={{
                    position: "absolute", inset: -7, borderRadius: "50%",
                    border: "1px dashed rgba(201,168,76,0.18)",
                    animation: `spin ${14 + i * 3}s linear infinite`,
                    transformOrigin: "center",
                  }} />
                  <div style={{
                    position: "absolute", inset: -14, borderRadius: "50%",
                    border: "1px dashed rgba(201,168,76,0.08)",
                    animation: `spinRev ${20 + i * 2}s linear infinite`,
                    transformOrigin: "center",
                  }} />
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#3a2e14", marginBottom: 7, fontStyle: "italic" }}>{m.god}</div>
                <h3 className="cinzel" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c9a84c", marginBottom: 6 }}>{m.name}</h3>
                <p style={{ fontSize: "0.78rem", color: "#4a3a1a", lineHeight: 1.55 }}>{m.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "0 24px 96px", maxWidth: 1120, margin: "0 auto" }}>
        <FadeIn>
          <div style={{
            position: "relative", overflow: "hidden", borderRadius: 4,
            border: "1px solid rgba(201,168,76,0.2)",
            background: "linear-gradient(135deg,rgba(18,11,3,0.99),rgba(30,18,5,0.97))",
            padding: "60px 48px", textAlign: "center",
          }}>
            <MeanderBorder color="#c9a84c" opacity={0.35} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 250, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(201,168,76,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

            {/* Laurels */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <svg width="70" height="44" viewBox="0 0 70 44" style={{ animation: "laurelSway 4s ease-in-out infinite", transformOrigin: "right center", opacity: 0.45 }}>
                {[0,1,2,3,4].map(i => {
                  const cx = 10 + i * 12, cy = 22 - Math.abs(i - 2) * 5;
                  return <ellipse key={i} cx={cx} cy={cy} rx="7" ry="12" fill="none" stroke="#c9a84c" strokeWidth="1.5" transform={`rotate(${-35 + i * 17} ${cx} ${cy})`} />;
                })}
              </svg>
              <span className="rune-glow" style={{ fontSize: 28, color: "#c9a84c" }}>⚡</span>
              <svg width="70" height="44" viewBox="0 0 70 44" style={{ animation: "laurelSway 4s ease-in-out infinite reverse", transformOrigin: "left center", opacity: 0.45 }}>
                {[0,1,2,3,4].map(i => {
                  const cx = 60 - i * 12, cy = 22 - Math.abs(i - 2) * 5;
                  return <ellipse key={i} cx={cx} cy={cy} rx="7" ry="12" fill="none" stroke="#c9a84c" strokeWidth="1.5" transform={`rotate(${35 - i * 17} ${cx} ${cy})`} />;
                })}
              </svg>
            </div>

            <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#5a4820", marginBottom: 14 }}>— Alătură-te Legendei —</div>
            <h2 className="cinzel" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 700, color: "#c9a84c", marginBottom: 16 }}>Vrei să colaborezi sau să sponsorizezi?</h2>
            <p style={{ color: "#4a3a1a", maxWidth: 480, margin: "0 auto 32px", fontSize: "1rem", lineHeight: 1.85 }}>
              Suntem mereu în căutare de parteneri, sponsori și pasionați de robotică. Hai să construim ceva extraordinar împreună.
            </p>
            <a href="mailto:contact@atlascnb.ro" className="cta-btn cta-primary">Ia legătura cu noi ✦</a>
            <div style={{ marginTop: 40 }}><MeanderBorder color="#c9a84c" opacity={0.35} /></div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <MeanderBorder color="#c9a84c" opacity={0.2} height={12} />
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "28px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <AtlasGlyph size={28} />
            <span className="cinzel" style={{ fontSize: 10, color: "#3a2e14", letterSpacing: "0.15em" }}>© {new Date().getFullYear()} Atlas CNB · Timișoara, România</span>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Facebook", href: "https://facebook.com" },
              { label: "contact@atlascnb.ro", href: "mailto:contact@atlascnb.ro" },
            ].map(l => (
              <a key={l.label} href={l.href} className="cinzel" style={{ fontSize: 10, color: "#3a2e14", textDecoration: "none", letterSpacing: "0.18em", textTransform: "uppercase", transition: "color 0.25s" }}
                onMouseEnter={e => e.target.style.color = "#c9a84c"}
                onMouseLeave={e => e.target.style.color = "#3a2e14"}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Competition Card ──────────────────────────────────────────────────────────

function CompCard({ comp, index }) {
  const [ref, inView] = useInView(0.2);
  return (
    <article ref={ref} className="card-greek" style={{ borderRadius: 4, padding: "26px 32px", position: "relative", overflow: "hidden" }}>
      <div className="side-accent" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
            border: "1px solid rgba(201,168,76,0.22)", background: "rgba(201,168,76,0.05)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
          }}>{comp.icon}</div>
          <div>
            <h3 className="cinzel" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#d4b86a", marginBottom: 4 }}>{comp.game}</h3>
            <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a2e14" }}>{comp.season}</div>
          </div>
        </div>
        <span className="tag-gold">{comp.result}</span>
      </div>
      <p style={{ fontSize: "0.95rem", color: "#4a3a1a", fontStyle: "italic", marginBottom: 14 }}>{comp.highlight}</p>
      <div className="progress-bar">
        <div className={`progress-fill${inView ? " on" : ""}`} style={{ transitionDelay: `${index * 200}ms` }} />
      </div>
    </article>
  );
}
