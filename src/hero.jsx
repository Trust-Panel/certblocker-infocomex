// Header + Hero with dashboard mock

const Logo = ({size=40}) => (
  <img src="assets/certbloker-logo.png" alt="CertBlocker" style={{height: size, width: 'auto', display: 'block'}} />
);

const NAV = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}><Logo /></a>
        <nav className="nav-links">
          {NAV.map(n => <a key={n.href} className="nav-link" href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nav-right">
          <div className="nav-cta">
            <a href="#contato" className="btn btn-primary btn-sm">Teste grátis agora <I.arrow size={14}/></a>
          </div>
          <button
            className="nav-toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <I.close size={22}/> : <I.menu size={22}/>}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={"mobile-menu" + (open ? " open" : "")}>
        {NAV.map(n => <a key={n.href} className="mobile-menu-link" href={n.href} onClick={close}>{n.label}</a>)}
        <a className="btn btn-primary mobile-menu-cta" href="#contato" onClick={close}>Teste grátis agora <I.arrow size={14}/></a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-bg"/>
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot"/>
          <span>PLATAFORMA CORPORATIVA • GESTÃO DE CERTIFICADOS DIGITAIS A1</span>
        </div>
        <h1 className="hero-title">
          Segurança institucional na gestão dos seus <span className="accent">certificados digitais.</span>
        </h1>
        <p className="hero-sub">
          A CertBlocker automatiza 100% do ciclo de vida dos certificados A1 da sua empresa, com criptografia bancária, alertas antecipados e controle granular de acesso. Zero certificados vencidos. Zero riscos operacionais.
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn btn-primary btn-lg">Agendar Demonstração <I.arrow size={14}/></a>
          <a href="#como-funciona" className="btn btn-outline btn-lg">Como funciona</a>
        </div>
        <HeroSeals/>
      </div>
      <div className="hero-media">
        <div className="hero-photo">
          <img src="assets/hero-team.jpeg" alt="Equipe corporativa utilizando o painel CertBlocker"/>
        </div>
        <div className="fcard fcard-active">
          <div className="fcard-lbl">CERTIFICADOS ATIVOS</div>
          <div className="fcard-val">150 Monitorados</div>
        </div>
        <div className="fcard fcard-alert">
          <div className="fcard-lbl">ALERTA DE RENOVAÇÃO</div>
          <div className="fcard-row"><span className="fcard-val sm">Vence em 30d</span><span className="fcard-badge">Auto</span></div>
        </div>
        <div className="fcard fcard-conf">
          <div className="fcard-lbl">CONFORMIDADE GERAL</div>
          <div className="fcard-row"><span className="fcard-val sm">Seguros &amp; Protegidos</span><span className="fcard-pct">98.4%</span></div>
          <div className="fcard-bar"><span style={{width:'98.4%'}}/></div>
        </div>
      </div>
    </div>
  </section>
);

const STATS = [
  { v: '100%', l: 'CERTIFICADOS SOB CONTROLE' },
  { v: 'AES-256', l: 'CRIPTOGRAFIA DE PADRÃO BANCÁRIO' },
  { v: '24/7', l: 'MONITORAMENTO CONTÍNUO' },
  { v: '<2h', l: 'TEMPO DE RESPOSTA COMERCIAL' },
];
const StatsBand = () => (
  <section className="stats-band">
    <div className="container stats-grid">
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-v">{s.v}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

window.Header = Header;
window.Hero = Hero;
window.StatsBand = StatsBand;
window.Logo = Logo;
