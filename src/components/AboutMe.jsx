import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext';

// import image from '../assets/thami2.png'
import image from '../assets/teste5.png'
import locationIcon from '../assets/location.svg'
import mailIcon from '../assets/mail.svg'
import './AboutMe.css'

const translations = {
  pt: {
    section: "Sobre mim",
    greeting: "Oi, eu sou a Thamires!",
    description: "Atuando como desenvolvedora front-end e UI/UX designer, possuo experiência com desenvolvimento de softwares desde o design das interfaces até o desenvolvimento front-end e back-end da aplicação com modelagem do banco de dados, destacando habilidades com ReactJS, TDD, consumo de APIs e responsividade.",
    location: "Fortaleza/CE, Brasil",
    contact: "Contato",
  },
  en: {
    section: "About me",
    greeting: "Hi, I'm Thamires!",
    description: "As a versatile professional with expertise in both front-end development and UI/UX design, I have hands-on experience throughout the entire software development lifecycle, from user interface design to database modeling and web development. My skills include proficiency in ReactJS, TDD, APIs, responsive design, UX research, UI/UX design and usability testing.",
    location: "Fortaleza/CE, Brazil",
    contact: "Contact",
  },
};

function AboutMe() {

  const { language } = useLanguage();
  const { section, greeting, description, location, contact } = translations[language];

  return (
    <div className='aboutme-container' id="about">
      <div className='aboutme'>
        {/* <h3>{section}</h3> */}
        <h4>{greeting}</h4>
        <p>{description}</p>
        <div className='links'>
          <a href='https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/'>LinkedIn</a>
          <a href='https://github.com/ThamiStoppelli'>GitHub</a>
        </div>
        {/* baixar pdf do resume */}
      </div>
      <div className='image-card'>
        <img src={image} alt='imagem' className='me'></img>
        <div className='info-card'>
          <p id='contact'>{contact}</p>
          <div className='each'>
            <img src={locationIcon}/>
            <p>{location}</p>
          </div>
          <div className='each'>
            <img src={mailIcon}/>
            <p>thamiresstoppelli@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
