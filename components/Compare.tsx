const ROWS = [
  "Atrair clientes via tráfego pago",
  "Atendimento no WhatsApp (resposta em 30s)",
  "Dashboard de cozinha em tempo real",
  "Programa de fidelidade automático",
  "Follow-up pós-pedido",
  "Dados 100% do restaurante",
  "Sem dependência de plataforma",
  "Cardápio digital com identidade própria",
];

export default function Compare() {
  return (
    <section className="compare">
      <div className="container">
        <div className="reveal">
          <div className="tag">Comparativo</div>
          <h2 className="section-title">
            Fluxa vs. <em>iFood / Rappi</em>
          </h2>
          <p className="section-sub">
            Cada pedido que sai pelo iFood financia a plataforma deles, não a sua
            operação.
          </p>
        </div>
        <div className="compare-table-wrap reveal reveal-delay-1">
          <div className="table-scroll-hint">← deslize para ver tudo →</div>
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Recurso</th>
                <th>iFood / Rappi</th>
                <th className="th-fluxa">Fluxa Foods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comissão por pedido</td>
                <td>
                  <span className="commission-comp">25 – 30%</span>
                </td>
                <td className="td-fluxa">
                  <span className="commission-fluxa">10%</span>
                </td>
              </tr>
              {ROWS.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>
                    <span className="cx">—</span>
                  </td>
                  <td className="td-fluxa">
                    <span className="ck">✓</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
