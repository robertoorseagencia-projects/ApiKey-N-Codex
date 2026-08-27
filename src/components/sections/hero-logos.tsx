import React from "react";

export default function HeroLogos() {
  const tools = [
    { name: 'Claude Code CLI', icon: '⚡' },
    { name: 'Cursor IDE', icon: '💻' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Antigravity', icon: '✨' },
    { name: 'OpenClaw', icon: '🤖' },
    { name: 'N8N Automation', icon: '🔄' },
    { name: 'Lovable AI', icon: '🎨' },
    { name: 'Capcut Workflows', icon: '🎬' },
    { name: 'Roo Code / Kilo Code', icon: '🛠️' },
    { name: 'OpenCode', icon: '🌐' },
    { name: 'Python SDK & REST', icon: '🐍' },
  ];

  return (
    <div className="wrapper">
      <div className="max-w-[1080px] relative z-30 mx-auto pt-10 pb-14">
        <p className="text-center text-gray-500 dark:text-white/60 text-sm sm:text-base font-semibold tracking-wide uppercase mb-6">
          100% Compatible con las Principales Herramientas de Desarrollo y Flujos de IA
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-xs hover:border-primary-400 dark:hover:border-primary-500/50 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-base">{tool.icon}</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 dark:text-gray-400 mt-5">
          ✓ Sin necesidad de VPN • Conexión directa estándar a <code className="text-primary-500 font-mono text-[11px] bg-primary-50 dark:bg-primary-950/40 px-1.5 py-0.5 rounded">ANTHROPIC_BASE_URL</code>
        </p>
      </div>
    </div>
  );
}
