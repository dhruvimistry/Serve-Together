import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './Login Pages/LoginPage'
import SignUpPage from './Login Pages/SignUpPage'
import HomePage from './Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
