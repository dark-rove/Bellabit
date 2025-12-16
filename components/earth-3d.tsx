"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader } from "three"
import * as THREE from "three"

const teamLocations = [
  { lat: 26.8206, lng: 30.8025 }, // Egypt
  { lat: 52.1326, lng: 5.2913 },  // Netherlands
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function PulsingMarker({ position }: { position: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 3) * 0.3; 
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.012, 16, 16]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.9} />
    </mesh>
  )
}

function CyberEarth() {
  const earthRef = useRef<THREE.Mesh>(null!)
  const texture = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (earthRef.current) {
      // 🔥 التعديل هنا 🔥
      // ضفنا (4.5 +) عشان الكوكب يبدأ وهو باصص على مصر وهولندا
      // لو حسيت المكان مش مظبوط اوي، غير رقم 4.5 ده (زوده او نقصه) لحد ما يظبط
      earthRef.current.rotation.y = 4.5 + (elapsed * 0.1)
    }
  })

  return (
    <>
      <mesh ref={earthRef} scale={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={texture}
          color="#2a0a0a" 
          emissive="#dc2626" 
          emissiveMap={texture} 
          emissiveIntensity={1.2}
          roughness={0.5}
          metalness={0.3}
        />
        
        {teamLocations.map((loc, i) => (
          <PulsingMarker key={i} position={latLngToVector3(loc.lat, loc.lng, 1.005)} />
        ))}
      </mesh>
    </>
  )
}

export function Earth3D() {
  return (
    <div className="h-[500px] w-[500px] cursor-grab active:cursor-grabbing">
      <Canvas className="bg-transparent" camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} color="#ffcccc" /> 
        <directionalLight position={[5, 3, 5]} intensity={2.0} color="#ff8888" />
        <pointLight position={[-5, 2, -5]} intensity={0.5} color="#ff0000" />
        
        <CyberEarth />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  )
}