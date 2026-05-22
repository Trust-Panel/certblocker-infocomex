// Trust seals — text-based stylized badges (not logo recreations).
// User can replace with official artwork uploads later.

const SerproSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <svg viewBox="0 0 24 24" width={h * 0.5} height={h * 0.5} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--royal-600)', flexShrink: 0}}>
        <path d="M12 2l9 4v6c0 4.6-3.6 8.7-9 10-5.4-1.3-9-5.4-9-10V6l9-4z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
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
      <svg viewBox="0 0 32 32" width={h * 0.55} height={h * 0.55} style={{flexShrink: 0}}>
        <defs>
          <linearGradient id="icpg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f9d3d"/>
            <stop offset="50%" stopColor="#f7d046"/>
            <stop offset="100%" stopColor="#1f5bff"/>
          </linearGradient>
        </defs>
        <path d="M16 3 L28 27 L4 27 Z" fill="url(#icpg)"/>
        <path d="M16 3 L28 27 L4 27 Z" fill="none" stroke="white" strokeWidth="1.5"/>
        <text x="16" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="var(--font-display)">ICP</text>
      </svg>
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
