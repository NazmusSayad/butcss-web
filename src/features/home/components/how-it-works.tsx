const steps = [
  {
    title: 'Write CSS',
    description: 'Define @server, @database, and route blocks with selectors.',
  },
  {
    title: 'Compile',
    description: 'butcss parses the file and compiles an Express app.',
  },
  {
    title: 'Run',
    description: 'Point the CLI at your CSS and serve instantly.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] tracking-[0.4em] text-[#616a74] uppercase">
            Flow
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.3rem)] font-[var(--font-display)] text-[#14161a]">
            From stylesheet to server in three moves.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e5761]">
            Design routes, compile, run. Keep the stack small and fast to
            iterate.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[24px] border border-black/10 bg-white/80 p-6 shadow-[0_20px_46px_rgba(16,19,22,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1b9e8a]/15 text-sm font-semibold text-[#1b9e8a]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#1f242a]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#5a646f]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
