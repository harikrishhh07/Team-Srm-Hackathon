import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import './ScrollShowcase.css'

function Scene({ progress }) {
  const knotRef = useRef(null)
  const ringRef = useRef(null)
  const orbRef = useRef(null)

  useFrame((state) => {
    if (knotRef.current) {
      knotRef.current.rotation.x = state.clock.elapsedTime * 0.25 + progress * Math.PI * 0.8
      knotRef.current.rotation.y = state.clock.elapsedTime * 0.4 + progress * Math.PI * 1.4
      knotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.3 + progress * Math.PI
      ringRef.current.rotation.x = progress * Math.PI * 0.6
    }

    if (orbRef.current) {
      orbRef.current.position.x = Math.sin(state.clock.elapsedTime * 1.2 + progress * 5) * 1.8
      orbRef.current.position.z = Math.cos(state.clock.elapsedTime + progress * 5) * 0.8
    }
  })

  return (
    <>
      <color attach="background" args={['#02040a']} />
      <fog attach="fog" args={['#02040a', 8, 18]} />

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2.2} color="#00c2ff" />
      <pointLight position={[-5, -2, 4]} intensity={1.8} color="#007dff" />
      <spotLight position={[0, 6, 2]} intensity={1.5} angle={0.4} color="#39d6ff" />

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={knotRef}>
          <torusKnotGeometry args={[1.1, 0.28, 140, 20]} />
          <meshPhysicalMaterial
            color="#34d9ff"
            emissive="#007dff"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.75}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef}>
        <torusGeometry args={[2.3, 0.06, 24, 200]} />
        <meshStandardMaterial color="#00a6ff" emissive="#0087ff" emissiveIntensity={0.6} />
      </mesh>

      <mesh ref={orbRef}>
        <icosahedronGeometry args={[0.26, 2]} />
        <meshStandardMaterial color="#8ef0ff" emissive="#39d6ff" emissiveIntensity={0.8} />
      </mesh>

      <Environment preset="night" />
    </>
  )
}

export default function ScrollShowcase() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest)
  })

  const cards = useMemo(
    () => [
      { title: 'Glide', text: 'Scroll to push the geometry through layered light fields.' },
      { title: 'Pulse', text: 'Blue core energy responds with rotational and orbital shifts.' },
      { title: 'Focus', text: 'Each viewport moment reveals a different motion signature.' },
    ],
    [],
  )

  const yTitle = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.1, 1, 1, 0.2])

  return (
    <section className="showcase" ref={sectionRef}>
      <motion.div className="showcase-header" style={{ y: yTitle, opacity: opacityTitle }}>
        <p className="showcase-tag">Immersive Scroll Lab</p>
        <h2>Three.js motion that reacts to every scroll.</h2>
      </motion.div>

      <div className="showcase-stage">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Scene progress={progress} />
        </Canvas>
      </div>

      <div className="showcase-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="showcase-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
