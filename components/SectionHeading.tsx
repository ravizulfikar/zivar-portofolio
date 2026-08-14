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
    <Reveal className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2.5">
          {tag}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
