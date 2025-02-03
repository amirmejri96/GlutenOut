import React from 'react'
import { useState } from 'react';
import './Regime.css'

const Regime = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { title: "Lait et produits laitiers", content: "• Lait : ", content1: "• Yaourt : Délice Danone ( Nature ) / Activia ( Activia 0% - Activia bifidus - Activia aux fruits ) / Délice ( Danup à boire - Danao - Delimix - Twist - Petit suisse - Jockey nature - Délice creamy - Délice danone à boire - Délice aux fruits - Délishake ) / Vitalait ( Nature - Aromatisé - Mamzouj aux fruits 0% ) / Y'AB (  Nature - Arômatsé  - Biparfumé - Brassé - Playa-TipTop ) / Thelja ( Tip top brassé - Fruit top - Tip top yaourt à boire ) / ", content2: "• Fromage : " },
    { title: "Sucres et sucreries", content: "Sac Simple", content1: "Sac Haut De Gamme" },
    { title: "Fruits et fruits secs", content: "Nettoyage Gilet Moto", content1: "Casque Moto", content2: "Gant Moto" },
    { title: "Légumes et légumes secs", content: "Chaise Voiture", content1: "Chaise enfant", content2: "MaxiCosi" },
    { title: "Boissons", content: "Nettoyage Basket Simple", content1: "Nettoyage Bottine", content2: "Nettoyage Haut De Gamme" },
    { title: "Légumes verts et tomates en conserve", content: "Sac Simple", content1: "Sac Haut De Gamme" },
    { title: "Lipides", content: "Nettoyage Gilet Moto", content1: "Casque Moto", content2: "Gant Moto" },
    { title: "Céréales et dérivés", content: "Chaise Voiture", content1: "Chaise enfant", content2: "MaxiCosi" },
    { title: "Viandes", content: "Nettoyage Basket Simple", content1: "Nettoyage Bottine", content2: "Nettoyage Haut De Gamme" },
    { title: "Autres aliments", content: "Sac Simple", content1: "Sac Haut De Gamme" },
  ];

  const [aactiveIndex, setAactiveIndex] = useState(null);

  const ttoggleAccordion = (iindex) => {
    setAactiveIndex(aactiveIndex === iindex ? null : iindex);
  };

  const daata = [
    { title: "Lait et produits laitiers", content: "• Lait", content1: "• Yaourt", content2: "• Fromage" },
    { title: "Sucres et sucreries", content: "Sac Simple", content1: "Sac Haut De Gamme" },
    { title: "Fruits et fruits secs", content: "Nettoyage Gilet Moto", content1: "Casque Moto", content2: "Gant Moto" },
    { title: "Légumes et légumes secs", content: "Chaise Voiture", content1: "Chaise enfant", content2: "MaxiCosi" },
    { title: "Boissons", content: "Nettoyage Basket Simple", content1: "Nettoyage Bottine", content2: "Nettoyage Haut De Gamme" },
    { title: "Légumes verts et tomates en conserve", content: "Sac Simple", content1: "Sac Haut De Gamme" },
    { title: "Lipides", content: "Nettoyage Gilet Moto", content1: "Casque Moto", content2: "Gant Moto" },
    { title: "Céréales et dérivés", content: "Chaise Voiture", content1: "Chaise enfant", content2: "MaxiCosi" },
    { title: "Viandes", content: "Nettoyage Basket Simple", content1: "Nettoyage Bottine", content2: "Nettoyage Haut De Gamme" },
    { title: "Autres aliments", content: "Sac Simple", content1: "Sac Haut De Gamme" },
  ];
  return (
    <section id='régimes' className='regime'>
      <h2>La liste des aliments autorisés et interdits</h2>
      <div className='autorisé'>
        <h4>• Les aliments autorisés :</h4>
        {data.map((item, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.title}</h3>
              <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>
                &#9654;
              </span>
            </div>

            <div
              className="accordion-content"
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <div className="content-row">
                <span className="content-title">{item.content}</span>
              </div>
              {item.content1 && (
                <div className="content-row">
                  <span className="content-title">{item.content1}</span>
                </div>
              )}
              {item.content2 && (
                <div className="content-row">
                  <span className="content-title">{item.content2}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='non-autorisé'>
        <h4>• Les aliments interdits :</h4>
        {daata.map((iitem, iindex) => (
          <div className="accordion" key={iindex}>
            <div
              className="accordion-header"
              onClick={() => ttoggleAccordion(iindex)}
            >
              <h3>{iitem.title}</h3>
              <span className={`icon ${aactiveIndex === iindex ? 'rotate' : ''}`}>
                &#9654;
              </span>
            </div>

            <div
              className="accordion-content"
              style={{ display: aactiveIndex === iindex ? 'block' : 'none' }}
            >
              <div className="content-row">
                <span className="content-title">{iitem.content.split(".....................")[0]}</span>
              </div>
              {iitem.content1 && (
                <div className="content-row">
                  <span className="content-title">{iitem.content1.split("...................................")[0]}</span>
                </div>
              )}
              {iitem.content2 && (
                <div className="content-row">
                  <span className="content-title">{iitem.content2.split("................")[0]}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Regime