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
  const group = useRef();
  const { nodes } = useGLTF('../../polyHeart/scene.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0.geometry}>
          {/* <meshPhongMaterial
            color="#000000"
            specular="#646464"
            shininess={3}
            combine={THREE.MixOperation}
            envMap={texture}
            attach="material"
            reflectivity={0.14}
          /> */}
          <meshPhysicalMaterial
            reflectivity={4}
            color="#3b3b3b"
            emissive="#0f0f0f"
            metalness={1}
            roughness={0}
            clearcoat={1}
            clearcoatRoughness={0}
            attach="material"
            combine={THREE.MixOperation}
            envMap={texture}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('../../polyHeart/scene.gltf');
