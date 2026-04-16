import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Email configuration
const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.RESEND_FROM_EMAIL || 'contato@rgomesengenharia.com'
const toEmail = process.env.CONTACT_EMAIL || 'contato@rgomesengenharia.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validação dos campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, e-mail e mensagem são obrigatórios.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido.' },
        { status: 400 }
      )
    }

    let savedToDatabase = false
    let emailSent = false

    // 1. Salvar no Supabase (se configurado)
    if (supabaseUrl && supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        
        const { error: supabaseError } = await supabase.from('contacts').insert({
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
          source: 'website',
          status: 'new',
          created_at: new Date().toISOString(),
        })

        if (supabaseError) {
          console.error('Supabase error:', supabaseError)
        } else {
          savedToDatabase = true
          console.log('✅ Contato salvo no Supabase')
        }
      } catch (dbError) {
        console.error('Database error:', dbError)
      }
    } else {
      console.log('⚠️ Supabase não configurado - pulando persistência')
    }

    // 2. Enviar email com Resend (se configurado)
    console.log('📧 CONFIGURAÇÃO DE EMAIL:')
    console.log('   From:', fromEmail)
    console.log('   To:', toEmail)
    console.log('   Resend API Key configurada:', resendApiKey ? 'Sim' : 'Não')

    if (resendApiKey) {
      try {
        // Email para a empresa
        const adminEmailHtml = `
          <h2>Nova mensagem de contato - RGOMES ENGENHARIA</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
          <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
          <h3>Mensagem:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Recebido em: ${new Date().toLocaleString('pt-BR')}</small></p>
        `

        console.log('📤 Enviando email para empresa:', toEmail)

        const adminEmailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject: `Novo contato: ${subject || 'Sem assunto'} - ${name}`,
            html: adminEmailHtml,
          }),
        })

        if (!adminEmailResponse.ok) {
          const errorData = await adminEmailResponse.text()
          console.error('❌ Erro ao enviar email para empresa:', adminEmailResponse.status, errorData)
        } else {
          console.log('✅ Email para empresa enviado com sucesso')
        }

        // Email de confirmação para o usuário
        const userEmailHtml = `
          <h2>Confirmação de recebimento - RGOMES ENGENHARIA</h2>
          <p>Olá ${name},</p>
          <p>Recebemos sua mensagem com sucesso! Nossa equipe analisará seu contato e retornará em breve.</p>
          <h3>Resumo da sua mensagem:</h3>
          <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><strong>Nossos canais de atendimento:</strong></p>
          <p>📱 WhatsApp: (92) 98124-2509</p>
          <p>📧 Email: contato@rgomesengenharia.com</p>
          <br>
          <p>Atenciosamente,<br><strong>Equipe RGOMES ENGENHARIA</strong></p>
          <p><small>Este é um email automático. Por favor, não responda diretamente.</small></p>
        `

        console.log('📤 Enviando email de confirmação para usuário:', email)

        const userEmailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            subject: 'Confirmação de recebimento - RGOMES ENGENHARIA',
            html: userEmailHtml,
          }),
        })

        if (!userEmailResponse.ok) {
          const errorData = await userEmailResponse.text()
          console.error('❌ Erro ao enviar email de confirmação:', userEmailResponse.status, errorData)
        } else {
          console.log('✅ Email de confirmação enviado com sucesso')
        }

        emailSent = true
        console.log('✅ Processo de email concluído')
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    } else {
      console.log('⚠️ Resend não configurado - pulando envio de email')
    }

    // 3. Log das informações (sempre executar)
    console.log('========================================')
    console.log('📧 NOVO CONTATO RECEBIDO:')
    console.log('Nome:', name)
    console.log('Email:', email)
    console.log('Telefone:', phone || 'Não informado')
    console.log('Assunto:', subject || 'Não informado')
    console.log('Mensagem:', message)
    console.log('========================================')
    console.log('Status:', {
      savedToDatabase,
      emailSent,
      emailDestino: toEmail,
      emailRemetente: fromEmail,
      resendConfigurado: !!resendApiKey,
      whatsappLink: `https://wa.me/5592981242509?text=${encodeURIComponent(`Olá! Recebi seu contato de ${name}. Como posso ajudar?`)}`
    })
    console.log('========================================')

    // Resposta de sucesso (mesmo se email/DB falharem, o usuário não fica sem resposta)
    return NextResponse.json({ 
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      details: {
        savedToDatabase,
        emailSent,
        emailDestino: toEmail,
        resendConfigurado: !!resendApiKey,
      }
    })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
