// Image references. Local /images/*.jpg are loaded from /public/images.
// Curated Unsplash fallbacks are used until production photography is delivered.
// Replace `local` with the same filenames in /public/images and the components
// will pick them up automatically.

const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

type ImageRef = { local: string; remote: string; alt: string };

export const imagery: Record<string, ImageRef> = {
  hero: {
    local: "/images/hero-bogota.jpg",
    remote: unsplash("photo-1518791841217-8f162f1e1131", 2400),
    alt: "Bogotá at dusk — Andean light over the Cordillera Oriental.",
  },
  tables: {
    local: "/images/tables-bogota.jpg",
    remote: unsplash("photo-1414235077428-338989a2e8c0"),
    alt: "A curated chef's table — Tables of Bogotá.",
  },
  cocktails: {
    local: "/images/cocktail-hours.jpg",
    remote: unsplash("photo-1470337458703-46ad1756a187"),
    alt: "A serious cocktail bar in Bogotá — The Cocktail Hours.",
  },
  coffee: {
    local: "/images/coffee-sessions.jpg",
    remote: unsplash("photo-1495474472287-4d71bcdd2085"),
    alt: "A specialty coffee cupping — The Coffee Sessions.",
  },
  executive: {
    local: "/images/executive-concierge.jpg",
    remote: unsplash("photo-1497366216548-37526070297c"),
    alt: "A private executive arrival — The Executive Concierge.",
  },
  hidden: {
    local: "/images/hidden-bogota.jpg",
    remote: unsplash("photo-1502920917128-1aa500764cbd"),
    alt: "A hidden neighborhood reading — Hidden Bogotá.",
  },
  escapes: {
    local: "/images/luxury-escapes.jpg",
    remote: unsplash("photo-1464822759023-fed622ff2c3b"),
    alt: "Andean light on the Savanna — Luxury Day Escapes.",
  },
  colombia: {
    local: "/images/curated-colombia.jpg",
    remote: unsplash("photo-1568454537842-d933259bb258"),
    alt: "Colonial light in Villa de Leyva — Curated Colombia.",
  },
  concierge: {
    local: "/images/concierge.jpg",
    remote: unsplash("photo-1521017432531-fbd92d768814"),
    alt: "A private concierge desk in Bogotá.",
  },
  notebook1: {
    local: "/images/notebook-1.jpg",
    remote: unsplash("photo-1551218808-94e220e084d2"),
    alt: "An editorial profile — chef at work.",
  },
  notebook2: {
    local: "/images/notebook-2.jpg",
    remote: unsplash("photo-1559339352-11d035aa65de"),
    alt: "A dining room at quiet light.",
  },
  notebook3: {
    local: "/images/notebook-3.jpg",
    remote: unsplash("photo-1467003909585-2f8a72700288"),
    alt: "A Bogotá neighborhood street.",
  },
  signatureA: {
    local: "/images/tables-bogota.jpg",
    remote: unsplash("photo-1543353071-873f17a7a088"),
    alt: "A tasting menu — Tables of Bogotá signature.",
  },
  signatureB: {
    local: "/images/cocktail-hours.jpg",
    remote: unsplash("photo-1574096079513-d8259312b785"),
    alt: "A reference cocktail bar.",
  },
  signatureC: {
    local: "/images/executive-concierge.jpg",
    remote: unsplash("photo-1551836022-d5d88e9218df"),
    alt: "An executive day in Bogotá.",
  },
  partners: {
    local: "/images/concierge.jpg",
    remote: unsplash("photo-1566073771259-6a8506099945"),
    alt: "A hotel concierge desk at quiet hour.",
  },
};

// Prefer remote (Unsplash) until /public/images is populated with real photography.
// Swap to `img.local` once production images are dropped in.
export const imgSrc = (img: ImageRef) => img.remote;
