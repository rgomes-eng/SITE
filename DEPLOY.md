# Guia Rápido de Deploy - RGOMES Engenharia

## Antes do Deploy

1. **Copie o logo** para a pasta `public`:
   ```
   Copy-Item "Logo.png" -Destination "public\logo.png"
   ```

2. **Configure o Supabase** e execute o `schema.sql` no SQL Editor.

3. **Crie o arquivo `.env.local`** com as variáveis (copie de `.env.local.example`).

## Deploy no Vercel

### Método 1: Importar do GitHub

1. Crie um repositório no GitHub.
2. Envie o código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RGOMES Engenharia"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/rgomes-engenharia.git
   git push -u origin main
   ```
3. Acesse [vercel.com/new](https://vercel.com/new).
4. Importe o repositório.
5. Em **Environment Variables**, adicione:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (após deploy: `https://seu-projeto.vercel.app`)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
6. Clique em **Deploy**.

### Método 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Adicione as variáveis de ambiente no painel do Vercel após o primeiro deploy.

## Pós-Deploy

1. Atualize `NEXT_PUBLIC_SITE_URL` com a URL real do Vercel.
2. No Supabase: **Settings > API > URL Configuration** — adicione a URL do site em **Site URL**.
3. Teste o formulário de contato e verifique os registros na tabela `contacts`.
4. Cadastre projetos e depoimentos no Supabase para exibir conteúdo real.
