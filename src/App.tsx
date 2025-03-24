import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import ForgotPasswordPage from './Login/ForgotPages/ForgotPage'
import LoginPage from './Login/LoginPage'
import SignUpPage from './Login/SignUpPage'
import HomePage from './Home/Homepage'
import EditProfile from './Volunteers/Editprofile'
import OTPPage from './Login/ForgotPages/OPTpage';
import ResetPage from './Login/ForgotPages/ResetPage';
import NGOProfilePage from './NGO Profile Page/NGOProfilePage';
import NGOprofileviewer from './NGO Profile Page/NGOprofileviewer'
import Volprofileviewer from './Volprofile/Volprofileviewer'
import Footer from './components/footer'
import NavBar from './components/Navbar'

import VolunteerProfileViewers from './Volunteers/VolunteerProfileViewers'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/verify-otp', element: <OTPPage /> },
  { path: '/reset-password', element: <ResetPage /> },
  { path: '/ngo-profile', element: <NGOProfilePage /> },
  { path: '/ngo-profile-viewer', element: <NGOprofileviewer /> },
  { path: '/vol-profile-viewer', element: <Volprofileviewer /> },
  { path: '/footer', element: <Footer/> },
  { path: '/navbar', element: <NavBar/> },


  { path: '/volunteer-profile-edit', element: <EditProfile />},
  { path: '/volunteer-profile-viewers', element: <VolunteerProfileViewers />}

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;