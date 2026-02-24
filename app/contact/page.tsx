const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    handle: "@atlascnb",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    handle: "Atlas CNB",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    handle: "Atlas CNB Robotics",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),_transparent_60%)]" />

        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Contact
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Get in touch with{" "}
            <span className="bg-gradient-to-tr from-sky-400 to-indigo-300 bg-clip-text text-transparent">
              Atlas CNB
            </span>
            .
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Whether you are a sponsor, a fellow FTC team, a student interested
            in joining, or simply curious about our work, we would be happy to
            hear from you.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)]">
            <div>
              <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                Team email
              </h2>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                For collaboration proposals, sponsorships, school visits, or
                press:
              </p>
              <a
                href="mailto:contact@atlascnb.ro"
                className="mt-2 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200"
              >
                contact@atlascnb.ro
              </a>
            </div>

            <div className="border-t border-slate-800/80 pt-4">
              <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                Visit us in Timișoara
              </h2>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                We are based at Colegiul Național &bdquo;C. D. Loga&ldquo; in
                Timișoara, Romania. If you would like to visit our workshop, get
                in touch and we can schedule a demo or tour.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                Social media
              </h2>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Follow our journey through build sessions, competitions, and
                community events.
              </p>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                {socials.map((social) => (
                  <li
                    key={social.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-950/40 px-3 py-2"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-100">
                        {social.label}
                      </span>
                      <span className="text-xs text-slate-400">
                        {social.handle}
                      </span>
                    </div>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300 hover:text-sky-200"
                    >
                      Open
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                Collaboration ideas
              </h2>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                We love partnering on workshops, tech talks, STEM events, and
                scrimmages. Reach out if you would like to{" "}
                <span className="font-semibold text-sky-300">
                  build something cool with us
                </span>
                .
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

