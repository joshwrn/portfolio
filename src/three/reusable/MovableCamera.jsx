import { motion } from 'framer-motion-3d';
import { useRef, useLayoutEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useSmoothTransform } from '../reusable/use-smooth-transform';

function Camera({
  mouseX,
  mouseY,
  fov,
  cameraZ = 100,
  smoothTransformX = -1,
  smoothTransformY = -1,
  stiffness = 600,
  damping = 30,
  ...props
}) {
  const spring = { stiffness: stiffness, damping: damping };
  const cameraX = useSmoothTransform(
    mouseX,
    spring,
    (x) => (smoothTransformX * x) / 300
  );
  const cameraY = useSmoothTransform(
    mouseY,
    spring,
    (y) => (smoothTransformY * y) / 300
  );

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
      fov={fov}
      position={[cameraX, cameraY, cameraZ]}
    />
  );
}

export default Camera;
