import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext';

import starImg from '../assets/handdrawn-star.png'
import './Resume.css'

const translations = {
  pt: {
    education: "Educação",
    skills: "Habilidades técnicas",
    experience: "Experiência",
    activities: "Certificações",
    hobbies: "Hobbies & Interesses",
    languages: "Idiomas",
    english: "Inglês",
    portuguese: "Português",
    spanish: "Espanhol",
    korean: "Coreano",
    fluent: "Fluente",
    intermediate: "Intermediate",
  },
  en: {
    education: "Education",
    skills: "Technical skills",
    experience: "Experience",
    activities: "Activities",
    hobbies: "Hobbies & Interests",
    languages: "Languages",
    english: "English",
    portuguese: "Portuguese",
    spanish: "Spanish",
    korean: "Korean",
    fluent: "Fluent",
    intermediate: "Intermediate",
  },
};

function Resume() {
  const { language } = useLanguage();
  const { education, skills, experience, activities, hobbies, languages, english, portuguese, spanish, korean, fluent, intermediate } = translations[language];

  return (
    <div id="resume">
      <div className='first-block'>
        <div className='education-container'>
          <h3>{education}</h3>
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
        <div className='skills-container'>
          <h3>{skills}</h3>
        </div>
      </div>
      <div className='experience-container'>
        <h3>{experience}</h3>
        <div className='work'>
          <div className='work-card'>
            <img src={starImg} />
            <p className='ano'>2023-Atual</p>
            <div className='work-info'>
              <h4>Desenvolvedora de Sistemas</h4>
              <p>Fortes Innovaro</p>
            </div>
          </div>
          <div className='work-card'>
            <img src={starImg} />
            <p className='ano'>2022-2023</p>
            <div className='work-info'>
              <h4>Desenvolvedora Web e Mobile</h4>
              <p>Vortex DTec - Unifor, Fortaleza</p>
            </div>
          </div>
          <div className='work-card'>
            <img src={starImg} />
            <p className='ano'>2022-2023</p>
            <div className='work-info'>
              <h4>Bolsista de Iniciação Científica</h4>
              <p>Universidade de Fortaleza, Fortaleza</p>
            </div>
          </div>
          <div className='work-card'>
            <img src={starImg} />
            <p className='ano'>2021-2022</p>
            <div className='work-info'>
              <h4>Designer UI/UX</h4>
              <p>Vortex DTec - Unifor, Fortaleza</p>
            </div>
          </div>
        </div>
        {/* <div className='bg-experience'></div> */}
      </div>
      <div className='second-block'>
        <div className='languages-container'>
          <h3>{languages}</h3>
          <div className='list'>
            <div className='language'>
              <h4>{portuguese}</h4>
              <p>{fluent}</p>
            </div>
            <div className='language'>
              <h4>{english}</h4>
              <p>{fluent}</p>
            </div>
            <div className='language'>
              <h4>{spanish}</h4>
              <p>{intermediate}</p>
            </div>
            <div className='language'>
              <h4>{korean}</h4>
              <p>{intermediate}</p>
            </div>
          </div>
        </div>
        <div className='activities-container'>
          <h3>{activities}</h3>
          <div className='education'>
            <div className='education-card'>
              <img src={starImg} />
              <p className='ano'>2022</p>
              <div className='school-info'>
                <h4>2º Lugar Global Legal Hackathon 2022</h4>
                <p>Ninna Hub, Fortaleza</p>
              </div>
            </div>
            <div className='education-card'>
              <img src={starImg} />
              <p className='ano'>2022</p>
              <div className='school-info'>
                <h4>React Native: Iniciando com Expo</h4>
                <p>ElDorado</p>
              </div>
            </div>
          </div>
        </div>
        <div className='hobbies-container'>
          <h3>{hobbies}</h3>
          <div className='list'>
            <p>Arte</p>
            <p>Cheerleading</p>
            <p>Vôlei</p>
            <p>Viagens/Leitura</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
