# RGOMES Engenharia - Site Institucional

Site institucional da RGOMES Engenharia, empresa de engenharia civil em Manaus. Desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Supabase.

## Stack Tecnológica

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Supabase** (PostgreSQL + BaaS)
- **Resend** (envio de emails)
- **React Hook Form**
- **React Icons**

## Requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com)
- Conta no [Vercel](https://vercel.com)
- Conta no [Resend](https://resend.com) (para envio de emails)

## Configuração Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar logo

**Obrigatório:** Copie o arquivo `Logo.png` (raiz do projeto) para `public/logo.png`:

```powershell
# Windows (PowerShell) - execute na pasta do projeto
Copy-Item "Logo.png" -Destination "public\logo.png"
```

A logomarca já possui fundo transparente e será exibida no header e footer.

### 3. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com) e crie uma conta (plano gratuito disponível).
2. Crie um novo projeto: **New Project**.
3. Configure nome, senha e região (**South America - São Paulo**).
4. Aguarde a criação do projeto (~2 minutos).
5. Vá em **SQL Editor** e execute o conteúdo completo do arquivo `src/lib/supabase/schema.sql`.
6. Em **Settings > API**, copie:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (manter em segredo)

### 4. Configurar Resend (Email)

1. Acesse [resend.com](https://resend.com) e crie uma conta (3000 emails/mês grátis).
2. Verifique seu domínio:
   - Vá em **Domains** → **Add Domain**
   - Adicione `rgomesengenharia.com` (ou use `onboarding@resend.dev` para testes)
   - Siga as instruções de DNS fornecidas pelo Resend
3. Após verificação do domínio, copie a **API Key**:
   - Vá em **API Keys** → Crie uma nova chave
   - Copie a chave para `RESEND_API_KEY`
4. Configure o email remetente:
   - `RESEND_FROM_EMAIL=contato@rgomesengenharia.com` (ou `onboarding@resend.dev` para testes)

> **Nota:** O formulário de contato funciona mesmo sem o Resend configurado, mas não enviará emails automaticamente. Os contatos serão salvos no Supabase (se configurado) ou logados no console.

### 5. Variáveis de ambiente

```bash
# Copie o exemplo
cp .env.local.example .env.local

# Edite .env.local e preencha com suas credenciais reais
```

Variáveis necessárias:

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase | ✅ Sim |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anônima (pública) | ✅ Sim |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave service role (para API de contatos) | ✅ Sim |
| `NEXT_PUBLIC_SITE_URL` | URL do site (ex: https://rgomes-engenharia.vercel.app) | ✅ Sim |
| `WHATSAPP_NUMBER` | Número WhatsApp (55 + DDD + número, sem espaços) | ✅ Sim |
| `CONTACT_EMAIL` | Email de destino dos contatos | ✅ Sim |
| `RESEND_API_KEY` | API Key do Resend (envio de emails) | ⚠️ Opcional |
| `RESEND_FROM_EMAIL` | Email remetente (deve estar verificado no Resend) | ⚠️ Opcional |

### 5. Executar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy no Vercel

### Opção A: Via GitHub

1. Crie um repositório no GitHub.
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/rgomes-engenharia.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) → **Import Project** → Selecione o repositório.
4. Configure o projeto (framework Next.js é detectado automaticamente).
5. **Importante:** Adicione todas as variáveis de ambiente no painel do Vercel (Settings > Environment Variables).
6. Clique em **Deploy**.

### Opção B: Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

Adicione as variáveis de ambiente quando solicitado ou pelo painel do Vercel.

## Estrutura do Projeto

```
rgomes-engenharia/
├── public/           # Assets estáticos (logo.png)
├── src/
│   ├── app/          # App Router - páginas e layouts
│   │   ├── api/      # API routes (contatos)
│   │   ├── sobre/
│   │   ├── servicos/
│   │   ├── projetos/
│   │   ├── tecnologia/
│   │   └── contato/
│   ├── components/   # Componentes reutilizáveis
│   │   ├── layout/   # Header, Footer
│   │   ├── sections/ # Seções da home
│   │   ├── forms/   # Formulários
│   │   └── common/  # WhatsApp button, etc.
│   └── lib/          # Supabase client, utils, schema SQL
├── .env.local.example
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

## Páginas

- **/** - Home (hero, serviços, projetos, tecnologia, depoimentos, CTA, contato)
- **/sobre** - Sobre a empresa
- **/servicos** - Lista de serviços
- **/servicos/[slug]** - Detalhe de cada serviço
- **/projetos** - Portfólio de projetos
- **/projetos/[slug]** - Detalhe de projeto
- **/tecnologia** - Soluções tecnológicas
- **/contato** - Formulário de contato

## Banco de Dados (Supabase)

Tabelas criadas pelo `schema.sql`:

- **services** - Serviços oferecidos (pré-populados)
- **projects** - Projetos/portfólio
- **contacts** - Leads do formulário de contato
- **testimonials** - Depoimentos de clientes

Para adicionar projetos e depoimentos, use o painel do Supabase (Table Editor) ou crie uma área administrativa futura.

## Pós-Deploy - Checklist

- [ ] Testar formulário de contato (verificar leads no Supabase)
- [ ] Testar envio de email (verificar se chega em `contato@rgomesengenharia.com`)
- [ ] Configurar domínio personalizado no Vercel
- [ ] Atualizar `NEXT_PUBLIC_SITE_URL` com o domínio real
- [ ] Adicionar domínio em Supabase → Authentication → URL Configuration
- [ ] Verificar domínio no Resend (para envio de emails)
- [ ] Cadastrar projetos reais na tabela `projects`
- [ ] Adicionar fotos via Supabase Storage (obter URLs públicas)
- [ ] Inserir depoimentos na tabela `testimonials`
- [ ] Atualizar número de WhatsApp
- [ ] Testar responsividade em dispositivos móveis
- [ ] Verificar SEO com Google Search Console

## Licença

Projeto privado - RGOMES Engenharia.
