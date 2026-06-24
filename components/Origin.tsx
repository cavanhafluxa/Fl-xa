export default function Origin() {
  return (
    <section className="origin" id="origem">
      <div className="container">
        <div className="origin-inner">
          <div className="origin-left">
            <div className="tag reveal">Nossa história</div>
            <h2 className="section-title reveal reveal-delay-1">
              Nasceu nas
              <br />
              <em>vidraçarias.</em>
              <br />
              Chegou à mesa.
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              A Fluxa não foi inventada numa garagem. Foi testada na operação
              real da Dzarte Vidros — e só depois trazida para o nicho de
              restaurantes.
            </p>
            <blockquote className="origin-quote reveal reveal-delay-3">
              &quot;Antes de vender para qualquer restaurante, a gente rodou cada
              ferramenta dentro da <strong>Dzarte Vidros</strong>. Eli Pedidos,
              Kitchen, tráfego pago, fidelidade automática — tudo validado em
              produção real. O que chegou até você já foi testado.&quot;
            </blockquote>
          </div>
          <div className="origin-right">
            <div className="origin-card reveal reveal-delay-1">
              <div className="origin-icon blue">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="9" width="16" height="9" rx="1.5" stroke="#3888E8" strokeWidth="1.4" />
                  <path d="M5 9V6.5a5 5 0 0 1 10 0V9" stroke="#3888E8" strokeWidth="1.4" />
                  <rect x="8" y="13" width="4" height="5" rx="1" stroke="#3888E8" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="origin-card-body">
                <h4>Origem — Dzarte Vidros</h4>
                <p>
                  Sistema de pedidos, gestão de leads e automação de follow-up
                  desenvolvidos e validados na operação da Dzarte, vidraçaria em
                  Blumenau, SC.
                </p>
              </div>
            </div>
            <div className="origin-card reveal reveal-delay-2">
              <div className="origin-icon red">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 8h14M3 8c0-3 3-5 7-5s7 2 7 5" stroke="#C41C3B" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M3 8v2a7 7 0 0 0 14 0V8" stroke="#C41C3B" strokeWidth="1.4" />
                  <path d="M10 13v4M7 17h6" stroke="#C41C3B" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="origin-card-body">
                <h4>Adaptado para Food&apos;s</h4>
                <p>
                  Toda a infraestrutura foi remodelada para restaurantes — com
                  Eli treinado para cardápios, Kitchen para cozinha e fidelidade
                  para pedidos recorrentes.
                </p>
              </div>
            </div>
            <div className="origin-card reveal reveal-delay-3">
              <div className="origin-icon red">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="#C41C3B" strokeWidth="1.4" />
                  <circle cx="10" cy="8" r="2" stroke="#C41C3B" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="origin-card-body">
                <h4>Primeiro piloto em andamento</h4>
                <p>
                  O primeiro cliente Food&apos;s já está em operação em Blumenau,
                  SC. Métricas reais, operação ao vivo. Você entra depois do
                  teste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
