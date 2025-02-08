import React from 'react'
import { useState } from 'react';
import './Regime.css'

const Regime = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { title: "Lait et produits laitiers", content: "• Lait : Lait maternel / Lait de vache / Lait de chèvre / Lait stérilisé naturel / Lait crémeux / Lait semi-crémeux / Lait concentré ( Avec sucres - Sans sucres ) / Delisso ( Nature - Arômatisé fraise - Chocolat ) ", content1: "• Yaourt : Délice Danone ( Nature ) / Activia ( Activia 0% - Activia bifidus - Activia aux fruits ) / Délice ( Danup à boire - Danao - Delimix - Twist - Petit suisse - Jockey nature - Délice creamy - Délice danone à boire - Délice aux fruits - Délishake ) / Vitalait ( Nature - Aromatisé - Mamzouj aux fruits 0% ) / Y'AB (  Nature - Arômatsé  - Biparfumé - Brassé - Playa-TipTop ) / Thelja ( Tip top brassé - Fruit top - Tip top yaourt à boire ) / Elben / Chambourcy / Yogo / Emmi ( Nature - Aromatisé ) / Stil ( Yaourt nature et aromatisé ) / Natilait ( Yaourt nature - Aromatisé - Yaourt à boire fraise - Vanille - Maxi ) ", content2: "• Fromage : Président ( Triangle - Carré - Rondelet - Les Cuistots maxi fromage fondue - Fromage de chèvre - Pizza mozzarella - Spécial tajine ) / Fromy ( Portions triangulaires - Barquettes - Slices - Carrés - Fromage rapé ) / Land'Or ( Carré gourmand - Ecrémé emmental - Saveur gruyère - Emmental fondu - Cheddar fondu pour tartine - Slice ) / Délice ( Goutta - Fromage triange - Ricotte - Milkana coeur de cuisine ) / Kaiser ( Cheesecake - Emmental gouda - Emmental en cubes - Fromage à tartiner ) " },
    { title: "Sucres et sucreries", content: "• Sucres : Fructose / Gateau sans gluten / Crème fait maison ( Bouza - Zgougou )", content1: "• Sucreries : Biscuit ( Santiveri - Lorio - Gluzen - Glutella - Felder ) / Chocolat ( M&m's - Bounty - Tobleron - Kinder chocolat - Kross - Nestlé - Torras ) / Chocolat à tartiner ( Said - Vanoise - Nouty ) / Levure ( La patissière - Ibn hayen - Dokrem ) / Glace ( Selja - Glace en boite - Boule d'or )" },
    { title: "Fruits et fruits secs", content: "• Fruits : Tous types de fruits frais et surgelés / Jus de fruits fait maison / Jus de fruits ( Tropicana - Délice - Oasis ) / Confiture de fruits fait maison / Confiture de fruits ( Sicam - Sticap - Cap d'or )", content1: "• Fruits secs : Tous types de fruits secs / Tous types de noix ( Amande - Cacahuète ... )"},
    { title: "Légumes verts et légumes secs", content: "• Légumes verts : Tous type de légumes frais et surgelés", content1: "• Légumes secs : Houmous / Haricots / Lentilles / Poivres secs / Frites à la maison / Harissa arabe", content2: "• Autres légumes : Chips ( Golden - Joy's - Franky ) / Salades mechweya ( Cap d'or ) / Sauce pizza ( Sicam ) / Ketchup ( Remia - Chovi1 )" },
    { title: "Boissons", content: "• Eau : Eau minérale / Eau de fleur / Eau naturelle", content1: "• Autres boissons : Soda ( Apla - Boga - Coca - Fanta ) / Thé ( Nature - Aromatisé ) / Café filtre"},
    { title: "Légumes verts et tomates en conserve", content: "• Tomate en conserve : Pâte de tomate ( Sicam - Sticap - Cap d'or - Jouda ) / Sauce tomate ( Carthage - Sicam - Sticap ) / Tomates pelées ( Sicam - Sticap - Jouda ) ", content1: "• Légumes verts en conserve : Salade mechweya ( Cap d'or - Sticap ) / Maïs ( Bonduelle - Sicam ) / Champignons ( Bonduelle - Sicam ) / Haricots verts ( Bonduelle ) / Galbana et carottes ( Bonduelle - Sicam ) " },
    { title: "Lipides", content: "• Tous types d'huile : Pop corn / Huile d'olives", content1: "• Autres lipides : Beurre / Crème fraiche / Margarine ( Goldina - Sol ) / Torchi / Moutarde / Mayonnaise ( Heinz bleu )"},
    { title: "Céréales et dérivés", content: "• Céréales : Riz ( Riz basmati - Riz blanc ) / Pasta ( Spiga - Ibn hayan - Divella - Lorizo ) / Farine ( Ibn hayan - Felder - Gluzen - Lorizo ) / Pop corn ", content1: "• Autres : Sésame / Zgougou / Produits alimentaires sans gluten ( Couscous - Farines )"},
    { title: "Viandes", content: "• Les viandes : Escalope / Mouton / Poissons / Thon en conserve ( Sidi daoued - Manar - Cap d'or ) / Ouefs / Poulet / Foie "},
    { title: "Autres aliments", content: "• Levure : Levure de pain ( La patissière ) / Levure de gateaux", content1: "• Autres : Thym / Poivre noire / Cannelle / Safran / Ail"},
  ];

  const [aactiveIndex, setAactiveIndex] = useState(null);

  const ttoggleAccordion = (iindex) => {
    setAactiveIndex(aactiveIndex === iindex ? null : iindex);
  };

  const daata = [
    { title: "Lait et produits laitiers", content: "• Lait : Lait aromatisé / Lban aromatisé", content1: "• Yaourt : Délice ( Danettes - Brassées - Activia datte noix ) / Vitalait ( Bifi 0% nature et aromatisé - Bifi céréales agrumes 0% - Vitalio - Brassé ) / Dolce ( Dolce crème chocolat - Dolce duo noisette - Dolce liégeois chocolat - Dolce crème caramel - Dolce crème de noisette ) / Y'AB ( Liégeois - A boire 0% - Mousse au chocolat et vanille - Caramel - Y'ab aux fruits à boire - Baklawa - Yogo - Emmi ) / Natilait ( Yaourt brassé ) / Thelja ( Plaisir bouzza )", content2: "• Fromage : Président ( Kids - Fraidoux ) / Fromy ( Cheddar - Gruyère - Mozarella - Goutella aux fines herbes - Nature ) / Land'ore ( Désir light ) / Délice ( Italiano ) / Kaiser ( Ricotta )" },
    { title: "Sucres et sucreries", content: "• Sucres : Biscuit / Gateau / Baklawa", content1: "• Sucreries : Vanoise ( Crème chantilly - Flan chocolat - Crème dessert smart chef ) / Bonbon / Falfoul / Chewing gum / Chocolat ( Said aux céréales - Tris croquant - Millenium au lait - Mars - Kit kat - Kinder bueno - Nouty ) / Glace ( Gold - Twister amigo )" },
    { title: "Fruits et fruits secs", content: "• Fruits : Confiture de fruits en conserve / Jus de fruits en conserve", content1: "• Fruits secs : Noix en conserve / Bonbon rouge en amande ou cacahuète"},
    { title: "Légumes et légumes secs", content: "• Légumes verts : Légumes en conserve", content1: "• Légumes secs : Légumes secs en conserve / Frites dans des sachets", content2: "• Autres légumes : Chips ( Oops - Max pomme de terre )" },
    { title: "Boissons", content: "• Autres boissons : Sirop ( Menthe - Grenadine ) / Soda ( Fanta orange / Schweeps )"},
    { title: "Lipides", content: "• Autres lipides : Moutarde / Mayonnaise ( Remia light - Delicio - Ducros - Jadida ) / Poivres dans des sachets / Sauce salada dans des bouteilles / Margarine ( Jadida )"},
    { title: "Viandes", content: "• Les viandes : Tous types de salami et jambon / Merguez / Viandes hachés en conserve / Poissons ou thon en conserve"},
    { title: "Autres aliments", content: "• Levure : Levure gateau / Levure de pain", content1: "• Autres : Sucre vanille ( Vanoise - Smart chef )" },
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

      <p>Pour en savoir plus sur les aliments autorisés et interdits, veuillez télécharger ce fichier pdf détaillé : </p>
      <div className='btn'>
        <button className="download" onClick={() => {
          const link = document.createElement("a");
          link.href = "/assets/Guide du Régime sans Gluten- ATMC 2023.pdf";
          link.download = "Guide du Régime sans Gluten- ATMC 2023.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}>Télécharger le pdf</button>
      </div>

    </section>
  )
}

export default Regime