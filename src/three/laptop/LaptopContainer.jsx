import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { LaptopScene } from './LaptopScene';
import styled from 'styled-components';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function BloomContainer({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );

  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass
          attachArray="passes"
          args={[undefined, 0.4, 0.1, 0.7]}
        />
      </effectComposer>
    </>
  );
}

const Laptop = ({ mouseX, mouseY }) => {
  return (
    <ShapesContainer>
      <Container>
        <Canvas gl={{ logarithmicDepthBuffer: true }} dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
          <Suspense fallback={null}>
            <BloomContainer>
              <LaptopScene mouseX={mouseX} mouseY={mouseY} />
            </BloomContainer>
          </Suspense>
        </Canvas>
      </Container>
    </ShapesContainer>
  );
};

const ShapesContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50vw;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  canvas {
    z-index: 10;
  }
  @media only screen and (max-width: 1050px) {
    position: relative;
  }
`;

const Container = styled.div`
  transform: translateY(-4%) translateX(-10%);
  height: 100vh;
  width: 100vw;
  max-height: 900px;
  max-width: ${({ theme }) => theme.maxWidth};
  div {
    overflow: visible !important;
  }
  @media only screen and (max-width: 1050px) {
    width: 100vw;
    transform: translateY(0px);
    height: 60vh;
  }
`;

export default Laptop;
