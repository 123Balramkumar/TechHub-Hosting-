// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import hostinglogo from '../assets/hostinglogo.avif'
const Header = () => {
  return (
    <header>
      <nav style={{display:'flex',alignItems:'center'}}>
        
        <img style={{height:50,width:80,borderRadius:50}} src={hostinglogo} alt=''/>
        <Link to="/">Home</Link>
        <Link to="/DetailsPage">Domains</Link>
        <Link to="/DetailsPage">Hosting</Link>
        <Link to="/DetailsPage">Servers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
