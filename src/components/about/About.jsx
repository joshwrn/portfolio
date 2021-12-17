import React from 'react';

import { motion, MotionConfig, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useInView } from 'react-intersection-observer';
import img from '../../assets/images/macbook-1.jpg';
import Header from '../reusable/Header';
import styled from 'styled-components';

import Laptop from '../../three/Laptop';
import Test from '../../three/Test';

const About = () => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const [viewRef, inView] = useInView({
    threshold: 0.1,
  });
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
        <Header title="About" />
        <SectionContainer ref={viewRef}>
          <Text>
            Hi, my name is Josh. I'm a 26 year old full stack developer, looking
            for a position as a junior dev. My past experience has mostly just
            been freelance work but I'm looking to be part of an actual team.
            I've spent most of my time during the pandemic studying web design
            and teaching myself different programming languages. When I'm not
            coding I like to mess around in Photoshop and occasionally I make
            beats for{' '}
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
            <Laptop mouseX={mouseX} mouseY={mouseY} inView={inView} />
          </ImageContainer>
        </SectionContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  opacity: 1;
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
    gap: 100px;
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

const Image = styled.img`
  width: 100%;
  position: absolute;
  transform: scale(1.5);
  filter: ${({ theme }) => theme.about.filter};
`;

const Text = styled.p`
  font-family: haas-roman;
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
