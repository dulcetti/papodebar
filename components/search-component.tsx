'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import form from '@/styles/Form.module.scss';

export function SearchComponent() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSearch() {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      return;
    }

    router.push(`/busca?q=${encodeURIComponent(trimmedSearch)}`);
  }

  return (
    <>
      <div className={form['fieldset']}>
        <label className={form['field-container']}>
          <input
            type="search"
            name="search"
            id="search"
            className={form['field']}
            placeholder="Ex: cerveja artesanal"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <span className={form['label']}>termos da busca</span>
        </label>

        <button className={form['button']} onClick={handleSearch}>buscar</button>
      </div>
    </>
  );
}
