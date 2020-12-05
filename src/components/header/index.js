import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const loc = useLocation().pathname;

  var style = {

  }

  var styleLoc = {
    'text-decoration': "underline"
  }

  return(
  <div className='headerContainer'>
    <Link to='/' style={loc === '/' ? styleLoc : style}>Accueil</Link>
    <Link to='/programme' style={loc === '/programme' ? styleLoc : style}>Programme</Link>
    <Link to='/trombinoscope' style={loc === '/trombinoscope' ? styleLoc : style}>Trombi</Link>
    <Link to='/contact' style={loc === '/contact' ? styleLoc : style}>Contact</Link>
  </div>
)}

export default Header
