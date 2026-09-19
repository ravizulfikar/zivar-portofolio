import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = "left",
  number,
}: {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
  number?: string;
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={`mb-12 pt-4 ${isCenter ? "text-center" : ""}`}>
      <div className={`flex items-center gap-2.5 mb-3.5 ${isCenter ? "justify-center" : ""}`}>
        {number && (
          <span className="inline-flex items-center border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
            {number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {tag}
          </span>
        )}
      </div>

      <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
