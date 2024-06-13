import React from 'react'
import { useState } from 'react'
import './AboutMe.css'

function AboutMe() {
    const [greeting, setGreeting] = useState("Oi, eu sou a Thamires!");
    const [description, setDescription] = useState("Atuando como desenvolvedora front-end e UI/UX designer, possuo experiência com desenvolvimento de softwares desde o design das interfaces até o desenvolvimento front-end e back-end da aplicação com modelagem do banco de dados, destacando habilidades com ReactJS, TDD, consumo de APIs e responsividade.");

  return (
    <div className='aboutme'>
      <h3>About me</h3>
      <h4>{greeting}</h4>
      <p>{description}</p>
      <div className='links'>
        <a href='https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/'>LinkedIn</a>
        <a href='https://github.com/ThamiStoppelli'>GitHub</a>
      </div>
      {/* baixar pdf do resume */}
    </div>
  )
}

export default AboutMe
