import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={`mb-10 border-t border-[#d8cfc0] pt-5 dark:border-[#535a50] ${isCenter ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block font-mono text-[11px] font-medium uppercase tracking-wide text-[#8a3927] dark:text-[#df9b86] mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[#24211d] dark:text-[#fffaf2] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#5e584e] dark:text-[#c9c3b7] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
