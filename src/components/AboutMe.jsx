import React from 'react'
import { useState } from 'react'
// import image from '../assets/thami2.png'
import image from '../assets/teste5.png'
import './AboutMe.css'

function AboutMe() {
    const [greeting, setGreeting] = useState("Oi, eu sou a Thamires!");
    const [description, setDescription] = useState("Atuando como desenvolvedora front-end e UI/UX designer, possuo experiência com desenvolvimento de softwares desde o design das interfaces até o desenvolvimento front-end e back-end da aplicação com modelagem do banco de dados, destacando habilidades com ReactJS, TDD, consumo de APIs e responsividade.");

    const handleChangeLanguage = ({language}) => {
      if(language == 'pt') {
        setGreeting("Oi, eu sou a Thamires!");
        setDescription("Atuando como desenvolvedora front-end e UI/UX designer, possuo experiência com desenvolvimento de softwares desde o design das interfaces até o desenvolvimento front-end e back-end da aplicação com modelagem do banco de dados, destacando habilidades com ReactJS, TDD, consumo de APIs e responsividade.");
      } else if (language == 'en') {
        setGreeting("Hi, I'm Thamires!");
        setDescription("As a versatile professional with expertise in both front-end development and UI/UX design, I have hands-on experience throughout the entire software development lifecycle, from user interface design to database modeling and web development. My skills include proficiency in ReactJS, TDD, APIs, responsive design, UX research, UI/UX design and usability testing.");
      }
    }

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
      {/* adicionar funcionalidade de traduzir
      dropdown opcoes de idiomas
      onClick={handleChangeLanguage(evt)}
      */}
    </div>
  )
}

export default AboutMe
