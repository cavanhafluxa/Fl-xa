import Iphone from "./magic/Iphone";
import TextAnimate from "./magic/TextAnimate";

const HIGHLIGHTS = [
  { name: "Combo Todo Dia", rating: "4,9", price: "R$ 39,90", emoji: "🍔" },
  { name: "Smash Duplo Bacon", rating: "4,8", price: "R$ 32,00", emoji: "🍔" },
];

function CardapioMock() {
  return (
    <div className="cardapio">
      {/* banner */}
      <div className="cardapio-banner">
        <span className="cardapio-back" aria-hidden="true">
          ‹
        </span>
      </div>

      {/* restaurant header card */}
      <div className="cardapio-head">
        <div className="cardapio-logo" aria-hidden="true">
          LANA’S
        </div>
        <div className="cardapio-head-row">
          <div>
            <div className="cardapio-name">Lanas Burguer</div>
            <span className="cardapio-status">Aberto agora</span>
          </div>
          <span className="cardapio-heart" aria-hidden="true">
            ♥
          </span>
        </div>
        <div className="cardapio-meta">
          <span>🛵 40 min · R$ 10</span>
        </div>
        <div className="cardapio-meta">
          <span className="cardapio-star">★ 4,8</span>
          <span className="cardapio-dim">(148 avaliações)</span>
        </div>
        <div className="cardapio-meta cardapio-dim">
          📍 Rua Rosa Laurentino Lana, 100 — Santa Terezinha
        </div>
      </div>

      {/* search */}
      <div className="cardapio-search">🔍 Buscar no cardápio…</div>

      {/* category chips */}
      <div className="cardapio-chips">
        {[
          { i: "🏷️", l: "Promoções" },
          { i: "📋", l: "Pedidos" },
          { i: "🍕", l: "Pizzas" },
          { i: "▦", l: "Ver tudo" },
        ].map((c) => (
          <div className="cardapio-chip" key={c.l}>
            <span className="cardapio-chip-ico">{c.i}</span>
            <span>{c.l}</span>
          </div>
        ))}
      </div>

      {/* em alta */}
      <div className="cardapio-section-title">Em alta</div>
      <div className="cardapio-products">
        {HIGHLIGHTS.map((p) => (
          <div className="cardapio-product" key={p.name}>
            <div className="cardapio-product-img" aria-hidden="true">
              <span>{p.emoji}</span>
              <span className="cardapio-product-rate">★ {p.rating}</span>
            </div>
            <div className="cardapio-product-name">{p.name}</div>
            <div className="cardapio-product-price">{p.price}</div>
          </div>
        ))}
      </div>

      {/* bottom tab bar */}
      <div className="cardapio-tabbar">
        {[
          { i: "⌂", l: "Início", on: true },
          { i: "🏷️", l: "Promoções" },
          { i: "🔍", l: "Busca" },
          { i: "🛍️", l: "Sacola" },
          { i: "👤", l: "Perfil" },
        ].map((t) => (
          <div className={`cardapio-tab${t.on ? " on" : ""}`} key={t.l}>
            <span className="cardapio-tab-ico">{t.i}</span>
            <span>{t.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CardapioShowcase() {
  return (
    <section className="section cardapio-showcase on-cream" id="cardapio">
      <div className="container">
        <div className="cardapio-inner">
          <div className="cardapio-copy">
            <div className="eyebrow reveal">Fluxa Cardápio</div>
            <TextAnimate
              as="h2"
              className="section-title"
              text="O seu cardápio digital que vende sozinho."
              highlight={["vende", "sozinho."]}
            />
            <p className="section-sub reveal reveal-delay-2">
              Fotos que dão fome, combos no lugar certo e checkout sem fricção.
              O mesmo cardápio que sobe o ticket do Lanas.
            </p>
            <ul className="cardapio-bullets reveal reveal-delay-3">
              <li>Combos e adicionais que aumentam o ticket</li>
              <li>Busca, categorias e itens “Em alta”</li>
              <li>Pedido direto — sem taxa de marketplace</li>
            </ul>
          </div>
          <div className="cardapio-phone reveal reveal-delay-2">
            <Iphone>
              <CardapioMock />
            </Iphone>
          </div>
          <div className="cardapio-cta-wrap">
            <a href="#contato" className="btn-primary">
              Quero meu cardápio Fluxa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
