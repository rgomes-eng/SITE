-- Tabela para armazenar candidaturas de trabalho
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

-- Storage bucket para currículos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'curriculos', 
  'curriculos', 
  true, 
  5242880, -- 5MB em bytes
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
) ON CONFLICT (id) DO NOTHING;

-- Políticas de acesso para o bucket de currículos
-- Permitir upload anônimo (para formulário público)
CREATE POLICY "Allow anonymous uploads" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'curriculos'
);

-- Permitir download público dos arquivos
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (
  bucket_id = 'curriculos'
);

-- Políticas de acesso para a tabela work_applications
-- Permitir inserção anônima (formulário público)
CREATE POLICY "Allow anonymous insert" ON work_applications
FOR INSERT WITH CHECK (true);

-- Permitir leitura apenas para usuários autenticados
CREATE POLICY "Allow authenticated read" ON work_applications
FOR SELECT USING (auth.role() = 'authenticated');

-- Permitir atualização apenas para usuários autenticados
CREATE POLICY "Allow authenticated update" ON work_applications
FOR UPDATE USING (auth.role() = 'authenticated');

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_work_applications_status ON work_applications(status);
CREATE INDEX IF NOT EXISTS idx_work_applications_created_at ON work_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_work_applications_email ON work_applications(email);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_work_applications_updated_at
BEFORE UPDATE ON work_applications
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
