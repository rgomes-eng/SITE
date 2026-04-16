-- Tabela para candidaturas Trabalhe Conosco
CREATE TABLE IF NOT EXISTS work_with_us (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  position VARCHAR(255) NOT NULL,
  experience TEXT,
  education TEXT,
  message TEXT,
  resume_url TEXT NOT NULL,
  data_sharing_consent BOOLEAN NOT NULL DEFAULT FALSE,
  privacy_policy_consent BOOLEAN NOT NULL DEFAULT FALSE,
  cookie_policy_consent BOOLEAN NOT NULL DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'reviewed', 'contacted', 'rejected', 'hired'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_work_status ON work_with_us(status);
CREATE INDEX IF NOT EXISTS idx_work_created ON work_with_us(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_work_position ON work_with_us(position);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_work_with_us_updated_at ON work_with_us;
CREATE TRIGGER update_work_with_us_updated_at
  BEFORE UPDATE ON work_with_us
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentários
COMMENT ON TABLE work_with_us IS 'Candidaturas recebidas pela seção Trabalhe Conosco';
COMMENT ON COLUMN work_with_us.status IS 'Status da candidatura: new, reviewed, contacted, rejected, hired';
