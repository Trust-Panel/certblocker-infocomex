// Features, Product tabs, Steps sections

const PoweredByInfocomex = () => (
  <section className="powered" id="infocomex">
    <div className="container">
      <div className="powered-grid">
        <div>
          <div className="kicker">Tecnologia Infocomex</div>
          <h2>Construído sobre 15 anos de experiência em certificação digital.</h2>
          <p>
            O CertBloker é o braço de gestão corporativa da <b>Infocomex</b> — Autoridade Certificadora credenciada pelo
            <b> SERPRO desde 2010</b> e parte da cadeia <b>ICP-Brasil</b>. Cada certificado emitido pela nossa plataforma
            carrega a mesma validade jurídica e a mesma infraestrutura confiável que já atendeu milhares de empresas
            em todo o Brasil.
          </p>
          <p style={{fontSize: 14, color: 'var(--ink-500)'}}>
            Central de atendimento <b style={{color: 'var(--navy-900)'}}>0800 047 1347</b> ·
            Unidades em Balneário Camboriú, Itajaí e Barra Velha (SC).
          </p>

          <div className="powered-stats">
            <div className="powered-stat">
              <div className="num">15+</div>
              <div className="lbl">anos como AC credenciada SERPRO</div>
            </div>
            <div className="powered-stat">
              <div className="num">+50k</div>
              <div className="lbl">certificados emitidos ICP-Brasil</div>
            </div>
            <div className="powered-stat">
              <div className="num">99,9%</div>
              <div className="lbl">disponibilidade dos serviços</div>
            </div>
          </div>
        </div>

        <div className="credentials-stage">
          <h4>Credenciamentos &amp; cadeia de confiança</h4>
          <h3>Nossas credenciais oficiais</h3>

          <div className="cred-row">
            <div className="cred-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--royal-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l9 4v6c0 4.6-3.6 8.7-9 10-5.4-1.3-9-5.4-9-10V6l9-4z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <p className="cred-title">SERPRO</p>
              <p className="cred-sub">Autoridade Certificadora credenciada — Serviço Federal de Processamento de Dados, autoridade certificadora vinculada à União.</p>
              <span className="cred-tag">Credenciada desde 2010</span>
            </div>
          </div>

          <div className="cred-row">
            <div className="cred-icon">
              <svg viewBox="0 0 32 32" width="30" height="30">
                <defs>
                  <linearGradient id="icpFlag" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1f9d3d"/>
                    <stop offset="50%" stopColor="#f7d046"/>
                    <stop offset="100%" stopColor="#3a72ff"/>
                  </linearGradient>
                </defs>
                <path d="M16 5 L27 26 L5 26 Z" fill="url(#icpFlag)"/>
                <path d="M16 5 L27 26 L5 26 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              </svg>
            </div>
            <div>
              <p className="cred-title">ICP-Brasil</p>
              <p className="cred-sub">Infraestrutura de Chaves Públicas Brasileira, sob regulamentação do ITI (Instituto Nacional de Tecnologia da Informação). Validade jurídica plena.</p>
              <span className="cred-tag">Cadeia oficial · MP 2.200-2</span>
            </div>
          </div>

          <div className="cred-row">
            <div className="cred-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--royal-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="M3 9h18M7 14h6M7 17h4"/>
                <circle cx="17" cy="16" r="1.5" fill="var(--royal-400)" stroke="none"/>
              </svg>
            </div>
            <div>
              <p className="cred-title">LGPD &amp; ISO 27001</p>
              <p className="cred-sub">Aderência à Lei Geral de Proteção de Dados e práticas de segurança da informação no padrão ISO/IEC 27001. Dados hospedados em território nacional.</p>
              <span className="cred-tag">Compliance contínuo</span>
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
        <p>Acabe com o controle por planilha, e-mails perdidos e idas presenciais à AC. O CertBloker concentra emissão, armazenamento, renovação e auditoria em uma plataforma única — pronta para uso corporativo e escritórios contábeis.</p>
      </div>

      <div className="features-grid">
        <div className="feat-card dark">
          <div>
            <div className="feat-icn"><I.bell/></div>
            <h3 className="feat-title">Alertas inteligentes de vencimento</h3>
            <p className="feat-desc">Notificações por e-mail, WhatsApp e webhook em D-60, D-30, D-15 e D-1. Configure responsáveis distintos por empresa, departamento ou cliente.</p>
          </div>
          <div className="feat-visual">
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.7)', padding: '4px 0'}}>
              <span style={{width: 8, height: 8, borderRadius: 4, background: '#f5a623'}}/>
              <span style={{fontWeight: 600, color: 'white'}}>D-30</span>
              <span>Mendes Contábil — alerta a Maria L.</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.7)', padding: '4px 0'}}>
              <span style={{width: 8, height: 8, borderRadius: 4, background: '#5b8def'}}/>
              <span style={{fontWeight: 600, color: 'white'}}>D-60</span>
              <span>Vidotti EIRELI — alerta ao contador</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.7)', padding: '4px 0'}}>
              <span style={{width: 8, height: 8, borderRadius: 4, background: '#dc2626'}}/>
              <span style={{fontWeight: 600, color: 'white'}}>D-1</span>
              <span>Pereira Log — alerta a 3 destinatários</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.7)', padding: '4px 0'}}>
              <span style={{width: 8, height: 8, borderRadius: 4, background: '#10a37f'}}/>
              <span style={{fontWeight: 600, color: 'white'}}>OK</span>
              <span>Aurora Construtora — em dia</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: 10}}>
              webhook → ERP, Slack, Whatsapp Business
            </div>
          </div>
        </div>

        <div className="feat-card">
          <div className="feat-icn"><I.lock/></div>
          <h3 className="feat-title">Cofre criptografado</h3>
          <p className="feat-desc">Certificados armazenados em cofre com criptografia AES-256, acesso por permissionamento granular e log completo de cada uso.</p>
        </div>

        <div className="feat-card">
          <div className="feat-icn"><I.refresh/></div>
          <h3 className="feat-title">Renovação automatizada</h3>
          <p className="feat-desc">Da videoconferência à entrega, sem sair do sistema. Toda a renovação flui dentro da nossa AR — incluindo validação biométrica.</p>
        </div>

        <div className="feat-card">
          <div className="feat-icn"><I.api/></div>
          <h3 className="feat-title">API e integrações nativas</h3>
          <p className="feat-desc">Use seus certificados diretamente do nosso cofre via API REST. Integre com seu ERP, sistema de assinatura ou robô fiscal.</p>
        </div>

        <div className="feat-card">
          <div className="feat-icn"><I.users/></div>
          <h3 className="feat-title">Multiempresa &amp; multiusuário</h3>
          <p className="feat-desc">Pensado para escritórios contábeis: gerencie centenas de CNPJs, atribua responsáveis e segmente acessos por equipe ou cliente.</p>
        </div>

        <div className="feat-card">
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
    id: 'emissao',
    label: 'Emissão A1',
    icon: <I.signature/>,
    title: 'Emita um novo A1 em minutos, sem sair do navegador',
    desc: 'A emissão acontece dentro da plataforma, via nossa Autoridade de Registro. Videoconferência com validador credenciado, biometria facial e entrega direta no cofre.',
    feats: ['Validação por videoconferência 100% remota', 'Verificação biométrica e documental automática', 'Entrega imediata no cofre — sem download de token'],
    visual: 'emissao',
  },
  {
    id: 'automacao',
    label: 'Automação',
    icon: <I.bolt/>,
    title: 'Renovações que se resolvem sozinhas',
    desc: 'Defina o fluxo uma vez: D-60 dispara o alerta, D-30 abre o agendamento, D-7 emite e arquiva. Você só precisa aparecer para validar — o resto é nosso.',
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
  if (kind === 'emissao') return (
    <div className="preview-card">
      <div style={{fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--royal-600)', fontWeight: 600, marginBottom: 6}}>EMITIR CERTIFICADO A1 · ETAPA 3 DE 4</div>
      <div style={{fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--navy-900)', fontWeight: 600, marginBottom: 14}}>Videoconferência de validação</div>
      <div className="upload-zone" style={{padding: 18, background: 'var(--navy-900)', borderColor: 'transparent', color: 'white'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12}}>
          <div style={{aspectRatio: '4/3', background: 'linear-gradient(135deg, #2a3a60, #1a2547)', borderRadius: 8, display: 'grid', placeItems: 'center', fontSize: 10, color: 'rgba(255,255,255,0.5)'}}>VALIDADOR</div>
          <div style={{aspectRatio: '4/3', background: 'linear-gradient(135deg, #1f5bff, #3a72ff)', borderRadius: 8, display: 'grid', placeItems: 'center', fontSize: 10, color: 'white', fontWeight: 600}}>VOCÊ · AO VIVO</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(255,255,255,0.7)'}}>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 6}}>
            <span style={{width: 6, height: 6, borderRadius: 3, background: '#dc2626', display: 'inline-block'}}/>
            REC · 02:14
          </span>
          <span>Biometria: <strong style={{color: '#10a37f'}}>Aprovada</strong></span>
        </div>
      </div>
      <div style={{display: 'flex', gap: 8, marginTop: 14, fontSize: 12, color: 'var(--ink-500)'}}>
        <span style={{padding: '4px 8px', background: 'var(--royal-50)', color: 'var(--royal-600)', borderRadius: 6, fontWeight: 600}}>✓ Documentos</span>
        <span style={{padding: '4px 8px', background: 'var(--royal-50)', color: 'var(--royal-600)', borderRadius: 6, fontWeight: 600}}>✓ Identidade</span>
        <span style={{padding: '4px 8px', background: 'var(--royal-600)', color: 'white', borderRadius: 6, fontWeight: 600}}>● Validação</span>
        <span style={{padding: '4px 8px', background: 'var(--bg-soft)', color: 'var(--ink-500)', borderRadius: 6}}>Entrega</span>
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
          <p>Carteira, emissão, automação e API foram desenhadas para conversar entre si — cada certificado tem um único lugar de existência, do momento que é emitido até a expiração.</p>
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
  <section className="block" style={{background: 'var(--bg)'}}>
    <div className="container">
      <div className="section-head">
        <div className="kicker">Onboarding em 4 passos</div>
        <h2>Da assinatura ao primeiro A1 emitido em menos de uma semana.</h2>
        <p>Migração assistida com nosso time, sem interromper sua operação fiscal.</p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="num">01 · Dia 1</div>
          <h4>Diagnóstico</h4>
          <p>Mapeamos sua carteira atual, sistemas conectados e responsáveis. Sem custo de setup.</p>
        </div>
        <div className="step">
          <div className="num">02 · Dia 2</div>
          <h4>Importação em lote</h4>
          <p>Migramos todos os certificados vigentes para o cofre, preservando datas e responsáveis.</p>
        </div>
        <div className="step">
          <div className="num">03 · Dia 3–5</div>
          <h4>Fluxos &amp; integrações</h4>
          <p>Configuramos os alertas, integramos seu ERP e treinamos a equipe em uma sessão de 1h.</p>
        </div>
        <div className="step">
          <div className="num">04 · Dia 5+</div>
          <h4>Primeira emissão</h4>
          <p>Emita seu primeiro A1 pela nossa AR. A partir daqui, todo vencimento é resolvido sozinho.</p>
        </div>
      </div>
    </div>
  </section>
);

window.PoweredByInfocomex = PoweredByInfocomex;
window.Features = Features;
window.Product = Product;
window.Steps = Steps;
