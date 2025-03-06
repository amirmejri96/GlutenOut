import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href='#home'> {t("Accueil")} </a></li>
        <li><a href='#about'> {t("À propos")} </a></li>
        <li><a href='#régimes'> {t("Régimes")} </a></li>
        <li><a href='#Contact'> {t("Contact")} </a></li>
      </ul>
      <p>© 2025 Amir Mejri, all right reserved.</p>
    </footer>
  )
}

export default Footer