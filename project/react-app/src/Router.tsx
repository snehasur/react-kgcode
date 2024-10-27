import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import MainLayout from "./components/Layout/MainLayout.tsx";
import GuestLayout from "./components/Layout/GuestLayout.tsx";
import Login from "./components/Login.tsx";
import Profile from "./components/Profile.tsx";
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

// Protected route component to check authentication
//need component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/profile', element: <Profile /> },
      // { path: "/about",element: <AboutPage /> },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/about",element: <AboutPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
