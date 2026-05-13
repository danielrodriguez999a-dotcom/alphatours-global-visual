import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Container } from "@/components/Container";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn } from "@/components/FadeIn";
import { EditorialImage } from "@/components/EditorialImage";
import { partnerCategories, partnerReasons, hotelTracks } from "@/lib/partners";
import { operationalPillars } from "@/lib/operational";
import { site, defaultPartnerMessage } from "@/lib/site";
import { anchors } from "@/lib/anchors";
import { imagery, imgSrc } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "For Partners — A Private Hospitality Distribution Layer",
  description:
    "Hospitality Partners — boutique travel advisors, hotel concierges, executive assistants, luxury lifestyle curators, corporate hospitality coordinators, and private client managers. A discreet, relationship-led ground partner in Bogotá and Colombia.",
  alternates: { canonical: `${site.url}/partners` },
};

const sectionIds: Record<string, string> = {
  "boutique-travel-advisors": "advisors",
  "hotel-concierge-partners": "hotel",
  "executive-assistants": "executive",
  "luxury-lifestyle-curators": "curators",
  "corporate-hospitality-coordinators": "corporate",
  "private-client-managers": "private",
};

const partnerImageKeys = [
  "tables",
  "partners",
  "executive",
  "cocktails",
  "concierge",
  "hidden",
] as const;

const partnersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "For Partners — Alpha Tours",
  description:
    "Hospitality Partners — boutique travel advisors, hotel concierges, executive assistants, luxury lifestyle curators, corporate hospitality coordinators, and private client managers.",
  url: `${site.url}/partners`,
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  audience: partnerCategories.map((c) => ({
    "@type": "BusinessAudience",
    audienceType: c.title,
    description: c.essence,
  })),
};

// Named gastronomy + cocktail anchors are surfaced explicitly on the
// Partners page so distribution partners can see the working network.
const gastronomyAnchors = anchors.filter((a) =>
  a.collection.includes("Tables of Bogotá"),
);
const cocktailAnchors = anchors.filter((a) =>
  a.collection.includes("Cocktail"),
);

export default function PartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-section-sm overflow-hidden bg-emerald-deep text-ivory-light min-h-[80vh] flex items-end">
        <Image
          src={imgSrc(imagery.partners)}
          alt={imagery.partners.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/45 to-emerald-deep/95"
        />
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative pb-8 lg:pb-16">
          <FadeIn>
            <span className="eyebrow text-gold-soft">For Partners · By introduction</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-display-xl text-ivory-light font-light leading-[1.05] text-balance max-w-4xl">
              A private hospitality distribution layer
              <span className="block italic text-gold-soft font-light">
                for Bogotá and Colombia.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-ivory/85 text-lg leading-relaxed">
              A discreet, relationship-led ground partner for the hotels,
              advisors, executive offices, lifestyle curators, and affiliate
              programmes routing luxury travel into Colombia. Built on twelve
              years of operational infrastructure and a single named
              concierge per relationship.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <WhatsAppCTA
                variant="ivory"
                label="Open a partnership conversation"
                message={defaultPartnerMessage}
              />
              <a
                href="#categories"
                className="text-ivory/80 hover:text-gold-soft text-sm uppercase tracking-widest transition-colors border-b border-ivory/20 hover:border-gold-soft pb-1"
              >
                The partner categories ↓
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* THE QUIET ARGUMENT */}
      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <FadeIn className="lg:col-span-5">
              <span className="eyebrow">The Quiet Argument</span>
              <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
                Why route a client through Alpha rather than directly into local suppliers.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12">
              <p className="prose-editorial">
                Local suppliers can be booked directly. The question is whether
                an advisor, a hotel concierge, or an executive office wants to
                spend the working day translating, coordinating, recovering
                from a delayed transfer, or chasing a confirmed table that
                quietly fell off the books. We hold the entire arc on a single
                line — and the consistency you spend years building with your
                clients is reflected in the consistency we hold on the ground.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {partnerReasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.04}>
                <div className="group bg-ivory-light border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial p-8 h-full flex flex-col gap-3">
                  <span className="font-serif text-gold text-xl italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg lg:text-xl font-serif text-emerald leading-tight tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed mt-auto">
                    {r.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* COMMERCIAL ARCHITECTURE — discreet, hospitality-coded */}
      <section className="relative py-section atmosphere-emerald text-ivory-light overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <EditorialImage
                image={imagery.executive}
                aspect="landscape"
                overlay="night"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-gold-soft">Commercial Architecture</span>
              <h2 className="text-display-lg text-ivory-light text-balance leading-[1.08]">
                A discreet commission and affiliate structure.
              </h2>
              <p className="text-ivory/85 leading-relaxed max-w-prose">
                Each partnership is held in a private commercial structure —
                net rates for advisors, concierge referral fees for hotels,
                affiliate commissions for lifestyle curators, retainers for
                executive offices. Structures are written, NDA-friendly, and
                never broadcast. The objective is durable revenue continuity,
                not a marketplace.
              </p>
              <ul className="space-y-2 text-ivory/80 text-[0.95rem]">
                <li>· Net rates for boutique travel advisors</li>
                <li>· Concierge referral fees for hotel partners</li>
                <li>· Affiliate commissions for lifestyle curators</li>
                <li>· Retainer programmes for executive offices</li>
                <li>· Private commercial terms — confidentiality default</li>
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* PARTNER CATEGORIES */}
      <section id="categories" className="py-section bg-ivory-light">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Partner Categories</span>
            <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
              Six categories. One named coordinator per relationship.
            </h2>
            <div className="editorial-rule mt-6" />
            <p className="prose-editorial mt-6">
              Each partnership is onboarded by introduction and held by a
              single named coordinator. Commercial structures are private and
              arranged once the partnership is approved.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {partnerCategories.map((c, i) => {
              const imgKey = partnerImageKeys[i % partnerImageKeys.length];
              return (
                <FadeIn key={c.slug} delay={i * 0.04}>
                  <article
                    id={sectionIds[c.slug]}
                    className="group bg-ivory border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial overflow-hidden h-full flex flex-col"
                  >
                    <EditorialImage
                      image={imagery[imgKey]}
                      aspect="landscape"
                      overlay="soft"
                      imageClassName="group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="p-8 lg:p-10 flex flex-col gap-4 flex-1">
                      <div className="flex items-baseline justify-between">
                        <span className="font-serif text-gold text-2xl italic">
                          {c.roman}
                        </span>
                        <span className="eyebrow">By introduction</span>
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl text-emerald tracking-tight leading-tight text-balance">
                        {c.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-muted font-medium">
                        {c.audience}
                      </p>
                      <p className="text-charcoal/85 leading-relaxed text-[0.95rem] italic font-serif">
                        {c.essence}
                      </p>
                      <p className="text-charcoal/75 leading-relaxed text-[0.92rem]">
                        {c.detail}
                      </p>
                      <p className="text-muted text-xs uppercase tracking-widest pt-2 mt-auto">
                        Workflow · {c.workflow}
                      </p>
                      <div className="pt-3">
                        <WhatsAppCTA
                          variant="ghost"
                          label={c.cta}
                          message={c.message}
                        />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* GASTRONOMY + COCKTAIL ANCHORS */}
      <section className="py-section bg-ivory">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Working Anchors</span>
            <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
              The houses in the partner network.
            </h2>
            <div className="editorial-rule mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <FadeIn>
              <h3 className="font-serif text-2xl text-emerald mb-6">
                Gastronomy
              </h3>
              <div className="border-t border-stone/50">
                {gastronomyAnchors.map((a) => (
                  <div
                    key={a.name}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-4 border-b border-stone/40"
                  >
                    <p className="font-serif text-lg text-emerald">{a.name}</p>
                    <p className="text-charcoal/75 text-sm">{a.role}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="font-serif text-2xl text-emerald mb-6">
                Bars &amp; Cocktail Hours
              </h3>
              <div className="border-t border-stone/50">
                {cocktailAnchors.map((a) => (
                  <div
                    key={a.name}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-4 border-b border-stone/40"
                  >
                    <p className="font-serif text-lg text-emerald">{a.name}</p>
                    <p className="text-charcoal/75 text-sm">{a.role}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* HOTEL CONCIERGE NETWORK */}
      <section className="py-section bg-ivory-light overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14">
            <FadeIn className="lg:col-span-6">
              <EditorialImage
                image={imagery.partners}
                aspect="portrait"
                overlay="soft"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6 space-y-5">
              <span className="eyebrow">Hotel Concierge Network</span>
              <h2 className="text-display-lg text-emerald text-balance leading-[1.08]">
                A protocol with Bogotá&apos;s hotels.
              </h2>
              <p className="prose-editorial">
                Hotel concierge teams are partnered concierge-to-concierge. We
                hold a direct WhatsApp line, hotel pickup and drop-off on every
                confirmed experience, daily availability check-ins on request,
                and first-look access at the city&apos;s most considered tables.
                Discreet referral structures are available; the guest
                experience remains the priority.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {hotelTracks.map((track, i) => (
              <FadeIn key={track.name} delay={i * 0.04}>
                <article className="bg-ivory border border-stone/40 hover:border-gold/60 transition-colors duration-700 ease-editorial p-8 lg:p-10 h-full flex flex-col gap-4">
                  <span className="font-serif text-gold text-xl italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-serif text-emerald leading-tight tracking-tight">
                    {track.name}
                  </h3>
                  <p className="text-charcoal/80 text-[0.95rem] leading-relaxed">
                    {track.detail}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* OPERATIONAL INFRASTRUCTURE */}
      <section className="py-section atmosphere-emerald text-ivory-light relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow text-gold-soft">The Infrastructure Beneath</span>
            <h2 className="mt-4 text-display-lg text-ivory-light text-balance leading-[1.08]">
              Twelve years of operational depth in Colombia.
            </h2>
            <div className="editorial-rule mt-6" />
            <p className="text-ivory/80 leading-relaxed mt-6 max-w-prose">
              The operational platform is not theoretical. It is in place,
              today, moving visitors across the country. The hospitality layer
              you are partnering with is delivered on this engine — and the
              partner inherits the consistency of it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
            {operationalPillars.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.03}>
                <div className="bg-emerald-deep p-8 h-full flex flex-col gap-3 relative">
                  <div
                    className="grain absolute inset-0 pointer-events-none"
                    aria-hidden
                  />
                  <span className="relative font-serif text-gold-soft text-xl italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-lg font-serif text-ivory-light leading-tight tracking-tight">
                    {p.label}
                  </h3>
                  <p className="relative text-ivory/75 text-sm leading-relaxed mt-auto">
                    {p.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ONBOARDING */}
      <section className="py-section bg-ivory-light">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Onboarding</span>
            <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
              Four steps from introduction to live partnership.
            </h2>
            <div className="editorial-rule mt-6" />
          </div>

          <ol className="space-y-10 lg:space-y-12">
            {[
              {
                step: "1",
                title: "Private introduction",
                body: "By email, by WhatsApp, or by introduction through an existing partner. We confirm category, working geography, and the working language of the relationship.",
              },
              {
                step: "2",
                title: "Structured call",
                body: "A 30-minute call with the partnership lead. We map your client profile to the collections, walk through workflow, and name the coordinator.",
              },
              {
                step: "3",
                title: "Commercial structure",
                body: "Private commercial terms — net rates, retainers, concierge referral structures, affiliate commissions — are agreed in writing. Confidentiality is the default.",
              },
              {
                step: "4",
                title: "Live partnership",
                body: "Named coordinator activated. WhatsApp line opened. First bookings prioritized. Quarterly hospitality review on request.",
              },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.05}>
                <li className="grid lg:grid-cols-12 gap-6 items-start border-b border-stone/40 pb-10 last:border-b-0">
                  <span className="lg:col-span-1 font-serif text-4xl text-gold italic">
                    {s.step}.
                  </span>
                  <h3 className="lg:col-span-4 font-serif text-2xl lg:text-3xl text-emerald leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="lg:col-span-7 text-charcoal/80 leading-relaxed">
                    {s.body}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="py-section atmosphere-stone relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl space-y-8">
            <span className="eyebrow">A Private Inquiry</span>
            <h2 className="text-display-lg text-emerald text-balance leading-[1.08]">
              Open a partnership conversation with the concierge.
            </h2>
            <p className="prose-editorial">
              The fastest path is WhatsApp; the most considered path is an
              email to{" "}
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-emerald"
              >
                {site.email}
              </a>
              . Either route reaches a named coordinator. A first reply
              follows within one working day with a confidential next step.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <WhatsAppCTA
                label="Open a partnership conversation"
                message={defaultPartnerMessage}
              />
              <Link
                href="/contact"
                className="text-emerald hover:text-gold uppercase tracking-widest text-sm transition-colors"
              >
                Private inquiry form →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Script
        id="partners-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersJsonLd) }}
      />
    </>
  );
}
