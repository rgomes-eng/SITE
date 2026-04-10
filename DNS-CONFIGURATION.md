# CONFIGURAÇÃO DE DNS - RGOMES ENGENHARIA
# Domínio: rgomesengenharia.com

## 🎯 OBJETIVO
Configurar o domínio rgomesengenharia.com para apontar para o site publicado no Vercel usando os nameservers da HostGator.

## 📋 SITUAÇÃO ATUAL

### Domínios Configurados no Vercel
- ✅ rgomesengenharia.com (principal)
- ❌ www.rgomesengenharia.com (já atribuído a outro projeto)

### Nameservers Atuais
- **HostGator:** ns844.hostgator.com.br, ns845.hostgator.com.br
- **Vercel:** ns1.vercel-dns.com, ns2.vercel-dns.com

## 🔧 CONFIGURAÇÃO NECESSÁRIA

### Opção 1: Usar Nameservers da HostGator (Recomendado)

#### 1.1 Configurar Records DNS na HostGator
Acesse o painel da HostGator e configure os seguintes registros:

```
TIPO    NOME                   VALOR                    TTL
A        @                      76.76.21.21              3600
A        www                    76.76.21.21              3600
CNAME    api                    cname.vercel-dns.com       3600
CNAME    _vercel                cname.vercel-dns.com       3600
TXT     @                      "v=spf1 include:_spf.vercel.com ~all" 3600
```

#### 1.2 Verificação de Propagação
```bash
# Verificar DNS
nslookup rgomesengenharia.com
nslookup www.rgomesengenharia.com
dig rgomesengenharia.com
dig www.rgomesengenharia.com
```

### Opção 2: Migrar para Nameservers Vercel

#### 2.1 Alterar Nameservers no Registrador
```
NAMESERVERS ANTIGOS:
ns844.hostgator.com.br
ns845.hostgator.com.br

NAMESERVERS NOVOS:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### 2.2 Vantagens
- ✅ Gerenciamento automático de SSL
- ✅ Configuração simplificada
- ✅ Integração nativa com Vercel

## ⚙️ PASSOS PARA CONFIGURAÇÃO

### Passo 1: Acessar Painel HostGator
1. Faça login em [hostgator.com.br](https://www.hostgator.com.br)
2. Acesse "DNS Zone Editor" ou "Gerenciador de DNS"
3. Selecione o domínio rgomesengenharia.com

### Passo 2: Configurar Records
Adicione os seguintes registros:

#### Record A (Principal)
```
TIPO: A
NOME: @ (ou rgomesengenharia.com)
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

#### Record A (WWW)
```
TIPO: A
NOME: www
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

#### Record CNAME (API)
```
TIPO: CNAME
NOME: api
VALOR: cname.vercel-dns.com
TTL: 3600 (1 hora)
```

#### Record TXT (Verificação)
```
TIPO: TXT
NOME: @
VALOR: "v=spf1 include:_spf.vercel.com ~all"
TTL: 3600 (1 hora)
```

### Passo 3: Salvar e Aguardar
1. Clique em "Save Changes" ou "Salvar Alterações"
2. Aguarde a propagação (24-48 horas)
3. Monitore o status com ferramentas de DNS

## 🔍 VERIFICAÇÃO PÓS-CONFIGURAÇÃO

### Ferramentas Online
- [DNSChecker](https://dnschecker.org)
- [WhatsMyDNS](https://whatsmydns.net)
- [Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/)

### Comandos Locais
```bash
# Windows
nslookup rgomesengenharia.com
nslookup www.rgomesengenharia.com

# Linux/Mac
dig rgomesengenharia.com
dig www.rgomesengenharia.com

# Verificar propagação global
for server in 8.8.8.8 1.1.1.1 208.67.222.222; do
    dig @$server rgomesengenharia.com +short
done
```

## 📊 STATUS ESPERADO

### Após Configuração Correta
```
rgomesengenharia.com -> 76.76.21.21 ✅
www.rgomesengenharia.com -> 76.76.21.21 ✅
api.rgomesengenharia.com -> cname.vercel-dns.com ✅
```

### URLs Finais
- **Site Principal:** https://rgomesengenharia.com
- **WWW:** https://www.rgomesengenharia.com
- **API:** https://rgomesengenharia.com/api
- **Sitemap:** https://rgomesengenharia.com/sitemap.xml

## 🚨 SOLUÇÃO DE PROBLEMAS

### Problema: DNS Não Propaga
**Solução:**
- Verificar TTL dos registros
- Limpar cache DNS local: `ipconfig /flushdns`
- Aguardar 24-48 horas completas

### Problema: WWW Não Funciona
**Solução:**
- Verificar se o registro A para www existe
- Confirmar que ambos apontam para o mesmo IP
- Testar com diferentes navegadores

### Problema: SSL Não Ativa
**Solução:**
- Aguardar configuração automática do Vercel
- Verificar se DNS está propagado
- Forçar reemissão do certificado

### Problema: Redirecionamento Incorreto
**Solução:**
- Verificar configuração de domínio no Vercel
- Confirmar records DNS
- Limpar cache do navegador

## 📱 MONITORAMENTO

### Ferramentas Recomendadas
- **UptimeRobot:** Monitoramento 24/7
- **Pingdom:** Performance e uptime
- **Google Search Console:** Indexação
- **Vercel Analytics:** Tráfego e erros

### Alertas
Configure alertas para:
- Queda de servidor
- DNS não respondendo
- Certificado SSL expirando
- Performance abaixo de 90

## 🔄 MANUTENÇÃO

### Verificações Mensais
- [ ] Status dos registros DNS
- [ ] Validade do certificado SSL
- [ ] Performance do site
- [ ] Indexação no Google
- [ ] Backup atualizado

### Backup de Configuração
Mantenha um registro da configuração:
```
Data: __/__/____
Nameservers: ns844.hostgator.com.br, ns845.hostgator.com.br
Records A: @ -> 76.76.21.21, www -> 76.76.21.21
Status: ✅ Funcionando
```

## 📞 SUPORTE

### HostGator
- **Site:** https://www.hostgator.com.br
- **Suporte:** Chat, telefone, email
- **Help DNS:** https://www.hostgator.com/help/article/what-is-a-dns-zone-editor

### Vercel
- **Dashboard:** https://vercel.com/dashboard
- **Docs:** https://vercel.com/docs/concepts/projects/custom-domains
- **Status:** https://vercel-status.com

---

## ✅ CHECKLIST FINAL

Antes de considerar concluído:

- [ ] Records A configurados (@ e www)
- [ ] IP 76.76.21.21 confirmado
- [ ] DNS propagado globalmente
- [ ] HTTPS funcionando
- [ ] Redirecionamento www -> funcionando
- [ ] API acessível
- [ ] Sitemap gerando
- [ ] Monitoramento ativo

---

**Status Atual:** 🔄 AGUARDANDO CONFIGURAÇÃO DNS  
**Próximo Passo:** Configurar records na HostGator  
**Prazo Estimado:** 24-48 horas após configuração
