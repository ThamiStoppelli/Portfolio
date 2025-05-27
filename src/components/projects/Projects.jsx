import React,{ useState } from 'react'
import useTranslation from '../../hooks/useTranslation';
import './Projects.css'

/* criar paginação */

function Projects() {
  const { projects, previous, next } = useTranslation('projects');
  const projectsList = [1, 2, 3, 4, 5]

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
