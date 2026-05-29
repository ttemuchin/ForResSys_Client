import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthStore';
import { LOGIN_ROUTE } from '../consts';

type PrivateRouteProps = {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuth } = useAuthStore();
  
  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} replace />;
  }
  
  return <>{children}</>;
};

export default PrivateRoute;