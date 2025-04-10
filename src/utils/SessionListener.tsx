import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionListener: React.FC = () => {
  const navigate = useNavigate();
  const previousSessionRef = useRef<string | null>(
    localStorage.getItem('session'),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentSession = localStorage.getItem('session');
      const previousSession = previousSessionRef.current;

      if (currentSession !== previousSession) {
        previousSessionRef.current = currentSession;

        if (currentSession) {
          navigate('/', { replace: true });
        } else {
          navigate('/login', { replace: true });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return null;
};

export default SessionListener;
