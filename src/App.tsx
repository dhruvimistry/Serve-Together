import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import Footer from './components/footer';

import Homepage from './Home/Homepage';
import ForgotPasswordPage from './Login/ForgotPages/ForgotPage';
import LoginPage from './Login/LoginPage';
import SignUpPage from './Login/SignUpPage';
import OTPPage from './Login/ForgotPages/OPTpage';
import ResetPage from './Login/ForgotPages/ResetPage';
import NGOProfilePage from './NGO Profile Page/NGOProfilePage';
import NGOProfileViewer from './NGO Profile Page/NGOprofileviewer';
import VolunteerProfileViewer from './Volunteers/VolunteerProfileViewers';
import EditProfile from './Volunteers/Editprofile';
import NgoEditProfile from './NGO Profile Page/NGOeditprofile';
import VolunteerProfilePage from './Volunteers/VolunteerProfilePage';
import AboutUs from './About/Aboutpage';

const MainLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

const AuthLayout = () => <Outlet />;

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/ngo-profile', element: <NGOProfilePage /> },
      { path: '/ngo-profile-viewer', element: <NGOProfileViewer /> },
      { path: '/ngo-profile/edit', element: <NgoEditProfile /> },
      { path: '/volunteer-profile-viewer', element: <VolunteerProfileViewer /> },
      { path: '/volunteer-profile', element: <VolunteerProfilePage/> },
      { path: '/volunteer-profile/edit', element: <EditProfile />},
      { path: '/about', element: <AboutUs />}

    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/verify-otp', element: <OTPPage /> },
      { path: '/reset-password', element: <ResetPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
