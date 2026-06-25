"use client";

import { useEffect, useRef, useState } from "react";
import TextAnimate from "./magic/TextAnimate";

const NODES = [
  {
    title: "Até 30% de taxa por pedido",
    text: "A cada R$ 100 vendidos, R$ 30 vão pra plataforma.",
  },
  {
    title: "Eles ficam com seus clientes",
    text: "Você nunca sabe quem comprou — nem traz de volta.",
  },
  {
    title: "Caos na cozinha nos picos",
    text: "Pedido atrasado, erro de comanda, cliente insatisfeito.",
  },
];

export default function Problem() {
  const routeRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<boolean[]>(
    // fail-open: visible without JS
    () => new Array(NODES.length + 1).fill(true)
  );
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const root = routeRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".route-node"));
    setShown(new Array(nodes.length).fill(false));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setShown((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.55, rootMargin: "0px 0px -10% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    const fb = window.setTimeout(
      () => setShown(new Array(nodes.length).fill(true)),
      2200
    );
    return () => {
      io.disconnect();
      window.clearTimeout(fb);
    };
  }, []);

  return (
    <section className="section problem on-cream" id="dor">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">O inimigo</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="O caminho do dinheiro que escapa."
            highlight={["escapa."]}
          />
        </div>

        <div className="route" ref={routeRef}>
          {NODES.map((n, i) => (
            <div
              className={`route-node${shown[i] ? " in" : ""}`}
              data-idx={i}
              key={n.title}
            >
              <div className="route-icon">
                <span className="route-pulse" aria-hidden="true" />
                <span className="route-bang">!</span>
              </div>
              <div className="route-card">
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            </div>
          ))}

          {/* destination: Fluxa */}
          <div
            className={`route-node route-end${shown[NODES.length] ? " in" : ""}`}
            data-idx={NODES.length}
          >
            <div className="route-icon route-icon-fluxa">
              {logoOk ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/fluxa-f.png" alt="Fluxa" onError={() => setLogoOk(false)} />
              ) : (
                <span className="route-f">F</span>
              )}
            </div>
            <div className="route-card route-card-fluxa">
              <h3>A Fluxa devolve o controle</h3>
              <p>Sua base, sua margem e sua operação — de volta pra você.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
