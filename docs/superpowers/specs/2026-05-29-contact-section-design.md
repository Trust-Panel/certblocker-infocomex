# Seção de Contato Comercial — Design

**Data:** 2026-05-29
**Contexto:** Landing page do CertBlocker (React via Babel standalone, site estático, tema navy/royal).

## Objetivo

Criar uma seção de contato comercial (estilo "Solicite uma demonstração") logo antes do
footer, inspirada numa referência, mas em versão própria do CertBlocker.

## Decisões (aprovadas pelo usuário)

1. **Posição:** substitui a seção `FinalCTA` atual. A nova seção fica logo antes do `<Footer/>`.
2. **Formulário:** **somente visual por enquanto.** Campos digitáveis, `onSubmit` com
   `preventDefault` e sem ação real. Marcar com comentário onde plugar WhatsApp/backend depois.
3. **Layout:** split — info à esquerda, card de formulário à direita — restilizado no tema
   navy/azul do CertBlocker (não verde como a referência).
4. **Contatos:** placeholders editáveis, concentrados num objeto no topo do componente.

## Estrutura

`ContactSection` (substitui `FinalCTA` em `src/cta-footer.jsx`; `app.jsx` passa a renderizá-la).

- **Coluna esquerda**
  - Kicker: `— Contato comercial`
  - H2 (Space Grotesk, balance): "Vamos transformar a gestão de A1 da sua empresa."
  - Subtítulo curto.
  - 3 cards de contato (chip de ícone + título + valor + sublinha), separados por borda fina:
    E-mail, WhatsApp comercial, Horário institucional.
- **Coluna direita** — card de formulário (`--bg-card`, borda, sombra, raio `--r-xl`)
  - Título "Solicite uma demonstração" + linha de apoio.
  - Campos com labels mono/maiúsculas: EMPRESA, NOME COMPLETO, E-MAIL CORPORATIVO, MENSAGEM (textarea).
  - Botão full-width `btn btn-royal btn-lg`: "Solicitar demonstração →" (visual apenas).
  - Rodapé: ícone de cadeado + "Dados protegidos pela LGPD".

## Estilo / reuso

- Tokens existentes: `--royal-600`, `--bg-card`, `--line`, `--font-mono`, raios e sombras.
- Inputs escuros com foco em glow azul (consistente com o resto do site).
- Empilha em uma coluna no mobile (breakpoint ~960px).

## Ícones

Adicionar a `src/icons.jsx` (mesmo estilo stroke 1.6): `mail`, `phone`, `clock`.

## Fora de escopo

- Integração real de envio (WhatsApp/e-mail/backend) — fica para depois.
- Validação de formulário.
