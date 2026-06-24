"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          <img src="/logo.fluxa.png" alt="Fluxa" />
        </div>
        <div className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#solucao">O sistema</a>
          <a href="#origem">Nossa história</a>
          <a href="#resultados">Resultados</a>
        </div>
        <div className="nav-right">
          <a href="#contato" className="nav-cta">
            <span className="cta-full">Quero gerar pedidos todos os dias</span>
            <span className="cta-short">Diagnóstico grátis</span>
          </a>
          <button
            className={`nav-hamburger${drawerOpen ? " open" : ""}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? " open" : ""}`} id="navDrawer">
        <a href="#problema" onClick={closeDrawer}>
          Problema
        </a>
        <a href="#solucao" onClick={closeDrawer}>
          O sistema
        </a>
        <a href="#origem" onClick={closeDrawer}>
          Nossa história
        </a>
        <a href="#resultados" onClick={closeDrawer}>
          Resultados
        </a>
        <a href="#contato" onClick={closeDrawer} className="nav-drawer-cta">
          Quero gerar pedidos todos os dias
        </a>
      </div>
    </>
  );
}
