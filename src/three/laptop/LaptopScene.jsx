import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSmoothTransform } from '../reusable/use-smooth-transform';

import LaptopModel from './laptopModel';
import Camera from '../reusable/MovableCamera';

export const LaptopScene = ({ mouseX, mouseY }) => {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <>
      <Camera mouseX={mouseX} mouseY={mouseY} fov={70} />
      <ambientLight intensity={0.15} />
      <LaptopModel />
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
      <group
        initial={false}
        dispose={null}
        position={[-3.5, 4, 3]}
        scale={[20, 20, 20]}
      >
        <Sphere />
        <Cone />
        <Torus />
        <Icosahedron />
      </group>
    </>
  );
};

function Lights() {
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

function Cone() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      -0.25 + Math.sin(clock.getElapsedTime() * 0.5) * 0.125;
  });
  return (
    <mesh ref={shape} position={[0.35, 0.4, 0.8]} rotation={[-0.5, 0, -0.3]}>
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
      cast
      ref={shape}
      position={[-0.3, -0.5, 0.1]}
      variants={{ hover: { z: 2 } }}
    >
      <sphereGeometry args={[0.4]} />
      <Material />
    </motion.mesh>
  );
}

function Torus() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y =
      0.8 + Math.sin(clock.getElapsedTime() * 0.4) * 0.135;
  });
  return (
    <motion.mesh ref={shape} position={[0.5, 0.4, 0]} rotation={[-0.5, 0.5, 0]}>
      <torusGeometry args={[0.2, 0.1, 10, 50]} />
      <Material />
    </motion.mesh>
  );
}

function Icosahedron() {
  const shape = useRef();
  useFrame(({ clock }) => {
    shape.current.position.y = Math.cos(clock.getElapsedTime() * 0.6) * 0.125;
  });
  return (
    <motion.mesh
      ref={shape}
      scale={[0.75, 0.75, 0.75]}
      position={[1.4, 0, -0.1]}
      rotation-z={0.5}
    >
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion.mesh>
  );
}

function Material() {
  return <meshPhongMaterial color="#535353" specular="#c0c0c0" shininess={3} />;
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
