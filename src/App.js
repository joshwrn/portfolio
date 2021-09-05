import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="feed">
        <Hero />
        <Portfolio />
        <Skills />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
