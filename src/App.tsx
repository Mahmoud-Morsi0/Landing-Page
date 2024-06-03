
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import ProtectedRoute from './assets/protectedRoute';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='auth/login' element={<Login/>}/>
          <Route path='auth/signup' element={<Signup/>}/>
          <Route element={<ProtectedRoute/>}>
             <Route path='/home' element={<Home/>}/>
          </Route>
            
          
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
