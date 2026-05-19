export default function LVLLuxuryLanding() {
  return (
    <div className="min-h-screen bg-[#061411] text-[#C5A46D] overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-8 py-24 border-b border-[#3A2E1B]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(197,164,109,0.15),transparent_50%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#3A2E1B] px-4 py-2 rounded-full text-xs tracking-[0.3em] uppercase">
              LVL • Private Hospitality
            </div>

            <h1 className="text-7xl md:text-8xl font-serif tracking-[0.18em] leading-none mb-8">
              LVL
            </h1>

            <div className="w-24 h-px bg-[#C5A46D] mb-8" />

            <p className="uppercase tracking-[0.35em] text-sm mb-6 text-[#B89458]">
              Latam Hospitality & Curated Experiences
            </p>

            <p className="text-lg leading-8 text-[#D9CCB5] max-w-xl mb-12">
              Invitation-only hospitality experiences across Latin America.
              Curated journeys, private access, cinematic destinations and
              operational excellence designed for discerning travelers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#C5A46D] text-[#061411] tracking-[0.2em] uppercase text-sm rounded-sm hover:opacity-90 transition">
                Request Access
              </button>

              <button className="px-8 py-4 border border-[#3A2E1B] tracking-[0.2em] uppercase text-sm rounded-sm hover:bg-[#0C1F1A] transition">
                Private Concierge
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#3A2E1B] bg-[#0B1D19] shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="Luxury hospitality"
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061411] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-32 border-b border-[#3A2E1B]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Private Experiences',
              text: 'Tailored hospitality journeys designed around discretion and access.',
            },
            {
              title: 'Curated Hospitality',
              text: 'Luxury stays, concierge logistics and immersive cultural experiences.',
            },
            {
              title: 'Exclusive Access',
              text: 'Invitation-only destinations, partnerships and private hospitality moments.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#3A2E1B] bg-[#081714] p-10 rounded-[1.5rem]"
            >
              <div className="w-12 h-px bg-[#C5A46D] mb-8" />

              <h3 className="uppercase tracking-[0.25em] text-sm mb-6">
                {item.title}
              </h3>

              <p className="text-[#D9CCB5] leading-7 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-xs mb-8 text-[#B89458]">
            Quiet Luxury • Curated Hospitality • LATAM
          </p>

          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-10">
            More than travel.
            <br />
            A private hospitality ecosystem.
          </h2>

          <button className="px-10 py-5 bg-[#C5A46D] text-[#061411] uppercase tracking-[0.25em] text-sm rounded-sm hover:opacity-90 transition">
            Begin Inquiry
          </button>
        </div>
      </section>
    </div>
  )
}
