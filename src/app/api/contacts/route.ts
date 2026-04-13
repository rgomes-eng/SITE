import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, e-mail e mensagem são obrigatórios.' },
        { status: 400 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('contacts').insert({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      source: 'website',
      status: 'new',
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Erro ao salvar mensagem. Tente novamente.' },
        { status: 500 }
      )
    }

    // Enviar email de notificação
    const contactEmail = process.env.CONTACT_EMAIL || 'contato@rgomesengenharia.com'
    
    try {
      // Se estiver configurado serviço de email (Resend, SendGrid, etc.)
      // Aqui seria implementado o envio real de email
      console.log('Email de contato enviado para:', contactEmail)
      console.log('Detalhes:', { name, email, phone, subject, message })
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError)
      // Não falhar se o email não for enviado, apenas logar o erro
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
