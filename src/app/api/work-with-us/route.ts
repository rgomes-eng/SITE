import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extrair dados do formulário
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      experience: formData.get('experience') as string,
      education: formData.get('education') as string,
      message: formData.get('message') as string,
      data_sharing_consent: formData.get('data_sharing_consent') === 'true',
      privacy_policy_consent: formData.get('privacy_policy_consent') === 'true',
      cookie_policy_consent: formData.get('cookie_policy_consent') === 'true',
    }

    const file = formData.get('file') as File

    // Validar dados obrigatórios
    if (!data.name || !data.email || !data.phone || !data.position || !file) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Validar consentimentos LGPD
    if (!data.data_sharing_consent || !data.privacy_policy_consent || !data.cookie_policy_consent) {
      return NextResponse.json(
        { error: 'Todos os consentimentos são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se o Supabase está configurado
    const hasSupabaseEnv = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!hasSupabaseEnv) {
      // Fallback: apenas registrar no console (ambiente de desenvolvimento)
      console.log('Trabalhe Conosco - Formulário recebido:', {
        ...data,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      })
      
      return NextResponse.json(
        { success: true, message: 'Currículo recebido com sucesso!' },
        { status: 200 }
      )
    }

    const supabase = await createClient()

    // 1. Fazer upload do arquivo para o Supabase Storage
    const fileExt = file.name.split('.').pop()
    const fileName = `curriculos/${Date.now()}_${data.name.replace(/\s+/g, '_')}.${fileExt}`
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('curriculos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      console.error('Erro ao fazer upload do arquivo:', uploadError)
      return NextResponse.json(
        { error: 'Erro ao fazer upload do currículo' },
        { status: 500 }
      )
    }

    // 2. Obter URL pública do arquivo
    const { data: { publicUrl } } = supabase.storage
      .from('curriculos')
      .getPublicUrl(fileName)

    // 3. Salvar dados no banco de dados
    const { data: insertData, error: insertError } = await supabase
      .from('work_with_us')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        position: data.position,
        experience: data.experience || null,
        education: data.education || null,
        message: data.message || null,
        resume_url: publicUrl,
        data_sharing_consent: data.data_sharing_consent,
        privacy_policy_consent: data.privacy_policy_consent,
        cookie_policy_consent: data.cookie_policy_consent,
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (insertError) {
      console.error('Erro ao salvar no banco:', insertError)
      // Tentar deletar o arquivo enviado
      await supabase.storage.from('curriculos').remove([fileName])

      return NextResponse.json(
        { error: 'Erro ao salvar dados no banco' },
        { status: 500 }
      )
    }

    // Enviar email de notificação via Resend
    const contactEmail = process.env.CONTACT_EMAIL || 'contato@rgomesengenharia.com'
    
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      // Verificar se Resend está configurado
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'RGOMES Engenharia <contato@rgomesengenharia.com>',
          to: contactEmail,
          subject: `Novo currículo: ${data.name} - ${data.position}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
              <h2 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">
                Novo currículo recebido - Trabalhe Conosco
              </h2>
              
              <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #2d3748; margin-top: 0;">Informações do candidato</h3>
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Telefone:</strong> ${data.phone}</p>
                <p><strong>Cargo desejado:</strong> ${data.position}</p>
                
                ${data.experience ? `<p><strong>Experiência:</strong> ${data.experience}</p>` : ''}
                ${data.education ? `<p><strong>Formação:</strong> ${data.education}</p>` : ''}
                ${data.message ? `<p><strong>Mensagem:</strong> ${data.message}</p>` : ''}
              </div>
              
              <div style="background: #e6fffa; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3182ce;">
                <h3 style="color: #2d3748; margin-top: 0;">📎 Currículo</h3>
                <p>Link para download do currículo:</p>
                <a href="${publicUrl}" 
                   style="display: inline-block; background: #3182ce; color: white; padding: 12px 24px; 
                          text-decoration: none; border-radius: 6px; margin-top: 10px;">
                  Baixar currículo
                </a>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 12px;">
                <p><strong>Consentimentos LGPD:</strong></p>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Compartilhamento de dados: ${data.data_sharing_consent ? '✅ Aceito' : '❌ Não aceito'}</li>
                  <li>Política de Privacidade: ${data.privacy_policy_consent ? '✅ Aceito' : '❌ Não aceito'}</li>
                  <li>Política de Cookies: ${data.cookie_policy_consent ? '✅ Aceito' : '❌ Não aceito'}</li>
                </ul>
                <p style="margin-top: 15px;">
                  Recebido em: ${new Date().toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          `
        })
        
        console.log('✅ Email enviado com sucesso para:', contactEmail)
      } else {
        console.log('⚠️ RESEND_API_KEY não configurado. Email não enviado.')
        console.log('Dados do candidato:', { 
          name: data.name, 
          email: data.email, 
          position: data.position,
          resumeUrl: publicUrl 
        })
      }
    } catch (emailError) {
      console.error('❌ Erro ao enviar email:', emailError)
      // Não falha o processo se o email não for enviado - dados já estão salvos
    }

    return NextResponse.json({
      success: true,
      message: 'Currículo recebido com sucesso!',
      data: insertData
    })

  } catch (error) {
    console.error('Erro no processamento do formulário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
