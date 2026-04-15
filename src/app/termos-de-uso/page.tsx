import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | RGOMES Engenharia',
  description: 'Termos de Uso da RGOMES Engenharia - Conheça as regras e condições para utilização do site e serviços.',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background-dark pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 mb-4">
              Ao acessar e utilizar o site da RGOMES Engenharia (&quot;site&quot;), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá acessar ou utilizar o site.
            </p>
            <p className="text-gray-300">
              Estes Termos de Uso constituem um acordo legal entre você e a RGOMES Engenharia (&quot;empresa&quot;, &quot;nós&quot; ou &quot;nosso&quot;).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">2. Definições</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>&quot;Site&quot;:</strong> refere-se ao website da RGOMES Engenharia</li>
              <li><strong>&quot;Usuário&quot;:</strong> qualquer pessoa que acessa ou utiliza o site</li>
              <li><strong>&quot;Serviços&quot;:</strong> serviços de engenharia civil oferecidos pela empresa</li>
              <li><strong>&quot;Conteúdo&quot;:</strong> textos, imagens, vídeos, logotipos e outros materiais do site</li>
              <li><strong>&quot;Cliente&quot;:</strong> pessoa física ou jurídica que contrata nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">3. Uso do Site</h2>
            <p className="text-gray-300 mb-4">Você concorda em utilizar o site apenas para fins legais e de acordo com estes Termos de Uso. É proibido:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Utilizar o site de forma que possa danificar, sobrecarregar ou comprometer sua funcionalidade</li>
              <li>Tentar acessar áreas restritas do site sem autorização</li>
              <li>Utilizar robôs, spiders ou outros meios automatizados de acesso</li>
              <li>Reproduzir, duplicar, copiar, vender ou explorar comercialmente qualquer parte do site</li>
              <li>Publicar ou transmitir conteúdo ofensivo, ilegal ou que viole direitos de terceiros</li>
              <li>Coletar ou armazenar dados pessoais de outros usuários</li>
              <li>Enganar ou tentar enganar a empresa ou outros usuários</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">4. Propriedade Intelectual</h2>
            <p className="text-gray-300 mb-4">
              Todo o conteúdo do site, incluindo mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, é propriedade da RGOMES Engenharia ou de seus fornecedores de conteúdo e está protegido por leis brasileiras e internacionais de direitos autorais.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Marcas registradas:</strong> O nome &quot;RGOMES Engenharia&quot;, logotipo e outros gráficos relacionados são marcas registradas da RGOMES Engenharia. Não é permitido usar essas marcas sem autorização expressa por escrito.
            </p>
            <p className="text-gray-300">
              <strong>Licença limitada:</strong> Concedemos a você uma licença limitada, não exclusiva e revogável para acessar e usar o site para fins pessoais e não comerciais. Esta licença não inclui o direito de modificar, copiar, distribuir, transmitir, exibir, reproduzir, publicar ou criar trabalhos derivados do conteúdo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">5. Solicitações de Orçamento e Contato</h2>
            <p className="text-gray-300 mb-4">
              Ao enviar solicitações de orçamento ou mensagens através dos formulários do site, você declara que:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>As informações fornecidas são verdadeiras, precisas e atualizadas</li>
              <li>Tem capacidade legal para representar a empresa ou propriedade mencionada</li>
              <li>Não enviará informações falsas, enganosas ou fraudulentas</li>
              <li>Respeitará nossos prazos de resposta e processos comerciais</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Reservamo-nos o direito de recusar ou cancelar solicitações que violem estes termos ou que consideremos inadequadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">6. Contratos e Prestação de Serviços</h2>
            <p className="text-gray-300 mb-4">
              <strong>Propostas:</strong> Orçamentos e propostas enviados através do site são válidos conforme prazo especificado ou, na ausência, por 30 dias.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Formalização:</strong> A contratação de serviços é formalizada mediante assinatura de contrato específico. Os termos do contrato prevalecem sobre informações gerais do site.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Pagamentos:</strong> Condições de pagamento são estabelecidas em contrato. Não aceitamos pagamentos através do site.
            </p>
            <p className="text-gray-300">
              <strong>Execução:</strong> Prazos e condições de execução de obras são acordados contratualmente e podem variar conforme complexidade do projeto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">7. Responsabilidades</h2>
            <p className="text-gray-300 mb-4">
              <strong>Nossa responsabilidade:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Prestar serviços com qualidade e dentro das normas técnicas vigentes</li>
              <li>Manter sigilo sobre informações confidenciais dos clientes</li>
              <li>Cumprir prazos contratuais, salvo imprevistos de força maior</li>
              <li>Garantir a segurança estrutural das obras executadas</li>
              <li>Fornecer garantia contratual dos serviços prestados</li>
            </ul>
            <p className="text-gray-300 mt-4 mb-4">
              <strong>Responsabilidade do usuário/cliente:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Fornecer informações verdadeiras e documentação necessária</li>
              <li>Cumprir obrigações de pagamento conforme contrato</li>
              <li>Permitir acesso às instalações para execução dos serviços</li>
              <li>Obter licenças e alvarás necessários, quando de sua responsabilidade</li>
              <li>Comunicar prontamente qualquer irregularidade observada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
            <p className="text-gray-300 mb-4">
              Na máxima extensão permitida pela lei aplicável, a RGOMES Engenharia não será responsável por:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Danos indiretos, incidentais, especiais ou consequenciais</li>
              <li>Perda de lucros, receita ou economias antecipadas</li>
              <li>Interrupção de negócios ou perda de oportunidades</li>
              <li>Falhas técnicas do site indisponibilidade temporária</li>
              <li>Atos de terceiros não vinculados à empresa</li>
              <li>Casos de força maior (desastres naturais, greves, etc.)</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Nossa responsabilidade total por qualquer reclamação relacionada aos serviços limita-se ao valor efetivamente pago pelo cliente pelos serviços em questão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">9. Links para Sites de Terceiros</h2>
            <p className="text-gray-300">
              O site pode conter links para sites de terceiros. Não temos controle sobre esses sites e não somos responsáveis por seu conteúdo, políticas de privacidade ou práticas. A inclusão de links não implica endosso ou recomendação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">10. Privacidade</h2>
            <p className="text-gray-300">
              O uso do site está sujeito à nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>, que descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">11. Modificações dos Termos</h2>
            <p className="text-gray-300">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. O uso continuado do site após as modificações constitui aceitação dos novos termos. Recomendamos revisar periodicamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">12. Lei Aplicável e Jurisdição</h2>
            <p className="text-gray-300 mb-4">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
            </p>
            <p className="text-gray-300">
              <strong>Foro:</strong> Fica eleito o foro da Comarca de Manaus, Estado do Amazonas, para resolver quaisquer controvérsias ou disputas decorrentes destes termos, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">13. Rescisão</h2>
            <p className="text-gray-300">
              Podemos suspender ou encerrar seu acesso ao site imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação destes Termos de Uso. Todas as disposições que por sua natureza devam sobreviver à rescisão continuarão aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">14. Acordo Integral</h2>
            <p className="text-gray-300">
              Estes Termos de Uso, juntamente com a Política de Privacidade, constituem o acordo integral entre você e a RGOMES Engenharia quanto ao uso do site, substituindo quaisquer acordos anteriores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">15. Contato</h2>
            <p className="text-gray-300 mb-4">
              Se tiver dúvidas sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="text-gray-300 space-y-2">
              <p><strong>RGOMES Engenharia</strong></p>
              <p>E-mail: <a href="mailto:contato@rgomesengenharia.com" className="text-primary hover:underline">contato@rgomesengenharia.com</a></p>
              <p>E-mail alternativo: <a href="mailto:engenhariargomes@gmail.com" className="text-primary hover:underline">engenhariargomes@gmail.com</a></p>
              <p>Telefone: <a href="tel:+5592981242509" className="text-primary hover:underline">(92) 98124-2509</a></p>
              <p>Endereço: Manaus, Amazonas - Brasil</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
