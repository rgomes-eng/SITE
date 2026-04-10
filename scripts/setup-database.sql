-- Database setup script for RGOMES Engenharia
-- Run this script in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    description TEXT,
    image_url TEXT,
    category TEXT,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create work_with_us table
CREATE TABLE IF NOT EXISTS work_with_us (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    position TEXT,
    message TEXT,
    resume_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_active ON projects(is_active);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);

-- Create indexes for contacts
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Create indexes for work_with_us
CREATE INDEX IF NOT EXISTS idx_work_with_us_email ON work_with_us(email);
CREATE INDEX IF NOT EXISTS idx_work_with_us_created_at ON work_with_us(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_with_us ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Projects: Everyone can read active projects
CREATE POLICY "Public read access for active projects" ON projects
    FOR SELECT USING (is_active = true);

-- Projects: Only authenticated users can insert/update
CREATE POLICY "Authenticated users can manage projects" ON projects
    FOR ALL USING (auth.role() = 'authenticated');

-- Contacts: Everyone can insert
CREATE POLICY "Public insert access for contacts" ON contacts
    FOR INSERT WITH CHECK (true);

-- Contacts: Only authenticated users can read
CREATE POLICY "Authenticated users can read contacts" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Work with us: Everyone can insert
CREATE POLICY "Public insert access for work_with_us" ON work_with_us
    FOR INSERT WITH CHECK (true);

-- Work with us: Only authenticated users can read
CREATE POLICY "Authenticated users can read work_with_us" ON work_with_us
    FOR SELECT USING (auth.role() = 'authenticated');

-- Insert sample projects (you can modify these)
INSERT INTO projects (title, slug, short_description, description, image_url, category, is_featured, order_index) VALUES
('Edificação Residencial', 'edificacao-residencial', 'Obra completa com alta qualidade de acabamento.', 'Projeto de edificação residencial com padrão de excelência em construção, utilizando técnicas modernas e materiais de alta qualidade.', '/illustrations/SITE_Residencial3_16x9.png', 'Construção', true, 1),
('Reforma Corporativa', 'reforma-corporativa', 'Modernização de espaços comerciais.', 'Reforma completa de espaço corporativo com otimização de layout e modernização de instalações.', '/illustrations/[Projetos]Reforma Corporativa.png', 'Reformas', true, 2),
('Infraestrutura Industrial', 'infraestrutura-industrial', 'Projeto com gestão BIM.', 'Infraestrutura industrial completa com gestão BIM para máxima precisão e eficiência.', '/illustrations/SITE_Tecnologia_Infra.png', 'Tecnologia', true, 3),
('Condomínio Residencial', 'condominio-residencial', 'Construção de unidades habitacionais.', 'Desenvolvimento de condomínio residencial com múltiplas unidades e áreas comuns.', '/illustrations/SITE_OBRAGRANDE2.png', 'Construção', false, 4),
('Manutenção Predial', 'manutencao-predial', 'Serviços preventivos em edificações.', 'Manutenção predial completa com serviços preventivos e corretivos.', '/illustrations/Reforma_Fachada.png', 'Manutenções', false, 5),
('Centro Comercial', 'centro-comercial', 'Ampliação e adequações.', 'Ampliação e adequação de centro comercial com melhorias estruturais.', '/illustrations/SITE_ManutençãoShopping.png', 'Reformas', false, 6)
ON CONFLICT (slug) DO NOTHING;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON projects TO authenticated;
GRANT SELECT ON projects TO anon;
GRANT INSERT ON contacts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON contacts TO authenticated;
GRANT INSERT ON work_with_us TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON work_with_us TO authenticated;
