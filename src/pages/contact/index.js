import React from 'react';
import './contact.css';
import Header from '../../components/header';
import imgIndex from '../../assets/imgIndex.js';

function Contact(){
  return(
    <div className='contactContainer' style={{ backgroundImage: `url(${imgIndex[2]})`}}>
      <Header/>
      <a target='_blank' rel="noreferrer" href='https://www.facebook.com/Expédition-Pôlaire-100255401952079'><img className='imgContact' src={imgIndex[5]} alt='facebook'/></a>
      <a href='mailto:loick.kerjean@etu.utc.fr'><img className='imgContact' src={imgIndex[7]} alt='mail'/></a>
      <a target='_blank' rel="noreferrer" href='https://www.instagram.com/expedition_polaire/'><img className='imgContact' src={imgIndex[6]} alt='instagram'/></a>
    </div>
  )
}

export default Contact;
