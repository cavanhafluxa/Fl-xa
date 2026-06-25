"use client";

import { useState } from "react";
import TextAnimate from "./magic/TextAnimate";

const PLANS = [
  {
    name: "Basic",
    price: "200",
    cents: "",
    desc: "Para sair das taxas e profissionalizar o delivery.",
    features: [
      "Fluxa Cardápio digital",
      "Fluxa Kitchen (1 ponto)",
      "Pedidos ilimitados",
      "Relatórios essenciais",
      "Suporte por WhatsApp",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "259",
    cents: ",90",
    desc: "Para escalar as vendas e fidelizar a base.",
    features: [
      "Tudo do Basic",
      "Database Marketing",
      "Campanhas e cupons",
      "Multi-operador na cozinha",
      "Suporte prioritário",
    ],
    featured: true,
  },
  {
    name: "Cook",
    price: "335",
    cents: ",90",
    desc: "Operação completa para o alto volume.",
    features: [
      "Tudo do Pro",
      "Multi-lojas / franquias",
      "Integrações avançadas",
      "Gestão de estoque",
      "Gerente de conta dedicado",
    ],
    featured: false,
  },
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" className="pf-circle" />
      <path d="M5 9.2l2.6 2.6L13 6.4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [sel, setSel] = useState(1);
  const p = PLANS[sel];

  return (
    <section className="section pricing on-cream" id="precos">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">Planos</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="Simples, como deve ser."
            highlight={["como", "deve", "ser."]}
          />
        </div>

        <div className="plan-switch" role="tablist">
          {PLANS.map((plan, i) => (
            <button
              key={plan.name}
              role="tab"
              aria-selected={i === sel}
              className={i === sel ? "on" : ""}
              onClick={() => setSel(i)}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className={`price-single price-card${p.featured ? " featured" : ""}`}>
          {p.featured && <div className="price-badge">Recomendado</div>}
          <div className="price-name">Fluxa Foods — {p.name}</div>
          <div className="price-amount">
            <span className="price-currency">R$</span>
            {p.price}
            <span className="price-cents">{p.cents}</span>
            <span className="price-period">/mês</span>
          </div>
          <p className="price-desc">{p.desc}</p>
          <ul className="price-features">
            {p.features.map((f) => (
              <li className="price-feature" key={f}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <a href="#contato" className="price-cta">
            Quero o {p.name}
          </a>
        </div>
      </div>
    </section>
  );
}
