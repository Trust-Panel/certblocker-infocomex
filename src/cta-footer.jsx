// FAQ, CTA, Footer

const FAQS = [
  {
    q: 'Qual tecnologia está por trás da plataforma CertBlocker?',
    a: 'O CertBlocker é desenvolvido sobre a tecnologia da TrustPanel, plataforma especializada em gestão de certificados digitais. A emissão dos certificados A1 é realizada pela Infocomex, Autoridade Certificadora credenciada pelo SERPRO desde 2010, parte da cadeia ICP-Brasil. O CertBlocker concentra cofre, alertas, auditoria e integrações; a Infocomex garante a emissão com plena validade jurídica.',
  },
  {
    q: 'Minha carteira de certificados está protegida dentro da plataforma?',
    a: 'Sim. A plataforma realiza apenas a leitura dos certificados A1 em ambiente criptografado AES-256 — o mesmo padrão usado por bancos e instituições financeiras. O arquivo e a senha nunca são enviados nem armazenados em nossos servidores, e os certificados também nunca são baixados na máquina do colaborador. Toda operação acontece com rastreabilidade ponta-a-ponta.',
  },
  {
    q: 'Como é feito o controle de quem pode usar cada certificado?',
    a: 'Você organiza seus colaboradores em grupos por área (Fiscal, Financeiro, Jurídico, Compras etc.) e define quais certificados cada grupo pode visualizar e utilizar. O acesso segue o princípio do menor privilégio: ninguém vê nem usa certificados fora do seu grupo. Alterações de permissão ficam registradas na trilha de auditoria.',
  },
  {
    q: 'A plataforma é compatível com Windows?',
    a: 'Sim, é compatível com Windows. Não há suporte a macOS ou Linux neste momento.',
  },
  {
    q: 'O CertBlocker está adequado à LGPD?',
    a: 'Sim. O CertBlocker foi desenvolvido em total conformidade com a Lei Geral de Proteção de Dados. Todos os dados são tratados com segurança, transparência e respeito à privacidade dos usuários, com contratos e DPAs disponíveis sob demanda.',
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

// Dados de contato — edite aqui para atualizar os cards da seção.
const CONTACT = {
  email: 'comercial@certbloker.com.br',
  emailNote: 'Resposta em até 2h úteis',
  whatsapp: '(66) 99262-3898',
  whatsappNote: 'Atendimento dedicado',
  hours: 'Segunda a Sexta — 8h às 18h (Brasília)',
};

const ContactSection = () => {
  // Somente visual por enquanto. Para ligar ao WhatsApp/backend depois,
  // troque o preventDefault por um window.open(`https://wa.me/55...`) ou um POST.
  const handleSubmit = (e) => { e.preventDefault(); };

  return (
    <section className="block contact" id="contato">
      <div className="container">
        <div className="contact-grid">
          {/* Coluna esquerda — convite + contatos */}
          <div className="contact-intro">
            <div className="kicker">— Contato comercial</div>
            <h2 className="text-balance">Vamos transformar a gestão de A1 da sua empresa.</h2>
            <p>Fale com nosso time e veja em 20 minutos como reduzir risco operacional, eliminar multas e devolver tempo para TI, Contabilidade e Jurídico.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icn"><I.mail/></div>
                <div className="contact-card-body">
                  <h4>E-mail</h4>
                  <a href={`mailto:${CONTACT.email}`} className="contact-card-value">{CONTACT.email}</a>
                  <span className="contact-card-sub">{CONTACT.emailNote}</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icn"><I.phone/></div>
                <div className="contact-card-body">
                  <h4>WhatsApp comercial</h4>
                  <span className="contact-card-value">{CONTACT.whatsapp}</span>
                  <span className="contact-card-sub">{CONTACT.whatsappNote}</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icn"><I.clock/></div>
                <div className="contact-card-body">
                  <h4>Horário institucional</h4>
                  <span className="contact-card-value">{CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita — card de formulário (visual) */}
          <div className="contact-form">
            <h3>Solicite uma demonstração</h3>
            <p className="contact-form-sub">Preencha e retornaremos em até 2 horas úteis.</p>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="cf-empresa">Empresa</label>
                <input id="cf-empresa" type="text" placeholder="Razão social"/>
              </div>
              <div className="field">
                <label htmlFor="cf-nome">Nome completo</label>
                <input id="cf-nome" type="text" placeholder="Seu nome"/>
              </div>
              <div className="field">
                <label htmlFor="cf-email">E-mail corporativo</label>
                <input id="cf-email" type="email" placeholder="nome@empresa.com.br"/>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Mensagem</label>
                <textarea id="cf-msg" rows={4} placeholder="Conte-nos sobre o contexto da sua empresa..."/>
              </div>

              <button type="submit" className="btn btn-royal btn-lg contact-submit">
                Solicitar demonstração <I.arrow size={14}/>
              </button>
            </form>

            <div className="contact-form-foot">
              <I.lock size={13}/> Dados protegidos pela LGPD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="container">
      <div className="foot-grid">
        <div>
          <a href="#" className="brand">
            <Logo size={56}/>
          </a>
          <p className="foot-intro">Gestão inteligente de certificados digitais A1 — operada pela <a href="https://infocomex.com.br" target="_blank" rel="noopener" style={{color: 'var(--royal-600)', fontWeight: 600}}>Infocomex</a>, Autoridade Certificadora credenciada SERPRO desde 2010, sob a cadeia ICP-Brasil.</p>
        </div>
        <div>
          <h5>Navegação</h5>
          <ul>
            <li><a href="#produto">Produto</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#infocomex">Infocomex</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5>Grupo Infocomex</h5>
          <ul>
            <li><a href="https://infocomex.com.br" target="_blank" rel="noopener">Infocomex.com.br ↗</a></li>
            <li><a href="https://infocomex.com.br/comprar" target="_blank" rel="noopener">Loja de certificados</a></li>
            <li><a href="https://infocomex.com.br/especiais/nossas-unidades" target="_blank" rel="noopener">Unidades SC</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 CertBlocker — Todos os direitos reservados</div>
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
window.ContactSection = ContactSection;
window.Footer = Footer;
