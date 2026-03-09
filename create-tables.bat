@echo off
echo 🚀 Criando tabelas no Supabase...

set SUPABASE_URL=https://bapmkjwvsodvwzjpsavu.supabase.co
set SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcG1rand2c29kdnd6anBzYXZ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzAyMDA4OCwiZXhwIjoyMDg4NTk2MDg4fQ.EI1LCcHkLxY8i2NljGa5oRKZY_qWzO_h9WRtvzHwW6I

echo 📊 Criando tabela projects...

curl -X POST "%SUPABASE_URL%/rest/v1/projects" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=minimal" ^
  -d "{\"title\":\"Edifício Comercial Central\",\"slug\":\"edificio-comercial-central\",\"short_description\":\"Modernização de edifício comercial no centro de Manaus\",\"category\":\"Comercial\",\"is_featured\":true,\"order_index\":1}"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Tabela projects criada/dados inseridos
) else (
    echo ⚠️ Erro ao criar tabela projects (pode já existir)
)

echo 📊 Criando tabela services...

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=minimal" ^
  -d "{\"title\":\"Construção\",\"slug\":\"construcao\",\"short_description\":\"Obras residenciais, comerciais e industriais com excelência técnica\",\"icon\":\"building\",\"order_index\":1}"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Tabela services criada/dados inseridos
) else (
    echo ⚠️ Erro ao criar tabela services (pode já existir)
)

echo 📊 Criando tabela testimonials...

curl -X POST "%SUPABASE_URL%/rest/v1/testimonials" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=minimal" ^
  -d "{\"name\":\"João Silva\",\"role\":\"Arquiteto\",\"company\":\"Studio Arquitetura\",\"content\":\"Excelente trabalho no projeto do nosso edifício. Equipe profissional e comprometida com prazos.\",\"rating\":5,\"order_index\":1}"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Tabela testimonials criada/dados inseridos
) else (
    echo ⚠️ Erro ao criar tabela testimonials (pode já existir)
)

echo 📊 Criando tabela contacts...

curl -X POST "%SUPABASE_URL%/rest/v1/contacts" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=minimal" ^
  -d "{\"name\":\"Teste Contato\",\"email\":\"teste@exemplo.com\",\"message\":\"Mensagem de teste\"}"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Tabela contacts criada/dados inseridos
) else (
    echo ⚠️ Erro ao criar tabela contacts (pode já existir)
)

echo 📊 Criando tabela work_applications...

curl -X POST "%SUPABASE_URL%/rest/v1/work_applications" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=minimal" ^
  -d "{\"name\":\"Teste Candidato\",\"email\":\"candidato@exemplo.com\",\"phone\":\"(92) 99999-9999\",\"position\":\"Engenheiro Civil\",\"file_url\":\"https://exemplo.com/curriculo.pdf\",\"file_name\":\"curriculo.pdf\",\"file_size\":1024000,\"file_type\":\"application/pdf\"}"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Tabela work_applications criada/dados inseridos
) else (
    echo ⚠️ Erro ao criar tabela work_applications (pode já existir)
)

echo.
echo 🎉 Tabelas criadas!
echo 🌐 Teste seu site: https://site-swart-five.vercel.app
echo.
pause
