import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useProgress } from '@react-three/drei';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import HeroScene from '../../three/hero/HeroScene';

import Bg from '../../assets/images/Untitled-2.jpg';

import styled from 'styled-components';

const Hero = ({ setTop }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
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

  const [topRef, topView] = useInView({
    threshold: 0.1,
  });

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
      <BackgroundImage progress={progress} src={Bg} />
      <Gradient />
      <HeroScene mouseX={mouseX} mouseY={mouseY} />
    </HeroContainer>
  );
};

const NavRef = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
`;

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: 'black';
  width: 100vw;
  @media only screen and (max-width: 1050px) {
    min-height: 0;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  opacity: ${({ progress }) => (progress === 100 ? 1 : 0)};
  transition: opacity 1s 1s ease-in-out;
  object-fit: cover;
  object-position: top;
`;

const Gradient = styled.div`
  min-width: 100%;
  height: 50vh;
  width: 100vw;
  bottom: 0;
  background: linear-gradient(0deg, black 1%, rgba(0, 0, 0, 0) 90%);
  position: absolute;
  pointer-events: none;
  z-index: 5;
`;

export default Hero;
