// import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'

import ForgotPasswordPage from './ForgotPages/ForgotPage'
import LoginPage from './Login Pages/LoginPage'
import SignUpPage from './Login Pages/SignUpPage'
import HomePage from './Home'
import OTPPage from './ForgotPages/OPTpage'
import ResetPage from './ForgotPages/ResetPage'
import NGOProfilePage from './NGO Profile Page/NGOProfilePage'
// import Homepage from './Homepage/Homepage'
// import LoginPage from './pages/LoginPage'
import Volprofileviewer from './Volprofile/Volprofileviewer'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/volprofileviewer' element={<Volprofileviewer />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/forgotpassword' element={<ForgotPasswordPage />}/>
        <Route path='/otp' element={<OTPPage />}/>
        <Route path='/resetpassword' element={<ResetPage />}/>
        <Route path='/ngoprofile' element={<NGOProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App