import Navbar from "./components/navbar/Navbar";
import Accueil from "./pages/1- accueil/Accueil";
import Propos from "./pages/2- a propos/Propos";
import Regime from "./pages/3- regimes/Regime";
import Contamination from './pages/4- contamination/Contamination';
import Etiquetage from "./pages/5- etiquetage/Etiquetage";
import Contact from "./pages/7- contact/Contact";
import Footer from "./components/footer/Footer";
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="container">
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
    </div>
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Accueil />
    </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Propos />
    </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Regime />
      </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Contamination />
      </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Etiquetage />
      </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Contact />
      </div>
      <div className="divider" />
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Footer />
      </div>
      {/* Sélecteur de langue */}
      <div className="language-switcher">
        <button onClick={() => i18n.changeLanguage('fr')}>🇫🇷 Français</button>
        <button onClick={() => i18n.changeLanguage('ar')}>🇦🇪 العربية</button>
      </div>
    </div>
  );
}

export default App;
