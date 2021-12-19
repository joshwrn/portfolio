import { motion } from 'framer-motion/three';
import { useRef } from 'react';
import { extend } from '@react-three/fiber';
import { useSmoothTransform } from './use-smooth-transform';
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
} from '@react-spring/three';
import LaptopModel from './laptopModel';
import { useFrame } from '@react-three/fiber';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

export const Scene = ({ mouseX, mouseY, openLaptop, setOpenLaptop }) => {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  const shapeRef = useSpringRef();
  const config = {
    mass: 2,
    tension: 500,
    friction: 40,
    clamp: openLaptop ? false : true,
    precision: 0.01,
    velocity: 0,
  };
  const openLaptopAnimation = useSpring({
    config: config,
    scale: openLaptop ? [20, 20, 20] : [0, 0, 0],
    ref: shapeRef,
  });
  const laptopScreenRef = useSpringRef();
  const laptopRef = useSpringRef();

  useChain(
    openLaptop ? [laptopScreenRef, shapeRef] : [shapeRef, laptopScreenRef],
    openLaptop ? [0, 0.2] : [0, 0]
  );

  return (
    <>
      <ambientLight intensity={0.15} />
      <LaptopModel
        laptopScreenRef={laptopScreenRef}
        laptopRef={laptopRef}
        openLaptop={openLaptop}
        setOpenLaptop={setOpenLaptop}
      />
      <motion.group
        center={[0, 0, 0]}
        position={[10, 10, -1]}
        rotation={[lightRotateX, lightRotateY, 0]}
      >
        <Lights />
      </motion.group>
      <pointLight
        distance={90}
        decay={2}
        color="#ffffff"
        position={[0, -18, 65]}
        intensity={0.5}
      />
      <animated.group
        initial={false}
        dispose={null}
        position={[-3.5, 4, 3]}
        scale={openLaptopAnimation.scale}
      >
        <Sphere />
        <Cone />
        <Torus />
        <Icosahedron />
      </animated.group>
    </>
  );
};

export function Lights() {
  return (
    <>
      <pointLight
        distance={65}
        color="#7061fb"
        position={[-10, -10, -10]}
        intensity={0.2}
      />
      <pointLight
        distance={65}
        color="#61dafb"
        position={[-10, 0, 15]}
        intensity={0.8}
      />
      <pointLight
        distance={65}
        color="#61dafb"
        position={[-5, 20, 2]}
        intensity={0.5}
      />
      <pointLight
        distance={65}
        color="#b3b3b3"
        position={[15, 10, 5]}
        intensity={1}
      />
      <pointLight
        distance={65}
        color="#ffc16f"
        position={[5, -10, 5]}
        intensity={0.8}
      />
    </>
  );
}

// export function Floor() {
//   const shape = useRef();
//   return (
//     <mesh ref={shape} position={[-1.3, -35.4, -25.5]} rotation={[-0.5, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[400, 400]} />
//       <meshStandardMaterial attach="material" color="#4e4e4e" />
//     </mesh>
//   );
// }

export function Cone() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      -0.25 + Math.sin(clock.getElapsedTime() * 0.5) * 0.125;
  });
  return (
    <mesh
      ref={shape}
      castShadow
      position={[0.35, 0.4, 0.8]}
      rotation={[-0.5, 0, -0.3]}
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
      0.55 + Math.cos(clock.getElapsedTime() * 0.8) * 0.125;
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
      0.8 + Math.sin(clock.getElapsedTime() * 0.4) * 0.135;
  });
  return (
    <motion.mesh
      ref={shape}
      castShadow
      position={[0.5, 0.4, 0]}
      rotation={[-0.5, 0.5, 0]}
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
    >
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion.mesh>
  );
}

export function Material() {
  return <meshPhongMaterial color="#535353" specular="#c0c0c0" shininess={3} />;
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
