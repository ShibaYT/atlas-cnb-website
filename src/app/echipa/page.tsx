"use client";
import { FadeIn, MeanderLine, GoldDivider, PageHero } from "@/src/components/ui";

/* ─── DATA ─── */
const teamGroups = [
    {
        name: "Mentori",
        icon: "🏛️",
        members: [
            { name: "Felicia Dragu", letters: "FD", desc: "Mentor" },
            { name: "Andrei Dălinesc", letters: "AD", desc: "Mentor" },
        ],
    },
    {
        name: "Conducere",
        icon: "👑",
        members: [
            { name: "Alexandru D.", letters: "AD", desc: "Team Leader" },
            { name: "Miruna B.", letters: "MB", desc: "Secretară" },
        ],
    },
    {
        name: "Departamentul Proiectare",
        icon: "📐",
        members: [
            { name: "Darius M.", letters: "DM", desc: "Leader de departament" },
            { name: "Amalia D.", letters: "AD", desc: "Membru" },
            { name: "Andrei S.", letters: "AS", desc: "Membru" },
        ],
    },
    {
        name: "Departamentul Asamblare",
        icon: "🔧",
        members: [
            { name: "Andrei T.", letters: "AT", desc: "Leader de departament" },
            { name: "Marius P.", letters: "MP", desc: "Membru" },
        ],
    },
    {
        name: "Departamentul Programare",
        icon: "💻",
        members: [
            { name: "Dragoș C.", letters: "DC", desc: "Leader de departament" },
            { name: "Alexandru C.", letters: "AC", desc: "Membru" },
            { name: "Luca G.", letters: "LG", desc: "Membru" },
        ],
    },
    {
        name: "Departamentul Marketing & PR",
        icon: "📣",
        members: [
            { name: "Iulia V.", letters: "IV", desc: "Leader PR" },
            { name: "Ovidiu A.", letters: "OA", desc: "Leader Marketing" },
            { name: "Sofia O.", letters: "SO", desc: "Membru" },
            { name: "Eunice S.", letters: "ES", desc: "Membru" },
            { name: "Patrick Ș.", letters: "PȘ", desc: "Membru" },
            { name: "Anne U.", letters: "AU", desc: "Membru" },
            { name: "Anisia M.", letters: "AM", desc: "Membru" },
            { name: "David P.", letters: "DP", desc: "Membru" },
        ],
    },
    {
        name: "Voluntari",
        icon: "🤝",
        members: [
            { name: "Andrei A.", letters: "AA", desc: "Programare" },
            { name: "Maria S.", letters: "MS", desc: "Programare" },
            { name: "Miriam F.", letters: "MF", desc: "Marketing & PR" },
            { name: "Cătălina O.", letters: "CO", desc: "Marketing & PR" },
            { name: "Andreea I.", letters: "AI", desc: "Marketing & PR" },
            { name: "Vlad A.", letters: "VA", desc: "Marketing & PR" },
            { name: "Astrid R.", letters: "AR", desc: "Marketing & PR" },
            { name: "Ioana I.", letters: "II", desc: "Asamblare" },
        ],
    },
];

const values = [
    { icon: "⚡", title: "Inovație", text: "Căutăm mereu soluții creative și noi tehnologii pentru a ne depăși limitele." },
    { icon: "🤝", title: "Echipă", text: "Puterea noastră stă în colaborare și în sprijinul reciproc." },
    { icon: "🏆", title: "Excelență", text: "Urmărim cele mai înalte standarde în tot ceea ce facem." },
    { icon: "📚", title: "Educație", text: "Fiecare proiect este o oportunitate de a învăța și de a crește." },
];

/* ─── GALLERY PLACEHOLDERS ─── */
const galleryItems = [
    { icon: "🤖", label: "Robotul Nostru", desc: "Adaugă o poză cu robotul echipei", span: "wide" },
    { icon: "👥", label: "Echipa la Lucru", desc: "Momentele din laborator", span: "normal" },
    { icon: "🏆", label: "La Competiții", desc: "Cele mai bune momente din concurs", span: "normal" },
    { icon: "🔧", label: "În Atelier", desc: "Procesul de construcție", span: "normal" },
    { icon: "📸", label: "Poză de Grup", desc: "Toată echipa împreună", span: "wide" },
    { icon: "🎯", label: "Pe Teren", desc: "Robotul în acțiune", span: "normal" },
];

export default function EchipaPage() {
    return (
        <>
            <PageHero label="Eroii" title="Olimpienii Noștri" />

            <section style={{ padding: "60px 24px 80px", maxWidth: 1120, margin: "0 auto" }}>
                {/* Intro */}
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 60px" }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "#9090c8" }}>
                            Suntem o echipă de elevi de la{" "}
                            <span style={{ color: "#c9a84c", fontWeight: 600 }}>Colegiul Național Bănățean</span>{" "}
                            din Timișoara, uniți de pasiunea pentru robotică, inginerie și competiție.
                            Lucrăm în primul laborator de robotică din vestul României, deschis în 2019.
                        </p>
                    </div>
                </FadeIn>

                {/* Team Groups */}
                <div style={{ display: "flex", flexDirection: "column", gap: 70, marginBottom: 80 }}>
                    {teamGroups.map((group) => (
                        <div key={group.name}>
                            <FadeIn>
                                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                                    <span style={{ fontSize: 24 }}>{group.icon}</span>
                                    <h2 className="cinzel" style={{ fontSize: "1.6rem", fontWeight: 700, color: "#e8d898" }}>{group.name}</h2>
                                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)" }} />
                                </div>
                            </FadeIn>

                            <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 22 }}>
                                {group.members.map((m, i) => {
                                    const isLeader = m.desc.includes("Leader") || m.desc === "Team Leader" || m.desc === "Mentor" || m.desc === "Secretară";
                                    return (
                                        <FadeIn key={m.name} delay={i * 40}>
                                            <div className="member-card" style={{
                                                padding: "32px 24px 28px", textAlign: "center", cursor: "default", height: "100%",
                                                position: "relative",
                                                background: isLeader
                                                    ? "linear-gradient(180deg, rgba(201,168,76,0.08) 0%, rgba(20,16,40,0.95) 40%, rgba(30,24,60,0.9) 100%)"
                                                    : "linear-gradient(135deg, rgba(20,16,40,0.95), rgba(30,24,60,0.9))",
                                                border: isLeader ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.12)",
                                                borderRadius: 8,
                                                transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                                                overflow: "hidden",
                                            }}>
                                                {/* Decorative top shimmer for leaders */}
                                                {isLeader && (
                                                    <div style={{
                                                        position: "absolute", top: 0, left: 0, right: 0, height: 2,
                                                        background: "linear-gradient(90deg, transparent, #c9a84c, #f5d78e, #c9a84c, transparent)",
                                                        backgroundSize: "200% 100%",
                                                        animation: "shimmerGold 3s linear infinite",
                                                    }} />
                                                )}

                                                {/* Avatar */}
                                                <div style={{
                                                    position: "relative",
                                                    width: isLeader ? 92 : 82,
                                                    height: isLeader ? 92 : 82,
                                                    margin: "0 auto 20px",
                                                }}>
                                                    {/* Outer ring for leaders */}
                                                    {isLeader && (
                                                        <>
                                                            <div style={{
                                                                position: "absolute", inset: -6, borderRadius: "50%",
                                                                border: "1px solid rgba(201,168,76,0.3)",
                                                                animation: `spin ${14 + i * 3}s linear infinite`,
                                                                backgroundImage: "conic-gradient(from 0deg, transparent 0%, rgba(201,168,76,0.4) 25%, transparent 50%)",
                                                                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                                                                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                                                            }} />
                                                            <div style={{
                                                                position: "absolute", inset: -10, borderRadius: "50%",
                                                                border: "1px dashed rgba(201,168,76,0.2)",
                                                                animation: `spinRev ${18 + i * 2}s linear infinite`,
                                                            }} />
                                                        </>
                                                    )}

                                                    {/* Avatar circle */}
                                                    <div className="member-avatar" style={{
                                                        width: "100%", height: "100%", borderRadius: "50%",
                                                        background: isLeader
                                                            ? "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(74,63,138,0.35), rgba(30,24,60,0.9))"
                                                            : "linear-gradient(135deg, rgba(74,63,138,0.3), rgba(30,24,60,0.85))",
                                                        border: isLeader ? "2.5px solid rgba(201,168,76,0.6)" : "2px solid rgba(201,168,76,0.2)",
                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                        boxShadow: isLeader
                                                            ? "0 4px 20px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.05)"
                                                            : "0 4px 12px rgba(0,0,0,0.3)",
                                                        transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                                                    }}>
                                                        <span className="cinzel" style={{
                                                            fontSize: isLeader ? 26 : 22,
                                                            fontWeight: 700,
                                                            color: isLeader ? "#f5d78e" : "#c9a84c",
                                                            textShadow: isLeader ? "0 0 12px rgba(201,168,76,0.4)" : "none",
                                                        }}>{m.letters}</span>
                                                    </div>
                                                </div>

                                                {/* Name */}
                                                <h3 className="cinzel" style={{
                                                    fontSize: isLeader ? "1.15rem" : "1rem",
                                                    fontWeight: 600,
                                                    color: isLeader ? "#f5d78e" : "#c9a84c",
                                                    marginBottom: 8,
                                                    letterSpacing: "0.02em",
                                                }}>{m.name}</h3>

                                                {/* Gold line under name */}
                                                <div style={{
                                                    width: isLeader ? 40 : 24,
                                                    height: 1,
                                                    background: isLeader
                                                        ? "linear-gradient(90deg, transparent, #c9a84c, transparent)"
                                                        : "rgba(201,168,76,0.2)",
                                                    margin: "0 auto 10px",
                                                    transition: "width 0.3s",
                                                }} />

                                                {/* Role */}
                                                <p className="cinzel" style={{
                                                    fontSize: "0.82rem",
                                                    color: isLeader ? "#c9a84c" : "#6a6098",
                                                    lineHeight: 1.55,
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                }}>{m.desc}</p>
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <GoldDivider icon="📷" />

                {/* ─── ROBOT & TEAM GALLERY ─── */}
                <div style={{ marginTop: 80, marginBottom: 80 }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 50 }}>
                            <span className="section-label">— Galeria Noastră —</span>
                            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>Robotul & Echipa</h2>
                            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "16px auto" }} />
                            <p style={{ color: "#7070a8", fontSize: "1.05rem", maxWidth: 500, margin: "12px auto 0", lineHeight: 1.75 }}>
                                Momente din laboratorul nostru, de la competiții și din viața echipei.
                            </p>
                        </div>
                    </FadeIn>
                    <div className="gallery-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 16,
                    }}>
                        {galleryItems.map((item, i) => (
                            <FadeIn key={item.label} delay={i * 60}>
                                <div className="gallery-card" style={{
                                    position: "relative",
                                    aspectRatio: item.span === "wide" ? "16/9" : "4/3",
                                    borderRadius: 8,
                                    overflow: "hidden",
                                    background: "linear-gradient(135deg, rgba(20,16,40,0.98), rgba(30,24,60,0.95))",
                                    border: "1px solid rgba(201,168,76,0.15)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                                    gridColumn: item.span === "wide" ? "span 2" : "span 1",
                                }}>
                                    {/* Decorative background pattern */}
                                    <div style={{
                                        position: "absolute", inset: 0, opacity: 0.03,
                                        backgroundImage: "radial-gradient(circle at 50% 50%, #c9a84c 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }} />

                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: "radial-gradient(ellipse at center, rgba(74,63,138,0.15) 0%, transparent 70%)",
                                    }} />

                                    {/* Content */}
                                    <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: 24 }}>
                                        <div style={{
                                            fontSize: 48, marginBottom: 16,
                                            filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))",
                                            transition: "transform 0.35s",
                                        }}>{item.icon}</div>
                                        <h3 className="cinzel" style={{
                                            fontSize: "1rem", fontWeight: 600, color: "#e8d898",
                                            marginBottom: 8, letterSpacing: "0.04em",
                                        }}>{item.label}</h3>
                                        <p style={{
                                            fontSize: "0.9rem", color: "#5a5080",
                                            lineHeight: 1.6,
                                        }}>{item.desc}</p>
                                        <div style={{
                                            marginTop: 16,
                                            display: "inline-flex", alignItems: "center", gap: 6,
                                            padding: "6px 14px",
                                            border: "1px dashed rgba(201,168,76,0.3)",
                                            borderRadius: 4,
                                            fontSize: "0.75rem",
                                            color: "#c9a84c",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                        }}>
                                            <span style={{ fontSize: 14 }}>+</span> Adaugă poză
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <GoldDivider icon="⚡" />

                {/* Values */}
                <div style={{ marginTop: 80 }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 50 }}>
                            <span className="section-label">— Valorile Noastre —</span>
                            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>Ce Ne Definește</h2>
                            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "16px auto" }} />
                        </div>
                    </FadeIn>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
                        {values.map((v, i) => (
                            <FadeIn key={v.title} delay={i * 80}>
                                <div className="card" style={{ padding: 28, height: "100%", textAlign: "center" }}>
                                    <div style={{ fontSize: 36, marginBottom: 14 }}>{v.icon}</div>
                                    <h3 className="cinzel" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#c9a84c", marginBottom: 10 }}>{v.title}</h3>
                                    <p style={{ fontSize: "1rem", color: "#7070a8", lineHeight: 1.75 }}>{v.text}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
