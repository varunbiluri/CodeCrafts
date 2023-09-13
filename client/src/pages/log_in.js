import React from "react";
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import LogInBanner from '../component/log_in_banner';

function LogIn() {
    return (
        <div>
            <Navbar />
            <LogInBanner />
            <Footer />
            
        </div>
    );
    }

export default LogIn;