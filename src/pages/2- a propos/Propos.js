import React from 'react'
import './Propos.css'

const Propos = () => {
  return (
    <section id='about'>
      <div className='a-propos'>
        <h2>C'est quoi la maladie cœliaque ?</h2>
        <p>La maladie cœliaque est une maladie inflammatoire intestinale, secondaire à l'ingestion de gluten,
          survenant chez des patients génétiquement prédisposés
          La consommation de gluten est responsable de la destruction des villosités intestinales,
          qui assurent l'absorption des nutriments et des vitamines. La réaction immunitaire excessive vis-à-vis du gluten,
          provoque une inflammation chronique.
          La maladie peut être découverte à tous les stades de la vie mais est souvent diagnostiquée
          dans l'enfance ou entre 20 et 40 ans.</p>
        <img src='../../../assets/disease.jpg' alt='La maladie coelique' />
        <h4>C'est quoi le gluten ?</h4>
        <p>Le gluten est une protéine qui se retrouve dans certaines céréales. Il contribue à la texture des
          produits de boulangerie et autres produits dans lesquels il est utilisé.</p>
        <div className='cereales'>
        <p>⚠️ Céréales contenant du gluten : <br />
          S : Seigle <br />
          A : Avoine régulière (contaminée) <br />
          B : Blé <br />
          O : Orge <br />
          T : Triticale (croisement du blé et du seigle)</p>
        <img src='../../../assets/cereales.jpg' alt='Céréales_avec_Gluten' />
        </div>

        <h4>Quels sont les symptômes ?</h4>
        <p>
          • Selles pâles et nauséabondes <br />
          • Impact sur le cycle menstruel <br />
          • Anémie ferriprive <br />
          • Autres carences nutritionnelles : vitamine D, folates, vitamine B12, magnésium
        </p>

        <div className='symptome-images'>
        <img src='../../../assets/Symptome 1.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 2.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 3.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 4.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 5.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 6.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 7.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 8.jpg' alt='Symptôme' />
        <img src='../../../assets/Symptome 9.jpg' alt='Symptôme' />
        </div>

      </div>

    </section>
  )
}

export default Propos