import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { CubeTextureLoader } from 'three';

const loader = new CubeTextureLoader();
const texture = loader.load([
  '/envMaps/corridor/nx.png',
  '/envMaps/corridor/ny.png',
  '/envMaps/corridor/nz.png',
  '/envMaps/corridor/px.png',
  '/envMaps/corridor/py.png',
  '/envMaps/corridor/pz.png',
]);

export default function Model({ ...props }) {
  const { nodes } = useGLTF('../../redBalloon/scene.gltf');
  const ref = useRef();
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[1, 1, 2]} position={[-0.41, -0.1, -14.26]}>
          <mesh geometry={nodes['Material_001-material'].geometry}>
            <meshPhongMaterial
              color="#292929"
              specular="#181818"
              shininess={0}
            />
          </mesh>
        </group>
        <group position={[-0.01, 0, 1.48]}>
          <mesh geometry={nodes['Material-material'].geometry}>
            <meshPhysicalMaterial
              transparent
              opacity={1}
              reflectivity={0.54}
              color="#242424"
              emissive="#1b1b1b"
              metalness={1}
              roughness={0.08}
              attach="material"
              combine={THREE.MixOperation}
              envMap={texture}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../../redBalloon/scene.gltf');
