import React,{ useState } from 'react'
import { useLanguage } from '../context/LanguageContext';

import './Projects.css'

const translations = {
  pt: {
    projects: "Projetos",
    previous: "Anterior",
    next: "Próximo",
  },
  en: {
    projects: "Projects",
    previous: "Previous",
    next: "Next",
  },
};

/* criar paginação */

function Projects() {

  const { language } = useLanguage();
  const { projects, previous, next } = translations[language];

  return (
    <div id="projects" className='projects-container'>
      <div className='projects'>
        <h3>{projects}</h3>
        <div className='pagination'>
          <div className='page'>{previous}</div>
          <div className='page'>{next}</div>
        </div>
        <div className='list'>
          <div className='card'>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
          <div className='card'>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
          <div className='card'>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
          <div className='card'>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
          <div className='card'>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
