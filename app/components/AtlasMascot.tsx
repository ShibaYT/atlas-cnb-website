type AtlasMascotProps = {
  className?: string;
  title?: string;
};

export default function AtlasMascot({
  className,
  title = "Atlas holding the world",
}: AtlasMascotProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 420"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="atlasStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="1" stopColor="#34d399" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="atlasCore" cx="50%" cy="35%" r="70%">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#0b1221" stopOpacity="1" />
          <stop offset="1" stopColor="#020617" stopOpacity="1" />
        </radialGradient>
        <filter id="softGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0.22  0 1 0 0 0.74  0 0 1 0 0.98  0 0 0 0.55 0"
            result="tint"
          />
          <feMerge>
            <feMergeNode in="tint" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Orbital rings */}
      <g opacity="0.9" filter="url(#softGlow)">
        <circle
          cx="210"
          cy="155"
          r="118"
          fill="none"
          stroke="url(#atlasStroke)"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <circle
          cx="210"
          cy="155"
          r="90"
          fill="none"
          stroke="url(#atlasStroke)"
          strokeWidth="2"
          opacity="0.35"
          strokeDasharray="6 10"
        />
      </g>

      {/* The "world" */}
      <g>
        <circle
          cx="210"
          cy="155"
          r="74"
          fill="url(#atlasCore)"
          stroke="rgba(148,163,184,0.35)"
          strokeWidth="1"
        />
        <path
          d="M155 155c22-26 42-36 63-36s41 10 62 36"
          fill="none"
          stroke="rgba(56,189,248,0.28)"
          strokeWidth="2"
        />
        <path
          d="M155 155c20 24 41 36 63 36s43-12 62-36"
          fill="none"
          stroke="rgba(167,139,250,0.22)"
          strokeWidth="2"
        />
        <path
          d="M210 81c-18 22-26 46-26 74s8 53 26 74"
          fill="none"
          stroke="rgba(52,211,153,0.18)"
          strokeWidth="2"
        />
        <path
          d="M210 81c18 22 26 46 26 74s-8 53-26 74"
          fill="none"
          stroke="rgba(56,189,248,0.18)"
          strokeWidth="2"
        />

        {/* Tiny “robot gear” mark */}
        <g transform="translate(210 155)">
          <circle r="20" fill="none" stroke="url(#atlasStroke)" strokeWidth="2" />
          <circle r="7" fill="rgba(226,232,240,0.9)" opacity="0.9" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const x = Math.cos(angle) * 22;
            const y = Math.sin(angle) * 22;
            return (
              <rect
                key={i}
                x={x - 2.5}
                y={y - 5}
                width="5"
                height="10"
                rx="2"
                fill="rgba(56,189,248,0.55)"
                transform={`rotate(${(i * 45).toFixed(0)})`}
                opacity="0.65"
              />
            );
          })}
        </g>
      </g>

      {/* Atlas figure (stylized) */}
      <g
        fill="none"
        stroke="url(#atlasStroke)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
        filter="url(#softGlow)"
      >
        {/* Head */}
        <circle cx="210" cy="245" r="16" opacity="0.85" />
        {/* Body */}
        <path d="M210 261c-18 20-30 44-34 72" opacity="0.9" />
        <path d="M210 261c18 20 30 44 34 72" opacity="0.9" />
        {/* Arms holding the world */}
        <path d="M186 272c-22-16-40-38-54-66" />
        <path d="M234 272c22-16 40-38 54-66" />
        <path d="M132 206c16-16 36-28 60-36" opacity="0.75" />
        <path d="M288 206c-16-16-36-28-60-36" opacity="0.75" />
        {/* Base / “support” */}
        <path d="M156 345c20 18 38 26 54 26s34-8 54-26" opacity="0.85" />
      </g>
    </svg>
  );
}

