import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
