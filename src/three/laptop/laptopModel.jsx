import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export default function Model({
  openLaptop,
  setOpenLaptop,
  laptopScreenRef,
  laptopRef,
  ...props
}) {
  const group = useRef();
  const screen = useRef();
  const { nodes, materials } = useGLTF('../../laptop/scene.gltf');

  // open laptop screen
  const config = {
    mass: 1,
    tension: 490,
    friction: 80,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };
  const openLaptopScreenAnimation = useSpring({
    config: config,
    rotation: openLaptop
      ? [Math.PI, 0, -Math.PI]
      : [Math.PI + 1.59, 0, -Math.PI],
    ref: laptopScreenRef,
  });

  // rotate laptop
  const laptopRotateAnimation = useSpring({
    config: config,
    rotation: openLaptop ? [0.55, -0.5, 0] : [0, 0, 0],
  });

  useFrame(({ clock }) => {
    group.current.position.y = Math.sin(clock.getElapsedTime() * 1) * 0.45 - 5;
  });

  return (
    <animated.group
      scale={[2.6, 2.6, 2.6]}
      rotation={laptopRotateAnimation.rotation}
      position={[-7, 0, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -5.98, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              geometry={nodes.Frame_ComputerFrame_0.geometry}
              material={materials.ComputerFrame}
              receiveShadow
            />
          </group>
          <animated.group
            onClick={() => {
              setOpenLaptop((prev) => !prev);
            }}
            ref={screen}
            position={[0, -5.65, -10.3]}
            rotation={openLaptopScreenAnimation.rotation}
            scale={[100, 100, 88.24]}
          >
            <mesh
              geometry={nodes.Screen_ComputerScreen_0.geometry}
              material={materials.ComputerScreen}
            />
          </animated.group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload('../../laptop/scene.gltf');
