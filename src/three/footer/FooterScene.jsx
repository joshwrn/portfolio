import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import Camera from '../reusable/MovableCamera';

import LowHeart from './LowHeart';

import styled from 'styled-components';

const FooterScene = ({ mouseX, mouseY }) => {
  return (
    <ShapesContainer>
      <Container>
        <Suspense fallback={null}>
          <Canvas dpr={1} resize={{ scroll: false, offsetSize: true }}>
            <Camera mouseX={mouseX} mouseY={mouseY} fov={65} />
            <LowHeart scale={16} position={[0, 0, -10]} />
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
