import React from 'react';
import './features.css';
import most from '../images/most.png';
import ide from '../images/ide.png';

function Features() {
    return (
      <div className='features'>
        <div className='features1'>
        <div className='features-text'>
            <h1 className='features-text1'>Most Popular Coding Question</h1> 
            <p className='features-text2'>Contain most popular coding questions 
            asked in many interviews and help to crack the coding interviews easily...!</p>
            </div>
            <div className='features1-image'>
            <img src={ide} alt="ide" />
            </div>
        </div>
        <div className='features2'>
         <div className='features2-image'>
                <img src={most} alt="most" />
            </div>
            <div className='features-text'>
            <h1 className='features-text1'>In Browser IDE</h1>
            <p className='features-text2'>Practice as you learn with our built-in IDE.
             Each lesson is designed to be followed by a coding exercise to apply the concepts and gain immediate</p>
            </div>
    </div>
      </div>
    );
  }

export default Features;