import Image from "next/image";
import { CORE_FEATURES } from "./data";

export function CoreFeatures() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50 dark:bg-white/2 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 rounded-full border border-primary-200 dark:border-primary-500/20">
            Ventajas Exclusivas
          </span>
          <h2 className="mb-4 font-extrabold text-gray-900 text-3xl dark:text-white md:text-title-lg max-w-2xl mx-auto tracking-tight">
            ¿Por qué utilizar nuestros créditos API de Claude?
          </h2>

          <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Combinamos volumen mayorista y tecnología de optimización de contexto para ofrecerte la experiencia más potente y económica en desarrollo con Inteligencia Artificial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-9 border border-gray-200 dark:bg-white/5 dark:border-white/3 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)]"
            >
              <div className="core-feature-icon mb-8">
                <Image
                  src={feature.iconUrl}
                  alt={feature.title}
                  role="presentation"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>

              <h3 className="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
