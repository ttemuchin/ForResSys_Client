import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LOGIN_ROUTE } from '../consts';

type PrivateRouteProps = {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const { isAuth } = useAuthStore();
  const isAuth = true;
  
  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} replace />;
  }
  
  return <>{children}</>;
};

export default PrivateRoute;