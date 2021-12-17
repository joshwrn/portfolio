import { motion } from 'framer-motion/three';
import { MotionConfig } from 'framer-motion';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { transition } from './settings';
import { Canvas, useThree, extend } from '@react-three/fiber';
import { useSmoothTransform } from './use-smooth-transform';
import { useSpring, animated } from '@react-spring/three';
import LaptopModel from './laptopModel';
import { useFrame } from '@react-three/fiber';
import { softShadows, Loader, OrbitControls } from '@react-three/drei';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { AmbientLight } from 'three';

import { useTheme } from 'styled-components';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Bloom({ children }) {
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
          args={[undefined, 0.5, 0.1, 0.8]}
        />
      </effectComposer>
    </>
  );
}

function Main({ children }) {
  const scene = useRef();
  const { gl, camera } = useThree();
  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene.current, camera);
  }, 2);
  return <scene ref={scene}>{children}</scene>;
}

export const Shapes = ({ mouseX, mouseY, openLaptop, setOpenLaptop }) => {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  const theme = useTheme();

  const config = {
    mass: 1,
    tension: 270,
    friction: 80,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };
  const openLaptopAnimation = useSpring({
    config: config,
    delay: 700,
    scale: openLaptop ? [20, 20, 20] : [0, 0, 0],
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 100] }}
      shadows
      dpr={2}
      resize={{ scroll: false, offsetSize: true }}
    >
      <Bloom>
        <ambientLight intensity={0.1} />
        <LaptopModel openLaptop={openLaptop} setOpenLaptop={setOpenLaptop} />

        {/* laptop */}

        <motion.group
          center={[0, 0, 0]}
          position={[10, 10, -1]}
          rotation={[lightRotateX, lightRotateY, 0]}
        >
          <Lights />
        </motion.group>
        {/* <ambientLight intensity={0.4} /> */}
        <animated.group
          initial={false}
          dispose={null}
          position={[-5, 5, 0]}
          scale={openLaptopAnimation.scale}
        >
          <Sphere />
          <Cone />
          <Torus />
          <Icosahedron />
        </animated.group>
      </Bloom>
    </Canvas>
  );
};

export function Lights() {
  return (
    <>
      <pointLight
        distance={70}
        color="#61dafb"
        position={[-10, -10, -10]}
        intensity={0.2}
      />
      <pointLight
        distance={70}
        color="#61dafb"
        position={[-10, 0, 15]}
        intensity={0.8}
      />
      <pointLight
        distance={70}
        color="#61dafb"
        position={[-5, 20, 2]}
        intensity={0.5}
      />
      <pointLight
        distance={70}
        color="#f2056f"
        position={[15, 10, -2]}
        intensity={2}
        castShadow
      />
      <pointLight
        distance={70}
        color="#f2056f"
        position={[15, 10, 5]}
        intensity={1}
      />
      <pointLight
        distance={70}
        color="#b107db"
        position={[5, -10, 5]}
        intensity={0.8}
      />
    </>
  );
}

export function Cone() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      0.25 + Math.sin(clock.getElapsedTime() * 0.5) * 0.125;
  });
  return (
    <mesh
      onClick={() => console.log('click')}
      ref={shape}
      castShadow
      position={[-1.3, 0.4, -1.5]}
      rotation={[-0.5, 0, -0.3]}
      variants={{
        hover: {
          z: 1.1,
          x: -1.5,
          rotateX: -0.2,
          rotateZ: 0.4,
        },
      }}
    >
      <coneGeometry args={[0.3, 0.6, 20]} />
      <Material />
    </mesh>
  );
}

export function Sphere() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      -0.1 + Math.cos(clock.getElapsedTime() * 0.8) * 0.125;
  });
  return (
    <motion.mesh
      castShadow
      ref={shape}
      position={[-0.3, -0.5, 0.1]}
      variants={{ hover: { z: 2 } }}
    >
      <sphereGeometry args={[0.4]} />
      <Material />
    </motion.mesh>
  );
}

export function Torus() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      0.1 + Math.sin(clock.getElapsedTime() * 0.4) * 0.135;
  });
  return (
    <motion.mesh
      ref={shape}
      castShadow
      position={[0.5, 0.4, 0]}
      rotation={[-0.5, 0.5, 0]}
      variants={{
        hover: {
          y: 0.5,
          z: 2,
          rotateY: -0.2,
        },
      }}
    >
      <torusGeometry args={[0.2, 0.1, 10, 50]} />
      <Material />
    </motion.mesh>
  );
}

export function Icosahedron() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y = Math.cos(clock.getElapsedTime() * 0.6) * 0.125;
  });
  return (
    <motion.mesh
      ref={shape}
      castShadow
      scale={[0.75, 0.75, 0.75]}
      position={[1.4, 0, -0.1]}
      rotation-z={0.5}
      variants={{
        hover: {
          x: 1.8,
          z: 0.6,
          y: 0.6,
          rotateZ: -0.5,
        },
      }}
    >
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion.mesh>
  );
}

export function Material() {
  return <meshPhongMaterial color="#535353" specular="#9873ff" shininess={3} />;
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={40}
      position={[0, 0, 137.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
