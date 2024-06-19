import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="contact-section">
          <p>Email: thamires@email.com</p>
          <p>Telefone: +55 85 99000-9000</p>
        </div>
      </div>
      <div className="bottom" id='footer'>
        &copy; {new Date().getFullYear()} MeuPortfólio | Todos os direitos reservados
      </div>
    </footer>
  )
}

export default Footer;
