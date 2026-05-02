"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches scroll-triggered fade-up animation to children matching the selector.
 * Adds `.visible` class when element enters the viewport.
 *
 * Usage:
 *   const ref = useFadeIn();
 *   <section ref={ref}>
 *     <div className="fade-up" style={{ animationDelay: "0ms" }}>...</div>
 *   </section>
 */
export function useFadeIn(selector = ".fade-up") {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(selector));
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);

  return ref;
}
