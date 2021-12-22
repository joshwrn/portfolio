import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion/three';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import styled from 'styled-components';
import LowHeart from './LowHeart';

const FooterScene = () => {
  return (
    <ShapesContainer>
      <Container>
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 100] }}
            shadows
            dpr={2}
            resize={{ scroll: false, offsetSize: true }}
          >
            <ambientLight intensity={0.55} />
            {/* <Sphere /> */}
            <LowHeart scale={[15, 15, 15]} position={[0, 0, -10]} />
            {/* <Lights position={[0, 40, 0]} />
            <Lights position={[0, 10, 0]} /> */}
          </Canvas>
        </Suspense>
      </Container>
    </ShapesContainer>
  );
};

const ShapesContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  canvas {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1050px) {
    position: relative;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 1050px) {
    width: 100vw;
    transform: translateY(0px);
    height: 60vh;
  }
`;

export default FooterScene;
