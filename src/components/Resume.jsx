import React from 'react'

import starImg from '../assets/handdrawn-star.png'
import './Resume.css'

function Resume() {
  return (
    <div id="resume">
      {/* <h3>Resume</h3> */}
      <div className='education-container'>
        <h3>Education</h3>
        <div className='education'>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2014-2021</p>
            <div className='school-info'>
              <h4>Universidade de Fortaleza</h4>
              <p>Direito</p>
            </div>
          </div>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2019-2020</p>
            <div className='school-info'>
              <h4>Universidade de Lisboa</h4>
              <p>Faculdade de Direito</p>
            </div>
          </div>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2021-2023</p>
            <div className='school-info'>
              <h4>Universidade de Fortaleza</h4>
              <p>Análise e Desenvolvimento de Sistemas</p>
            </div>
          </div>
        </div>
      </div>
      <div className='experience-container'>
        <h3>Experiência</h3>
        <div className='education'>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2023-Atual</p>
            <div className='school-info'>
              <h4>Desenvolvedora de Sistemas</h4>
              <p>Fortes Innovaro</p>
            </div>
          </div>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2022-2023</p>
            <div className='school-info'>
              <h4>Desenvolvedora Web e Mobile</h4>
              <p>Vortex DTec - Unifor, Fortaleza</p>
            </div>
          </div>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2022-2023</p>
            <div className='school-info'>
              <h4>Bolsista de Iniciação Científica</h4>
              <p>Universidade de Fortaleza, Fortaleza</p>
            </div>
          </div>
          <div className='education-card'>
            <img src={starImg} />
            <p className='ano'>2021-2022</p>
            <div className='school-info'>
              <h4>Designer UI/UX</h4>
              <p>Vortex DTec - Unifor, Fortaleza</p>
            </div>
          </div>
        </div>
      </div>
      <h3>Activities</h3>
    </div>
  )
}

export default Resume
