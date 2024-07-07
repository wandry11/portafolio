// hooks/useAuth.ts
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuth = () => {
  const router = useRouter();
  useEffect(() => {
    const authenticated = localStorage.getItem('sessionMH');
    if (!authenticated) {
      router.push('/');
    }
  }, [router]);
};

export default useAuth;
