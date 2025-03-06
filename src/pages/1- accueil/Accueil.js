import React from 'react'
import './Accueil.css'
import { useTranslation } from 'react-i18next';

const Accueil = () => {
  const { t } = useTranslation();
  return (
    <section id='home' className='accueil'>
      <h1>{t('La maladie cœliaque')}</h1>
      <p> {t("Mieux la connaître pour la reconnaître. La maladie cœliaque est une pathologie répandue, dans laquelle l'ingestion de gluten provoque une réaction inflammatoire inadéquate, avec destruction des villosités intestinales. Le seul traitement curatif à l'heure actuelle est l'éviction totale du gluten de l'alimentation.")} </p>

      <br/> <br/>
      <div className='accueil-contact flex'>
        <h3> {t("Pour plus d'informations, contactez nous :")} </h3>
        <button><a href='#Contact'>{t("Contactez-nous")}</a></button>
      </div>
    </section>
  )
}

export default Accueil