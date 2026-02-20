const features = [
  {
    title: 'Routes as selectors',
    description:
      'Describe endpoints with [path="/users"]:GET and ship without boilerplate.',
  },
  {
    title: 'SQL in plain sight',
    description:
      'Use sql() with SQLite to query and mutate data right where it is needed.',
  },
  {
    title: 'Request data helpers',
    description:
      'Pull params, query, body, and headers with explicit helper functions.',
  },
  {
    title: 'Conditional responses',
    description:
      'Use if() to branch responses and return JSON with dynamic status codes.',
  },
  {
    title: 'Server config at top',
    description:
      'Set ports and database locations inside @server and keep setup close.',
  },
  {
    title: 'CSS-first workflow',
    description:
      'Write logic the same way you style: with selectors and clear blocks.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] tracking-[0.4em] text-[#616a74] uppercase">
            Overview
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.3rem)] font-[var(--font-display)] text-[#14161a]">
            Backend logic built from CSS primitives.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e5761]">
            Keep routes, data, and control flow in one readable stylesheet and
            compile it into a production-ready Express server.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-[26px] border border-black/10 bg-white/80 p-6 shadow-[0_22px_48px_rgba(16,19,22,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(16,19,22,0.18)]"
            >
              <span className="text-[0.65rem] tracking-[0.35em] text-[#d96a2f] uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#1e2329]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5a646f]">
                {feature.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#d96a2f]/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
