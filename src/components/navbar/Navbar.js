import React from 'react'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header>
      <button className='menu icon-menu' onClick={() => setShowModal(true)} />
      <nav>
        <ul className='flex'>
          <li><a href='#home'>Accueil</a></li>
          <li><a href='#about'>À propos</a></li>
          <li><a href='#régimes'>Régimes</a></li>
          <li><a href='#Contact'>Contact</a></li>
        </ul>
      </nav>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li><button onClick={() => setShowModal(false)} className='icon-close' /></li>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#régimes">Régimes</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>

        </div>
      )}
    </header>
  )
}

export default Navbar