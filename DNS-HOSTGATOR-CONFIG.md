# CONFIGURAÇÃO DNS - HOSTGATOR
# Nameservers: ns844.hostgator.com.br e ns845.hostgator.com.br
# Domínio: rgomesengenharia.com

## 1. SITUAÇÃO ATUAL

### Nameservers Configurados
```
Nameservers Atuais:
ns1010.hostgator.com.br
ns1011.hostgator.com.br

Nameservers Solicitados:
ns844.hostgator.com.br
ns845.hostgator.com.br
```

### Records DNS Atuais
```
rgomesengenharia.com -> 162.241.203.135 (HostGator)
www.rgomesengenharia.com -> 162.241.203.135 (Alias)
```

### Status do Site
```
https://rgomesengenharia.com -> 403 Forbidden (HostGator)
https://www.rgomesengenharia.com -> 403 Forbidden (HostGator)
```

## 2. AÇÕES NECESSÁRIAS

### Opção A: Mudar Nameservers (Recomendado)
**Para o Cliente:**
1. Acessar painel do registrador de domínio
2. Alterar nameservers para:
   ```
   ns844.hostgator.com.br
   ns845.hostgator.com.br
   ```
3. Aguardar propagação (24-48h)
4. Configurar records A na HostGator

### Opção B: Configurar Records Atuais
**Se mantiver nameservers atuais:**
1. Acessar painel HostGator
2. Configurar records A:
   ```
   TIPO: A
   NOME: @
   VALOR: 76.76.21.21
   TTL: 3600
   
   TIPO: A
   NOME: www
   VALOR: 76.76.21.21
   TTL: 3600
   ```

## 3. CONFIGURAÇÃO PASSO A PASSO

### Passo 1: Acessar Painel HostGator
1. Login em [hostgator.com.br](https://www.hostgator.com.br)
2. Ir para "DNS Zone Editor" ou "Gerenciador de DNS"
3. Selecionar domínio rgomesengenharia.com

### Passo 2: Configurar Records A
**Record A Principal:**
```
TIPO: A
NOME: @ (ou rgomesengenharia.com)
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

**Record A WWW:**
```
TIPO: A
NOME: www
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

**Record CNAME API (Opcional):**
```
TIPO: CNAME
NOME: api
VALOR: cname.vercel-dns.com
TTL: 3600
```

### Passo 3: Salvar e Aguardar
1. Clicar em "Save Changes" ou "Salvar Alterações"
2. Aguardar propagação (24-48 horas)
3. Monitorar status com comandos DNS

## 4. VERIFICAÇÃO PÓS-CONFIGURAÇÃO

### Comandos PowerShell
```powershell
# Verificar nameservers
Resolve-DnsName -Name "rgomesengenharia.com" -Type NS

# Verificar records A
Resolve-DnsName -Name "rgomesengenharia.com" -Type A
Resolve-DnsName -Name "www.rgomesengenharia.com" -Type A

# Testar acesso
try { 
    $response = Invoke-WebRequest -Uri "https://rgomesengenharia.com" -UseBasicParsing -TimeoutSec 10
    Write-Host "Status: $($response.StatusCode)"
} catch { 
    Write-Host "Error: $($_.Exception.Message)" 
}
```

### Sites Online
- [DNSChecker](https://dnschecker.org)
- [WhatsMyDNS](https://whatsmydns.net)
- [Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/)

## 5. RESULTADOS ESPERADOS

### Após Configuração Correta
```
Nameservers:
ns844.hostgator.com.br
ns845.hostgator.com.br

Records A:
rgomesengenharia.com -> 76.76.21.21
www.rgomesengenharia.com -> 76.76.21.21

Acesso:
https://rgomesengenharia.com -> 200 OK
https://www.rgomesengenharia.com -> 200 OK
```

### URLs Finais
- **Site:** https://rgomesengenharia.com
- **WWW:** https://www.rgomesengenharia.com
- **API:** https://rgomesengenharia.com/api
- **Sitemap:** https://rgomesengenharia.com/sitemap.xml

## 6. TROUBLESHOOTING

### Problema: DNS Não Propaga
**Solução:**
- Verificar TTL dos registros
- Limpar cache DNS: `ipconfig /flushdns`
- Aguardar 48 horas completas

### Problema: Site Não Acessível
**Solução:**
- Verificar se records A apontam para 76.76.21.21
- Testar com diferentes navegadores
- Verificar firewall/proxy

### Problema: SSL Não Funciona
**Solução:**
- Aguardar configuração automática do Vercel
- Verificar se DNS está propagado
- Forçar reemissão do certificado

## 7. MONITORAMENTO

### Script de Monitoramento
```powershell
# Monitorar mudança de DNS
while ($true) {
    try {
        $dns = Resolve-DnsName -Name "rgomesengenharia.com" -Type A
        $expectedIP = "76.76.21.21"
        
        if ($dns.IPAddress -eq $expectedIP) {
            Write-Host "DNS configurado corretamente! - $(Get-Date)"
            break
        } else {
            Write-Host "DNS: $($dns.IPAddress) - Aguardando... - $(Get-Date)"
        }
    } catch {
        Write-Host "DNS Error: $($_.Exception.Message) - $(Get-Date)"
    }
    
    Start-Sleep -Seconds 300  # Verificar a cada 5 minutos
}
```

### Alertas
Configure alertas para:
- Mudança de DNS
- Queda de servidor
- Certificado SSL expirando
- Performance abaixo de 90

## 8. CONTATO E SUPORTE

### HostGator
- **Site:** https://www.hostgator.com.br
- **Suporte:** 0800-888-2751
- **Chat:** Disponível no site
- **Help DNS:** https://www.hostgator.com/help/article/what-is-a-dns-zone-editor

### Vercel
- **Dashboard:** https://vercel.com/dashboard
- **Status:** https://vercel-status.com
- **Docs:** https://vercel.com/docs/concepts/projects/custom-domains

## 9. CRONOGRAMA

### Imediato (Hoje)
- [ ] Configurar nameservers (se necessário)
- [ ] Configurar records A na HostGator
- [ ] Iniciar monitoramento

### Curto Prazo (24-48h)
- [ ] Verificar propagação DNS
- [ ] Testar acesso ao site
- [ ] Validar certificado SSL

### Médio Prazo (1 semana)
- [ ] Configurar monitoramento
- [ ] Otimizar performance
- [ ] Verificar SEO

## 10. CHECKLIST FINAL

### Antes de Concluir
- [ ] Nameservers configurados
- [ ] Records A apontando para 76.76.21.21
- [ ] DNS propagado globalmente
- [ ] HTTPS funcionando
- [ ] Redirecionamento www funcionando
- [ ] API acessível
- [ ] Sitemap gerando
- [ ] Monitoramento ativo

---

## STATUS ATUAL

**Nameservers:** ns1010.hostgator.com.br, ns1011.hostgator.com.br  
**Solicitados:** ns844.hostgator.com.br, ns845.hostgator.com.br  
**Records A:** Apontando para 162.241.203.135 (HostGator)  
**Necessário:** Apontar para 76.76.21.21 (Vercel)  
**Ação Imediata:** Configurar records A na HostGator  

**Próximo Passo:** Cliente deve configurar DNS na HostGator  
**Prazo:** 24-48 horas após configuração
