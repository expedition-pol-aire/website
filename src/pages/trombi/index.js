import React from 'react';
import './trombi.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import imgIndex from '../../assets/imgIndex.js';

function Trombi(){
  return(
    <div className='trombiContainer'>
      <Header/>
      <div className='headerBackground' style={{ backgroundImage: `url(${imgIndex[4]})`}}/>
      <div className='trombiSubContainer'>
      </div>
      <Footer/>
    </div>
  )
}

export default Trombi;
