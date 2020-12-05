import React from 'react';
import './home.css';
import Header from '../../components/header';
import imgIndex from '../../assets/imgIndex.js';

function Home(){
  return(
    <div className='homeContainer' style={{ backgroundImage: `url(${imgIndex[0]})`}}>
      <Header/>
    </div>
  )
}

export default Home;
