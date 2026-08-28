export type TBILLING_PLAN = {
  name: string;
  badge?: string;
  description: string;
  credits: string;
  price: string;
  amount: number;
  multiplier: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export const CREDIT_PLANS: TBILLING_PLAN[] = [
  {
    name: 'Plano Starter',
    badge: 'Iniciação',
    credits: 'USD 12,50 em Créditos',
    price: '$12.50',
    amount: 12.5,
    multiplier: 'Rendimento real de ~$40–$50 USD com Cache',
    description:
      'Ideal para testes rápidos, scripts e primeiros projetos com Claude Code.',
    features: [
      'Chave de API + Base URL imediata',
      'Claude Opus 5, Sonnet 4.6 & Haiku 4.5',
      'Prompt Caching ativo (90% de economia)',
      'Até 120 requisições por minuto',
      'Dashboard pessoal de consumo em tempo real',
      'Guia completo de conexão incluso',
    ],
    cta: 'Comprar R$ 29,00',
    popular: false,
  },
  {
    name: 'Plano Developer',
    badge: 'Desenvolvedor',
    credits: 'USD 25,00 em Créditos',
    price: '$25.00',
    amount: 25,
    multiplier: 'Rendimento real de ~$85–$110 USD com Cache',
    description:
      'Perfeito para programadores com sessões regulares de código no VS Code e Cursor.',
    features: [
      'Chave de API + Base URL imediata',
      'Claude Opus 5, Sonnet 4.6 Thinking e Haiku 4.5',
      'Economia de 90% em tokens em cache',
      'Compatível com Claude Code CLI e Cursor',
      'Dashboard com detalhamento de tokens',
      'Suporte 24/7 e garantia de disponibilidade',
    ],
    cta: 'Comprar R$ 49,00',
    popular: false,
  },
  {
    name: 'Plano Builder Pro',
    badge: 'Builder',
    credits: 'USD 50,00 em Créditos',
    price: '$50.00',
    amount: 50,
    multiplier: 'Rendimento real de ~$175–$225 USD com Cache',
    description:
      'Para desenvolvedores e fluxos avançados com Lovable, Cursor e Antigravity.',
    features: [
      'Tudo incluído no Plano Developer',
      'Desempenho fluido em sessões extensas',
      'Compatível com Lovable, Antigravity e OpenClaw',
      'Pool Enterprise AWS Vertex AI Max200',
      'Sem degradação nem cortes de modelos',
      'Garantia de reposição de saldo',
    ],
    cta: 'Comprar R$ 69,00',
    popular: false,
  },
  {
    name: 'Plano Power Developer',
    badge: '⭐ Mais Popular',
    credits: 'USD 125,00 em Créditos',
    price: '$125.00',
    amount: 125,
    multiplier: 'Rendimento real de ~$450–$600 USD com Cache',
    description:
      'O pacote preferido pela comunidade. Máximo rendimento e produtividade 3.5x a 5x mais uso.',
    features: [
      'Tudo incluído no Plano Builder',
      'Máxima economia: 3.5 a 5 vezes mais uso efetivo',
      'Arquivo de configuração OpenClaw pronto',
      'Histórico de consumo e custos transparente',
      'Prioridade técnica no suporte 24/7',
      'Garantia total de acesso e disponibilidade',
    ],
    cta: 'Comprar R$ 290,00',
    popular: true,
  },
  {
    name: 'Plano Scale & Team',
    badge: 'Equipes',
    credits: 'USD 250,00 em Créditos',
    price: '$250.00',
    amount: 250,
    multiplier: 'Rendimento real de ~$900–$1.200 USD com Cache',
    description:
      'Para desenvolvedores intensivos, micro-agências e agentes autônomos simultâneos.',
    features: [
      'Tudo do Plano Power Developer',
      'Capacidade para múltiplos projetos e IDEs',
      'Pool de alta disponibilidade e baixa latência',
      'Suporte para pipelines N8N e Python SDK',
      'Reposição imediata garantida',
      'Atendimento preferencial 24/7',
    ],
    cta: 'Comprar R$ 490,00',
    popular: false,
  },
  {
    name: 'Plano Enterprise Max',
    badge: 'Empresarial',
    credits: 'USD 500,00 em Créditos',
    price: '$500.00',
    amount: 500,
    multiplier: 'Rendimento real de ~$1.800–$2.400 USD com Cache',
    description:
      'Capacidade máxima para empresas e equipes que demandam alto volume contínuo ao menor custo.',
    features: [
      'Tudo incluído nos planos anteriores',
      'Máxima concorrência sem interrupções',
      'Acesso completo a todos os modelos Thinking',
      'Guia técnico para integração em servidores',
      'Dashboard multi-sessão avançado',
      'SLA e suporte preferencial prioritário',
    ],
    cta: 'Comprar R$ 690,00',
    popular: false,
  },
];
