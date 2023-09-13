import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./admin_auth";

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
    
      <div className='log_in_content'>
        <div className='log_in_title'>
          <h1>Admin's - Login</h1>
        </div>
        <div className='log_in_decs'>
          <p>Here the panel for only Admin's</p>
        </div>
        <div className='log_in_form'>
          <form onSubmit={submit}>
            <input type="text" placeholder='Enter your Admins ID' value={user} onChange={changeuser} required />
            <input type="password" placeholder='Enter your password' value={password} onChange={changepassword} required />
            <div className="log_in_submit">
              <button type="submit" className="button"> Start Coding today </button>
              {!userlist ? <h3 id="invalid">Invalid username or password</h3> : ''}
            </div>
          </form>
        </div>
        <div className="log_in_login">
          <p>Don't have an account? <Link to='/admin/signup'>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Admin_login;
