import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { EditorialImage } from "@/components/EditorialImage";
import { collections } from "@/lib/collections";
import { site } from "@/lib/site";
import { imagery, imgSrc } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "The Seven Collections",
  description:
    "Seven editorial collections — Tables of Bogotá, The Cocktail Hours, The Coffee Sessions, The Executive Concierge, Hidden Bogotá, Luxury Day Escapes, Curated Colombia.",
  alternates: { canonical: `${site.url}/collections` },
};

const slugToImage: Record<string, keyof typeof imagery> = {
  "tables-of-bogota": "tables",
  "cocktail-hours": "cocktails",
  "coffee-sessions": "coffee",
  "executive-concierge": "executive",
  "hidden-bogota": "hidden",
  "luxury-day-escapes": "escapes",
  "curated-colombia": "colombia",
};

export default function CollectionsIndexPage() {
  return (
    <>
      <section className="relative pt-44 pb-section-sm overflow-hidden bg-emerald-deep text-ivory-light min-h-[60vh] flex items-end">
        <Image
          src={imgSrc(imagery.hero)}
          alt={imagery.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/55 to-emerald-deep/95"
        />
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative pb-8 lg:pb-16">
          <SectionHeading
            eyebrow="The Architecture"
            title="The Seven Collections"
            description="Seven editorial territories that organize the city, the country, and the work of the concierge. Gastronomy at the center; hospitality and orchestration as the connective tissue."
            light
          />
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {collections.map((c, i) => {
              const inner = (
                <article className="group h-full bg-ivory-light border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial overflow-hidden flex flex-col">
                  <div className="relative">
                    <EditorialImage
                      image={imagery[slugToImage[c.slug]]}
                      aspect="landscape"
                      overlay="emerald"
                      imageClassName="group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                      <span className="font-serif text-gold-soft text-xl italic">
                        {c.roman}
                      </span>
                      <h3 className="mt-2 text-2xl lg:text-3xl font-serif text-ivory-light leading-tight tracking-tight">
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
                    <p className="text-charcoal/80 leading-relaxed text-[0.95rem]">
                      {c.essence}
                    </p>
                    <p className="mt-auto text-muted italic font-serif text-xs leading-snug pt-2">
                      {c.anchorLine}
                    </p>
                  </div>
                </article>
              );
              return (
                <FadeIn key={c.slug} delay={i * 0.04} className="h-full">
                  {c.available ? (
                    <Link href={`/collections/${c.slug}`} className="block h-full">
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
    </>
  );
}
