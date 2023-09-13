import React,{Component} from "react";
import { Navigate } from "react-router-dom";
import  sign_up_gif  from "../images/sign.gif";
import Navbar from "./navbar";

class Signup_successfull extends Component{
    constructor(props){
        super(props);
        this.state={
            ifloggedin:true,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ifloggedin:false});
        }, 5000);
        }
    render(){
        if(this.state.ifloggedin){
            return(
                <div>
                    <Navbar />
                    <img src={sign_up_gif} alt="signup_successfull" className="sign" height='100%' width='100%'/>
                </div>
            )
        }
        return <Navigate to="/login" />;
    }
}
export default Signup_successfull;
