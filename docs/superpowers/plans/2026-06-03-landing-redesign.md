# Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruir a landing page do CertBlocker para ficar idêntica às imagens de referência, mantendo as seções Infocomex/cadeia e a faixa de logos restilizadas.

**Architecture:** SPA sem build (React 18 UMD + Babel standalone). Componentes JSX em `src/*.jsx` carregados pelo `index.html`; estilo único em `styles.css`. Cada seção é um componente; reescrevemos componente + CSS por tarefa.

**Tech Stack:** React 18 (UMD), Babel standalone, CSS puro (tokens em `:root`), fontes Inter / Space Grotesk / JetBrains Mono.

**Spec de referência:** `docs/superpowers/specs/2026-06-03-landing-redesign-design.md`

---

## Verificação (sem framework de testes)

Esta é uma página estática sem testes automatizados. A verificação de cada tarefa é **visual**: servir o diretório e comparar a seção com a imagem de referência.

Servir o site (escolha um):
```bash
# opção A (Python)
python -m http.server 5173
# opção B (Node)
npx --yes serve -l 5173 .
```
Depois abrir `http://localhost:5173/` no navegador e comparar a seção construída com a imagem de referência correspondente. Babel standalone exige HTTP (não funciona via `file://`), por isso o servidor estático é obrigatório.

**Convenção de commit:** um commit por tarefa, mensagem `feat: <seção>` (ou `style:`/`refactor:`), terminando com a linha `Co-Authored-By`.

---

## Estrutura de arquivos

| Arquivo | Responsabilidade após o redesign |
|---------|----------------------------------|
| `index.html` | Metadados (marca CertBlocker), ordem dos `<script>` (sem mudança estrutural). |
| `src/icons.jsx` | Ícones SVG `I.*` — adicionar os que faltarem (check, refresh, doc, building, etc.). |
| `src/seals.jsx` | Linha de selos do hero (LGPD / AES-256 / Backup) + trust row reutilizável. |
| `src/hero.jsx` | `Logo`, `Header`, `Hero` (foto + cards flutuantes), `StatsBand`, `LogosStrip`. |
| `src/sections.jsx` | `Platform` (A PLATAFORMA), `Features` (RECURSOS), `Enterprise` (empresas sérias), `InfocomexPartner` (mantida), `Steps` (COMO FUNCIONA). |
| `src/cta-footer.jsx` | `FAQ`, `ContactSection`, `Footer`. |
| `src/app.jsx` | Composição na ordem final. |
| `styles.css` | Tokens + estilos de todas as seções + responsividade. |

Ordem final em `app.jsx`:
`Header → Hero → StatsBand → LogosStrip → Platform → Features → Enterprise → InfocomexPartner → Steps → FAQ → ContactSection → Footer`

---

## Task 1: Fundação — tokens, ícones, metadados, ordem

**Files:**
- Modify: `styles.css` (`:root` e bloco utilitário de kickers)
- Modify: `src/icons.jsx`
- Modify: `index.html` (título/brand textual)
- Modify: `src/app.jsx`

- [ ] **Step 1: Adicionar tokens de cor (gold) ao `:root` em `styles.css`**

Após a linha `--danger: #dc2626;` em `styles.css`, adicionar:
```css
  --gold: #c9962f;
  --gold-soft: rgba(201,150,47,0.85);
  --gold-line: rgba(201,150,47,0.45);
```

- [ ] **Step 2: Adicionar utilitários de kicker em `styles.css`**

No fim do arquivo (antes do primeiro `@media`), adicionar:
```css
/* ---------- Kickers reutilizáveis ---------- */
.kicker-gold, .kicker-blue {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--font-mono); font-size: 12px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 20px;
}
.kicker-gold { color: var(--gold); }
.kicker-blue { color: var(--royal-400); }
.kicker-gold.center, .kicker-blue.center { justify-content: center; }
.kicker-gold .rule, .kicker-blue .rule { width: 28px; height: 1px; background: currentColor; opacity: 0.7; }
```

- [ ] **Step 3: Garantir ícones necessários em `src/icons.jsx`**

Abrir `src/icons.jsx` e confirmar que existem (criar os que faltarem, no mesmo padrão `stroke="currentColor"`, `strokeWidth={1.8}`, `viewBox="0 0 24 24"`): `check`, `lock`, `refresh`, `bell`, `shield`, `users`, `doc`, `arrow`, `clock`, `building`, `cog`, `cert`, `mail`, `phone`, `menu`, `close`, `userCheck`, `network`, `plus`, `bolt`, `warning`, `chart`. Exemplo dos novos:
```jsx
check: (p) => (<svg {...base(p)}><polyline points="20 6 9 17 4 12"/></svg>),
refresh: (p) => (<svg {...base(p)}><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>),
userCheck: (p) => (<svg {...base(p)}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>),
network: (p) => (<svg {...base(p)}><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5L6.5 17M12 11.5L17.5 17"/></svg>),
```
(Use o helper `base(p)` que já existe no arquivo; se não existir, replicar o padrão dos ícones atuais.)

- [ ] **Step 4: Padronizar marca textual em `index.html`**

Substituir, no `<title>` e nas meta tags, todas as ocorrências textuais para "CertBlocker" (não alterar URLs `certbloker.com.br`). Conferir `og:title`, `description` e os blocos JSON-LD `"name": "CertBlocker"`.

- [ ] **Step 5: Atualizar a composição em `src/app.jsx`**

```jsx
const App = () => (
  <>
    <Header/>
    <Hero/>
    <StatsBand/>
    <LogosStrip/>
    <Platform/>
    <Features/>
    <Enterprise/>
    <InforcomexPartner/>
    <Steps/>
    <FAQ/>
    <ContactSection/>
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```
(Os componentes `StatsBand`, `LogosStrip`, `Platform`, `Features`, `Enterprise`, `Steps` são definidos nas tarefas seguintes e expostos em `window`.)

- [ ] **Step 6: Verificar e commitar**

Servir e abrir `http://localhost:5173/`. A página pode quebrar até as tarefas seguintes — apenas confirmar que `index.html` carrega sem erro de sintaxe no console (componentes ainda não definidos é esperado). Commit:
```bash
git add styles.css src/icons.jsx index.html src/app.jsx
git commit -m "feat: foundation tokens, icons and app order for redesign

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Header

**Files:**
- Modify: `src/hero.jsx` (componente `Header` e `Logo`)
- Modify: `styles.css` (`.nav*`, `.mobile-menu*`)

- [ ] **Step 1: Reescrever `Header` em `src/hero.jsx`**

```jsx
const Logo = ({size=40}) => (
  <img src="assets/certbloker-logo.png" alt="CertBlocker" style={{height: size, width: 'auto', display: 'block'}} />
);

const NAV = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}><Logo/></a>
        <nav className="nav-links">
          {NAV.map(n => <a key={n.href} className="nav-link" href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nav-right">
          <div className="nav-cta">
            <a href="#contato" className="btn btn-primary btn-sm">Teste grátis agora <I.arrow size={14}/></a>
          </div>
          <button className="nav-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <I.close size={22}/> : <I.menu size={22}/>}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={"mobile-menu" + (open ? " open" : "")}>
        {NAV.map(n => <a key={n.href} className="mobile-menu-link" href={n.href} onClick={close}>{n.label}</a>)}
        <a className="btn btn-primary mobile-menu-cta" href="#contato" onClick={close}>Teste grátis agora <I.arrow size={14}/></a>
      </div>
    </header>
  );
};
```

- [ ] **Step 2: Ajustar CSS do header (opcional/leve)**

O `.nav`, `.nav-link`, `.btn-primary` já existem e batem com as imagens (header escuro translúcido, links claros, CTA azul). Conferir que `.btn-primary` é azul royal sólido. Sem novas regras necessárias salvo ajuste de espaçamento se divergir da referência.

- [ ] **Step 3: Verificar e commitar**

Comparar topo da página com a 1ª imagem de referência (logo à esquerda, 4 links centrais, CTA "Teste grátis agora"). Commit:
```bash
git add src/hero.jsx styles.css
git commit -m "feat: rebuild header nav to match redesign

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Hero (foto + cards flutuantes + selos)

**Files:**
- Modify: `src/hero.jsx` (componente `Hero`, remover `DashboardMock`)
- Modify: `src/seals.jsx` (linha de selos)
- Modify: `styles.css` (`.hero*`, `.hero-photo`, `.fcard*`, `.hero-seals`)

- [ ] **Step 1: Reescrever `Hero` em `src/hero.jsx`**

```jsx
const Hero = () => (
  <section className="hero">
    <div className="hero-bg"/>
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot"/>
          <span>PLATAFORMA CORPORATIVA • GESTÃO DE CERTIFICADOS DIGITAIS A1</span>
        </div>
        <h1 className="hero-title">
          Segurança institucional na gestão dos seus <span className="accent">certificados digitais.</span>
        </h1>
        <p className="hero-sub">
          A CertBlocker automatiza 100% do ciclo de vida dos certificados A1 da sua empresa, com criptografia bancária, alertas antecipados e controle granular de acesso. Zero certificados vencidos. Zero riscos operacionais.
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn btn-primary btn-lg">Agendar Demonstração <I.arrow size={14}/></a>
          <a href="#como-funciona" className="btn btn-outline btn-lg">Como funciona</a>
        </div>
        <HeroSeals/>
      </div>
      <div className="hero-media">
        <div className="hero-photo">
          <img src="assets/hero-team.jpeg" alt="Equipe corporativa utilizando o painel CertBlocker"/>
        </div>
        <div className="fcard fcard-active">
          <div className="fcard-lbl">CERTIFICADOS ATIVOS</div>
          <div className="fcard-val">150 Monitorados</div>
        </div>
        <div className="fcard fcard-alert">
          <div className="fcard-lbl">ALERTA DE RENOVAÇÃO</div>
          <div className="fcard-row"><span className="fcard-val sm">Vence em 30d</span><span className="fcard-badge">Auto</span></div>
        </div>
        <div className="fcard fcard-conf">
          <div className="fcard-lbl">CONFORMIDADE GERAL</div>
          <div className="fcard-row"><span className="fcard-val sm">Seguros &amp; Protegidos</span><span className="fcard-pct">98.4%</span></div>
          <div className="fcard-bar"><span style={{width:'98.4%'}}/></div>
        </div>
      </div>
    </div>
  </section>
);
```
Remover por completo o componente `DashboardMock` antigo e qualquer `window.` referente a ele.

- [ ] **Step 2: Criar `HeroSeals` em `src/seals.jsx`**

```jsx
const HeroSeals = () => (
  <div className="hero-seals">
    <span className="hero-seal"><I.check size={14}/> LGPD Compliant</span>
    <span className="hero-seal"><I.lock size={14}/> AES-256</span>
    <span className="hero-seal"><I.refresh size={14}/> Backup Contínuo</span>
  </div>
);
window.HeroSeals = HeroSeals;
```

- [ ] **Step 3: CSS do hero em `styles.css`**

Ajustar/garantir (substituindo regras antigas do hero conforme necessário):
```css
.hero-inner { grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: center; padding: 72px 0 64px; }
.eyebrow { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.18em; color: var(--ink-500); display: inline-flex; align-items: center; gap: 10px; text-transform: uppercase; }
.eyebrow .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--royal-500); }
.hero-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(40px, 5vw, 68px); line-height: 1.02; letter-spacing: -0.02em; color: #fff; margin: 22px 0 0; }
.hero-title .accent { color: var(--royal-400); }
.hero-sub { color: var(--ink-700); font-size: 18px; line-height: 1.6; max-width: 560px; margin: 24px 0 32px; }

.hero-seals { display: flex; gap: 28px; margin-top: 40px; flex-wrap: wrap; }
.hero-seal { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 12.5px; letter-spacing: 0.06em; color: var(--ink-500); text-transform: uppercase; }
.hero-seal svg { color: var(--royal-400); }

.hero-media { position: relative; }
.hero-photo { border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-pop); }
.hero-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }

.fcard { position: absolute; background: rgba(8,14,34,0.92); border: 1px solid var(--line); border-radius: var(--r-md); padding: 14px 16px; backdrop-filter: blur(8px); box-shadow: var(--shadow-card); }
.fcard-lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-500); margin-bottom: 6px; }
.fcard-val { font-family: var(--font-display); font-weight: 600; color: #fff; font-size: 18px; }
.fcard-val.sm { font-size: 14px; }
.fcard-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.fcard-badge { font-family: var(--font-mono); font-size: 10px; color: var(--gold); border: 1px solid var(--gold-line); border-radius: var(--r-pill); padding: 2px 8px; text-transform: uppercase; }
.fcard-pct { font-family: var(--font-display); font-weight: 600; color: var(--gold); font-size: 16px; }
.fcard-bar { margin-top: 10px; height: 4px; border-radius: 4px; background: rgba(201,150,47,0.18); overflow: hidden; }
.fcard-bar span { display: block; height: 100%; background: var(--gold); border-radius: 4px; }
.fcard-active { top: 24px; left: -28px; }
.fcard-alert { top: 46%; right: -32px; min-width: 220px; }
.fcard-conf { bottom: 24px; left: 24px; right: 24px; }
```

- [ ] **Step 4: Verificar e commitar**

Comparar com as imagens 1–2 da referência: título grande com "certificados digitais." em azul, foto à direita com os 3 cards flutuantes (150 Monitorados, Vence em 30d/Auto, 98.4% com barra), selos abaixo dos botões. Commit:
```bash
git add src/hero.jsx src/seals.jsx styles.css
git commit -m "feat: rebuild hero with team photo and floating cards

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Barra de stats

**Files:**
- Modify: `src/hero.jsx` (novo componente `StatsBand`)
- Modify: `styles.css` (`.stats-band*`)

- [ ] **Step 1: Criar `StatsBand` em `src/hero.jsx`**

```jsx
const STATS = [
  { v: '100%', l: 'CERTIFICADOS SOB CONTROLE' },
  { v: 'AES-256', l: 'CRIPTOGRAFIA DE PADRÃO BANCÁRIO' },
  { v: '24/7', l: 'MONITORAMENTO CONTÍNUO' },
  { v: '<2h', l: 'TEMPO DE RESPOSTA COMERCIAL' },
];
const StatsBand = () => (
  <section className="stats-band">
    <div className="container stats-grid">
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-v">{s.v}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);
window.StatsBand = StatsBand;
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.stats-band { border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); background: var(--bg-soft); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 48px 32px; }
.stat-v { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px, 3vw, 44px); color: var(--royal-400); letter-spacing: -0.02em; line-height: 1; }
.stat-l { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-500); margin-top: 10px; }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com a 2ª imagem (faixa 100% / AES-256 / 24/7 / <2h). Commit:
```bash
git add src/hero.jsx styles.css
git commit -m "feat: add stats band section

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Faixa de logos (mantida, restilizada)

**Files:**
- Modify: `src/hero.jsx` (componente `LogosStrip`)
- Modify: `styles.css` (`.logos*`)

- [ ] **Step 1: Manter `LogosStrip` em `src/hero.jsx`** (conteúdo atual já serve; garantir marca "CertBlocker" no label)

```jsx
const LogosStrip = () => (
  <section className="logos">
    <div className="container">
      <div className="logos-label">Empresas e escritórios que centralizam certificados no CertBlocker</div>
      <div className="logos-row">
        <div className="logo">AURORA<sup>™</sup></div>
        <div className="logo italic">Mendes&amp;Co</div>
        <div className="logo mono">VIDOTTI</div>
        <div className="logo">◇ Pereira Log</div>
        <div className="logo italic">LimaSouza</div>
        <div className="logo mono">NORTH/SUL</div>
      </div>
    </div>
  </section>
);
window.LogosStrip = LogosStrip;
```

- [ ] **Step 2: Conferir CSS `.logos`** (já existe). Ajustar padding/cor para harmonizar com fundo escuro se necessário; manter logos esmaecidos (`color: var(--ink-500)`).

- [ ] **Step 3: Verificar e commitar**

```bash
git add src/hero.jsx styles.css
git commit -m "style: restyle logos strip for redesign

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: A PLATAFORMA (screenshot + 3 cards)

**Files:**
- Modify: `src/sections.jsx` (novo `Platform`)
- Modify: `styles.css` (`.platform*`, `.browser*`, `.plat-cards*`)

- [ ] **Step 1: Criar `Platform` em `src/sections.jsx`**

```jsx
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
window.Platform = Platform;
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.platform .section-head { max-width: 760px; }
.browser { border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-pop); background: var(--bg-card); margin-bottom: 48px; }
.browser-bar { display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(8,14,34,0.9); border-bottom: 1px solid var(--line); }
.browser-bar .dots { display: flex; gap: 6px; }
.browser-bar .dots span { width: 11px; height: 11px; border-radius: 50%; background: rgba(255,255,255,0.18); }
.browser-bar .dots span:nth-child(1){ background:#ff5f57; } .browser-bar .dots span:nth-child(2){ background:#febc2e; } .browser-bar .dots span:nth-child(3){ background:#28c840; }
.browser-url { font-family: var(--font-mono); font-size: 12px; color: var(--ink-500); display: inline-flex; align-items: center; gap: 6px; }
.browser-shot { display: block; width: 100%; height: auto; }
.plat-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.plat-card { background: var(--bg-soft); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 28px; }
.plat-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
.plat-card h3 { font-family: var(--font-display); font-weight: 600; font-size: 21px; color: #fff; margin: 0 0 10px; }
.plat-card p { color: var(--ink-700); font-size: 14.5px; line-height: 1.6; margin: 0; }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com as imagens 3–4 (título dourado centralizado, screenshot com chrome de navegador, 3 cards). Commit:
```bash
git add src/sections.jsx styles.css
git commit -m "feat: add A PLATAFORMA section with dashboard screenshot

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: RECURSOS PRINCIPAIS (4 blocos numerados)

**Files:**
- Modify: `src/sections.jsx` (reescrever `Features`)
- Modify: `styles.css` (`.recursos*`)

- [ ] **Step 1: Reescrever `Features` em `src/sections.jsx`**

```jsx
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
window.Features = Features;
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.recursos-head { max-width: 760px; margin: 0 0 64px; }
.recursos-head h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px, 3.6vw, 52px); line-height: 1.08; color: #fff; margin: 0 0 20px; letter-spacing: -0.02em; }
.recursos-head p { color: var(--ink-600); font-size: 17px; line-height: 1.6; margin: 0; max-width: 620px; }
.recursos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px 72px; }
.recurso-icn { color: var(--royal-400); margin-bottom: 28px; }
.recurso-cat { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-500); margin-bottom: 14px; }
.recurso h3 { font-family: var(--font-display); font-weight: 600; font-size: 22px; color: #fff; margin: 0 0 14px; }
.recurso p { color: var(--ink-700); font-size: 15px; line-height: 1.65; margin: 0 0 18px; }
.recurso-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.recurso-bullets li { position: relative; padding-left: 18px; color: var(--ink-600); font-size: 14px; }
.recurso-bullets li::before { content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: var(--royal-500); }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com as imagens 5–6 (kicker azul, título grande à esquerda, grid 2×2 com ícone + "0X — CATEGORIA" + título + bullets). Commit:
```bash
git add src/sections.jsx styles.css
git commit -m "feat: rebuild features as RECURSOS PRINCIPAIS numbered grid

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Feito para empresas sérias (depoimento)

**Files:**
- Modify: `src/sections.jsx` (novo `Enterprise`)
- Modify: `styles.css` (`.enterprise*`, `.photo-collage*`, `.quote-box*`)

- [ ] **Step 1: Criar `Enterprise` em `src/sections.jsx`**

```jsx
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
window.Enterprise = Enterprise;
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.enterprise-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 64px; align-items: center; }
.photo-collage { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 16px; }
.photo-collage figure { position: relative; margin: 0; border-radius: var(--r-lg); overflow: hidden; }
.photo-collage img { display: block; width: 100%; height: 100%; object-fit: cover; }
.photo-collage figcaption { position: absolute; left: 12px; bottom: 12px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; color: #fff; background: rgba(2,9,26,0.7); border: 1px solid rgba(255,255,255,0.12); padding: 5px 10px; border-radius: var(--r-sm); }
.pc-main { grid-row: 1 / span 2; }
.enterprise-copy .kicker-gold { color: var(--gold); }
.enterprise-copy h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px, 3.4vw, 50px); line-height: 1.08; color: #fff; margin: 0 0 22px; letter-spacing: -0.02em; }
.enterprise-copy > p { color: var(--ink-700); font-size: 16.5px; line-height: 1.65; margin: 0 0 30px; }
.quote-box { margin: 0; border-left: 3px solid var(--gold); background: var(--bg-card); border-radius: 0 var(--r-md) var(--r-md) 0; padding: 24px 26px; }
.quote-box p { font-style: italic; color: var(--ink-900); font-size: 16px; line-height: 1.6; margin: 0 0 14px; }
.quote-box cite { font-style: normal; font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.08em; color: var(--gold-soft); }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com a 7ª imagem (colagem de 3 fotos à esquerda com legendas, texto + citação dourada à direita). Commit:
```bash
git add src/sections.jsx styles.css
git commit -m "feat: add enterprise testimonial section with photo collage

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Infocomex / Cadeia de confiança (mantida, restilizada)

**Files:**
- Modify: `src/sections.jsx` (`InforcomexPartner` — apenas marca + harmonização)
- Modify: `styles.css` (`.powered*`, `.trust-chain*` — ajustes leves)

- [ ] **Step 1: Padronizar marca em `InforcomexPartner`**

Em `src/sections.jsx`, no texto do `InforcomexPartner`, trocar qualquer "CertBlocker"/"CertBloker" para "CertBlocker" e revisar a descrição da plataforma na `TRUST_CHAIN` (`alt: 'CertBlocker'`, `desc` mencionando "CertBlocker"). Manter estrutura/CTA atuais.

- [ ] **Step 2: Harmonizar CSS**

Conferir que `.powered`, `.credentials-stage`, `.trust-chain` usam os tokens atuais e combinam com o novo visual (fundos escuros, kickers). Se o kicker da seção usar `.kicker`, trocar a classe para `kicker-blue` ou `kicker-gold` conforme a paleta escolhida (sugestão: `kicker-blue`). Sem reescrever a seção.

- [ ] **Step 3: Verificar e commitar**

Conferir que a seção aparece coerente entre "empresas sérias" e "Como funciona". Commit:
```bash
git add src/sections.jsx styles.css
git commit -m "style: harmonize Infocomex trust-chain with redesign and brand

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: COMO FUNCIONA (5 etapas + card azul)

**Files:**
- Modify: `src/sections.jsx` (reescrever `Steps`)
- Modify: `styles.css` (`.howto*`, `.step-card2*`, `.secure-card*`)

- [ ] **Step 1: Reescrever `Steps` em `src/sections.jsx`**

```jsx
const STEPS = [
  { n: '01', title: 'Administrador Principal', tag: 'CONTROLE TOTAL', visual: 'admin',
    desc: 'Um usuário-chave (CEO, Diretor de TI, CFO ou Controller) é designado com perfil de administrador e passa a gerenciar toda a plataforma institucionalmente.' },
  { n: '02', title: 'Cadastro de Certificados', tag: 'CRIPTOGRAFIA BANCÁRIA', visual: 'pfx',
    desc: 'A plataforma realiza apenas a leitura dos certificados A1 em ambiente criptografado AES-256. O arquivo e a senha nunca são enviados nem armazenados em nossos servidores.' },
  { n: '03', title: 'Usuários & Grupos', tag: 'ACESSO MÍNIMO NECESSÁRIO', visual: 'network',
    desc: 'Crie colaboradores, organize por grupos departamentais e defina de forma cirúrgica quais certificados cada grupo pode acessar.' },
  { n: '04', title: 'Instalação do app', tag: 'DISTRIBUIÇÃO VIA GPO', visual: 'app',
    desc: 'Um app leve é instalado no Windows do colaborador. Distribuição via GPO para ambientes gerenciados.' },
  { n: '05', title: 'Login seguro & uso controlado', tag: 'ZERO VAZAMENTO', visual: 'lock',
    desc: 'O sistema libera apenas os certificados do grupo. Sem download, sem arquivos soltos, sem vazamento.' },
];
const StepVisual = ({kind}) => {
  if (kind === 'pfx') return <div className="sv-file">.PFX · A1</div>;
  if (kind === 'admin') return <div className="sv-avatar"><I.users size={26}/><span className="sv-check"><I.check size={12}/></span></div>;
  if (kind === 'network') return <div className="sv-net"><I.network size={40}/></div>;
  if (kind === 'app') return <div className="sv-app"><I.cog size={34}/></div>;
  return <div className="sv-lock"><I.lock size={34}/></div>;
};
const Steps = () => (
  <section className="block howto" id="como-funciona">
    <div className="container">
      <div className="section-head">
        <div className="kicker-blue center">COMO FUNCIONA</div>
        <h2>Implementação em 5 etapas, sem consultoria paralela.</h2>
        <p>Onboarding guiado pela nossa equipe. Seu time opera com autonomia a partir do primeiro dia.</p>
      </div>
      <div className="howto-list">
        {STEPS.map((s) => (
          <div className="step-card2" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="step-tag"><span className="step-dot"/>{s.tag}</div>
            </div>
            <div className="step-visual"><StepVisual kind={s.visual}/></div>
          </div>
        ))}
        <div className="secure-card">
          <div className="secure-icn"><I.shield size={22}/></div>
          <div className="secure-body">
            <h3>Segurança institucional por padrão</h3>
            <p>O colaborador nunca baixa o certificado. Tudo fica protegido na nuvem CertBlocker, com rastreabilidade total de cada operação.</p>
          </div>
          <div className="secure-chips">
            <span>SEM DOWNLOADS</span><span>LOG COMPLETO</span><span>AUDITÁVEL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
window.Steps = Steps;
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.howto-list { display: flex; flex-direction: column; gap: 24px; }
.step-card2 { display: grid; grid-template-columns: auto 1fr auto; gap: 32px; align-items: center; background: var(--bg-soft); border: 1px solid var(--line); border-radius: var(--r-xl); padding: 36px 40px; }
.step-num { font-family: var(--font-display); font-weight: 700; font-size: 44px; color: #fff; line-height: 1; opacity: 0.95; }
.step-body h3 { font-family: var(--font-display); font-weight: 600; font-size: 22px; color: #fff; margin: 0 0 10px; }
.step-body p { color: var(--ink-700); font-size: 15px; line-height: 1.6; margin: 0 0 16px; max-width: 520px; }
.step-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--royal-400); display: inline-flex; align-items: center; gap: 8px; }
.step-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--royal-500); }
.step-visual { width: 130px; display: grid; place-items: center; }
.sv-file { font-family: var(--font-mono); font-size: 12px; color: var(--ink-600); border: 1px solid var(--line); border-radius: var(--r-sm); padding: 18px 16px; }
.sv-avatar, .sv-net, .sv-app, .sv-lock { position: relative; width: 92px; height: 92px; border-radius: 50%; display: grid; place-items: center; color: var(--ink-500); background: rgba(255,255,255,0.03); border: 1px solid var(--line); }
.sv-check { position: absolute; right: 14px; top: 18px; width: 20px; height: 20px; border-radius: 50%; background: var(--success); color: #fff; display: grid; place-items: center; }

.secure-card { display: grid; grid-template-columns: auto 1fr auto; gap: 28px; align-items: center; background: var(--royal-600); border-radius: var(--r-xl); padding: 32px 40px; }
.secure-icn { width: 56px; height: 56px; border-radius: 50%; background: var(--navy-1000); color: var(--royal-300); display: grid; place-items: center; }
.secure-body h3 { font-family: var(--font-display); font-weight: 700; font-size: 22px; color: var(--navy-1000); margin: 0 0 6px; }
.secure-body p { color: rgba(2,9,26,0.8); font-size: 14.5px; line-height: 1.55; margin: 0; max-width: 560px; }
.secure-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.secure-chips span { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.08em; background: rgba(2,9,26,0.18); color: var(--navy-1000); border-radius: var(--r-pill); padding: 6px 12px; }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com as imagens "Como funciona" (cards largos numerados com visual à direita, e card azul de destaque com chips). Commit:
```bash
git add src/sections.jsx styles.css
git commit -m "feat: rebuild Como Funciona with 5 numbered steps and highlight card

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: FAQ (2 colunas)

**Files:**
- Modify: `src/cta-footer.jsx` (reescrever `FAQ` e `FAQS`)
- Modify: `styles.css` (`.faq-layout*`, ajustar `.faq-item`)

- [ ] **Step 1: Reescrever dados e componente `FAQ` em `src/cta-footer.jsx`**

```jsx
const FAQS = [
  { q: 'O que é a CertBlocker?',
    a: 'A CertBlocker é uma plataforma corporativa de gestão de certificados digitais A1. Ela centraliza seus certificados em um cofre criptografado, com alertas de vencimento, controle de acesso por usuário e grupo e trilha de auditoria. A emissão dos certificados A1 é feita pela Infocomex, Autoridade Certificadora credenciada pelo SERPRO desde 2010, parte da cadeia ICP-Brasil.' },
  { q: 'Meus certificados ficam seguros na plataforma?',
    a: 'Sim. A plataforma realiza apenas a leitura dos certificados A1 em ambiente criptografado AES-256, o mesmo padrão usado por bancos. O arquivo e a senha nunca são armazenados em nossos servidores, e o certificado nunca é baixado na máquina do colaborador. Toda operação acontece com rastreabilidade ponta-a-ponta.' },
  { q: 'Como funciona o controle de acesso por grupos?',
    a: 'Você organiza seus colaboradores em grupos por área (Fiscal, Financeiro, Jurídico, Compras etc.) e define quais certificados cada grupo pode visualizar e utilizar. O acesso segue o princípio do menor privilégio, e toda alteração de permissão fica registrada na trilha de auditoria.' },
  { q: 'Funciona no Windows?',
    a: 'Sim. O aplicativo corporativo é compatível com Windows. Não há suporte a macOS ou Linux neste momento.' },
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
                <span>{f.q}</span><span className="caret"><I.plus/></span>
              </button>
              <div className="faq-a"><div className="inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: CSS em `styles.css`**

```css
.faq-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
.faq-intro .kicker-gold { color: var(--gold); }
.faq-intro h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px, 3.4vw, 50px); line-height: 1.08; color: #fff; margin: 0 0 20px; letter-spacing: -0.02em; }
.faq-intro p { color: var(--ink-600); font-size: 16px; line-height: 1.6; margin: 0; max-width: 420px; }
.faq-wrap { max-width: none; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.faq-item { border: 1px solid var(--line); border-radius: var(--r-md); background: var(--bg-soft); padding: 0 22px; }
.faq-q { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 22px 0; font-family: var(--font-display); font-weight: 600; font-size: 16.5px; color: #fff; text-align: left; }
.faq-q .caret { color: var(--royal-400); }
.faq-a .inner { padding: 0 0 22px; color: var(--ink-700); font-size: 14.5px; line-height: 1.65; max-width: none; }
```
(Manter o comportamento de abrir/fechar e o `.caret` girando que já existem.)

- [ ] **Step 3: Verificar e commitar**

Comparar com a imagem do FAQ (título à esquerda, accordion à direita com 4 perguntas, a última aberta). Commit:
```bash
git add src/cta-footer.jsx styles.css
git commit -m "feat: rebuild FAQ as two-column layout with 4 questions

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Contato comercial

**Files:**
- Modify: `src/cta-footer.jsx` (`ContactSection`, `CONTACT`)
- Modify: `styles.css` (ajustes leves em `.contact*`)

- [ ] **Step 1: Atualizar `CONTACT` e textos em `src/cta-footer.jsx`** (manter contatos atuais)

```jsx
const CONTACT = {
  email: 'comercial@certbloker.com.br',
  emailNote: 'Resposta em até 2h úteis',
  whatsapp: '(66) 99262-3898',
  whatsappNote: 'Atendimento dedicado',
};
```

- [ ] **Step 2: Ajustar o JSX de `ContactSection`**

- Kicker: trocar `<div className="kicker">Contato comercial</div>` por `<div className="kicker-gold">— Contato comercial</div>`.
- H2: `Transforme a gestão de certificados da sua empresa.`
- Subtítulo: `Fale com nossa equipe e descubra em 30 minutos como reduzir risco operacional, eliminar multas e devolver tempo para o seu time.`
- Manter os 2 cards (E-mail, WhatsApp comercial) usando `CONTACT`; remover o card "Horário institucional" para bater com a imagem (2 cards).
- Form: título `Solicite uma demonstração`, sub `Preencha e retornaremos em até 2 horas úteis.`, campos Empresa/Nome completo/E-mail corporativo/Mensagem (placeholders como no spec).
- Botão (visual, `preventDefault`): `Enviar via WhatsApp <I.arrow size={14}/>`.
- Rodapé do form: `<I.lock size={13}/> Dados protegidos pela LGPD`.

- [ ] **Step 3: CSS** — `.contact-grid`, `.contact-form`, `.field` já existem e batem com a imagem. Ajustar `.contact-intro .kicker-gold { color: var(--gold); }` se necessário. Sem reescrever.

- [ ] **Step 4: Verificar e commitar**

Comparar com a imagem de contato (intro + 2 cards à esquerda, form com botão azul "Enviar via WhatsApp" à direita). Commit:
```bash
git add src/cta-footer.jsx styles.css
git commit -m "feat: update contact section copy, cards and WhatsApp button

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 13: Footer

**Files:**
- Modify: `src/cta-footer.jsx` (`Footer`)
- Modify: `styles.css` (`.foot-grid`, `.foot-bottom`)

- [ ] **Step 1: Reescrever `Footer` em `src/cta-footer.jsx`**

```jsx
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
```

- [ ] **Step 2: CSS** — ajustar `.foot-grid` para 4 colunas: `grid-template-columns: 1.4fr 1fr 1fr 1fr;` e `.foot-bottom` em mono uppercase, esmaecido:
```css
.foot-bottom { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--ink-400); text-transform: uppercase; }
```

- [ ] **Step 3: Verificar e commitar**

Comparar com a imagem do footer (tagline + Produto/Empresa/Legal + linha © CERTBLOCKER / @CERTBLOCKER). Commit:
```bash
git add src/cta-footer.jsx styles.css
git commit -m "feat: rebuild footer with Produto/Empresa/Legal columns

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 14: Responsividade

**Files:**
- Modify: `styles.css` (blocos `@media`)

- [ ] **Step 1: Adicionar regras mobile para as novas seções**

Dentro de `@media (max-width: 960px)` (e 640px conforme necessário), adicionar:
```css
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .hero-media { margin-top: 8px; }
  .fcard-active { left: 8px; } .fcard-alert { right: 8px; } /* manter dentro da viewport */
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
  .plat-cards { grid-template-columns: 1fr; }
  .recursos-grid { grid-template-columns: 1fr; gap: 40px; }
  .enterprise-grid { grid-template-columns: 1fr; gap: 40px; }
  .faq-layout { grid-template-columns: 1fr; gap: 32px; }
  .step-card2 { grid-template-columns: auto 1fr; }
  .step-visual { display: none; }
  .secure-card { grid-template-columns: 1fr; gap: 16px; text-align: left; }
  .foot-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .hero-seals { gap: 16px; }
  .fcard-conf { left: 12px; right: 12px; }
  .foot-grid { grid-template-columns: 1fr; gap: 28px; }
  .foot-bottom { flex-direction: column; gap: 8px; align-items: flex-start; }
}
```

- [ ] **Step 2: Verificar em larguras 375px, 768px, 1280px**

Servir e redimensionar (DevTools responsivo). Confirmar: hero empilha foto abaixo do texto sem cards flutuantes saindo da tela; stats 2×2; recursos/plataforma/enterprise/faq em 1 coluna; steps sem visual lateral; footer empilhado.

- [ ] **Step 3: Commitar**

```bash
git add styles.css
git commit -m "feat: responsive rules for redesigned sections

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 15: Revisão final e limpeza

**Files:**
- Modify: `styles.css` (remover CSS órfão), `src/*.jsx` (remover componentes não usados)

- [ ] **Step 1: Remover código morto**

Procurar e remover do `styles.css` e dos `.jsx` quaisquer estilos/componentes não mais usados (ex.: `.dash*`, `.float-card` antigos do `DashboardMock`, `.ar*`, `.product*`, `.price*`, `.steps`/`.step-card` antigos se substituídos). Confirmar com busca por uso antes de remover.

- [ ] **Step 2: Varredura visual completa**

Abrir a página inteira e comparar topo→fundo com todas as imagens de referência. Conferir: marca "CertBlocker" em todos os textos; âncoras de nav funcionando (Recursos→#recursos, Como Funciona→#como-funciona, FAQ→#faq, Contato→#contato); accordion do FAQ; menu mobile.

- [ ] **Step 3: Conferir console sem erros**

Abrir DevTools console; nenhum erro de React/Babel/asset 404.

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "refactor: remove dead styles and components after redesign

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Self-review (cobertura do spec)

- §1 Header → Task 2 ✓
- §2 Hero (foto, cards flutuantes, selos) → Task 3 ✓
- §3 Stats band → Task 4 ✓
- §4 Logos (mantida) → Task 5 ✓
- §5 A PLATAFORMA → Task 6 ✓
- §6 RECURSOS PRINCIPAIS → Task 7 ✓
- §7 Feito para empresas sérias → Task 8 ✓
- §8 Infocomex/cadeia (mantida) → Task 9 ✓
- §9 COMO FUNCIONA (5 etapas + card azul) → Task 10 ✓
- §10 FAQ (2 colunas, 4 perguntas) → Task 11 ✓
- §11 Contato → Task 12 ✓
- §12 Footer → Task 13 ✓
- Responsividade → Task 14 ✓
- Marca CertBlocker / limpeza → Tasks 1, 9, 15 ✓
- Tokens/kickers (gold/blue) → Task 1 ✓

Sem placeholders pendentes. Nomes de componentes (`StatsBand`, `LogosStrip`, `Platform`, `Features`, `Enterprise`, `InforcomexPartner`, `Steps`, `FAQ`, `ContactSection`, `Footer`) consistentes entre `app.jsx` (Task 1) e as tarefas que os definem.
