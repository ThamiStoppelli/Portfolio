import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="contact-section">
          <span>
            <p>Email: thamiresstoppelli@gmail.com</p>
            <p>Telefone: +55 85 91234-5678</p>
          </span>
          <div>
            <a href="https://github.com/SeuGitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github">GitHub</i></a>
            <a href="https://linkedin.com/in/SeuLinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">LinkedIn</i></a>
          </div>
        </div>
      </div>
      <div className="bottom">
        &copy; {new Date().getFullYear()} MeuPortfólio | Todos os direitos reservados
      </div>
    </footer>
  )
}

export default Footer;
