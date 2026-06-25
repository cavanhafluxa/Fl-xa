type Order = {
  name: string;
  badge: "new" | "prep" | "done";
  badgeLabel: string;
  items: string;
  time: string;
  price: string;
};

const DEFAULT_ORDERS: Order[] = [
  { name: "Mesa 4 — João M.", badge: "new", badgeLabel: "Novo", items: "2× X-Bacon · 1× Batata G · 2× Refri", time: "agora", price: "R$ 68,00" },
  { name: "Delivery — Ana P.", badge: "prep", badgeLabel: "Preparo", items: "1× Frango Grelhado · 1× Suco", time: "há 7 min", price: "R$ 42,50" },
  { name: "Mesa 1 — Carlos R.", badge: "done", badgeLabel: "Pronto", items: "1× Pizza Média · 2× Long Neck", time: "há 21 min", price: "R$ 87,00" },
];

export default function KitchenMock({
  title = "Fluxa Kitchen",
  orders = DEFAULT_ORDERS,
}: {
  title?: string;
  orders?: Order[];
}) {
  return (
    <div className="kds">
      <div className="kds-head">
        <div className="kds-brand">
          <span className="kds-logo">F</span>
          <span className="kds-title">{title}</span>
        </div>
        <span className="kds-live">
          <span className="kds-live-dot" /> Ao vivo
        </span>
      </div>

      <div className="kds-stats">
        <div className="kds-stat">
          <b>42</b>
          <span>pedidos hoje</span>
        </div>
        <div className="kds-stat">
          <b>R$53</b>
          <span>ticket médio</span>
        </div>
        <div className="kds-stat">
          <b className="g">9min</b>
          <span>preparo</span>
        </div>
      </div>

      <div className="kds-orders">
        {orders.map((o) => (
          <div className={`kds-ticket s-${o.badge}`} key={o.name}>
            <div className="kds-ticket-main">
              <div className="kds-ticket-top">
                <span className="kds-ticket-name">{o.name}</span>
                <span className={`kds-pill b-${o.badge}`}>{o.badgeLabel}</span>
              </div>
              <div className="kds-ticket-items">{o.items}</div>
              {o.badge === "prep" && (
                <div className="kds-progress" aria-hidden="true">
                  <span />
                </div>
              )}
              <div className="kds-ticket-foot">
                <span>{o.time}</span>
                <b>{o.price}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
