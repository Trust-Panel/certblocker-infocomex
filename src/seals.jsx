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
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 4v6c0 4.6-3.6 8.7-9 10-5.4-1.3-9-5.4-9-10V6l9-4z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
      <span><b>SERPRO</b> credenciada<br/><span className="trust-cell-sub">AC desde 2010</span></span>
    </div>
    <div className="trust-divider"/>
    <div className="trust-cell">
      <svg viewBox="0 0 32 32" width="22" height="22">
        <path d="M16 4 L28 26 L4 26 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M16 12 L22 24 L10 24 Z" fill="currentColor" opacity="0.75"/>
      </svg>
      <span><b>ICP-Brasil</b><br/><span className="trust-cell-sub">Validade jurídica</span></span>
    </div>
    <div className="trust-divider"/>
    <div className="trust-cell">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="14" rx="2"/>
        <path d="M3 10h18M7 15h4"/>
      </svg>
      <span>Grupo <b>Infocomex</b><br/><span className="trust-cell-sub">+15 anos no mercado</span></span>
    </div>
  </div>
);

window.SerproSeal = SerproSeal;
window.IcpBrasilSeal = IcpBrasilSeal;
window.InfocomexBadge = InfocomexBadge;
window.TrustRowCompact = TrustRowCompact;
