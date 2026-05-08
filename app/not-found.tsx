import Link from 'next/link';
import { SearchComponent } from '@/components/search-component';

import styles from '@/styles/NotFound.module.scss';

export const metadata = {
  title: '404 - Página Não Encontrada',
  description: 'A página que você está procurando não existe.',
};

export default function NotFound() {
  return (
    <main className={styles['error-404']}>
      <div className={styles['box-404']}>
        <span className={styles['number']}>4</span>
        <span className={styles['number']}>4</span>
      </div>

      <h1 className={styles['page-title']}>Página não existente ou a cerveja acabou!</h1>

      <div className={styles['content']}>
        <p>Mas não fique triste, pegue mais um copo e volte para a nossa <Link href="/">página de início</Link>.</p>
        <p>Ou então faça uma busca no Papo de Bar:</p>

        <div role="search" className={styles['search-box']}>
          <h2 className={styles['title']}>Encontre seu assunto etílico favorito!</h2>

          <SearchComponent />
        </div>
			</div>
    </main>
  );
}
