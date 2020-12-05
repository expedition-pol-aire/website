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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel porttitor sapien. Aliquam gravida lacinia neque ac dictum. Vivamus nec eros non libero elementum pharetra. Pellentesque a ante felis. Morbi nec pulvinar magna, sed consequat lorem. Aenean laoreet, justo sed tristique semper, ligula dui ultrices dolor, eget porttitor massa nisl nec elit. Morbi facilisis urna sed nisl rhoncus placerat.</p>
        <br/>
        <p>Aenean nec euismod metus, ut suscipit tortor. Integer egestas pharetra justo quis consectetur. Proin a augue ut sem mattis elementum. Proin nec eros ut lectus rhoncus malesuada a eget massa. Etiam tincidunt eget nisi nec eleifend. Integer condimentum eros cursus lectus luctus, quis rhoncus ex molestie. Proin in arcu mi. Praesent scelerisque, arcu vel lacinia egestas, nibh tortor pulvinar libero, in gravida augue leo vitae massa. Vivamus suscipit neque vitae urna elementum ornare. Morbi tempor semper nisi, vel vestibulum est viverra aliquet. Suspendisse efficitur gravida efficitur.</p>
        <br/>
        <p>Aliquam erat volutpat. Nulla sed sollicitudin eros, sed tristique urna. Nullam dui massa, placerat a arcu a, sagittis vehicula velit. Sed nec ante vel ex gravida scelerisque et vitae dolor. Praesent massa mi, mollis ut sagittis eget, pharetra nec risus. Nulla egestas urna quis mauris feugiat, quis commodo justo efficitur. Nunc finibus, velit accumsan lobortis pretium, orci magna dictum nunc, sit amet fringilla dolor ipsum pellentesque est. Donec lectus justo, porttitor sit amet augue sit amet, imperdiet tristique risus. Donec euismod varius scelerisque. Nunc tincidunt mauris turpis, ut varius leo vulputate nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat eget eros in molestie.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel porttitor sapien. Aliquam gravida lacinia neque ac dictum. Vivamus nec eros non libero elementum pharetra. Pellentesque a ante felis. Morbi nec pulvinar magna, sed consequat lorem. Aenean laoreet, justo sed tristique semper, ligula dui ultrices dolor, eget porttitor massa nisl nec elit. Morbi facilisis urna sed nisl rhoncus placerat.</p>
        <br/>
        <p>Aenean nec euismod metus, ut suscipit tortor. Integer egestas pharetra justo quis consectetur. Proin a augue ut sem mattis elementum. Proin nec eros ut lectus rhoncus malesuada a eget massa. Etiam tincidunt eget nisi nec eleifend. Integer condimentum eros cursus lectus luctus, quis rhoncus ex molestie. Proin in arcu mi. Praesent scelerisque, arcu vel lacinia egestas, nibh tortor pulvinar libero, in gravida augue leo vitae massa. Vivamus suscipit neque vitae urna elementum ornare. Morbi tempor semper nisi, vel vestibulum est viverra aliquet. Suspendisse efficitur gravida efficitur.</p>
        <br/>
        <p>Aliquam erat volutpat. Nulla sed sollicitudin eros, sed tristique urna. Nullam dui massa, placerat a arcu a, sagittis vehicula velit. Sed nec ante vel ex gravida scelerisque et vitae dolor. Praesent massa mi, mollis ut sagittis eget, pharetra nec risus. Nulla egestas urna quis mauris feugiat, quis commodo justo efficitur. Nunc finibus, velit accumsan lobortis pretium, orci magna dictum nunc, sit amet fringilla dolor ipsum pellentesque est. Donec lectus justo, porttitor sit amet augue sit amet, imperdiet tristique risus. Donec euismod varius scelerisque. Nunc tincidunt mauris turpis, ut varius leo vulputate nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat eget eros in molestie.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Programme;
