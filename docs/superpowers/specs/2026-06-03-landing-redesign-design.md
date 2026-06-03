# Redesign da landing CertBlocker — Design Spec

**Data:** 2026-06-03
**Objetivo:** Reconstruir a landing page para ficar idêntica às imagens de referência fornecidas pelo cliente, mantendo duas seções do site atual (Infocomex/cadeia de confiança e faixa de logos) adaptadas ao novo estilo.

## Contexto

O site atual é uma SPA sem build: React 18 via UMD + Babel standalone, componentes em JSX por arquivo (`src/*.jsx`) carregados pelo `index.html`, e um único `styles.css`. Esta abordagem é mantida — apenas reescrevemos componentes e CSS. Não há migração de tooling.

Arquivos de componentes existentes (mantidos como divisão de trabalho):
- `src/icons.jsx` — biblioteca de ícones SVG (`I.*`)
- `src/seals.jsx` — selos/trust row
- `src/hero.jsx` — Header + Hero (+ DashboardMock atual, a ser substituído)
- `src/sections.jsx` — Features, Steps, Infocomex
- `src/cta-footer.jsx` — FAQ, Contato, Footer
- `src/app.jsx` — composição

## Decisões fechadas (com o cliente)

1. **Marca:** padronizar **"CertBlocker"** em todo o texto. URLs/domínios existentes (`certbloker.com.br` no `<canonical>`, e-mails) **não** são alterados.
2. **Seções extras:** manter **faixa de logos** e **Infocomex/cadeia de confiança**, restilizadas para o novo visual.
3. **Como funciona:** **5 etapas** numeradas (01–03 das imagens + 04 "Instalação do app" e 05 "Login seguro & uso controlado" do conteúdo atual) + 1 **card azul de destaque** "Segurança institucional por padrão".
4. **Contato:** botão **"Enviar via WhatsApp"** apenas visual (sem ação). Contatos **atuais** mantidos: `comercial@certbloker.com.br` e `(66) 99262-3898`.
5. **FAQ:** 4 perguntas como nas imagens. A 5ª (LGPD) é removida (pode ser restaurada depois).
6. **Ilustrações:** cards flutuantes do hero, visuais dos passos e ícones são recriados em CSS/SVG. Apenas 5 imagens são arquivos reais (ver Assets).

## Assets (já presentes em `assets/`)

| Uso | Arquivo |
|-----|---------|
| Foto da equipe (hero) | `hero-team.jpeg` |
| Screenshot do dashboard ("A PLATAFORMA") | `dashboard.jpeg` |
| Depoimento — CEO · Gestão Executiva (grande) | `depo-ceo.jpg` |
| Depoimento — Equipe Fiscal (pequena, topo) | `depo-fiscal.jpeg` |
| Depoimento — Departamento Financeiro (pequena, baixo) | `depo-financeiro.jpg` |
| Logo | `certbloker-logo.png` (existente) |
| Logos cadeia | `serpro-logo.png`, `icp-logo.png`, `infocomex-logo.png` (existentes) |

## Sistema visual (tokens)

Reaproveita os tokens atuais (`--bg`, `--royal-*`, `--ink-*`, fontes Inter/Space Grotesk/JetBrains Mono). Adições:
- `--gold` (~`#c9962f`) e `--gold-soft` para os kickers "A PLATAFORMA", "Feito para empresas sérias", "PERGUNTAS FREQUENTES", "Contato comercial".
- Kickers em **azul royal** para "RECURSOS PRINCIPAIS" e "COMO FUNCIONA".
- Kickers em estilo `——— TEXTO` (mono, uppercase, letter-spacing), com filete horizontal quando aparece nas imagens.
- Headings: Space Grotesk, branco, bold, grandes.
- Card de destaque azul: fundo `--royal` sólido com texto escuro (`--navy-1000`).

## Estrutura e conteúdo por seção

Ordem final de renderização em `app.jsx`:

### 1. Header (`src/hero.jsx`)
- Logo CertBlocker à esquerda.
- Nav: **Recursos** (`#recursos`) · **Como Funciona** (`#como-funciona`) · **FAQ** (`#faq`) · **Contato** (`#contato`).
- CTA à direita: **"Teste grátis agora →"** (`#contato`).
- Menu mobile (hambúrguer) mantém os mesmos links + CTA.

### 2. Hero (`src/hero.jsx`)
- Eyebrow: `● PLATAFORMA CORPORATIVA • GESTÃO DE CERTIFICADOS DIGITAIS A1`
- H1: **"Segurança institucional na gestão dos seus `certificados digitais`."** (trecho "certificados digitais" em azul royal; ponto final no acento).
- Subtítulo: "A CertBlocker automatiza 100% do ciclo de vida dos certificados A1 da sua empresa, com criptografia bancária, alertas antecipados e controle granular de acesso. Zero certificados vencidos. Zero riscos operacionais."
- Botões: **"Agendar Demonstração →"** (primário azul) · **"Como funciona"** (secundário/escuro) → `#como-funciona`.
- Selos (linha inferior, mono): `✓ LGPD Compliant` · `🔒 AES-256` · `↻ Backup Contínuo`.
- Lado direito: `hero-team.jpeg` em card arredondado + 3 cards flutuantes (CSS):
  - Topo-esquerda: rótulo `CERTIFICADOS ATIVOS` / **"150 Monitorados"**.
  - Direita-meio: rótulo `ALERTA DE RENOVAÇÃO` / **"Vence em 30d"** + badge `Auto`.
  - Baixo: rótulo `CONFORMIDADE GERAL` / "Seguros & Protegidos" · **98.4%** + barra de progresso.

### 3. Barra de stats (`src/hero.jsx` ou `sections.jsx`)
4 colunas, número grande em azul + label mono:
- **100%** — CERTIFICADOS SOB CONTROLE
- **AES-256** — CRIPTOGRAFIA DE PADRÃO BANCÁRIO
- **24/7** — MONITORAMENTO CONTÍNUO
- **<2h** — TEMPO DE RESPOSTA COMERCIAL

### 4. Faixa de logos (`src/hero.jsx`) — MANTIDA, restilizada
- Label: "Empresas e escritórios que centralizam certificados no CertBlocker".
- Linha de logos textuais existentes (Aurora, Mendes&Co, Vidotti, Pereira Log, LimaSouza, North/Sul).

### 5. A PLATAFORMA (`src/sections.jsx`)
- Kicker dourado centralizado: `——— A PLATAFORMA ———`.
- H2 centralizado: **"Um painel único para toda a gestão de certificados digitais."**
- Subtítulo: "Visão consolidada de status, vencimentos, usuários e auditoria, sem planilhas, sem e-mails perdidos."
- Screenshot `dashboard.jpeg` dentro de moldura com chrome de navegador (barra com dots + URL `certbloker.com.br/dashboard`).
- 3 cards abaixo (label dourado + título + descrição):
  - `STATUS` — **"Visão instantânea"** — "Válidos, expirando, expirados e totais, em cartões claros, com semáforo de criticidade."
  - `CERTIFICADOS RECENTES` — **"Tabela operacional"** — "Tipo, emissor, validade e status de cada certificado, com filtros e exportação rápida."
  - `GESTÃO` — **"Clientes, usuários, grupos"** — "Organize por cliente, defina grupos e controle permissões a partir de um menu lateral único."

### 6. RECURSOS PRINCIPAIS (`src/sections.jsx`)
- Kicker azul: `RECURSOS PRINCIPAIS`.
- H2: **"Tudo que os seus departamentos de TI, Contabilidade e Jurídico precisam."**
- Subtítulo: "Infraestrutura projetada para empresas que não podem parar por causa de um certificado vencido ou vazado."
- Grid 2×2; cada item: ícone + rótulo `0X — CATEGORIA` (mono) + título + descrição + bullets:
  - **01 — ALERTAS** · "Alertas de vencimento e prazos de renovação" · "Notificações automáticas enviadas com antecedência configurável. Seu time renova no momento exato, nunca antes, nunca tarde demais." · Bullets: Alertas personalizáveis por período (30/15/7 dias); Notificações via e-mail; Dashboard consolidado com linha do tempo.
  - **02 — SEGURANÇA** · "Uso seguro sem armazenamento local" · "O certificado nunca é baixado na máquina do colaborador. Toda operação acontece em ambiente isolado na nuvem, com rastreabilidade ponta-a-ponta." · Bullets: Zero arquivos locais na máquina do usuário; Execução direta via app autenticado; Eliminação completa de risco de cópia.
  - **03 — GOVERNANÇA** · "Permissões por usuário e por grupo" · "Controle granular com princípio de menor privilégio. Defina quem pode ver, usar e gerenciar cada certificado por departamento, cargo ou projeto." · Bullets: Grupos por área (Fiscal, Financeiro, Compras); Níveis de acesso totalmente customizáveis.
  - **04 — AUDITORIA** · "Logs completos e restrição de acesso" · "Cada ação é registrada com identidade, timestamp e contexto. Você sabe quem acessou, de onde, quando e para qual finalidade." · Bullets: Trilha de auditoria imutável.

### 7. Feito para empresas sérias (`src/sections.jsx`)
- Kicker dourado: `— Feito para empresas sérias`.
- H2: **"Quando o seu negócio depende de conformidade, o certificado digital não é detalhe."**
- Texto: "Um certificado vencido pode interromper a emissão de notas, bloquear processos judiciais, travar pagamentos e gerar multas tributárias significativas. A CertBlocker foi desenhada junto com equipes de Controladoria, TI e Jurídico de médias e grandes empresas para eliminar esse risco, sem adicionar atrito operacional."
- Layout: coluna esquerda com 3 fotos (grande `depo-ceo.jpg` com legenda "CEO · Gestão Executiva"; pequena topo `depo-fiscal.jpeg` "Equipe Fiscal"; pequena baixo `depo-financeiro.jpg` "Departamento Financeiro"). Coluna direita com texto + caixa de citação:
  - Citação: *"Migramos o controle de 80 certificados para a CertBlocker em duas semanas. Desde então, nunca mais tivemos um vencimento silencioso. A equipe fiscal recuperou o foco em estratégia."*
  - Atribuição: `DIRETORIA DE TI — GRUPO CORPORATIVO BRASILEIRO`.

### 8. Infocomex / Cadeia de confiança (`src/sections.jsx`) — MANTIDA, restilizada
- Conteúdo atual preservado (Grupo Infocomex, cadeia SERPRO → ICP-Brasil → Infocomex → CertBlocker, stats 2010/+15/100%, CTA "Conhecer a Infocomex").
- Ajuste visual para harmonizar com o novo design (tipografia, kickers, espaçamentos). Marca → "CertBlocker".

### 9. COMO FUNCIONA (`src/sections.jsx`)
- Kicker azul centralizado: `COMO FUNCIONA`.
- H2: **"Implementação em 5 etapas, sem consultoria paralela."**
- Subtítulo: "Onboarding guiado pela nossa equipe. Seu time opera com autonomia a partir do primeiro dia."
- 5 cards largos numerados (número grande + título + descrição + tag-bullet à esquerda; visual decorativo CSS/SVG à direita):
  - **01 Administrador Principal** — "Um usuário-chave (CEO, Diretor de TI, CFO ou Controller) é designado com perfil de administrador e passa a gerenciar toda a plataforma institucionalmente." — tag `● CONTROLE TOTAL` — visual: avatar com selo de check.
  - **02 Cadastro de Certificados** — "A plataforma realiza apenas a leitura dos certificados A1 em ambiente criptografado AES-256. O arquivo e a senha nunca são enviados nem armazenados em nossos servidores." — tag `● CRIPTOGRAFIA BANCÁRIA` — visual: caixa `.PFX · A1`.
  - **03 Usuários & Grupos** — "Crie colaboradores, organize por grupos departamentais e defina de forma cirúrgica quais certificados cada grupo pode acessar." — tag `● ACESSO MÍNIMO NECESSÁRIO` — visual: diagrama de nós/pessoa.
  - **04 Instalação do app** — "Um app leve é instalado no Windows do colaborador. Distribuição via GPO para ambientes gerenciados." — tag `● DISTRIBUIÇÃO VIA GPO` — visual: janela/engrenagem.
  - **05 Login seguro & uso controlado** — "O sistema libera apenas os certificados do grupo. Sem download, sem arquivos soltos, sem vazamento." — tag `● ZERO VAZAMENTO` — visual: cadeado.
- Card azul de destaque (final): ícone escudo + **"Segurança institucional por padrão"** + "O colaborador nunca baixa o certificado. Tudo fica protegido na nuvem CertBlocker, com rastreabilidade total de cada operação." + chips `SEM DOWNLOADS` · `LOG COMPLETO` · `AUDITÁVEL`.

### 10. FAQ (`src/cta-footer.jsx`)
- Layout 2 colunas: esquerda fixa (kicker dourado `— PERGUNTAS FREQUENTES`, H2 **"Tudo o que você precisa saber antes de decidir."**, subtítulo "Respostas diretas para as dúvidas mais comuns de diretores de TI, controladores e gestores fiscais."); direita com accordion.
- 4 perguntas (respostas adaptadas do conteúdo atual):
  - "O que é a CertBlocker?"
  - "Meus certificados ficam seguros na plataforma?"
  - "Como funciona o controle de acesso por grupos?"
  - "Funciona no Windows?" — "Sim. O aplicativo corporativo é compatível com Windows. Não há suporte a macOS ou Linux neste momento."

### 11. Contato comercial (`src/cta-footer.jsx`)
- Layout 2 colunas. Esquerda: kicker dourado `— Contato comercial`, H2 **"Transforme a gestão de certificados da sua empresa."**, subtítulo "Fale com nossa equipe e descubra em 30 minutos como reduzir risco operacional, eliminar multas e devolver tempo para o seu time."
  - Card E-mail: `comercial@certbloker.com.br` — "Resposta em até 2h úteis".
  - Card WhatsApp comercial: `(66) 99262-3898` — "Atendimento dedicado".
- Direita: card de formulário "Solicite uma demonstração" / "Preencha e retornaremos em até 2 horas úteis." Campos: Empresa (Razão social), Nome completo (Seu nome), E-mail corporativo (nome@empresa.com.br), Mensagem (Conte-nos sobre o contexto da sua empresa...). Botão **"Enviar via WhatsApp →"** (visual, `preventDefault`). Rodapé do form: `🔒 Dados protegidos pela LGPD`.

### 12. Footer (`src/cta-footer.jsx`)
- Esquerda: tagline "A plataforma corporativa mais confiável para gerenciamento de certificados digitais A1 no Brasil."
- 3 colunas de links:
  - **Produto:** Recursos (`#recursos`), Como funciona (`#como-funciona`), FAQ (`#faq`).
  - **Empresa:** Contato (`#contato`), Parceiros (`#infocomex`), Imprensa (`#`).
  - **Legal:** Política de Privacidade, Termos de Uso, LGPD.
- Linha inferior: `© 2026 CERTBLOCKER. TODOS OS DIREITOS RESERVADOS.` + `@CERTBLOCKER`.

## Responsividade

Manter a abordagem responsiva já existente (mobile-first breakpoints no `styles.css`). Cada nova seção precisa de variante mobile:
- Hero: foto e cards flutuantes empilham abaixo do texto; cards flutuantes reduzem/recolhem.
- Stats: 4 colunas → 2×2 no mobile.
- A PLATAFORMA: 3 cards → 1 coluna; screenshot com scroll/zoom controlado.
- RECURSOS: grid 2×2 → 1 coluna.
- Feito para empresas: fotos e texto empilham.
- Como funciona: cards largos → visual decorativo some/encolhe; conteúdo full-width.
- FAQ/Contato: 2 colunas → 1 coluna.

## Fora de escopo
- Integração real do formulário/WhatsApp (apenas visual).
- Backend, analytics, novas rotas.
- Migração de build/tooling.
- Alteração de domínios/URLs canônicas.

## Critérios de sucesso
- Cada seção corresponde visualmente às imagens de referência (desktop) com fidelidade alta.
- Marca "CertBlocker" consistente em todo o texto.
- Seções Infocomex/cadeia e logos preservadas e harmonizadas.
- Site responsivo em mobile sem quebras.
- Sem regressões funcionais (menu mobile, accordion FAQ, âncoras de navegação).
