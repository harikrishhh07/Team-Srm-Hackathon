import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Logo from '../assets/Logo.jpg'
import './HyperModel.css'

function Model() {
  try {
    // Using a simple 3D object since we can't directly load from external Hyper3D
    return (
      <mesh>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color="#0096ff"
          metalness={0.8}
          roughness={0.15}
          emissive="#00d4ff"
          emissiveIntensity={0.7}
          clearcoat={1}
          clearcoatRoughness={0.18}
        />
      </mesh>
    )
  } catch (error) {
    console.log('Model loading:', error)
    return null
  }
}

export default function HyperModel() {
  return (
    <div className="hypermodel-container">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%', background: '#000000' }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2.2} color="#00b6ff" />
        <pointLight position={[-10, -10, 10]} intensity={1.6} color="#4dd7ff" />
        <pointLight position={[0, 0, 10]} intensity={1.4} color="#0066ff" />
        <directionalLight position={[0, 10, 5]} intensity={1.3} />

        <Model />

        <OrbitControls
          enableZoom={true}
          autoRotate
          autoRotateSpeed={3.5}
          rotateSpeed={1}
        />
        <Preload all />
      </Canvas>

      <img src={Logo} alt="Logo" className="hypermodel-logo" />
    </div>
  )
}
