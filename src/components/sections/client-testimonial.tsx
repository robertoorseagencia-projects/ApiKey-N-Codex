"use client";

import Image from 'next/image';
import { useState } from 'react';

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      company: 'Tech Lead @ DevLatam',
      image: '/images/users/user-1.jpg',
      testimonial:
        'Conectar esta API Key ao Claude Code CLI foi imediato. O Prompt Caching funciona a 100%, as leituras de cache são 90% mais baratas e o saldo rendeu muito além do esperado.',
    },
    {
      id: 2,
      name: 'Sofía Valenzuela',
      company: 'Fullstack Engineer & Freelancer',
      image: '/images/users/user-2.jpg',
      testimonial:
        'Antes eu pagava assinaturas mensais fixas que não aproveitava. Agora compro créditos quando preciso e só gasto quando desenvolvo no Cursor e VS Code. Entrega automática em segundos.',
    },
    {
      id: 3,
      name: 'Alejandro Morales',
      company: 'AI Automation Specialist',
      image: '/images/users/user-3.jpg',
      testimonial:
        'Uso a Base URL nos meus pipelines do N8N e agentes OpenClaw. A latência é mínima graças ao pool AWS Vertex AI e não tive nenhuma queda em meses de uso contínuo.',
    },
    {
      id: 4,
      name: 'Mariana Reyes',
      company: 'Product Designer @ Studio 84',
      image: '/images/users/user-4.jpg',
      testimonial:
        'Integrei os créditos para fluxos de prototipagem rápida no Lovable e Claude Desktop. O dashboard de monitoramento em tempo real é super transparente para ver quanto consome cada geração.',
    },
    {
      id: 5,
      name: 'David Gutiérrez',
      company: 'Senior Backend Developer',
      image: '/images/users/user-5.jpg',
      testimonial:
        'Claude Opus 5 Thinking e Sonnet 4.6 funcionam com toda a sua capacidade de raciocínio. Não há degradação de modelos nem truques, é acesso enterprise direto pelo menor preço.',
    },
    {
      id: 6,
      name: 'Elena Ramos',
      company: 'Founder @ AutomateAI',
      image: '/images/users/user-6.jpg',
      testimonial:
        'O suporte 24/7 respondeu uma dúvida de configuração com o Roo Code em minutos. Democratizar esses créditos no atacado é a melhor coisa que aconteceu para a comunidade dev.',
    },
  ];

  export default function TestimonialsSection() {
    const [showAll, setShowAll] = useState(false);

    // Determine which testimonials to display
    const visibleTestimonials = showAll
      ? testimonials
      : testimonials.slice(0, 6);

    return (
      <section className="md:py-28 py-16 relative bg-white dark:bg-dark-secondary">
        <div className="wrapper">
          <div>
            <div className="max-w-3xl mx-auto mb-14 text-center">
              <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 rounded-full border border-primary-200 dark:border-primary-500/20">
                Depoimentos Reais
              </span>
              <h2 className="mb-4 font-extrabold text-center text-gray-900 text-3xl dark:text-white md:text-title-lg tracking-tight">
                O que dizem desenvolvedores e criadores
              </h2>
              <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Mais de 560 desenvolvedores já estão economizando milhares de reais em suas sessões de programação e automação com IA.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Show More Button */}
            <div className="mt-8 text-center relative z-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-700 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none transition"
              >
                <span>{showAll ? 'Mostrar menos' : 'Mostrar mais depoimentos'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gradient overlay when collapsed */}
        {!showAll && (
          <div className="white-gradient h-[264px]  w-full absolute bottom-0"></div>
        )}
      </section>
    );
  }

  // Testimonial Card Component
  function TestimonialCard({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[number];
  }) {
    return (
      <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
        <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
          <div>
            <Image
              src={testimonial.image || '/placeholder.svg'}
              alt={testimonial.name}
              width={52}
              height={52}
              className="size-13 object-cover ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-base dark:text-white/90">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
          <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    );
  }
