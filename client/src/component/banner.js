import React from 'react';
import './banner.css';
import banner from '../images/banner.png';
import Text from './tpyo';
import { Link }from 'react-router-dom';



function Banner() {

  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1 className='banner-text1'>Level Up Your Coding:</h1>
        <Text />
        <div className='banner-button-div'>
         <Link to="./signup"><button className='banner-button'><span>Get Started</span></button></Link>
        </div>
      </div>
      <div className='Banner-image'>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
