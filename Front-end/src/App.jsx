import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Forgot from './pages/forgot';
import Property_detail from './pages/property_detail';


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
            <Route path="/property_detail:id" component={<Property_detail />}/>
    
</Routes>

          





    </>
  )
}

export default App
