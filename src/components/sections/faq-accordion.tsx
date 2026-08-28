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
      question: "¿Hay límites de velocidad (RPM) en las llamadas?",
      answer:
        "Cada clave API admite hasta 120 peticiones por minuto (120 RPM). Es una velocidad de respuesta ultra-rápida pensada para soportar programación interactiva intensa en Claude Code CLI, extensiones de VS Code / Cursor y ejecuciones paralelas en agentes autónomos.",
    },
    {
      id: 2,
      question: "¿Cómo se calcula y descuenta el saldo?",
      answer:
        "El saldo se descuenta por consumo exacto de tokens según el modelo utilizado (Opus, Sonnet o Haiku). Además, tienes acceso a un Dashboard personal en vivo donde puedes verificar cada petición, el desglose de tokens y tu saldo remanente con total transparencia.",
    },
    {
      id: 3,
      question: "¿El servicio soporta Prompt Caching y cuánto ahorro?",
      answer:
        "¡Sí, soporta Prompt Caching al 100%! Los tokens leídos en caché se facturan con un 90% de descuento. En herramientas de desarrollo como Claude Code o Cursor que reenvían archivos y contexto, tu paquete de créditos rinde aproximadamente entre 5 y 6 veces más que una API estándar sin caché.",
    },
    {
      id: 4,
      question: "¿Cuál es la política de garantía y reembolsos?",
      answer:
        "Garantizamos la activación inmediata 24/7 y la disponibilidad continua de tu endpoint. Debido a la naturaleza técnica de consumo de saldo digital, los reembolsos monetarios no están disponibles una vez que se ha utilizado más del 5% del crédito original.",
    },
    {
      id: 5,
      question: "¿Qué ocurre si hay un problema técnico? ¿Tengo reemplazo garantizado?",
      answer:
        "Por supuesto. Si se presenta cualquier inconveniente técnico atribuible a nuestra infraestructura que no pueda resolverse, te entregamos una nueva API Key de reemplazo de inmediato, transfiriendo y preservando el 100% de tu saldo remanente.",
    },
    {
      id: 6,
      question: "¿Qué tan rápido responde el equipo de soporte?",
      answer:
        "Ofrecemos soporte técnico continuo 24/7. Nuestro equipo responde habitualmente en menos de 15 minutos para ayudarte con la configuración de variables de entorno, SDKs o herramientas de automatización.",
    },
    {
      id: 7,
      question: "¿Es una suscripción web a Claude Pro o un producto técnico de API?",
      answer:
        "Es un producto técnico: recibes una ANTHROPIC_API_KEY, una ANTHROPIC_BASE_URL y el enlace a tu Dashboard personal. No es una cuenta con usuario/contraseña para claude.ai, sino el acceso por API para usar en tu terminal con Claude Desktop, Claude Code CLI, Cursor, N8N, VS Code, Antigravity, Lovable, Roo Code y Python SDK.",
    },
    {
      id: 8,
      question: "¿Qué modelos están incluidos y cómo se garantiza la calidad?",
      answer:
        "Incluye acceso a Claude Opus 5 Thinking, Opus 4.8 Thinking, Opus 4.6 Thinking, Sonnet 4.6 Thinking y Haiku 4.5. Operamos sobre pools corporativos AWS Vertex AI Max200. Garantizamos que nunca degradamos ni sustituimos los modelos por versiones inferiores.",
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
            Preguntas Frecuentes
          </span>
          <h2 className="mb-4 font-extrabold text-center text-gray-900 text-3xl dark:text-white md:text-title-lg tracking-tight">
            Todo lo que necesitas saber antes de comprar
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Respuestas directas sobre límites de velocidad, cálculo de saldo, soporte de caché y políticas de garantía.
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
