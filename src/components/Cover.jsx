import React from 'react'
import { useState } from 'react'
// import image from '../assets/thami1.1.png'
import image from '../assets/teste3.png'
import './Cover.css'

function Cover() {

  return (
    <div className='cover-container'>
        <div className='title-portfolio'>
            <h1>PORTFOLIO</h1>
        </div>
        <div className='cover'>
            <div className='quote'>
                <p>Sou apaixonada pela construção de sistemas que solucionem problemas reais através de interfaces bem estruturadas e com excelente usabilidade.</p>
            </div>
            <img src={image} alt='imagem'></img>
            <div className='subtitle-portfolio'>
                <h2>PORTFOLIO</h2>
                <h2>PORTFOLIO</h2>
                <h2>PORTFOLIO</h2>
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
