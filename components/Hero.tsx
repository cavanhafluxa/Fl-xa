// The isometric kitchen scene is verbatim static SVG art from the original
// markup. It is injected as raw HTML to avoid hand-converting ~60 SVG nodes
// (and their hyphenated attributes) to JSX, with zero visual change.
const ISO_SCENE = `
<defs>
  <filter id="glow-red"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="shadow-iso"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(0,0,0,0.6)"/></filter>
  <linearGradient id="counter-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2A2118"/><stop offset="100%" stop-color="#1A150F"/></linearGradient>
  <linearGradient id="counter-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#130F0A"/><stop offset="100%" stop-color="#0C0906"/></linearGradient>
  <linearGradient id="counter-side" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1E1810"/><stop offset="100%" stop-color="#150F09"/></linearGradient>
  <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0F1A14"/><stop offset="100%" stop-color="#0A110E"/></linearGradient>
  <linearGradient id="plate-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0E0CC"/><stop offset="100%" stop-color="#D4C0A8"/></linearGradient>
  <radialGradient id="food-grad" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#E8A030"/><stop offset="60%" stop-color="#C47818"/><stop offset="100%" stop-color="#8B4A08"/></radialGradient>
  <radialGradient id="sauce-grad" cx="45%" cy="40%" r="55%"><stop offset="0%" stop-color="#C41C3B"/><stop offset="100%" stop-color="#7A0F22"/></radialGradient>
</defs>
<polygon points="100,210 230,140 360,210 230,280" fill="url(#counter-top)" filter="url(#shadow-iso)"/>
<polygon points="100,210 100,310 230,380 230,280" fill="url(#counter-front)"/>
<polygon points="230,280 230,380 360,310 360,210" fill="url(#counter-side)"/>
<polyline points="100,210 230,140 360,210" stroke="rgba(245,230,216,0.08)" stroke-width="1" fill="none"/>
<polygon points="148,188 148,168 232,120 232,140" fill="#1A1510"/>
<polygon points="148,168 232,120 296,157 296,177" fill="url(#screen-grad)"/>
<polygon points="148,188 148,168 296,177 296,197" fill="#0D0B08"/>
<polygon points="155,170 232,124 290,159 232,168" fill="#0F1A14"/>
<circle cx="284" cy="132" r="4" fill="#10b981" filter="url(#glow-red)"/>
<line x1="168" y1="145" x2="215" y2="120" stroke="rgba(16,185,129,0.6)" stroke-width="1.5" stroke-linecap="round"/>
<line x1="168" y1="151" x2="200" y2="132" stroke="rgba(245,230,216,0.2)" stroke-width="1" stroke-linecap="round"/>
<line x1="168" y1="157" x2="210" y2="136" stroke="rgba(245,230,216,0.15)" stroke-width="1" stroke-linecap="round"/>
<polygon points="155,170 168,163 168,167 155,174" fill="#C41C3B"/>
<ellipse cx="230" cy="248" rx="52" ry="30" fill="url(#plate-grad)" filter="url(#shadow-iso)"/>
<ellipse cx="230" cy="246" rx="44" ry="25" fill="#E8D0B8"/>
<ellipse cx="230" cy="244" rx="36" ry="20" fill="url(#food-grad)"/>
<path d="M210,238 Q220,232 230,238 Q240,244 250,238" stroke="url(#sauce-grad)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M215,244 Q225,240 235,244" stroke="#C41C3B" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.8"/>
<circle cx="220" cy="238" r="2.5" fill="#2D8A3E" opacity="0.9"/>
<circle cx="238" cy="242" r="2" fill="#2D8A3E" opacity="0.9"/>
<circle cx="229" cy="235" r="1.5" fill="#2D8A3E" opacity="0.7"/>
<ellipse cx="230" cy="248" rx="52" ry="30" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
<ellipse cx="160" cy="220" rx="24" ry="14" fill="#C9A87A" filter="url(#shadow-iso)"/>
<ellipse cx="160" cy="219" rx="19" ry="11" fill="#E8C090"/>
<ellipse cx="160" cy="218" rx="15" ry="8" fill="#D4540A" opacity="0.9"/>
<path d="M155,208 Q157,200 155,192" stroke="rgba(245,230,216,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"><animate attributeName="opacity" values="0;0.5;0" dur="2.2s" repeatCount="indefinite"/></path>
<path d="M160,206 Q162,197 160,188" stroke="rgba(245,230,216,0.2)" stroke-width="1.5" fill="none" stroke-linecap="round"><animate attributeName="opacity" values="0;0.4;0" dur="2.2s" begin="0.6s" repeatCount="indefinite"/></path>
<path d="M165,208 Q167,200 165,192" stroke="rgba(245,230,216,0.2)" stroke-width="1.5" fill="none" stroke-linecap="round"><animate attributeName="opacity" values="0;0.35;0" dur="2.2s" begin="1.1s" repeatCount="indefinite"/></path>
<polygon points="295,185 295,215 308,222 308,192" fill="rgba(196,28,59,0.7)" stroke="rgba(245,230,216,0.15)" stroke-width="1"/>
<polygon points="293,183 307,190 307,192 293,185" fill="rgba(245,230,216,0.15)"/>
<line x1="298" y1="193" x2="298" y2="208" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<line x1="302" y1="191" x2="302" y2="210" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<line x1="305" y1="178" x2="302" y2="183" stroke="#F5E6D8" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<polygon points="270,195 270,185 320,212 320,222" fill="#6B3E1A" opacity="0.85"/>
<polygon points="270,185 320,160 350,177 320,212" fill="#8B5020" opacity="0.9"/>
<polygon points="320,212 350,177 350,187 320,222" fill="#5A3010" opacity="0.85"/>
<line x1="280" y1="183" x2="340" y2="168" stroke="rgba(245,230,216,0.5)" stroke-width="2" stroke-linecap="round"/>
<rect x="277" y="180" width="8" height="5" rx="1" fill="#3A2010" transform="rotate(-15,281,182)"/>
<polygon points="142,192 142,182 172,166 172,176" fill="#1E1814"/>
<polygon points="142,182 172,166 182,172 152,188" fill="#2A221C"/>
<polygon points="142,192 152,188 182,172 172,176" fill="#141008" opacity="0.9"/>
<rect x="154" y="161" width="12" height="18" rx="1" fill="rgba(245,230,216,0.9)" transform="rotate(-28,160,170)"/>
<line x1="157" y1="162" x2="163" y2="159" stroke="rgba(0,0,0,0.3)" stroke-width="0.8"/>
<line x1="157" y1="165" x2="163" y2="162" stroke="rgba(0,0,0,0.2)" stroke-width="0.8"/>
<g filter="url(#shadow-iso)">
  <rect x="190" y="94" width="90" height="22" rx="11" fill="#C41C3B"/>
  <text x="235" y="109" font-family="DM Sans,sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">Novo pedido ✓</text>
</g>
<line x1="235" y1="116" x2="240" y2="124" stroke="rgba(196,28,59,0.4)" stroke-width="1" stroke-dasharray="2,2"/>
<circle cx="380" cy="160" r="2" fill="rgba(196,28,59,0.4)"><animate attributeName="cy" values="160;148;160" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="390" cy="200" r="1.5" fill="rgba(245,230,216,0.2)"><animate attributeName="cy" values="200;186;200" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="80" cy="230" r="2" fill="rgba(196,28,59,0.3)"><animate attributeName="cy" values="230;218;230" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/></circle>
<circle cx="370" cy="270" r="1.5" fill="rgba(245,230,216,0.15)"><animate attributeName="cy" values="270;260;270" dur="5s" repeatCount="indefinite"/></circle>
`;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-radial"></div>
        <div className="hero-bg-radial-2"></div>
        <div className="hero-lines"></div>
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Infraestrutura de vendas para restaurantes — Blumenau, SC
          </div>

          <h1 className="hero-title">
            Chega de
            <br />
            depender
            <br />
            de <span className="accent">dia bom.</span>
          </h1>

          <div className="hero-desc">
            <p>
              A Fluxa implementa uma infraestrutura completa de vendas para
              restaurantes, gerando pedidos de forma previsível todos os dias.
            </p>
            <p className="hero-subdesc">Nós operamos tudo. Você abre a loja.</p>
          </div>

          {/* Isometric Kitchen Scene */}
          <div className="hero-3d">
            <div className="iso-wrap">
              <div className="iso-glow"></div>
              <div className="orbit-ring">
                <div className="orbit-dot"></div>
              </div>
              <svg
                viewBox="0 0 460 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: ISO_SCENE }}
              />
              <div className="float-card fc-orders">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="1.5" width="9" height="13" rx="1.5" stroke="#E8383A" strokeWidth="1.3" />
                    <line x1="4.5" y1="5" x2="8.5" y2="5" stroke="#E8383A" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="4.5" y1="7.5" x2="8.5" y2="7.5" stroke="#E8383A" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="4.5" y1="10" x2="7" y2="10" stroke="#E8383A" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="12.5" cy="12.5" r="2.5" fill="#E8383A" />
                    <path d="M11.5 12.5h2M12.5 11.5v2" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="fc-label">Pedidos em aberto</div>
                  <div className="fc-val" style={{ color: "var(--red-light)" }}>
                    12 pedidos
                  </div>
                </div>
              </div>
              <div className="float-card fc-time">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8.5" r="5.5" stroke="#10b981" strokeWidth="1.3" />
                    <path d="M8 5.5v3l2 1.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 1.5h3" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="fc-label">Resposta Eli</div>
                  <div className="fc-val" style={{ color: "#10b981" }}>
                    30 segundos
                  </div>
                </div>
              </div>
              <div className="float-card fc-ticket">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 5.5h12v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Z" stroke="#fbbf24" strokeWidth="1.3" />
                    <path d="M2 5.5V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.5" stroke="#fbbf24" strokeWidth="1.3" />
                    <line x1="8" y1="3" x2="8" y2="13.5" stroke="#fbbf24" strokeWidth="1" strokeDasharray="1.5 1.5" />
                    <path d="M5 8.5h2M9 8.5h2" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="fc-label">Ticket médio</div>
                  <div className="fc-val" style={{ color: "var(--yellow)" }}>
                    R$ 53,00
                  </div>
                </div>
              </div>
              <div className="float-card fc-loyalty">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4.5A5 5 0 0 0 3.5 7" stroke="#E8383A" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M3 3.5v3.5h3.5" stroke="#E8383A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 11.5A5 5 0 0 0 12.5 9" stroke="#E8383A" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M13 12.5V9h-3.5" stroke="#E8383A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="fc-label">Clientes fiéis</div>
                  <div className="fc-val" style={{ color: "var(--red-light)" }}>
                    +60% retorno
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">
                10<span className="accent">%</span>
              </div>
              <div className="stat-label">de comissão vs. 25–30% do iFood</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                +<span className="accent">60</span>%
              </div>
              <div className="stat-label">
                de clientes que retornam (meta 120 dias)
              </div>
            </div>
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-label">configurações técnicas pelo dono</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
