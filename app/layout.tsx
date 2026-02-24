import type { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

import '@/styles/styles.scss'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
