import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { EditorialImage } from "@/components/EditorialImage";
import { notebookEntries } from "@/lib/notebook";
import { site } from "@/lib/site";
import { imagery, imgSrc } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "The Notebook — Editorial Gastronomy and Hospitality",
  description:
    "Chef profiles, hidden kitchens, neighborhoods read editorially. Bogotá's gastronomy, written with the care of a magazine.",
  alternates: { canonical: `${site.url}/notebook` },
};

const notebookImages = [imagery.notebook1, imagery.notebook2, imagery.notebook3];

export default function NotebookPage() {
  return (
    <>
      <section className="relative pt-44 pb-section-sm overflow-hidden bg-emerald-deep text-ivory-light min-h-[55vh] flex items-end">
        <Image
          src={imgSrc(imagery.notebook1)}
          alt={imagery.notebook1.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/55 to-emerald-deep/95"
        />
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative pb-8 lg:pb-16">
          <SectionHeading
            eyebrow="The Notebook"
            title="Bogotá's gastronomy, written editorially."
            description="An editorial platform of chef profiles, hidden kitchens, ingredient stories, and neighborhood readings. Published the way a magazine publishes — with named subjects, named writers, and a regular cadence."
            light
          />
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
            {notebookEntries.map((entry, i) => (
              <FadeIn key={entry.slug} delay={i * 0.05}>
                <article className="group bg-ivory-light border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial overflow-hidden h-full flex flex-col">
                  <EditorialImage
                    image={notebookImages[i % notebookImages.length]}
                    aspect="landscape"
                    overlay="soft"
                    imageClassName="group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="eyebrow">{entry.kicker}</span>
                      <span className="text-xs text-muted italic">
                        {entry.readingMinutes} min
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif text-emerald leading-tight tracking-tight text-balance">
                      {entry.title}
                    </h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      {entry.excerpt}
                    </p>
                    <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-muted">
                      {entry.category}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <p className="mt-20 text-center text-muted italic font-serif text-lg">
            New entries are published twice a month.
          </p>
        </Container>
      </section>
    </>
  );
}
