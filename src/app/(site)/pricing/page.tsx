import FaqAccordion from '@/components/sections/faq-accordion';
import type { Metadata } from 'next';
import PricingSection from '@/components/sections/pricing';

export const metadata: Metadata = {
  title: 'Planos de Créditos Claude API | Preços no Atacado para Todos',
  description: 'Adquira créditos de API do Claude Opus 5, Sonnet 4.6 e Haiku com até 90% de economia em Prompt Caching. Planos a partir de R$ 29 com entrega automática 24/7.',
};

export default async function PricingPage() {
  return (
    <>
      <PricingSection />
      <FaqAccordion />
    </>
  );
}
