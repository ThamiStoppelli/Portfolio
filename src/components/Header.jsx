import React from 'react'
import logo from '../assets/logo TS.svg'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={logo}></img>
        <h4>Thamires Stoppelli</h4>
      </div>
      <div className="navigation">
        <a href="#about">About me</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <button>Contact me</button>
      </div>
    </div>
  )
}

export default Header
