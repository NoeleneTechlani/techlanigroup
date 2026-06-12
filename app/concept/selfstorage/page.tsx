export default function SelfStorageConcept() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
          Techlani Digital
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Self Storage Digital Assistant
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-300">
          An independent Techlani Digital concept showing how a practical digital
          system could help self-storage customers choose the right unit, reduce
          uncertainty, and generate better qualified enquiries.
        </p>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            "Smart Storage Calculator",
            "Customer FAQ Assistant",
            "Lead Qualification",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h2 className="font-semibold">{item}</h2>
            </div>
          ))}
        </div>

        <a
          href="https://storage-unit-recommendation-page.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-600"
        >
          Launch Interactive Demo
        </a>

        <p className="mt-10 text-sm text-zinc-500">
          This is an independent concept demonstration created by Techlani
          Digital. It is not affiliated with or endorsed by Self Storage
          Paraparaumu.
        </p>
      </section>
    </main>
  )
}
