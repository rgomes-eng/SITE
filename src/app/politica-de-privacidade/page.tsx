import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | RGOMES Engenharia',
  description: 'Política de Privacidade da RGOMES Engenharia - Conheça como protegemos seus dados pessoais.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background-dark pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. Introdução</h2>
            <p className="text-gray-300 mb-4">
              A RGOMES Engenharia (&quot;empresa&quot;, &quot;nós&quot; ou &quot;nosso&quot;) está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, parceiros e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
            <p className="text-gray-300">
              Ao acessar nosso site ou utilizar nossos serviços, você concorda com os termos desta política. Se não concordar, por favor, não utilize nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">2. Dados que Coletamos</h2>
            <p className="text-gray-300 mb-4">Podemos coletar os seguintes tipos de dados:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, endereço</li>
              <li><strong>Dados profissionais:</strong> empresa, cargo, CNPJ</li>
              <li><strong>Dados de projeto:</strong> informações sobre obras e serviços solicitados</li>
              <li><strong>Dados técnicos:</strong> IP, navegador, sistema operacional, cookies</li>
              <li><strong>Dados de comunicação:</strong> mensagens enviadas através de formulários</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">3. Como Coletamos seus Dados</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Formulários de contato e orçamento no site</li>
              <li>Comunicação por e-mail, telefone ou WhatsApp</li>
              <li>Cookies e tecnologias de rastreamento</li>
              <li>Documentos fornecidos para execução de serviços</li>
              <li>Visitas ao escritório ou canteiros de obra</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">4. Finalidade do Tratamento</h2>
            <p className="text-gray-300 mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Prestar os serviços de engenharia contratados</li>
              <li>Enviar propostas e orçamentos</li>
              <li>Comunicar-se sobre projetos em andamento</li>
              <li>Cumprir obrigações legais e contratuais</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Enviar newsletters e materiais informativos (com seu consentimento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">5. Base Legal</h2>
            <p className="text-gray-300 mb-4">O tratamento de dados pessoais é realizado com base nas seguintes fundamentações legais:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Execução de contrato:</strong> quando necessário para cumprir contratos de prestação de serviços</li>
              <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e segurança</li>
              <li><strong>Obrigação legal:</strong> para cumprimento de leis fiscais, trabalhistas e previdenciárias</li>
              <li><strong>Consentimento:</strong> quando você autoriza explicitamente o uso para fins específicos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">6. Compartilhamento de Dados</h2>
            <p className="text-gray-300 mb-4">
              Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Fornecedores e parceiros necessários para execução dos serviços</li>
              <li>Autoridades públicas, quando exigido por lei</li>
              <li>Profissionais da empresa envolvidos no projeto</li>
              <li>Empresas de tecnologia que prestam serviços de hospedagem e segurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">7. Segurança dos Dados</h2>
            <p className="text-gray-300 mb-4">
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Criptografia de dados sensíveis</li>
              <li>Acesso restrito a funcionários autorizados</li>
              <li>Firewalls e sistemas de detecção de invasão</li>
              <li>Backups regulares e seguros</li>
              <li>Treinamento de colaboradores em privacidade</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">8. Seus Direitos</h2>
            <p className="text-gray-300 mb-4">De acordo com a LGPD, você tem os seguintes direitos:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar exclusão dos dados</li>
              <li>Revogar consentimento</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Opor-se ao tratamento</li>
              <li>Solicitar anonimização ou bloqueio</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Para exercer seus direitos, entre em contato através do e-mail: <a href="mailto:privacidade@rgomesengenharia.com" className="text-primary hover:underline">privacidade@rgomesengenharia.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">9. Cookies</h2>
            <p className="text-gray-300 mb-4">
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode desativar cookies nas configurações do navegador, mas isso pode limitar algumas funcionalidades do site.
            </p>
            <p className="text-gray-300">
              <strong>Tipos de cookies utilizados:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Necessários:</strong> essenciais para o funcionamento do site</li>
              <li><strong>Analíticos:</strong> para entender como os visitantes interagem com o site</li>
              <li><strong>Preferências:</strong> para lembrar suas configurações e preferências</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">10. Retenção dos Dados</h2>
            <p className="text-gray-300">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por obrigações legais (ex: fiscais, trabalhistas). Após esse período, os dados são excluídos ou anonimizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">11. Alterações nesta Política</h2>
            <p className="text-gray-300">
              Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com a data da última atualização. Recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">12. Contato</h2>
            <p className="text-gray-300 mb-4">
              Se tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato:
            </p>
            <div className="text-gray-300 space-y-2">
              <p><strong>RGOMES Engenharia</strong></p>
              <p>E-mail: <a href="mailto:privacidade@rgomesengenharia.com" className="text-primary hover:underline">privacidade@rgomesengenharia.com</a></p>
              <p>E-mail alternativo: <a href="mailto:engenhariargomes@gmail.com" className="text-primary hover:underline">engenhariargomes@gmail.com</a></p>
              <p>Telefone: <a href="tel:+5592981242509" className="text-primary hover:underline">(92) 98124-2509</a></p>
              <p>Endereço: Manaus, Amazonas - Brasil</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">13. Encarregado de Dados (DPO)</h2>
            <p className="text-gray-300">
              Nosso encarregado de proteção de dados pode ser contatado para questões relacionadas ao tratamento de dados pessoais: <a href="mailto:privacidade@rgomesengenharia.com" className="text-primary hover:underline">privacidade@rgomesengenharia.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
