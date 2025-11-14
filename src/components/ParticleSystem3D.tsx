import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Animate individual particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b9d"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingHearts() {
  const heartsRef = useRef<THREE.Group>(null);
  
  const hearts = useMemo(() => {
    const heartPositions = [];
    for (let i = 0; i < 50; i++) {
      heartPositions.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ],
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return heartPositions;
  }, []);

  useFrame((state) => {
    if (heartsRef.current) {
      heartsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      heartsRef.current.children.forEach((heart, i) => {
        heart.position.y += Math.sin(state.clock.elapsedTime * hearts[i].speed) * 0.01;
        heart.rotation.z = Math.sin(state.clock.elapsedTime * hearts[i].speed) * 0.2;
      });
    }
  });

  return (
    <group ref={heartsRef}>
      {hearts.map((heart, i) => (
        <mesh key={i} position={heart.position as [number, number, number]} scale={heart.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#ff69b4" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

const ParticleSystem3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <FloatingHearts />
      </Canvas>
    </div>
  );
};

export default ParticleSystem3D;
