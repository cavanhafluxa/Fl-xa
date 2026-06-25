/* Fluxa Kitchen app dashboard — clean recreation (no emojis, generic data). */

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0Z" />
    </svg>
  );
}

const STATS = [
  {
    tone: "r",
    label: "Pedidos hoje",
    value: "28",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "g",
    label: "Faturamento",
    value: "R$ 1.480",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M9.5 14.2c.4 1 1.3 1.6 2.5 1.6 1.5 0 2.4-.8 2.4-1.9 0-2.6-4.7-1.5-4.7-4 0-1 .9-1.8 2.3-1.8 1.1 0 2 .6 2.3 1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "b",
    label: "Ticket médio",
    value: "R$ 53",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 19V10M12 19V5M19 19v-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "y",
    label: "Mesas ocupadas",
    value: "3/6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M4 9h16M6 9l-1 5M18 9l1 5M9 9V6h6v3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TABS = [
  { label: "Início", on: true, icon: <path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1Z" /> },
  { label: "Pedidos", icon: <path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" /> },
  { label: "Cardápio", icon: <path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v18M18 3c-1.5 1.5-2 3-2 6s.5 4 2 4v8" /> },
  { label: "Mesas", icon: <path d="M4 9h16M6 9l-1 6M18 9l1 6" /> },
  { label: "Mais", icon: <path d="M5 6h14M5 12h14M5 18h14" /> },
];

export default function KitchenApp() {
  return (
    <div className="kapp">
      <div className="kapp-top">
        <span className="kapp-logo">F</span>
        <span className="kapp-avatar" aria-hidden="true">
          <UserIcon />
        </span>
      </div>

      <div className="kapp-scroll">
        <div className="kapp-greet">Boa tarde, Chef!</div>
        <div className="kapp-date">quinta-feira, 25 de junho</div>

        <div className="kapp-stats">
          {STATS.map((s) => (
            <div className="kapp-stat" key={s.label}>
              <span className={`kapp-stat-ico ${s.tone}`}>{s.icon}</span>
              <span className="kapp-stat-lbl">{s.label}</span>
              <b>{s.value}</b>
            </div>
          ))}
        </div>

        <div className="kapp-alert">
          <div className="kapp-alert-head">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4 22 20H2L12 4Z" strokeLinejoin="round" />
              <path d="M12 10v4" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
            Estoque baixo (2)
          </div>
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
            <span className="kapp-order-name">Cliente balcão</span>
            <span className="kapp-order-badge novo">novo</span>
            <span className="kapp-order-price">R$ 47</span>
          </div>
          <div className="kapp-order">
            <span className="kapp-order-id">#0136</span>
            <span className="kapp-order-name">Cardápio digital</span>
            <span className="kapp-order-badge entregue">entregue</span>
            <span className="kapp-order-price">R$ 33</span>
          </div>
        </div>
      </div>

      <div className="kapp-tabs">
        {TABS.map((t) => (
          <div className={`kapp-tab${t.on ? " on" : ""}`} key={t.label}>
            <svg
              className="kapp-tab-ico"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {t.icon}
            </svg>
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}
