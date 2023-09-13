import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = React.createContext(null);

const AdminProvider = (props) => {
  const [user, setUser] = useState(null);
  const [Name, setName] = useState(null);
  const [userlist, setUserlist] = useState([]); 

  const login = (Name, username, password) => {
    setUser(Name);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/admin/admindet')
      .then(res => {
        setUserlist(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); 

  const signup = (Name, Email, Password) => {
    axios.post('http://localhost:3000/admin/signup', {
      Name: Name,
      Email: Email,
      Password: Password
    })
    .then(res => {
      console.log(res.data);
      setName(Name);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider
      value={{ user, Name, signup, userlist, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AdminProvider, useAuth };
