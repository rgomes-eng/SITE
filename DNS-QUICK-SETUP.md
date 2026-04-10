# CONFIGURAÇÃO RÁPIDA DNS - HOSTGATOR
# Usando Nameservers Atuais: ns1010.hostgator.com.br e ns1011.hostgator.com.br

## 1. SITUAÇÃO ATUAL

**Nameservers já configurados:**
- ns1010.hostgator.com.br
- ns1011.hostgator.com.br

**Apenas precisa configurar os records A!**

## 2. CONFIGURAÇÃO RÁPIDA (5 minutos)

### Passo 1: Acessar HostGator
1. Vá para [hostgator.com.br](https://www.hostgator.com.br)
2. Faça login
3. Vá para "DNS Zone Editor"

### Passo 2: Configurar Records A

**Record 1 - Domínio Principal:**
```
Type: A
Name: @
TTL: 3600
Points to: 76.76.21.21
```

**Record 2 - WWW:**
```
Type: A
Name: www
TTL: 3600
Points to: 76.76.21.21
```

### Passo 3: Salvar
1. Clique em "Add Record" para cada um
2. Salve as alterações
3. Pronto!

## 3. O QUE ACONTECE DEPOIS

**Imediatamente:**
- DNS configurado
- Aguardar propagação (24-48 horas)

**Após 24-48 horas:**
- Site acessível em https://rgomesengenharia.com
- Todas as funcionalidades funcionando

## 4. VERIFICAÇÃO

**Para verificar se funcionou:**
1. Acesse https://rgomesengenharia.com
2. Deve exibir o site RGOMES Engenharia

**Se não funcionar:**
- Aguarde mais 24 horas
- Limpe cache do navegador

## 5. SUPORTE

**Se precisar ajuda:**
- **HostGator:** 0800-888-2751
- **Desenvolvedor:** cotato@rgomesengenharia.com

---

## RESUMO

**O que fazer:**
1. Acessar painel HostGator
2. Configurar 2 records A (@ e www) para 76.76.21.21
3. Salvar
4. Aguardar 48 horas

**Resultado:**
- Site funcionando em rgomesengenharia.com

**Tempo estimado:**
- Configuração: 5 minutos
- Propagação: 24-48 horas
