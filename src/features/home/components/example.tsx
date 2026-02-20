const exampleSnippet = `@database {
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  );
}

[path="/users/:id"]:GET {
  --id: param(:id);
  --user: sql("SELECT * FROM users WHERE id = ?", var(--id));
  @return json(if(--user: var(--user); else: { "error": "Not found" }));
}`

const examplePoints = [
  'Routing, queries, and responses live together.',
  'Helpers cover params, query, body, and headers.',
  'if() handles branching without new files or controllers.',
  'SQLite makes local dev and demos quick to spin up.',
]

export function Example() {
  return (
    <section id="example" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] tracking-[0.4em] text-[#616a74] uppercase">
            Example
          </span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.3rem)] font-[var(--font-display)] text-[#14161a]">
            A CRUD-ready stylesheet, readable at a glance.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4e5761]">
            Each block handles routing, data, and responses in one place.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#12181e] shadow-[0_26px_56px_rgba(16,19,22,0.28)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-[0.65rem] tracking-[0.3em] text-[#9eb4aa] uppercase">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f08c5e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4fc6ad]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c7f07f]" />
              <span className="ml-auto font-[var(--font-mono)]">crud.css</span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 text-[0.82rem] leading-relaxed text-[#d8efe6]">
              <code className="font-[var(--font-mono)]">{exampleSnippet}</code>
            </pre>
          </div>
          <div className="rounded-[26px] border border-black/10 bg-white/80 p-6 shadow-[0_22px_48px_rgba(16,19,22,0.14)]">
            <h3 className="text-lg font-semibold text-[#1f242a]">
              What you get
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#5a646f]">
              {examplePoints.map((point) => (
                <li key={point} className="relative pl-8">
                  <span className="absolute top-0 left-0 text-[0.7rem] tracking-[0.3em] text-[#1b9e8a] uppercase">
                    {'//'}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-[#1b9e8a]/30 bg-[#1b9e8a]/10 px-4 py-3 text-sm text-[#4f5c63]">
              Examples live in ./examples and run as-is.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
