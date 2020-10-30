import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useRouteChange(fn: () => void) {
  let router = useRouter();

  useEffect(() => {
    function handler() {
      fn();
    }

    router.events.on('routeChangeComplete', handler);
    return () => router.events.off('routeChangeComplete', handler);
  }, [router]);

  return router;
}
