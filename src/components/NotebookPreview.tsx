import Link from "next/link";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { EditorialImage } from "./EditorialImage";
import { notebookEntries } from "@/lib/notebook";
import { imagery } from "@/lib/imagery";

const notebookImages = [imagery.notebook1, imagery.notebook2, imagery.notebook3];

export function NotebookPreview() {
  return (
    <section className="relative py-section bg-ivory">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="The Notebook"
            title="An editorial gastronomy platform."
            description="Chef profiles, hidden kitchens, neighborhoods read editorially. The brand publishes the way a magazine publishes — with named subjects, named writers, and a regular cadence."
            className="max-w-2xl"
          />
          <Link
            href="/notebook"
            className="text-emerald hover:text-gold uppercase tracking-widest text-sm transition-colors"
          >
            Read the Notebook →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {notebookEntries.map((entry, i) => (
            <FadeIn key={entry.slug} delay={i * 0.05}>
              <article className="group bg-ivory-light border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial flex flex-col h-full overflow-hidden">
                <EditorialImage
                  image={notebookImages[i % notebookImages.length]}
                  aspect="landscape"
                  overlay="soft"
                  imageClassName="group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="p-8 lg:p-9 flex flex-col gap-4 flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow">{entry.kicker}</span>
                    <span className="text-xs text-muted italic">
                      {entry.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-emerald leading-tight tracking-tight text-balance">
                    {entry.title}
                  </h3>
                  <p className="text-charcoal/75 text-[0.95rem] leading-relaxed">
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
      </Container>
    </section>
  );
}
