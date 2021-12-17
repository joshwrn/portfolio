import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, softShadows } from '@react-three/drei';

import * as THREE from 'three';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export function Lights() {
  return (
    <>
      <spotLight
        castShadow
        color="#ffffff"
        position={[-10, -10, -10]}
        intensity={0.3}
      />
    </>
  );
}

export default function Model({ openLaptop, setOpenLaptop, ...props }) {
  const group = useRef();
  const screen = useRef();
  const { nodes, materials } = useGLTF('../../laptop/scene.gltf');
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
    delay: 450,
    rotation: openLaptop
      ? [Math.PI, 0, -Math.PI]
      : [Math.PI + 1.59, 0, -Math.PI],
  });

  useFrame(({ clock }) => {
    group.current.position.y = Math.sin(clock.getElapsedTime() * 1) * 0.4 - 5;
  });

  return (
    <group
      scale={[2.6, 2.6, 2.6]}
      rotation={[6.9, -0.5, 0]}
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
              setOpenLaptop(!openLaptop);
            }}
            ref={screen}
            position={[0, -5.65, -10.3]}
            rotation={openLaptopAnimation.rotation}
            scale={[100, 100, 88.24]}
          >
            <Lights />
            <mesh
              geometry={nodes.Screen_ComputerScreen_0.geometry}
              material={materials.ComputerScreen}
            />
          </animated.group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../../laptop/scene.gltf');
