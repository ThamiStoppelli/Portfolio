import React, { useState } from 'react'
import useTranslation from '../../hooks/useTranslation';

import image from '../../assets/portfolio2.png'
// import image from '../assets/teste5.png'
import locationIcon from '../../assets/location.svg'
import mailIcon from '../../assets/mail.svg'
import './AboutMe.css'

function AboutMe() {
  const { section, greeting, description, location, contact } = useTranslation('aboutMe');

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
