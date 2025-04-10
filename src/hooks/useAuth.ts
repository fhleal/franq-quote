import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    const checkSession = () => {
      const current = isAuthenticated();
      if (!current && authenticated) {
        setAuthenticated(false);
      } else if (current !== authenticated) {
        setAuthenticated(current);
      }
    };

    const interval = setInterval(checkSession, 1000);
    return () => clearInterval(interval);
  }, [authenticated]);

  return authenticated;
};

export default useAuth;
