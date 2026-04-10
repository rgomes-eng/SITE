# CONFIGURAÇÃO DNS - NAMESERVERS ATUAIS
# Servidores: ns1010.hostgator.com.br e ns1011.hostgator.com.br
# Domínio: rgomesengenharia.com

## 1. SITUAÇÃO ATUAL CONFIRMADA

### Nameservers Configurados e Funcionando
```
Servidor 1: ns1010.hostgator.com.br
Servidor 2: ns1011.hostgator.com.br
Status: Configurados e ativos
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

## 2. VANTAGEM DE USAR NAMESERVERS ATUAIS

### Por que usar ns1010.hostgator.com.br e ns1011.hostgator.com.br?

**Vantagens:**
- Já estão configurados e funcionando
- Não precisa esperar propagação de nameservers
- Acesso imediato ao painel DNS da HostGator
- Configuração mais rápida e simples

**Desvantagens:**
- Precisa configurar records A manualmente
- Menos controle sobre a configuração

## 3. CONFIGURAÇÃO NECESSÁRIA

### Records A para Configurar

**Como os nameservers já estão corretos, só precisa configurar os records A:**

#### Record A Principal
```
TIPO: A
NOME: @ (ou rgomesengenharia.com)
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

#### Record A WWW
```
TIPO: A
NOME: www
VALOR: 76.76.21.21
TTL: 3600 (1 hora)
```

#### Record CNAME API (Opcional)
```
TIPO: CNAME
NOME: api
VALOR: cname.vercel-dns.com
TTL: 3600
```

## 4. PASSO A PASSO - HOSTGATOR

### Acessar Painel HostGator
1. **Login:** [hostgator.com.br](https://www.hostgator.com.br)
2. **Navegação:** "DNS Zone Editor" ou "Gerenciador de DNS"
3. **Seleção:** Escolher domínio rgomesengenharia.com

### Configurar Records A

#### Para o Domínio Principal (@)
1. **Clicar em "Add Record"** ou "Adicionar Registro"
2. **Preencher campos:**
   - **Type:** A
   - **Name:** @ (ou deixar em branco)
   - **TTL:** 3600
   - **Points to:** 76.76.21.21
3. **Clicar em "Add Record"**

#### Para o Subdomínio WWW
1. **Clicar em "Add Record"** novamente
2. **Preencher campos:**
   - **Type:** A
   - **Name:** www
   - **TTL:** 3600
   - **Points to:** 76.76.21.21
3. **Clicar em "Add Record"**

### Verificar Configuração
1. **Visualizar lista de records**
2. **Confirmar que ambos existem**
3. **Verificar valores corretos**
4. **Salvar alterações**

## 5. RESULTADOS ESPERADOS

### Após Configuração (24-48 horas)

#### DNS Configurado Corretamente
```
Nameservers: ns1010.hostgator.com.br, ns1011.hostgator.com.br
Records A: rgomesengenharia.com -> 76.76.21.21
Records A: www.rgomesengenharia.com -> 76.76.21.21
```

#### Site Acessível
```
https://rgomesengenharia.com -> 200 OK (Site RGOMES)
https://www.rgomesengenharia.com -> 200 OK (Site RGOMES)
```

#### Funcionalidades Ativas
- Homepage completa
- Navegação funcional
- Formulários operando
- Tradução PT/EN
- Links LGPD funcionando

## 6. VERIFICAÇÃO PÓS-CONFIGURAÇÃO

### Comandos para Testar

#### PowerShell
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

#### Sites Online
- [DNSChecker](https://dnschecker.org) - Verificação global
- [WhatsMyDNS](https://whatsmydns.net) - Propagação em tempo real
- [Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/) - Diagnóstico

### O Que Verificar

#### DNS Correto
```
rgomesengenharia.com deve apontar para: 76.76.21.21
www.rgomesengenharia.com deve apontar para: 76.76.21.21
```

#### Acesso ao Site
```
https://rgomesengenharia.com deve exibir o site RGOMES
https://www.rgomesengenharia.com deve exibir o site RGOMES
```

## 7. MONITORAMENTO

### Script para Monitorar Mudança
```powershell
# Monitorar quando DNS apontar para Vercel
while ($true) {
    try {
        $dns = Resolve-DnsName -Name "rgomesengenharia.com" -Type A
        $expectedIP = "76.76.21.21"
        
        if ($dns.IPAddress -eq $expectedIP) {
            Write-Host "DNS configurado corretamente! - $(Get-Date)"
            Write-Host "IP: $($dns.IPAddress)"
            
            # Testar acesso ao site
            try {
                $response = Invoke-WebRequest -Uri "https://rgomesengenharia.com" -UseBasicParsing -TimeoutSec 10
                Write-Host "Site Status: $($response.StatusCode)"
            } catch {
                Write-Host "Site Error: $($_.Exception.Message)"
            }
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

## 8. SOLUÇÃO DE PROBLEMAS

### Problemas Comuns

#### "DNS não mudou"
- **Solução:** Aguardar até 48 horas completas
- **Verificação:** Limpar cache DNS: `ipconfig /flushdns`

#### "Site continua com erro 403"
- **Solução:** Verificar se records A estão corretos
- **Ação:** Confirmar que ambos apontam para 76.76.21.21

#### "Não consigo acessar painel HostGator"
- **Solução:** Usar "Esqueci senha"
- **Contato:** Suporte HostGator 0800-888-2751

#### "Acesso lento ou intermitente"
- **Solução:** Aguardar propagação completa
- **Verificação:** Testar com diferentes navegadores

### Quando Contatar Suporte

#### HostGator
- Problemas com acesso ao painel
- Dúvidas sobre configuração DNS
- Erros ao salvar records

#### Desenvolvedor
- Site não funciona após 48 horas
- Páginas específicas com erro
- Configurações avançadas necessárias

## 9. CRONOGRAMA OTIMIZADO

### Timeline (Usando Nameservers Atuais)

**Dia 0 (Hoje):**
- [ ] Configurar records A na HostGator
- [ ] Salvar alterações
- [ ] Iniciar monitoramento

**Dia 1:**
- [ ] Verificar propagação inicial
- [ ] Testar acesso básico

**Dia 2:**
- [ ] Verificação completa
- [ ] Testar todas as funcionalidades
- [ ] Configurar monitoramento

**Dia 3+:**
- [ ] Monitoramento contínuo
- [ ] Otimizações finais

## 10. CHECKLIST FINAL

### Antes de Concluir

#### Configuração DNS
- [ ] Nameservers: ns1010.hostgator.com.br, ns1011.hostgator.com.br
- [ ] Record A: @ -> 76.76.21.21
- [ ] Record A: www -> 76.76.21.21
- [ ] TTL configurado para 3600
- [ ] Alterações salvas

#### Verificação Funcional
- [ ] DNS propagado globalmente
- [ ] Site acessível via domínio
- [ ] HTTPS funcionando
- [ ] Redirecionamento www funcionando
- [ ] API acessível
- [ ] Formulários funcionando
- [ ] Links LGPD operando

#### Monitoramento
- [ ] Monitoramento ativo configurado
- [ ] Alertas de uptime ativos
- [ ] Backup de configuração

---

## STATUS ATUAL

**Nameservers:** ns1010.hostgator.com.br, ns1011.hostgator.com.br  
**Status:** Configurados e funcionando  
**Records A:** Apontando para 162.241.203.135 (precisa mudar)  
**Ação Imediata:** Configurar records A para 76.76.21.21  
**Prazo:** 24-48 horas após configuração  

**Vantagem:** Como os nameservers já estão corretos, a configuração será mais rápida!
