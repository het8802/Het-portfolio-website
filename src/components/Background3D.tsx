'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Text, Html } from '@react-three/drei'
import * as THREE from 'three'
import { random } from 'maath'

// Tech icons and symbols
const techSymbols = [
  { text: 'Java', position: [-5, 3, -2] },
  { text: 'Python', position: [5, 2, -3] },
  { text: 'React', position: [-4, -2, -4] },
  { text: 'Node.js', position: [4, -3, -2] },
  { text: 'AWS', position: [-3, 4, -5] },
  { text: 'Docker', position: [3, -4, -3] },
  { text: 'Kafka', position: [-5, -3, -6] },
  { text: 'GraphQL', position: [5, 3, -4] },
  { text: 'Redis', position: [-4, 4, -7] },
  { text: 'MongoDB', position: [4, -4, -5] },
]

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 5000
  const radius = 10
  const [scrollPosition, setScrollPosition] = useState(0)

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sphere = new Float32Array(count * 3)
    random.inSphere(sphere, { radius: radius * 1.5 })
    for (let i = 0; i < count; i++) {
      positions[i * 3] = sphere[i * 3]
      positions[i * 3 + 1] = sphere[i * 3 + 1]
      positions[i * 3 + 2] = sphere[i * 3 + 2]
    }
    return positions
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      // Set rotation based on scroll position instead of constant rotation
      ref.current.rotation.x = -scrollPosition * 0.0005
      ref.current.rotation.y = -scrollPosition * 0.0003
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0070f3"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function TechSymbols() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <group>
      {techSymbols.map((symbol) => (
        <group 
          key={symbol.text} 
          position={[
            symbol.position[0], 
            symbol.position[1] + Math.sin(scrollPosition * 0.001 + symbol.position[0]) * 0.5, 
            symbol.position[2]
          ] as [number, number, number]}
        >
          <Text
            color={hovered === symbol.text ? "#00a8ff" : "#0070f3"}
            fontSize={0.5}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqL_KWxWMT.woff2"
            anchorX="center"
            anchorY="middle"
            onPointerOver={() => setHovered(symbol.text)}
            onPointerOut={() => setHovered(null)}
          >
            {symbol.text}
          </Text>
          {hovered === symbol.text && (
            <Html position={[0, 0.8, 0]} center>
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg text-xs text-white">
                {getTechDescription(symbol.text)}
              </div>
            </Html>
          )}
        </group>
      ))}
    </group>
  )
}

function getTechDescription(tech: string): string {
  switch (tech) {
    case 'Java':
      return 'Backend development, Spring Boot'
    case 'Python':
      return 'Data analysis, ML, automation'
    case 'React':
      return 'Frontend development, UI/UX'
    case 'Node.js':
      return 'Server-side JavaScript, APIs'
    case 'AWS':
      return 'Cloud infrastructure, scalability'
    case 'Docker':
      return 'Containerization, microservices'
    case 'Kafka':
      return 'Event streaming, data pipelines'
    case 'GraphQL':
      return 'API query language, data fetching'
    case 'Redis':
      return 'Caching, in-memory data store'
    case 'MongoDB':
      return 'NoSQL database, document storage'
    default:
      return ''
  }
}

function FloatingCode() {
  const codeRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state, delta) => {
    if (codeRef.current) {
      // Set rotation based on scroll position instead of constant rotation
      codeRef.current.rotation.y = scrollPosition * 0.0003
      codeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
      
      // Enhanced animation when hovered
      if (hovered) {
        codeRef.current.rotation.z += delta * 0.3
        codeRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
      }
    }
  })
  
  return (
    <group 
      ref={codeRef} 
      position={[0, 0, -8]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Text
        color={hovered ? "#00a8ff" : "#0070f3"}
        fontSize={0.3}
        maxWidth={5}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
        anchorX="center"
        anchorY="middle"
      >
        {`function buildPortfolio() {
  const skills = ['Java', 'Python', 'React'];
  const projects = ['Campus Explorer', 'K-Means Visualization'];
  
  return {
    developer: 'Het Tikawala',
    role: 'Software Engineer',
    experience: 'Expedia, Stige',
    education: 'SJSU'
  };
}`}
      </Text>
    </group>
  )
}

// Interactive 3D elements that respond to scroll
function ScrollReactiveElements() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const elementsRef = useRef<THREE.Group>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state, delta) => {
    if (elementsRef.current) {
      // Rotate based on scroll position
      elementsRef.current.rotation.y = scrollPosition * 0.001
      
      // Add some floating motion
      elementsRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })
  
  return (
    <group ref={elementsRef} position={[0, -2, -10]}>
      {/* Floating cubes */}
      {Array.from({ length: 5 }).map((_, i) => {
        const cubeId = `cube-${i}-${Math.random().toString(36).substring(2, 9)}`;
        return (
          <mesh 
            key={cubeId} 
            position={[
              Math.sin(i * Math.PI * 2 / 5) * 3,
              Math.cos(i * Math.PI * 2 / 5) * 3,
              0
            ]}
            rotation={[scrollPosition * 0.001 + i, scrollPosition * 0.002 + i, 0]}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial 
              color={`hsl(${i * 30 + scrollPosition * 0.1}, 70%, 50%)`}
              metalness={0.8}
              roughness={0.2}
              wireframe={i % 2 === 0}
            />
          </mesh>
        );
      })}
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  )
} 