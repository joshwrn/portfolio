import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useProgress } from '@react-three/drei';
import Loader from './Loader';

import HeroSceneMobile from '../../three/hero/HeroSceneMobile';

import styled from 'styled-components';

const Hero = ({ setTop }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [topRef, topView] = useInView({
    threshold: 0.1,
  });

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        document.body.classList.remove('stop-scrolling');
      }, 1500);
    } else {
      document.body.classList.add('stop-scrolling');
    }
  }, [progress]);

  useEffect(() => {
    if (topView) {
      setTop('true');
    } else {
      setTop('false');
    }
  }, [topView]);

  return (
    <HeroContainer
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 0.5);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 1);
      }}
    >
      <NavRef ref={topRef} />
      <Loader
        containerStyles={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
        innerStyles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
        }}
        barStyles={{
          width: '20vw',
          maxWidth: '500px',
          minWidth: '150px',
        }}
        dataStyles={{ display: 'none' }}
      />
      <HeaderContainer>
        <Header>Josh Warren</Header>
        <SubHeader>Full Stack Web Developer</SubHeader>
      </HeaderContainer>
      <Gradient />
      <HeroSceneMobile mouseX={mouseX} mouseY={mouseY} />
    </HeroContainer>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  z-index: 2;
  padding: 0 40px;
`;

const Header = styled.p`
  font-size: 5.5rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
`;

const SubHeader = styled(Header)`
  font-size: 2rem;
`;

const NavRef = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
`;

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: 'black';

  min-height: 0;
  min-height: 20vh;
`;

const Gradient = styled.div`
  min-width: 100%;
  height: 30vh;
  width: 100vw;
  background: linear-gradient(0deg, #000000 1%, rgba(0, 0, 0, 0) 20%);
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

export default Hero;
