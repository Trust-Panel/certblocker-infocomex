# Ajuste Mobile — Landing CertBlocker — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended for this plan — all CSS lives in one file and edits are interdependent) to implement task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tornar a landing page do CertBlocker totalmente usável no mobile — menu hambúrguer, dashboard sem overflow e polimento responsivo de todas as seções.

**Architecture:** Site estático desktop-first. `index.html` carrega React 18 + Babel standalone e renderiza componentes JSX. Estilos em `styles.css` (desktop-first com media queries `960px`/`640px`). O ajuste **estende** esses media queries e adiciona `480px`/`560px`/`400px` onde necessário, sem reescrever o CSS existente. O menu hambúrguer adiciona estado React ao `Header`.

**Tech Stack:** React 18 (UMD), Babel standalone, CSS puro. Sem build, sem bundler, sem framework de testes — verificação é visual no navegador.

**Nota sobre testes:** não há test runner. Cada tarefa é verificada abrindo a página servida localmente e inspecionando nas larguras-alvo (360 / 390 / 768px). A "falha antes" é o comportamento atual quebrado; o "passa depois" é o comportamento corrigido observado no navegador.

**Desvio do spec:** o spec sugeria `overflow-x: hidden` no `body` como guarda. **Não será aplicado** — `overflow-x: hidden` em `html`/`body` quebra `position: sticky` (a nav fixa). Corrigimos a causa-raiz (dashboard) e validamos ausência de scroll horizontal no teste.

---

## Pré-requisito: servidor local para verificação

- [ ] **Passo 0: Subir um servidor estático na raiz do projeto**

Em um terminal (deixar rodando durante toda a execução):

```bash
python -m http.server 8000
```

Se `python` não existir, usar `npx --yes serve -l 8000 .` ou a extensão Live Server do VS Code.
Abrir `http://localhost:8000` e usar o DevTools (modo responsivo) nas larguras 360, 390 e 768px.

---

## Task 1: Ícones de menu e fechar

**Files:**
- Modify: `src/icons.jsx` (inserir antes do `};` que fecha o objeto `I`, após a entrada `clock`)

- [ ] **Step 1: Adicionar os ícones `menu` e `close`**

Em [src/icons.jsx](src/icons.jsx), após a entrada `clock` (linha ~140) e antes de `};`, inserir:

```jsx
  menu: (p) => (
    <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16"/>
    </svg>
  ),
  close: (p) => (
    <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 6l12 12M18 6L6 18"/>
    </svg>
  ),
```

- [ ] **Step 2: Verificar no navegador**

Recarregar `http://localhost:8000`. Não deve haver erro no console (Babel compila o objeto `I`).
Os ícones ainda não aparecem (serão usados na Task 2).

- [ ] **Step 3: Commit**

```bash
git add src/icons.jsx
git commit -m "feat: add menu and close icons"
```

---

## Task 2: Menu hambúrguer no Header

**Files:**
- Modify: `src/hero.jsx:7-24` (componente `Header`)

- [ ] **Step 1: Reescrever o `Header` como componente com estado**

Em [src/hero.jsx](src/hero.jsx), substituir TODO o `const Header = () => (...)` atual por:

```jsx
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}>
          <Logo />
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#produto">Produto</a>
          <a className="nav-link" href="#como-funciona">Como funciona</a>
          <a className="nav-link" href="#infocomex">Infocomex</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>
        <div className="nav-right">
          <div className="nav-cta">
            <a href="#cta" className="btn btn-primary btn-sm">Falar com especialista <I.arrow size={14}/></a>
          </div>
          <button
            className="nav-toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <I.close size={22}/> : <I.menu size={22}/>}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={"mobile-menu" + (open ? " open" : "")}>
        <a className="mobile-menu-link" href="#produto" onClick={close}>Produto</a>
        <a className="mobile-menu-link" href="#como-funciona" onClick={close}>Como funciona</a>
        <a className="mobile-menu-link" href="#infocomex" onClick={close}>Infocomex</a>
        <a className="mobile-menu-link" href="#faq" onClick={close}>FAQ</a>
        <a className="btn btn-primary mobile-menu-cta" href="#cta" onClick={close}>Falar com especialista <I.arrow size={14}/></a>
      </div>
    </header>
  );
};
```

(Mantém-se o `href="#cta"` existente para não alterar o comportamento do CTA desktop.)

- [ ] **Step 2: Verificar no navegador (desktop)**

Recarregar em largura ≥1000px. A barra deve estar idêntica à anterior: logo · links · botão "Falar com especialista". O hambúrguer **não** aparece (será mostrado via CSS na Task 3). Sem erros no console.

- [ ] **Step 3: Commit**

```bash
git add src/hero.jsx
git commit -m "feat: add stateful mobile menu to header"
```

---

## Task 3: CSS base do hambúrguer + exibição em ≤960px

**Files:**
- Modify: `styles.css` (bloco do Header, ~linha 97, e media query `@media (max-width: 960px)` ~linha 1081)

- [ ] **Step 1: Estilos base do toggle, do grupo direito e do painel**

Em [styles.css](styles.css), logo após a regra `.nav-cta { ... }` (linha ~97), inserir:

```css
.nav-right { display: flex; align-items: center; gap: 8px; }

.nav-toggle {
  display: none;
  width: 44px; height: 44px;
  align-items: center; justify-content: center;
  border-radius: var(--r-sm);
  color: rgba(210,225,255,0.9);
}
.nav-toggle:hover { background: rgba(31,91,255,0.12); color: white; }

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 0 20px;
  border-top: 1px solid rgba(100,130,200,0.1);
  background: rgba(4,9,30,0.98);
  backdrop-filter: saturate(160%) blur(20px);
  -webkit-backdrop-filter: saturate(160%) blur(20px);
}
.mobile-menu-link {
  display: flex; align-items: center;
  min-height: 48px; padding: 0 8px;
  font-size: 15px; font-weight: 500;
  color: rgba(200,215,255,0.85);
  border-bottom: 1px solid var(--line-soft);
}
.mobile-menu-link:hover { color: white; }
.mobile-menu-cta { margin-top: 14px; width: 100%; height: 48px; }
```

- [ ] **Step 2: Exibir o toggle e o painel aberto dentro do media query ≤960px**

No bloco `@media (max-width: 960px) { ... }` (o que contém `.nav-links { display: none }`, ~linha 1081), adicionar dentro dele:

```css
  .nav-toggle { display: flex; }
  .mobile-menu.open { display: flex; padding-top: 8px; padding-bottom: 16px; }
```

(Manter `.mobile-menu { display: none }` na base garante que o painel nunca apareça no desktop, mesmo se `open` ficar `true` após um resize.)

- [ ] **Step 3: Verificar no navegador**

- Em ≥1000px: barra inalterada, sem hambúrguer.
- Em ≤960px (ex.: 768px e 390px): aparece o ícone ☰ à direita; clicar abre o painel com os 4 links + CTA (cada item com toque confortável); o ícone vira ✕; clicar num link fecha o painel e navega até a seção; clicar no ✕ fecha.

- [ ] **Step 4: Commit**

```bash
git add styles.css
git commit -m "feat: show hamburger menu and dropdown panel on mobile"
```

---

## Task 4: Hero, CTA inline e trust row no mobile

**Files:**
- Modify: `styles.css` (novos blocos `@media (max-width: 560px)` e `@media (max-width: 480px)`; ajustes no bloco `@media (max-width: 640px)`)

- [ ] **Step 1: Ocultar CTA inline em ≤560px**

Em [styles.css](styles.css), adicionar um novo bloco (após o bloco `@media (max-width: 640px)`, ~linha 1099):

```css
@media (max-width: 560px) {
  .nav-cta { display: none; }
}
```

- [ ] **Step 2: Ajustar o Hero no bloco ≤640px**

Dentro do `@media (max-width: 640px) { ... }`, adicionar:

```css
  .hero { padding: 48px 0 56px; }
  .hero-sub { font-size: 16px; }
```

- [ ] **Step 3: Botões do hero em largura total e divisores do trust row em ≤480px**

Adicionar um novo bloco:

```css
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .btn { width: 100%; }
  .trust-divider { display: none; }
}
```

- [ ] **Step 4: Verificar no navegador**

- ≤560px: a barra superior mostra apenas logo + ☰ (CTA inline some; o CTA continua no menu).
- ≤480px (ex.: 360px): os dois botões do hero ficam empilhados em largura total; o trust row (SERPRO/ICP/Infocomex) quebra em linhas sem divisores soltos.

- [ ] **Step 5: Commit**

```bash
git add styles.css
git commit -m "feat: mobile hero polish — stacked CTAs, hide inline nav CTA, trust row wrap"
```

---

## Task 5: Adaptar o mock do dashboard (corrige o overflow)

**Files:**
- Modify: `styles.css` (bloco `@media (max-width: 640px)` — substituir a regra `.kpi-row`; adicionar regras do dashboard; novo bloco `@media (max-width: 400px)`)

- [ ] **Step 1: Substituir a regra `.kpi-row` e adicionar a adaptação do dashboard**

No bloco `@media (max-width: 640px) { ... }`, **remover** a linha existente:

```css
  .kpi-row { grid-template-columns: 1fr; }
```

e **adicionar** no lugar:

```css
  .dash-body { grid-template-columns: 1fr; min-height: 0; }
  .dash-side { display: none; }
  .dash-main { padding: 16px; }
  .kpi-row { grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .kpi { padding: 8px 9px; }
  .kpi .val { font-size: 17px; }
  .kpi .lbl { font-size: 9px; letter-spacing: 0.04em; }
  .kpi .delta { font-size: 9px; }
  .cert-row { grid-template-columns: 1.4fr 0.8fr 0.7fr; padding: 9px 10px; font-size: 11.5px; column-gap: 8px; }
  .cert-row.head { padding: 7px 10px; }
  .cert-row > :nth-child(2) { display: none; }
  .cert-name { gap: 7px; }
```

- [ ] **Step 2: KPIs em coluna única em telas muito estreitas (≤400px)**

Adicionar um novo bloco:

```css
@media (max-width: 400px) {
  .kpi-row { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verificar no navegador**

- Em 390px e 360px: o mock do dashboard cabe inteiro na tela — **sem scroll horizontal na página**. A sidebar some, os 3 KPIs ficam compactos lado a lado (1 coluna em ≤400px), e a tabela mostra Titular · Status · Vencimento (a coluna CNPJ some). Os float-cards continuam ocultos.
- Conferir com o DevTools que `document.documentElement.scrollWidth` ≤ largura da viewport (sem barra horizontal).

- [ ] **Step 4: Commit**

```bash
git add styles.css
git commit -m "fix: dashboard mock fits mobile without horizontal overflow"
```

---

## Task 6: Polimento das demais seções (Features, Steps, Infocomex, FAQ, Contato, Footer)

**Files:**
- Modify: `styles.css` (bloco `@media (max-width: 640px)`)

- [ ] **Step 1: Adicionar os ajustes de seção no bloco ≤640px**

Dentro do `@media (max-width: 640px) { ... }`, adicionar:

```css
  .feat-card { padding: 24px; }
  .step-card { padding: 22px 18px; }
  .powered { padding: 56px 0; }
  .faq-q { font-size: 15.5px; padding: 18px 4px; }
  .faq-item.open .faq-a { max-height: 600px; }
  .field input, .field textarea { font-size: 16px; }
  .foot-bottom { flex-direction: column; align-items: flex-start; gap: 14px; }
```

- [ ] **Step 2: Verificar no navegador (390px / 360px)**

- Features e Steps: cards com padding menor, uma coluna, legíveis.
- Infocomex: seção com respiro menor; stats e cadeia de confiança em coluna única.
- FAQ: abrir a 1ª pergunta (resposta longa) — o texto aparece inteiro, **sem corte**.
- Contato: ao focar um input no celular, a página **não** dá zoom (fonte 16px).
- Footer: copyright e links (Privacidade/Termos/Cookies) empilhados à esquerda.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: mobile polish for features, steps, infocomex, faq, contact, footer"
```

---

## Task 7: Verificação final integrada

- [ ] **Step 1: Varredura de larguras**

Com o servidor rodando, percorrer 320, 360, 390, 414 e 768px e confirmar:
- Nenhuma seção gera scroll horizontal (`document.documentElement.scrollWidth` ≤ viewport em todas).
- Menu hambúrguer: abre, fecha pelo ✕, fecha ao clicar num link, e navega para a âncora.
- Dashboard cabe na tela; FAQ longo não corta; inputs sem zoom no iOS (fonte 16px).
- Em ≥1000px o layout desktop permanece idêntico ao original.

- [ ] **Step 2: Sanidade de console**

Sem erros/warnings novos no console do navegador.

- [ ] **Step 3: Commit final (se houver ajustes pendentes)**

```bash
git add -A
git commit -m "chore: final mobile responsiveness verification tweaks"
```

---

## Self-Review (cobertura do spec)

- Menu hambúrguer → Tasks 1–3 ✓
- Hero (padding, sub, botões, trust row) → Task 4 ✓
- Dashboard sem overflow (sidebar, KPIs, coluna CNPJ) → Task 5 ✓
- Features/Steps/Infocomex paddings → Task 6 ✓
- FAQ max-height → Task 6 ✓
- Contato font-size 16px → Task 6 ✓
- Footer empilhado → Task 6 ✓
- Guarda `overflow-x` → substituída por fix de causa-raiz (desvio documentado acima) ✓
- Verificação 360/390/768 → Task 7 ✓
