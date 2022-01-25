import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Dashboard from './pages/DashboardPage/Dashboard.js';
import Api from './pages/DashboardAPI/api.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from './pages/Logout/Logout.js';
import Bg from './pages/BgRemover/Bg.js';

function App() {
  return (
    
    <BrowserRouter>
       <Routes>
        <Route path="/Marketplace-LoggedOut" 
        element={<><Navbar /> <Dashboard /> <Api /></>} />   
           
        <Route path="/Bg-Remover" element={<Bg />} />
      <Route path="/Logged-Out" element={<Logout />} />
      </Routes>  
    </BrowserRouter> 
  );
}

export default App;