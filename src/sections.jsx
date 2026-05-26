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
            <div>
              <img src="assets/serpro-logo.png" alt="Logo SERPRO — Serviço Federal de Processamento de Dados" style={{width: 80, height: 80, objectFit: 'contain', marginBottom: 4}}/>
              <p className="cred-sub">Autoridade Certificadora credenciada — Serviço Federal de Processamento de Dados, vinculado à União.</p>
              <span className="cred-tag">Credenciada desde 2010</span>
            </div>
          </div>

          <div className="cred-row">
            <div>
              <img src="assets/icp-logo.png" alt="Logo ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira" style={{width: 80, height: 80, objectFit: 'contain', marginBottom: 4}}/>
              <p className="cred-sub">Infraestrutura de Chaves Públicas Brasileira, sob regulamentação do ITI. Validade jurídica plena.</p>
              <span className="cred-tag">Cadeia oficial · MP 2.200-2</span>
            </div>
          </div>

          <div className="cred-row">
            <div>
              <img src="assets/infocomex-logo.png" alt="Logo Infocomex — Autoridade Certificadora parceira" style={{width: 80, height: 80, objectFit: 'contain', marginBottom: 4}}/>
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
          </div>
        </div>

        <div className="feat-card dark">
          <div className="feat-icn"><I.shield/></div>
          <h3 className="feat-title">Sem download no dispositivo</h3>
          <p className="feat-desc">O certificado nunca é baixado para o computador do usuário. Toda operação acontece em ambiente cloud isolado, com rastreabilidade de ponta a ponta — zero risco de arquivo .pfx solto.</p>
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
          <div className="step-icon"><I.building size={20}/></div>
          <div className="num">01</div>
          <h4>Administrador principal</h4>
          <p>Um gestor-chave é designado como administrador e controla toda a plataforma institucionalmente.</p>
        </div>
        <div className="step-connector"><I.arrow size={16}/></div>
        <div className="step">
          <div className="step-icon"><I.cert size={20}/></div>
          <div className="num">02</div>
          <h4>Cadastro dos certificados</h4>
          <p>A plataforma lê os certificados A1 em AES-256. O arquivo e a senha nunca saem do seu controle.</p>
        </div>
        <div className="step-connector"><I.arrow size={16}/></div>
        <div className="step">
          <div className="step-icon"><I.users size={20}/></div>
          <div className="num">03</div>
          <h4>Usuários &amp; grupos</h4>
          <p>Crie colaboradores, organize por departamento e defina quais certificados cada grupo acessa.</p>
        </div>
        <div className="step-connector"><I.arrow size={16}/></div>
        <div className="step">
          <div className="step-icon"><I.cog size={20}/></div>
          <div className="num">04</div>
          <h4>Instalação do app</h4>
          <p>Um app leve é instalado no Windows do colaborador. Distribuição via GPO para ambientes gerenciados.</p>
        </div>
        <div className="step-connector"><I.arrow size={16}/></div>
        <div className="step">
          <div className="step-icon"><I.lock size={20}/></div>
          <div className="num">05</div>
          <h4>Login seguro &amp; uso controlado</h4>
          <p>O sistema libera apenas os certificados do grupo. Sem download, sem arquivos soltos, sem vazamento.</p>
        </div>
      </div>
    </div>
  </section>
);

window.InforcomexPartner = InforcomexPartner;
window.Features = Features;
window.Steps = Steps;