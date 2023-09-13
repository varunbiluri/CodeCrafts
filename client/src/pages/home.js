import React from "react";
import Navbar from '../component/navbar';
import Banner from '../component/banner';
import Features from '../component/features';
import dots from '../images/dots_right.png';
import Footer from '../component/footer';



function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <img src={dots} alt="dots" className='dots' />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;