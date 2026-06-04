import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}
