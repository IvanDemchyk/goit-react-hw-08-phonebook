import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return children;
};
