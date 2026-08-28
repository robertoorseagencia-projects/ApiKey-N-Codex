import { CheckIcon } from '@/icons/icons';
import GlowGradient from '@/assets/pricing/glow';
import type { TBILLING_PLAN } from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';

type Props = {
  plan: TBILLING_PLAN;
};

export function PricingCard({ plan }: Props) {
  return (
    <div className="relative h-full flex flex-col">
      <div
        className={cn(
          'bg-white dark:bg-dark-primary rounded-[24px] shadow-one relative z-10 h-full flex flex-col justify-between border transition-all duration-300 hover:shadow-lg',
          plan.popular
            ? 'border-2 border-primary-500 shadow-xl shadow-primary-500/10 ring-4 ring-primary-500/10 dark:ring-primary-500/20'
            : 'border-gray-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/40'
        )}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            {plan.badge && (
              <span
                className={cn(
                  'px-2.5 py-0.5 text-xs font-semibold rounded-full',
                  plan.popular
                    ? 'bg-primary-500 text-white shadow-xs'
                    : 'bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400'
                )}
              >
                {plan.badge}
              </span>
            )}
          </div>

          <div className="mt-4 pb-4 border-b border-gray-100 dark:border-white/5">
            {/* Comparativa con Anthropic Oficial */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 line-through">
                Anthropic Oficial: {plan.officialPrice}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                {plan.discount}
              </span>
            </div>

            {/* Cantidad de Tokens como Destacado Principal */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl sm:text-[44px] font-extrabold text-gray-900 dark:text-white tracking-tight">
                {plan.tokenAmount}
              </span>
              <span className="text-xl font-bold text-primary-500">
                Tokens
              </span>
            </div>

            {/* Precio en Reales */}
            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 font-medium mt-1">
              <span>Por apenas</span>
              <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                {plan.price}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                via Pix
              </span>
            </div>
            
            {/* Saldo y Multiplier */}
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2.5 flex items-center gap-1">
              <span>⚡ {plan.credits}</span>
            </p>
            <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400 mt-0.5">
              {plan.multiplier}
            </p>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">
            {plan.description}
          </p>

          <button
            onClick={() => {
              alert(`Você selecionou o ${plan.name} (${plan.tokens}). Redirecionando para o checkout via Pix com entrega automática 24/7.`);
            }}
            className={cn(
              'block w-full px-6 py-3.5 mt-6 text-sm font-semibold text-center rounded-full transition shadow-xs cursor-pointer',
              plan.popular
                ? 'gradient-btn text-white hover:scale-[1.02]'
                : 'bg-gray-900 text-white hover:bg-primary-500 dark:bg-white/10 dark:text-white dark:hover:bg-primary-500'
            )}
          >
            {plan.cta}
          </button>
        </div>

        <div className="px-6 sm:px-8 pb-7 pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-3">
            O que está incluso:
          </p>
          <ul className="space-y-2.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start text-xs sm:text-sm">
                <div className="flex-shrink-0 text-primary-500 mt-0.5">
                  <CheckIcon />
                </div>
                <span className="ml-2.5 text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {plan.popular && (
        <GlowGradient className="absolute -left-full -translate-x-20 top-0 max-lg:hidden pointer-events-none" />
      )}
    </div>
  );
}
