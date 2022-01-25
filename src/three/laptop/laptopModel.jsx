import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const screen = useRef();
  const { nodes, materials } = useGLTF('../../laptop/scene.gltf');

  useFrame(({ clock }) => {
    group.current.position.y = Math.sin(clock.getElapsedTime() * 1) * 0.45 - 5;
  });

  return (
    <group
      scale={[2.6, 2.6, 2.6]}
      rotation={[0.55, -0.5, 0]}
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
            />
          </group>
          <group
            ref={screen}
            position={[0, -5.65, -10.3]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[100, 100, 88.24]}
          >
            <mesh
              geometry={nodes.Screen_ComputerScreen_0.geometry}
              material={materials.ComputerScreen}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../../laptop/scene.gltf');
