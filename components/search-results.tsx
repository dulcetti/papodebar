'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { type Post } from '@/libs/posts';
import Link from 'next/link';

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    // fetch de um JSON estático gerado no build
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((posts: Post[]) => {
        const normalized = query.toLowerCase();
        setResults(
          posts.filter(
            (post) =>
              post.title.toLowerCase().includes(normalized) ||
              post.description?.toLowerCase().includes(normalized) ||
              post.excerpt?.toLowerCase().includes(normalized) ||
              post.tags?.some((tag) => tag.toLowerCase().includes(normalized))
          )
        );
      });
  }, [query]);

  console.log('Resultados da busca:', results);

  return (
    results.map((post) => (
      <div key={post.slug}>
        <Link href={`/${post.slug}`}>
          <h2>{post.title}</h2>
          <img src={`/images/${post.coverImage}`} alt={`Imagem do artigo ${post.title}`} />
          <p>{post.description}</p>
        </Link>
      </div>
    ))
  );
}
