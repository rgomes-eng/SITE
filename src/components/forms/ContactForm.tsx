'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

type FormData = {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

const texts = {
  pt: {
    successTitle: 'Mensagem enviada com sucesso!',
    successBody: 'Obrigado pelo contato. Sua mensagem foi registrada e nossa equipe retornará em breve pelo email ou WhatsApp.',
    genericError: 'Erro ao enviar. Verifique sua conexão e tente novamente.',
    nameLabel: 'Nome *',
    namePlaceholder: 'Seu nome',
    nameRequired: 'Nome é obrigatório',
    emailLabel: 'E-mail *',
    emailPlaceholder: 'seu@email.com',
    emailRequired: 'E-mail é obrigatório',
    emailInvalid: 'E-mail inválido',
    phoneLabel: 'Telefone',
    phonePlaceholder: '(92) 99999-9999',
    subjectLabel: 'Assunto',
    subjectPlaceholder: 'Ex: Orçamento para reforma',
    messageLabel: 'Mensagem *',
    messagePlaceholder: 'Descreva seu projeto ou dúvida...',
    messageRequired: 'Mensagem é obrigatória',
    submitSending: 'Enviando...',
    submitLabel: 'Enviar Mensagem',
  },
  en: {
    successTitle: 'Message sent!',
    successBody:
      'Thank you for reaching out. Our team will get back to you soon.',
    genericError: 'Error while sending. Please try again.',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    nameRequired: 'Name is required',
    emailLabel: 'Email *',
    emailPlaceholder: 'your@email.com',
    emailRequired: 'Email is required',
    emailInvalid: 'Invalid email',
    phoneLabel: 'Phone',
    phonePlaceholder: '(+55) 92 99999-9999',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'E.g.: Renovation quote',
    messageLabel: 'Message *',
    messagePlaceholder: 'Describe your project or question...',
    messageRequired: 'Message is required',
    submitSending: 'Sending...',
    submitLabel: 'Send Message',
  },
} as const

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = texts[language]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || t.genericError)
      }

      setSubmitted(true)
      reset()
    } catch (e) {
      setError(e instanceof Error ? e.message : t.genericError)
    }
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-green-500/20 border border-green-500/50 text-center">
        <FaCheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-xl font-semibold text-white mb-2">
          {t.successTitle}
        </h3>
        <p className="text-gray-300">{t.successBody}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t.nameLabel}
        </label>
        <input
          id="name"
          {...register('name', { required: t.nameRequired })}
          className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={t.namePlaceholder}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: t.emailRequired,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t.emailInvalid,
            },
          })}
          className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={t.emailPlaceholder}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t.phoneLabel}
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={t.phonePlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t.subjectLabel}
        </label>
        <input
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={t.subjectPlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: t.messageRequired })}
          className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder={t.messagePlaceholder}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
      >
        {isSubmitting ? (
          t.submitSending
        ) : (
          <>
            <FaPaperPlane size={18} />
            {t.submitLabel}
          </>
        )}
      </button>
    </form>
  )
}

