import React from 'react';
import './error404.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import imgIndex from '../../assets/imgIndex.js';

function Error404(){
  return(
    <div className='errorContainer' style={{ backgroundImage: `url(${imgIndex[3]})`}}>
      <Header/>
      <h1>Erreur 404</h1>
      <Footer/>
    </div>
  )
}

export default Error404;
