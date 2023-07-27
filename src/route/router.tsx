import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './routes/Dashboard';
import { Login } from './routes/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { SignUp } from './routes/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
