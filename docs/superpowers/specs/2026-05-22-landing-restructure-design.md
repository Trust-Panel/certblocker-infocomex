# CertBlocker Landing Page — Reestruturação

**Data:** 2026-05-22  
**Status:** Aprovado para implementação

---

## Contexto

A landing page atual mistura as identidades de CertBlocker e Infocomex de forma que cria confusão sobre o produto. CertBlocker é uma **plataforma de gestão de certificados digitais A1**; Infocomex é a **parceira AC** que faz a emissão. O site atual implica que CertBlocker faz emissão diretamente (tem seção de AR própria, FAQs incorretos, copy que diz "nossa AR"). Além disso, a seção de planos deve ser removida e os preços não serão exibidos publicamente.

---

## Objetivo

- Posicionar CertBlocker claramente como plataforma de gestão
- Posicionar Infocomex como parceira estratégica de emissão (link para infocomex.com.br)
- Remover seção de planos e seção de AR Corporativa
- Usar imagens reais de logos (ICP-Brasil, SERPRO) em vez de SVG genéricos
- Melhorar SEO com meta tags, Open Graph e JSON-LD

---

## 1. Estrutura da Página

### Ordem final das seções (app.jsx)

```
Header
Hero
LogosStrip
Features
Product
Steps
InforcomexPartner       ← substitui PoweredByInfocomex
FAQ
FinalCTA
Footer
```

**Removidos:** `<ArSection/>`, `<Pricing/>`

---

## 2. Renomeação de Arquivos

| Atual | Novo | Motivo |
|---|---|---|
| `CertBlocker Landing.html` | `index.html` | Espaço no nome, não é padrão |
| `src/ar-pricing.jsx` | `src/cta-footer.jsx` | Nome não reflete conteúdo após remoções |

A tag `<script src="src/ar-pricing.jsx">` no HTML deve ser atualizada para `src/cta-footer.jsx`.

---

## 3. Correções de Posicionamento (Copy)

Vários pontos do código atual incorretamente atribuem emissão ao CertBlocker. Todos devem ser corrigidos:

### hero.jsx — Hero subtitle
- **Atual:** "Plataforma de gestão e emissão de certificados digitais A1 [...] emita pela AR Infocomex/CertBloker"
- **Novo:** "Plataforma de gestão de certificados digitais A1 [...] emita pela Infocomex"

### sections.jsx — Product tab "Emissão A1"
- O tab mostra videoconferência de validação, que é serviço da Infocomex, não do CertBlocker
- **Substituir** por tab **"Cofre"**: cofre criptografado AES-256, permissões granulares por usuário/empresa, e log de auditoria completo de cada acesso — funcionalidade exclusiva do CertBlocker, sem sobreposição com o tab "Automação" que já cobre o fluxo de renovação

### sections.jsx — Features: "Renovação automatizada"
- **Atual:** "Toda a renovação flui dentro da nossa AR"
- **Novo:** "Todo o fluxo de renovação é coordenado pela plataforma — a emissão é feita pela Infocomex, nossa parceira certificadora"

### sections.jsx — Steps: Step 04
- **Atual:** "Emita seu primeiro A1 pela nossa AR"
- **Novo:** "Emita seu primeiro A1 via Infocomex, nossa parceira certificadora"

### cta-footer.jsx — FAQs
Os seguintes FAQs contêm posicionamento incorreto e devem ser reescritos:

- **"Quem está por trás do CertBloker?"** → CertBlocker é a plataforma de gestão; Infocomex é a AC parceira que realiza a emissão
- **"O CertBloker é uma Autoridade Certificadora (AC)?"** → CertBlocker não é AC nem AR. A Infocomex é a AC credenciada SERPRO/ICP-Brasil; o CertBlocker integra com a Infocomex para emissão
- **"A emissão por videoconferência tem validade jurídica?"** → O processo de emissão é da Infocomex; o CertBlocker encaminha para a Infocomex quando uma emissão é necessária

### cta-footer.jsx — Footer nav links
Remover links para `#ar` (AR Corporativa) e `#planos` (Planos & preços) pois as seções serão removidas.

### hero.jsx — Header nav
Remover links `#ar` e `#planos` do nav.

---

## 4. Nova Seção: InforcomexPartner

Substitui `PoweredByInfocomex` em `sections.jsx`. Layout em duas colunas.

### Coluna esquerda (texto)
- **Kicker:** "Parceria certificada"
- **H2:** "Certificados emitidos pela Infocomex. Gerenciados pelo CertBlocker."
- **Copy:** Explicar a divisão: CertBlocker cuida do cofre criptografado, alertas, controle de acesso, auditoria e automação. A Infocomex, AC credenciada pelo SERPRO desde 2010 e parte da cadeia ICP-Brasil, cuida de toda a emissão com validade jurídica plena.
- **Botão CTA:** "Conhecer a Infocomex →" → `https://infocomex.com.br/` (`target="_blank" rel="noopener noreferrer"`)

### Coluna direita (credenciais visuais)
Três cards de credencial usando imagens reais:

1. `assets/serpro-logo.png` — label "AC Credenciada SERPRO"
2. `assets/icp-logo.png` — label "Cadeia ICP-Brasil"
3. Placeholder visual para Infocomex (card cinza com texto "Infocomex" até imagem ser adicionada em `assets/infocomex-logo.png`)

Os componentes `SerproSeal` e `IcpBrasilSeal` em `seals.jsx` devem usar `<img>` com as imagens reais em vez de SVG genéricos.

---

## 5. SEO

### `index.html` — `<head>`

**Title:**
```html
<title>CertBlocker — Plataforma de Gestão de Certificados Digitais A1</title>
```

**Meta description (~155 chars):**
```html
<meta name="description" content="Gerencie certificados A1 da sua empresa em um cofre criptografado. Alertas automáticos, renovação sem deslocamento e emissão via Infocomex, AC credenciada ICP-Brasil." />
```

**Open Graph:**
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="CertBlocker — Plataforma de Gestão de Certificados Digitais A1" />
<meta property="og:description" content="Gerencie certificados A1 da sua empresa em um cofre criptografado. Alertas automáticos, renovação sem deslocamento e emissão via Infocomex, AC credenciada ICP-Brasil." />
<meta property="og:url" content="https://certbloker.com.br/" />
```

**Robots e canonical:**
```html
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://certbloker.com.br/" />
```
> ⚠️ Placeholder: substituir `https://certbloker.com.br/` pelo domínio real antes de publicar. Mesmo valor deve ser usado em `og:url`.

**JSON-LD (dois schemas):**

```json
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
```

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CertBlocker",
  "url": "https://certbloker.com.br/",
  "description": "Plataforma de gestão de certificados digitais A1, com emissão via parceria Infocomex.",
  "sameAs": ["https://infocomex.com.br/"]
}
```

### HTML Semântico
- Garantir `<h1>` único no Hero com a proposta de valor principal
- Verificar hierarquia `h1 → h2 → h3` sem pulos
- `alt` descritivos em todas as `<img>` de logos: `alt="Logo SERPRO — Serviço Federal de Processamento de Dados"`, `alt="Logo ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira"`, `alt="Logo Infocomex — Autoridade Certificadora"`

---

## 6. Arquivos Afetados

| Arquivo | Tipo de mudança |
|---|---|
| `CertBlocker Landing.html` → `index.html` | Renomear + atualizar `<script>`, adicionar SEO tags |
| `src/app.jsx` | Remover `<ArSection/>` e `<Pricing/>`, renomear `PoweredByInfocomex` → `InforcomexPartner` |
| `src/hero.jsx` | Corrigir copy Hero subtitle e eyebrow; remover nav links `#ar` e `#planos` |
| `src/sections.jsx` | Substituir `PoweredByInfocomex` por `InforcomexPartner`; corrigir Features e Steps copy; substituir tab "Emissão A1" |
| `src/ar-pricing.jsx` → `src/cta-footer.jsx` | Renomear; remover componentes `Pricing` e `ArSection`; corrigir FAQs; atualizar Footer nav |
| `src/seals.jsx` | Atualizar `SerproSeal` e `IcpBrasilSeal` para usar `<img>` reais |
