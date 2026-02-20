export function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,_rgba(253,196,140,0.55),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,_rgba(90,210,189,0.4),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_78%,_rgba(199,240,130,0.25),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,24,28,0.08)_1px,_transparent_1px),linear-gradient(90deg,rgba(22,24,28,0.08)_1px,_transparent_1px)] bg-[length:90px_90px] opacity-30" />
      <div className="absolute top-16 -right-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_35%_35%,_rgba(218,111,47,0.6),_transparent_65%)] opacity-80 blur-3xl motion-safe:animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_40%_40%,_rgba(42,163,142,0.5),_transparent_70%)] opacity-70 blur-3xl motion-safe:animate-[pulse_16s_ease-in-out_infinite]" />
    </div>
  )
}
