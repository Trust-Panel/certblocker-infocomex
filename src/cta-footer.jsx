// AR Corporativa, Pricing, FAQ, CTA, Footer

const ArSection = () => (
  <section className="ar" id="ar">
    <div className="container ar-inner">
      <div>
        <div className="section-head" style={{textAlign: 'left', margin: 0}}>
          <div className="kicker">AR Corporativa Infocomex / CertBloker</div>
          <h2>Uma Autoridade de Registro dentro do seu próprio sistema.</h2>
          <p className="lead">A emissão acontece sob a cadeia <b style={{color: 'white'}}>SERPRO / ICP-Brasil</b>, operada pela <b style={{color: 'white'}}>Infocomex</b> — AC credenciada há mais de 15 anos — e entregue na interface do CertBloker. Você não depende de terceiros, não envia clientes para fora, e cada A1 emitido tem plena validade jurídica.</p>
        </div>
        <ul className="ar-list">
          <li>
            <span className="chk"><I.check size={11}/></span>
            <span className="txt"><b>Emissão 100% online</b> via videoconferência com validador credenciado SERPRO — sem deslocamento físico do titular (conforme MP 951 / Resolução 170).</span>
          </li>
          <li>
            <span className="chk"><I.check size={11}/></span>
            <span className="txt"><b>White-label opcional</b>: contadores e revendas podem operar a AR Infocomex sob a própria marca, com comissionamento transparente.</span>
          </li>
          <li>
            <span className="chk"><I.check size={11}/></span>
            <span className="txt"><b>Compliance ICP-Brasil</b> garantido — auditoria, logs e retenção alinhados aos requisitos do ITI e do SERPRO.</span>
          </li>
          <li>
            <span className="chk"><I.check size={11}/></span>
            <span className="txt"><b>Validação biométrica</b> integrada: prova de vida, OCR e checagem de documentos em segundos, com o mesmo padrão usado pela Infocomex.</span>
          </li>
        </ul>
        <div style={{marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
          <a href="#cta" className="btn btn-royal btn-lg">Tornar-se parceiro AR <I.arrow size={14}/></a>
          <a href="#" className="btn btn-ghost btn-lg" style={{color: 'white'}}>Baixar institucional (PDF)</a>
        </div>
      </div>

      <div className="ar-stage">
        <h4>Jornada de emissão</h4>
        <h3>5 passos · ~12 minutos</h3>
        <div className="ar-step">
          <div className="num">01</div>
          <div>
            <p className="stitle">Cadastro do titular</p>
            <p className="sdesc">CNPJ, dados do responsável legal e seleção do plano são preenchidos em formulário curto.</p>
          </div>
        </div>
        <div className="ar-step">
          <div className="num">02</div>
          <div>
            <p className="stitle">Envio de documentos</p>
            <p className="sdesc">Contrato social, RG/CNH e selfie. Nosso OCR pré-valida em tempo real.</p>
          </div>
        </div>
        <div className="ar-step">
          <div className="num">03</div>
          <div>
            <p className="stitle">Agendamento da validação</p>
            <p className="sdesc">Calendário com horários disponíveis. Pode ser imediato em horário comercial.</p>
          </div>
        </div>
        <div className="ar-step">
          <div className="num">04</div>
          <div>
            <p className="stitle">Videoconferência com validador</p>
            <p className="sdesc">Profissional credenciado conduz a sessão. Gravação retida em conformidade ICP-Brasil.</p>
          </div>
        </div>
        <div className="ar-step">
          <div className="num">05</div>
          <div>
            <p className="stitle">Certificado no cofre</p>
            <p className="sdesc">Sem download. O A1 fica disponível imediatamente para uso via painel ou API.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PRICING = [
  {
    tag: 'Profissional',
    name: 'Starter',
    desc: 'Para autônomos e pequenas empresas que gerenciam até 5 certificados.',
    amount: '149',
    per: '/mês',
    feats: [
      'Até 5 certificados A1 no cofre',
      'Alertas por e-mail em D-60, D-30, D-15',
      'Painel multiempresa básico',
      '1 usuário · suporte por chat',
    ],
    cta: 'Começar avaliação grátis',
    button: 'btn-outline',
  },
  {
    tag: 'Mais escolhido',
    name: 'Business',
    desc: 'Para contadores, escritórios e empresas com carteira até 50 certificados.',
    amount: '489',
    per: '/mês',
    feats: [
      'Até 50 certificados no cofre',
      'Alertas multicanal + WhatsApp',
      'API REST + 1.000 assinaturas/mês',
      'Renovação automatizada via AR própria',
      'Usuários ilimitados com permissões',
      'Suporte prioritário em horário comercial',
    ],
    cta: 'Agendar demonstração',
    button: 'btn-royal',
    highlight: true,
  },
  {
    tag: 'Sob medida',
    name: 'Enterprise',
    desc: 'Para revendas, contábeis de grande porte e grupos corporativos.',
    amount: 'Custom',
    per: '',
    feats: [
      'Certificados ilimitados no cofre',
      'AR white-label sob sua marca',
      'API ilimitada + SLA 99,9%',
      'SSO, auditoria avançada e SOC',
      'Customer success dedicado',
      'Onboarding e migração assistidos',
    ],
    cta: 'Falar com vendas',
    button: 'btn-outline',
  },
];

const Pricing = () => (
  <section className="block" id="planos">
    <div className="container">
      <div className="section-head">
        <div className="kicker">Planos</div>
        <h2>Preços por carteira, sem taxas por emissão.</h2>
        <p>Você paga pelo volume sob gestão — não a cada certificado emitido. Sem letras miúdas e com migração sem custo.</p>
      </div>
      <div className="pricing-grid">
        {PRICING.map((p, i) => (
          <div className={"price-card" + (p.highlight ? ' highlight' : '')} key={p.name}>
            {p.highlight && <div className="popular-tag">Recomendado</div>}
            <div className="price-tag">{p.tag}</div>
            <div className="price-name">{p.name}</div>
            <p className="price-desc">{p.desc}</p>
            <div className="price-value">
              {p.amount === 'Custom' ? (
                <span className="amount" style={{fontSize: 32}}>Sob consulta</span>
              ) : (
                <>
                  <span className="currency">R$</span>
                  <span className="amount">{p.amount}</span>
                  <span className="per">{p.per}</span>
                </>
              )}
            </div>
            <ul className="price-feats">
              {p.feats.map((f, j) => (
                <li className="price-feat" key={j}>
                  <span className="ic"><I.check size={10}/></span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta" className={"btn " + p.button}>{p.cta}</a>
          </div>
        ))}
      </div>
      <p style={{textAlign: 'center', marginTop: 32, color: 'var(--ink-500)', fontSize: 13.5}}>
        Todos os planos incluem cofre criptografado, conformidade LGPD e infraestrutura no Brasil.
      </p>
    </div>
  </section>
);

const FAQS = [
  {
    q: 'Quem está por trás do CertBloker?',
    a: 'O CertBloker é a plataforma de gestão e emissão da Infocomex — Autoridade Certificadora credenciada pelo SERPRO desde 2010 e parte da cadeia ICP-Brasil. Toda a infraestrutura, validação e emissão segue os requisitos do ITI e do Serviço Federal de Processamento de Dados.',
  },
  {
    q: 'O CertBloker é uma Autoridade Certificadora (AC)?',
    a: 'O CertBloker opera como Autoridade de Registro (AR) sob a AC Infocomex/SERPRO, dentro da cadeia ICP-Brasil. Na prática, conduzimos a validação e emissão dos certificados A1 sob as regras do ITI e do SERPRO, com plena validade jurídica.',
  },
  {
    q: 'Preciso instalar o certificado no meu computador?',
    a: 'Não. O A1 emitido pelo CertBloker fica armazenado no cofre criptografado da plataforma. Você pode usá-lo via painel, instalá-lo localmente quando precisar, ou consumi-lo direto via API a partir do seu ERP ou sistema fiscal.',
  },
  {
    q: 'A emissão por videoconferência tem validade jurídica?',
    a: 'Sim. A emissão remota de A1 por videoconferência segue a Instrução Normativa do ITI, a MP 951 e a Resolução 170, sendo equivalente, em termos de validade, à emissão presencial. Como AC credenciada SERPRO, mantemos registro audiovisual e biometria conforme exigido pela cadeia ICP-Brasil.',
  },
  {
    q: 'Posso migrar certificados que já tenho?',
    a: 'Sim. Importamos sua carteira atual sem custo na contratação — basta nos enviar os .pfx existentes, ou usar a importação em lote do painel. As datas de vencimento e responsáveis são preservados.',
  },
  {
    q: 'Como funciona o white-label para escritórios contábeis?',
    a: 'No plano Enterprise, sua contábil ou revenda pode operar a AR Infocomex/CertBloker sob marca própria — domínio, logo, comunicações e relatórios personalizados. O comissionamento por emissão é definido em contrato e o repasse acontece mensalmente.',
  },
  {
    q: 'Os dados ficam no Brasil?',
    a: 'Sim. Toda a infraestrutura, incluindo o cofre de certificados, está hospedada em datacenters em território nacional, com criptografia AES-256 em repouso e TLS 1.3 em trânsito. Estamos em conformidade com LGPD, ISO 27001 e requisitos do SERPRO.',
  },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="block product" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Perguntas frequentes</div>
          <h2>Tudo o que você precisa saber.</h2>
        </div>
        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <div key={i} className={"faq-item" + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="caret"><I.plus/></span>
              </button>
              <div className="faq-a">
                <div className="inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="block" id="cta">
    <div className="container">
      <div className="cta-block">
        <div>
          <h2 className="text-balance">Pronto para parar de perder o sono com vencimento de A1?</h2>
          <p>Agende uma demonstração de 20 minutos com nosso time. Mostramos o painel ao vivo, com a sua carteira simulada, e respondemos qualquer dúvida sobre AR, white-label e integração.</p>
        </div>
        <div className="cta-actions">
          <a href="#" className="btn btn-royal btn-lg">Agendar demonstração <I.arrow size={14}/></a>
          <a href="#" className="btn btn-outline btn-lg" style={{background: 'transparent', color: 'white', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)'}}>Falar no WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="foot-grid">
        <div>
          <a href="#" className="brand">
            <Logo size={36}/>
            <div className="brand-name">Cert<span className="blok">Bloker</span></div>
          </a>
          <p className="foot-intro">Gestão inteligente de certificados digitais A1 — operada pela <a href="https://infocomex.com.br" target="_blank" rel="noopener" style={{color: 'var(--royal-600)', fontWeight: 600}}>Infocomex</a>, Autoridade Certificadora credenciada SERPRO desde 2010, sob a cadeia ICP-Brasil.</p>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6}}>
            <SerproSeal size="sm"/>
            <IcpBrasilSeal size="sm"/>
            <InfocomexBadge size="sm"/>
          </div>
          <div style={{fontSize: 12, color: 'var(--ink-500)', marginTop: 16}}>
            Central 24h: <b style={{color: 'var(--navy-900)'}}>0800 047 1347</b>
          </div>
        </div>
        <div>
          <h5>Produto</h5>
          <ul>
            <li><a href="#produto">Plataforma</a></li>
            <li><a href="#ar">AR Corporativa</a></li>
            <li><a href="#planos">Planos &amp; preços</a></li>
            <li><a href="#">API &amp; documentação</a></li>
            <li><a href="#">Integrações</a></li>
          </ul>
        </div>
        <div>
          <h5>Para você</h5>
          <ul>
            <li><a href="#">Escritórios contábeis</a></li>
            <li><a href="#">Empresas</a></li>
            <li><a href="#">Revendas &amp; parceiros</a></li>
            <li><a href="#">Setor público</a></li>
          </ul>
        </div>
        <div>
          <h5>Grupo Infocomex</h5>
          <ul>
            <li><a href="https://infocomex.com.br" target="_blank" rel="noopener">Infocomex.com.br ↗</a></li>
            <li><a href="https://infocomex.com.br/comprar" target="_blank" rel="noopener">Loja de certificados</a></li>
            <li><a href="https://infocomex.com.br/especiais/nossas-unidades" target="_blank" rel="noopener">Unidades SC</a></li>
            <li><a href="#">Sobre o CertBloker</a></li>
            <li><a href="#">Status &amp; segurança</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 CertBloker — uma marca Infocomex · CNPJ Infocomex · Balneário Camboriú, SC</div>
        <div style={{display: 'flex', gap: 18}}>
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

window.ArSection = ArSection;
window.Pricing = Pricing;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
