import { NextRequest, NextResponse } from 'next/server'

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

    // Log das informações recebidas
    console.log('========================================')
    console.log('NOVO CONTATO RECEBIDO:')
    console.log('Nome:', name)
    console.log('Email:', email)
    console.log('Telefone:', phone || 'Não informado')
    console.log('Assunto:', subject || 'Não informado')
    console.log('Mensagem:', message)
    console.log('========================================')
    console.log('Destino: contato@rgomesengenharia.com')
    console.log('WhatsApp: +55 92 98124-2509')
    console.log('========================================')

    // TODO: Implementar integração com Supabase quando as variáveis de ambiente estiverem configuradas
    // TODO: Implementar envio de email para contato@rgomesengenharia.com
    // TODO: Implementar notificação WhatsApp para +55 92 98124-2509

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
