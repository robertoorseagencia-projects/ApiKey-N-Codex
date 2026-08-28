"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Existem limites de velocidade (RPM) nas requisições?",
      answer:
        "Cada chave de API suporta até 120 requisições por minuto (120 RPM). É uma velocidade de resposta ultra-rápida projetada para programação interativa intensa no Claude Code CLI, extensões do VS Code / Cursor e execuções paralelas em agentes autônomos.",
    },
    {
      id: 2,
      question: "Como o saldo é calculado e descontado?",
      answer:
        "O saldo é descontado pelo consumo exato de tokens de acordo com o modelo utilizado (Opus, Sonnet ou Haiku). Além disso, você tem acesso a um Painel de Controle pessoal em tempo real onde pode verificar cada requisição, o detalhamento dos tokens e seu saldo restante com total transparência.",
    },
    {
      id: 3,
      question: "O serviço suporta Prompt Caching e quanto eu economizo?",
      answer:
        "Sim, suporta Prompt Caching a 100%! Os tokens lidos em cache são faturados com 90% de desconto. Em ferramentas de desenvolvimento como Claude Code ou Cursor, que reenviam arquivos e contexto de código, seu pacote de créditos rende aproximadamente de 5 a 6 vezes mais do que em uma API padrão sem cache.",
    },
    {
      id: 4,
      question: "Qual é a política de garantia e reembolsos?",
      answer:
        "Garantizamos a ativação imediata 24/7 e a disponibilidade contínua do seu endpoint. Devido à natureza técnica de consumo de saldo digital, reembolsos financeiros não estão disponíveis após o consumo de mais de 5% do crédito original.",
    },
    {
      id: 5,
      question: "O que acontece se houver um problema técnico? Tenho reposição garantida?",
      answer:
        "Com certeza. Se ocorrer qualquer problema técnico atribuível à nossa infraestrutura que não possa ser resolvido, entregamos uma nova API Key de reposição imediatamente, transferindo e preservando 100% do seu saldo restante.",
    },
    {
      id: 6,
      question: "Qual é a velocidade de resposta do suporte?",
      answer:
        "Oferecemos suporte técnico contínuo 24/7. Nossa equipe responde habitualmente em menos de 15 minutos para ajudar você com a configuração de variáveis de ambiente, SDKs ou ferramentas de automação.",
    },
    {
      id: 7,
      question: "É uma assinatura web do Claude Pro ou um produto técnico de API?",
      answer:
        "É um produto técnico: você recebe uma ANTHROPIC_API_KEY, uma ANTHROPIC_BASE_URL e o link para o seu Painel de Controle pessoal. Não é uma conta com login e senha para o claude.ai, mas sim o acesso via API para usar no seu terminal com Claude Desktop, Claude Code CLI, Cursor, N8N, VS Code, Antigravity, Lovable, Roo Code e Python SDK.",
    },
    {
      id: 8,
      question: "Quais modelos estão incluídos e como a qualidade é garantida?",
      answer:
        "Inclui acesso ao Claude Opus 5 Thinking, Opus 4.8 Thinking, Opus 4.6 Thinking, Sonnet 4.6 Thinking e Haiku 4.5. Operamos sobre pools corporativos AWS Vertex AI Max200. Garantimos que nunca degradamos nem substituímos os modelos por versões inferiores.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-16 md:py-28 bg-gray-50 dark:bg-[#121926]">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 rounded-full border border-primary-200 dark:border-primary-500/20">
            Perguntas Frequentes
          </span>
          <h2 className="mb-4 font-extrabold text-center text-gray-900 text-3xl dark:text-white md:text-title-lg tracking-tight">
            Tudo o que você precisa saber antes de comprar
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Respostas diretas sobre limites de velocidade, cálculo de saldo, suporte a cache e políticas de garantia.
          </p>
        </div>
        <div className="max-w-[760px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 rounded-2xl shadow-sm transition">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left font-bold"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-base sm:text-lg text-gray-900 dark:text-white/95 leading-snug">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-4 p-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/60">
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
