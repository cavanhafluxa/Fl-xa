export default function Footer() {
  return (
    <footer className="on-ink">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="footer-logo-icon" src="/fluxa-f.png" alt="" />
              <span className="footer-logo-text">
                Fluxa<span className="nlt-sub">Foods</span>
              </span>
            </div>
            <p className="footer-tagline">
              A tecnologia que devolve <span className="accent">o controle</span>{" "}
              do seu restaurante para você.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Sistema</div>
            <ul>
              <li>
                <a href="#produto">Fluxa Kitchen</a>
              </li>
              <li>
                <a href="#produto">Fluxa Cardápio</a>
              </li>
              <li>
                <a href="#produto">Database Marketing</a>
              </li>
              <li>
                <a href="#comparativo">Comparativo</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Empresa</div>
            <ul>
              <li>
                <a href="#dor">O problema</a>
              </li>
              <li>
                <a href="#case">Case Lanas Burguer</a>
              </li>
              <li>
                <a href="#contato">Agendar demo</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <ul>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Fluxa Foods. Todos os direitos reservados.
          </span>
          <div className="footer-legal">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
