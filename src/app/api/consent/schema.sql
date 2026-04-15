-- Tabela para registrar consentimentos LGPD e Cookies
CREATE TABLE IF NOT EXISTS consent_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type VARCHAR(50) NOT NULL, -- 'lgpd_privacy_work', 'cookies_work', 'terms_work'
  accepted BOOLEAN NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  user_agent TEXT,
  ip_address VARCHAR(45), -- IPv6 compatible
  source VARCHAR(50) DEFAULT 'trabalhe_conosco',
  form_data JSONB, -- opcional: dados do formulário relacionados
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para consultas eficientes
CREATE INDEX IF NOT EXISTS idx_consent_type ON consent_logs(type);
CREATE INDEX IF NOT EXISTS idx_consent_timestamp ON consent_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_consent_ip ON consent_logs(ip_address);

-- Comentários para documentação
COMMENT ON TABLE consent_logs IS 'Registro de consentimentos LGPD e políticas para auditoria';
COMMENT ON COLUMN consent_logs.type IS 'Tipo de consentimento: lgpd_privacy_work, cookies_work, terms_work';
COMMENT ON COLUMN consent_logs.accepted IS 'Se o usuário aceitou (true) ou rejeitou (false)';
COMMENT ON COLUMN consent_logs.source IS 'Origem do consentimento: trabalhe_conosco, contato, etc';
COMMENT ON COLUMN consent_logs.form_data IS 'Dados relacionados do formulário (nome, email, etc) - sem dados sensíveis';
