import React from 'react';
import './contact.css';
import Header from '../../components/header';
import imgIndex from '../../assets/imgIndex.js';
import { Icon } from 'semantic-ui-react';

function Contact(){
  return(
    <div className='contactContainer' style={{ backgroundImage: `url(${imgIndex[2]})`}}>
      <Header/>
      <a target='_blank' href='https://www.facebook.com/Expédition-Pôlaire-100255401952079'><img className='imgContact' src={imgIndex[5]}/></a>
      <a href='mailto:loick.kerjean@etu.utc.fr'><Icon name='mail' size='huge' inverted/></a>
      <a target='_blank' href='https://www.instagram.com/expedition_polaire/'><img className='imgContact' src={imgIndex[6]}/></a>
    </div>
  )
}

export default Contact;
