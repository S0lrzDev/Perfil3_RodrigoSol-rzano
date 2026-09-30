import { useCallback, useEffect, useRef, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nextUrl = useRef(API_URL);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !nextUrl.current) return;
    loadingRef.current = true;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(nextUrl.current);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setCharacters((prev) => [...prev, ...data.results]);
      nextUrl.current = data.info.next;
    } catch (e) {
      setError(e.message);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return { characters, loading, error, loadMore };
}
