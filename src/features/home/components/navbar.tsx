const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Example', href: '#example' },
  { label: 'Quickstart', href: '#quickstart' },
]

export function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-10 pb-6">
        <div className="flex items-center gap-3 text-sm font-[var(--font-display)] tracking-[0.32em] text-[#1b1e23] uppercase">
          <span className="h-9 w-9 rounded-[12px] bg-[conic-gradient(from_210deg,_#d96a2f,_#1b9e8a,_#c7f07f,_#d96a2f)] shadow-[0_16px_30px_rgba(16,19,22,0.22)]" />
          <span className="font-semibold">butcss</span>
        </div>
        <nav className="hidden items-center gap-8 text-[0.7rem] tracking-[0.35em] text-[#49525c] uppercase lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative pb-1 transition duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#d96a2f] after:transition after:duration-300 hover:text-[#16181c] hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-[#d96a2f]/50 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#example"
            className="hidden rounded-full border border-[#d0c6ba] bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-[#2b3036] uppercase transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_12px_24px_rgba(16,19,22,0.12)] md:inline-flex"
          >
            See example
          </a>
          <a
            href="#quickstart"
            className="rounded-full bg-[#16181c] px-5 py-2 text-xs font-semibold tracking-[0.2em] text-[#f7f1e9] uppercase transition hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(16,19,22,0.22)]"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}
