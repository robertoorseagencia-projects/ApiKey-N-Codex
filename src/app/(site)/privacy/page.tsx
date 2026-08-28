import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | APIKEY-N-CODEX',
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="max-w-[800px] mx-auto">
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">
            Atualizado em
            <span className="text-gray-800 ml-1 inline-block dark:text-white/90">
              2026
            </span>
          </p>
          <h2 className="mb-12 text-4xl font-semibold text-gray-800 dark:text-white/90">
            Política de Privacidade & Termos
          </h2>
          <div className="mb-6">
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-6">
              Todas as informações dos nossos usuários (Nome, E-mail e dados de transação) são mantidas em total segurança. Temos o compromisso rigoroso de proteger a privacidade dos nossos clientes e garantimos que nenhuma informação pessoal é compartilhada ou vendida a terceiros.
            </p>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              Não armazenamos dados de cartão de crédito em nossos servidores. Todos os pagamentos são processados com criptografia SSL de ponta a ponta e entrega automatizada de credenciais.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 text-2xl dark:text-white/90 font-semibold text-gray-800">
              Garantia e Reposição de Saldo
            </h2>
            <p className="text-gray-500 font-normal dark:text-gray-400 leading-6 mb-4">
              Garantimos a ativação imediata 24/7 e a disponibilidade contínua dos nossos pools corporativos AWS Vertex AI.
            </p>
            <p className="text-gray-500 font-normal dark:text-gray-400 leading-6">
              Caso ocorra qualquer inconsistência técnica atribuível à nossa infraestrutura que não possa ser resolvida, fornecemos uma nova chave de API de reposição de imediato, preservando 100% do saldo restante.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold dark:text-white/90 text-gray-800">
              Suporte Técnico 24/7
            </h2>
            <div className="space-y-4">
              <p className="text-gray-500 font-normal dark:text-gray-400 leading-6">
                Nosso suporte atende 24 horas por dia para ajudar na configuração de chaves de API, variáveis de ambiente no Claude Code CLI, Cursor, VS Code, N8N e SDKs.
              </p>
              <p className="text-gray-500 font-normal dark:text-gray-400 leading-6">
                Ainda tem dúvidas? Veja nossas{' '}
                <Link href="/#faq" className="text-primary-500 font-semibold">
                  Perguntas Frequentes
                </Link>{' '}
                ou entre em contato com nosso time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
