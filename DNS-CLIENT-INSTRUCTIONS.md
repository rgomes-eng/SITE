# INSTRUÇÕES PARA CLIENTE - CONFIGURAÇÃO DNS
# RGOMES ENGENHARIA - HOSTGATOR

## 1. SITUAÇÃO ATUAL

Seu domínio rgomesengenharia.com está configurado com:
- **Nameservers:** ns1010.hostgator.com.br, ns1011.hostgator.com.br
- **DNS:** Apontando para servidor HostGator (162.241.203.135)
- **Site:** Exibindo página padrão HostGator (403 Forbidden)

## 2. OBJETIVO

Configurar o DNS para apontar seu domínio para o site publicado no Vercel.

## 3. OPÇÕES DE CONFIGURAÇÃO

### OPÇÃO A: Usar Nameservers Solicitados (ns844.hostgator.com.br, ns845.hostgator.com.br)

**Se você deseja mudar para os nameservers ns844.hostgator.com.br e ns845.hostgator.com.br:**

1. **Acessar Painel do Registrador**
   - Onde você comprou o domínio (Registro.br, GoDaddy, etc.)
   - Fazer login com suas credenciais

2. **Alterar Nameservers**
   - Procurar opção "DNS" ou "Nameservers"
   - Inserir os novos nameservers:
     ```
     ns844.hostgator.com.br
     ns845.hostgator.com.br
     ```
   - Salvar alterações

3. **Aguardar Propagação** (24-48 horas)

4. **Configurar Records na HostGator**
   - Acessar painel HostGator
   - Ir para "DNS Zone Editor"
   - Configurar records A (ver abaixo)

### OPÇÃO B: Usar Nameservers Atuais (Mais Rápido)

**Se você preferir manter os nameservers atuais (ns1010.hostgator.com.br, ns1011.hostgator.com.br):**

1. **Acessar Painel HostGator**
   - Login em [hostgator.com.br](https://www.hostgator.com.br)
   - Ir para "DNS Zone Editor" ou "Gerenciador de DNS"

2. **Configurar Records A** (ver instruções detalhadas abaixo)

## 4. CONFIGURAÇÃO DE RECORDS A

### Passo a Passo (HostGator)

1. **Fazer Login**
   - Acesse [hostgator.com.br](https://www.hostgator.com.br)
   - Clique em "Login" ou "Área do Cliente"

2. **Navegar para DNS**
   - No painel, procure por "DNS Zone Editor"
   - Ou "Gerenciador de DNS"
   - Selecione o domínio rgomesengenharia.com

3. **Editar/Adicionar Records A**

**Record Principal (@):**
```
TIPO: A
NOME: @ (ou deixe em branco, ou rgomesengenharia.com)
VALOR: 76.76.21.21
TTL: 3600
```

**Record WWW:**
```
TIPO: A
NOME: www
VALOR: 76.76.21.21
TTL: 3600
```

4. **Salvar Alterações**
   - Clique em "Save Changes" ou "Salvar Alterações"
   - Confirme as mudanças

## 5. SCREENSHOTS E INTERFACE

### Interface HostGator Típica

1. **DNS Zone Editor:**
   - Lista de registros DNS
   - Botão "Add Record" ou "Adicionar Registro"
   - Campos para Type, Name, TTL, Points to

2. **Configuração de Record A:**
   - **Type:** Selecione "A"
   - **Name:** Digite "@" (para o domínio principal) ou "www"
   - **Points to:** Digite "76.76.21.21"
   - **TTL:** Deixe como "3600" ou "1 Hour"
   - **Add Record**

## 6. VERIFICAÇÃO PÓS-CONFIGURAÇÃO

### Após Configurar (24-48 horas depois)

**Verificar se funcionou:**
1. Acesse https://rgomesengenharia.com
2. Acesse https://www.rgomesengenharia.com
3. Ambos devem exibir o site RGOMES Engenharia

**Se não funcionar:**
1. Aguarde mais 24 horas
2. Limpe cache do navegador
3. Tente em outro navegador

### Comandos para Verificação (Opcional)

Se você tiver acesso a um terminal:

**Windows (PowerShell):**
```powershell
Resolve-DnsName -Name "rgomesengenharia.com" -Type A
```

**Verificar se aponta para o IP correto:**
- Deve mostrar: **76.76.21.21**
- Se mostrar outro IP, ainda não propagou

## 7. RESULTADOS ESPERADOS

### Após Configuração Correta

**URLs que devem funcionar:**
- https://rgomesengenharia.com
- https://www.rgomesengenharia.com
- https://rgomesengenharia.com/sobre
- https://rgomesengenharia.com/projetos
- https://rgomesengenharia.com/trabalhe-conosco

**O que você verá:**
- Site RGOMES Engenharia completo
- Design moderno e profissional
- Menu de navegação funcionando
- Formulários de contato
- Tradução PT/EN
- Links para documentos LGPD

## 8. SUPORTE E CONTATO

### Se Precisar de Ajuda

**HostGator:**
- **Telefone:** 0800-888-2751
- **Chat:** Disponível no site
- **Help:** https://www.hostgator.com/help

**Desenvolvedor:**
- **Email:** cotato@rgomesengenharia.com
- **Telefone:** (92) 98124-2509
- **WhatsApp:** https://wa.me/5592981242509

### Problemas Comuns

**"DNS não propagou":**
- Aguarde até 48 horas completas
- DNS pode levar tempo para propagar globalmente

**"Site continua com erro 403":**
- Verifique se os records A estão corretos
- Confirme que ambos (@ e www) apontam para 76.76.21.21

**"Não consigo acessar painel HostGator":**
- Use opção "Esqueci senha"
- Entre em contato com suporte HostGator

## 9. CRONOGRAMA

### Timeline Esperada

**Dia 0 (Hoje):**
- [ ] Configurar records A na HostGator
- [ ] Salvar alterações

**Dia 1-2:**
- [ ] Aguardar propagação DNS
- [ ] Testar acesso ao site

**Dia 3:**
- [ ] Verificação final
- [ ] Configuração de monitoramento

## 10. CHECKLIST FINAL

### Antes de Concluir

- [ ] Records A configurados (@ e www)
- [ ] Ambos apontando para 76.76.21.21
- [ ] Alterações salvas no painel
- [ ] Aguardado 24-48 horas
- [ ] Site acessível via domínio
- [ ] HTTPS funcionando
- [ ] Todas as páginas funcionando

---

## RESUMO RÁPIDO

**O que fazer:**
1. Acessar painel HostGator
2. Ir para "DNS Zone Editor"
3. Configurar 2 records A:
   - @ -> 76.76.21.21
   - www -> 76.76.21.21
4. Salvar e aguardar 48 horas

**Resultado:**
- Site RGOMES Engenharia acessível em rgomesengenharia.com
- Todos os recursos funcionando
- Certificado SSL ativo

**Dúvidas:**
- Entre em contato com o desenvolvedor
- Suporte HostGator: 0800-888-2751

---

**Status:** Aguardando configuração do cliente  
**Prazo:** 24-48 horas após configuração  
**Suporte:** Disponível para auxiliar
