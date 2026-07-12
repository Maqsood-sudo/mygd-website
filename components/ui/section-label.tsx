import type { ReactNode } from "react";

export function SectionLabel({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </div>
      <h2
        className={`font-display text-[clamp(1.8rem,3vw,2.6rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 max-w-[520px] text-[0.95rem] leading-[1.8] ${
            light ? "text-white/60" : "text-[#555]"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
