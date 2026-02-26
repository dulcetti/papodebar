import type { ReactNode } from 'react'
import { SiteNavbar } from '@/components/header-navbar'

interface RootLayoutProps {
  children: ReactNode
}

import '@/styles/styles.scss'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteNavbar logoSrc="/theme/marca-pdb@1x.png" />
        {children}
      </body>
    </html>
  )
}
