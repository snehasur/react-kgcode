import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage.tsx";
import Register from "./components/Register.tsx"
import AboutPage from "./components/AboutPage.tsx";
import MainLayout from "./components/Layout/MainLayout.tsx";
import GuestLayout from "./components/Layout/GuestLayout.tsx";
import Login from "./components/Login.tsx";
import Profile from "./components/Profile.tsx";
import { useAppDispatch, useAppSelector } from "./store/store.ts";
import { RootState } from './store/store';
import { isAuthenticated } from "./store/authSlice.ts";

// Protected route component to check authentication
//need component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userIsAuthenticated =  useAppSelector(isAuthenticated); 
  return userIsAuthenticated ? children : <Navigate to="/login" replace />;
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
      { path: "/about",element: <AboutPage /> },
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
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
