import React, {Component} from "react";
import { Navigate } from "react-router-dom";
import log_in_gif  from "../images/log.gif";
import Navbar from "./navbar";

class Login_successfull extends Component{
    constructor(props){
        super(props);
        this.state={
            ifloggedin:true,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ifloggedin:false});
        }, 8000);
        }
    render(){
        if(this.state.ifloggedin){
            return(
                <div>
                    <Navbar />
                    <img src={log_in_gif} alt="login_successfull" className="log" height='100%' width='100%'/>
                </div>
            )
        }
        return <Navigate to="/main" />;
    }
}
export default Login_successfull;