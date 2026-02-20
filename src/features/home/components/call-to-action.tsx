export function CallToAction() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="rounded-[32px] border border-black/10 bg-gradient-to-br from-[#d96a2f]/15 via-white/70 to-[#1b9e8a]/15 px-8 py-10 shadow-[0_30px_60px_rgba(16,19,22,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-[0.7rem] tracking-[0.4em] text-[#616a74] uppercase">
                Ready to build
              </span>
              <h2 className="mt-4 text-[clamp(2rem,3.4vw,3rem)] font-[var(--font-display)] text-[#14161a]">
                Ship a server without leaving your stylesheet.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4e5761]">
                butcss keeps backend logic readable, composable, and fast to
                iterate.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quickstart"
                className="rounded-full bg-[#16181c] px-6 py-3 text-xs font-semibold tracking-[0.25em] text-[#f7f1e9] uppercase shadow-[0_18px_30px_rgba(16,19,22,0.22)] transition hover:-translate-y-0.5"
              >
                Get started
              </a>
              <a
                href="#features"
                className="rounded-full border border-[#d7cabb] bg-white/80 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-[#2a2f35] uppercase transition hover:-translate-y-0.5 hover:bg-white"
              >
                See features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
