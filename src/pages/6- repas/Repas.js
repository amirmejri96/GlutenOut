// import React from 'react'
// import './Repas.css'

// const Repas = () => {
//   return (
//     <section className='repas'>
//         <h2>Idées de repas sans gluten</h2>
//         <h4>1/ Petit déjeuner : </h4>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/p-dej_1.jpg' alt='p.déj 1' />
//             <p>Omelette (2 œufs) + café + un fruit au choix</p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/p-dej_2.jpg' alt='p.déj 2' />
//             <p>Un bol contenant 1 pot de yaourt autorisé + fruits secs au choix + ½ banane + 5g de beurre de cacahuètes fait maison + 5g graines de chia + 5g graines de lin + 8g de sésame + café</p>
//         </div>
//         <div className='formule'>
//             <div className='images'>
//             <img style={{width:'30%'}} src='../../../assets/p-dej_3.1.jpg' alt='p.déj 3' />
//             <img style={{width:'30%'}} src='../../../assets/p-dej_3.2.jpg' alt='p.déj 3' />
//             </div>
//             <p>Smoothie rassasiant : 1 banane + 1 pomme + lait végétal ou eau + graines de chia + 1 œuf dur</p>
//         </div>
//         <h4>2/ Déjeuner : </h4>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/dej_1.jpg' alt='déj 1' />
//             <p>Riz blanc + champignons frais</p>
//         </div>
//         <div className='formule'>
//             <div className='images'>
//             <img style={{width:'30%'}} src='../../../assets/dej_2.1.jpg' alt='déj 2' />
//             <img style={{width:'30%'}} src='../../../assets/dej_2.2.jpg' alt='déj 2' />
//             </div>
//             <p>Salade de riz nourrissante</p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/dej_3.jpg' alt='déj 3' />
//             <p>Soupe aux lentilles corail  </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/dej_4.jpg' alt='déj 4' />
//             <p>Riz djerbien </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/dej_5.jpg' alt='déj 5' />
//             <p>Lasagne d'aubergine </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/dej_6.jpg' alt='déj 6' />
//             <p>Risotto aux champignons frais </p>
//         </div>
//         <h4>3/ Diner : </h4>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/diner_1.jpg' alt='diner_1' />
//             <p>Poivron farci + salade verte tunisienne </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/diner_2.jpg' alt='diner_2' />
//             <p>Gratin de légumes léger  </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/diner_3.jpg' alt='diner_3' />
//             <p>Brochettes d’agneau + un petit bol de riz  </p>
//         </div>
//         <div className='formule'>
//             <img style={{width:'30%'}} src='../../../assets/diner_4.jpg' alt='diner_4' />
//             <p>Salade de pois chiche grillés : pois chiche rôtis au four + concombre + tomate + oignon rouge + vinaigrette : citron-huile d'olive  </p>
//         </div>
//         <div className='formule'>
//             <div className='images'>
//             <img style={{width:'30%'}} src='../../../assets/diner_5.1.jpg' alt='diner_5' />
//             <img style={{width:'30%'}} src='../../../assets/diner_5.2.jpg' alt='diner_5' />
//             </div>
//             <p>Soupe de betteraves + des pièces de sardine grillés </p>
//         </div>

        


//     </section>
//   )
// }

// export default Repas


import React from 'react';
import './Repas.css';
import { useTranslation } from 'react-i18next';

const Repas = () => {
  const { t } = useTranslation();

  return (
    <section className='repas'>
      <h2>{t('repas.title')}</h2>
      <h4>{t('repas.breakfast.title')}</h4>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/p-dej_1.jpg' alt={t('repas.breakfast.alt1')} />
        <p>{t('repas.breakfast.option1')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/p-dej_2.jpg' alt={t('repas.breakfast.alt2')} />
        <p>{t('repas.breakfast.option2')}</p>
      </div>
      <div className='formule'>
        <div className='images'>
          <img style={{ width: '30%' }} src='../../../assets/p-dej_3.1.jpg' alt={t('repas.breakfast.alt3')} />
          <img style={{ width: '30%' }} src='../../../assets/p-dej_3.2.jpg' alt={t('repas.breakfast.alt3')} />
        </div>
        <p>{t('repas.breakfast.option3')}</p>
      </div>
      <h4>{t('repas.lunch.title')}</h4>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/dej_1.jpg' alt={t('repas.lunch.alt1')} />
        <p>{t('repas.lunch.option1')}</p>
      </div>
      <div className='formule'>
        <div className='images'>
          <img style={{ width: '30%' }} src='../../../assets/dej_2.1.jpg' alt={t('repas.lunch.alt2')} />
          <img style={{ width: '30%' }} src='../../../assets/dej_2.2.jpg' alt={t('repas.lunch.alt2')} />
        </div>
        <p>{t('repas.lunch.option2')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/dej_3.jpg' alt={t('repas.lunch.alt3')} />
        <p>{t('repas.lunch.option3')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/dej_4.jpg' alt={t('repas.lunch.alt4')} />
        <p>{t('repas.lunch.option4')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/dej_5.jpg' alt={t('repas.lunch.alt5')} />
        <p>{t('repas.lunch.option5')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/dej_6.jpg' alt={t('repas.lunch.alt6')} />
        <p>{t('repas.lunch.option6')}</p>
      </div>
      <h4>{t('repas.dinner.title')}</h4>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/diner_1.jpg' alt={t('repas.dinner.alt1')} />
        <p>{t('repas.dinner.option1')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/diner_2.jpg' alt={t('repas.dinner.alt2')} />
        <p>{t('repas.dinner.option2')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/diner_3.jpg' alt={t('repas.dinner.alt3')} />
        <p>{t('repas.dinner.option3')}</p>
      </div>
      <div className='formule'>
        <img style={{ width: '30%' }} src='../../../assets/diner_4.jpg' alt={t('repas.dinner.alt4')} />
        <p>{t('repas.dinner.option4')}</p>
      </div>
      <div className='formule'>
        <div className='images'>
          <img style={{ width: '30%' }} src='../../../assets/diner_5.1.jpg' alt={t('repas.dinner.alt5')} />
          <img style={{ width: '30%' }} src='../../../assets/diner_5.2.jpg' alt={t('repas.dinner.alt5')} />
        </div>
        <p>{t('repas.dinner.option5')}</p>
      </div>
    </section>
  );
};

export default Repas;