import React from 'react'
import './Contamination.css'

const Contamination = () => {
  return (
    <section className='contamination'>
        <h2>La contamination croisée</h2>
        <h4>Comment éviter la contamination ?</h4>
        <p>
        • Séparation stricte des produits contenant du gluten et des produits sans gluten. <br/>
        • Se laver soigneusement les mains, bien nettoyer les instruments de cuisine et les surfaces de travail avant de manipuler les produits sans gluten. <br/>
        • Réserver une planche sans gluten. <br/>
        • Ne pas cuire dans un four à air pulsé ou ventilé des produits contenant du gluten avec des produits sans gluten. <br/>
        • Ne pas utiliser d'eau de cuisson ou d'huile de friture déjà utilisée pour des aliments contenant du gluten. <br/>
        • Prévoir un moulin et distributeur à céréales réservés pour les céréales sans gluten. <br/>
        • Lors de la préparation du couscous par exemple ne faites pas bouillir le couscous avec gluten sur la sauce. <br/> 
        • Préparer les repas sans gluten en premier : Si vous préparez un repas avec et sans gluten en même temps commencez toujours par les plats sans gluten pour éviter que des miettes de gluten ne contaminent pas les aliments sans gluten. <br/> 
        • Cuisinier avec des outils dédiés : par exemple les cuillères en bois, les mixeurs peuvent être difficiles à nettoyer correctement après avoir été en contact avec du gluten.
        </p>
        <h5>⚠️ Attention aux médicaments !!!!</h5>
        <div className='image flex'>
          <img src='../../../assets/doliprane500 png.png' alt='Doliprane_500' />
          <img src='../../../assets/Doliprane1000 png.png' alt='Doliprane_1000' />
        </div>
        <div className='image flex'>
          <img src='../../../assets/tardyferonB9 png.png' alt='Tardyferon_B9' />
          <img src='../../../assets/tardyferon80 png.png' alt='Tardyferon_80' />
        </div>
    </section>
  )
}

export default Contamination