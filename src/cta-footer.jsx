// FAQ, CTA, Footer

const FAQS = [
  {
    q: 'O que é a CertBlocker?',
    a: 'A CertBlocker é uma plataforma corporativa de gestão de certificados digitais A1. Ela centraliza seus certificados em um cofre criptografado, com alertas de vencimento, controle de acesso por usuário e grupo e trilha de auditoria. A emissão dos certificados A1 é feita pela Infocomex, Autoridade Certificadora credenciada pelo SERPRO desde 2010, parte da cadeia ICP-Brasil.',
  },
  {
    q: 'Meus certificados ficam seguros na plataforma?',
    a: 'Sim. A plataforma realiza apenas a leitura dos certificados A1 em ambiente criptografado AES-256, o mesmo padrão usado por bancos. O arquivo e a senha nunca são armazenados em nossos servidores, e o certificado nunca é baixado na máquina do colaborador. Toda operação acontece com rastreabilidade ponta-a-ponta.',
  },
  {
    q: 'Como funciona o controle de acesso por grupos?',
    a: 'Você organiza seus colaboradores em grupos por área (Fiscal, Financeiro, Jurídico, Compras etc.) e define quais certificados cada grupo pode visualizar e utilizar. O acesso segue o princípio do menor privilégio, e toda alteração de permissão fica registrada na trilha de auditoria.',
  },
  {
    q: 'Funciona no Windows?',
    a: 'Sim. O aplicativo corporativo é compatível com Windows. Não há suporte a macOS ou Linux neste momento.',
  },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(3);
  return (
    <section className="block faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <div className="kicker-gold">— PERGUNTAS FREQUENTES</div>
          <h2>Tudo o que você precisa saber antes de decidir.</h2>
          <p>Respostas diretas para as dúvidas mais comuns de diretores de TI, controladores e gestores fiscais.</p>
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

// Dados de contato, edite aqui para atualizar os cards da seção.
const CONTACT = {
  email: 'contato@infocomex.com.br',
  emailNote: 'Resposta em até 2h úteis',
  whatsapp: '+55 0800 047 1347',
  whatsappNote: 'Atendimento dedicado',
};

const ContactSection = () => {
  // Somente visual por enquanto. Para ligar ao WhatsApp/backend depois,
  // troque o preventDefault por um window.open(`https://wa.me/55...`) ou um POST.
  const handleSubmit = (e) => { e.preventDefault(); };

  return (
    <section className="block contact" id="contato">
      <div className="container">
        <div className="contact-grid">
          {/* Coluna esquerda, convite + contatos */}
          <div className="contact-intro">
            <div className="kicker-gold">— Contato comercial</div>
            <h2 className="text-balance">Transforme a gestão de certificados da sua empresa.</h2>
            <p>Fale com nossa equipe e descubra em 30 minutos como reduzir risco operacional, eliminar multas e devolver tempo para o seu time.</p>

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
            </div>
          </div>

          {/* Coluna direita, card de formulário (visual) */}
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

              <button type="submit" className="btn btn-primary btn-lg contact-submit">
                Enviar via WhatsApp <I.arrow size={14}/>
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
          <p className="foot-intro">A plataforma corporativa mais confiável para gerenciamento de certificados digitais A1 no Brasil.</p>
        </div>
        <div>
          <h5>Produto</h5>
          <ul>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#infocomex">Parceiros</a></li>
            <li><a href="#">Imprensa</a></li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">LGPD</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 CERTBLOCKER. TODOS OS DIREITOS RESERVADOS.</div>
        <div>@CERTBLOCKER</div>
      </div>
    </div>
  </footer>
);

window.FAQ = FAQ;
window.ContactSection = ContactSection;
window.Footer = Footer;
