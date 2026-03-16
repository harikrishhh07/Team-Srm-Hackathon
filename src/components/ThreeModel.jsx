import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RotatingCube() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#00d4ff" 
        metalness={0.8}
        roughness={0.2}
        emissive="#0096ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function GlowingSphere() {
  return (
    <Sphere args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#0096ff"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#00d4ff"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

export default function ThreeModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#0096ff" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#00d4ff" />
      
      <RotatingCube />
      
      <OrbitControls
        enableZoom={true}
        autoRotate
        autoRotateSpeed={4}
        rotateSpeed={1}
      />
    </Canvas>
  )
}
