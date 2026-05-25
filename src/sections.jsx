// Features, Product tabs, Steps sections

const InforcomexPartner = () => (
  <section className="powered" id="infocomex">
    <div className="container">
      <div className="powered-grid">
        <div>
          <div className="kicker">Parceria certificada</div>
          <h2>Certificados emitidos pela Infocomex. Gerenciados pelo CertBlocker.</h2>
          <p>
            O CertBlocker cuida do cofre criptografado, dos alertas, do controle de acesso e de toda a auditoria da sua carteira.
            A emissão dos certificados A1 é realizada pela <b>Infocomex</b> — Autoridade Certificadora credenciada pelo
            <b> SERPRO desde 2010</b> e parte da cadeia <b>ICP-Brasil</b> — com plena validade jurídica e infraestrutura 100% nacional.
          </p>
          <p style={{fontSize: 14, color: 'var(--ink-500)'}}>
            Central de atendimento <b style={{color: 'var(--navy-900)'}}>0800 047 1347</b> ·
            Unidades em Balneário Camboriú, Itajaí e Barra Velha (SC).
          </p>
          <div style={{marginTop: 28}}>
            <a href="https://infocomex.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-royal btn-lg">
              Conhecer a Infocomex <I.arrow size={14}/>
            </a>
          </div>
        </div>

        <div className="credentials-stage">
          <h4>Credenciamentos &amp; cadeia de confiança</h4>
          <h3>Quem garante a emissão</h3>

          <div className="cred-row">
            <div className="cred-icon">
              <img src="assets/serpro-logo.png" alt="Logo SERPRO — Serviço Federal de Processamento de Dados" style={{width: 42, height: 42, objectFit: 'contain'}}/>
            </div>
            <div>
              <p className="cred-title">SERPRO</p>
              <p className="cred-sub">Autoridade Certificadora credenciada — Serviço Federal de Processamento de Dados, vinculado à União.</p>
              <span className="cred-tag">Credenciada desde 2010</span>
            </div>
          </div>

          <div className="cred-row">
            <div className="cred-icon">
              <img src="assets/icp-logo.png" alt="Logo ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira" style={{width: 42, height: 42, objectFit: 'contain'}}/>
            </div>
            <div>
              <p className="cred-title">ICP-Brasil</p>
              <p className="cred-sub">Infraestrutura de Chaves Públicas Brasileira, sob regulamentação do ITI. Validade jurídica plena.</p>
              <span className="cred-tag">Cadeia oficial · MP 2.200-2</span>
            </div>
          </div>

          <div className="cred-row">
            <div className="cred-icon" style={{width: 42, height: 42, borderRadius: 8, background: 'var(--bg-soft)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, color: 'var(--ink-500)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', flexShrink: 0}}>
              ic
            </div>
            <div>
              <p className="cred-title">Infocomex</p>
              <p className="cred-sub">Autoridade Certificadora parceira responsável pela emissão de todos os certificados A1 da plataforma.</p>
              <span className="cred-tag">AC credenciada · 15+ anos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="block" id="produto">
    <div className="container">
      <div className="section-head">
        <div className="kicker">Plataforma</div>
        <h2>Tudo o que sua empresa precisa para gerenciar certificados A1, em um único lugar.</h2>
        <p>Acabe com o controle por planilha e e-mails perdidos. O CertBloker concentra cofre seguro, alertas de vencimento, controle de acesso granular e auditoria imutável — em uma única plataforma corporativa pronta para TI, Contabilidade e Jurídico.</p>
      </div>

      <div className="features-grid">
        <div className="feat-card dark feat-hero">
          <div>
            <div className="feat-icn"><I.bell/></div>
            <h3 className="feat-title">Alertas inteligentes de vencimento</h3>
            <p className="feat-desc">Notificações automáticas por e-mail com prazo configurável (D-30, D-15 e D-7). Dashboard consolidado com linha do tempo — seu time renova no momento certo, nunca antes, nunca depois.</p>
          </div>
          <div className="feat-visual">
            <div className="feat-visual-title">Painel de alertas</div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#f59e0b'}}/>
              <span className="alert-badge" style={{background:'rgba(245,158,11,0.18)',color:'#fbbf24'}}>D-30</span>
              <span className="alert-text">Mendes Contábil — alerta a Maria L.</span>
            </div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#5b8def'}}/>
              <span className="alert-badge" style={{background:'rgba(91,141,239,0.18)',color:'#93b4f8'}}>D-15</span>
              <span className="alert-text">Vidotti EIRELI — alerta ao contador</span>
            </div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#ef4444'}}/>
              <span className="alert-badge" style={{background:'rgba(239,68,68,0.18)',color:'#f87171'}}>D-7</span>
              <span className="alert-text">Pereira Log — alerta a 3 destinatários</span>
            </div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#10b981'}}/>
              <span className="alert-badge" style={{background:'rgba(16,185,129,0.18)',color:'#34d399'}}>OK</span>
              <span className="alert-text">Aurora Construtora — em dia</span>
            </div>
            <div className="feat-webhook">
              <span>webhook</span> → ERP, Slack, WhatsApp Business
            </div>
          </div>
        </div>

        <div className="feat-card dark">
          <div className="feat-icn"><I.shield/></div>
          <h3 className="feat-title">Sem download no dispositivo</h3>
          <p className="feat-desc">O certificado nunca é baixado para o computador do usuário. Toda operação acontece em ambiente cloud isolado, com rastreabilidade de ponta a ponta — zero risco de arquivo .pfx solto.</p>
        </div>

        <div className="feat-card dark">
          <div className="feat-icn"><I.api/></div>
          <h3 className="feat-title">API e integrações nativas</h3>
          <p className="feat-desc">Use seus certificados diretamente do nosso cofre via API REST. Integre com seu ERP, sistema de assinatura ou robô fiscal.</p>
        </div>

        <div className="feat-card dark">
          <div className="feat-icn"><I.users/></div>
          <h3 className="feat-title">Multiempresa &amp; multiusuário</h3>
          <p className="feat-desc">Organize grupos por área (Fiscal, Financeiro, Jurídico, Compras) e defina exatamente quais certificados cada grupo pode acessar. Princípio do menor privilégio aplicado por padrão.</p>
        </div>

        <div className="feat-card dark">
          <div className="feat-icn"><I.chart/></div>
          <h3 className="feat-title">Auditoria &amp; relatórios</h3>
          <p className="feat-desc">Trilha completa de quem emitiu, baixou, assinou ou revogou. Exporte relatórios prontos para LGPD, conformidade e clientes.</p>
        </div>
      </div>
    </div>
  </section>
);

const PRODUCT_TABS = [
  {
    id: 'carteira',
    label: 'Carteira',
    icon: <I.layers/>,
    title: 'Visão única da sua carteira de certificados',
    desc: 'Cada CNPJ, cada responsável, cada vencimento — em uma única tela. Filtre por empresa, status, prazo ou cliente e veja, em segundos, o que precisa da sua atenção.',
    feats: ['Importação em lote de certificados existentes', 'Filtros por status, empresa, cliente e responsável', 'Tags personalizadas e visualizações salvas'],
    visual: 'carteira',
  },
  {
    id: 'cofre',
    label: 'Cofre',
    icon: <I.lock/>,
    title: 'Cofre criptografado para toda a sua carteira de A1',
    desc: 'Cada certificado tem um único lugar de existência — com criptografia AES-256, acesso por permissão granular e log completo de cada uso. Sem arquivos .pfx espalhados em desktops.',
    feats: [
      'Criptografia AES-256 em repouso, TLS 1.3 em trânsito',
      'Permissões por usuário, empresa ou departamento',
      'Log auditável de cada acesso, download e assinatura',
    ],
    visual: 'cofre',
  },
  {
    id: 'automacao',
    label: 'Automação',
    icon: <I.bolt/>,
    title: 'Renovações que se resolvem sozinhas',
    desc: 'Defina o fluxo uma vez: D-30 dispara o alerta, D-15 abre o agendamento, D-7 coordena a emissão com a Infocomex. A partir daí, o certificado já está no cofre.',
    feats: ['Fluxos por empresa, departamento ou contrato', 'Agendamento automático com o cliente final', 'Pagamento e nota fiscal centralizados'],
    visual: 'automacao',
  },
  {
    id: 'api',
    label: 'API',
    icon: <I.api/>,
    title: 'Use o certificado direto do seu sistema',
    desc: 'Sua aplicação assina, emite nota, conecta no SEFAZ — sem nunca tocar no arquivo .pfx. O CertBloker expõe o certificado como serviço, com chaves auditadas.',
    feats: ['REST + SDKs em Node, Python, PHP, .NET', 'Webhooks de vencimento, uso e revogação', 'SLA 99,9% com infraestrutura no Brasil'],
    visual: 'api',
  },
];

const ProductVisual = ({kind}) => {
  if (kind === 'carteira') return (
    <div className="preview-card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: 'var(--bg-soft)', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', fontSize: 12, color: 'var(--ink-500)'}}>
          <I.search/> Filtrar por empresa, CNPJ ou tag…
        </div>
        <div style={{fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--ink-500)'}}>142 resultados</div>
      </div>
      <div className="cert-list">
        <div className="cert-row" style={{gridTemplateColumns: '1.6fr 0.8fr 0.8fr'}}>
          <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Aurora Construtora</div>
          <div><span className="pill pill-ok"><span className="ddot"/>Vigente</span></div>
          <div className="days">328d</div>
        </div>
        <div className="cert-row" style={{gridTemplateColumns: '1.6fr 0.8fr 0.8fr'}}>
          <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Mendes Contábil</div>
          <div><span className="pill pill-warn"><span className="ddot"/>17 dias</span></div>
          <div className="days">Renovar</div>
        </div>
        <div className="cert-row" style={{gridTemplateColumns: '1.6fr 0.8fr 0.8fr'}}>
          <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Lima &amp; Souza</div>
          <div><span className="pill pill-ok"><span className="ddot"/>Vigente</span></div>
          <div className="days">192d</div>
        </div>
        <div className="cert-row" style={{gridTemplateColumns: '1.6fr 0.8fr 0.8fr'}}>
          <div className="cert-name"><div className="ico"><I.cert size={13}/></div>Pereira Log</div>
          <div><span className="pill pill-danger"><span className="ddot"/>Expirado</span></div>
          <div className="days">−4d</div>
        </div>
      </div>
    </div>
  );
  if (kind === 'cofre') return (
    <div className="preview-card">
      <div style={{fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--navy-900)', fontWeight: 600, marginBottom: 16}}>Cofre · Aurora Construtora LTDA</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--bg-soft)', borderRadius: 8, border: '1px solid var(--line)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 13}}>
            <I.cert size={14}/> <span style={{fontWeight: 600}}>cert_Aurora_2025.pfx</span>
          </div>
          <span className="pill pill-ok" style={{fontSize: 11}}><span className="ddot"/>AES-256</span>
        </div>
        <div style={{fontSize: 12, color: 'var(--ink-500)', borderTop: '1px solid var(--line)', paddingTop: 12}}>
          <div style={{fontWeight: 600, color: 'var(--navy-900)', marginBottom: 8}}>Log de acessos</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Maria L. — assinou NF-e</span><span style={{fontFamily: 'var(--font-mono)', fontSize: 11}}>14:32</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>API → ERP Totvs — assinou</span><span style={{fontFamily: 'var(--font-mono)', fontSize: 11}}>14:29</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>João C. — visualizou</span><span style={{fontFamily: 'var(--font-mono)', fontSize: 11}}>13:51</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (kind === 'automacao') return (
    <div className="preview-card">
      <div style={{fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--navy-900)', fontWeight: 600, marginBottom: 16}}>Fluxo: Renovação cliente padrão</div>
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-time">D-60</div>
          <div className="tl-msg"><b>Alerta inicial.</b> E-mail para responsável fiscal + tag no painel.</div>
        </div>
        <div className="tl-item">
          <div className="tl-time">D-30</div>
          <div className="tl-msg"><b>Convite de agendamento.</b> Cliente escolhe horário para validação.</div>
        </div>
        <div className="tl-item">
          <div className="tl-time">D-15</div>
          <div className="tl-msg"><b>Lembrete + envio dos documentos.</b> Checklist automático.</div>
        </div>
        <div className="tl-item">
          <div className="tl-time">D-7</div>
          <div className="tl-msg"><b>Videoconferência &amp; emissão.</b> A1 entregue no cofre, sem download.</div>
        </div>
        <div className="tl-item">
          <div className="tl-time">D-0</div>
          <div className="tl-msg"><b>Substituição automática.</b> Aplicações conectadas migram via API.</div>
        </div>
      </div>
    </div>
  );
  if (kind === 'api') return (
    <div className="preview-card" style={{background: 'var(--navy-1000)', color: 'rgba(255,255,255,0.9)', borderColor: 'var(--navy-900)', fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.7}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14}}>
        <div style={{display: 'flex', gap: 6}}>
          <span style={{width: 10, height: 10, borderRadius: 5, background: '#dc2626'}}/>
          <span style={{width: 10, height: 10, borderRadius: 5, background: '#f5a623'}}/>
          <span style={{width: 10, height: 10, borderRadius: 5, background: '#10a37f'}}/>
        </div>
        <div style={{fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em'}}>POST · /v1/sign</div>
      </div>
      <div><span style={{color: '#5b8def'}}>POST</span> <span style={{color: 'rgba(255,255,255,0.85)'}}>https://api.certbloker.com.br/v1/sign</span></div>
      <div><span style={{color: '#8893ab'}}>Authorization:</span> Bearer cbk_live_••••</div>
      <div style={{marginTop: 10, color: '#8893ab'}}>{'{'}</div>
      <div style={{paddingLeft: 14}}>
        <div><span style={{color: '#f5a623'}}>"cert_id"</span>: <span style={{color: '#10a37f'}}>"crt_AB7Xn29q"</span>,</div>
        <div><span style={{color: '#f5a623'}}>"document"</span>: <span style={{color: '#10a37f'}}>"nfe_44820..."</span>,</div>
        <div><span style={{color: '#f5a623'}}>"format"</span>: <span style={{color: '#10a37f'}}>"PKCS7"</span></div>
      </div>
      <div style={{color: '#8893ab'}}>{'}'}</div>
      <div style={{marginTop: 14, fontSize: 11, color: '#10a37f'}}>✓ 200 OK — 142ms · documento assinado</div>
    </div>
  );
  return null;
};

const Product = () => {
  const [tab, setTab] = React.useState(PRODUCT_TABS[0].id);
  const active = PRODUCT_TABS.find(t => t.id === tab);
  return (
    <section className="block product" id="plataforma">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Por dentro da plataforma</div>
          <h2>Quatro pilares. Um único painel.</h2>
          <p>Carteira, cofre, alertas e API foram desenhados para conversar entre si — cada certificado tem um único lugar de existência, sempre protegido, sempre disponível.</p>
        </div>

        <div className="product-shell">
          <div className="product-tabs">
            {PRODUCT_TABS.map(t => (
              <button key={t.id} className={"product-tab " + (tab === t.id ? 'active' : '')} onClick={() => setTab(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="product-panel">
            <div className="pp-grid">
              <div>
                <h3>{active.title}</h3>
                <p>{active.desc}</p>
                <ul className="pp-feats">
                  {active.feats.map((f, i) => (
                    <li key={i}><span className="check"><I.check size={11}/></span>{f}</li>
                  ))}
                </ul>
              </div>
              <ProductVisual kind={active.visual}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Steps = () => (
  <section className="block" id="como-funciona" style={{background: 'var(--bg)'}}>
    <div className="container">
      <div className="section-head">
        <div className="kicker">Como funciona</div>
        <h2>Implantação em 5 passos, sem consultoria paralela.</h2>
        <p>Onboarding guiado pelo nosso time. Sua equipe opera com autonomia desde o primeiro dia.</p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="num">01</div>
          <h4>Administrador principal</h4>
          <p>Um usuário-chave (CEO, Diretor de TI, CFO ou Controller) é designado com perfil administrador e gerencia toda a plataforma institucionalmente.</p>
        </div>
        <div className="step">
          <div className="num">02</div>
          <h4>Cadastro dos certificados</h4>
          <p>A plataforma apenas lê os certificados A1 em ambiente criptografado AES-256. O arquivo e a senha nunca são enviados ao servidor — ficam sempre sob seu controle.</p>
        </div>
        <div className="step">
          <div className="num">03</div>
          <h4>Usuários &amp; grupos</h4>
          <p>Crie colaboradores, organize por grupos de departamento (Fiscal, Financeiro, Jurídico, Compras) e defina cirurgicamente quais certificados cada grupo pode acessar.</p>
        </div>
        <div className="step">
          <div className="num">04</div>
          <h4>Instalação do app</h4>
          <p>Um app corporativo leve é instalado no computador do colaborador (Windows). Distribuição via GPO suportada para ambientes gerenciados.</p>
        </div>
        <div className="step">
          <div className="num">05</div>
          <h4>Login seguro &amp; uso controlado</h4>
          <p>O colaborador autentica e o sistema libera apenas os certificados autorizados para seu grupo. Sem download. Sem arquivos soltos. Sem risco de vazamento.</p>
        </div>
      </div>
    </div>
  </section>
);

window.InforcomexPartner = InforcomexPartner;
window.Features = Features;
window.Product = Product;
window.Steps = Steps;
