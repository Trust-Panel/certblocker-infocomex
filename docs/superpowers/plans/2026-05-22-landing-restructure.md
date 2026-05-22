# CertBlocker Landing Page — Reestruturação — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar a LP para deixar claro que CertBlocker é plataforma de gestão de A1, remover seções de AR Corporativa e Planos, criar seção de parceria Infocomex com logos reais e melhorar SEO.

**Architecture:** Landing page estática em React (CDN + Babel standalone). Sem build step — os arquivos `.jsx` são processados pelo Babel no browser. Componentes são expostos via `window.*` para permitir carregamento em múltiplos `<script>` tags.

**Tech Stack:** HTML5, React 18 (CDN), Babel Standalone 7, CSS custom properties.

> **Para servir localmente:** `python -m http.server 8080` na raiz do projeto, depois acesse `http://localhost:8080`.

---

## Mapa de Arquivos

| Arquivo | O que muda |
|---|---|
| `CertBlocker Landing.html` → `index.html` | Renomear; atualizar script tag; adicionar SEO |
| `src/ar-pricing.jsx` → `src/cta-footer.jsx` | Renomear; remover `ArSection` + `PRICING` + `Pricing`; corrigir FAQs; corrigir Footer nav; atualizar `window.*` exports |
| `src/app.jsx` | Remover `<ArSection/>` e `<Pricing/>`; renomear `<PoweredByInfocomex/>` → `<InforcomexPartner/>`; ajustar ordem |
| `src/hero.jsx` | Corrigir subtitle do Hero; corrigir copy do eyebrow; remover nav links `#ar` e `#planos` |
| `src/sections.jsx` | Corrigir copy de Features e Steps; substituir tab "Emissão A1" por "Cofre"; substituir componente `PoweredByInfocomex` por `InforcomexPartner` |
| `src/seals.jsx` | Substituir SVGs por `<img>` reais em `SerproSeal` e `IcpBrasilSeal` |

---

## Task 1: Renomear arquivos

**Files:**
- Rename: `CertBlocker Landing.html` → `index.html`
- Rename: `src/ar-pricing.jsx` → `src/cta-footer.jsx`

- [ ] **Step 1: Renomear via git mv**

```bash
git mv "CertBlocker Landing.html" index.html
git mv src/ar-pricing.jsx src/cta-footer.jsx
```

- [ ] **Step 2: Atualizar a tag `<script>` em `index.html`**

Localizar a linha:
```html
<script type="text/babel" src="src/ar-pricing.jsx"></script>
```
Substituir por:
```html
<script type="text/babel" src="src/cta-footer.jsx"></script>
```

- [ ] **Step 3: Verificar no browser**

Servir o projeto (`python -m http.server 8080`) e abrir `http://localhost:8080`. A página deve carregar normalmente sem erros no console.

- [ ] **Step 4: Commit**

```bash
git add index.html src/cta-footer.jsx
git commit -m "refactor: rename landing HTML to index.html and ar-pricing to cta-footer"
```

---

## Task 2: SEO — meta tags e JSON-LD

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Substituir o `<title>` e adicionar meta tags**

Localizar o bloco atual no `<head>`:
```html
<title>CertBlocker — Gestão inteligente de certificados digitais A1</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
```
Substituir por:
```html
<title>CertBlocker — Plataforma de Gestão de Certificados Digitais A1</title>
<meta name="description" content="Gerencie certificados A1 da sua empresa em um cofre criptografado. Alertas automáticos, renovação sem deslocamento e emissão via Infocomex, AC credenciada ICP-Brasil." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://certbloker.com.br/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="CertBlocker — Plataforma de Gestão de Certificados Digitais A1" />
<meta property="og:description" content="Gerencie certificados A1 da sua empresa em um cofre criptografado. Alertas automáticos, renovação sem deslocamento e emissão via Infocomex, AC credenciada ICP-Brasil." />
<meta property="og:url" content="https://certbloker.com.br/" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```
> ⚠️ Atualizar `https://certbloker.com.br/` com o domínio real antes de publicar.

- [ ] **Step 2: Adicionar JSON-LD antes do `</head>`**

Localizar:
```html
<link rel="stylesheet" href="styles.css" />
</head>
```
Substituir por:
```html
<link rel="stylesheet" href="styles.css" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CertBlocker",
  "applicationCategory": "BusinessApplication",
  "description": "Plataforma de gestão de certificados digitais A1 para empresas e escritórios contábeis.",
  "operatingSystem": "Web",
  "url": "https://certbloker.com.br/",
  "offers": { "@type": "Offer", "priceCurrency": "BRL" }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CertBlocker",
  "url": "https://certbloker.com.br/",
  "description": "Plataforma de gestão de certificados digitais A1, com emissão via parceria Infocomex.",
  "sameAs": ["https://infocomex.com.br/"]
}
</script>
</head>
```

- [ ] **Step 3: Verificar no browser**

Abrir `http://localhost:8080`, inspecionar o `<head>` no DevTools e confirmar que as meta tags e os dois blocos `application/ld+json` estão presentes.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat(seo): add meta description, Open Graph, canonical and JSON-LD schemas"
```

---

## Task 3: Atualizar seals.jsx — logos reais

**Files:**
- Modify: `src/seals.jsx`

- [ ] **Step 1: Substituir `SerproSeal` para usar `<img>`**

Localizar:
```jsx
const SerproSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <svg viewBox="0 0 24 24" width={h * 0.5} height={h * 0.5} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--royal-600)', flexShrink: 0}}>
        <path d="M12 2l9 4v6c0 4.6-3.6 8.7-9 10-5.4-1.3-9-5.4-9-10V6l9-4z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
      <div className="seal-text">
        <div className="seal-lbl">Credenciada</div>
        <div className="seal-name">SERPRO</div>
      </div>
    </div>
  );
};
```
Substituir por:
```jsx
const SerproSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <img src="assets/serpro-logo.png" alt="Logo SERPRO — Serviço Federal de Processamento de Dados" style={{width: h * 0.5, height: h * 0.5, objectFit: 'contain', flexShrink: 0}} />
      <div className="seal-text">
        <div className="seal-lbl">Credenciada</div>
        <div className="seal-name">SERPRO</div>
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Substituir `IcpBrasilSeal` para usar `<img>`**

Localizar:
```jsx
const IcpBrasilSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <svg viewBox="0 0 32 32" width={h * 0.55} height={h * 0.55} style={{flexShrink: 0}}>
        <defs>
          <linearGradient id="icpg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f9d3d"/>
            <stop offset="50%" stopColor="#f7d046"/>
            <stop offset="100%" stopColor="#1f5bff"/>
          </linearGradient>
        </defs>
        <path d="M16 3 L28 27 L4 27 Z" fill="url(#icpg)"/>
        <path d="M16 3 L28 27 L4 27 Z" fill="none" stroke="white" strokeWidth="1.5"/>
        <text x="16" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="var(--font-display)">ICP</text>
      </svg>
      <div className="seal-text">
        <div className="seal-lbl">Certificação</div>
        <div className="seal-name">ICP-Brasil</div>
      </div>
    </div>
  );
};
```
Substituir por:
```jsx
const IcpBrasilSeal = ({size = 'md'}) => {
  const h = size === 'lg' ? 56 : size === 'sm' ? 38 : 46;
  return (
    <div className="seal-card" style={{height: h}}>
      <img src="assets/icp-logo.png" alt="Logo ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira" style={{width: h * 0.55, height: h * 0.55, objectFit: 'contain', flexShrink: 0}} />
      <div className="seal-text">
        <div className="seal-lbl">Certificação</div>
        <div className="seal-name">ICP-Brasil</div>
      </div>
    </div>
  );
};
```

- [ ] **Step 3: Verificar no browser**

Abrir `http://localhost:8080`, rolar até o Footer e confirmar que os selos SERPRO e ICP-Brasil mostram as imagens reais em vez de ícones SVG genéricos.

- [ ] **Step 4: Commit**

```bash
git add src/seals.jsx
git commit -m "feat: replace SVG placeholder seals with real SERPRO and ICP-Brasil logo images"
```

---

## Task 4: Corrigir hero.jsx — copy e nav

**Files:**
- Modify: `src/hero.jsx`

- [ ] **Step 1: Corrigir o subtitle do Hero**

Localizar:
```jsx
        <p className="hero-sub">
          Plataforma de gestão e emissão de certificados digitais A1 para empresas e contadores.
          Centralize sua carteira, automatize renovações e emita pela <b>AR Infocomex/CertBloker</b> — sem deslocamento, sem token, sem planilha.
        </p>
```
Substituir por:
```jsx
        <p className="hero-sub">
          Plataforma de gestão de certificados digitais A1 para empresas e contadores.
          Centralize sua carteira, automatize renovações e, quando precisar emitir, a <b>Infocomex</b> — nossa parceira AC credenciada ICP-Brasil — cuida de tudo.
        </p>
```

- [ ] **Step 2: Remover links `#ar` e `#planos` do nav**

Localizar:
```jsx
      <nav className="nav-links">
        <a className="nav-link" href="#produto">Produto</a>
        <a className="nav-link" href="#ar">AR Corporativa</a>
        <a className="nav-link" href="#infocomex">Infocomex</a>
        <a className="nav-link" href="#planos">Planos</a>
        <a className="nav-link" href="#faq">FAQ</a>
      </nav>
```
Substituir por:
```jsx
      <nav className="nav-links">
        <a className="nav-link" href="#produto">Produto</a>
        <a className="nav-link" href="#infocomex">Infocomex</a>
        <a className="nav-link" href="#faq">FAQ</a>
      </nav>
```

- [ ] **Step 3: Verificar no browser**

Abrir `http://localhost:8080` e confirmar: (a) o subtitle do Hero não menciona mais "AR" como sendo do CertBlocker; (b) o nav tem apenas 3 links: Produto, Infocomex, FAQ.

- [ ] **Step 4: Commit**

```bash
git add src/hero.jsx
git commit -m "fix(copy): reposition CertBlocker as management platform in hero; remove AR and Planos nav links"
```

---

## Task 5: Limpar cta-footer.jsx — remover seções e corrigir FAQs

**Files:**
- Modify: `src/cta-footer.jsx`

- [ ] **Step 1: Remover `ArSection` e o componente `Pricing` (incluindo array `PRICING`)**

Localizar o bloco completo da `ArSection` que começa com:
```jsx
const ArSection = () => (
  <section className="ar" id="ar">
```
E termina com o `);` após o fechamento da section. Apagar o bloco inteiro.

Em seguida, localizar o array `PRICING` que começa com:
```jsx
const PRICING = [
  {
    tag: 'Profissional',
```
E apagar o bloco inteiro do array junto com o componente `Pricing`:
```jsx
const Pricing = () => (
  <section className="block" id="planos">
  ...
  </section>
);
```

- [ ] **Step 2: Corrigir os 4 FAQs com posicionamento incorreto**

Localizar o array `FAQS` inteiro e substituir os 4 itens afetados:

**FAQ 1 — "Quem está por trás do CertBloker?"**

Localizar:
```jsx
  {
    q: 'Quem está por trás do CertBloker?',
    a: 'O CertBloker é a plataforma de gestão e emissão da Infocomex — Autoridade Certificadora credenciada pelo SERPRO desde 2010 e parte da cadeia ICP-Brasil. Toda a infraestrutura, validação e emissão segue os requisitos do ITI e do Serviço Federal de Processamento de Dados.',
  },
```
Substituir por:
```jsx
  {
    q: 'Quem está por trás do CertBloker?',
    a: 'O CertBloker é uma plataforma independente de gestão de certificados digitais A1. A emissão dos certificados é realizada pela Infocomex — Autoridade Certificadora credenciada pelo SERPRO desde 2010, parte da cadeia ICP-Brasil. O CertBloker cuida do cofre, alertas, automação e integrações; a Infocomex garante a emissão com validade jurídica plena.',
  },
```

**FAQ 2 — "O CertBloker é uma Autoridade Certificadora (AC)?"**

Localizar:
```jsx
  {
    q: 'O CertBloker é uma Autoridade Certificadora (AC)?',
    a: 'O CertBloker opera como Autoridade de Registro (AR) sob a AC Infocomex/SERPRO, dentro da cadeia ICP-Brasil. Na prática, conduzimos a validação e emissão dos certificados A1 sob as regras do ITI e do SERPRO, com plena validade jurídica.',
  },
```
Substituir por:
```jsx
  {
    q: 'O CertBloker é uma Autoridade Certificadora (AC)?',
    a: 'Não. O CertBloker é uma plataforma de gestão — não é AC nem AR. A Autoridade Certificadora responsável pela emissão é a Infocomex, credenciada pelo SERPRO e parte da cadeia ICP-Brasil. O CertBloker integra com a Infocomex para que você possa solicitar, renovar e gerenciar certificados A1 em um único lugar.',
  },
```

**FAQ 4 — "A emissão por videoconferência tem validade jurídica?"**

Localizar:
```jsx
  {
    q: 'A emissão por videoconferência tem validade jurídica?',
    a: 'Sim. A emissão remota de A1 por videoconferência segue a Instrução Normativa do ITI, a MP 951 e a Resolução 170, sendo equivalente, em termos de validade, à emissão presencial. Como AC credenciada SERPRO, mantemos registro audiovisual e biometria conforme exigido pela cadeia ICP-Brasil.',
  },
```
Substituir por:
```jsx
  {
    q: 'A emissão por videoconferência tem validade jurídica?',
    a: 'Sim. O processo de emissão por videoconferência é conduzido pela Infocomex, seguindo a Instrução Normativa do ITI, a MP 951 e a Resolução 170. Como AC credenciada SERPRO, a Infocomex mantém registro audiovisual e biometria conforme exigido pela cadeia ICP-Brasil. O CertBloker coordena o agendamento e entrega o certificado diretamente no cofre após a emissão.',
  },
```

**FAQ 6 — "Como funciona o white-label para escritórios contábeis?"**

Localizar:
```jsx
  {
    q: 'Como funciona o white-label para escritórios contábeis?',
    a: 'No plano Enterprise, sua contábil ou revenda pode operar a AR Infocomex/CertBloker sob marca própria — domínio, logo, comunicações e relatórios personalizados. O comissionamento por emissão é definido em contrato e o repasse acontece mensalmente.',
  },
```
Substituir por:
```jsx
  {
    q: 'Como funciona o white-label para escritórios contábeis?',
    a: 'Escritórios contábeis e revendas parceiras podem operar a plataforma sob marca própria — domínio, logo, comunicações e relatórios personalizados. O comissionamento por emissão é definido em contrato com a Infocomex. Entre em contato com nossa equipe para saber mais.',
  },
```

- [ ] **Step 3: Atualizar links do Footer — remover `#ar` e `#planos`**

Localizar:
```jsx
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
```
Substituir por:
```jsx
        <div>
          <h5>Produto</h5>
          <ul>
            <li><a href="#produto">Plataforma</a></li>
            <li><a href="#infocomex">Parceria Infocomex</a></li>
            <li><a href="#">API &amp; documentação</a></li>
            <li><a href="#">Integrações</a></li>
          </ul>
        </div>
```

- [ ] **Step 4: Atualizar `window.*` exports — remover ArSection e Pricing**

Localizar:
```jsx
window.ArSection = ArSection;
window.Pricing = Pricing;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
```
Substituir por:
```jsx
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
```

- [ ] **Step 5: Verificar no browser**

Abrir `http://localhost:8080` e confirmar: (a) sem erros no console; (b) FAQs expandem com copy correto; (c) Footer não tem links para AR Corporativa nem Planos.

- [ ] **Step 6: Commit**

```bash
git add src/cta-footer.jsx
git commit -m "feat: remove ArSection and Pricing; fix FAQs positioning; update footer nav"
```

---

## Task 6: Atualizar sections.jsx — copy, tab Cofre e InforcomexPartner

**Files:**
- Modify: `src/sections.jsx`

- [ ] **Step 1: Corrigir copy de "Renovação automatizada" nas Features**

Localizar:
```jsx
        <div className="feat-card">
          <div className="feat-icn"><I.refresh/></div>
          <h3 className="feat-title">Renovação automatizada</h3>
          <p className="feat-desc">Da videoconferência à entrega, sem sair do sistema. Toda a renovação flui dentro da nossa AR — incluindo validação biométrica.</p>
        </div>
```
Substituir por:
```jsx
        <div className="feat-card">
          <div className="feat-icn"><I.refresh/></div>
          <h3 className="feat-title">Renovação automatizada</h3>
          <p className="feat-desc">Da solicitação à entrega, todo o fluxo é coordenado pela plataforma. A emissão é feita pela Infocomex, nossa parceira certificadora ICP-Brasil.</p>
        </div>
```

- [ ] **Step 2: Corrigir Step 04 na seção Steps**

Localizar:
```jsx
        <div className="step">
          <div className="num">04 · Dia 5+</div>
          <h4>Primeira emissão</h4>
          <p>Emita seu primeiro A1 pela nossa AR. A partir daqui, todo vencimento é resolvido sozinho.</p>
        </div>
```
Substituir por:
```jsx
        <div className="step">
          <div className="num">04 · Dia 5+</div>
          <h4>Primeira emissão</h4>
          <p>Emita seu primeiro A1 via Infocomex, nossa parceira certificadora. A partir daqui, todo vencimento é resolvido sozinho.</p>
        </div>
```

- [ ] **Step 3: Substituir tab "Emissão A1" por "Cofre" no array `PRODUCT_TABS`**

Localizar:
```jsx
  {
    id: 'emissao',
    label: 'Emissão A1',
    icon: <I.signature/>,
    title: 'Emita um novo A1 em minutos, sem sair do navegador',
    desc: 'A emissão acontece dentro da plataforma, via nossa Autoridade de Registro. Videoconferência com validador credenciado, biometria facial e entrega direta no cofre.',
    feats: [
      'Validação por videoconferência 100% remota',
      'Verificação biométrica e documental automática',
      'Entrega imediata no cofre — sem download de token',
    ],
    visual: 'emissao',
  },
```
Substituir por:
```jsx
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
```

- [ ] **Step 4: Adicionar `ProductVisual` para o visual `'cofre'`**

Localizar a linha:
```jsx
  if (kind === 'emissao') return (
```
Substituir o bloco inteiro do visual `emissao` por um visual `cofre`:
```jsx
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
```

- [ ] **Step 5: Substituir `PoweredByInfocomex` por `InforcomexPartner`**

Localizar o componente inteiro `PoweredByInfocomex` (começa em `const PoweredByInfocomex = () => (` e termina no `);` após o fechamento da `</section>`). Substituir por:

```jsx
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
```

- [ ] **Step 6: Atualizar o `window.*` export no final do arquivo**

Localizar:
```jsx
window.PoweredByInfocomex = PoweredByInfocomex;
window.Features = Features;
window.Product = Product;
window.Steps = Steps;
```
Substituir por:
```jsx
window.InforcomexPartner = InforcomexPartner;
window.Features = Features;
window.Product = Product;
window.Steps = Steps;
```

- [ ] **Step 7: Verificar no browser**

Abrir `http://localhost:8080` e confirmar: (a) sem erros no console; (b) tab "Cofre" aparece no lugar de "Emissão A1" com visual correto; (c) seção Infocomex mostra logos reais, copy correto e botão "Conhecer a Infocomex" com link externo.

- [ ] **Step 8: Commit**

```bash
git add src/sections.jsx
git commit -m "feat: replace PoweredByInfocomex with InforcomexPartner; add Cofre tab; fix copy in Features and Steps"
```

---

## Task 7: Atualizar app.jsx — composição final

**Files:**
- Modify: `src/app.jsx`

- [ ] **Step 1: Atualizar composição do App**

Localizar o componente `App` inteiro:
```jsx
const App = () => (
  <>
    <Header/>
    <Hero/>
    <PoweredByInfocomex/>
    <LogosStrip/>
    <Features/>
    <Product/>
    <ArSection/>
    <Steps/>
    <Pricing/>
    <FAQ/>
    <FinalCTA/>
    <Footer/>
  </>
);
```
Substituir por:
```jsx
const App = () => (
  <>
    <Header/>
    <Hero/>
    <LogosStrip/>
    <Features/>
    <Product/>
    <Steps/>
    <InforcomexPartner/>
    <FAQ/>
    <FinalCTA/>
    <Footer/>
  </>
);
```

- [ ] **Step 2: Verificar no browser — revisão final completa**

Abrir `http://localhost:8080` e percorrer a página do topo ao rodapé verificando:
- [ ] Nav: 3 links — Produto, Infocomex, FAQ
- [ ] Hero: subtitle sem menção a "nossa AR"
- [ ] Seção Features: copy de Renovação sem "nossa AR"
- [ ] Product tabs: Carteira, **Cofre**, Automação, API (sem "Emissão A1")
- [ ] Steps: Step 04 menciona "Infocomex" como parceira
- [ ] Seção Infocomex: logos reais SERPRO + ICP-Brasil, placeholder Infocomex, botão com link externo
- [ ] Sem seção AR Corporativa
- [ ] Sem seção Planos
- [ ] FAQs: respostas com posicionamento correto
- [ ] Footer: sem links para #ar e #planos
- [ ] Console do browser: sem erros JavaScript

- [ ] **Step 3: Commit final**

```bash
git add src/app.jsx
git commit -m "feat: update App composition — remove ArSection and Pricing, add InforcomexPartner"
```
