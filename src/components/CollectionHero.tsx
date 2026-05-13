import Image from "next/image";
import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/cn";
import { imagery, imgSrc } from "@/lib/imagery";

type Props = {
  roman: string;
  name: string;
  essence: string;
  description: string;
  anchorLine: string;
  atmosphere?: "emerald" | "night" | "stone";
  conciergeMessage?: string;
  imageKey?: keyof typeof imagery;
};

export function CollectionHero({
  roman,
  name,
  essence,
  description,
  anchorLine,
  atmosphere = "night",
  conciergeMessage,
  imageKey = "tables",
}: Props) {
  const img = imagery[imageKey];
  return (
    <section
      className={cn(
        "relative pt-44 pb-section-sm overflow-hidden bg-emerald-deep text-ivory-light min-h-[78vh] flex items-end",
      )}
    >
      <Image
        src={imgSrc(img)}
        alt={img.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          atmosphere === "stone"
            ? "bg-gradient-to-b from-emerald-deep/60 via-emerald-deep/40 to-ivory-warm/95"
            : atmosphere === "emerald"
              ? "bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/50 to-emerald-deep/95"
              : "bg-gradient-to-b from-charcoal/80 via-emerald-deep/45 to-emerald-deep/95",
        )}
      />
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-20 right-0 h-[40rem] w-[40rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.3) 0%, transparent 60%)",
        }}
      />
      <Container className="relative pb-8 lg:pb-16">
        <FadeIn>
          <span className="eyebrow text-gold-soft">
            Collection {roman} · By introduction
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-6 text-display-xl font-light text-balance leading-[1.04] text-ivory-light">
            {name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed italic font-serif text-ivory/90">
            {essence}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ivory/80">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="mt-8 text-xs uppercase tracking-widest text-gold-soft">
            {anchorLine}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <WhatsAppCTA variant="ivory" message={conciergeMessage} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
