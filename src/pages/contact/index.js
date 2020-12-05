import React from 'react';
import './contact.css';
import Header from '../../components/header';
import imgIndex from '../../assets/imgIndex.js';

function Contact(){
  return(
    <div className='contactContainer' style={{ backgroundImage: `url(${imgIndex[2]})`}}>
      <Header/>
    </div>
  )
}

export default Contact;
