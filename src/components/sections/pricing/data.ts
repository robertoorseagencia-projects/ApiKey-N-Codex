export type TBILLING_PLAN = {
  name: string;
  badge?: string;
  tokens: string;
  officialPrice: string;
  discount: string;
  price: string;
  credits: string;
  multiplier: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export const CREDIT_PLANS: TBILLING_PLAN[] = [
  {
    name: 'Plano Starter',
    badge: 'Iniciação',
    tokens: '25 Milhões de Tokens',
    officialPrice: '~R$ 390',
    discount: '82% OFF',
    price: 'R$ 69,00',
    credits: 'USD 25,00 em Saldo de API',
    multiplier: 'Rendimento de até ~USD 110 com Prompt Caching',
    description:
      'Ideal para testes, scripts e sessões regulares no VS Code, Cursor e Claude Code CLI.',
    features: [
      'Chave de API + Base URL imediata',
      'Claude Opus 5, Sonnet 4.6 & Haiku 4.5',
      'Prompt Caching ativo (90% de economia)',
      'Até 120 requisições por minuto (120 RPM)',
      'Dashboard pessoal de consumo em tempo real',
      'Guia completo de conexão incluso',
    ],
    cta: 'Comprar via Pix • R$ 69,00',
    popular: false,
  },
  {
    name: 'Plano Pro Builder',
    badge: '⭐ Mais Popular',
    tokens: '50 Milhões de Tokens',
    officialPrice: '~R$ 780',
    discount: '83% OFF',
    price: 'R$ 129,00',
    credits: 'USD 50,00 em Saldo de API',
    multiplier: 'Rendimento de até ~USD 225 com Prompt Caching',
    description:
      'Perfeito para desenvolvedores e fluxos avançados com Lovable, Cursor, VS Code e Antigravity.',
    features: [
      'Tudo incluído no Plano Starter',
      'Desempenho fluido em sessões extensas de código',
      'Compatível com Lovable, Cursor, VS Code e OpenClaw',
      'Pool Enterprise AWS Vertex AI Max200',
      'Sem degradação nem cortes de modelos',
      'Garantia total de reposição de saldo',
    ],
    cta: 'Comprar via Pix • R$ 129,00',
    popular: true,
  },
  {
    name: 'Plano Power Dev',
    badge: '⚡ Melhor Custo-Benefício',
    tokens: '100 Milhões de Tokens',
    officialPrice: '~R$ 1.560',
    discount: '84% OFF',
    price: 'R$ 249,00',
    credits: 'USD 100,00 em Saldo de API',
    multiplier: 'Rendimento de até ~USD 450 com Prompt Caching',
    description:
      'Máxima capacidade e produtividade para desenvolvedores full-time, pequenas equipes e automações contínuas.',
    features: [
      'Tudo incluído no Plano Pro Builder',
      'Máxima economia e produtividade intensiva',
      'Arquivo de configuração OpenClaw e Roo Code pronto',
      'Histórico de consumo e custos transparente',
      'Prioridade técnica no suporte 24/7',
      'Garantia total de acesso e disponibilidade',
    ],
    cta: 'Comprar via Pix • R$ 249,00',
    popular: false,
  },
];
