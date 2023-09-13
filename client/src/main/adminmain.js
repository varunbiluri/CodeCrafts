
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../admin/admin';
import AdminLogin from '../admin/admin_login'; 
import AdminSignup from '../admin/admin_signup'; 
import { AdminProvider } from '../admin/admin_auth';

function Adminmain() {
  return (
    <div className="adminmain">
      <AdminProvider>
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/signup' element={<AdminSignup />} />
        </Routes>
      </AdminProvider>
      
    </div>
  );
}

export default Adminmain;

