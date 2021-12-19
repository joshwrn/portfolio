import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Scene } from './Scene';
import { useFrame } from '@react-three/fiber';
import styled from 'styled-components';

function BloomContainer({ children, theme }) {
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

const Laptop = ({ mouseX, mouseY, inView }) => {
  const [openLaptop, setOpenLaptop] = useState(false);
  useEffect(() => {
    if (inView) {
      setOpenLaptop(true);
    } else {
      setOpenLaptop(false);
    }
  }, [inView]);

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
            <BloomContainer>
              <Scene
                openLaptop={openLaptop}
                setOpenLaptop={setOpenLaptop}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </BloomContainer>
          </Canvas>
        </Suspense>
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
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  canvas {
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  @media only screen and (max-width: 1050px) {
    position: relative;
  }
`;

const Container = styled.div`
  width: 60vw;
  transform: translateY(-50px);
  height: 100vh;
  max-height: 1000px;
  @media only screen and (max-width: 1050px) {
    width: 80vw;
    transform: translateY(0px);
    height: 60vh;
  }
`;

export default Laptop;
