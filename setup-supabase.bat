@echo off
echo 🚀 Iniciando setup do Supabase...

set SUPABASE_URL=https://bapmkjwvsodvwzjpsavu.supabase.co
set SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcG1rand2c29kdnd6anBzYXZ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzAyMDA4OCwiZXhwIjoyMDg4NTk2MDg4fQ.EI1LCcHkLxY8i2NljGa5oRKZY_qWzO_h9WRtvzHwW6I

echo 📊 Criando tabelas via API...

curl -X POST "%SUPABASE_URL%/rest/v1/projects" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Edifício Comercial Central\",\"slug\":\"edificio-comercial-central\",\"short_description\":\"Modernização de edifício comercial no centro de Manaus\",\"category\":\"Comercial\",\"is_featured\":true,\"order_index\":1}"

curl -X POST "%SUPABASE_URL%/rest/v1/projects" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Condomínio Residencial Verde\",\"slug\":\"condominio-residencial-verde\",\"short_description\":\"Projeto sustentável com 48 apartamentos\",\"category\":\"Residencial\",\"is_featured\":true,\"order_index\":2}"

curl -X POST "%SUPABASE_URL%/rest/v1/projects" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Clínica Médica Saúde\",\"slug\":\"clinica-medica-saude\",\"short_description\":\"Construção de clínica com padrões hospitalares\",\"category\":\"Saúde\",\"is_featured\":false,\"order_index\":3}"

echo 📊 Criando serviços...

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Construção\",\"slug\":\"construcao\",\"short_description\":\"Obras residenciais, comerciais e industriais com excelência técnica\",\"icon\":\"building\",\"order_index\":1}"

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Reformas\",\"slug\":\"reformas\",\"short_description\":\"Reformas completas e parciais para residências e empresas\",\"icon\":\"tools\",\"order_index\":2}"

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Manutenções\",\"slug\":\"manutencoes\",\"short_description\":\"Serviços preventivos e corretivos para sua edificação\",\"icon\":\"wrench\",\"order_index\":3}"

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Gestão de Projetos\",\"slug\":\"gestao-projetos\",\"short_description\":\"Planejamento e acompanhamento técnico de obras\",\"icon\":\"project-diagram\",\"order_index\":4}"

curl -X POST "%SUPABASE_URL%/rest/v1/services" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Tecnologia\",\"slug\":\"tecnologia\",\"short_description\":\"BIM, modelagem 3D e soluções digitais para engenharia\",\"icon\":\"laptop-code\",\"order_index\":5}"

echo 📊 Criando depoimentos...

curl -X POST "%SUPABASE_URL%/rest/v1/testimonials" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"João Silva\",\"role\":\"Arquiteto\",\"company\":\"Studio Arquitetura\",\"content\":\"Excelente trabalho no projeto do nosso edifício. Equipe profissional e comprometida com prazos.\",\"rating\":5,\"order_index\":1}"

curl -X POST "%SUPABASE_URL%/rest/v1/testimonials" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Maria Santos\",\"role\":\"Sócia\",\"company\":\"Construtora Amazonas\",\"content\":\"Parceria confiável para nossos projetos. Qualidade e transparência em todas as etapas.\",\"rating\":5,\"order_index\":2}"

curl -X POST "%SUPABASE_URL%/rest/v1/testimonials" ^
  -H "apikey: %SERVICE_KEY%" ^
  -H "Authorization: Bearer %SERVICE_KEY%" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Pedro Costa\",\"role\":\"Gerente\",\"company\":\"Empreendimentos Manaus\",\"content\":\"Execução impecável e dentro do cronograma. Recomendo sem hesitação.\",\"rating\":5,\"order_index\":3}"

echo.
echo 🎉 SETUP CONCLUÍDO!
echo ✅ Dados exemplo inseridos com sucesso!
echo 🌐 Seu site está pronto: https://site-swart-five.vercel.app
echo.
pause
