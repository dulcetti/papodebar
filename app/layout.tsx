import type { ReactNode } from 'react'
import { SiteNavbar } from '@/components/header-navbar'
import { Footer } from '@/components/footer'

import '@/styles/styles.scss'
import styles from '@/styles/Grid.module.scss';

interface RootLayoutProps {
  children: ReactNode
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteNavbar logoSrc="/theme/marca-pdb@1x.png" />
        <main className={styles['container-fluid']}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
