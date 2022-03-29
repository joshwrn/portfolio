import Nav from './components/nav/Nav';
import React, { useState, useRef } from 'react';
import Hero from './components/hero/Hero';
import HeroMobile from './components/hero/HeroMobile';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  const [top, setTop] = useState('true');
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  console.log(isMobile);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {!isMobile && (
        <Nav
          top={top}
          portfolioRef={portfolioRef}
          skillsRef={skillsRef}
          aboutRef={aboutRef}
        />
      )}

      <Feed>
        {!isMobile ? <Hero setTop={setTop} /> : <HeroMobile setTop={setTop} />}

        <Portfolio portfolioRef={portfolioRef} />
        <Skills skillsRef={skillsRef} />
        <About aboutRef={aboutRef} />
        <Footer />
      </Feed>
    </ThemeProvider>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
