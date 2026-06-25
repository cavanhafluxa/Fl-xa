"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  // "scrolled" = past the dark hero. Over the hero the nav stays transparent
  // (dark), so there's no sudden white band near the status bar; once a light
  // section reaches the top it turns into the seamless cream bar.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const threshold = hero ? hero.offsetHeight - 64 : window.innerHeight - 64;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.fluxa.png" alt="Fluxa Foods" />
      </div>
      <div className="nav-right">
        <a href="#contato" className="nav-cta">
          Agendar demo
        </a>
      </div>
    </nav>
  );
}
