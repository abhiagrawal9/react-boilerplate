import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'src/contexts';

import CircularLoader from '../components/shared/Loader/CircularLoader';
import { Shell } from '../layouts';

import { RoutePaths } from './route-paths.enum';

const ProtectedRoutes: FC = () => {
  const location = useLocation();
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) {
    return <CircularLoader />;
  }

  return isAuthenticated ? (
    <Shell />
  ) : (
    <Navigate
      to={RoutePaths.Login}
      state={{ path: location.pathname }}
      replace={true}
    />
  );
};

export default ProtectedRoutes;
