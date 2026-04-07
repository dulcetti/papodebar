import styles from '@/styles/NotFound.module.scss';
import form from '@/styles/Form.module.scss';
import Link from 'next/link';

export const metadata = {
  title: '404 - Página Não Encontrada',
  description: 'A página que você está procurando não existe.',
};

export default function NotFound() {
  return (
    <main className={styles['error-404']}>
    </main>
  );
}
