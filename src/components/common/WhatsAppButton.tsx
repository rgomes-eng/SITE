'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5592999999999'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento da RGOMES ENGENHARIA.')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 
        bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg 
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="font-medium hidden sm:inline">Fale Conosco</span>
    </a>
  )
}
