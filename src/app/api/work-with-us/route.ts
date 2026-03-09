import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

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
    }

    const file = formData.get('file') as File

    // Validar dados obrigatórios
    if (!data.name || !data.email || !data.phone || !data.position || !file) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não preenchidos' },
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
      .from('work_applications')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        position: data.position,
        experience: data.experience || null,
        education: data.education || null,
        message: data.message || null,
        file_url: publicUrl,
        file_name: file.name,
        file_size: file.size,
        file_type: file.type,
        status: 'pending',
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
