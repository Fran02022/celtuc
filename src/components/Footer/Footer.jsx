import React from 'react'
import './footer.css'
function Footer() {
  return (
  <footer className='footer'>
<div className='footer-info'>
    <h1>Cel-Tuc</h1>
    <p>Iphone Store</p>
</div>
<div className='footer-contact'>
    <h3>Contac Me</h3>
    <p>Info de contacto</p>
</div>
<div className='footer-sns'>
    <div className='design-by'>
        Design By Francisco Padrós
    </div>
    <div className='sns-links'>
        <a href="https://www.linkedin.com/in/franciscopadr%C3%B3s" target='blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
        </a>
        <a href="https://twitter.com/franpadros" target='blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
        </a>
        <a href="https://facebook.com/franciscopadros" target='blank' rel='noreferrer'>
            <i className='fab fa-facebook facebook'></i>
        </a>
    </div>
</div>
  </footer>
  )
}

export default Footer