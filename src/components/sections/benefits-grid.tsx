import Link from "next/link";
import React from "react";

export default function BenefitsGrid() {
  return (
    <section className="bg-gray-900 py-16 md:py-28 text-white relative overflow-hidden">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
            La Ventaja Competitiva
          </span>
          <h2 className="max-w-xl mx-auto mb-4 font-extrabold text-center text-white text-3xl md:text-title-lg tracking-tight">
            ¿Por qué comprar créditos al mayor con nosotros?
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed text-gray-400">
            Acceso democratizado a la inteligencia artificial más avanzada del planeta sin suscripciones mensuales fijas de 20-200 USD.
          </p>
        </div>
        <div className="max-w-[1080px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="lg:col-span-6">
              <div className="relative flex flex-col justify-between bg-primary-600 rounded-[24px] p-8 md:p-12 h-full shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-6">
                    ⚡ Alta Eficiencia
                  </div>
                  <h3 className="font-extrabold text-white text-2xl md:text-3xl mb-4 tracking-tight">
                    Prompt-Cache: 90% Menos en Costos
                  </h3>
                  <p className="text-base text-white/90 leading-relaxed">
                    A diferencia de otras plataformas que cobran la tarifa completa por cada llamada, nuestro sistema soporta y honra los aciertos de caché. Tu paquete rinde entre <strong>5 a 6 veces más</strong> en bases de código grandes.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/80">
                  <span>✓ 120 Requests por Minuto</span>
                  <span>✓ Cache Creation & Reads</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:col-span-6">
              <div className="relative flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-[24px] p-8 md:p-12 h-full shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold mb-6">
                    🏢 Infraestructura Enterprise
                  </div>
                  <h3 className="font-extrabold text-white text-2xl md:text-3xl mb-4 tracking-tight">
                    Pool AWS Vertex AI Max200
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Conexión directa a clústeres corporativos de máxima disponibilidad. <strong>Garantizamos que nunca sustituimos ni degradamos</strong> los modelos que compras: Opus 5 Thinking, Sonnet 4.6 y Haiku 4.5 100% auténticos.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700 flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>✓ Sin caídas por demanda</span>
                  <span>✓ Sin necesidad de VPN</span>
                </div>
              </div>
            </div>

            {/* Card 3 (Full width) */}
            <div className="lg:col-span-12">
              <div className="p-8 sm:p-12 bg-gradient-to-r from-gray-800 via-gray-800 to-[#451e12] border border-gray-700 relative rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                <div className="max-w-2xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold mb-4">
                    🛡️ Garantía & Seguridad Total
                  </div>
                  <h3 className="font-extrabold text-white text-2xl md:text-3xl mb-4 tracking-tight">
                    Garantía de Disponibilidad y Reemplazo
                  </h3>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Si se produce cualquier inconveniente técnico atribuible a nuestro servicio y no puede resolverse, te proporcionamos un reemplazo inmediato preservando íntegramente tu saldo restante.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="#pricing"
                      className="font-semibold text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-7 shadow-lg shadow-primary-500/20"
                    >
                      Comprar Créditos de IA
                    </Link>
                    <a
                      href="https://claude-n-codex.com/dashboard/sk-myapi_DNjeNSKs1-_WHqEDOF7q8gZ-yiiNWy56NWB9S_rQf0fauPC11fKmQE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-full py-3 px-6 transition"
                    >
                      Explorar Dashboard Demo
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-3 shrink-0 p-6 bg-gray-900/80 border border-gray-700/80 rounded-2xl text-xs font-mono text-gray-300 max-w-sm w-full">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Endpoint</span>
                    <span className="text-emerald-400 font-semibold">Online 24/7</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Cache Saving</span>
                    <span className="text-primary-400 font-bold">90% Discount</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Max Speed</span>
                    <span className="text-white">120 RPM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Refund Rate</span>
                    <span className="text-emerald-400">&lt; 0.35% (Solo 2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
