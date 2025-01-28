import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href='#accueil'>Accueil</a></li>
        <li><a href='#a-propos'>A propos</a></li>
        <li><a href='#régimes'>Régimes</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <p>© 2025 Amir Mejri, all right reserved.</p>
    </footer>
  )
}

export default Footer