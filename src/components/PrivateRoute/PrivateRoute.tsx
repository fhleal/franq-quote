import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import useAuth from '../../hooks/auth/useAuth';

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const authenticated = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
