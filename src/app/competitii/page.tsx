"use client";
import { FadeIn, MeanderLine, GoldDivider, PageHero, useInView } from "@/src/components/ui";
import type { Metadata } from "next";

const seasons = [
    {
        season: "2025–2026",
        game: "INTO THE DEEP",
        events: [
            { name: "Romania West League Tournament", result: "Sustain Award", placement: "Locul 10 calificări" },
            { name: "WinterTech League Meet", result: "Participare", placement: "Calificări regionale" },
            { name: "SkyTech Fest League Meet", result: "Participare", placement: "Calificări regionale" },
            { name: "RoboDojo X Cybermoon X AtlasCNB", result: "Co-organizator & Participant", placement: "Eveniment Timișoara, Decembrie 2024" },
        ],
        highlight: "Calificare la Etapa Națională FIRST Tech Challenge România. Premiul Sustain Award la turneul regional din Hunedoara.",
        record: "Sezon activ",
    },
    {
        season: "2023–2024",
        game: "CENTERSTAGE",
        events: [
            { name: "Campionatul Național FTC România", result: "Locul 27 din 60 echipe", placement: "5 din 6 meciuri câștigate" },
            { name: "Control Award", result: "Premiul 3 — Control Award", placement: "Etapă regională" },
        ],
        highlight: "Record impresionant de 20-4-0 pe tot sezonul, cu participare la 5 evenimente oficiale. Locul 27 la Campionatul Național din Timișoara.",
        record: "20-4-0",
    },
    {
        season: "2022–2023",
        game: "POWERPLAY",
        events: [
            { name: "Evenimente Regionale România", result: "Multiple premii", placement: "Performanță crescută" },
        ],
        highlight: "Sezonul consolidării — echipa a dobândit experiență valoroasă și a câștigat multiple premii la evenimentele regionale.",
        record: "Sezon complet",
    },
    {
        season: "2021–2022",
        game: "FREIGHT FRENZY",
        events: [
            { name: "Regionala Cluj & București", result: "Participare", placement: "Calificare" },
            { name: "FTC Romania Qualifying Tournament", result: "Locul 78", placement: "Primul sezon competitiv" },
        ],
        highlight: "Anul de debut (rookie year) — echipa Atlas CNB #20732 intră în competiția FIRST Tech Challenge și participă la primele turnee oficiale.",
        record: "Rookie Year",
    },
];

function CompCard({ event, index }: { event: { name: string; result: string; placement: string }; index: number }) {
    const [ref, inView] = useInView(0.2);
    return (
        <article ref={ref} style={{
            position: "relative", overflow: "hidden", padding: "22px 26px", borderRadius: 4,
            background: "linear-gradient(135deg,rgba(20,16,40,0.95),rgba(30,24,60,0.9))",
            border: "1px solid rgba(201,168,76,0.12)",
            transition: "transform 0.3s,border-color 0.3s,box-shadow 0.3s",
        }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; e.currentTarget.style.transform = "none"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                <h4 className="cinzel" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#b8b8e8", margin: 0 }}>{event.name}</h4>
                <span className="cinzel" style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2, border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)", color: "#c9a84c" }}>{event.result}</span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#5a5080", fontStyle: "italic", margin: 0 }}>{event.placement}</p>
            <div style={{ height: 2, background: "rgba(201,168,76,0.08)", borderRadius: 99, overflow: "hidden", marginTop: 12 }}>
                <div style={{ height: "100%", width: inView ? "100%" : "0", background: "linear-gradient(90deg,#2d2a6e,#c9a84c,#f5d78e)", borderRadius: 99, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${index * 150}ms` }} />
            </div>
        </article>
    );
}

export default function CompetitiiPage() {
    return (
        <>
            <PageHero label="Gloriile Noastre" title="Competiții & Victorii" />

            <section style={{ padding: "60px 24px 96px", maxWidth: 1120, margin: "0 auto" }}>
                {/* Intro */}
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px" }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "#9090c8" }}>
                            Din 2021, echipa Atlas CNB #20732 participă activ în competiția{" "}
                            <span style={{ color: "#c9a84c", fontWeight: 600 }}>FIRST Tech Challenge</span>,
                            acumulând experiență, premii și o reputație solidă în comunitatea FTC din România.
                        </p>
                    </div>
                </FadeIn>

                {/* Timeline */}
                {seasons.map((s, si) => (
                    <div key={s.season} style={{ marginBottom: si < seasons.length - 1 ? 60 : 0 }}>
                        <FadeIn delay={si * 80}>
                            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                                <div style={{ width: 4, height: 50, background: "linear-gradient(180deg,#c9a84c,rgba(201,168,76,0.2))", borderRadius: 4 }} />
                                <div>
                                    <div className="cinzel" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "#c9a84c" }}>{s.season}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
                                        <span className="cinzel" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8b8e8" }}>{s.game}</span>
                                        {s.record && (
                                            <span className="cinzel" style={{
                                                fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase",
                                                padding: "3px 10px", borderRadius: 2,
                                                border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)",
                                                color: "#c9a84c",
                                            }}>Record: {s.record}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={si * 80 + 60}>
                            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#7070a8", marginBottom: 20, paddingLeft: 24, borderLeft: "1px solid rgba(201,168,76,0.1)" }}>
                                {s.highlight}
                            </p>
                        </FadeIn>

                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {s.events.map((event, ei) => (
                                <FadeIn key={event.name} delay={si * 80 + ei * 100 + 120}>
                                    <CompCard event={event} index={ei} />
                                </FadeIn>
                            ))}
                        </div>

                        {si < seasons.length - 1 && (
                            <div style={{ padding: "30px 0" }}><GoldDivider icon="⊕" /></div>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
}
