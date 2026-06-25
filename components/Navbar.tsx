"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
