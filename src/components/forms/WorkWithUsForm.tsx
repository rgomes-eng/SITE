'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaUpload, FaBriefcase, FaGraduationCap, FaEnvelope, FaPhone, FaUser, FaExternalLinkAlt } from 'react-icons/fa'
import PolicyModal from '@/components/dialogs/PolicyModal'
import { JOB_POSITIONS } from '@/constants/positions'
import { LIMITS, CONTACT } from '@/constants/app'

interface FormData {
  name: string
  email: string
  phone: string
  position: string
  experience: string
  education: string
  message: string
  file: FileList
  data_sharing_consent: boolean
  privacy_policy_consent: boolean
  cookie_policy_consent: boolean
}

export default function WorkWithUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState('')
  
  // Estados para modais de políticas
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<FormData>()

  const file = watch('file')
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFileName(files[0].name)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      
      // Adicionar campos do formulário
      Object.keys(data).forEach(key => {
        if (key !== 'file') {
          formData.append(key, data[key as keyof FormData] as string)
        }
      })

      // Adicionar checkboxes booleanos
      formData.append('data_sharing_consent', data.data_sharing_consent.toString())
      formData.append('privacy_policy_consent', data.privacy_policy_consent.toString())
      formData.append('cookie_policy_consent', data.cookie_policy_consent.toString())

      // Adicionar arquivo se existir
      if (data.file && data.file.length > 0) {
        formData.append('file', data.file[0])
      }

      // Enviar para API
      const response = await fetch('/api/work-with-us', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setFileName('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Currículo recebido!</h3>
        <p className="text-gray-300/80 mb-8">
          Obrigado pelo seu interesse. Nossa equipe analisará seu perfil e entrará em contato em breve.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
        >
          Enviar outro currículo
        </button>
      </motion.div>
    )
  }

  return (
    <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nome */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
              <FaUser className="text-primary" size={16} />
              Nome completo *
            </label>
            <input
              {...register('name', { required: 'Nome é obrigatório' })}
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="Seu nome completo"
              suppressHydrationWarning={true}
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
              <FaEnvelope className="text-primary" size={16} />
              E-mail *
            </label>
            <input
              {...register('email', { 
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail inválido'
                }
              })}
              type="email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="seu@email.com"
              suppressHydrationWarning={true}
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
              <FaPhone className="text-primary" size={16} />
              Telefone *
            </label>
            <input
              {...register('phone', { required: 'Telefone é obrigatório' })}
              type="tel"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="(92) 99999-9999"
              suppressHydrationWarning={true}
            />
            {errors.phone && (
              <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Posição Desejada */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
              <FaBriefcase className="text-primary" size={16} />
              Posição desejada *
            </label>
            <select
              {...register('position', { required: 'Selecione uma posição' })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              suppressHydrationWarning={true}
            >
              <option value="" className="bg-background-card">Selecione...</option>
              {JOB_POSITIONS.map(pos => (
                <option key={pos} value={pos} className="bg-background-card">{pos}</option>
              ))}
            </select>
            {errors.position && (
              <p className="mt-1 text-red-400 text-sm">{errors.position.message}</p>
            )}
          </div>
        </div>

        {/* Experiência */}
        <div>
          <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
            <FaBriefcase className="text-primary" size={16} />
            Experiência profissional
          </label>
          <textarea
            {...register('experience')}
            rows={3}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
            placeholder="Descreva sua experiência profissional..."
            suppressHydrationWarning={true}
          />
        </div>

        {/* Formação */}
        <div>
          <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
            <FaGraduationCap className="text-primary" size={16} />
            Formação acadêmica
          </label>
          <textarea
            {...register('education')}
            rows={3}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
            placeholder="Descreva sua formação acadêmica..."
            suppressHydrationWarning={true}
          />
        </div>

        {/* Mensagem */}
        <div>
          <label className="text-gray-300 font-medium mb-2 block">
            Por que quer trabalhar na RGOMES?
          </label>
          <textarea
            {...register('message')}
            rows={3}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
            placeholder="Conte-nos um pouco sobre você..."
            suppressHydrationWarning={true}
          />
        </div>

        {/* Upload de Arquivo */}
        <div>
          <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
            <FaUpload className="text-primary" size={16} />
            Anexar currículo *
          </label>
          <div className="relative">
            <input
              {...register('file', { 
                required: 'Anexe seu currículo',
                validate: (files) => {
                  if (!files || files.length === 0) return 'Anexe seu currículo'
                  const file = files[0]
                  const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
                  const maxSize = 5 * 1024 * 1024 // 5MB
                  
                  if (!validTypes.includes(file.type)) {
                    return 'Apenas arquivos PDF, DOCX, DOC, JPG ou PNG'
                  }
                  if (file.size > maxSize) {
                    return 'Tamanho máximo: 5MB'
                  }
                  return true
                }
              })}
              type="file"
              accept=".pdf,.docx,.doc,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/20 file:text-primary hover:file:bg-primary/30 file:cursor-pointer cursor-pointer focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              suppressHydrationWarning={true}
            />
            {fileName && (
              <p className="mt-2 text-sm text-gray-400">Arquivo selecionado: {fileName}</p>
            )}
          </div>
          {errors.file && (
            <p className="mt-1 text-red-400 text-sm">{errors.file.message}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Formatos aceitos: PDF, DOCX, DOC, JPG, PNG (máx. 5MB)
          </p>
        </div>

        {/* LGPD Consentimentos */}
        <div className="space-y-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="flex items-start gap-3">
            <input
              {...register('data_sharing_consent', {
                required: 'Autorização de compartilhamento é obrigatória'
              })}
              type="checkbox"
              id="data_sharing_consent"
              className="mt-1 w-4 h-4 text-primary bg-white/5 border-white/20 rounded focus:ring-primary focus:ring-2"
            />
            <label htmlFor="data_sharing_consent" className="text-sm text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Autorizo o compartilhamento</span> do meu currículo e informações com o departamento de RH e gestores responsáveis pelo processo seletivo da RGOMES ENGENHARIA.
            </label>
          </div>
          {errors.data_sharing_consent && (
            <p className="text-red-400 text-sm">{errors.data_sharing_consent.message}</p>
          )}

          <div className="flex items-start gap-3">
            <input
              {...register('privacy_policy_consent', {
                required: 'Aceitação dos termos é obrigatória'
              })}
              type="checkbox"
              id="privacy_policy_consent"
              className="mt-1 w-4 h-4 text-primary bg-white/5 border-white/20 rounded focus:ring-primary focus:ring-2"
            />
            <label htmlFor="privacy_policy_consent" className="text-sm text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Li e aceito os Termos e Condições</span> e a{' '}
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="text-primary hover:text-primary-light underline font-medium inline-flex items-center gap-1"
              >
                Política de Privacidade e Proteção de Dados (LGPD)
                <FaExternalLinkAlt size={10} />
              </button>
              {' '}autorizando o tratamento dos meus dados pessoais conforme descrito.
            </label>
          </div>
          {errors.privacy_policy_consent && (
            <p className="text-red-400 text-sm">{errors.privacy_policy_consent.message}</p>
          )}

          <div className="flex items-start gap-3">
            <input
              {...register('cookie_policy_consent', {
                required: 'Aceitação da política de cookies é obrigatória'
              })}
              type="checkbox"
              id="cookie_policy_consent"
              className="mt-1 w-4 h-4 text-primary bg-white/5 border-white/20 rounded focus:ring-primary focus:ring-2"
            />
            <label htmlFor="cookie_policy_consent" className="text-sm text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Li e aceito a Política de Cookies</span> para uso de cookies essenciais e de analytics no site.{' '}
              <button
                type="button"
                onClick={() => setCookiesModalOpen(true)}
                className="text-primary hover:text-primary-light underline font-medium inline-flex items-center gap-1"
              >
                Ver política completa
                <FaExternalLinkAlt size={10} />
              </button>
            </label>
          </div>
          {errors.cookie_policy_consent && (
            <p className="text-red-400 text-sm">{errors.cookie_policy_consent.message}</p>
          )}

          {/* Links adicionais para visualização */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10 mt-3">
            <button
              type="button"
              onClick={() => setTermsModalOpen(true)}
              className="text-xs text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <FaExternalLinkAlt size={10} />
              Termos e Condições - Trabalhe Conosco
            </button>
          </div>

          <div className="text-xs text-gray-400 mt-3">
            <p>Seus dados serão tratados em conformidade com a Lei Federal nº 13.709/2018 (LGPD). Você pode solicitar a exclusão de seus dados a qualquer momento através do e-mail privacidade@rgomesengenharia.com.</p>
          </div>
        </div>

        {/* Erro */}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-red-400">
              Erro ao enviar currículo. Por favor, tente novamente ou entre em contato pelo WhatsApp.
            </p>
          </div>
        )}

        {/* Botão de Envio */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-primary hover:bg-primary-dark disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                Enviar currículo
                <FaUpload size={16} />
              </>
            )}
          </button>
        </div>

        {/* Modais de Políticas */}
        <PolicyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
          type="privacy"
          onAccept={() => {
            setValue('privacy_policy_consent', true)
            setPrivacyModalOpen(false)
          }}
          onReject={() => {
            setValue('privacy_policy_consent', false)
            setPrivacyModalOpen(false)
          }}
        />

        <PolicyModal
          isOpen={cookiesModalOpen}
          onClose={() => setCookiesModalOpen(false)}
          type="cookies"
          onAccept={() => {
            setValue('cookie_policy_consent', true)
            setCookiesModalOpen(false)
          }}
          onReject={() => {
            setValue('cookie_policy_consent', false)
            setCookiesModalOpen(false)
          }}
        />

        <PolicyModal
          isOpen={termsModalOpen}
          onClose={() => setTermsModalOpen(false)}
          type="terms"
          onAccept={() => setTermsModalOpen(false)}
          onReject={() => setTermsModalOpen(false)}
        />
      </form>
    </div>
  )
}
