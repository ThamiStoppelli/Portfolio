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
  const currentTranslations = translations[language] || translations['en'];
  const { projects, previous, next } = currentTranslations;
  const projectsList = [1, 2, 3, 4, 5]
  /* fix css */

  return (
    <div id="projects" className='projects-container'>
      <div className='projects'>
        <h3>{projects}</h3>
        <div className='pagination'>
          <div className='page'>{previous}</div>
          <div className='page'>{next}</div>
        </div>
        <div className='list'>
        {projectsList.map((project) => (
          <div className='card' key={project}>
            {/* <img src='' alt='projeto 1'/> */}
          </div>
          )
        )}
        </div>
      </div>
    </div>
  )
}

export default Projects
