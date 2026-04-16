-- Tabela para mensagens de contato
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  source VARCHAR(50) DEFAULT 'website', -- 'website', 'whatsapp', 'email', 'phone'
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'read', 'replied', 'archived', 'spam'
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Trigger para atualizar updated_at
DROP TRIGGER IF EXISTS update_contacts_updated_at ON contacts;
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentários
COMMENT ON TABLE contacts IS 'Mensagens de contato recebidas pelo site';
COMMENT ON COLUMN contacts.status IS 'Status da mensagem: new, read, replied, archived, spam';
COMMENT ON COLUMN contacts.source IS 'Origem do contato: website, whatsapp, email, phone';
