'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCheck, FaCookie, FaShieldAlt, FaFileContract } from 'react-icons/fa'

interface PolicyModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'privacy' | 'cookies' | 'terms'
  onAccept: () => void
  onReject?: () => void
}

interface ConsentRecord {
  type: string
  accepted: boolean
  timestamp: string
  userAgent: string
  ip?: string
}

const policyContent = {
  privacy: {
    title: 'Política de Privacidade e Proteção de Dados (LGPD)',
    icon: FaShieldAlt,
    subtitle: 'Trabalhe Conosco',
    content: `
## 1. Coleta de Dados para Processo Seletivo

Para participar dos processos seletivos da RGOMES Engenharia, coletamos as seguintes informações:

- **Dados pessoais**: nome, e-mail, telefone
- **Dados profissionais**: experiência, formação acadêmica, cargo desejado
- **Documentos**: currículo e anexos enviados
- **Informações adicionais**: mensagens e comunicações

## 2. Finalidade do Tratamento

Seus dados serão utilizados exclusivamente para:
- Avaliação de perfil para vagas disponíveis
- Contato para entrevistas e processos seletivos
- Comunicação sobre oportunidades futuras
- Análise de adequação à cultura organizacional

## 3. Base Legal (LGPD)

O tratamento é realizado com base em:
- **Consentimento**: ao enviar seu currículo, você autoriza o tratamento
- **Legítimo interesse**: avaliação para contratação de pessoal

## 4. Compartilhamento

Seus dados podem ser compartilhados com:
- Departamento de Recursos Humanos
- Gestores das áreas com vagas
- Sistemas internos de gestão de candidaturas

## 5. Seus Direitos

Você tem direito a:
- Acessar seus dados
- Corrigir informações desatualizadas
- Solicitar exclusão dos dados
- Revogar consentimento a qualquer momento

## 6. Retenção

Mantemos seus dados por até 24 meses após o último contato, para consideração em futuras oportunidades. Após esse período, os dados são excluídos ou anonimizados.

## 7. Contato

Para exercer seus direitos ou dúvidas: privacidade@rgomesengenharia.com
`
  },
  cookies: {
    title: 'Política de Cookies',
    icon: FaCookie,
    subtitle: 'Uso de Cookies no Site',
    content: `
## 1. O que são Cookies

Cookies são pequenos arquivos de texto armazenados no seu navegador que nos ajudam a melhorar sua experiência no site.

## 2. Tipos de Cookies Utilizados

### Cookies Essenciais (Obrigatórios)
- **Finalidade**: Funcionamento básico do site
- **Exemplos**: autenticação, segurança, preferências de idioma
- **Duração**: sessão ou persistente
- **Base legal**: Legítimo interesse

### Cookies de Analytics (Opcionais)
- **Finalidade**: Entender como você usa nosso site
- **Exemplos**: Google Analytics, métricas de visitas
- **Dados coletados**: páginas visitadas, tempo de navegação, origem do tráfego
- **Base legal**: Consentimento

## 3. Como Gerenciar Cookies

Você pode:
- Aceitar todos os cookies
- Rejeitar cookies de analytics (cookies essenciais permanecem ativos)
- Configurar preferências no navegador
- Limpar cookies a qualquer momento

## 4. Cookies Específicos

| Cookie | Tipo | Finalidade | Duração |
|--------|------|------------|---------|
| _session | Essencial | Manter sessão ativa | Sessão |
| _consent | Essencial | Registrar consentimentos | 1 ano |
| _ga | Analytics | Google Analytics | 2 anos |
| _gid | Analytics | Identificar usuário | 24 horas |

## 5. Compartilhamento

Dados de analytics são processados por:
- Google Analytics (análise de tráfego)
- Vercel Analytics (performance do site)

## 6. Atualizações

Esta política pode ser atualizada periodicamente. A versão atual está em vigor desde ${new Date().toLocaleDateString('pt-BR')}.

## 7. Contato

Dúvidas sobre cookies: privacidade@rgomesengenharia.com
`
  },
  terms: {
    title: 'Termos e Condições - Trabalhe Conosco',
    icon: FaFileContract,
    subtitle: 'Regras para Candidatura',
    content: `
## 1. Aceitação dos Termos

Ao enviar seu currículo através do formulário "Trabalhe Conosco", você concorda com:
- Fornecer informações verdadeiras e precisas
- Autorizar o tratamento dos dados para processo seletivo
- Respeitar as políticas da empresa

## 2. Processo de Seleção

- **Avaliação**: Nossa equipe de RH analisa currículos em até 15 dias úteis
- **Contato**: Candidatos selecionados são contatados por e-mail ou telefone
- **Retenção**: Currículos ficam ativos em nossa base por 24 meses
- **Exclusão**: Você pode solicitar remoção a qualquer momento

## 3. Obrigações do Candidato

Você se compromete a:
- Informar dados verdadeiros (falsidade é crime - Art. 299 CP)
- Manter dados de contato atualizados
- Responder às comunicações da empresa
- Comparecer às entrevistas agendadas ou avisar com antecedência

## 4. Propriedade Intelectual

- Currículos e documentos enviados são de propriedade do candidato
- A empresa apenas os utiliza para avaliação
- Não reproduzimos ou compartilhamos documentos com terceiros

## 5. Privacidade e Sigilo

- Todas as candidaturas são tratadas com sigilo
- Avaliações são feitas apenas por pessoas autorizadas
- Resultados de processos seletivos são confidenciais

## 6. Não Discriminação

A RGOMES Engenharia garante:
- Igualdade de oportunidades independente de raça, gênero, idade, religião ou orientação sexual
- Acessibilidade para pessoas com deficiência
- Ambiente de trabalho livre de assédio e discriminação

## 7. Considerações Finais

- A simples candidatura não gera vínculo empregatício
- A empresa reserva-se o direito de não responder todas as candidaturas
- Vagas podem ser preenchidas ou canceladas sem aviso prévio
- Estes termos estão sujeitos à legislação brasileira vigente

## 8. Contato

Dúvidas sobre o processo seletivo: rh@rgomesengenharia.com
`
  }
}

export default function PolicyModal({ isOpen, onClose, type, onAccept, onReject }: PolicyModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const policy = policyContent[type]
  const Icon = policy.icon

  const handleAccept = async () => {
    setIsLoading(true)
    try {
      // Registrar consentimento
      const consentData: ConsentRecord = {
        type: type === 'privacy' ? 'lgpd_privacy_work' : type === 'cookies' ? 'cookies_work' : 'terms_work',
        accepted: true,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }

      // Enviar para API
      await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consentData),
      })

      // Salvar no localStorage também
      localStorage.setItem(`consent_${type}_work`, JSON.stringify({
        accepted: true,
        timestamp: new Date().toISOString()
      }))

      onAccept()
    } catch (error) {
      console.error('Erro ao registrar consentimento:', error)
      // Mesmo com erro na API, permite prosseguir (localStorage serve como backup)
      onAccept()
    } finally {
      setIsLoading(false)
    }
  }

  const handleReject = async () => {
    if (onReject) {
      setIsLoading(true)
      try {
        const consentData: ConsentRecord = {
          type: type === 'privacy' ? 'lgpd_privacy_work' : type === 'cookies' ? 'cookies_work' : 'terms_work',
          accepted: false,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }

        await fetch('/api/consent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(consentData),
        })

        localStorage.setItem(`consent_${type}_work`, JSON.stringify({
          accepted: false,
          timestamp: new Date().toISOString()
        }))

        onReject()
      } catch (error) {
        console.error('Erro ao registrar rejeição:', error)
        onReject()
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-background-card rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-background-card border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{policy.title}</h2>
                  <p className="text-sm text-gray-400">{policy.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
            <div className="prose prose-invert prose-sm max-w-none">
              {policy.content.split('\n\n').map((section, index) => {
                if (section.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-lg font-bold text-white mt-6 mb-3">
                      {section.replace('## ', '')}
                    </h3>
                  )
                }
                if (section.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside text-gray-300 space-y-1 mb-4 ml-4">
                      {section.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                      ))}
                    </ul>
                  )
                }
                if (section.startsWith('| ')) {
                  // Tabela simples
                  const rows = section.split('\n')
                  return (
                    <div key={index} className="overflow-x-auto mb-4">
                      <table className="w-full text-sm text-left text-gray-300">
                        <tbody>
                          {rows.map((row, i) => {
                            const cells = row.split('|').filter(c => c.trim())
                            return (
                              <tr key={i} className={i === 0 ? 'border-b border-white/20 font-semibold text-white' : 'border-b border-white/5'}>
                                {cells.map((cell, j) => (
                                  <td key={j} className="px-3 py-2">{cell.trim()}</td>
                                ))}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  )
                }
                if (section.startsWith('### ')) {
                  return (
                    <h4 key={index} className="text-base font-semibold text-primary mt-4 mb-2">
                      {section.replace('### ', '')}
                    </h4>
                  )
                }
                return (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {section.replace(/\*\*/g, '')}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Footer com botões */}
          <div className="sticky bottom-0 bg-background-card border-t border-white/10 px-6 py-4">
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleReject}
                disabled={isLoading}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-lg transition-colors border border-white/10"
              >
                Rejeitar
              </button>
              <button
                onClick={handleAccept}
                disabled={isLoading}
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Salvando...
                  </>
                ) : (
                  <>
                    <FaCheck size={14} />
                    Aceitar
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
