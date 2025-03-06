import React, { useState } from 'react';
import './Etiquetage.css';
import { useTranslation } from 'react-i18next';

const Etiquetage = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();
  return (
    <section className='etiquetage'>
      <h2> {t("L'étiquetage")} </h2>
      <p className='parag1'>⚠️ {t("Il faut acheter que des produits avec le logo SANS GLUTEN :")} </p>
      <img src='../../../assets/Sans-gluten.jpg' alt='Sans_gluten' />
      <p className='parag2'>{t("Si le logo est introuvable il vaut mieux décrypter l'étiquette :")} </p>
      <h5> {t("Exclure les aliments qui contiennent :")} </h5>
      <p className='parag3'>
        • {t("amylum triciti")} <br/>
        • {t("Amidon de blé")} <br/>
        • {t("Acides aminés végétaux")} <br/>
        • {t("Fibres végétales")} <br/>
        {!showMore && (
          <button className='read-more' onClick={() => setShowMore(true)}>• {t("Lire plus ﹀")} </button>
        )}
        {showMore && (
          <>
            • {t("Fécule de blé")} <br/>
            • {t("gélifiant")} <br/>
            • {t("Liant protéinique")} <br/>
            • {t("Malt d'orge")} <br/>
            • {t("Matières amylacées")} <br/>
            • {t("Polypeptides")} <br/>
            • {t("Très faible teneur en gluten")} <br/>
            • {t("Traces de gluten ou peut contenir du gluten")} <br/>
            <button className='read-less' onClick={() => setShowMore(false)}>• {t("Lire moins ︿")}</button>
          </>
        )}
      </p>
    </section>
  );
};

export default Etiquetage;
