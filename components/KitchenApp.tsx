/* Fluxa Kitchen app dashboard — recreated from the real app print. */
export default function KitchenApp() {
  return (
    <div className="kapp">
      <div className="kapp-top">
        <div className="kapp-brand">
          <span className="kapp-logo">F</span>
          <span>Quioski Lanches</span>
        </div>
        <span className="kapp-avatar" aria-hidden="true" />
      </div>

      <div className="kapp-scroll">
        <div className="kapp-greet">Boa tarde, Eliezer!</div>
        <div className="kapp-date">quinta-feira, 25 de junho</div>

        <div className="kapp-stats">
          <div className="kapp-stat">
            <span className="kapp-stat-ico r">🧾</span>
            <span className="kapp-stat-lbl">Pedidos hoje</span>
            <b>28</b>
          </div>
          <div className="kapp-stat">
            <span className="kapp-stat-ico g">$</span>
            <span className="kapp-stat-lbl">Faturamento</span>
            <b>R$ 1.480</b>
          </div>
          <div className="kapp-stat">
            <span className="kapp-stat-ico b">📊</span>
            <span className="kapp-stat-lbl">Ticket médio</span>
            <b>R$ 53</b>
          </div>
          <div className="kapp-stat">
            <span className="kapp-stat-ico y">🪑</span>
            <span className="kapp-stat-lbl">Mesas ocupadas</span>
            <b>3/6</b>
          </div>
        </div>

        <div className="kapp-alert">
          <div className="kapp-alert-head">⚠ Estoque baixo (2)</div>
          <div className="kapp-alert-row">
            <span>Carne</span>
            <b>-3200 g</b>
          </div>
          <div className="kapp-alert-row">
            <span>Pão Brioche</span>
            <b>-22 un</b>
          </div>
          <div className="kapp-alert-link">Ver estoque →</div>
        </div>

        <div className="kapp-orders">
          <div className="kapp-orders-head">
            <b>Últimos pedidos</b>
            <span>Ver todos →</span>
          </div>
          <div className="kapp-order">
            <span className="kapp-order-id">#0154</span>
            <span className="kapp-order-name">Eliezer</span>
            <span className="kapp-order-badge novo">novo</span>
            <span className="kapp-order-price">R$ 47</span>
          </div>
          <div className="kapp-order">
            <span className="kapp-order-id">#0136</span>
            <span className="kapp-order-name">Cliente Cardápio</span>
            <span className="kapp-order-badge entregue">entregue</span>
            <span className="kapp-order-price">R$ 33</span>
          </div>
        </div>
      </div>

      <div className="kapp-tabs">
        <div className="kapp-tab on"><span className="kapp-tab-ico">⌂</span>Início</div>
        <div className="kapp-tab"><span className="kapp-tab-ico">🧾</span>Pedidos</div>
        <div className="kapp-tab"><span className="kapp-tab-ico">🍴</span>Cardápio</div>
        <div className="kapp-tab"><span className="kapp-tab-ico">🪑</span>Mesas</div>
        <div className="kapp-tab"><span className="kapp-tab-ico">▦</span>Mais</div>
      </div>
    </div>
  );
}
