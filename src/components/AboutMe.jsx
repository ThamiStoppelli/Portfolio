import React from 'react'
import { useState } from 'react'
import image from '../assets/thami2.png'
import './AboutMe.css'

function AboutMe() {
    const [greeting, setGreeting] = useState("Oi, eu sou a Thamires!");
    const [description, setDescription] = useState("Atuando como desenvolvedora front-end e UI/UX designer, possuo experiência com desenvolvimento de softwares desde o design das interfaces até o desenvolvimento front-end e back-end da aplicação com modelagem do banco de dados, destacando habilidades com ReactJS, TDD, consumo de APIs e responsividade.");

  return (
    <div className='aboutme-container'>
      <div className='aboutme'>
        <h3>About me</h3>
        <h4>{greeting}</h4>
        <p>{description}</p>
        {/* baixar pdf do resume */}
      </div>
      <div>
        <img src={image} alt='imagem'></img>
      </div>
    </div>
  )
}

export default AboutMe
