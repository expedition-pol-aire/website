import React from 'react';
import './programme.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import imgIndex from '../../assets/imgIndex.js';

function Programme(){
  return(
    <div className='programmeContainer'>
      <Header/>
      <div className='headerBackground' style={{ backgroundImage: `url(${imgIndex[4]})`}}/>
      <div className='programmeSubContainer'>
      </div>
      <Footer/>
    </div>
  )
}

export default Programme;
