import React from 'react';
import LogIn from '../pages/log_in';
import Home from '../pages/home';
import SignUp from '../pages/sign_up';
import Main from '../pages/main';
import MonacoEditorComponent from '../component/editor';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../component/auth';
import ReqAuth from '../component/req_auth';
import LoginSuccessful from '../component/login_success'; 
import SignupSuccessful from '../component/signup_success'; 
import Profile from '../component/profile';
import { ProblemProvider } from "../component/ProblemContent";

function Usermain() {
    return (
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/main' element={<ReqAuth>
              <ProblemProvider>
              <Main />  
              </ProblemProvider>
            </ReqAuth>} />
            <Route path='/editor' element={<ReqAuth>
              <ProblemProvider>
              <MonacoEditorComponent />
              </ProblemProvider>
              </ReqAuth>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login_successfull' element={<LoginSuccessful />} />
            <Route path='/signup_successfull' element={<SignupSuccessful />} />
          </Routes>
        </AuthProvider>
    </div>
    );
    }

export default Usermain;