import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './Login Pages/LoginPage'
import SignUpPage from './Login Pages/SignUpPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
