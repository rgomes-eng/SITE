# GUIA DE DEPLOY - RGOMES ENGENHARIA
# Publicação em www.rgomesengenharia.com

## 🚀 PRÉ-REQUISITOS

### 1. Configuração do Domínio
- ✅ Domínio `www.rgomesengenharia.com` registrado
- ✅ DNS configurado para apontar para Vercel
- ✅ Certificado SSL configurado

### 2. Variáveis de Ambiente
- ✅ Supabase URL e chaves configuradas
- ✅ Variáveis de produção prontas
- ✅ Analytics configurado (opcional)

## 📋 CONFIGURAÇÕES JÁ REALIZADAS

### ✅ 1. Metadata Atualizado
- URL base alterada para `https://www.rgomesengenharia.com`
- Nome do site configurado
- Descrição otimizada para SEO

### ✅ 2. Vercel.json Configurado
```json
{
  "domains": ["www.rgomesengenharia.com", "rgomesengenharia.com"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://www.rgomesengenharia.com",
    "NEXT_PUBLIC_SITE_NAME": "RGOMES Engenharia",
    "CONTACT_EMAIL": "cotato@rgomesengenharia.com",
    "CONTACT_PHONE": "+5592981242509"
  }
}
```

### ✅ 3. Build Otimizado
- Build de produção configurado
- Performance otimizada
- SEO implementado

## 🔧 PASSOS PARA DEPLOY

### Opção 1: Vercel CLI (Recomendado)

1. **Instalar Vercel CLI**
```bash
npm install -g vercel
```

2. **Login no Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

### Opção 2: Vercel Dashboard

1. **Acessar** [vercel.com](https://vercel.com)
2. **Conectar** repositório GitHub/GitLab
3. **Configurar** variáveis de ambiente
4. **Deploy** automático

### Opção 3: GitHub Actions

1. **Criar workflow** em `.github/workflows/deploy.yml`
2. **Configurar** secrets no GitHub
3. **Deploy** automático em push

## ⚙️ VARIÁVEIS DE AMBIENTE

Configure no Vercel Dashboard:

### Obrigatórias
```
NEXT_PUBLIC_SITE_URL=https://www.rgomesengenharia.com
NEXT_PUBLIC_SUPABASE_URL=seu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_servico
```

### Opcionais
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL=cotato@rgomesengenharia.com
CONTACT_PHONE=+5592981242509
```

## 🌐 CONFIGURAÇÃO DE DNS

### Para Vercel
```
Tipo: A
Nome: www
Valor: 76.76.21.21 (exemplo - usar IP do Vercel)

Tipo: CNAME
Nome: @
Valor: cname.vercel-dns.com
```

### Para Cloudflare (se usar)
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
Proxy: Ativado
SSL: Completo
```

## 📊 VERIFICAÇÃO PÓS-DEPLOY

### 1. Funcionalidade
- [ ] Homepage carrega corretamente
- [ ] Navegação funciona
- [ ] Formulários enviam dados
- [ ] Tradução PT/EN funciona
- [ ] Links de documentos funcionam

### 2. SEO e Performance
- [ ] Meta tags configuradas
- [ ] Sitemap.xml acessível
- [ ] Robots.txt configurado
- [ ] Open Graph images funcionam
- [ ] Page speed > 90

### 3. Segurança
- [ ] HTTPS funcionando
- [ ] Headers de segurança
- [ ] LGPD compliance
- [ ] Cookies seguros

## 🔍 URLS IMPORTANTES

### Produção
- **Site:** https://www.rgomesengenharia.com
- **API:** https://www.rgomesengenharia.com/api
- **Sitemap:** https://www.rgomesengenharia.com/sitemap.xml
- **Robots:** https://www.rgomesengenharia.com/robots.txt

### Documentos
- **Termos LGPD:** https://www.rgomesengenharia.com/utils/documents/Termos e Condições.pdf
- **Política Cookies:** https://www.rgomesengenharia.com/utils/documents/Política de Cookies.pdf

## 🚨 SOLUÇÃO DE PROBLEMAS

### Build Errors
```bash
# Limpar cache
rm -rf .next
npm run build

# Verificar dependências
npm install
```

### DNS Issues
```bash
# Verificar DNS
nslookup www.rgomesengenharia.com
dig www.rgomesengenharia.com
```

### Performance Issues
- Verificar Vercel Analytics
- Otimizar imagens
- Revisar bundle size

## 📱 MONITORAMENTO

### Ferramentas
- **Vercel Analytics:** Performance e erros
- **Google Analytics:** Tráfego e comportamento
- **Google Search Console:** SEO e indexação
- **PageSpeed Insights:** Performance

### Alertas
- Configurar notificações de erro
- Monitorar uptime
- Verificar logs de erro

## 🔄 ATUALIZAÇÕES

### Processo
1. **Desenvolvimento** em branch `develop`
2. **Testes** completos
3. **Merge** para `main`
4. **Deploy** automático
5. **Verificação** pós-deploy

### Rollback
```bash
# Se necessário, voltar para versão anterior
vercel rollback [deployment-url]
```

## 📞 SUPORTE

### Vercel
- **Dashboard:** https://vercel.com/dashboard
- **Docs:** https://vercel.com/docs
- **Status:** https://vercel-status.com

### RGOMES Engenharia
- **Email:** cotato@rgomesengenharia.com
- **Telefone:** (92) 98124-2509
- **WhatsApp:** https://wa.me/5592981242509

---

## ✅ CHECKLIST FINAL

Antes de ir para produção:

- [ ] Build local funciona
- [ ] Variáveis de ambiente configuradas
- [ ] DNS apontando corretamente
- [ ] SSL certificado ativo
- [ ] Formulários testados
- [ ] Links verificados
- [ ] SEO otimizado
- [ ] Performance aceitável
- [ ] Backup atualizado

---

**Status do Projeto:** ✅ PRONTO PARA DEPLOY
**Domínio:** www.rgomesengenharia.com
**Plataforma:** Vercel
**Framework:** Next.js 16.1.6
