import React, {
  Suspense,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

import { softShadows, Loader, OrbitControls } from '@react-three/drei';
import Styles from '../../styles/hero/threeHero.module.css';

import Crystal from './crystal';
import Lights from './lights';
import { useSpring } from 'react-spring';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass });

function Effect() {
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => composer.current.render(), 1);
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
    </effectComposer>
  );
}

function Swarm({ count, mouse }) {
  console.log('particle');
  const mesh = useRef();
  const light = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 40;
  }

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <points ref={mesh} args={[10, 5, count]}>
        <bufferGeometry
          attach="geometry"
          position={new THREE.BufferAttribute(positions, 3)}
          args={[1, 32, 32]}
        />
        <pointsMaterial size={0.1} attach="material" color="#fff" />
      </points>
    </>
  );
}

const ThreeHero = () => {
  const mouse = useRef([0, 0]);
  return (
    <div className={Styles.container}>
      <Canvas className={Styles.canvas}>
        <ambientLight />
        <pointLight distance={100} intensity={0.5} position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />

        <Suspense fallback={null}>
          <Crystal position={[0, -1.5, 0]} scale={[0.5, 0.5, 0.5]} />
        </Suspense>
        <Swarm count={1000} mouse={mouse} />
      </Canvas>
      <Loader />
    </div>
  );
};

export default ThreeHero;
