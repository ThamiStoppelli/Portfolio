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
            <a href="https://github.com/ThamiStoppelli" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="bottom" id='footer'>
        &copy; {new Date().getFullYear()} MeuPortfólio | Todos os direitos reservados
      </div>
    </footer>
  )
}

export default Footer;
