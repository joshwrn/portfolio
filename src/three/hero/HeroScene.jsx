import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Text, Float, Loader } from '@react-three/drei';

import BalloonModel from './BalloonModel';
import Camera from '../reusable/MovableCamera';

import styled from 'styled-components';

const HeroText = ({ text, position }) => {
  return (
    <Text
      position={position}
      letterSpacing={-0.01}
      font="/fonts/HelveticaNeueCyr-Roman.otf"
      fontSize={12}
      color="white"
      material-toneMapped={false}
      material-fog={false}
      anchorX="left"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const HeroScene = ({ mouseX, mouseY }) => {
  return (
    <ShapesContainer>
      <Container>
        <Suspense fallback={null}>
          <Canvas dpr={1} resize={{ scroll: false, offsetSize: true }}>
            <Camera mouseX={mouseX} mouseY={mouseY} fov={50} cameraZ={200} />
            <ambientLight intensity={1.55} />
            <group position={[0, 35, 0]}>
              <HeroText text="Josh Warren" position={[-60, 0, 20]} />
              <HeroText
                text="Fullstack Web Developer."
                position={[-60, -12, 20]}
              />
              {/* left */}
              <Float speed={0.7} rotationIntensity={0.1} floatIntensity={10}>
                <BalloonModel
                  scale={5.1}
                  position={[-57, -10, -10]}
                  rotation={[0, 0.2, -5.5]}
                />
              </Float>
              {/* top */}
              <Float speed={1} rotationIntensity={0.5} floatIntensity={25}>
                <BalloonModel
                  scale={7}
                  position={[5, 5, -5]}
                  rotation={[0, 0.2, -0.1]}
                />
              </Float>
              {/* right */}
              <Float speed={0.5} rotationIntensity={0.1} floatIntensity={20}>
                <BalloonModel
                  scale={5}
                  position={[60, -25, -5]}
                  rotation={[-0.1, 0.2, 5.9]}
                />
              </Float>
              {/* bottom */}
              <Float speed={0.8} rotationIntensity={0.1} floatIntensity={25}>
                <BalloonModel
                  scale={3.8}
                  position={[0, -48, 30]}
                  rotation={[0, 0, 0.45]}
                />
              </Float>
              {/* background balloons */}
              <BalloonModel
                scale={3}
                position={[105, -75, -20]}
                rotation={[-0.1, 0.2, 5.3]}
              />
              <BalloonModel
                scale={3}
                position={[-80, -65, -20]}
                rotation={[-0.1, 0.2, 0.5]}
              />
            </group>
            {/* <pointLight
              distance={90}
              decay={2}
              color="#ffffff"
              position={[0, -18, 65]}
              intensity={10.5}
            /> */}
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
  height: 150vh;
  @media only screen and (max-width: 850px) {
    width: 100vw;
    transform: translateY(0px);
    height: 50vh;
  }
`;

export default HeroScene;
