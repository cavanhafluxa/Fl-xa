import KitchenMock from "./KitchenMock";

const LANAS_ORDERS = [
  { name: "Balcão — Pedido #218", badge: "new" as const, badgeLabel: "Novo", items: "2× Lanas Duplo · 1× Onion Rings", time: "agora mesmo", price: "R$ 74,00" },
  { name: "Delivery — Pedido #217", badge: "prep" as const, badgeLabel: "Em preparo", items: "1× Lanas Salada · 1× Milk Shake", time: "há 5 min", price: "R$ 49,90" },
  { name: "Mesa 6 — Pedido #215", badge: "done" as const, badgeLabel: "Pronto", items: "3× Smash Bacon · 3× Batata", time: "há 18 min", price: "R$ 132,00" },
];

export default function Case() {
  return (
    <section className="section case on-ink" id="case">
      <div className="container">
        <div className="case-inner">
          <div className="case-left">
            <div className="eyebrow reveal">Prova social</div>
            <h2 className="section-title reveal reveal-delay-1">
              Por que o Lanas Burguer <em>mudou para a Fluxa?</em>
            </h2>
            <blockquote className="case-quote reveal reveal-delay-2">
              <span className="q-mark">“</span>Saímos dos sistemas antigos e da
              dependência do iFood. A cozinha parou de travar, o ticket médio
              subiu e, pela primeira vez, os dados dos clientes são nossos.
              <span className="q-mark">”</span>
            </blockquote>
            <div className="case-meta reveal reveal-delay-3">
              <div className="case-avatar">L</div>
              <div>
                <div className="case-meta-name">Lanas Burguer</div>
                <div className="case-meta-role">Cliente Fluxa Foods</div>
              </div>
            </div>
          </div>

          <div className="case-media reveal reveal-delay-2">
            <span className="case-badge">
              <span className="dot" />
              Migração real · operação ao vivo
            </span>
            <KitchenMock title="Lanas Burguer · Fluxa Kitchen" orders={LANAS_ORDERS} />
          </div>
        </div>
      </div>
    </section>
  );
}
