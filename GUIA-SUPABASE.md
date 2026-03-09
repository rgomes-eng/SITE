# 🚀 GUIA DE CONFIGURAÇÃO DO SUPABASE - RGOMES ENGENHARIA

## 📋 ACESSO AO PROJETO

1. **URL do Projeto**: https://bapmkjwvsodvwzjpsavu.supabase.co
2. **Email**: seu email de cadastro
3. **Senha**: Site@Rgomes123

## 🔧 PASSO A PASSO COMPLETO

### 1️⃣ ACESSAR O SUPABASE
```
1. Abra o navegador
2. Acesse: https://bapmkjwvsodvwzjpsavu.supabase.co
3. Faça login com seu email e senha
```

### 2️⃣ ABRIR SQL EDITOR
```
1. No menu lateral esquerdo, clique em "SQL Editor"
2. Clique em "New query" para abrir uma nova consulta
```

### 3️⃣ EXECUTAR O SCRIPT COMPLETO

Copie TODO o conteúdo abaixo e cole no SQL Editor:

```sql
-- =====================================================
-- SETUP COMPLETO DO SUPABASE - RGOMES ENGENHARIA
-- Projeto: bapmkjwvsodvwzjpsavu
-- =====================================================

-- 1. CRIAR TABELAS
CREATE TABLE IF NOT EXISTS work_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  position VARCHAR(255) NOT NULL,
  experience TEXT,
  education TEXT,
  message TEXT,
  file_url TEXT NOT NULL,
  file_name VARCHAR(500) NOT NULL,
  file_size BIGINT NOT NULL,
  file_type VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'responded')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  image_url VARCHAR(500),
  category VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  image_url VARCHAR(500),
  icon VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  company VARCHAR(255),
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. CRIAR STORAGE BUCKETS
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('curriculos', 'curriculos', true, 5242880, 
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('images', 'images', true, 10485760, 
  ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- 3. HABILITAR RLS
ALTER TABLE work_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- 4. CRIAR POLÍTICAS DE ACESSO
-- work_applications
CREATE POLICY "Allow anonymous insert" ON work_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON work_applications FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON work_applications FOR UPDATE USING (auth.role() = 'authenticated');

-- contacts
CREATE POLICY "Allow anonymous insert" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON contacts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON contacts FOR UPDATE USING (auth.role() = 'authenticated');

-- projects
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (is_active = true);
CREATE POLICY "Allow authenticated insert" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON projects FOR DELETE USING (auth.role() = 'authenticated');

-- services
CREATE POLICY "Allow public read" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Allow authenticated insert" ON services FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON services FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON services FOR DELETE USING (auth.role() = 'authenticated');

-- testimonials
CREATE POLICY "Allow public read" ON testimonials FOR SELECT USING (is_active = true);
CREATE POLICY "Allow authenticated insert" ON testimonials FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON testimonials FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON testimonials FOR DELETE USING (auth.role() = 'authenticated');

-- Storage policies
CREATE POLICY "Allow anonymous uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'curriculos');
CREATE POLICY "Allow public downloads" ON storage.objects FOR SELECT USING (bucket_id = 'curriculos' OR bucket_id = 'images');
CREATE POLICY "Allow authenticated uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

-- 5. CRIAR ÍNDICES
CREATE INDEX IF NOT EXISTS idx_work_applications_status ON work_applications(status);
CREATE INDEX IF NOT EXISTS idx_work_applications_created_at ON work_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_work_applications_email ON work_applications(email);

CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_projects_active ON projects(is_active);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(is_featured);

CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active);

-- 6. CRIAR TRIGGER PARA updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_work_applications_updated_at BEFORE UPDATE ON work_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 7. INSERIR DADOS EXEMPLO
INSERT INTO projects (title, slug, short_description, category, is_featured, order_index) VALUES
('Edifício Comercial Central', 'edificio-comercial-central', 'Modernização de edifício comercial no centro de Manaus', 'Comercial', true, 1),
('Condomínio Residencial Verde', 'condominio-residencial-verde', 'Projeto sustentável com 48 apartamentos', 'Residencial', true, 2),
('Clínica Médica Saúde', 'clinica-medica-saude', 'Construção de clínica com padrões hospitalares', 'Saúde', false, 3)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO services (title, slug, short_description, icon, order_index) VALUES
('Construção', 'construcao', 'Obras residenciais, comerciais e industriais com excelência técnica', 'building', 1),
('Reformas', 'reformas', 'Reformas completas e parciais para residências e empresas', 'tools', 2),
('Manutenções', 'manutencoes', 'Serviços preventivos e corretivos para sua edificação', 'wrench', 3),
('Gestão de Projetos', 'gestao-projetos', 'Planejamento e acompanhamento técnico de obras', 'project-diagram', 4),
('Tecnologia', 'tecnologia', 'BIM, modelagem 3D e soluções digitais para engenharia', 'laptop-code', 5)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO testimonials (name, role, company, content, rating, order_index) VALUES
('João Silva', 'Arquiteto', 'Studio Arquitetura', 'Excelente trabalho no projeto do nosso edifício. Equipe profissional e comprometida com prazos.', 5, 1),
('Maria Santos', 'Sócia', 'Construtora Amazonas', 'Parceria confiável para nossos projetos. Qualidade e transparência em todas as etapas.', 5, 2),
('Pedro Costa', 'Gerente', 'Empreendimentos Manaus', 'Execução impecável e dentro do cronograma. Recomendo sem hesitação.', 5, 3)
ON CONFLICT DO NOTHING;
```

### 4️⃣ EXECUTAR O SCRIPT
```
1. Depois de colar o código, clique no botão "RUN" (▶️)
2. Aguarde a execução completa
3. Você deve ver "Success" para cada comando
```

### 5️⃣ VERIFICAR TUDO FUNCIONOU

#### Verificar Tabelas:
```
1. No menu lateral, clique em "Table Editor"
2. Você deve ver as tabelas:
   - work_applications
   - contacts  
   - projects
   - services
   - testimonials
```

#### Verificar Storage:
```
1. No menu lateral, clique em "Storage"
2. Você deve ver os buckets:
   - curriculos
   - images
```

### 6️⃣ TESTAR O SITE

Acesse seu site e teste:
- **Formulário de Contato**: https://site-swart-five.vercel.app/contato
- **Trabalhe Conosco**: https://site-swart-five.vercel.app/trabalhe-conosco
- **Página Principal**: https://site-swart-five.vercel.app

## 🎉 RESULTADO ESPERADO

Após executar o script:
- ✅ Todas as tabelas criadas
- ✅ Storage buckets configurados  
- ✅ Políticas de segurança ativas
- ✅ Dados exemplo inseridos
- ✅ Site 100% funcional

## 🆘 SE TIVER ALGUM ERRO

1. **Erro de permissão**: Verifique se você está logado corretamente
2. **Tabela já existe**: É normal, o comando usa "IF NOT EXISTS"
3. **Erro de sintaxe**: Copie novamente o código acima
4. **Storage bucket já existe**: Também é normal

---

## 📞 SUPORTE

Se precisar de ajuda:
- Verifique o console do navegador para erros
- Confirme as variáveis de ambiente no site
- Teste os formulários após a configuração

**Seu site estará 100% funcional após executar esses passos!** 🚀
