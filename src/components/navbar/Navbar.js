import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="#home">
            <img src="../../../assets/logo2.png" alt="Logo" className="logo" />
          </a>
        </div>

        <nav>
          <ul className="flex">
            <li><a href="#home">{t('Accueil')}</a></li>
            <li><a href="#about">{t('À propos')}</a></li>
            <li><a href="#régimes">{t('Régimes')}</a></li>
            <li><a href="#Contact">{t('Contact')}</a></li>
          </ul>
        </nav>

        <button className="menu icon-menu" onClick={() => setShowModal(true)} />
      </div>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button onClick={() => setShowModal(false)} className="icon-close" />
            </li>
            <li><a href="#home">{t('Accueil')}</a></li>
            <li><a href="#about">{t('À propos')}</a></li>
            <li><a href="#régimes">{t('Régimes')}</a></li>
            <li><a href="#Contact">{t('Contact')}</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
