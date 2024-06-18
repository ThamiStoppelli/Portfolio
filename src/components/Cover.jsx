import React from 'react'
import { useState } from 'react'
import image from '../assets/thami1.png'
import './Cover.css'

function Cover() {

  return (
    <div className='cover-container'>
        <div className='cover'>
            <img src={image} alt='imagem'></img>
            <div className='title-portfolio'>
                <h1 className='first-title'>Portfolio</h1>
                <h2>Portfolio</h2>
                <h2>Portfolio</h2>
                <h2>Portfolio</h2>
            </div>
            <div className='links'>
                <a href='https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/'>LinkedIn</a>
                <a href='https://github.com/ThamiStoppelli'>GitHub</a>
            </div>
            {/* baixar pdf do resume */}
        </div>
        <div className='circle-container'>
            <div className='circle'>
                <h4>Scroll<br /> down</h4>
            </div>
        </div>
    </div>
  )
}

export default Cover
