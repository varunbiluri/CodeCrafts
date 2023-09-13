import React, { useState } from "react";
import "./sign_up_banner.css";
import sign_up from "../images/sign_up.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const SignUpBanner = () => {
    const [Name , setName] = useState("");
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
          navigate("/signup_successfull");
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
        <div className="sign_up_banner">
            <div className="sign_up_image">
                <img src={sign_up} alt="sign_up" className="sign_up_image" />
            </div>
            <div className="sign_up_content">
                <div className="sign_up_title">
                    <h1>Start your coding journey today</h1>
                </div>
                <div className="sign_up_decs">
                    <p>Learn to code from scratch</p>
                </div>
                <div className="sign_up_form">
                    <form onSubmit={sign_submit}>
                    <input
                            type="text"
                            placeholder="Enter your Name"
                            value={Name}
                            onChange={changename}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter your Username"
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
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpBanner;
