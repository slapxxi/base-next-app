import { useEffect } from 'react';

export function useLockScroll(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
  }, [lock]);
}
