import Nav from './components/nav/Nav';
import React, { useState } from 'react';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  const [top, setTop] = useState('true');
  const [currentTheme, setCurrentTheme] = useState('dark');

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Nav
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        top={top}
      />
      <Feed>
        <Hero setTop={setTop} />
        <Portfolio />
        <Skills />
        <About />
        <Footer />
      </Feed>
    </ThemeProvider>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

export default App;
