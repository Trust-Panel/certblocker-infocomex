// FAQ, CTA, Footer

const FAQS = [
  {
    q: 'Quem está por trás do CertBloker?',
    a: 'O CertBloker é uma plataforma independente de gestão de certificados digitais A1. A emissão dos certificados é realizada pela Infocomex — Autoridade Certificadora credenciada pelo SERPRO desde 2010, parte da cadeia ICP-Brasil. O CertBloker cuida do cofre, alertas, automação e integrações; a Infocomex garante a emissão com validade jurídica plena.',
  },
  {
    q: 'O CertBloker é uma Autoridade Certificadora (AC)?',
    a: 'Não. O CertBloker é uma plataforma de gestão — não é AC nem AR. A Autoridade Certificadora responsável pela emissão é a Infocomex, credenciada pelo SERPRO e parte da cadeia ICP-Brasil. O CertBloker integra com a Infocomex para que você possa solicitar, renovar e gerenciar certificados A1 em um único lugar.',
  },
  {
    q: 'Preciso instalar o certificado no meu computador?',
    a: 'Não. O A1 emitido pelo CertBloker fica armazenado no cofre criptografado da plataforma. Você pode usá-lo via painel, instalá-lo localmente quando precisar, ou consumi-lo direto via API a partir do seu ERP ou sistema fiscal.',
  },
  {
    q: 'A emissão por videoconferência tem validade jurídica?',
    a: 'Sim. O processo de emissão por videoconferência é conduzido pela Infocomex, seguindo a Instrução Normativa do ITI, a MP 951 e a Resolução 170. Como AC credenciada SERPRO, a Infocomex mantém registro audiovisual e biometria conforme exigido pela cadeia ICP-Brasil. O CertBloker coordena o agendamento e entrega o certificado diretamente no cofre após a emissão.',
  },
  {
    q: 'Posso migrar certificados que já tenho?',
    a: 'Sim. Importamos sua carteira atual sem custo na contratação — basta nos enviar os .pfx existentes, ou usar a importação em lote do painel. As datas de vencimento e responsáveis são preservados.',
  },
  {
    q: 'Como funciona o white-label para escritórios contábeis?',
    a: 'Escritórios contábeis e revendas parceiras podem operar a plataforma sob marca própria — domínio, logo, comunicações e relatórios personalizados. O comissionamento por emissão é definido em contrato com a Infocomex. Entre em contato com nossa equipe para saber mais.',
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
        </div>
        <div>
          <h5>Produto</h5>
          <ul>
            <li><a href="#produto">Plataforma</a></li>
            <li><a href="#infocomex">Parceria Infocomex</a></li>
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

window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
