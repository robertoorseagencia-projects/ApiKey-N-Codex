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

        {/* 3 Plans Grid */}
        <div className="z-30 relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {CREDIT_PLANS.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
            />
          ))}
        </div>

        {/* Anthropic Direct vs APIKEY-N-CODEX Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
              Economia Comprovada
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Anthropic API Oficial vs. APIKEY-N-CODEX
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Veja por que nossos créditos em pool corporativo são até 84% mais baratos:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Recurso / Pacote</th>
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Anthropic Oficial (Dólar)</th>
                  <th className="py-3 px-4 font-bold text-primary-500 bg-primary-500/5 rounded-t-xl">APIKEY-N-CODEX (Pix)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">Forma de Pagamento</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400">Cartão Internacional + 6.38% IOF</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400 bg-primary-500/5">Pix Imediato sem IOF</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">25M Tokens (Starter)</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400 line-through">~R$ 390,00</td>
                  <td className="py-3.5 px-4 font-extrabold text-gray-900 dark:text-white bg-primary-500/5">R$ 69,00 <span className="text-emerald-500 text-xs font-bold ml-1">(82% OFF)</span></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">50M Tokens (Pro Builder)</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400 line-through">~R$ 780,00</td>
                  <td className="py-3.5 px-4 font-extrabold text-gray-900 dark:text-white bg-primary-500/5">R$ 129,00 <span className="text-emerald-500 text-xs font-bold ml-1">(83% OFF)</span></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">100M Tokens (Power Dev)</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400 line-through">~R$ 1.560,00</td>
                  <td className="py-3.5 px-4 font-extrabold text-gray-900 dark:text-white bg-primary-500/5">R$ 249,00 <span className="text-emerald-500 text-xs font-bold ml-1">(84% OFF)</span></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">Prompt Caching</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400">Padrão</td>
                  <td className="py-3.5 px-4 font-bold text-primary-500 bg-primary-500/5">Até 90% Desconto Ativo</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">Velocidade e Entrega</td>
                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400">Manual / Limites baixos</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400 bg-primary-500/5">Automática 24/7 (120 RPM)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Explicación Detallada y Enlace Oficial */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between">
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 flex items-center gap-1.5">
                  <span>📊</span> Preço Oficial da Anthropic
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Na tabela oficial em{' '}
                  <a
                    href="https://claude.com/pricing#api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 font-bold underline hover:text-primary-600 inline-flex items-center gap-0.5"
                  >
                    claude.com/pricing#api ↗
                  </a>
                  , 1 MTok (1 milhão de tokens) custa de <strong>$2 a $10 dólares</strong> ($10 a $55 reais por cada milhão + IOF no cartão).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col justify-between">
              <div>
                <p className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1.5 flex items-center gap-1.5">
                  <span>💰</span> A Matemática do Ahorro
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Para usar <strong>25 Milhões de tokens</strong> direto na Anthropic, você gastaria mais de <strong>R$ 390 a R$ 480 reais</strong>. Conosco, você paga apenas <strong>R$ 69,00</strong> (menos de R$ 2,76 por milhão via Pix).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary-500/5 border border-primary-500/20 flex flex-col justify-between">
              <div>
                <p className="font-bold text-primary-600 dark:text-primary-400 text-sm mb-1.5 flex items-center gap-1.5">
                  <span>⚡</span> Como Conseguimos Esse Preço?
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Compramos computação em grande escala atacadista (pools AWS Vertex AI Max200) e repassamos o desconto de volume diretamente a desenvolvedores brasileiros sem intermediários.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance Banner under plans */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
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
