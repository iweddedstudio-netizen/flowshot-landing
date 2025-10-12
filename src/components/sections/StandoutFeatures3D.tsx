'use client';

import { useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Html, useTexture, RoundedBox } from '@react-three/drei';
import { MessageSquare, Share2, Zap, CheckSquare, Calendar, Users } from 'lucide-react';
import * as THREE from 'three';

const features = [
  {
    icon: MessageSquare,
    title: 'Real-Time Project Chat',
    description: 'Keep all conversations in context. No more switching between apps.',
    color: '#3b82f6',
  },
  {
    icon: Share2,
    title: 'Client Portal',
    description: 'Share projects with clients via secure link. No account needed.',
    color: '#a855f7',
  },
  {
    icon: Zap,
    title: 'Priority Indicators',
    description: 'Visual priority system keeps everyone aligned on what matters.',
    color: '#f97316',
  },
  {
    icon: CheckSquare,
    title: 'Revision Checklists',
    description: 'Track changes with interactive checklists. Never miss feedback.',
    color: '#10b981',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Auto-schedule shoots based on team availability and priorities.',
    color: '#6366f1',
  },
  {
    icon: Users,
    title: 'Multi-Brand Workspaces',
    description: 'Manage multiple brands and teams in one organized space.',
    color: '#ec4899',
  },
];

// 3D Phone Component
function Phone3D() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Phone Body */}
        <RoundedBox args={[2, 4, 0.2]} radius={0.2} smoothness={4}>
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen */}
        <RoundedBox args={[1.8, 3.6, 0.15]} radius={0.15} smoothness={4} position={[0, 0, 0.15]}>
          <meshStandardMaterial
            color="#000000"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </RoundedBox>

        {/* Screen Content Simulation */}
        <mesh position={[0, 1, 0.16]}>
          <planeGeometry args={[1.6, 0.8]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.7} />
        </mesh>

        <mesh position={[0, -0.2, 0.16]}>
          <planeGeometry args={[1.6, 1.2]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>

        <mesh position={[0, -1.5, 0.16]}>
          <planeGeometry args={[1.6, 0.6]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.5} />
        </mesh>

        {/* Floating Orbs around phone */}
        {[0, 1, 2].map((i) => (
          <Float key={i} speed={3 + i} rotationIntensity={1} floatIntensity={2}>
            <mesh
              position={[
                Math.cos((i * Math.PI * 2) / 3) * 2,
                Math.sin((i * Math.PI * 2) / 3) * 2,
                1,
              ]}
            >
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={[features[i].color, features[i + 3]?.color || features[i].color][0]}
                emissive={features[i].color}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}
      </Float>
    </group>
  );
}

// 3D Feature Card with floating effect
function FloatingCard3D({ feature, index }: { feature: typeof features[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial
          color={feature.color}
          metalness={0.4}
          roughness={0.3}
          emissive={feature.color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// 3D Scene Component
function Scene3D({ featureIndex }: { featureIndex: number }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#a855f7" />

      <Suspense fallback={null}>
        <Phone3D />
        <Environment preset="city" />
      </Suspense>
    </>
  );
}

const FeatureCard3D = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden h-full">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Canvas>
            <FloatingCard3D feature={feature} index={index} />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
            {feature.title}
          </h3>
          <p className="text-secondary leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StandoutFeatures3D = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      ref={sectionRef}
      id="standout-features-3d"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Built Different (3D Edition)
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Features That Make
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Production Teams Faster
            </span>
          </h2>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to run a modern production studio. No compromises.
          </p>
        </motion.div>

        {/* 3D Phone Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Canvas>
              <Scene3D featureIndex={0} />
            </Canvas>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard3D key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-secondary mb-6">
            And we're just getting started...
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            See All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StandoutFeatures3D;
