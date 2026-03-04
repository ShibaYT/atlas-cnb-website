"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FadeIn, MeanderLine, GoldDivider, PageHero } from "@/src/components/ui";

/* ─── TYPES ─── */
type Department = "proiectare" | "asamblare" | "programare" | "marketing";

interface Answer {
    text: string;
    dept: Department;
}

interface Question {
    question: string;
    answers: Answer[];
}

interface DepartmentResult {
    name: string;
    greek: string;
    deity: string;
    icon: string;
    color: string;
    description: string;
    traits: string[];
    quote: string;
}

/* ─── DEPARTMENT RESULTS ─── */
const departments: Record<Department, DepartmentResult> = {
    proiectare: {
        name: "Departamentul Proiectare",
        greek: "Ordinul lui Daedalus",
        deity: "Daedalus",
        icon: "📐",
        color: "#e8a0ff",
        description: "Ca și Daedalus, marele arhitect al labirintului, tu vezi lumea prin prisma formelor, structurilor și designului. Viziunea ta transformă ideile în planuri concrete — ești cel care dă formă viselor echipei.",
        traits: ["Creativ", "Vizual", "Orientat spre detalii", "Inovator"],
        quote: "Frumusețea stă în detalii, iar detaliile stau în mâinile tale.",
    },
    asamblare: {
        name: "Departamentul Asamblare",
        greek: "Ordinul lui Hephaestus",
        deity: "Hephaestus",
        icon: "🔧",
        color: "#ff8a65",
        description: "Hephaestus, fierarul zeilor, a creat cele mai minunate obiecte din Olimp. Ca și el, tu dai viață materialelor — mâinile tale transformă metalul și componentele în mașinării funcționale.",
        traits: ["Practic", "Rezistent", "Constructor", "Ingenios"],
        quote: "Fierul se modelează prin foc, ideile se modelează prin muncă.",
    },
    programare: {
        name: "Departamentul Programare",
        greek: "Ordinul lui Prometheus",
        deity: "Prometheus",
        icon: "💻",
        color: "#64b5f6",
        description: "Prometheus a furat focul de la zei pentru a-l da oamenilor. Tu aduci \u201Efocul\u201D logicii \u0219i al codului \u2014 transformi algoritmii \u00EEn inteligen\u021B\u0103, d\u00E2nd via\u021B\u0103 robotului prin linii de cod.",
        traits: ["Logic", "Analitic", "Rezolvă probleme", "Strategic"],
        quote: "Codul este magie scrisă în limbajul logicii.",
    },
    marketing: {
        name: "Departamentul Marketing & PR",
        greek: "Ordinul lui Hermes",
        deity: "Hermes",
        icon: "📣",
        color: "#ffd54f",
        description: "Hermes, mesagerul zeilor, era maestrul comunicării și al persuasiunii. Ca și el, tu ești vocea echipei — conectezi oamenii, construiești brandul și răspândești povestea Atlas CNB în lume.",
        traits: ["Comunicativ", "Persuasiv", "Social", "Creativ"],
        quote: "Cel mai puternic instrument nu este o unealtă, ci o poveste bine spusă.",
    },
};

/* ─── QUESTIONS ─── */
const questions: Question[] = [
    {
        question: "Ești într-o insulă pustie. Care e primul lucru pe care-l faci?",
        answers: [
            { text: "Desenez o hartă a insulei și planific un adăpost", dept: "proiectare" },
            { text: "Încep să construiesc un refugiu din ce găsesc", dept: "asamblare" },
            { text: "Analizez tiparele valurilor și vântului ca să-mi dau seama unde sunt", dept: "programare" },
            { text: "Scriu un mesaj într-o sticlă și-l arunc în ocean", dept: "marketing" },
        ],
    },
    {
        question: "Care superputere ai alege?",
        answers: [
            { text: "Să pot vizualiza și crea orice obiect din imaginație", dept: "proiectare" },
            { text: "Super-forță — să pot construi sau repara orice", dept: "asamblare" },
            { text: "Să pot opri timpul ca să gândesc soluția perfectă", dept: "programare" },
            { text: "Telepatie — să citesc și să influențez gândurile altora", dept: "marketing" },
        ],
    },
    {
        question: "La un proiect de grup, care rol ți se potrivește mai bine?",
        answers: [
            { text: "Să fac schițele și planul vizual al proiectului", dept: "proiectare" },
            { text: "Să pun mâna și să construiesc efectiv", dept: "asamblare" },
            { text: "Să organizez logica și să rezolv problemele tehnice", dept: "programare" },
            { text: "Să prezint proiectul și să conving juriul", dept: "marketing" },
        ],
    },
    {
        question: "Ce fel de joc te atrage cel mai mult?",
        answers: [
            { text: "Jocuri de design / simulatoare de construcție (Minecraft creativ, Sims)", dept: "proiectare" },
            { text: "Jocuri de supraviețuire unde trebuie să craftuiești unelte", dept: "asamblare" },
            { text: "Puzzle-uri complexe și jocuri de strategie", dept: "programare" },
            { text: "Jocuri multiplayer sociale și cooperative", dept: "marketing" },
        ],
    },
    {
        question: "Un prieten are o problemă. Cum reacționezi?",
        answers: [
            { text: "Îi fac un plan detaliat cu soluții posibile", dept: "proiectare" },
            { text: "Mă apuc direct să-l ajut practic, fără prea multe vorbe", dept: "asamblare" },
            { text: "Analizez situația logic și îi ofer cea mai rațională soluție", dept: "programare" },
            { text: "Vorbesc cu el, îl ascult, și-l motivez să depășească momentul", dept: "marketing" },
        ],
    },
    {
        question: "Ce materie îți place cel mai mult (chiar dacă nu neapărat notele)?",
        answers: [
            { text: "Arte / Desen Tehnic / Geometrie", dept: "proiectare" },
            { text: "Fizică / Educație Tehnologică", dept: "asamblare" },
            { text: "Matematică / Informatică", dept: "programare" },
            { text: "Limba Română / Psihologie / Economie", dept: "marketing" },
        ],
    },
    {
        question: "Cum arată biroul tău ideal?",
        answers: [
            { text: "Tabletă grafică, ecran mare, markere colorate", dept: "proiectare" },
            { text: "Banc de lucru cu unelte, piese și un pistol de lipit", dept: "asamblare" },
            { text: "Două monitoare, tastatură mecanică, cafea", dept: "programare" },
            { text: "Laptop elegant, telefon, carnet de idei", dept: "marketing" },
        ],
    },
    {
        question: "Dacă ai fi un personaj dintr-un film, ai fi...",
        answers: [
            { text: "Arhitectul care proiectează planul (Tony Stark la design)", dept: "proiectare" },
            { text: "Mecanicul care repară nava în ultima clipă (Scotty din Star Trek)", dept: "asamblare" },
            { text: "Hackerul genial care sparge orice sistem (Neo din Matrix)", dept: "programare" },
            { text: "Liderul carismatic care unește echipa (Captain America)", dept: "marketing" },
        ],
    },
    {
        question: "Ce te motivează cel mai mult?",
        answers: [
            { text: "Să văd o idee prinde formă vizuală — de la schiță la realitate", dept: "proiectare" },
            { text: "Satisfacția de a ține în mână ceva funcțional pe care l-am construit eu", dept: "asamblare" },
            { text: "Momentul \u201Eaha!\u201D c\u00E2nd rezolv o problem\u0103 complex\u0103", dept: "programare" },
            { text: "Reacția oamenilor când le captez atenția cu o prezentare sau idee", dept: "marketing" },
        ],
    },
    {
        question: "Cum ai descrie personalitatea ta într-un cuvânt?",
        answers: [
            { text: "Vizionar — văd ce ar putea fi, nu doar ce este", dept: "proiectare" },
            { text: "Pragmatic — fapte, nu vorbe", dept: "asamblare" },
            { text: "Analitic — totul are o logică", dept: "programare" },
            { text: "Empatic — oamenii contează cel mai mult", dept: "marketing" },
        ],
    },
];

/* ─── COMPONENT ─── */
export default function QuizPage() {
    const [phase, setPhase] = useState<"welcome" | "quiz" | "result">("welcome");
    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState<Record<Department, number>>({
        proiectare: 0, asamblare: 0, programare: 0, marketing: 0,
    });
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [animating, setAnimating] = useState(false);
    const [resultDept, setResultDept] = useState<Department | null>(null);
    const [revealStep, setRevealStep] = useState(0);

    const handleStart = () => {
        setPhase("quiz");
    };

    const handleAnswer = useCallback((answerIndex: number) => {
        if (animating) return;
        setSelectedAnswer(answerIndex);
        setAnimating(true);

        const answer = questions[currentQ].answers[answerIndex];
        const newScores = { ...scores, [answer.dept]: scores[answer.dept] + 1 };
        setScores(newScores);

        setTimeout(() => {
            if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1);
                setSelectedAnswer(null);
                setAnimating(false);
            } else {
                // Calculate result
                const maxScore = Math.max(...Object.values(newScores));
                const winner = (Object.keys(newScores) as Department[]).find(
                    (k) => newScores[k] === maxScore
                )!;
                setResultDept(winner);
                setPhase("result");
                setAnimating(false);
            }
        }, 600);
    }, [animating, currentQ, scores]);

    const handleRetake = () => {
        setPhase("welcome");
        setCurrentQ(0);
        setScores({ proiectare: 0, asamblare: 0, programare: 0, marketing: 0 });
        setSelectedAnswer(null);
        setResultDept(null);
        setRevealStep(0);
    };

    // Reveal animation sequence
    useEffect(() => {
        if (phase !== "result") return;
        const timers = [
            setTimeout(() => setRevealStep(1), 300),
            setTimeout(() => setRevealStep(2), 800),
            setTimeout(() => setRevealStep(3), 1400),
            setTimeout(() => setRevealStep(4), 2000),
        ];
        return () => timers.forEach(clearTimeout);
    }, [phase]);

    const progress = ((currentQ + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100;

    return (
        <>
            <PageHero label="Oracolul" title="Descoperă-ți Destinul" />

            <section style={{ padding: "60px 24px 100px", maxWidth: 860, margin: "0 auto" }}>

                {/* ═══ WELCOME SCREEN ═══ */}
                {phase === "welcome" && (
                    <FadeIn>
                        <div style={{
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: 12,
                            padding: "60px 40px 50px",
                            background: "linear-gradient(135deg, rgba(20,16,40,0.97), rgba(30,24,60,0.94))",
                            border: "1px solid rgba(201,168,76,0.2)",
                        }}>
                            {/* Decorative orbs */}
                            <div style={{ position: "absolute", top: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,63,138,0.2) 0%, transparent 70%)", pointerEvents: "none", animation: "orb1 10s ease-in-out infinite" }} />
                            <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none", animation: "orb2 13s ease-in-out infinite" }} />

                            {/* Top meander */}
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><MeanderLine opacity={0.2} /></div>

                            <div style={{ position: "relative", zIndex: 2 }}>
                                {/* Oracle icon */}
                                <div style={{
                                    fontSize: 72, marginBottom: 24,
                                    filter: "drop-shadow(0 0 20px rgba(201,168,76,0.4))",
                                    animation: "glowPulse 3s ease-in-out infinite",
                                }}>🏛️</div>

                                <h2 className="cinzel" style={{
                                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                    fontWeight: 700,
                                    color: "#c9a84c",
                                    marginBottom: 12,
                                }}>Oracolul lui Atlas</h2>

                                <div style={{
                                    width: 60, height: 1,
                                    background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                                    margin: "0 auto 24px",
                                }} />

                                <p style={{
                                    fontSize: "1.15rem",
                                    lineHeight: 1.9,
                                    color: "#9090c8",
                                    maxWidth: 520,
                                    margin: "0 auto 16px",
                                }}>
                                    Răspunde la <span style={{ color: "#c9a84c", fontWeight: 600 }}>10 întrebări</span> despre
                                    personalitatea ta și descoperă din ce departament al echipei Atlas CNB ai face parte.
                                </p>

                                <p style={{
                                    fontSize: "1rem",
                                    color: "#5a5080",
                                    fontStyle: "italic",
                                    marginBottom: 40,
                                    lineHeight: 1.7,
                                }}>
                                    &ldquo;Cunoaște-te pe tine însuți&rdquo; — Oracolul din Delphi
                                </p>

                                {/* Department preview */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gap: 12,
                                    marginBottom: 40,
                                    maxWidth: 480,
                                    margin: "0 auto 40px",
                                }}>
                                    {(Object.keys(departments) as Department[]).map((key) => (
                                        <div key={key} style={{
                                            padding: "16px 8px",
                                            borderRadius: 8,
                                            border: "1px solid rgba(201,168,76,0.1)",
                                            background: "rgba(13,11,26,0.6)",
                                        }}>
                                            <div style={{ fontSize: 28, marginBottom: 6 }}>{departments[key].icon}</div>
                                            <div className="cinzel" style={{
                                                fontSize: "0.6rem",
                                                letterSpacing: "0.1em",
                                                color: "#6a6098",
                                                textTransform: "uppercase",
                                            }}>{departments[key].deity}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="btn-gold" onClick={handleStart} style={{ fontSize: "0.8rem", padding: "16px 40px" }}>
                                    Începe Profeția →
                                </button>
                            </div>

                            {/* Bottom meander */}
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><MeanderLine opacity={0.15} /></div>
                        </div>
                    </FadeIn>
                )}

                {/* ═══ QUIZ FLOW ═══ */}
                {phase === "quiz" && (
                    <div>
                        {/* Progress bar */}
                        <div style={{ marginBottom: 40 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 10,
                            }}>
                                <span className="cinzel" style={{
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.2em",
                                    color: "#5a5080",
                                    textTransform: "uppercase",
                                }}>Întrebarea {currentQ + 1} din {questions.length}</span>
                                <span className="cinzel" style={{
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.15em",
                                    color: "#c9a84c",
                                }}>{Math.round(progress)}%</span>
                            </div>
                            <div className="quiz-progress-track">
                                <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        {/* Question card */}
                        <FadeIn key={`q-${currentQ}`}>
                            <div style={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: 12,
                                padding: "44px 36px 40px",
                                background: "linear-gradient(135deg, rgba(20,16,40,0.97), rgba(30,24,60,0.94))",
                                border: "1px solid rgba(201,168,76,0.15)",
                                marginBottom: 28,
                            }}>
                                {/* Decorative corner */}
                                <div style={{
                                    position: "absolute", top: -30, right: -30, width: 120, height: 120,
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(74,63,138,0.15) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                }} />

                                {/* Question number badge */}
                                <div style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 20,
                                    padding: "5px 14px",
                                    border: "1px solid rgba(201,168,76,0.2)",
                                    borderRadius: 2,
                                    background: "rgba(201,168,76,0.04)",
                                }}>
                                    <div style={{
                                        width: 5, height: 5, borderRadius: "50%",
                                        background: "#c9a84c",
                                        animation: "glowPulse 2s ease-in-out infinite",
                                    }} />
                                    <span className="cinzel" style={{
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.25em",
                                        color: "#8a7030",
                                        textTransform: "uppercase",
                                    }}>Profeția {currentQ + 1}</span>
                                </div>

                                <h3 className="cinzel" style={{
                                    fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                                    fontWeight: 600,
                                    color: "#e8d898",
                                    lineHeight: 1.5,
                                    position: "relative",
                                }}>{questions[currentQ].question}</h3>
                            </div>
                        </FadeIn>

                        {/* Answer options */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {questions[currentQ].answers.map((answer, i) => (
                                <FadeIn key={`a-${currentQ}-${i}`} delay={i * 70}>
                                    <button
                                        className={`quiz-option${selectedAnswer === i ? " selected" : ""}`}
                                        onClick={() => handleAnswer(i)}
                                        disabled={animating}
                                        style={{
                                            width: "100%",
                                            textAlign: "left",
                                            padding: "20px 24px",
                                            borderRadius: 8,
                                            background: selectedAnswer === i
                                                ? "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(30,24,60,0.95))"
                                                : "linear-gradient(135deg, rgba(20,16,40,0.95), rgba(30,24,60,0.9))",
                                            border: selectedAnswer === i
                                                ? "1px solid rgba(201,168,76,0.5)"
                                                : "1px solid rgba(201,168,76,0.1)",
                                            color: selectedAnswer === i ? "#f5d78e" : "#9090c8",
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.05rem",
                                            lineHeight: 1.6,
                                            cursor: animating ? "default" : "pointer",
                                            transition: "all 0.3s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 16,
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Letter badge */}
                                        <span className="cinzel" style={{
                                            width: 32, height: 32,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            borderRadius: "50%",
                                            border: selectedAnswer === i
                                                ? "1.5px solid rgba(201,168,76,0.6)"
                                                : "1.5px solid rgba(201,168,76,0.15)",
                                            background: selectedAnswer === i
                                                ? "rgba(201,168,76,0.1)"
                                                : "rgba(74,63,138,0.1)",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            color: selectedAnswer === i ? "#c9a84c" : "#5a5080",
                                            flexShrink: 0,
                                            transition: "all 0.3s ease",
                                        }}>
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        <span>{answer.text}</span>
                                    </button>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                )}

                {/* ═══ RESULT SCREEN ═══ */}
                {phase === "result" && resultDept && (() => {
                    const dept = departments[resultDept];
                    return (
                        <div style={{ textAlign: "center" }}>
                            {/* Main result card */}
                            <div style={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: 12,
                                padding: "60px 40px 50px",
                                background: "linear-gradient(135deg, rgba(20,16,40,0.97), rgba(30,24,60,0.94))",
                                border: `1px solid ${dept.color}33`,
                                marginBottom: 32,
                            }}>
                                {/* Animated background glow */}
                                <div style={{
                                    position: "absolute", inset: 0,
                                    background: `radial-gradient(circle at 50% 30%, ${dept.color}15 0%, transparent 60%)`,
                                    animation: "revealPulse 3s ease-in-out infinite",
                                    pointerEvents: "none",
                                }} />
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><MeanderLine opacity={0.2} /></div>

                                {/* Floating particles */}
                                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
                                    {Array.from({ length: 15 }, (_, i) => (
                                        <circle key={i} cx={`${(i * 137.5) % 100}%`} cy={`${(i * 73.1) % 100}%`}
                                            r={0.6 + (i % 3) * 0.3} fill={i % 2 === 0 ? dept.color : "#c9a84c"} opacity="0">
                                            <animate attributeName="opacity" values="0;0.6;0" dur={`${(i % 3) + 2}s`} begin={`${(i * 0.4) % 3}s`} repeatCount="indefinite" />
                                        </circle>
                                    ))}
                                </svg>

                                <div style={{ position: "relative", zIndex: 2 }}>
                                    {/* Label */}
                                    <div style={{
                                        opacity: revealStep >= 1 ? 1 : 0,
                                        transform: revealStep >= 1 ? "translateY(0)" : "translateY(20px)",
                                        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                                    }}>
                                        <span className="section-label" style={{ display: "block", marginBottom: 20 }}>— Oracolul a Vorbit —</span>
                                    </div>

                                    {/* Icon with spinning ring */}
                                    <div style={{
                                        opacity: revealStep >= 2 ? 1 : 0,
                                        transform: revealStep >= 2 ? "scale(1)" : "scale(0.5)",
                                        transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
                                        marginBottom: 28,
                                    }}>
                                        <div style={{ position: "relative", display: "inline-block", width: 120, height: 120 }}>
                                            <div style={{
                                                position: "absolute", inset: -6, borderRadius: "50%",
                                                border: `2px solid ${dept.color}40`,
                                                animation: "spin 12s linear infinite",
                                                backgroundImage: `conic-gradient(from 0deg, transparent 0%, ${dept.color}80 20%, transparent 40%)`,
                                                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                                                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                                            }} />
                                            <div style={{
                                                position: "absolute", inset: -12, borderRadius: "50%",
                                                border: `1px dashed ${dept.color}25`,
                                                animation: "spinRev 18s linear infinite",
                                            }} />
                                            <div style={{
                                                width: 120, height: 120,
                                                borderRadius: "50%",
                                                background: `linear-gradient(135deg, ${dept.color}20, rgba(30,24,60,0.9))`,
                                                border: `2px solid ${dept.color}50`,
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: 52,
                                                boxShadow: `0 0 40px ${dept.color}20`,
                                            }}>
                                                {dept.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Department name */}
                                    <div style={{
                                        opacity: revealStep >= 3 ? 1 : 0,
                                        transform: revealStep >= 3 ? "translateY(0)" : "translateY(30px)",
                                        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
                                    }}>
                                        <div className="cinzel" style={{
                                            fontSize: "0.7rem",
                                            letterSpacing: "0.3em",
                                            color: dept.color,
                                            textTransform: "uppercase",
                                            marginBottom: 10,
                                            opacity: 0.8,
                                        }}>{dept.greek}</div>

                                        <h2 className="cinzel" style={{
                                            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                                            fontWeight: 700,
                                            color: "#c9a84c",
                                            marginBottom: 8,
                                            lineHeight: 1.2,
                                        }}>{dept.name}</h2>

                                        <div style={{
                                            width: 80, height: 1,
                                            background: `linear-gradient(90deg, transparent, ${dept.color}, transparent)`,
                                            margin: "0 auto 24px",
                                        }} />

                                        <p style={{
                                            fontSize: "1.1rem",
                                            lineHeight: 1.9,
                                            color: "#9090c8",
                                            maxWidth: 540,
                                            margin: "0 auto 28px",
                                        }}>{dept.description}</p>
                                    </div>

                                    {/* Traits */}
                                    <div style={{
                                        opacity: revealStep >= 4 ? 1 : 0,
                                        transform: revealStep >= 4 ? "translateY(0)" : "translateY(20px)",
                                        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 10,
                                            flexWrap: "wrap",
                                            marginBottom: 28,
                                        }}>
                                            {dept.traits.map((trait) => (
                                                <span key={trait} className="cinzel" style={{
                                                    padding: "6px 16px",
                                                    borderRadius: 2,
                                                    border: `1px solid ${dept.color}30`,
                                                    background: `${dept.color}08`,
                                                    fontSize: "0.7rem",
                                                    letterSpacing: "0.15em",
                                                    color: dept.color,
                                                    textTransform: "uppercase",
                                                }}>{trait}</span>
                                            ))}
                                        </div>

                                        <p style={{
                                            fontSize: "1.05rem",
                                            color: "#5a5080",
                                            fontStyle: "italic",
                                            lineHeight: 1.7,
                                        }}>
                                            &ldquo;{dept.quote}&rdquo;
                                        </p>
                                    </div>
                                </div>

                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><MeanderLine opacity={0.15} /></div>
                            </div>

                            {/* Score breakdown */}
                            <FadeIn delay={200}>
                                <div style={{
                                    borderRadius: 8,
                                    padding: "28px 24px",
                                    background: "linear-gradient(135deg, rgba(20,16,40,0.95), rgba(30,24,60,0.9))",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                    marginBottom: 32,
                                }}>
                                    <span className="cinzel" style={{
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.25em",
                                        color: "#5a5080",
                                        textTransform: "uppercase",
                                        display: "block",
                                        marginBottom: 20,
                                    }}>Rezultatele Tale</span>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                                        {(Object.keys(departments) as Department[]).map((key) => {
                                            const isWinner = key === resultDept;
                                            return (
                                                <div key={key} style={{
                                                    padding: "14px 8px",
                                                    borderRadius: 6,
                                                    border: isWinner
                                                        ? `1px solid ${departments[key].color}40`
                                                        : "1px solid rgba(201,168,76,0.06)",
                                                    background: isWinner
                                                        ? `${departments[key].color}08`
                                                        : "transparent",
                                                }}>
                                                    <div style={{ fontSize: 24, marginBottom: 6 }}>{departments[key].icon}</div>
                                                    <div className="cinzel" style={{
                                                        fontSize: "1.3rem",
                                                        fontWeight: 700,
                                                        color: isWinner ? departments[key].color : "#5a5080",
                                                    }}>{scores[key]}</div>
                                                    <div className="cinzel" style={{
                                                        fontSize: "0.55rem",
                                                        letterSpacing: "0.1em",
                                                        color: isWinner ? departments[key].color : "#3a3060",
                                                        textTransform: "uppercase",
                                                        marginTop: 4,
                                                        opacity: isWinner ? 1 : 0.7,
                                                    }}>{departments[key].deity}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Action buttons */}
                            <FadeIn delay={400}>
                                <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                                    <button className="btn-ghost" onClick={handleRetake}>
                                        ↺ Încearcă din nou
                                    </button>
                                    <Link href="/echipa" className="btn-gold">
                                        Cunoaște echipa →
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    );
                })()}

                {/* Bottom divider */}
                <div style={{ marginTop: 60 }}>
                    <GoldDivider icon="🏛️" />
                </div>
            </section>
        </>
    );
}
