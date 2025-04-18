import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Loadable } from '../components/ui';

const Dashboard = Loadable(lazy(() => import('@/features/dashboard/pages/dashboard')));
const Login = Loadable(lazy(() => import('@/features/auth/form/login-form')));

const router = createBrowserRouter([
  {
    path: '/',
    element: < Dashboard/>,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]);

export default router;
