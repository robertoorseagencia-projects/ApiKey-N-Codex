import React from "react";

// Brand Logo SVGs (Clean, high-fidelity light logos)
const ClaudeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M13.5 3L11 8.5L5.5 11L11 13.5L13.5 19L16 13.5L21.5 11L16 8.5L13.5 3Z"
      fill="#D97757"
    />
    <path
      d="M6 3L4.8 5.7L2 7L4.8 8.3L6 11L7.2 8.3L10 7L7.2 5.7L6 3Z"
      fill="#F59E0B"
      opacity="0.8"
    />
  </svg>
);

const CursorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect width="24" height="24" rx="5" fill="#18181B" />
    <path d="M7 6L17 12L12 13L10 18L7 6Z" fill="#06B6D4" />
  </svg>
);

const VSCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M17.6 2.1L12.5 6.9L7.4 3L4.1 4.7L9.5 9.8L4.1 14.9L7.4 16.6L12.5 12.7L17.6 17.5L21 15.8V3.8L17.6 2.1Z"
      fill="#007ACC"
    />
    <path
      d="M17.6 2.1L9.5 9.8L17.6 17.5V2.1Z"
      fill="#1F9CF0"
      opacity="0.9"
    />
    <path
      d="M17.6 17.5L12.5 12.7L7.4 16.6L4.1 14.9L9.5 9.8L17.6 17.5Z"
      fill="#0065A9"
    />
  </svg>
);

const AntigravityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <circle cx="12" cy="12" r="9" fill="#F3F4F6" stroke="#4F46E5" strokeWidth="1.5" />
    <path d="M12 6V18M6 12H18" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="#6366F1" />
  </svg>
);

const OpenClawIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect x="4" y="6" width="16" height="12" rx="3" fill="#F43F5E" />
    <circle cx="9" cy="12" r="1.5" fill="#FFFFFF" />
    <circle cx="15" cy="12" r="1.5" fill="#FFFFFF" />
    <path d="M9 4V6M15 4V6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 15H14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const N8NIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect width="24" height="24" rx="5" fill="#EA4B71" />
    <circle cx="8" cy="12" r="2.5" fill="#FFFFFF" />
    <circle cx="16" cy="8" r="2.5" fill="#FFFFFF" />
    <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    <path d="M8 12L16 8M8 12L16 16" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);

const LovableIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      fill="url(#lovable_grad)"
    />
    <defs>
      <linearGradient id="lovable_grad" x1="2" y1="3" x2="22" y2="21.35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF4B72" />
        <stop offset="1" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

const ClaudeDesktopIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect width="24" height="24" rx="5" fill="#D97757" />
    <path
      d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 15.59 8.41 18.5 12 18.5C15.59 18.5 18.5 15.59 18.5 12C18.5 8.41 15.59 5.5 12 5.5ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

const RooCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect width="24" height="24" rx="5" fill="#E11D48" />
    <path d="M8 8L12 12L8 16M13 16H16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OpenCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M8 9L5 12L8 15M16 9L19 12L16 15M13 8L11 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PythonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2V6.4H12.1V7.1H5.1C2.3 7.1 2 9.3 2 9.3C2 11.5 2.8 12.8 4.6 12.8H5.9V11.2C5.9 9.3 7.5 9.3 7.5 9.3H12.2C13.8 9.3 14.1 8 14.1 8V4C14.1 4 14.4 2 11.9 2ZM9.9 3.3C10.4 3.3 10.7 3.6 10.7 4.1C10.7 4.6 10.4 4.9 9.9 4.9C9.4 4.9 9.1 4.6 9.1 4.1C9.1 3.6 9.4 3.3 9.9 3.3Z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22C17.1 22 16.8 19.8 16.8 19.8V17.6H11.9V16.9H18.9C21.7 16.9 22 14.7 22 14.7C22 12.5 21.2 11.2 19.4 11.2H18.1V12.8C18.1 14.7 16.5 14.7 16.5 14.7H11.8C10.2 14.7 9.9 16 9.9 16V20C9.9 20 9.6 22 12.1 22ZM14.1 20.7C13.6 20.7 13.3 20.4 13.3 19.9C13.3 19.4 13.6 19.1 14.1 19.1C14.6 19.1 14.9 19.4 14.9 19.9C14.9 20.4 14.6 20.7 14.1 20.7Z"
      fill="#FFD438"
    />
  </svg>
);

export default function HeroLogos() {
  const row1 = [
    { name: 'Claude Code CLI', icon: <ClaudeIcon /> },
    { name: 'Cursor IDE', icon: <CursorIcon /> },
    { name: 'VS Code', icon: <VSCodeIcon /> },
    { name: 'Antigravity', icon: <AntigravityIcon /> },
    { name: 'OpenClaw', icon: <OpenClawIcon /> },
    { name: 'n8n Automation', icon: <N8NIcon /> },
  ];

  const row2 = [
    { name: 'Lovable AI', icon: <LovableIcon /> },
    { name: 'Claude Desktop', icon: <ClaudeDesktopIcon /> },
    { name: 'Roo Code / Kilo Code', icon: <RooCodeIcon /> },
    { name: 'OpenCode', icon: <OpenCodeIcon /> },
    { name: 'Python SDK & REST API', icon: <PythonIcon /> },
  ];

  return (
    <div className="wrapper">
      <div className="max-w-[1120px] relative z-30 mx-auto pt-10 pb-14 text-center">
        {/* Título */}
        <h2 className="text-center text-white font-bold text-sm sm:text-base md:text-lg tracking-tight mb-7 drop-shadow-xs">
          Compatible con las principales herramientas de desarrollo y automatización con IA
        </h2>

        {/* Badges Fila 1 */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-3">
          {row1.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-sm hover:border-primary-400/80 hover:bg-slate-900 hover:shadow-md transition-all duration-200"
            >
              {tool.icon}
              <span className="text-xs sm:text-sm font-semibold text-white">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Badges Fila 2 */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-6">
          {row2.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-sm hover:border-primary-400/80 hover:bg-slate-900 hover:shadow-md transition-all duration-200"
            >
              {tool.icon}
              <span className="text-xs sm:text-sm font-semibold text-white">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Texto inferior */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-slate-300 max-w-4xl mx-auto leading-relaxed">
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> Sin VPN ni configuraciones complejas
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> Conexión estándar mediante <code className="text-primary-400 font-mono text-[11px] bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700 font-semibold">ANTHROPIC_BASE_URL</code>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> También funciona con cualquier aplicación, automatización o backend compatible con conexiones de API estándar.
          </span>
        </div>
      </div>
    </div>
  );
}
