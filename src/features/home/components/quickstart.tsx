const quickstartItems = [
  {
    title: 'Install',
    code: `pnpm install\npnpm build`,
  },
  {
    title: 'Run',
    code: `node dist/cli.js ./examples/crud.css`,
  },
  {
    title: 'CLI usage',
    code: `css-server <file>`,
  },
]

export function Quickstart() {
  return (
    <section id="quickstart" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] tracking-[0.4em] text-[#616a74] uppercase">
            Quickstart
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.3rem)] font-[var(--font-display)] text-[#14161a]">
            Run the demo in minutes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e5761]">
            Install, build, and point the CLI at a CSS file.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickstartItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-black/10 bg-white/80 p-6 shadow-[0_20px_46px_rgba(16,19,22,0.12)]"
            >
              <h3 className="text-lg font-semibold text-[#1f242a]">
                {item.title}
              </h3>
              <pre className="mt-4 rounded-2xl bg-[#16181c]/5 px-4 py-4 text-[0.82rem] leading-relaxed text-[#1c2026]">
                <code className="font-[var(--font-mono)]">{item.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
