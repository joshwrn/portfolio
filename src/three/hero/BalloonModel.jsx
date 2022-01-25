import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
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

function Material() {
  return <meshPhongMaterial color="#3b3b3b" specular="#505050" shininess={0} />;
}

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('../../redBalloon/scene.gltf');
  // useFrame(({ clock }) => {
  //   const position = group.current.position;
  //   const rotation = group.current.rotation;
  //   const time = clock.getElapsedTime();
  //   position.y = position.y + Math.cos(time * 1.6) * 0.02;
  //   position.x = position.x + Math.cos(time * 0.6) * 0.01;
  //   rotation.y = time * 0.5;
  // });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[1, 1, 2]} position={[-0.41, -0.1, -14.26]}>
          <mesh geometry={nodes['Material_001-material'].geometry}>
            <Material />
          </mesh>
        </group>
        <group position={[-0.01, 0, 1.48]}>
          <mesh geometry={nodes['Material-material'].geometry}>
            {/* <meshPhongMaterial
              color="#000000"
              specular="#3f3f3f"
              shininess={0}
              combine={THREE.MixOperation}
              envMap={texture}
              attach="material"
              reflectivity={0.14}
            /> */}
            <meshPhysicalMaterial
              reflectivity={0.54}
              color="#242424"
              emissive="#1b1b1b"
              metalness={1}
              roughness={0}
              // clearcoat={0.5}
              // clearcoatRoughness={0.2}
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
