import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
