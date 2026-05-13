import Image from "next/image";
import { cn } from "@/lib/cn";
import { imgSrc } from "@/lib/imagery";

type ImageRef = { local: string; remote: string; alt: string };

type Props = {
  image: ImageRef;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  aspect?: "square" | "portrait" | "landscape" | "wide" | "cinema";
  overlay?: "none" | "soft" | "emerald" | "night";
  sizes?: string;
  rounded?: boolean;
};

const aspectClasses: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  cinema: "aspect-[21/9]",
};

const overlayClasses: Record<NonNullable<Props["overlay"]>, string> = {
  none: "",
  soft: "after:absolute after:inset-0 after:bg-gradient-to-t after:from-charcoal/40 after:via-transparent after:to-transparent",
  emerald:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-emerald-deep/85 after:via-emerald-deep/30 after:to-transparent",
  night:
    "after:absolute after:inset-0 after:bg-gradient-to-b after:from-charcoal/60 after:via-charcoal/20 after:to-emerald-deep/85",
};

export function EditorialImage({
  image,
  className,
  imageClassName,
  priority,
  aspect = "landscape",
  overlay = "soft",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  rounded = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden isolate bg-emerald-deep",
        aspectClasses[aspect],
        overlayClasses[overlay],
        rounded && "rounded-sm",
        className,
      )}
    >
      <Image
        src={imgSrc(image)}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-[1400ms] ease-editorial",
          imageClassName,
        )}
      />
    </div>
  );
}
