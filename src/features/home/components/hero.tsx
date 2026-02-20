const heroSnippet = `@server {
  port: env(PORT, 3000);
  database: env(DATABASE, ./app.db);
}

[path="/users"]:GET {
  @return json(sql("SELECT * FROM users"));
}

[path="/users"]:POST {
  --name: body(name);
  --email: body(email);
  @return json(sql("INSERT INTO users (name, email) VALUES (?, ?)", var(--name), var(--email)));
}`

const responseSnippet = `[
  { "id": 1, "name": "Ava" },
  { "id": 2, "name": "Rio" }
]`

const tags = [
  'Selectors for routes',
  'SQLite first',
  'Request helpers',
  'Conditional responses',
]

export function Hero() {
  return (
    <section id="overview" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 pt-6 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-4 text-[0.7rem] tracking-[0.4em] text-[#535b66] uppercase">
              <span className="h-px w-10 bg-[#d7cabb]" />
              PostCSS backend framework
            </span>
            <h1 className="text-[clamp(2.7rem,4.6vw,4.8rem)] leading-[1.05] font-[var(--font-display)] text-[#14161a]">
              butcss turns{' '}
              <span className="rounded-[18px] bg-[#d96a2f]/15 px-3 py-1 text-[#16181c]">
                CSS into servers
              </span>
            </h1>
            <p className="max-w-xl text-lg text-[#48515c]">
              Write routes, SQL, and responses in CSS syntax. Compile to Express
              with SQLite built in and run in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#quickstart"
                className="rounded-full bg-[#16181c] px-6 py-3 text-xs font-semibold tracking-[0.25em] text-[#f7f1e9] uppercase shadow-[0_18px_30px_rgba(16,19,22,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_40px_rgba(16,19,22,0.26)]"
              >
                Run the demo
              </a>
              <a
                href="#features"
                className="rounded-full border border-[#d7cabb] bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-[#2a2f35] uppercase transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_28px_rgba(16,19,22,0.14)]"
              >
                Explore features
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-[#d7cabb] bg-white/70 px-4 py-3 text-[0.7rem] tracking-[0.24em] text-[#6a737c] uppercase">
              <span className="font-semibold text-[#1d2126]">Install</span>
              <code className="rounded-lg bg-[#16181c]/5 px-2 py-1 text-[0.7rem] font-[var(--font-mono)] tracking-[0.12em] text-[#1d2126]">
                pnpm install
              </code>
              <code className="rounded-lg bg-[#16181c]/5 px-2 py-1 text-[0.7rem] font-[var(--font-mono)] tracking-[0.12em] text-[#1d2126]">
                pnpm build
              </code>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d7cabb] bg-white/60 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-[#505861] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#12181e] shadow-[0_28px_60px_rgba(16,19,22,0.3)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-[0.65rem] tracking-[0.3em] text-[#9eb4aa] uppercase">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f08c5e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4fc6ad]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c7f07f]" />
                <span className="ml-auto font-[var(--font-mono)]">
                  server.css
                </span>
              </div>
              <pre className="overflow-x-auto px-6 py-6 text-[0.82rem] leading-relaxed text-[#d8efe6]">
                <code className="font-[var(--font-mono)]">{heroSnippet}</code>
              </pre>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white/80 p-6 shadow-[0_24px_50px_rgba(16,19,22,0.14)]">
              <div className="text-[0.65rem] tracking-[0.3em] text-[#6b737c] uppercase">
                Request to response
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
                <div>
                  <span className="inline-flex rounded-full bg-[#1b9e8a]/15 px-3 py-1 text-[0.65rem] tracking-[0.2em] text-[#1b1f25] uppercase">
                    GET /users
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[#55606b]">
                    CSS selectors map to Express routes with SQL baked into the
                    same block.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#0f1419] p-4 text-[#e0f2ec]">
                  <span className="inline-flex rounded-full bg-[#c7f07f]/20 px-2 py-1 text-[0.6rem] tracking-[0.2em] text-[#c7f07f] uppercase">
                    200 OK
                  </span>
                  <pre className="mt-3 text-[0.75rem] leading-relaxed">
                    <code className="font-[var(--font-mono)]">
                      {responseSnippet}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
