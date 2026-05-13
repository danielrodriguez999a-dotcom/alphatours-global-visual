import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HospitalityAuthority } from "@/components/HospitalityAuthority";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { SignatureExperiences } from "@/components/SignatureExperiences";
import { OperationalCredibility } from "@/components/OperationalCredibility";
import { GastronomyAnchors } from "@/components/GastronomyAnchors";
import { HotelPartnerships } from "@/components/HotelPartnerships";
import { ConciergeBlock } from "@/components/ConciergeBlock";
import { PartnerNetworkPreview } from "@/components/PartnerNetworkPreview";
import { NotebookPreview } from "@/components/NotebookPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Luxury Hospitality in Bogotá & Colombia`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — Luxury Hospitality in Bogotá & Colombia`,
    description: site.description,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HospitalityAuthority />
      <CollectionsGrid />
      <SignatureExperiences />
      <OperationalCredibility />
      <GastronomyAnchors />
      <HotelPartnerships />
      <PartnerNetworkPreview />
      <ConciergeBlock />
      <NotebookPreview />
    </>
  );
}
