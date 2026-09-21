import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function CoreSphere({ reduced }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (reduced || !meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
  })
  return (
    <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.5}>
      <mesh ref={meshRef} scale={1.9}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#1a2a5e"
          distort={reduced ? 0 : 0.22}
          speed={reduced ? 0 : 1.5}
          roughness={0.3}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh scale={1.92}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#4B7FFF" wireframe opacity={0.12} transparent />
      </mesh>
    </Float>
  )
}

function RingOrbit({ radius, speed, color, reduced }) {
  const ref = useRef()
  useFrame((state) => {
    if (reduced || !ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * speed
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 4, 0.3, 0]}>
      <torusGeometry args={[radius, 0.008, 8, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.25} />
    </mesh>
  )
}

function FloatingDots({ reduced }) {
  const points = useMemo(() => {
    const arr = []
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3.5 + Math.random() * 1.5
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    }
    return new Float32Array(arr)
  }, [])

  const ref = useRef()
  useFrame((state) => {
    if (reduced || !ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4B7FFF" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene({ reduced }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, -3, -3]} intensity={0.5} color="#4B7FFF" />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#6B9FFF" />
      <CoreSphere reduced={reduced} />
      <RingOrbit radius={2.8} speed={0.15} color="#4B7FFF" reduced={reduced} />
      <RingOrbit radius={3.4} speed={-0.1} color="#8BC4FF" reduced={reduced} />
      <FloatingDots reduced={reduced} />
      <Stars radius={30} depth={20} count={300} factor={2} saturation={0} fade speed={reduced ? 0 : 0.5} />
    </>
  )
}

export function HeroScene() {
  const reduced = useReducedMotion()
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  )
}
