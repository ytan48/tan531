"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./FadeInSection.module.css";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  id?: string;
};

export function FadeInSection({
  children,
  className,
  delayMs = 0,
  id,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.fadeIn, isVisible ? styles.visible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      id={id}
      ref={ref}
      className={classes}
      style={{ "--fade-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
