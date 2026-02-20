import '@/styles/index.css'

import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Bodoni_Moda, Spline_Sans, Spline_Sans_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'

const bodyFont = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const displayFont = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'butcss - CSS-powered backend framework',
  description:
    'A PostCSS-based backend framework that lets you write server logic in CSS syntax and compile to Express with SQLite.',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} font-[var(--font-body)] antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
