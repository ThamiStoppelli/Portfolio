import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext';
import useTranslation from '../../hooks/useTranslation';

// import logo from '../assets/logo TS.svg'
import logo from '../../assets/logoTS-lighter.svg'
import globe from '../../assets/globe.svg'
import './Header.css'

function Header() {

  const { toggleLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { aboutMe, resume, projects, contactMe } = useTranslation('header');

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setDropdownOpen(false);
  }

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={logo}></img>
        <h4>Thamires Stoppelli</h4>
      </div>
      <div className="navigation">
        <a href="#about" onClick={() => handleScroll('about')}>{aboutMe}</a>
        <a href="#resume" onClick={() => handleScroll('resume')}>{resume}</a>
        <a href="#projects" onClick={() => handleScroll('projects')}>{projects}</a>
        <button>{contactMe}</button>
        <div className="language-selector">
          <img src={globe} alt="idiomas" onClick={() => setDropdownOpen(!dropdownOpen)} />
          <h4>{currentLanguage}</h4>
          {dropdownOpen && (
            <div className="dropdown">
              <div onClick={() => handleLanguageChange('pt')}>Português</div>
              <div onClick={() => handleLanguageChange('en')}>English</div>
              <div onClick={() => handleLanguageChange('es')}>Español</div>
              <div onClick={() => handleLanguageChange('ko')}>한국어</div>
              <div onClick={() => handleLanguageChange('fr')}>Français</div>
              <div onClick={() => handleLanguageChange('de')}>Deutsch</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
