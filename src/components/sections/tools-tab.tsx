'use client';

import type React from 'react';
import { Fragment, useState } from 'react';

import {
  CodeGeneratorIcon,
  EmailGeneratorIcon,
  ImageGeneratorIcon,
  TextGeneratorIcon,
  VideoGeneratorIcon,
} from '@/icons/icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState('claude-code');

  // Tab data
  const tabs: Tab[] = [
    {
      id: 'claude-code',
      label: 'Claude Code CLI',
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-3.jpg',
      darkImage: '/images/tab-image/tab-image-3-dark.jpg',
      title: 'Programación Agéntica en Terminal con Claude Code',
      description:
        'Conecta tu ANTHROPIC_API_KEY y ANTHROPIC_BASE_URL a la CLI oficial de Claude Code. Trabaja en bases de código masivas con el 90% de ahorro en Prompt Caching.',
    },
    {
      id: 'ide-extensions',
      label: 'Cursor & VS Code',
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-1.jpg',
      darkImage: '/images/tab-image/tab-image-1-dark.jpg',
      title: 'Desarrollo en tus Editores e IDEs Preferidos',
      description:
        'Compatible con extensiones como Roo Code, Kilo Code, Antigravity y Cursor. Utiliza Claude Opus 5 y Sonnet 4.6 Thinking directamente en tu editor.',
    },
    {
      id: 'lovable-capcut',
      label: 'Lovable & Capcut',
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-2.jpg',
      darkImage: '/images/tab-image/tab-image-2-dark.jpg',
      title: 'Creación Visual y Multimedia con Lovable y Capcut',
      description:
        'Aprovecha tus créditos de IA para flujos de diseño web instantáneo en Lovable y generación automatizada de contenido multimedia en Capcut.',
    },
    {
      id: 'n8n-agents',
      label: 'N8N & Automatizaciones',
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-4.jpg',
      darkImage: '/images/tab-image/tab-image-4-dark.jpg',
      title: 'Pipelines Autónomos y Flujos en N8N',
      description:
        'Integra nodos de Anthropic con tu Base URL personalizada en N8N, Open Cowork y Pencil Dev para crear flujos automatizados de alta disponibilidad.',
    },
    {
      id: 'openclaw-sdk',
      label: 'OpenClaw & Python SDK',
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-5.jpg',
      darkImage: '/images/tab-image/tab-image-5-dark.jpg',
      title: 'Integración Directa en Backend y Python SDK',
      description:
        'Incluye archivo de configuración listo para OpenClaw y compatibilidad 100% con la librería oficial anthropic en Python, Node.js y REST APIs.',
    },
  ];

  // Find the active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-16 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 rounded-full border border-primary-200 dark:border-primary-500/20">
            Casos de Uso
          </span>
          <h2 className="mb-3 font-extrabold text-center text-gray-900 dark:text-white text-3xl md:text-title-lg tracking-tight">
            Todas tus herramientas de IA con una sola API Key
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Un saldo unificado para potenciar tu terminal, tus editores de código, tus flujos de diseño y tus automatizaciones empresariales.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1.5 border border-gray-200 dark:border-white/5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-11 gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white dark:text-white dark:bg-primary-500 text-gray-900 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-transparent'
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 tab-img-bg overflow-hidden rounded-4xl mt-8 shadow-xl">
              <div className="p-2 sm:p-3 tab-img-overlay">
                {tabs.map((tab) => (
                  <Fragment key={tab.id}>
                    <Image
                      src={tab.lightImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl block dark:hidden',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />

                    <Image
                      src={tab.darkImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl hidden dark:block',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {currentTab.title}
              </h3>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {currentTab.description}
              </p>
              <a
                href="#pricing"
                className="inline-flex px-7 py-3 text-sm font-semibold text-white transition-all rounded-full gradient-btn shadow-md hover:scale-[1.02]"
              >
                Comprar Créditos para {currentTab.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
