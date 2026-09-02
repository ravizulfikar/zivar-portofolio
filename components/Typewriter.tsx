"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 2000,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0] ?? "");
      return;
    }

    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, reduceMotion]);

  return (
    <span className="inline-flex items-baseline font-display">
      <span>{text}</span>
      {!reduceMotion && (
        <span aria-hidden className="ml-1 inline-block h-[0.9em] w-[2.5px] translate-y-[2px] animate-pulse bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
      )}
    </span>
  );
}
