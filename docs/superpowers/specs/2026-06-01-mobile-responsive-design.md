# Ajuste Mobile — Landing CertBlocker

**Data:** 2026-06-01
**Status:** Aprovado (design)

## Contexto

A landing page do CertBlocker (`index.html` + componentes React/JSX via Babel standalone)
foi construída desktop-first. O CSS em `styles.css` já tem breakpoints em `960px` e `640px`,
mas o mobile apresenta problemas concretos:

1. **Sem navegação no mobile** — em ≤960px os links do menu são ocultados
   (`.nav-links { display: none }`) sem nenhum substituto. As âncoras de seção
   (Produto, Como funciona, Infocomex, FAQ) ficam inacessíveis no celular.
2. **Mock do dashboard estoura a largura** — `.dash-body` usa `grid-template-columns: 200px 1fr`
   e a tabela de certificados usa 4 colunas com CNPJ em fonte monoespaçada. Em telas estreitas
   isso gera scroll horizontal na página inteira.
3. Faltam ajustes finos de tipografia, espaçamento e áreas de toque.

## Decisões (confirmadas com o usuário)

- **Navegação mobile:** menu hambúrguer (ícone que abre painel com links + CTA).
- **Mock do dashboard:** manter e adaptar para caber na tela (não ocultar).
- **Escopo:** polimento completo de todas as seções.

## Abordagem

Manter o estilo desktop-first existente. **Estender** os media queries `960px` e `640px`
já presentes e adicionar `480px` para o ajuste fino de celular. Corrigir a causa-raiz do
overflow (dashboard) e adicionar `overflow-x: hidden` no `body` como guarda.

Arquivos afetados:
- `src/icons.jsx` — novos ícones `menu` e `close`.
- `src/hero.jsx` — estado e marcação do menu hambúrguer no `Header`.
- `styles.css` — todas as regras responsivas.

## Detalhamento por seção

### 1. Header — menu hambúrguer
- Adicionar ícones `menu` (☰) e `close` (✕) ao objeto `I` em `src/icons.jsx`.
- `Header` ganha `React.useState(false)` para `open`.
- Marcação:
  - `<button className="nav-toggle" aria-label aria-expanded aria-controls="mobile-menu">`
    exibindo `I.menu`/`I.close` conforme o estado.
  - `<div id="mobile-menu" className="mobile-menu{ open ? ' open' : ''}">` com os 4 links
    + CTA "Falar com especialista".
  - Clicar em qualquer link fecha o menu (`setOpen(false)`).
- CSS:
  - `.nav-toggle { display: none }` no desktop; visível (`display: grid`) em ≤960px,
    com área de toque ≥44px.
  - `.mobile-menu` oculto por padrão; quando `.open`, aparece como painel em coluna
    abaixo da nav fixa, links em largura total (altura ≥44px), divisória e CTA full-width.
  - Em ≤560px, ocultar o `.nav-cta` inline (o CTA já está no menu) — barra fica
    apenas logo + hambúrguer.
  - Acessibilidade: `aria-expanded` reflete o estado; `aria-label` alterna
    "Abrir menu" / "Fechar menu".

### 2. Hero
- Reduzir padding vertical em ≤640px (ex.: `48px 0 56px`).
- `.hero-sub` de 18px → 16px em ≤640px.
- `.hero-actions .btn` em largura total e empilhados em ≤480px.
- `TrustRowCompact`: permitir quebra de linha; ocultar `.trust-divider` quando quebrar
  (≤480px) para não ficarem soltos.

### 3. Mock do dashboard (manter + adaptar) — corrige o overflow
- ≤640px: `.dash-side { display: none }` (sidebar é decorativa) e
  `.dash-body { grid-template-columns: 1fr; min-height: 0 }`.
- `.dash-main` padding reduzido (~16px) em ≤640px.
- `.kpi-row`: substituir a regra atual que força 1 coluna em 640px por
  `repeat(3, 1fr)` compacto (`.kpi` padding ~8px, `.kpi .val` ~17px, `.kpi .lbl` ~9px).
  Em ≤400px, cair para 1 coluna.
- `.cert-row` (head e corpo): ocultar a 2ª coluna (CNPJ) via
  `.cert-row > :nth-child(2) { display: none }`; novo grid `1.4fr 0.8fr 0.7fr`
  (Titular · Status · Vencimento). Permitir que `.cert-name` quebre linha
  (remover qualquer `nowrap`/largura fixa que cause overflow). Reduzir fonte/padding.
- `.float-card` já está oculto em ≤960px (manter).

### 4. Features
- `.feat-card` padding 32px → ~24px em ≤640px. Grid já empilha (2 col em 960, 1 col em 640).

### 5. Steps
- Grid já empilha (2 col em 960, 1 col em 640; trilha `::before` oculta em 960).
- Reduzir levemente o padding do `.step-card` em ≤640px.

### 6. Infocomex (powered + cadeia de confiança)
- `.powered` padding 80px → ~56px em ≤640px.
- Grid e stats já empilham; cadeia de confiança já é coluna única.

### 7. FAQ
- `.faq-q` fonte 17px → ~15.5px em ≤640px.
- **Aumentar `.faq-item.open .faq-a { max-height }`** de 320px para ~600px em ≤640px
  (respostas longas quebram em mais linhas no celular e seriam cortadas).

### 8. Contato
- `.field input, .field textarea` com `font-size: 16px` em ≤640px (evita zoom automático
  do iOS ao focar). Grid e form já empilham.

### 9. Footer
- `.foot-bottom`: em ≤640px, `flex-direction: column; align-items: flex-start; gap: 14px`
  (copyright acima dos links).

### 10. Global
- `body { overflow-x: hidden }` como guarda contra estouros residuais.
- Garantir áreas de toque ≥44px em links de navegação, itens do menu e perguntas do FAQ.
- `<meta viewport>` já presente em `index.html`.

## Testes / verificação
- Servir localmente (ex.: `python -m http.server`) e abrir a página.
- Validar nas larguras **360px, 390px e 768px**:
  - Sem scroll horizontal em nenhuma seção.
  - Menu hambúrguer abre, fecha e navega corretamente.
  - Mock do dashboard cabe na tela (sem CNPJ, sidebar oculta).
  - FAQ expande respostas longas sem cortar texto.

## Fora de escopo
- Componentes não renderizados em `App` (LogosStrip, abas de Produto, Pricing, selos avulsos)
  não recebem ajuste.
- Sem mudança de conteúdo/copy ou de layout desktop.
