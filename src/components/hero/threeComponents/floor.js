import React from 'react';

const floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      {/* <shadowMaterial attach="material" opacity={0.4} /> */}
      <meshBasicMaterial color="#ffffff" attach="material" />
    </mesh>
  );
};

export default floor;
