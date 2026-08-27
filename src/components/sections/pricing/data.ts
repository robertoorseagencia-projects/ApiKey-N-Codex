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
    name: 'Plan Starter',
    badge: 'Iniciación',
    credits: 'USD 12,50 Créditos',
    price: '$12.50',
    amount: 12.5,
    multiplier: 'Hasta ~$65-75 de valor con Cache',
    description:
      'Ideal para pruebas rápidas, scripts y primeros proyectos con Claude Code.',
    features: [
      'API Key + Base URL inmediata',
      'Claude Opus 5, Sonnet 4.6 & Haiku 4.5',
      'Prompt Caching activo (90% ahorro)',
      'Hasta 120 peticiones por minuto',
      'Dashboard personal de consumo en vivo',
      'Guía completa de conexión incluida',
    ],
    cta: 'Comprar R$ 29,00',
    popular: false,
  },
  {
    name: 'Plan Developer',
    badge: 'Desarrollador',
    credits: 'USD 25,00 Créditos',
    price: '$25.00',
    amount: 25,
    multiplier: 'Hasta ~$125-150 de valor con Cache',
    description:
      'Perfecto para programadores con sesiones regulares de código en VS Code y Cursor.',
    features: [
      'API Key + Base URL inmediata',
      'Claude Opus 5, Sonnet 4.6 Thinking y Haiku 4.5',
      'Ahorro del 90% en tokens cacheados',
      'Compatible con Claude Code CLI y Cursor',
      'Dashboard con desglose de tokens',
      'Soporte 24/7 y garantía de disponibilidad',
    ],
    cta: 'Comprar R$ 49,00',
    popular: false,
  },
  {
    name: 'Plan Builder Pro',
    badge: 'Builder',
    credits: 'USD 50,00 Créditos',
    price: '$50.00',
    amount: 50,
    multiplier: 'Hasta ~$250-300 de valor con Cache',
    description:
      'Para constructores de software y flujos combinados con Lovable y Capcut.',
    features: [
      'Todo lo incluido en el Plan Developer',
      'Rendimiento fluido en sesiones extensas',
      'Compatible con Lovable, Capcut y OpenClaw',
      'Pool Enterprise AWS Vertex AI Max200',
      'Sin degradación ni corte de modelos',
      'Garantía de reposición de saldo',
    ],
    cta: 'Comprar R$ 69,00',
    popular: false,
  },
  {
    name: 'Plan Power Developer',
    badge: '⭐ Más Popular',
    credits: 'USD 125,00 Créditos',
    price: '$125.00',
    amount: 125,
    multiplier: 'Hasta ~$625-750 de valor con Cache',
    description:
      'El paquete preferido por la comunidad. Máximo rendimiento y productividad 5–6x más uso.',
    features: [
      'Todo lo incluido en el Plan Builder',
      'Máximo ahorro: 5 a 6 veces más uso total',
      'Archivo de configuración OpenClaw listo',
      'Historial de consumo y costo transparente',
      'Prioridad técnica en soporte 24/7',
      'Garantía total de acceso y disponibilidad',
    ],
    cta: 'Comprar R$ 290,00',
    popular: true,
  },
  {
    name: 'Plan Scale & Team',
    badge: 'Equipos',
    credits: 'USD 250,00 Créditos',
    price: '$250.00',
    amount: 250,
    multiplier: 'Hasta ~$1,250-1,500 de valor con Cache',
    description:
      'Para desarrolladores intensivos, micro-agencias y agentes autónomos concurrentes.',
    features: [
      'Todo lo del Plan Power Developer',
      'Capacidad para múltiples proyectos e IDEs',
      'Pool de alta disponibilidad y baja latencia',
      'Soporte para pipelines N8N y Python SDK',
      'Reemplazo inmediato garantizado',
      'Atención preferencial 24/7',
    ],
    cta: 'Comprar R$ 490,00',
    popular: false,
  },
  {
    name: 'Plan Enterprise Max',
    badge: 'Empresarial',
    credits: 'USD 500,00 Créditos',
    price: '$500.00',
    amount: 500,
    multiplier: 'Hasta ~$2,500-3,000 de valor con Cache',
    description:
      'Máxima capacidad para empresas y equipos que demandan alto volumen continuo al menor costo.',
    features: [
      'Todo lo incluido en planes anteriores',
      'Máxima concurrencia sin interrupciones',
      'Acceso completo a todos los modelos Thinking',
      'Guía técnica para integración en servidores',
      'Dashboard multi-sesión avanzado',
      'SLA y soporte preferencial prioritario',
    ],
    cta: 'Comprar R$ 690,00',
    popular: false,
  },
];
