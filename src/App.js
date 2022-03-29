import Nav from './components/nav/Nav';
import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/hero/Hero';
import HeroMobile from './components/hero/HeroMobile';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';

import useWindowDimensions from './hooks/useWindowDimensions';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  const [top, setTop] = useState('true');
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState('false');
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (
      width <= 1050 ||
      (width <= 1050 && /Android/i.test(navigator.userAgent)) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      setIsMobile('true');
    } else if (width > 1050) {
      setIsMobile('false');
    }
  }, [height, width]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {isMobile === 'false' && (
        <Nav
          top={top}
          portfolioRef={portfolioRef}
          skillsRef={skillsRef}
          aboutRef={aboutRef}
        />
      )}

      <Feed>
        {isMobile === 'false' ? (
          <Hero setTop={setTop} />
        ) : (
          <HeroMobile setTop={setTop} />
        )}
        <Portfolio portfolioRef={portfolioRef} isMobile={isMobile} />
        <Skills skillsRef={skillsRef} />
        <About aboutRef={aboutRef} isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </Feed>
    </ThemeProvider>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
