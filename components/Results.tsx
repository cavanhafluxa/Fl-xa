"use client";

import { useEffect, useRef, useState } from "react";

const METAS = [
  { val: "+25", unit: "", label: "pedidos extras por dia", sub: "meta · 60 dias" },
  { val: "+60", unit: "%", label: "clientes que retornam", sub: "meta · 120 dias" },
  { val: "−30", unit: "%", label: "tempo médio de preparo", sub: "meta · 45 dias" },
];

const THRESHOLDS = [0.12, 0.42, 0.72];

export default function Results() {
  const wrapRef = useRef<HTMLElement>(null);
  // Start with all revealed (fail-open: visible without JS); JS re-drives it.
  const [revealed, setRevealed] = useState(METAS.length);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(METAS.length);
      return;
    }
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? passed / total : 1;
      setRevealed(THRESHOLDS.filter((t) => p >= t).length);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="results-pin on-red" id="resultados" ref={wrapRef}>
      <div className="results-sticky">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow center">As metas que perseguimos</div>
            <h2 className="section-title">
              Mais pedidos. Mais margem. Clientes seus.
            </h2>
          </div>

          <div className="chat">
            {METAS.map((m, i) => (
              <div className={`chat-msg${i < revealed ? " in" : ""}`} key={m.label}>
                <span className="chat-avatar" aria-hidden="true">
                  {logoOk ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/fluxa-f.png"
                      alt="Fluxa"
                      onError={() => setLogoOk(false)}
                    />
                  ) : (
                    <span className="chat-avatar-f">F</span>
                  )}
                </span>
                <div className="chat-bubble">
                  <div className="chat-name">Fluxa Foods</div>
                  <div className="chat-stat">
                    <b>{m.val}</b>
                    <span className="u">{m.unit}</span> {m.label}
                  </div>
                  <div className="chat-sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
