import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./admin_auth";
import './admin_signup.css';
import Admin_navbar from "./admin_navbar";
const Admin_signup = () => {
  const [Name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userlist, setUserlist] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  const sign_submit = (event) => {
    const userExists = auth.userlist.some((x) => x.Email === user);
    if (userExists) {
      setUserlist(false);
    } else {
      auth.signup(Name, user, password);
      navigate("/admin/login");
      setUserlist(true);
    }
    event.preventDefault();
  };

  const changename = (event) => {
    setName(event.target.value);
  };

  const changeuser = (event) => {
    setUser(event.target.value);
  };

  const changepassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="admin_sign_up">
      <Admin_navbar />
      <div className="admin_sign_up_content">
        <div className="admin_sign_up_title">
          <h1>Admin's Signup</h1>
        </div>
        <div className="admin_sign_up_decs">
          <p>Here panel only for the Admin's</p>
        </div>
        <div className="admin_sign_up_form">
          <form onSubmit={sign_submit}>
            <div className="admin_sign_up_label">Name
            <br />
            <input
            className="admin_sign_up_input"
              type="text"
              value={Name}
              onChange={changename}
              required
            />
            </div>
            <br />
            <div className="admin_sign_up_label">Admin's Id
            <br />
            <input
            className="admin_sign_up_input"
              type="text"
              value={user}
              onChange={changeuser}
              required
            />
            </div>
            <br />
            <div className="admin_sign_up_label">Password
            <br />
            <input
              type="password"
              className="admin_sign_up_input"
              value={password}
              onChange={changepassword}
              required
            />
            </div>
            <br />
            <div className="admin_sign_up_submit">
              <button type="submit" className="admin_signup_button">
                Sign Up
              </button>
              <br />
              {!userlist ? <h3 id="invalid">User Already exists</h3> : ""}
            </div>
          </form>
        </div>
        <div className="admin_sign_up_login">
          <p>
            Already have an account? <Link to="/admin/login" className="admin_signup_link">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin_signup;
