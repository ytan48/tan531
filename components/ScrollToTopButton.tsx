"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollToTopButton.module.css";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.9);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    const root = document.scrollingElement ?? document.documentElement;
    const startY = root.scrollTop;
    if (startY <= 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.scrollTop = 0;
      return;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    const duration = Math.min(1200, Math.max(650, startY * 0.45));
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      root.scrollTop = Math.round(startY * (1 - eased));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      } else {
        root.scrollTop = 0;
        frameRef.current = null;
      }
    };

    frameRef.current = window.requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      Top
    </button>
  );
}
