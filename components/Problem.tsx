export default function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="container">
        <div className="problem-header reveal">
          <h2 className="section-title">
            Você tem clientes fiéis.
            <br />
            Mas parou de <em>crescer.</em>
          </h2>
          <p className="section-sub">
            Boca a boca tem teto. Sem sistema, sem previsibilidade, sem dados —
            você opera no escuro toda semana.
          </p>
        </div>
        <div className="problem-grid">
          <div className="problem-card reveal reveal-delay-1">
            <div className="p-icon">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <polyline points="2,16 7,9 11,13 15,6 20,10" stroke="#C41C3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="16,10 20,10 20,14" stroke="#C41C3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Teto de crescimento</h3>
            <p>
              Sem atrair clientes ativamente, você depende do movimento do dia.
              Um feriado, uma chuva — o caixa sofre sem aviso.
            </p>
          </div>
          <div className="problem-card reveal reveal-delay-2">
            <div className="p-icon">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <rect x="4" y="2" width="14" height="18" rx="3" stroke="#C41C3B" strokeWidth="1.6" />
                <path d="M8 7h6M8 11h4" stroke="#C41C3B" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="15" cy="16" r="3.5" fill="#0C0A08" stroke="#C41C3B" strokeWidth="1.4" />
                <path d="M15 14.5v1.5l1 1" stroke="#C41C3B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>WhatsApp te devora</h3>
            <p>
              Responder pedido, confirmar endereço, avisar atraso. Horas por dia
              que você não tem — e erros que custam caro.
            </p>
          </div>
          <div className="problem-card reveal reveal-delay-3">
            <div className="p-icon">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <path d="M3 18c0-4 2-6 5-7s4-2 4-5" stroke="#C41C3B" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="5" r="2" stroke="#C41C3B" strokeWidth="1.5" />
                <path d="M14 14h5M14 17h3M14 11h4" stroke="#C41C3B" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Cozinha no escuro</h3>
            <p>
              Sem visibilidade dos pedidos em tempo real, o caos se instala nos
              horários de pico. Todo dia é igual.
            </p>
          </div>
          <div className="problem-card reveal reveal-delay-4">
            <div className="p-icon">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8.5" stroke="#C41C3B" strokeWidth="1.6" />
                <path d="M11 6v5.5l3.5 2" stroke="#C41C3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 16.5 Q11 13 14.5 16.5" stroke="#C41C3B" strokeWidth="1.3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h3>iFood come sua margem</h3>
            <p>
              25 a 30% de comissão por pedido. A cada R$ 100 que você vende, você
              fica com R$ 70 — ou menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
