import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { EditorialImage } from "./EditorialImage";
import { partnerCategories } from "@/lib/partners";
import { defaultPartnerMessage } from "@/lib/site";
import { imagery } from "@/lib/imagery";

export function PartnerNetworkPreview() {
  return (
    <section className="relative py-section atmosphere-emerald text-ivory-light overflow-hidden">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-end">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-gold-soft">For Partners</span>
            <h2 className="mt-4 text-display-lg text-ivory-light text-balance leading-[1.08]">
              A private hospitality distribution layer for Colombia.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 space-y-5">
            <p className="text-ivory/85 leading-relaxed text-[1.05rem] max-w-xl">
              A discreet, relationship-led network of hotels, advisors,
              executive offices, lifestyle curators, and affiliate partners
              who route their clients through a single concierge into Bogotá
              and Colombia. Onboarded by introduction. Commercial structures
              are arranged once the partnership is approved.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {partnerCategories.map((t, i) => {
            const imgKey = (
              [
                "tables",
                "partners",
                "executive",
                "cocktails",
                "concierge",
                "hidden",
              ] as const
            )[i % 6];
            return (
              <FadeIn key={t.slug} delay={i * 0.04}>
                <article className="group relative bg-emerald-deep border border-ivory/15 hover:border-gold/50 transition-colors duration-700 ease-editorial flex flex-col h-full overflow-hidden">
                  <EditorialImage
                    image={imagery[imgKey]}
                    aspect="landscape"
                    overlay="night"
                    imageClassName="group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="p-7 lg:p-8 flex flex-col gap-3 flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-gold-soft text-xl italic">
                        {t.roman}
                      </span>
                      <span className="eyebrow text-gold-soft">By introduction</span>
                    </div>
                    <h3 className="text-xl font-serif text-ivory-light leading-tight tracking-tight">
                      {t.title}
                    </h3>
                    <p className="text-ivory/75 text-sm leading-relaxed mt-auto">
                      {t.essence}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-6">
            <WhatsAppCTA
              variant="ivory"
              label="Open a partnership conversation"
              message={defaultPartnerMessage}
            />
            <Link
              href="/partners"
              className="text-gold-soft hover:text-ivory-light text-sm uppercase tracking-widest transition-colors border-b border-gold-soft/40 hover:border-ivory-light pb-1"
            >
              The Partner Network →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
