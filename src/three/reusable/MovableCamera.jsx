import { motion } from 'framer-motion/three';
import { useRef, useLayoutEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useSmoothTransform } from '../reusable/use-smooth-transform';

const spring = { stiffness: 600, damping: 30 };

function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => (-1 * x) / 300);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 300);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useFrame(() => {
    camera.lookAt(scene.position);
  });

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={70}
      position={[cameraX, cameraY, 100]}
    />
  );
}

export default Camera;
