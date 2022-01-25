import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import HeroScene from '../../three/hero/HeroScene';

import styled from 'styled-components';

const Hero = ({ setTop }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: 'black';
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
