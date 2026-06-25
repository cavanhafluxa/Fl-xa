"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Respect reduced-motion / no IntersectionObserver: leave everything visible.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("pre");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const vh = window.innerHeight;
    els.forEach((el) => {
      // Only arm the animation for blocks below the fold; visible ones stay shown
      // (no flash, and no dependency on JS to display above-the-fold content).
      if (el.getBoundingClientRect().top > vh * 0.85) {
        el.classList.add("pre");
        observer.observe(el);
      } else {
        el.classList.add("visible");
      }
    });

    // Safety net: nothing should ever stay hidden, even on a JS/observer hiccup.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        el.classList.remove("pre");
        el.classList.add("visible");
      });
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
