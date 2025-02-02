import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex'>
            <li><a href='#home'>Accueil</a></li>
            <li><a href='#about'>A propos</a></li>
            <li><a href='#régimes'>Régimes</a></li>
            <li><a href='#Contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar