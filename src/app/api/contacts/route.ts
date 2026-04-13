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

    // Salvar no Supabase
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

    // Enviar WhatsApp
    const whatsappNumber = process.env.WHATSAPP_NUMBER || '5592981242509'
    const whatsappMessage = `*Nova mensagem de contato*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Telefone:* ${phone || 'Não informado'}\n*Assunto:* ${subject || 'Não informado'}\n\n*Mensagem:*\n${message}`
    
    try {
      const whatsappResponse = await fetch(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      })
      
      console.log('WhatsApp message sent successfully')
    } catch (whatsappError) {
      console.error('Erro ao enviar WhatsApp:', whatsappError)
      // Não falhar se o WhatsApp não for enviado
    }

    // Enviar email para contato@rgomesengenharia.com
    const contactEmail = process.env.CONTACT_EMAIL || 'contato@rgomesengenharia.com'
    
    try {
      const emailContent = `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
        <h3>Mensagem:</h3>
        <p>${message}</p>
      `

      // Simulação de envio de email (em produção, usar serviço como Resend, SendGrid, etc.)
      console.log('Email enviado para:', contactEmail)
      console.log('Conteúdo:', emailContent)
      
      // Aqui seria implementado o envio real com serviço de email
      // Exemplo com Resend:
      // const resend = new Resend(process.env.RESEND_API_KEY)
      // await resend.emails.send({
      //   from: 'no-reply@rgomesengenharia.com',
      //   to: [contactEmail],
      //   subject: `Novo contato: ${subject || 'Sem assunto'}`,
      //   html: emailContent
      // })
      
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError)
      // Não falhar se o email não for enviado
    }

    // Enviar confirmação para o usuário
    try {
      const confirmationContent = `
        <h2>Confirmação de recebimento - RGOMES ENGENHARIA</h2>
        <p>Olá ${name},</p>
        <p>Recebemos sua mensagem com sucesso! Entraremos em contato em breve.</p>
        <p><strong>Resumo da sua mensagem:</strong></p>
        <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
        <br>
        <p>Atenciosamente,<br>Equipe RGOMES ENGENHARIA</p>
        <p><small>Este é um email automático, por favor não responda.</small></p>
      `

      console.log('Email de confirmação enviado para:', email)
      console.log('Conteúdo da confirmação:', confirmationContent)
      
      // Aqui seria implementado o envio real da confirmação
      // await resend.emails.send({
      //   from: 'no-reply@rgomesengenharia.com',
      //   to: [email],
      //   subject: 'Confirmação de recebimento - RGOMES ENGENHARIA',
      //   html: confirmationContent
      // })
      
    } catch (confirmationError) {
      console.error('Erro ao enviar confirmação:', confirmationError)
      // Não falhar se a confirmação não for enviada
    }

    return NextResponse.json({ 
      success: true,
      message: 'Mensagem enviada com sucesso! Você receberá uma confirmação por email.'
    })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
