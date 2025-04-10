import { useState, useEffect } from 'react';
import { Session } from '../domains/Session';



const useSession = (): Session | null => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      try {
        const parsed: Session = JSON.parse(storedSession);
        setSession(parsed);
      } catch {
        setSession(null);
      }
    }
  }, []);

  return session;
};

export default useSession;
