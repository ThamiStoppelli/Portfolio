import React, { useState } from 'react'
import useTranslation from '../../hooks/useTranslation';

import image from '../../assets/portfolio1-1.png'
// import image from '../../assets/portfolio11.png'
// import image from '../../assets/portfolio1.png'
// import image from '../../assets/teste6.png'
import './Cover.css'

function Cover() {

  const { scroll, quote } = useTranslation('cover');

  const handleScrollDown = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='cover-container'>
      <div className='title-portfolio'>
        <h1>PORTFOLIO</h1>
      </div>
      <div className='image'>
        <img src={image} alt='imagem'></img>
      </div>
      <div className='subtitle-portfolio'>
        <h2>PORTFOLIO</h2>
        <h2>PORTFOLIO</h2>
        <h2>PORTFOLIO</h2>
      </div>
      <div className='quote'>
        <p>{quote}</p>
        <div className='background'></div >
      </div>
      <div className='circle-container'>
        <div className='circle' onClick={handleScrollDown}>
          <h4>{scroll}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cover
