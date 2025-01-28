import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex'>
            <li><a href='#accueil'>Accueil</a></li>
            <li><a href='#a-propos'>A propos</a></li>
            <li><a href='#régimes'>Régimes</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar