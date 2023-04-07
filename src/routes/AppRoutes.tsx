import { FC, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Login } from '../components/auth';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

import LazyLoaded from './LazyLoaded';
import ProtectedRoutes from './ProtectedRoutes';
import { RoutePaths } from './route-paths.enum';

// Lazy Loaded Modules
const About = lazy(() => import('../pages/About'));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Login} element={<Login />} />
      <Route path={RoutePaths.Root} element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        <Route
          path={RoutePaths.About}
          element={
            <LazyLoaded>
              <About />
            </LazyLoaded>
          }
        />
      </Route>
      <Route path={RoutePaths.WildRoute} element={<PageNotFound />} />
    </>,
  ),
);

// App Routes
const AppRoutes: FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
