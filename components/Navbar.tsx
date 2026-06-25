"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.fluxa.png" alt="Fluxa Foods" />
        </div>
        <div className="nav-links">
          <a href="#dor">O problema</a>
          <a href="#produto">O sistema</a>
          <a href="#comparativo">Comparativo</a>
          <a href="#case">Case Lanas</a>
        </div>
        <div className="nav-right">
          <a href="#contato" className="nav-cta">
            <span className="cta-full">Quero a tecnologia da Fluxa</span>
            <span className="cta-short">Agendar demo</span>
          </a>
          <button
            className={`nav-hamburger${drawerOpen ? " open" : ""}`}
            id="hamburger"
            aria-label="Menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? " open" : ""}`} id="navDrawer">
        <a href="#dor" onClick={closeDrawer}>
          O problema
        </a>
        <a href="#produto" onClick={closeDrawer}>
          O sistema
        </a>
        <a href="#comparativo" onClick={closeDrawer}>
          Comparativo
        </a>
        <a href="#case" onClick={closeDrawer}>
          Case Lanas
        </a>
        <a href="#contato" onClick={closeDrawer} className="nav-drawer-cta">
          Quero a tecnologia da Fluxa
        </a>
      </div>
    </>
  );
}
