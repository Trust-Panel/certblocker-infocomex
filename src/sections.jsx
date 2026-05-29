// Features, Product tabs, Steps sections

// Elos da cadeia de confiança — do órgão federal até a plataforma.
const TRUST_CHAIN = [
  {
    logo: 'assets/serpro-logo.png', alt: 'SERPRO',
    desc: 'Serviço Federal de Processamento de Dados — credencia e fiscaliza a Autoridade Certificadora.',
    tag: 'Órgão federal',
  },
  {
    logo: 'assets/icp-logo.png', alt: 'ICP-Brasil',
    desc: 'Infraestrutura de Chaves Públicas Brasileira. Dá validade jurídica plena aos certificados (MP 2.200-2).',
    tag: 'Cadeia oficial',
  },
  {
    logo: 'assets/infocomex-logo.png', alt: 'Infocomex',
    desc: 'Autoridade Certificadora que emite os certificados A1 da plataforma, credenciada SERPRO há mais de 15 anos.',
    tag: 'AC desde 2010', key: true,
  },
  {
    logo: 'assets/certbloker-logo.png', alt: 'CertBlocker', brand: true,
    desc: 'Plataforma que gerencia tudo: cofre criptografado, alertas de vencimento, auditoria e controle de acesso.',
    tag: 'Sua camada de gestão', key: true,
  },
];

const InforcomexPartner = () => (
  <section className="powered" id="infocomex">
    <div className="container">
      <div className="powered-grid">
        <div>
          <div className="kicker">Grupo Infocomex</div>
          <h2>Certificados emitidos por uma Autoridade Certificadora. Gerenciados pelo CertBlocker.</h2>
          <p>
            O CertBlocker é a plataforma de gestão do <b>Grupo Infocomex</b>. A emissão dos seus certificados A1
            é feita pela <b>Infocomex</b>,  Autoridade Certificadora credenciada pelo <b>SERPRO desde 2010</b> e
            parte da cadeia <b>ICP-Brasil</b>. Você ganha cofre, alertas e auditoria sobre a mesma autoridade que
            emite com validade jurídica plena há mais de 15 anos.
          </p>

          <div className="powered-stats">
            <div className="powered-stat">
              <div className="num">2010</div>
              <div className="lbl">Credenciada SERPRO</div>
            </div>
            <div className="powered-stat">
              <div className="num">+15</div>
              <div className="lbl">anos emitindo certificados A1</div>
            </div>
            <div className="powered-stat">
              <div className="num">100%</div>
              <div className="lbl">infraestrutura nacional</div>
            </div>
          </div>

          <div style={{marginTop: 28}}>
            <a href="https://infocomex.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-royal btn-lg">
              Conhecer a Infocomex <I.arrow size={14}/>
            </a>
          </div>
        </div>

        <div className="credentials-stage">
          <h4>Cadeia de confiança</h4>
          <h3>De onde vem a validade jurídica</h3>

          <div className="trust-chain">
            {TRUST_CHAIN.map((n, i) => (
              <div key={i} className={"chain-node" + (n.key ? ' is-key' : '')}>
                <div className="chain-rail"><span className="chain-dot"/></div>
                <div className="chain-main">
                  <span className={"chain-plate" + (n.brand ? ' brand' : '')}>
                    <img src={n.logo} alt={n.alt}/>
                  </span>
                  <p className="chain-desc">{n.desc}</p>
                  <span className="cred-tag">{n.tag}</span>
                </div>
              </div>
            ))}
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
        {/* Alertas */}
        <div className="feat-card dark">
          <div className="feat-icn"><I.bell/></div>
          <h3 className="feat-title">Alertas inteligentes de vencimento</h3>
          <p className="feat-desc">Notificações automáticas por e-mail com prazo configurável (D-30, D-15 e D-7). Dashboard consolidado com linha do tempo — seu time renova no momento certo, nunca antes, nunca depois.</p>
          <div className="feat-visual">
            <div className="feat-visual-title">Painel de alertas</div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#f59e0b'}}/>
              <span className="alert-badge" style={{background:'rgba(245,158,11,0.18)',color:'#fbbf24'}}>D-30</span>
              <span className="alert-text">Mendes Contábil — alerta a Maria L.</span>
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
          </div>
        </div>

        {/* Sem download */}
        <div className="feat-card dark">
          <div className="feat-icn"><I.shield/></div>
          <h3 className="feat-title">Sem download no dispositivo</h3>
          <p className="feat-desc">O certificado nunca é baixado para o computador do usuário. Toda operação acontece em ambiente cloud isolado, com rastreabilidade de ponta a ponta — zero risco de arquivo .pfx solto.</p>
          <div className="feat-visual">
            <div className="feat-visual-title">Segurança do cofre</div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#10b981'}}/>
              <span className="alert-text">Cofre cloud isolado</span>
              <span className="feat-chip ok">AES-256</span>
            </div>
            <div className="feat-alert-row">
              <span className="alert-dot" style={{background:'#10b981'}}/>
              <span className="alert-text">Arquivos .pfx no dispositivo</span>
              <span className="feat-chip ok">0</span>
            </div>
          </div>
        </div>

        {/* Multiempresa */}
        <div className="feat-card dark">
          <div className="feat-icn"><I.users/></div>
          <h3 className="feat-title">Multiempresa &amp; multiusuário</h3>
          <p className="feat-desc">Organize grupos por área (Fiscal, Financeiro, Jurídico, Compras) e defina exatamente quais certificados cada grupo pode acessar. Princípio do menor privilégio aplicado por padrão.</p>
          <div className="feat-visual">
            <div className="feat-visual-title">Grupos de acesso</div>
            <div className="feat-chips">
              <span className="feat-chip">Fiscal</span>
              <span className="feat-chip">Financeiro</span>
              <span className="feat-chip">Jurídico</span>
              <span className="feat-chip">Compras</span>
              <span className="feat-chip ghost">+ grupos</span>
            </div>
          </div>
        </div>

        {/* Auditoria */}
        <div className="feat-card dark">
          <div className="feat-icn"><I.chart/></div>
          <h3 className="feat-title">Auditoria &amp; relatórios</h3>
          <p className="feat-desc">Trilha completa de quem emitiu, baixou, assinou ou revogou. Exporte relatórios prontos para LGPD, conformidade e clientes.</p>
          <div className="feat-visual">
            <div className="feat-visual-title">Trilha de auditoria</div>
            <div className="feat-alert-row">
              <span className="feat-act emit">emitiu</span>
              <span className="alert-text">Maria L. · Cert #4471</span>
              <span className="feat-time">14:32</span>
            </div>
            <div className="feat-alert-row">
              <span className="feat-act down">baixou</span>
              <span className="alert-text">João P. · Cert #2210</span>
              <span className="feat-time">09:10</span>
            </div>
            <div className="feat-alert-row">
              <span className="feat-act revoke">revogou</span>
              <span className="alert-text">Admin · Cert #1180</span>
              <span className="feat-time">ontem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
          <div className="step-node">01</div>
          <div className="step-card">
            <div className="step-icon"><I.building size={22}/></div>
            <h4>Administrador principal</h4>
            <p>Um gestor-chave é designado como administrador e controla toda a plataforma institucionalmente.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-node">02</div>
          <div className="step-card">
            <div className="step-icon"><I.cert size={22}/></div>
            <h4>Cadastro dos certificados</h4>
            <p>A plataforma lê os certificados A1 em AES-256. O arquivo e a senha nunca saem do seu controle.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-node">03</div>
          <div className="step-card">
            <div className="step-icon"><I.users size={22}/></div>
            <h4>Usuários &amp; grupos</h4>
            <p>Crie colaboradores, organize por departamento e defina quais certificados cada grupo acessa.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-node">04</div>
          <div className="step-card">
            <div className="step-icon"><I.cog size={22}/></div>
            <h4>Instalação do app</h4>
            <p>Um app leve é instalado no Windows do colaborador. Distribuição via GPO para ambientes gerenciados.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-node">05</div>
          <div className="step-card">
            <div className="step-icon"><I.lock size={22}/></div>
            <h4>Login seguro &amp; uso controlado</h4>
            <p>O sistema libera apenas os certificados do grupo. Sem download, sem arquivos soltos, sem vazamento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.InforcomexPartner = InforcomexPartner;
window.Features = Features;
window.Steps = Steps;