import logo from './logo.svg';
import './App.css';
import Header from './components/header-components/Header'
import Navbar from './components/navbar-components/Navbar'
import About from './components/information-components/Information'
import Experiences from './components/experiences-components/Experiences';
import Studies from './components/studies-components/Studies';
import Contactme from './components/contactme-components/Contactme';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer-components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experiences />
      {/* <Studies /> */}
      {/* <Portfolio /> */}
      {/* <Contactme /> */}
      {/* <Footer /> */}
    </>
  );
}

