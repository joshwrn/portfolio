import React, { useEffect, useRef } from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import FooterScene from '../../three/footer/FooterScene';

import styled from 'styled-components';

const Link = ({ href, children }) => {
  return (
    <div>
      <StyledLink href={href} target="_blank" rel="noreferrer">
        {children}
      </StyledLink>
    </div>
  );
};

const Footer = ({ isMobile }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 5);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 10);
      }}
    >
      {isMobile === 'false' && (
        <SceneContainer>
          <FooterScene mouseX={mouseX} mouseY={mouseY} />
        </SceneContainer>
      )}
      <Center>
        <HeaderContainer>
          <Header>Want to get in touch?</Header>
          <a href="mailto:joshnwarren@gmail.com">
            <Email>joshnwarren@gmail.com</Email>
          </a>
        </HeaderContainer>
      </Center>
      <Bottom>
        <Section>
          <Span>Josh Warren</Span>
          <Span>Portland, Oregon</Span>
          <Span>Ⓒ 2022</Span>
        </Section>

        <Section>
          <Bold>Built with</Bold>
          <Span>React.js, Three.js,</Span>
          <Span>Framer Motion & 🖤</Span>
        </Section>

        <Links>
          <Section>
            <Link href="https://twitter.com/joshwrn">Twitter</Link>
            <Link href="https://instagram.com/joshnwarren">Instagram</Link>
            <Link href="https://www.linkedin.com/in/joshwrn/">LinkedIn</Link>
          </Section>
          <Section>
            <Link href="https://github.com/joshwrn">Github</Link>
            <Link href="https://codepen.io/joshwrn">CodePen</Link>
            <Link href="https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ">
              Youtube
            </Link>
          </Section>
        </Links>
      </Bottom>
    </Container>
  );
};

const SceneContainer = styled.div`
  position: absolute;
  z-index: -2;
`;

const Container = styled(motion.div)`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 1080px;
  width: 100%;
  overflow: hidden;
  padding: 100px 0;
  @media only screen and (max-width: 1050px) {
    height: fit-content;
  }
`;

const Center = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.h1`
  font-size: 6.4rem;
  color: #fff;
  font-family: 'cyrBold';
  text-transform: uppercase;
  @media only screen and (max-width: 1050px) {
    font-size: 2.4rem;
  }
`;

const HeaderContainer = styled.div``;

const Email = styled.h2`
  font-size: 4rem;
  color: rgb(189, 189, 189);
  font-family: 'neueLight';
  text-transform: uppercase;
  @media only screen and (max-width: 1050px) {
    font-size: 2rem;
  }
`;

const Bottom = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  justify-content: space-between;
  bottom: 0;
  @media only screen and (max-width: 1050px) {
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Span = styled.span`
  position: relative;
  font-size: 2.4rem;
  font-family: 'cyrRoman';
`;

const StyledLink = styled.a`
  position: relative;
  font-size: 2.4rem;
  font-family: 'cyrRoman';
  &:hover {
    ::after {
      transform: scaleX(1) translateY(26px);
      transform-origin: left;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(26px);
    transform-origin: right;
    transition: transform 0.5s;
  }
`;

const Bold = styled(Span)`
  font-family: 'cyrBold';
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
`;

export default Footer;
