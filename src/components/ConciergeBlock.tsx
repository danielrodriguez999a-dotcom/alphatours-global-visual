import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { EditorialImage } from "./EditorialImage";
import { imagery } from "@/lib/imagery";

export function ConciergeBlock() {
  return (
    <section className="relative py-section atmosphere-stone overflow-hidden">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeIn className="lg:col-span-6">
            <EditorialImage
              image={imagery.concierge}
              aspect="landscape"
              overlay="soft"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-6 space-y-6">
            <span className="eyebrow">The Concierge</span>
            <h2 className="text-display-lg text-emerald text-balance leading-[1.08]">
              A private conversation. A named human. A curated reply.
            </h2>
            <p className="prose-editorial">
              Every enquiry is answered by a named concierge. There is no
              ticket system, no chatbot, no automated reply. The first message
              you receive will reference a specific table, a specific
              neighborhood, or a specific evening — because curation begins in
              the first line.
            </p>
            <p className="prose-editorial">
              By WhatsApp, by email, or by introduction through your hotel.
              Pricing is presented as a curated proposal, not as a checkout.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <WhatsAppCTA />
              <a
                href="/concierge"
                className="text-emerald hover:text-gold uppercase tracking-widest text-sm transition-colors"
              >
                The Concierge Philosophy →
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
