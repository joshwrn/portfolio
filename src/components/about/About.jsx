import React from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Header from '../reusable/Header';
import styled from 'styled-components';

import Laptop from '../../three/laptop/Laptop';

const About = ({ aboutRef }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      }}
    >
      <Inner>
        <Header title="About" headerRef={aboutRef} />
        <SectionContainer>
          <Text>
            Hi, my name is Josh. I'm a 26 year old full stack developer living
            in Northern California. I'm currently looking for a position as a
            junior dev. My past experience has mostly been freelance work, but
            I'm looking to be part of an actual team. I've spent the majority of
            my time during the pandemic studying web design and teaching myself
            how to code. When I'm not coding I like to mess around in Photoshop
            and occasionally I make beats for{' '}
            <AboutLink
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ"
            >
              youtube
            </AboutLink>
            , where I have over 10,000 subscribers.
          </Text>
          <ImageContainer>
            <Laptop mouseX={mouseX} mouseY={mouseY} />
          </ImageContainer>
        </SectionContainer>
      </Inner>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  z-index: 10;
  position: relative;
  @media only screen and (max-width: 850px) {
    padding: 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 50vh;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1050px) {
    justify-content: center;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
  font-size: 1.9rem;
  line-height: 30px;
  z-index: 1;
`;

const AboutLink = styled(Text).attrs({
  as: 'a',
})`
  text-decoration: underline;
`;

export default About;
