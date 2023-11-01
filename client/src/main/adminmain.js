
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../admin/admin';
import AdminLogin from '../admin/admin_login'; 
import AdminSignup from '../admin/admin_signup'; 
import { AdminProvider } from '../admin/admin_auth';
import Addcode from '../admin/addcode';
// import AdminReq from '../admin/admin_req';

function Adminmain() {
  return (
    <div className="adminmain">
      <AdminProvider>
        <Routes>
          <Route path='/' element={
          // <AdminReq>
          <Admin />
          
          // </AdminReq> 
        } 
        />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/signup' element={<AdminSignup />} />
          <Route path='/addcode' element={<Addcode />} />
        </Routes>
      </AdminProvider>
      
    </div>
  );
}

export default Adminmain;

