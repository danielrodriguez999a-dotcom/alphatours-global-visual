import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { EditorialImage } from "./EditorialImage";
import { anchors } from "@/lib/anchors";
import { imagery } from "@/lib/imagery";

export function GastronomyAnchors() {
  return (
    <section className="relative py-section bg-ivory-light overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 items-end">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Houses"
              title="Anchored on names, not abstractions."
            />
          </div>
          <div className="lg:col-span-7">
            <p className="prose-editorial">
              Every collection is anchored on real chefs, real bars, real
              rooms. Specificity is the prestige carrier — and the difference
              between curation and a brochure.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <EditorialImage
              image={imagery.tables}
              aspect="portrait"
              overlay="soft"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </FadeIn>

          <div className="lg:col-span-7 border-t border-stone/50">
            {anchors.map((a, i) => (
              <FadeIn key={a.name} delay={i * 0.02}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 py-5 lg:py-6 border-b border-stone/40 items-baseline">
                  <div className="sm:col-span-4">
                    <h3 className="font-serif text-xl lg:text-2xl text-emerald tracking-tight">
                      {a.name}
                    </h3>
                  </div>
                  <div className="sm:col-span-5">
                    <p className="text-charcoal text-[0.95rem]">{a.role}</p>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-muted italic font-serif text-[0.9rem]">
                      {a.collection}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
