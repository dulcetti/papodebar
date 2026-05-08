import { Suspense } from 'react';

import { SearchResults } from '@/components/search-results';

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Carregando resultados...</p>}>
      <SearchResults />
    </Suspense>
  );
}
