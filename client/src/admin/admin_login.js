import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./admin_auth";
import Admin_navbar from "./admin_navbar";
import './admin_login.css'
const Admin_login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userlist, setUserlist] = useState(true);

  const changeuser = (event) => {
    setUser(event.target.value);
  }

  const changepassword = (event) => {
    setPassword(event.target.value);
  }

  const submit = (event) => {
    let matchFound = false;
    auth.userlist.forEach((item) => {
      if (item.Email === user && item.Password === password) {
        matchFound = true;
        return;
      }
    });

    if (matchFound) {
      auth.login(user, password);
      navigate("/admin");
    } else {
      setUserlist(false);
    }

    event.preventDefault();
  };

  return (
    <div className='log_in_admin'> 
    <Admin_navbar />
      
      <div className='log_in_admin_content'>
        <div className='log_in_admin_title'>
          <h1>Admin's Login</h1>
        </div>
        <div className='log_in_admin_decs'>
          <p>Here the panel for only Admin's</p>
        </div>
        <br/>
        <div className='log_in_admin_form'>
          <form onSubmit={submit}>
            <div className='log_in_admin_label'>Admin's Id
            <br/>
            <input className="login_admin_input" type="text" value={user} onChange={changeuser} required />
            </div>
            <br/>
            <br/>
            <div className='log_in_admin_label'>Password
            <br />
            <input className="login_admin_input" type="password" value={password} onChange={changepassword} required />
            </div>
            <br/>
            <br/>
            <div className="log_in_admin_submit">

              <button type="submit" className="admin_button"> Login </button>
              {!userlist ? <h3 id="invalid">Invalid username or password</h3> : ''}
            </div>
          </form>
        </div>
        <div className="log_in_admin_login">
          <p>Don't have an account? <Link to='/admin/signup' className="admin_sign_link">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Admin_login;
