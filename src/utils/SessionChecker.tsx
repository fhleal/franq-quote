import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';

const SessionChecker: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = () => {
      if (!isAuthenticated()) {
        logout();
        navigate('/login', { replace: true });
      }
    };

    const interval = setInterval(checkSession, 30 * 1000);
    checkSession();

    return () => clearInterval(interval);
  }, [navigate]);

  return null;
};

export default SessionChecker;
