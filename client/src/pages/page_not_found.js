import React from "react";
import page_not_gif from '../images/page_not_found.gif';
import Navbar from "../component/navbar";
export class Page_not_found extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <img src={page_not_gif} alt="page_not_found" className="log" height='100%' width='100%'/>
            </div>
        )
    }
}
export default Page_not_found;