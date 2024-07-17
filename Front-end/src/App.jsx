import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Forgot from './pages/forgot';
import UploadHome from './pages/uploadHome'
import Property_detail from './pages/property_detail';
import Howitworks from './pages/howitworks';
import Meetourteam from './pages/meetourteam.jsx';


function App() {
  return (
    <>
     <Routes>
            {/* <Route element={<Navbar/>} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/property_detail' element={<Property_detail />} />
            <Route path="/property_detail:id" element={<Property_detail />}/>
            <Route path="/uploadhome" element={<UploadHome />}/>
            <Route path="/howitworks" element={<Howitworks />}/>
            <Route path="/meetourteam" element={<Meetourteam />}/>
    
</Routes>

          





    </>
  )
}

export default App
