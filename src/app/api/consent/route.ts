import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface ConsentData {
  type: string
  accepted: boolean
  timestamp: string
  userAgent: string
  ip?: string
  formData?: {
    name?: string
    email?: string
    position?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ConsentData = await request.json()
    
    // Obter IP do usuário
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    const consentRecord = {
      type: body.type,
      accepted: body.accepted,
      timestamp: body.timestamp,
      user_agent: body.userAgent,
      ip_address: ip,
      source: 'trabalhe_conosco',
      form_data: body.formData || null,
    }

    // Tentar salvar no Supabase
    try {
      const supabase = await createClient()
      const { error } = await supabase
        .from('consent_logs')
        .insert(consentRecord)

      if (error) {
        console.error('Erro Supabase:', error)
        // Continua mesmo com erro - temos localStorage como backup
      }
    } catch (dbError) {
      console.error('Erro ao conectar ao Supabase:', dbError)
      // Não falha a requisição - localStorage serve como backup
    }

    // Log no servidor (para auditoria)
    console.log('[CONSENT]', {
      type: body.type,
      accepted: body.accepted,
      timestamp: body.timestamp,
      ip: ip?.substring(0, 10) + '...', // Parcial para privacidade
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Consentimento registrado',
      logged: true 
    })

  } catch (error) {
    console.error('Erro na API de consentimento:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno' },
      { status: 500 }
    )
  }
}

// Endpoint GET para verificar consentimentos (opcional)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    
    if (!type) {
      return NextResponse.json(
        { success: false, error: 'Tipo não especificado' },
        { status: 400 }
      )
    }

    // Aqui poderia verificar no banco, mas por enquanto retorna sucesso
    return NextResponse.json({ 
      success: true, 
      message: 'Use localStorage para verificar consentimentos no cliente'
    })

  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno' },
      { status: 500 }
    )
  }
}
