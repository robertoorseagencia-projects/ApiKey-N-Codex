'use client';

import { CREDIT_PLANS } from '@/components/sections/pricing/data';
import { PricingCard } from '@/components/sections/pricing/card';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-28 bg-gray-50 dark:bg-[#171f2e] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-500/5 dark:bg-primary-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="wrapper">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 rounded-full border border-primary-200 dark:border-primary-500/20">
            Planos de Saldo Pré-pago
          </span>
          <h2 className="mb-4 font-extrabold text-center text-gray-900 text-3xl sm:text-4xl dark:text-white md:text-title-lg tracking-tight">
            Escolha seu Pacote de Créditos de IA
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Compre saldo para a API do <strong>Claude Code, Opus 5, Sonnet 4.6 e Haiku 4.5</strong>. Sem mensalidades nem cobranças surpresa: você recarrega quando precisa e aproveita até <strong>90% de desconto com Prompt Caching</strong>.
          </p>
        </div>

        {/* 6 Plans Grid: 2 rows of 3 items on large screens */}
        <div className="z-30 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {CREDIT_PLANS.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
            />
          ))}
        </div>

        {/* Reassurance Banner under plans */}
        <div className="mt-14 max-w-4xl mx-auto p-5 sm:p-6 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
              ✓
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-sm">
                Entrega Imediata e Transparência Total
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Você recebe sua <code className="text-primary-500 font-mono">ANTHROPIC_API_KEY</code>, <code className="text-primary-500 font-mono">ANTHROPIC_BASE_URL</code> e o link para seu Painel de Controle de consumo em segundos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
