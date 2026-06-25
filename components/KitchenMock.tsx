type Order = {
  name: string;
  badge: "new" | "prep" | "done";
  badgeLabel: string;
  items: string;
  time: string;
  price: string;
};

const DEFAULT_ORDERS: Order[] = [
  { name: "Mesa 4 — João M.", badge: "new", badgeLabel: "Novo", items: "2× X-Bacon · 1× Batata G · 2× Refri", time: "agora mesmo", price: "R$ 68,00" },
  { name: "Delivery — Ana P.", badge: "prep", badgeLabel: "Em preparo", items: "1× Frango Grelhado · 1× Suco Natural", time: "há 7 min", price: "R$ 42,50" },
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
    <div className="kitchen-mock">
      <div className="mock-titlebar">
        <div className="mock-dots">
          <div className="mock-dot mock-dot-r" />
          <div className="mock-dot mock-dot-y" />
          <div className="mock-dot mock-dot-g" />
        </div>
        <div className="mock-title-text">{title}</div>
        <div className="mock-live">
          <span className="mock-live-dot" /> Ao vivo
        </div>
      </div>
      <div className="mock-body">
        <div className="mock-metrics-row">
          <div className="m-metric">
            <div className="m-val red">42</div>
            <div className="m-label">pedidos hoje</div>
          </div>
          <div className="m-metric">
            <div className="m-val">R$53</div>
            <div className="m-label">ticket médio</div>
          </div>
          <div className="m-metric">
            <div className="m-val ember">9min</div>
            <div className="m-label">tempo preparo</div>
          </div>
        </div>
        <div className="order-list">
          {orders.map((o) => (
            <div className="o-card" key={o.name}>
              <div className="o-top">
                <span className="o-name">{o.name}</span>
                <span className={`o-badge b-${o.badge}`}>{o.badgeLabel}</span>
              </div>
              <div className="o-items">{o.items}</div>
              <div className="o-footer">
                <span className="o-time">{o.time}</span>
                <span className="o-price">{o.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
