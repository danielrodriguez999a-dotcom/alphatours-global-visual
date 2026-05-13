import Link from "next/link";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { EditorialImage } from "./EditorialImage";
import { collections } from "@/lib/collections";
import { imagery } from "@/lib/imagery";

const slugToImage: Record<string, keyof typeof imagery> = {
  "tables-of-bogota": "tables",
  "cocktail-hours": "cocktails",
  "coffee-sessions": "coffee",
  "executive-concierge": "executive",
  "hidden-bogota": "hidden",
  "luxury-day-escapes": "escapes",
  "curated-colombia": "colombia",
};

export function CollectionsGrid() {
  return (
    <section id="collections" className="relative py-section bg-ivory">
      <Container>
        <div className="max-w-2xl mb-16">
          <SectionHeading
            eyebrow="The Architecture"
            title="Seven Collections"
            description="The world organized as seven editorial territories — gastronomy at the center, hospitality and concierge orchestration as the connective tissue."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {collections.map((c, i) => {
            const img = imagery[slugToImage[c.slug]];
            const inner = (
              <article className="group relative h-full flex flex-col bg-ivory-light border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial overflow-hidden">
                <div className="relative">
                  <EditorialImage
                    image={img}
                    aspect="landscape"
                    overlay="emerald"
                    imageClassName="group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <span className="font-serif text-gold-soft text-xl italic">
                      {c.roman}
                    </span>
                    <h3 className="mt-2 text-2xl lg:text-[1.7rem] font-serif text-ivory-light leading-tight tracking-tight text-balance">
                      {c.name}
                    </h3>
                  </div>
                </div>
                <div className="p-7 lg:p-8 flex flex-col gap-4 flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow">
                      {c.available ? "Open" : "Phase B"}
                    </span>
                    {c.available && (
                      <span className="text-xs uppercase tracking-widest text-emerald group-hover:text-gold transition-colors duration-500">
                        Read →
                      </span>
                    )}
                  </div>
                  <p className="text-charcoal/80 text-[0.95rem] leading-relaxed">
                    {c.essence}
                  </p>
                  <p className="mt-auto text-muted italic font-serif text-xs leading-snug">
                    {c.anchorLine.split(" · ").slice(0, 4).join(" · ")}
                  </p>
                </div>
              </article>
            );
            return (
              <FadeIn key={c.slug} delay={i * 0.04} className="h-full">
                {c.available ? (
                  <Link
                    href={`/collections/${c.slug}`}
                    className="block h-full"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
