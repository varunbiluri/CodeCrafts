import React from "react";
import './log_in_banner.css';
import log_in from '../images/login.png';
import { Link }from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const LogInBanner = () => {
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
          navigate("/login_successfull");
        } else {
          setUserlist(false); 
        }
      
        event.preventDefault();
      };
      
    return (
        <div className='log_in_banner'>
            <div className='log_in_image'>
                <img src={log_in} alt="log_in" className="log_in_image"/>
            </div>
            <div className='log_in_content'>
                <div className='log_in_title'>
                    <h1>Let’s Make your coding journey today</h1>
                </div>
                <div className='log_in_decs'>
                    <p>make code from scratch</p>
                    </div>
                <div className='log_in_form'>
                    <form onSubmit={submit}>
                    
                    <input className="login_input" type="text" placeholder='Enter your Username' value={user} onChange={changeuser} required/>
                    <input className="login_input" type="password" placeholder='Enter your password'  value={password} onChange={changepassword} required/>
                    <div className="log_in_submit">
                    <button type="submit" className="button"> Start Coding today </button>
                    {!userlist ? <h3 id="invalid">Invalid username or password</h3>:''}
                    
                </div></form>
                </div>
                <div className="log_in_login">
                    <p>Don't have an account?  <Link to='/signup' className="link">Sign up</Link></p>
                </div>
            </div>
        </div>
    );

    }
export default LogInBanner