// Trust seals — text-based stylized badges (not logo recreations).
// User can replace with official artwork uploads later.

const SerproSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <img src="assets/serpro-logo.png" alt="Logo SERPRO — Serviço Federal de Processamento de Dados" style={{width: h * 0.5, height: h * 0.5, objectFit: 'contain', flexShrink: 0}} />
      <div className="seal-text">
        <div className="seal-lbl">Credenciada</div>
        <div className="seal-name">SERPRO</div>
      </div>
    </div>
  );
};

const IcpBrasilSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <img src="assets/icp-logo.png" alt="Logo ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira" style={{width: h * 0.55, height: h * 0.55, objectFit: 'contain', flexShrink: 0}} />
      <div className="seal-text">
        <div className="seal-lbl">Certificação</div>
        <div className="seal-name">ICP-Brasil</div>
      </div>
    </div>
  );
};

const InfocomexBadge = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <div style={{width: h * 0.5, height: h * 0.5, borderRadius: 8, background: 'linear-gradient(135deg, #0a1a40, #1f5bff)', display: 'grid', placeItems: 'center', flexShrink: 0, color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: h * 0.22, letterSpacing: '-0.02em'}}>
          ic
      </div>
      <div className="seal-text">
        <div className="seal-lbl">Grupo</div>
        <div className="seal-name">Infocomex</div>
      </div>
    </div>
  );
};

// Compact monochrome row for hero
const TrustRowCompact = ({inverse = false}) => (
  <div className={"trust-row " + (inverse ? 'inv' : '')}>
    <div className="trust-cell">
      <img className="trust-logo" src="assets/serpro-logo.png" alt="SERPRO" />
      <span className="trust-cell-sub">AC desde 2010</span>
    </div>
    <div className="trust-divider"/>
    <div className="trust-cell">
      <img className="trust-logo" src="assets/icp-logo.png" alt="ICP-Brasil" />
      <span className="trust-cell-sub">Validade jurídica</span>
    </div>
    <div className="trust-divider"/>
    <div className="trust-cell">
      <img className="trust-logo" src="assets/infocomex-logo.png" alt="Infocomex" />
      <span className="trust-cell-sub">+15 anos no mercado</span>
    </div>
  </div>
);

window.SerproSeal = SerproSeal;
window.IcpBrasilSeal = IcpBrasilSeal;
window.InfocomexBadge = InfocomexBadge;
window.TrustRowCompact = TrustRowCompact;
