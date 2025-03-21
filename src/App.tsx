// import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'

import ForgotPasswordPage from './ForgotPages/ForgotPage'
import LoginPage from './Login/LoginPage'
import SignUpPage from './Login/SignUpPage'
// import HomePage from './Home'
import OTPPage from './ForgotPages/OPTpage'
import ResetPage from './ForgotPages/ResetPage'
import NGOProfilePage from './NGO Profile Page/NGOProfilePage'
import HomePage from './Home/Homepage'
// import Profile from './Volprofile/Volprofileviewer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
        <Route path='/otp' element={<OTPPage />}/>
        <Route path='/reset-password' element={<ResetPage />}/>
        <Route path='/ngo-profile' element={<NGOProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App