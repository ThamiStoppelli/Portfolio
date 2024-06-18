import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext';

import logo from '../assets/logo TS.svg'
import globe from '../assets/globe.svg'
import './Header.css'

function Header() {

  const { toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setDropdownOpen(false);
  }

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
        <div className="language-selector">
          <img src={globe} alt="idiomas" onClick={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <div className="dropdown">
              <div onClick={() => handleLanguageChange('pt')}>Português</div>
              <div onClick={() => handleLanguageChange('en')}>English</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
