import FaqAccordion from '@/components/sections/faq-accordion';
import type { Metadata } from 'next';
import PricingSection from '@/components/sections/pricing';

export const metadata: Metadata = {
  title: 'Planes de Créditos Claude API | Precios Mayoristas al Detal',
  description: 'Adquiere créditos de API de Claude Opus 5, Sonnet 4.6 y Haiku con hasta 90% de ahorro en Prompt Caching. Planes desde $10 USD con entrega automática 24/7.',
};

export default async function PricingPage() {
  return (
    <>
      <PricingSection />
      <FaqAccordion />
    </>
  );
}
