import Navbar from "./components/navbar/Navbar";
import Accueil from "./pages/1- accueil/Accueil";
import Propos from "./pages/2- a propos/Propos";
import Regime from "./pages/3- regimes/Regime";
import Contamination from './pages/4- contamination/Contamination';
import Etiquetage from "./pages/5- etiquetage/Etiquetage";
import Contact from "./pages/7- contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Accueil/>
      <div className="divider" />
      <Propos/>
      <div className="divider" />
      <Regime/>
      <div className="divider" />
      <Contamination/>
      <div className="divider" />
      <Etiquetage/>
      <div className="divider" />
      <Contact/>
      <div className="divider" />
      <Footer/>
    </div>
  );
}

export default App;
