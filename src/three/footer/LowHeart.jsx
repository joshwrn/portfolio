import React, { useRef } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from 'three';

const loader = new CubeTextureLoader();
// The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.

const texture = loader.load([
  '/envMaps/corridor/nx.png',
  '/envMaps/corridor/ny.png',
  '/envMaps/corridor/nz.png',
  '/envMaps/corridor/px.png',
  '/envMaps/corridor/py.png',
  '/envMaps/corridor/pz.png',
]);
console.log(texture);

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('../../polyHeart/scene.gltf');
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh receiveShadow geometry={nodes.Mesh_0.geometry}>
          <meshPhongMaterial
            color="#000000"
            specular="#646464"
            shininess={3}
            combine={THREE.MixOperation}
            envMap={texture}
            attach="material"
            reflectivity={0.14}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('../../polyHeart/scene.gltf');
