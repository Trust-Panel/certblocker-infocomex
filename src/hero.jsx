// Header + Hero with dashboard mock

const Logo = ({size=48}) => (
  <img src="assets/certbloker-logo.png" alt="CertBloker" style={{height: size, width: 'auto', display: 'block'}} />
);

const Header = () => (
  <header className="nav">
    <div className="container nav-inner">
      <a href="#" className="brand">
        <Logo />
      </a>
      <nav className="nav-links">
        <a className="nav-link" href="#produto">Produto</a>
        <a className="nav-link" href="#como-funciona">Como funciona</a>
        <a className="nav-link" href="#infocomex">Infocomex</a>
        <a className="nav-link" href="#faq">FAQ</a>
      </nav>
      <div className="nav-cta">
        <a href="#cta" className="btn btn-primary btn-sm">Falar com especialista <I.arrow size={14}/></a>
      </div>
    </div>
  </header>
);

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
          <span>CertBloker</span>
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
    <div className="hero-grid"/>
    <div className="container hero-inner">
      <div>
        <div className="eyebrow">
          <span className="dot"><I.shield size={10}/></span>
          <span>Tecnologia <strong>Infocomex</strong> · AC credenciada <strong>SERPRO</strong> desde 2010</span>
        </div>
        <h1 className="hero-title">
          Sua empresa nunca mais vai <span className="strike">perder o prazo</span> de um <span className="accent">certificado A1.</span>
        </h1>
        <p className="hero-sub">
          Plataforma de gestão de certificados digitais A1 para empresas e contadores.
          Centralize sua carteira, automatize renovações e, quando precisar emitir, a <b>Infocomex</b> — nossa parceira AC credenciada ICP-Brasil — cuida de tudo.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary btn-lg">Agendar demonstração <I.arrow size={14}/></a>
          <a href="#produto" className="btn btn-outline btn-lg">Ver a plataforma</a>
        </div>
        <TrustRowCompact/>
      </div>
      <div style={{position: 'relative'}}>
        <DashboardMock/>
      </div>
    </div>
  </section>
);

const LogosStrip = () => (
  <section className="logos">
    <div className="container">
      <div className="logos-label">Empresas e escritórios que centralizam certificados no CertBloker</div>
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
window.LogosStrip = LogosStrip;
window.Logo = Logo;
