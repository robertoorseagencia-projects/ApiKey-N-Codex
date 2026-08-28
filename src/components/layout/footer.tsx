'use client';

import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white border-t border-gray-800">
      <span className="absolute top-0 -translate-x-1/2 left-1/2 pointer-events-none opacity-40">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_footer_glow)">
            <circle cx="630" cy="-173.299" r="230" fill="#D97757" />
          </g>
          <defs>
            <filter
              id="filter0_f_footer_glow"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
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
                stdDeviation="200"
                result="effect1_foregroundBlur_footer_glow"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <div className="relative z-10 py-16 xl:py-20">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-10 gap-x-8 lg:grid-cols-12">
            {/* Brand column */}
            <div className="lg:col-span-4 xl:col-span-5">
              <div>
                <Link href="/" className="inline-block mb-4 group">
                  <Image
                    src="/images/logo-claude-api.png"
                    alt="APIKEY-N-CODEX"
                    width={200}
                    height={48}
                    className="h-10 w-auto object-contain brightness-110 group-hover:opacity-90 transition"
                  />
                </Link>
                <p className="block text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
                  Democratizamos o acesso às IAs mais potentes do planeta: compramos no atacado e compartilhamos no varejo. Especialistas em créditos de alta velocidade para <strong>Claude Desktop e Claude Code CLI</strong>, VS Code, Cursor, Antigravity e Lovable.
                </p>
                <div className="p-3.5 bg-gray-900 border border-gray-800 rounded-xl text-xs text-gray-400 leading-relaxed max-w-md">
                  <span className="font-semibold text-primary-400">⚡ Aviso de Produto Técnico:</span> Fornecemos chave de API e Base URL para terminais e IDEs. Não é assinatura web no claude.ai.
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="block mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
                    Plataforma & Planos
                  </span>
                  <nav className="flex flex-col space-y-2.5">
                    <Link
                      href="#pricing"
                      className="text-sm text-gray-400 transition hover:text-primary-400"
                    >
                      Planos a partir de R$ 29
                    </Link>
                    <Link
                      href="#features"
                      className="text-sm text-gray-400 transition hover:text-primary-400"
                    >
                      Guia Claude Code CLI
                    </Link>
                    <Link
                      href="#faq"
                      className="text-sm text-gray-400 transition hover:text-primary-400"
                    >
                      Perguntas Frequentes
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
                    Compatibilidade
                  </span>
                  <nav className="flex flex-col space-y-2.5 text-sm text-gray-400">
                    <span className="hover:text-gray-200 transition">Claude Opus 5 & Sonnet 4.6</span>
                    <span className="hover:text-gray-200 transition">Cursor & VS Code</span>
                    <span className="hover:text-gray-200 transition">Claude Desktop & CLI</span>
                    <span className="hover:text-gray-200 transition">N8N & OpenClaw</span>
                    <span className="hover:text-gray-200 transition">Python & TS SDK</span>
                  </nav>
                </div>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3">
              <div>
                <span className="block mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
                  Novidades de Modelos
                </span>
                <p className="block mb-4 text-sm text-gray-400">
                  Receba avisos sobre novos modelos, descontos por volume e otimizações de cache.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2.5 w-full">
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full h-11 px-4 text-sm text-white bg-gray-900 border border-gray-800 rounded-xl placeholder:text-gray-500 focus:border-primary-500 focus:outline-none transition"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-5 py-2.5 text-sm font-semibold text-white transition rounded-xl cursor-pointer bg-primary-600 hover:bg-primary-500 shadow-md shadow-primary-600/20"
                    >
                      Inscrever-se
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-900 bg-black/40">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {getCurrentYear()} APIKEY-N-CODEX. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#pricing" className="hover:text-gray-400 transition">Termos de Serviço</Link>
              <Link href="#faq" className="hover:text-gray-400 transition">Política de Garantia</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
