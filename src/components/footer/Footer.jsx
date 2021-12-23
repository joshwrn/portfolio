import React from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

//+ icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { ImCodepen } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';

import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';

import FooterScene from '../../three/footer/FooterScene';

import styled from 'styled-components';

const Footer = () => {
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
      <SceneContainer>
        <FooterScene mouseX={mouseX} mouseY={mouseY} />
      </SceneContainer>
      <Inner>
        <div>
          <Contact>Contact Me.</Contact>
          <Socials>
            <a href="mailto:joshnwarren@gmail.com">
              <Email>joshnwarren@gmail.com</Email>
            </a>
            <SocialHeader>
              <CgArrowLongLeft size={24} />
              Email Me
            </SocialHeader>
          </Socials>
        </div>
        <Socials>
          <SocialHeader>
            Social Media
            <CgArrowLongRight size={24} />
          </SocialHeader>
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
`;

const Contact = styled.h2`
  font-size: 3.5rem;
`;

const Email = styled.h2`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  color: var(--font-color-one);
  transition: color 0.5s;
  margin-right: 15px;
  &:hover {
    color: ${({ theme }) => theme.main.hover};
  }
`;

const Socials = styled.div`
  margin-top: 10px;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
`;

const SocialHeader = styled.div`
  display: flex;
  gap: 15px;
  font-size: 2rem;
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

export default Footer;
