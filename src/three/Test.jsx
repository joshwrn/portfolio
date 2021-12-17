import React from 'react';
import Laptop from './Laptop';
import { Suspense, useState } from 'react';
import { Shapes } from './Shapes';
import { motion, MotionConfig, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Test = () => {
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
      <Suspense fallback={null}>
        <Shapes inView={true} mouseX={mouseX} mouseY={mouseY} />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 10;
  }
  width: 60vw;
  transform: translateY(-50px);
  height: calc(100vh);
  opacity: 1;
`;

export default Test;
