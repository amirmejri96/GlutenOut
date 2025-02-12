import React from 'react'
import './Accueil.css'

const Accueil = () => {
  return (
    <section id='home' className='accueil'>
      <h1>La maladie cœliaque</h1>
      <p>Mieux la connaître pour la reconnaître. La maladie cœliaque est une pathologie répandue,
         dans laquelle l'ingestion de gluten provoque une réaction inflammatoire inadéquate,
          avec destruction des villosités intestinales. Cause de diarrhées et malabsorptions.
           Le seul traitement curatif à l'heure actuelle est l'éviction totale du gluten de l'alimentation.</p>

      <br/> <br/>
      <div className='accueil-contact flex'>
        <h3>Pour plus d'informations, contactez nous :</h3>
        <button><a href='#Contact'>Contactez-nous</a></button>
      </div>
    </section>
  )
}

export default Accueil