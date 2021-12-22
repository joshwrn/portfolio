import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { Scene } from './Scene';
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
        <Canvas
          camera={{ position: [0, 0, 100] }}
          dpr={2}
          resize={{ scroll: false, offsetSize: true }}
        >
          <Suspense fallback={null}>
            <BloomContainer>
              <Scene
                openLaptop={openLaptop}
                setOpenLaptop={setOpenLaptop}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </BloomContainer>
          </Suspense>
        </Canvas>
        <Loader
          containerStyles={{ backgroundColor: 'black' }}
          dataStyles={{ display: 'none' }}
        />
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
  transform: translateY(-10%) translateX(-17%);
  height: 100vh;
  width: 100vw;
  max-height: 900px;
  max-width: 1400px;
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
