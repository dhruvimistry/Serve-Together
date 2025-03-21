import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import ForgotPasswordPage from './ForgotPages/ForgotPage';
import LoginPage from './Login Pages/LoginPage';
import SignUpPage from './Login Pages/SignUpPage';
import HomePage from './Home';
import OTPPage from './ForgotPages/OPTpage';
import ResetPage from './ForgotPages/ResetPage';
import NGOProfilePage from './NGO Profile Page/NGOProfilePage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/otp', element: <OTPPage /> },
  { path: '/reset-password', element: <ResetPage /> },
  { path: '/ngo-profile', element: <NGOProfilePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;