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

const DashboardMock = () => (
  <div className="dash" role="img" aria-label="Painel CertBlocker mostrando lista de certificados A1 com status, dias para vencer e responsáveis">
    <div className="dash-bar">
      <div className="dots"><span/><span/><span/></div>
      <div className="url"><I.lock size={11}/> app.certbloker.com.br/dashboard</div>
    </div>
    <div className="dash-body">
      <aside className="dash-side">
        <div className="dash-logo">
          <div className="mark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M9 11V8a3 3 0 016 0v3"/></svg>
          </div>
          <span>CertBlocker</span>
        </div>
        <div className="group-label">Geral</div>
        <a className="nav-item active"><I.chart className="icn"/> Dashboard</a>
        <a className="nav-item"><I.cert className="icn"/> Certificados <span className="badge">4</span></a>
        <a className="nav-item"><I.users className="icn"/> Empresas</a>
        <a className="nav-item"><I.signature className="icn"/> Emissões</a>
        <div className="group-label">Sistema</div>
        <a className="nav-item"><I.bell className="icn"/> Alertas</a>
        <a className="nav-item"><I.api className="icn"/> API & Integrações</a>
        <a className="nav-item"><I.cog className="icn"/> Configurações</a>
      </aside>
      <div className="dash-main">
        <div className="dash-h">
          <div>
            <h3>Carteira de certificados</h3>
            <div className="sub">142 certificados ativos · 23 empresas vinculadas</div>
          </div>
          <button className="btn btn-royal btn-sm"><I.plus/> Emitir A1</button>
        </div>
        <div className="kpi-row">
          <div className="kpi">
            <div className="lbl">Vigentes</div>
            <div className="val">128</div>
            <div className="delta">↑ 12 este mês</div>
          </div>
          <div className="kpi warn">
            <div className="lbl">Vencem em ≤ 30d</div>
            <div className="val">11</div>
            <div className="delta" style={{color: 'var(--warn)'}}>Renovação pendente</div>
          </div>
          <div className="kpi danger">
            <div className="lbl">Expirados</div>
            <div className="val">3</div>
            <div className="delta" style={{color: 'var(--danger)'}}>Ação imediata</div>
          </div>
        </div>
        <div className="cert-list">
          <div className="cert-row head">
            <div>Titular</div><div>CNPJ</div><div>Status</div><div>Vencimento</div>
          </div>
          <div className="cert-row">
            <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Construtora Aurora LTDA</div>
            <div className="cert-cnpj">12.345.678/0001-90</div>
            <div><span className="pill pill-ok"><span className="ddot"/>Vigente</span></div>
            <div className="days">328 dias</div>
          </div>
          <div className="cert-row">
            <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Mendes Contábil ME</div>
            <div className="cert-cnpj">98.765.432/0001-10</div>
            <div><span className="pill pill-warn"><span className="ddot"/>A renovar</span></div>
            <div className="days">17 dias</div>
          </div>
          <div className="cert-row">
            <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Lima &amp; Souza Advogados</div>
            <div className="cert-cnpj">07.221.448/0001-55</div>
            <div><span className="pill pill-ok"><span className="ddot"/>Vigente</span></div>
            <div className="days">192 dias</div>
          </div>
          <div className="cert-row">
            <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Pereira Logística S.A.</div>
            <div className="cert-cnpj">33.014.556/0001-22</div>
            <div><span className="pill pill-danger"><span className="ddot"/>Expirado</span></div>
            <div className="days">-4 dias</div>
          </div>
          <div className="cert-row">
            <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Vidotti Comércio EIRELI</div>
            <div className="cert-cnpj">21.005.812/0001-44</div>
            <div><span className="pill pill-warn"><span className="ddot"/>A renovar</span></div>
            <div className="days">28 dias</div>
          </div>
        </div>
      </div>
    </div>

    <div className="float-card">
      <div className="ic"><I.warning size={16}/></div>
      <div>
        <div className="ttl">Mendes Contábil ME vence em 17 dias</div>
        <div className="desc">E-mail enviado ao responsável fiscal. Renovação pode ser concluída 100% online.</div>
      </div>
    </div>
    <div className="float-card sec">
      <div className="ic"><I.bolt size={16}/></div>
      <div>
        <div className="ttl">Renovação automática</div>
        <div className="desc">23 certificados configurados em fluxo recorrente.</div>
      </div>
    </div>
  </div>
);

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

const LogosStrip = () => (
  <section className="logos">
    <div className="container">
      <div className="logos-label">Empresas e escritórios que centralizam certificados no CertBlocker</div>
      <div className="logos-row">
        <div className="logo">AURORA<sup>™</sup></div>
        <div className="logo italic">Mendes&amp;Co</div>
        <div className="logo mono">VIDOTTI</div>
        <div className="logo">◇ Pereira Log</div>
        <div className="logo italic">LimaSouza</div>
        <div className="logo mono">NORTH/SUL</div>
      </div>
    </div>
  </section>
);

window.Header = Header;
window.Hero = Hero;
window.StatsBand = StatsBand;
window.LogosStrip = LogosStrip;
window.Logo = Logo;
