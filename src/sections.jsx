// Features, Product tabs, Steps sections

// Elos da cadeia de confiança, do órgão federal até a plataforma.
const TRUST_CHAIN = [
  {
    logo: 'assets/serpro-logo.png', alt: 'SERPRO',
    desc: 'Serviço Federal de Processamento de Dados, credencia e fiscaliza a Autoridade Certificadora.',
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

const PLAT_CARDS = [
  { tag: 'STATUS', title: 'Visão instantânea', desc: 'Válidos, expirando, expirados e totais, em cartões claros, com semáforo de criticidade.' },
  { tag: 'CERTIFICADOS RECENTES', title: 'Tabela operacional', desc: 'Tipo, emissor, validade e status de cada certificado, com filtros e exportação rápida.' },
  { tag: 'GESTÃO', title: 'Clientes, usuários, grupos', desc: 'Organize por cliente, defina grupos e controle permissões a partir de um menu lateral único.' },
];
const Platform = () => (
  <section className="block platform" id="produto">
    <div className="container">
      <div className="section-head">
        <div className="kicker-gold center"><span className="rule"/>A PLATAFORMA<span className="rule"/></div>
        <h2>Um painel único para toda a gestão de certificados digitais.</h2>
        <p>Visão consolidada de status, vencimentos, usuários e auditoria, sem planilhas, sem e-mails perdidos.</p>
      </div>
      <div className="browser">
        <div className="browser-bar">
          <div className="dots"><span/><span/><span/></div>
          <div className="browser-url"><I.lock size={11}/> certbloker.com.br/dashboard</div>
        </div>
        <img className="browser-shot" src="assets/dashboard.jpeg" alt="Dashboard do CertBlocker com status, certificados e validade"/>
      </div>
      <div className="plat-cards">
        {PLAT_CARDS.map((c, i) => (
          <div className="plat-card" key={i}>
            <div className="plat-tag">{c.tag}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RECURSOS = [
  { n: '01', cat: 'ALERTAS', icon: 'clock', title: 'Alertas de vencimento e prazos de renovação',
    desc: 'Notificações automáticas enviadas com antecedência configurável. Seu time renova no momento exato, nunca antes, nunca tarde demais.',
    bullets: ['Alertas personalizáveis por período (30/15/7 dias)', 'Notificações via e-mail', 'Dashboard consolidado com linha do tempo'] },
  { n: '02', cat: 'SEGURANÇA', icon: 'lock', title: 'Uso seguro sem armazenamento local',
    desc: 'O certificado nunca é baixado na máquina do colaborador. Toda operação acontece em ambiente isolado na nuvem, com rastreabilidade ponta-a-ponta.',
    bullets: ['Zero arquivos locais na máquina do usuário', 'Execução direta via app autenticado', 'Eliminação completa de risco de cópia'] },
  { n: '03', cat: 'GOVERNANÇA', icon: 'users', title: 'Permissões por usuário e por grupo',
    desc: 'Controle granular com princípio de menor privilégio. Defina quem pode ver, usar e gerenciar cada certificado por departamento, cargo ou projeto.',
    bullets: ['Grupos por área (Fiscal, Financeiro, Compras)', 'Níveis de acesso totalmente customizáveis'] },
  { n: '04', cat: 'AUDITORIA', icon: 'doc', title: 'Logs completos e restrição de acesso',
    desc: 'Cada ação é registrada com identidade, timestamp e contexto. Você sabe quem acessou, de onde, quando e para qual finalidade.',
    bullets: ['Trilha de auditoria imutável'] },
];
const Features = () => (
  <section className="block recursos" id="recursos">
    <div className="container">
      <div className="recursos-head">
        <div className="kicker-blue">RECURSOS PRINCIPAIS</div>
        <h2>Tudo que os seus departamentos de TI, Contabilidade e Jurídico precisam.</h2>
        <p>Infraestrutura projetada para empresas que não podem parar por causa de um certificado vencido ou vazado.</p>
      </div>
      <div className="recursos-grid">
        {RECURSOS.map((r) => (
          <div className="recurso" key={r.n}>
            <div className="recurso-icn">{I[r.icon]({size:24})}</div>
            <div className="recurso-cat">{r.n} — {r.cat}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <ul className="recurso-bullets">
              {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Enterprise = () => (
  <section className="block enterprise">
    <div className="container enterprise-grid">
      <div className="photo-collage">
        <figure className="pc-main">
          <img src="assets/depo-ceo.jpg" alt="CEO em ambiente executivo"/>
          <figcaption>CEO · Gestão Executiva</figcaption>
        </figure>
        <figure className="pc-top">
          <img src="assets/depo-fiscal.jpeg" alt="Equipe fiscal em reunião"/>
          <figcaption>Equipe Fiscal</figcaption>
        </figure>
        <figure className="pc-bot">
          <img src="assets/depo-financeiro.jpg" alt="Departamento financeiro em reunião"/>
          <figcaption>Departamento Financeiro</figcaption>
        </figure>
      </div>
      <div className="enterprise-copy">
        <div className="kicker-gold">— Feito para empresas sérias</div>
        <h2>Quando o seu negócio depende de conformidade, o certificado digital não é detalhe.</h2>
        <p>Um certificado vencido pode interromper a emissão de notas, bloquear processos judiciais, travar pagamentos e gerar multas tributárias significativas. A CertBlocker foi desenhada junto com equipes de Controladoria, TI e Jurídico de médias e grandes empresas para eliminar esse risco, sem adicionar atrito operacional.</p>
        <blockquote className="quote-box">
          <p>"Migramos o controle de 80 certificados para a CertBlocker em duas semanas. Desde então, nunca mais tivemos um vencimento silencioso. A equipe fiscal recuperou o foco em estratégia."</p>
          <cite>DIRETORIA DE TI — GRUPO CORPORATIVO BRASILEIRO</cite>
        </blockquote>
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

window.Platform = Platform;
window.Enterprise = Enterprise;
window.InforcomexPartner = InforcomexPartner;
window.Features = Features;
window.Steps = Steps;