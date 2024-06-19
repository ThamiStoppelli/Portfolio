import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext';

// import image from '../assets/thami1.1.png'
// import image from '../assets/teste3.png'
import image from '../assets/teste2.png'
import './Cover.css'

const translations = {
    pt: {
      quote: "Sou apaixonada pela construção de sistemas que solucionem problemas reais através de interfaces bem estruturadas e com excelente usabilidade.",
      scroll: "Role para baixo",
    },
    en: {
      quote: "I am passionate about building systems that solve real world problems through well-structured interfaces and excellent usability.",
      scroll: `Scroll down`,
    },
};

function Cover() {

  const { language } = useLanguage();
  const { scroll, quote } = translations[language];

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
        <div className='cover'>
            <div className='quote'>
                <p>{quote}</p>
            </div>
            <img src={image} alt='imagem'></img>
            <div className='subtitle-portfolio'>
                <h2>PORTFOLIO</h2>
                <h2>PORTFOLIO</h2>
                <h2>PORTFOLIO</h2>
            </div>
            {/* baixar pdf do resume */}
        </div>
        <div className='circle-container'>
            <div className='circle' onClick={handleScrollDown}>
                <h4>{scroll}</h4>
                {/* <h4>Scroll<br /> down</h4> */}
            </div>
        </div>
    </div>
  )
}

export default Cover
