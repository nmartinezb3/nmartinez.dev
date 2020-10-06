import { useState, useEffect } from 'react';

export default function useMediaQuery(mediaQuery: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query: MediaQueryList = window.matchMedia(mediaQuery);
    setMatches(query.matches);
  }, [mediaQuery]);

  return matches;
}
