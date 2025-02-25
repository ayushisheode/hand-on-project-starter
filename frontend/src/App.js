import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Dashboard from './pages/DashboardPage/Dashboard.js';
import Api from './pages/DashboardAPI/api.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login.js';
import Bg from './pages/BgRemover/Bg.js';
import Register from './pages/Register/Register.js';
import DbLogin from './pages/DashboardLogin/DbLogin.js';
import MarketLogin from './pages/MarketplaceLogin/marketLogin.js';

function App() {
  return (
    
    <BrowserRouter>
       <Routes>
        <Route path="/Marketplace-LoggedOut" 
        element={<><Navbar /> <Dashboard /> <Api /></>} />   
           
        <Route path="/upload" element={<Bg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard-Login" element={<DbLogin />} />
        <Route path="/Marketplace-Login" element={<MarketLogin />} />

      </Routes>  
    </BrowserRouter> 
  );
}

export default App;