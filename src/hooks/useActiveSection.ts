"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScrollTop, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) {
          setActiveSection("");
          return;
        }

        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        const mostVisible = [...visibilityMap.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])[0];

        if (mostVisible) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-96px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
