import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import ForgotPasswordPage from './Login/ForgotPages/ForgotPage';
import LoginPage from './Login/LoginPage';
import SignUpPage from './Login/SignUpPage';
// import HomePage from './Home';
import OTPPage from './Login/ForgotPages/OPTpage';
import ResetPage from './Login/ForgotPages/ResetPage';
import NGOProfilePage from './NGO Profile Page/NGOProfilePage';
import NGOprofileviewer from './NGO Profile Page/NGOprofileviewer'
import NGOeditprofile from './NGO Profile Page/NGOeditprofile'
import AddEvent from './NGO Profile Page/AddEvent'
import VolunteerProfileViewers from './Volunteers/VolunteerProfileViewers'
import Editprofile from './Volunteers/Editprofile'
import Footer from './components/footer'
import NavBar from './components/Navbar'
import Homepage from './Home/Homepage';


const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/verify-otp', element: <OTPPage /> },
  { path: '/reset-password', element: <ResetPage /> },
  { path: '/ngo-profile', element: <NGOProfilePage /> },
  { path: '/ngo-profile-viewer', element: <NGOprofileviewer /> },
  { path: '/ngo-edit-profile', element: <NGOeditprofile /> },
  { path: '/add-events', element: <AddEvent /> },
  { path: '/vol-profile-viewer', element: <VolunteerProfileViewers /> },
  { path: '/vol-profile-edit', element: <Editprofile /> },
  { path: '/footer', element: <Footer/> },
  { path: '/navbar', element: <NavBar/> },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;