import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <hr className='hr'/>
      <p>&copy; {new Date().getFullYear()} CodeCrafts. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
