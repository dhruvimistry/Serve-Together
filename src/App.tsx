import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';

import NavBar from './components/layout/Navbar';
import Footer from './components/layout/footer';

import Homepage from './Home/Homepage';
import ForgotPasswordPage from './Login/ForgotPassword';
import LoginPage from './Login/LoginPage';
import SignUpPage from './Login/SignUpPage';
import OTPPage from './Login/VerifyOTP';
import ResetPage from './Login/ResetPassword';
import NGOProfilePage from './Profiles/NGO/NGOProfilePage';
import NGOProfileViewer from './Profiles/NGO/NGOprofileviewer';
import VolunteerProfileViewer from './Profiles/Volunteers/VolunteerProfileViewers';
import EditProfile from './Profiles/Volunteers/Editprofile';
import NgoEditProfile from './Profiles/NGO/NGOeditprofile';
import VolunteerProfilePage from './Profiles/Volunteers/VolunteerProfilePage';
import AboutUs from './Home/Aboutpage';
import Volunteers from './Home/Volunteers';
import AddEvent from './Profiles/NGO/AddEvent';
import Events from './Home/Events';
import EventsVolunteersPage from './Requests/Requestpage';

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
      { path: '/ngo-profile/add-event', element: <AddEvent /> },
      { path: '/volunteer-profile-viewer', element: <VolunteerProfileViewer /> },
      { path: '/volunteer-profile', element: <VolunteerProfilePage/> },
      { path: '/volunteer-profile/edit', element: <EditProfile />},
      { path: '/about', element: <AboutUs />},
      { path: '/request', element:<EventsVolunteersPage />},
      { path: '/volunteers', element: <Volunteers />},
      { path: '/events', element: <Events />}
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
