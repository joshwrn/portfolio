import './App.css';
import Nav from './components/nav/Nav';
import React, { useState, useEffect } from 'react';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    console.log('top', top);
  }, [top]);

  return (
    <div className="App">
      <Nav top={top} />
      <div className="overlay-gradient"></div>
      <div className="feed">
        <Hero setTop={setTop} />
        <Portfolio />
        <Skills />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
