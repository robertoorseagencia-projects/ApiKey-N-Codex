import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apikey-n-codex.vercel.app'),
  title: {
    default: 'APIKEY-N-CODEX | Créditos Claude AI & API Keys com o Menor Preço',
    template: '%s | APIKEY-N-CODEX',
  },
  description:
    'Democratizamos o acesso ao Claude Desktop, Claude Code CLI, Cursor e às melhores IAs com Prompt-Caching (até 90% de economia) e entrega automática 24/7.',
  applicationName: 'APIKEY-N-CODEX',
  keywords: [
    'APIKEY-N-CODEX',
    'Claude Code CLI',
    'Claude Desktop',
    'Claude Opus 5',
    'Claude Sonnet 4.6',
    'Anthropic API Key',
    'Prompt Caching',
    'Créditos Claude',
    'API Claude Brasil',
  ],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'APIKEY-N-CODEX | Créditos Claude AI com o Menor Preço',
    description:
      'Compre créditos de API para Claude Desktop, Claude Code CLI, Cursor, Antigravity e Lovable. Até 90% de economia com Prompt Caching e entrega automática 24/7.',
    url: 'https://apikey-n-codex.vercel.app',
    siteName: 'APIKEY-N-CODEX',
    images: [
      {
        url: 'https://apikey-n-codex.vercel.app/images/og-image.png',
        secureUrl: 'https://apikey-n-codex.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'APIKEY-N-CODEX',
      },
      {
        url: 'https://apikey-n-codex.vercel.app/icon.png',
        secureUrl: 'https://apikey-n-codex.vercel.app/icon.png',
        width: 1080,
        height: 1080,
        type: 'image/png',
        alt: 'APIKEY-N-CODEX Favicon',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APIKEY-N-CODEX | Créditos Claude AI com o Menor Preço',
    description:
      'Compre créditos de API para Claude Desktop, Claude Code CLI, Cursor e mais. 90% de economia em Prompt Caching e entrega 24/7.',
    images: ['https://apikey-n-codex.vercel.app/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="https://apikey-n-codex.vercel.app/images/og-image.png" />
        <meta property="og:image:secure_url" content="https://apikey-n-codex.vercel.app/images/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="APIKEY-N-CODEX" />
        <link rel="image_src" href="https://apikey-n-codex.vercel.app/images/og-image.png" />
      </head>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
