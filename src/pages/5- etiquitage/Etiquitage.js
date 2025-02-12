import React, { useState } from 'react';
import './Etiquitage.css';

const Etiquitage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className='etiquitage'>
      <h2>L'étiquitage</h2>
      <p className='parag1'>⚠️ Il faut acheter que des produits avec le logo SANS GLUTEN : </p>
      <img src='../../../assets/Sans-gluten.jpg' alt='Sans_gluten' />
      <p className='parag2'>⇨ Si le logo est introuvable il vaut mieux décrypter l'étiquette :</p>
      <h5>Exclure les aliments qui contiennent :</h5>
      <p className='parag3'>
        • amylum triciti <br/>
        • Amidon de blé <br/>
        • Acides aminés végétaux <br/>
        • Fibres végétales <br/>
        {!showMore && (
          <button className='read-more' onClick={() => setShowMore(true)}>• Lire plus ﹀</button>
        )}
        {showMore && (
          <>
            • Fécule de blé <br/>
            • gélifiant <br/>
            • Liant protéinique <br/>
            • Malt d'orge <br/>
            • Matières amylacées <br/>
            • Polypeptides <br/>
            • Très faible teneur en gluten <br/>
            • Traces de gluten ou peut contenir du gluten <br/>
            <button className='read-less' onClick={() => setShowMore(false)}>• Lire moins ︿</button>
          </>
        )}
      </p>
    </section>
  );
};

export default Etiquitage;
