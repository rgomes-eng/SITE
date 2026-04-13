import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

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

    // Verificar se as variáveis de ambiente estão configuradas
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase environment variables not configured')
      // Em desenvolvimento, continuar sem salvar no banco
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Simulating contact submission', { name, email, phone, subject, message })
        return NextResponse.json({ 
          success: true, 
          message: 'Mensagem recebida! (Modo desenvolvimento - sem banco de dados)'
        })
      }
      return NextResponse.json(
        { error: 'Erro de configuração do servidor.' },
        { status: 500 }
      )
    }

    // Salvar no Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

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

    // Log das informações (para debugging e monitoramento)
    console.log('Contact form submitted successfully:', { name, email, subject })
    console.log('Email should be sent to: contato@rgomesengenharia.com')
    console.log('WhatsApp notification should be sent to: +55 92 98124-2509')

    return NextResponse.json({ 
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
