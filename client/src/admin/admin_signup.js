import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./admin_auth";

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
    <div className="sign_up">
      
      <div className="sign_up_content">
        <div className="sign_up_title">
          <h1>Admin's Signup</h1>
        </div>
        <div className="sign_up_decs">
          <p>Here panel only for the Admin's</p>
        </div>
        <div className="sign_up_form">
          <form onSubmit={sign_submit}>
            <input
              type="text"
              placeholder="Enter your Admin name"
              value={Name}
              onChange={changename}
              required
            />
            <input
              type="text"
              placeholder="Enter your Admins ID"
              value={user}
              onChange={changeuser}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={changepassword}
              required
            />
            <div className="sign_up_submit">
              <button type="submit" className="button">
                Start Coding today
              </button>
              {!userlist ? <h3 id="invalid">User Already exists</h3> : ""}
            </div>
          </form>
        </div>
        <div className="sign_up_login">
          <p>
            Already have an account? <Link to="/admin/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin_signup;
