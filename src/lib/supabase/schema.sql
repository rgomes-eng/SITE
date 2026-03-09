--
-- RGOMES ENGENHARIA - Schema do Banco de Dados
-- Execute este SQL no Supabase SQL Editor (https://supabase.com/dashboard)
--

-- Tabela de Serviços
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(500),
  icon VARCHAR(100),
  image_url TEXT,
  features JSONB DEFAULT '[]',
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de Projetos
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  image_url TEXT,
  images JSONB DEFAULT '[]',
  category VARCHAR(100),
  location VARCHAR(255),
  client_name VARCHAR(255),
  completed_at DATE,
  order_index INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de Contatos/Leads
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  source VARCHAR(100) DEFAULT 'website',
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de Depoimentos
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_role VARCHAR(255),
  company VARCHAR(255),
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security) - Recomendado para produção
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Políticas: Leitura pública para services, projects, testimonials
CREATE POLICY "Serviços públicos para leitura" ON services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Projetos públicos para leitura" ON projects
  FOR SELECT USING (is_active = true);

CREATE POLICY "Depoimentos públicos para leitura" ON testimonials
  FOR SELECT USING (is_active = true);

-- Contatos: Inserção pública (formulário), leitura apenas com service_role
CREATE POLICY "Contatos inserção pública" ON contacts
  FOR INSERT WITH CHECK (true);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(order_index);

-- Dados iniciais de Serviços
INSERT INTO services (title, slug, short_description, description, icon, order_index) VALUES
(
  'Construção',
  'construcao',
  'Construções residenciais, comerciais e industriais com excelência técnica.',
  'Executamos obras de construção civil de pequeno a grande porte, desde fundações até o acabamento final. Utilizamos metodologias modernas e materiais de qualidade para garantir a durabilidade e segurança de cada projeto.',
  'FaBuilding',
  1
),
(
  'Reformas',
  'reformas',
  'Reformas completas e parciais para residências e empresas.',
  'Especializados em reformas estruturais, elétricas, hidráulicas e de acabamento. Planejamos cada etapa para minimizar transtornos e garantir que o resultado supere suas expectativas.',
  'FaHammer',
  2
),
(
  'Manutenções',
  'manutencoes',
  'Serviços preventivos e corretivos para sua edificação.',
  'Manutenção preventiva e corretiva para edificações residenciais, comerciais e industriais. Diagnóstico técnico, laudos e acompanhamento periódico para preservar o valor do seu patrimônio.',
  'FaTools',
  3
),
(
  'Gestão de Projetos',
  'gestao-projetos',
  'Planejamento e acompanhamento técnico de obras.',
  'Gestão completa de projetos de engenharia: cronograma, orçamento, qualidade e segurança. Garantimos o cumprimento de prazos e a otimização de recursos em todas as fases da obra.',
  'FaProjectDiagram',
  4
),
(
  'Soluções de Tecnologia',
  'tecnologia',
  'BIM, modelagem 3D e ferramentas digitais para engenharia.',
  'Implementamos soluções tecnológicas para engenharia civil: BIM (Building Information Modeling), modelagem 3D, gestão documental e softwares especializados para aumentar a eficiência dos seus projetos.',
  'FaLaptopCode',
  5
)
ON CONFLICT (slug) DO NOTHING;
