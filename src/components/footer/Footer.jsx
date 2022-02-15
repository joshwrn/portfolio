import React from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

//+ icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { ImCodepen } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';

import FooterScene from '../../three/footer/FooterScene';

import styled from 'styled-components';

const Footer = () => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const date = () => {
    return new Date().getFullYear();
  };
  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 5);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 10);
      }}
    >
      <SceneContainer>
        <FooterScene mouseX={mouseX} mouseY={mouseY} />
      </SceneContainer>
      <Inner>
        <Contact>Contact Me.</Contact>
        <Email href="mailto:joshnwarren@gmail.com">joshnwarren@gmail.com</Email>
        <Socials>
          <SocialIcon
            rel="noreferrer"
            target="_blank"
            href="https://github.com/joshwrn"
          >
            <VscGithub size={24} />
          </SocialIcon>
          <SocialIcon
            rel="noreferrer"
            target="_blank"
            href="https://codepen.io/joshwrn"
          >
            <ImCodepen size={24} />
          </SocialIcon>
          <SocialIcon
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/joshwrn"
          >
            <TwitterIcon size={24} />
          </SocialIcon>
          <SocialIcon
            rel="noreferrer"
            target="_blank"
            href="https://instagram.com/joshnwarren"
          >
            <AiOutlineInstagram size={24} />
          </SocialIcon>
        </Socials>
        <Copyright>&copy; 2021- {date()} Josh Warren.</Copyright>
        <Copyright>All rights reserved.</Copyright>
      </Inner>
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
  width: 100%;
  @media only screen and (max-width: 850px) {
    height: 80vh;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

const Contact = styled.p`
  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.main.fontFamily.header};
`;

const Email = styled.a`
  font-size: 1.6rem;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  color: var(--font-color-one);
  transition: color 0.5s;
  margin-top: 5px;
  /* margin-right: 15px; */
  &:hover {
    color: ${({ theme }) => theme.main.hover};
  }
`;

const Socials = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
  z-index: 1;
  /* justify-content: space-between; */
  gap: 25px;
  align-items: center;
`;

const SocialIcon = styled.a`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.main.hover};
  }
`;

const TwitterIcon = styled(FiTwitter)`
  stroke-width: 1.5px;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
`;

export default Footer;
