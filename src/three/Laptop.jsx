import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Shapes } from './Shapes';
import { useFrame } from '@react-three/fiber';
import styled from 'styled-components';

function BloomContainer({ children }) {
  const { gl, camera, size, set } = useThree();
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
              <Shapes
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

const Separator = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ShapesContainer = styled.div`
  --purple: #db07d1;
  --pink: #f2056f;
  --blue: #4700b9;
  position: relative;
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
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 60vw;
  transform: translateY(-50px);
  height: calc(100vh);
`;

const Blush = styled.div`
  position: absolute;
  bottom: -45px;
  width: 250px;
  height: 60px;
  filter: blur(60px);
`;

const Pink = styled(Blush)`
  right: 20px;
  background: var(--purple);
`;

const Blue = styled(Blush)`
  left: 20px;
  background: var(--blue);
`;

export default Laptop;
