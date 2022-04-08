import { Suspense, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

import Camera from '../reusable/MovableCamera';
import LowHeart from './LowHeart';

import styled from 'styled-components';

const InnerContainer = ({ mouseX, mouseY }) => {
  const heartRef = useRef();
  const heartRefTwo = useRef();

  useFrame(() => {
    heartRef.current.position.y <= -250
      ? (heartRef.current.position.y = 250)
      : (heartRef.current.position.y -= 0.3);
    heartRefTwo.current.position.y <= -250
      ? (heartRefTwo.current.position.y = 250)
      : (heartRefTwo.current.position.y -= 0.3);
  });

  return (
    <>
      <Camera mouseX={mouseX} mouseY={mouseY} fov={65} />
      <group ref={heartRefTwo} position={[0, 250, 0]}>
        <Float speed={1.4} rotationIntensity={1} floatIntensity={50}>
          <LowHeart scale={16} position={[-60, 0, -20]} />
        </Float>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={20}>
          <LowHeart
            heartRef={heartRef}
            scale={16}
            position={[30, 30, -100]}
            rotation={[0, 0, -0.2]}
          />
        </Float>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={20}>
          <LowHeart
            heartRef={heartRef}
            scale={16}
            position={[150, -90, -90]}
            rotation={[0, 0, -0.3]}
          />
        </Float>
      </group>
      <group ref={heartRef}>
        <Float speed={1.4} rotationIntensity={1} floatIntensity={50}>
          <LowHeart scale={16} position={[-60, 0, -20]} />
        </Float>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={20}>
          <LowHeart
            heartRef={heartRef}
            scale={16}
            position={[30, 30, -100]}
            rotation={[0, 0, -0.2]}
          />
        </Float>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={20}>
          <LowHeart
            heartRef={heartRef}
            scale={16}
            position={[150, -90, -90]}
            rotation={[0, 0, -0.3]}
          />
        </Float>
      </group>
    </>
  );
};

const FooterScene = ({ mouseX, mouseY }) => {
  return (
    <ShapesContainer>
      <Gradient />
      <Container>
        <Suspense fallback={null}>
          <Canvas dpr={1} resize={{ scroll: false, offsetSize: true }}>
            <InnerContainer mouseX={mouseX} mouseY={mouseY} />
          </Canvas>
        </Suspense>
      </Container>
    </ShapesContainer>
  );
};

const Gradient = styled.div`
  min-width: 100%;
  height: 50vh;
  width: 100vw;
  top: 0;
  background: linear-gradient(180deg, black 1%, rgba(0, 0, 0, 0) 30%);
  position: absolute;
  pointer-events: none;
  z-index: 5;
`;

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
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 1080px;
`;

export default FooterScene;
