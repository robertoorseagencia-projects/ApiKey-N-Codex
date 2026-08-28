import Image from 'next/image';
import Link from 'next/link';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden dark:bg-[#171F2E]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-16">
              <Subheading text="Claude Code agora mais acessível para todos" />

              <h1 className="text-gray-900 mx-auto font-extrabold mb-5 text-4xl sm:text-5xl lg:text-[54px] dark:text-white sm:leading-[1.18] max-w-[840px] tracking-tight">
                Créditos para <span className="text-primary-500 underline decoration-primary-300/40 decoration-wavy">Claude Code</span> e as Melhores IAs pelo Menor Preço
              </h1>
              
              <p className="max-w-[720px] text-center mx-auto dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Compartilhamos capacidade de computação adquirida em pools de alto volume para oferecer acesso flexível ao <strong>Claude Code</strong> e outros ambientes compatíveis. Sem barreiras de entrada: pague apenas pelo que consumir, otimize custos com <strong>Prompt Caching</strong> e receba acesso imediato 24 horas por dia.
              </p>

              {/* Social Proof Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2 mb-8 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-1.5 bg-primary-50 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-primary-200/60 dark:border-white/10">
                  <span className="text-primary-500 font-bold">568</span> Vendidos
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                  <span className="font-bold">2</span> Reembolsos
                </span>
                <span className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 px-3.5 py-1.5 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                  ⭐ <span className="font-bold">86</span> Avaliações (4.9/5)
                </span>
                <span className="flex items-center gap-1.5 bg-primary-50 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-primary-200/60 dark:border-white/10">
                  ⚡ Entrega Automática 24/7
                </span>
              </div>

              <div className="mt-2 flex gap-3.5 relative z-30 items-center justify-center">
                <Link
                  href="#pricing"
                  className="gradient-btn h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold shadow-lg shadow-primary-500/25 hover:scale-[1.03] transition transform"
                >
                  Ver Planos de Créditos
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[1050px] mx-auto relative">
            <div className="p-2.5 sm:p-4 relative z-30 rounded-[28px] sm:rounded-[36px] border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-2xl shadow-primary-500/10">
              <Image
                src="/images/hero/hero-dashboard-real.png"
                alt="Claude-n-Codex Dashboard Oficial - API Key, Base URL & Balance"
                className="w-full rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl object-cover"
                width={1200}
                height={680}
                priority
              />
            </div>
            <div className="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
              <svg
                width="1300"
                height="1001"
                viewBox="0 0 1300 1001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_9279_7148)">
                  <circle cx="800" cy="500.03" r="300" fill="#1E3A8A" />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                  <circle cx="500" cy="500.03" r="300" fill="#2563EB" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9279_7148"
                    x="300"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                  <filter
                    id="filter1_f_9279_7148"
                    x="0"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-[1100px]:hidden pointer-events-none select-none">
          <div className="absolute top-14 left-12 xl:left-16 floating-1">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-tight bg-white/90 dark:bg-white/5 border border-primary-500/25 dark:border-white/10 text-gray-800 dark:text-gray-100 shadow-md shadow-primary-500/5 backdrop-blur-md">
              Claude Code Desktop/CLI
            </span>
          </div>

          <div className="absolute left-[110px] top-[295px] floating-2 max-[1240px]:left-[60px]">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-tight bg-white/90 dark:bg-white/5 border border-primary-500/25 dark:border-white/10 text-gray-800 dark:text-gray-100 shadow-md shadow-primary-500/5 backdrop-blur-md">
              90% Off Prompt Caching
            </span>
          </div>

          <div className="absolute right-12 xl:right-16 top-[108px] floating-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-tight bg-white/90 dark:bg-white/5 border border-primary-500/25 dark:border-white/10 text-gray-800 dark:text-gray-100 shadow-md shadow-primary-500/5 backdrop-blur-md">
              Claude Opus 5 &amp; Sonnet
            </span>
          </div>

          <div className="absolute top-[316px] right-[140px] floating-4 max-[1240px]:right-[60px] max-[1350px]:right-[110px] max-[1500px]:right-[140px]">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-tight bg-white/90 dark:bg-white/5 border border-primary-500/25 dark:border-white/10 text-gray-800 dark:text-gray-100 shadow-md shadow-primary-500/5 backdrop-blur-md">
              Open Claw, Hermes &amp; n8n
            </span>
          </div>
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0"></div>
      <HeroLogos />
    </section>
  );
}
