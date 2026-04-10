# Deployment Guide - RGOMES Engenharia

## Pré-requisitos

1. **Node.js** 18+ instalado
2. **Conta Supabase** configurada
3. **Domínio** registrado (opcional)
4. **HTTPS** certificado (produção)

## Configuração do Ambiente

### 1. Variáveis de Ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Configure as variáveis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=seu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_servico

# Site
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_SITE_NAME=RGOMES Engenharia

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=seu_google_analytics_id

# Contato
CONTACT_EMAIL=cotato@rgomesengenharia.com
CONTACT_PHONE=+5592981242509
```

### 2. Configuração do Supabase

1. Acesse o painel Supabase
2. Execute o script `scripts/setup-database.sql`
3. Verifique as tabelas criadas:
   - `projects`
   - `contacts` 
   - `work_with_us`

### 3. Upload de Imagens

Substitua os placeholders de imagem:

```
public/images/og-image.jpg (1200x630px)
public/favicon.ico (32x32px)
public/icons/logo.svg
```

## Build e Deploy

### Desenvolvimento

```bash
npm run dev
```

### Build de Produção

```bash
npm run build
npm start
```

### Deploy em Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no Vercel
3. Deploy automático

```bash
npm install -g vercel
vercel --prod
```

### Deploy em Netlify

1. Conecte seu repositório ao Netlify
2. Configure build command: `npm run build`
3. Configure publish directory: `.next`
4. Adicione variáveis de ambiente

### Deploy em Docker

```bash
# Build
docker build -t rgomes-engenharia .

# Run
docker run -p 3000:3000 rgomes-engenharia
```

## Verificações Pós-Deploy

### 1. Funcionalidade

- [ ] Homepage carrega corretamente
- [ ] Navegação funciona
- [ ] Formulários enviam dados
- [ ] Tradução PT/EN funciona
- [ ] Imagens carregam

### 2. SEO e Performance

- [ ] Metadados configurados
- [ ] Sitemap.xml acessível
- [ ] Robots.txt configurado
- [ ] Open Graph images funcionam
- [ ] Page speed > 90

### 3. Banco de Dados

- [ ] Conexão Supabase funciona
- [ ] Projetos exibidos
- [ ] Formulários salvam dados
- [ ] RLS policies ativas

## URLs Importantes

- **Site**: `https://seu-dominio.com`
- **Admin Supabase**: `https://app.supabase.com`
- **Sitemap**: `https://seu-dominio.com/sitemap.xml`
- **Robots**: `https://seu-dominio.com/robots.txt`

## Monitoramento

### Google Analytics

Configure GA4 no `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Performance

Use ferramentas:
- Google PageSpeed Insights
- GTmetrix
- Web Vitals

## Backup

### Supabase

Backup automático incluído no plano Pro.

### Código

```bash
git add .
git commit -m "Deploy production"
git push origin main
```

## Manutenção

### Atualizações

1. Teste em ambiente de desenvolvimento
2. Build e testes
3. Deploy em produção
4. Verificação pós-deploy

### Conteúdo

Atualize através do painel Supabase ou diretamente no banco.

## Suporte

- **Documentação Next.js**: https://nextjs.org/docs
- **Documentação Supabase**: https://supabase.com/docs
- **Suporte RGOMES**: contato@rgomesengenharia.com
