# RESOLUÇÃO DO PROBLEMA DNS E CURL
# RGOMES ENGENHARIA - 09/04/2026

## 1. PROBLEMA IDENTIFICADO

### Erro do curl/Invoke-WebRequest
```
cmdlet Invoke-WebRequest na posição de comando 1 do pipeline
Forneça valores para os seguintes parâmetros: Uri:
```

### Causa
- No PowerShell, `curl` é um alias para `Invoke-WebRequest`
- O comando estava sendo interpretado incorretamente
- Precisa usar sintaxe completa do PowerShell

## 2. SOLUÇÃO APLICADA

### Comandos Corretos para PowerShell
```powershell
# Testar conexão HTTP
try { 
    $response = Invoke-WebRequest -Uri "https://rgomesengenharia.com" -UseBasicParsing -TimeoutSec 10
    Write-Host "Status Code: $($response.StatusCode)"
} catch { 
    Write-Host "Error: $($_.Exception.Message)" 
}

# Verificar DNS
Resolve-DnsName -Name "rgomesengenharia.com" -Type A

# Testar conectividade
Test-NetConnection -ComputerName "rgomesengenharia.com" -Port 443
```

## 3. RESULTADOS DAS VERIFICAÇÕES

### Status Atual do DNS
```
rgomesengenharia.com -> 162.241.203.135 (HostGator)
www.rgomesengenharia.com -> 162.241.203.135 (Alias)
```

### Status do Site
```
https://rgomesengenharia.com -> 403 Forbidden (HostGator)
https://site-n17whcnd7-...vercel.app -> 401 Unauthorized (Vercel Auth)
```

### Conectividade
```
Ping: 32 bytes, 63-109ms (OK)
TCP 443: Conexão estabelecida (OK)
DNS: Resolvendo para 162.241.203.135 (OK)
```

## 4. ANÁLISE COMPLETA

### Situação Atual
- **DNS:** Apontando para HostGator (162.241.203.135)
- **Site:** Publicado no Vercel mas inacessível via domínio
- **SSL:** Configurado no HostGator, não no Vercel
- **Acesso:** 403 Forbidden (página padrão HostGator)

### Problemas Identificados
1. **DNS não apontando para Vercel**
2. **Site Vercel protegido por autenticação**
3. **Configuração de domínio incompleta**

## 5. SOLUÇÕES DISPONÍVEIS

### Opção A: Configurar DNS na HostGator (Recomendado)
```bash
# Records necessários no painel HostGator:
A     @       76.76.21.21
A     www     76.76.21.21
```

### Opção B: Usar URL do Vercel
```bash
# URL direta (temporária)
https://site-n17whcnd7-rodrigo-gomess-projects-8255a884.vercel.app
```

### Opção C: Configurar Domínio Customizado
```bash
# No Vercel Dashboard
1. Ir para Settings -> Domains
2. Adicionar rgomesengenharia.com
3. Configurar records DNS
4. Aguardar propagação
```

## 6. COMANDOS PARA VERIFICAÇÃO

### PowerShell (Correto)
```powershell
# Verificar DNS
Resolve-DnsName -Name "rgomesengenharia.com" -Type A

# Testar HTTP
try { 
    $response = Invoke-WebRequest -Uri "https://rgomesengenharia.com" -UseBasicParsing -TimeoutSec 10
    Write-Host "Status: $($response.StatusCode)"
} catch { 
    Write-Host "Error: $($_.Exception.Message)" 
}

# Verificar conectividade
Test-NetConnection -ComputerName "rgomesengenharia.com" -Port 443

# Ping
Test-Connection -ComputerName "rgomesengenharia.com" -Count 2
```

### Bash/WSL (Alternativa)
```bash
# Verificar DNS
nslookup rgomesengenharia.com 8.8.8.8

# Testar HTTP
curl -I https://rgomesengenharia.com

# Verificar conectividade
ping rgomesengenharia.com
```

## 7. STATUS FINAL

### DNS
- **Configuração:** Apontando para HostGator
- **Necessário:** Apontar para Vercel (76.76.21.21)
- **Ação:** Cliente configurar records A

### Site
- **Status:** Publicado no Vercel
- **Acesso:** Via URL Vercel (temporário)
- **Domínio:** Aguardando configuração DNS

### Próximos Passos
1. **Cliente:** Configurar records A na HostGator
2. **Aguardar:** Propagação DNS (24-48h)
3. **Testar:** Acesso via domínio
4. **Configurar:** SSL e redirecionamentos

## 8. COMANDOS ÚTEIS

### Para Desenvolvedor
```powershell
# Monitorar propagação DNS
while ($true) {
    try {
        $dns = Resolve-DnsName -Name "rgomesengenharia.com" -Type A
        Write-Host "DNS: $($dns.IPAddress) - $(Get-Date)"
        Start-Sleep -Seconds 30
    } catch {
        Write-Host "DNS Error: $($_.Exception.Message)"
    }
}

# Testar múltiplos domínios
$domains = @("rgomesengenharia.com", "www.rgomesengenharia.com")
foreach ($domain in $domains) {
    try {
        $response = Invoke-WebRequest -Uri "https://$domain" -UseBasicParsing -TimeoutSec 10
        Write-Host "$domain : $($response.StatusCode)"
    } catch {
        Write-Host "$domain : $($_.Exception.Message)"
    }
}
```

### Para Cliente
```powershell
# Verificar se DNS está configurado corretamente
$expectedIP = "76.76.21.21"
$currentDNS = Resolve-DnsName -Name "rgomesengenharia.com" -Type A

if ($currentDNS.IPAddress -eq $expectedIP) {
    Write-Host "DNS configurado corretamente!"
} else {
    Write-Host "DNS apontando para $($currentDNS.IPAddress) - esperado: $expectedIP"
}
```

---

## 9. RESUMO

**Problema curl:** Resolvido com sintaxe correta do PowerShell  
**Status DNS:** Apontando para HostGator (precisa mudar)  
**Status Site:** Publicado no Vercel mas inacessível via domínio  
**Ação Necessária:** Configurar records A para 76.76.21.21  

**Próximo Passo:** Cliente configurar DNS na HostGator
