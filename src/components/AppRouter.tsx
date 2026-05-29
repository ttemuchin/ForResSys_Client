import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import PrivateRoute from './PrivateRoute';
import { useAuthStore } from '../store/AuthStore';

const AppRouter: React.FC = () => {
  const { isAuth } = useAuthStore();

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {isAuth && authRoutes.map(({ path, Component }) => (
        <Route 
          key={path} 
          path={path} 
          element={
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          } 
        />
      ))}

      {/* 404 */}
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

export default AppRouter;