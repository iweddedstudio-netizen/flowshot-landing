'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Plus, Package, MessageSquare, Users,
  Calendar, Bell, CheckCircle, Video, DollarSign
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Scene backgrounds
const sceneBackgrounds = [
  '#E7F0FF', // Scene 1: Cool blue
  '#E9F7F2', // Scene 2: Mint green
  '#F8F4FF', // Scene 3: Lavender
  '#FFF5EB', // Scene 4: Warm peach (mint green → soft amber)
  '#FFF0F3', // Scene 5: Coral pink (soft amber → coral pink)
  '#F5F0FF', // Scene 6: Light violet (coral pink → light violet)
  '#FFF9E6', // Scene 7: Golden white (light violet → golden white)
];

// Scene data
const scenes = [
  {
    id: 1,
    title: "Preset Library",
    caption: "No setup. No spreadsheets. Just ready-made presets for every shoot.",
    subCaption: "",
    icon: Package,
    background: sceneBackgrounds[0],
  },
  {
    id: 2,
    title: "Create Project",
    caption: "Start your next shoot using saved presets — photo, video, or both.",
    subCaption: "Create once, manage everything together.",
    icon: Plus,
    background: sceneBackgrounds[1],
  },
  {
    id: 4,
    title: "Collaborate & Review",
    caption: "Preview videos, leave timeline comments, and update status in real time.",
    subCaption: "Team communication that stays synced.",
    icon: MessageSquare,
    background: sceneBackgrounds[3],
  },
  {
    id: 5,
    title: "Schedule & Notify",
    caption: "Calendar view with smart notifications for every deadline.",
    subCaption: "Never miss an editing deadline or client approval.",
    icon: Calendar,
    background: sceneBackgrounds[4],
  },
  {
    id: 6,
    title: "Approve & Complete",
    caption: "Mark client approval, confirm payments, and celebrate completion.",
    subCaption: "Your dashboard updates automatically.",
    icon: CheckCircle,
    background: sceneBackgrounds[5],
  },
];

const ProjectJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0-1 progress through current scene
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const checkMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    };

    checkMotion();
  }, []);

  // GSAP vertical scroll animation with scene transitions
  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const section = sectionRef.current;
    const totalScenes = scenes.length;

    // Adaptive scroll distance based on screen size
    // Mobile needs shorter scroll distance for easier swiping
    const getScrollMultiplier = () => {
      const width = window.innerWidth;
      if (width < 768) return 35; // Mobile: 35vh per scene (1 quick swipe)
      if (width < 1024) return 45; // Tablet: 45vh per scene
      return 75; // Desktop: 75vh per scene
    };

    const scrollMultiplier = getScrollMultiplier();

    // Create animation that changes scenes on scroll
    const scrollTween = gsap.to({}, {
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalScenes * scrollMultiplier}%`, // Adaptive scroll distance
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Calculate which scene should be active based on progress
          const progress = self.progress;
          const newScene = Math.min(Math.floor(progress * totalScenes), totalScenes - 1);

          // Calculate progress within current scene (0-1)
          const sceneProgress = (progress * totalScenes) % 1;

          setCurrentScene(newScene);
          setScrollProgress(sceneProgress);
        },
      },
    });

    // Recalculate on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTween.scrollTrigger) {
        scrollTween.scrollTrigger.kill();
      }
      scrollTween.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="project-journey"
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Gradient overlays for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header - Always visible */}
      <div className="absolute top-20 md:top-24 left-0 right-0 z-20 container mx-auto px-4 max-w-7xl text-center pointer-events-none">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-3 md:mb-4">
          See how{' '}
          <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            FlowShot
          </span>{' '}
          works
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
          Scroll through the complete workflow — from creating a project to delivering the final result
        </p>
      </div>

      {/* Scenes Container - Scenes overlay each other */}
      <div
        className="absolute inset-0 flex items-center justify-center pt-40 md:pt-44"
        style={{
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {scenes.map((scene, index) => {
          const isActive = currentScene === index;
          const isPast = index < currentScene;
          const isFuture = index > currentScene;

          // Calculate sharp opacity for faster crossfade - more time at 100%
          let opacity = 0;
          if (isActive) {
            // Current scene: always visible, fade in after first scene
            if (index === 0 && currentScene === 0) {
              // First scene starts at full opacity
              opacity = 1;
            } else if (index === scenes.length - 1 && currentScene === scenes.length - 1) {
              // Last scene stays at full opacity
              opacity = 1;
            } else {
              // Other scenes: quick fade-in, then stay at 100%
              // Stay at minimum opacity until 15% scroll, then ramp quickly to 100% by 35%
              if (scrollProgress < 0.15) {
                opacity = 0.2;
              } else {
                const fadeProgress = Math.min((scrollProgress - 0.15) / 0.25, 1);
                // Use cubic easing for sharper ramp
                opacity = 0.2 + Math.pow(fadeProgress, 2.5) * 0.8;
              }
            }
          } else if (index === currentScene - 1) {
            // Previous scene: fade out as we leave it (except last scene)
            if (index === scenes.length - 1) {
              opacity = 1; // Last scene stays visible
            } else {
              // Stay visible longer, then quick fade-out
              // Stay at 0.2 opacity until 60% scroll, then fade out quickly by 85%
              if (scrollProgress < 0.6) {
                opacity = 0.2;
              } else {
                const fadeProgress = Math.min((scrollProgress - 0.6) / 0.25, 1);
                // Use cubic easing for sharper ramp down
                opacity = 0.2 * (1 - Math.pow(fadeProgress, 2.5));
              }
            }
          } else if (index === currentScene + 1) {
            // Next scene: start fading in slightly
            opacity = 0.05 * scrollProgress; // 0 to 0.05
          } else if (isPast && index === scenes.length - 1) {
            // Last scene stays visible after completion
            opacity = 1;
          }

          // Mobile-friendly vertical slide animation
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const yOffset = isMobile ? 200 : 30; // Much larger movement on mobile - scenes slide up/down visibly

          return (
            <motion.div
              key={scene.id}
              className="absolute inset-0 w-full h-full flex items-center justify-center px-4"
              initial={false}
              animate={{
                opacity,
                scale: isActive ? 1 : isFuture ? (isMobile ? 1 : 1.05) : 0.98,
                y: isActive ? 0 : isFuture ? yOffset : -yOffset,
              }}
              transition={{
                opacity: { duration: isMobile ? 0.3 : 0.1 },
                scale: { duration: 0.6, ease: 'easeInOut' },
                y: { duration: isMobile ? 0.5 : 0.6, ease: isMobile ? [0.25, 0.1, 0.25, 1] : 'easeInOut' },
              }}
              style={{
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <Scene
                scene={scene}
                index={index}
                isActive={isActive}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Vertical Progress Indicator - Desktop only */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-3">
          {scenes.map((scene, index) => {
            const isActive = currentScene === index;
            const isPast = index < currentScene;
            const Icon = scene.icon;

            return (
              <div key={index} className="relative flex items-center gap-3">
                {/* Line connector with gradient fill */}
                {index < scenes.length - 1 && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-3 bg-gray-600 overflow-hidden rounded-full">
                    <motion.div
                      className="w-full bg-gradient-to-b from-primary via-purple-600 to-pink-600"
                      initial={{ height: '0%' }}
                      animate={{
                        height: isPast ? '100%' : isActive ? `${scrollProgress * 100}%` : '0%'
                      }}
                      transition={{
                        duration: 0.05,
                        ease: "linear"
                      }}
                    />
                  </div>
                )}

                {/* Scene dot with icon */}
                <div className="relative w-10 h-10">
                  {/* Background gray circle */}
                  <div className="absolute inset-0 rounded-full bg-gray-700 shadow-lg" />

                  {/* Gradient fill circle - liquid animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-600 to-pink-600 shadow-lg overflow-hidden"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={{
                      clipPath: isPast
                        ? 'inset(0% 0% 0% 0%)'
                        : isActive
                          ? `inset(${(1 - scrollProgress) * 100}% 0% 0% 0%)`
                          : 'inset(100% 0% 0% 0%)',
                      scale: isActive ? 1.15 : 1,
                    }}
                    transition={{
                      clipPath: { duration: 0.05, ease: "linear" },
                      scale: { duration: 0.3, ease: "easeOut" }
                    }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Icon className={`w-5 h-5 transition-colors ${
                      isPast || (isActive && scrollProgress > 0.5) ? 'text-white' : 'text-gray-300'
                    }`} />
                  </div>

                  {/* Circular progress ring for active scene */}
                  {isActive && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90 z-20">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#9333ea" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 18}`}
                        strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress)}`}
                        className="transition-all duration-50"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress Dots with larger touch target on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:py-0 py-4">
        {scenes.map((_, index) => {
          const isActive = currentScene === index;
          const isPast = index < currentScene;

          return (
            <div key={index} className="relative h-2 flex items-center">
              {/* Background gray dot */}
              <motion.div
                animate={{
                  width: isActive ? 32 : 8,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-2 rounded-full bg-gray-600 overflow-hidden shadow-sm"
              >
                {/* Gradient fill with liquid effect */}
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-purple-600 to-pink-600"
                  initial={{ width: '0%' }}
                  animate={{
                    width: isPast ? '100%' : isActive ? `${scrollProgress * 100}%` : '0%'
                  }}
                  transition={{
                    duration: 0.05,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Scene Counter - Mobile only */}
      <div className="md:hidden absolute bottom-6 right-4 z-20 text-sm font-medium text-gray-300">
        {currentScene + 1} / {scenes.length}
      </div>

      {/* Mobile Scroll Hint - Only on first scene */}
      {currentScene === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs text-gray-300 font-medium">Swipe to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}
    </section>
  );
};

// Individual Scene Component
interface SceneProps {
  scene: typeof scenes[0];
  index: number;
  isActive: boolean;
}

const Scene = ({ scene, index, isActive }: SceneProps) => {
  const Icon = scene.icon;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 md:mb-4">
            {scene.title}
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-2 md:mb-3 font-medium">
            {scene.caption}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">
            {scene.subCaption}
          </p>
        </motion.div>

        {/* Animation/Mockup Area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {index === 0 && <Scene1Animation isActive={isActive} />}
          {index === 1 && <Scene2Animation isActive={isActive} />}
          {index === 2 && <Scene5Animation isActive={isActive} />}
          {index === 3 && <Scene6Animation isActive={isActive} />}
          {index === 4 && <Scene7Animation isActive={isActive} />}
        </motion.div>
      </div>
    </div>
  );
};

// Scene Animations Components
const Scene1Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 150),   // Add Wedding tag
      setTimeout(() => setStep(2), 300),   // Add Photo tag
      setTimeout(() => setStep(3), 450),   // Add Video tag
      setTimeout(() => setStep(4), 600),   // Add Full Day package
      setTimeout(() => setStep(5), 750),   // Add Maria editor
      setTimeout(() => setStep(6), 900),   // Add Teaser addon
      setTimeout(() => setStep(7), 1050),  // Add Drone addon
      setTimeout(() => setStep(8), 1200),  // Add Highlight format
      setTimeout(() => setStep(9), 1350),  // Add Film format
      setTimeout(() => setStep(10), 1500), // Add Corporate tag
      setTimeout(() => setStep(11), 1650), // Add Half Day package
      setTimeout(() => setStep(12), 1800), // Add John editor
      setTimeout(() => setStep(13), 1950), // Add Reel format
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  // Notion-style tags with different categories and colors
  const tags = [
    { id: 1, name: 'Wedding', category: 'Event Type', color: 'bg-pink-100 text-pink-700 border-pink-200', show: step >= 1 },
    { id: 2, name: 'Photo', category: 'Service', color: 'bg-blue-100 text-blue-700 border-blue-200', show: step >= 2 },
    { id: 3, name: 'Video', category: 'Service', color: 'bg-purple-100 text-purple-700 border-purple-200', show: step >= 3 },
    { id: 4, name: 'Full Day', category: 'Package', color: 'bg-green-100 text-green-700 border-green-200', show: step >= 4 },
    { id: 5, name: 'Maria', category: 'Editor', color: 'bg-orange-100 text-orange-700 border-orange-200', show: step >= 5 },
    { id: 6, name: 'Teaser', category: 'Add-on', color: 'bg-indigo-100 text-indigo-700 border-indigo-200', show: step >= 6 },
    { id: 7, name: 'Drone', category: 'Add-on', color: 'bg-sky-100 text-sky-700 border-sky-200', show: step >= 7 },
    { id: 8, name: 'Highlight', category: 'Format', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', show: step >= 8 },
    { id: 9, name: 'Film', category: 'Format', color: 'bg-red-100 text-red-700 border-red-200', show: step >= 9 },
    { id: 10, name: 'Corporate', category: 'Event Type', color: 'bg-teal-100 text-teal-700 border-teal-200', show: step >= 10 },
    { id: 11, name: 'Half Day', category: 'Package', color: 'bg-lime-100 text-lime-700 border-lime-200', show: step >= 11 },
    { id: 12, name: 'John', category: 'Editor', color: 'bg-amber-100 text-amber-700 border-amber-200', show: step >= 12 },
    { id: 13, name: 'Reel', category: 'Format', color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200', show: step >= 13 },
  ];

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Offer Catalog
        </h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          className="text-xs text-secondary"
        >
          Building presets...
        </motion.span>
      </div>

      {/* Tags Container - Notion style */}
      <div className="space-y-4">
        {/* Event Types */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Event Type</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Event Type' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0, y: -10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Service</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Service' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0, x: -10 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Packages */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Package</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Package' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Editors */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Editor</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Editor' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm flex items-center gap-1`}
                >
                  <div className="w-2 h-2 rounded-full bg-current opacity-50" />
                  {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Add-on</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Add-on' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0, x: 10 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm`}
                >
                  + {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Formats */}
        <div>
          <label className="text-xs font-bold text-secondary mb-2 block uppercase tracking-wide">Format</label>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.filter(t => t.category === 'Format' && t.show).map((tag) => (
                <motion.div
                  key={tag.id}
                  initial={{ scale: 0, opacity: 0, rotate: 10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border ${tag.color} shadow-sm`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const Scene2Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 200),   // Show "+ New Project" button
      setTimeout(() => setStep(2), 400),   // Modal appears
      setTimeout(() => setStep(3), 700),   // Type project name
      setTimeout(() => setStep(4), 1000),  // Select Photo
      setTimeout(() => setStep(5), 1200),  // Select Video
      setTimeout(() => setStep(6), 1500),  // Select preset
      setTimeout(() => setStep(7), 1800),  // Add Add-on
      setTimeout(() => setStep(8), 2100),  // Click Create
      setTimeout(() => setStep(9), 2300),  // Show project card
      setTimeout(() => setStep(10), 2600), // Show tooltip
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold text-foreground">Active Projects</h4>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={step >= 1 ? { scale: step === 1 ? 1.05 : 1, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="px-4 py-2 bg-primary text-white rounded-lg font-medium flex items-center gap-2 shadow-lg text-sm"
        >
          <Plus className="w-4 h-4" />
          New Project
        </motion.button>
      </div>

      {/* Project Card (appears at end) */}
      <AnimatePresence>
        {step >= 9 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -20 }}
            animate={{
              scale: step >= 9 ? [0.8, 1.05, 1] : 1,
              opacity: 1,
              y: 0
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="p-4 bg-white rounded-xl border-2 border-primary/20 shadow-lg"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h5 className="font-bold text-foreground">Emma & Ryan</h5>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Photo</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Video</span>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: 2, duration: 0.5 }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
            </div>
            <p className="text-xs text-secondary">Full Wedding Package + Add-on</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {step >= 2 && step < 9 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-4 bg-white rounded-xl shadow-2xl p-5 border-2 border-primary/20 overflow-hidden"
          >
            <h4 className="text-lg font-bold mb-4 text-foreground">Create New Project</h4>

            <div className="space-y-3">
              {/* Project Name */}
              <div>
                <label className="text-xs text-secondary mb-1 block">Project Name</label>
                <motion.div
                  className="w-full p-2 border-2 border-primary/30 rounded-lg bg-blue-50/30"
                  animate={step >= 3 ? { borderColor: 'rgba(59, 130, 246, 0.6)' } : {}}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={step >= 3 ? { opacity: 1 } : { opacity: 0 }}
                    className="text-foreground font-medium text-sm"
                  >
                    {step >= 3 && 'Emma & Ryan'}
                  </motion.span>
                </motion.div>
              </div>

              {/* Project Type */}
              <div>
                <label className="text-xs text-secondary mb-1 block">Type</label>
                <div className="flex gap-2">
                  <motion.div
                    animate={step >= 4 ? { scale: [1, 1.05, 1], borderColor: 'rgba(59, 130, 246, 1)' } : {}}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 p-2 rounded-lg border-2 text-center text-xs font-medium ${
                      step >= 4 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    📷 Photo
                  </motion.div>
                  <motion.div
                    animate={step >= 5 ? { scale: [1, 1.05, 1], borderColor: 'rgba(139, 92, 246, 1)' } : {}}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 p-2 rounded-lg border-2 text-center text-xs font-medium ${
                      step >= 5 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    🎥 Video
                  </motion.div>
                </div>
              </div>

              {/* Presets */}
              {step >= 6 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <label className="text-xs text-secondary block">Choose from presets</label>
                  <motion.div
                    animate={step >= 6 ? { scale: [1, 1.03, 1] } : {}}
                    className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-primary flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-foreground">Full Wedding Package</span>
                    <span className="text-xs font-bold text-primary">$2,500</span>
                  </motion.div>
                </motion.div>
              )}

              {/* Add-on */}
              {step >= 7 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-300 flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-foreground">+ 60 sec Teaser</span>
                  <span className="text-xs font-bold text-purple-600">$350</span>
                </motion.div>
              )}

              {/* Create Button */}
              <motion.button
                animate={step >= 8 ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.4 }}
                className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg font-semibold shadow-lg text-sm"
              >
                Create Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {step >= 10 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-foreground text-white px-4 py-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap"
          >
            Created using your saved presets ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Scene3Animation = ({ isActive }: { isActive: boolean }) => {
  const [members, setMembers] = useState<number[]>([]);

  useEffect(() => {
    if (!isActive) {
      setMembers([]);
      return;
    }

    const timers = [
      setTimeout(() => setMembers([1]), 300),
      setTimeout(() => setMembers([1, 2]), 700),
      setTimeout(() => setMembers([1, 2, 3]), 1100),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const teamMembers = [
    { id: 1, name: 'Sarah Miller', role: 'Editor', color: 'bg-blue-500', initial: 'SM' },
    { id: 2, name: 'Mike Chen', role: 'Second Shooter', color: 'bg-purple-500', initial: 'MC' },
    { id: 3, name: 'Alex Davis', role: 'Assistant', color: 'bg-pink-500', initial: 'AD' },
  ];

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Team Members
        </h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: members.length > 0 ? 1 : 0 }}
          className="text-xs text-secondary"
        >
          {members.length} member{members.length !== 1 ? 's' : ''}
        </motion.span>
      </div>

      {/* Team Cards */}
      <div className="space-y-3">
        <AnimatePresence>
          {teamMembers.filter(m => members.includes(m.id)).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-12 h-12 ${member.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm`}>
                  {member.initial}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-foreground text-sm truncate">{member.name}</h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-md font-medium">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Status indicator - appears on last added member */}
                {index === members.length - 1 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                    className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Member Button */}
        {members.length < 3 && (
          <motion.button
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-full p-4 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center gap-2 text-primary hover:bg-primary/5 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium text-sm">Invite team member</span>
          </motion.button>
        )}
      </div>
    </div>
  );
};

const Scene4Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 200),   // Drag package
      setTimeout(() => setStep(2), 600),   // Package added
      setTimeout(() => setStep(3), 1000),  // Add Add-on
      setTimeout(() => setStep(4), 1400),  // Select Output Profile
      setTimeout(() => setStep(5), 1900),  // Type notes
      setTimeout(() => setStep(6), 2500),  // Hover Editor Payment
      setTimeout(() => setStep(7), 3000),  // Auto-save confirmation
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-foreground">Project Info</h4>
        {step >= 7 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs text-green-600 font-medium flex items-center gap-1"
          >
            <CheckCircle className="w-3 h-3" />
            Auto-saved
          </motion.div>
        )}
      </div>

      <div className="space-y-3">
        {/* Package Field */}
        <div>
          <label className="text-xs text-secondary mb-1 block">Package</label>
          <AnimatePresence>
            {step >= 2 ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-primary flex items-center justify-between"
              >
                <span className="text-xs font-bold text-foreground">Full Wedding Package</span>
                <span className="text-xs font-bold text-primary">$2,500</span>
              </motion.div>
            ) : (
              <motion.div
                animate={{ borderColor: step === 1 ? 'rgba(59, 130, 246, 0.4)' : 'rgb(229, 231, 235)' }}
                className="p-2 border-2 border-dashed border-gray-200 rounded-lg h-10 flex items-center justify-center"
              >
                <span className="text-xs text-gray-400">Drag from catalog</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Add-on */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <label className="text-xs text-secondary mb-1 block">Add-ons</label>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-300"
            >
              <span className="text-xs font-medium text-foreground">+ 60 sec Teaser</span>
            </motion.div>
          </motion.div>
        )}

        {/* Output Profile */}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <label className="text-xs text-secondary mb-1 block">Output Profile</label>
            <motion.select
              initial={{ scale: 0.95 }}
              animate={{ scale: 1, borderColor: 'rgba(59, 130, 246, 0.6)' }}
              className="w-full p-2 border-2 border-primary/30 rounded-lg text-xs font-medium bg-blue-50/50"
            >
              <option>Instagram Reel</option>
            </motion.select>
          </motion.div>
        )}

        {/* Project Notes */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <label className="text-xs text-secondary mb-1 block">Project Notes</label>
            <motion.div
              initial={{ borderColor: 'rgba(229, 231, 235, 1)' }}
              animate={{ borderColor: 'rgba(59, 130, 246, 0.6)' }}
              className="p-2 border-2 rounded-lg bg-white"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-foreground"
              >
                Outdoor shoot, golden hour
              </motion.span>
            </motion.div>
          </motion.div>
        )}

        {/* Editor Payment */}
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-2 rounded-lg border-2 ${
              step >= 6 ? 'border-red-200 bg-red-50/30' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Editor Payment</span>
              <span className="text-xs font-bold text-red-600">Unpaid</span>
            </div>
          </motion.div>
        )}

        {/* Linked from Catalog label */}
        {step >= 2 && step < 7 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-2"
          >
            <span className="text-xs text-primary font-medium">✓ Linked from Offer Catalog</span>
          </motion.div>
        )}
      </div>

      {/* Dragging Package */}
      {step === 1 && (
        <motion.div
          initial={{ x: -100, y: 50, opacity: 0 }}
          animate={{ x: 60, y: 80, opacity: 1 }}
          className="absolute z-50 p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-primary shadow-2xl"
        >
          <span className="text-xs font-bold text-foreground">Full Wedding Package</span>
        </motion.div>
      )}
    </div>
  );
};

const Scene5Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 200),   // Show video preview
      setTimeout(() => setStep(2), 600),   // Play preview
      setTimeout(() => setStep(3), 1200),  // Click timeline
      setTimeout(() => setStep(4), 1600),  // Add comment
      setTimeout(() => setStep(5), 2200),  // Maria's response
      setTimeout(() => setStep(6), 2800),  // Change status
      setTimeout(() => setStep(7), 3200),  // Show notification
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      {/* Tab Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b">
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Project Info</span>
        <span className="text-xs px-2 py-1 bg-primary text-white rounded">Discussion</span>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Files</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Video Preview */}
        <div>
          <label className="text-xs text-secondary mb-2 block">Video Preview</label>
          <motion.div
            animate={{
              scale: step >= 1 && step < 3 ? [1, 1.02, 1] : 1,
              borderColor: step >= 1 && step < 3 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(229, 231, 235, 1)'
            }}
            transition={{ duration: 1, repeat: step >= 1 && step < 3 ? Infinity : 0 }}
            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border-2"
          >
            {/* Video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30" />

            {/* Play icon */}
            {step >= 2 && step < 3 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Video className="w-8 h-8 text-white" />
              </motion.div>
            )}

            {/* Timeline */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: step >= 2 ? '45%' : '0%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-white"
                />
              </div>
            </div>

            {/* Comment marker */}
            {step >= 3 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                className="absolute bottom-3 left-[45%] w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"
              />
            )}
          </motion.div>
        </div>

        {/* Chat/Comments */}
        <div>
          <label className="text-xs text-secondary mb-2 block flex items-center justify-between">
            <span>Comments</span>
            {step >= 7 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                className="flex items-center gap-1 text-primary"
              >
                <Bell className="w-3 h-3" />
                <span className="font-bold">1 new</span>
              </motion.span>
            )}
          </label>

          <div className="space-y-2">
            {/* Comment 1 */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-xs font-bold">You</span>
                  <span className="text-xs text-secondary">0:45</span>
                </div>
                <p className="text-xs text-foreground">Cut before vows</p>
              </motion.div>
            )}

            {/* Maria's response */}
            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-gray-200 rounded-lg p-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-purple-500" />
                  <span className="text-xs font-bold">Maria</span>
                </div>
                <p className="text-xs text-foreground">Got it 👍</p>
              </motion.div>
            )}
          </div>

          {/* Status Change */}
          {step >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <label className="text-xs text-secondary mb-1 block">Status</label>
              <motion.div
                animate={{
                  backgroundColor: step >= 6 ? 'rgba(249, 115, 22, 0.1)' : 'transparent'
                }}
                className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg border border-orange-200"
              >
                <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded font-medium">In Review</span>
                <span className="text-xs text-orange-600">→ Synced</span>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Scene6Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 200),   // Show calendar
      setTimeout(() => setStep(2), 500),   // Hover event
      setTimeout(() => setStep(3), 1000),  // Show tooltip
      setTimeout(() => setStep(4), 1600),  // Click bell icon
      setTimeout(() => setStep(5), 1900),  // Show modal
      setTimeout(() => setStep(6), 2400),  // Toggle notification
      setTimeout(() => setStep(7), 2800),  // Show success
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const events = [
    { day: 15, name: 'Sarah & James', type: 'photo', color: 'bg-blue-100' },
    { day: 22, name: 'Emma & Ryan', type: 'video', color: 'bg-purple-100', isTarget: true },
    { day: 28, name: 'Olivia & Liam', type: 'both', color: 'bg-pink-100' },
  ];

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          October 2025
        </h4>
        <motion.button
          animate={{
            scale: step >= 4 && step < 5 ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: 0.5, repeat: step >= 4 && step < 5 ? Infinity : 0 }}
          className="p-2 rounded-lg hover:bg-white/50"
        >
          <Bell className={`w-5 h-5 ${step >= 4 ? 'text-primary' : 'text-gray-400'}`} />
        </motion.button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={i} className="text-center text-xs text-gray-500 font-bold py-1">
            {day}
          </div>
        ))}

        {[...Array(35)].map((_, i) => {
          const day = i - 2;
          const event = events.find(e => e.day === day);
          const isHovered = event?.isTarget && step >= 2 && step < 4;

          return (
            <motion.div
              key={i}
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? 'rgba(147, 51, 234, 0.1)' : undefined
              }}
              className={`min-h-[30px] text-xs rounded flex flex-col items-center justify-center p-1 ${
                day < 1 || day > 31 ? 'text-gray-300' :
                event ? `${event.color} cursor-pointer font-medium border border-purple-200` :
                'hover:bg-gray-50'
              }`}
            >
              {day > 0 && day <= 31 && (
                <>
                  <span className="text-xs">{day}</span>
                  {event && (
                    <div className="w-1 h-1 rounded-full bg-purple-500 mt-0.5" />
                  )}
                </>
              )}

              {/* Tooltip */}
              {event?.isTarget && step >= 3 && step < 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-40 bg-foreground text-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap mt-12"
                >
                  <div className="font-bold">{event.name} – Video</div>
                  <div className="text-xs opacity-80">Editing due Oct 25 – Maria</div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Notification Settings Modal */}
      <AnimatePresence>
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-4 bottom-4 bg-white rounded-xl shadow-2xl p-4 border-2 border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-sm font-bold text-foreground">Notification Settings</h5>
              <Bell className="w-4 h-4 text-primary" />
            </div>

            <motion.label
              animate={{
                backgroundColor: step >= 6 ? 'rgba(59, 130, 246, 0.05)' : 'transparent'
              }}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer"
            >
              <div className={`w-10 h-5 rounded-full transition-colors ${
                step >= 6 ? 'bg-primary' : 'bg-gray-300'
              } relative`}>
                <motion.div
                  animate={{
                    left: step >= 6 ? '20px' : '2px'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </div>
              <span className="text-xs text-foreground">Notify me when status = Uploaded</span>
              {step >= 6 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </motion.div>
              )}
            </motion.label>

            {step >= 7 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs text-green-600 font-medium flex items-center gap-1"
              >
                <CheckCircle className="w-3 h-3" />
                Alert set successfully
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Scene7Animation = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 200),   // Show project details
      setTimeout(() => setStep(2), 500),   // Open status dropdown
      setTimeout(() => setStep(3), 900),   // Select Client Approved
      setTimeout(() => setStep(4), 1400),  // Toggle Editor Payment
      setTimeout(() => setStep(5), 2000),  // Fade to dashboard
      setTimeout(() => setStep(6), 2400),  // Show dashboard
      setTimeout(() => setStep(7), 2800),  // Increment counter
      setTimeout(() => setStep(8), 3200),  // Confetti/glow
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl shadow-2xl p-6 overflow-hidden">
      <AnimatePresence mode="wait">
        {step < 5 ? (
          // Project Detail View
          <motion.div
            key="project"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Emma & Ryan Project</h4>

            {/* Status */}
            <div>
              <label className="text-xs text-secondary mb-1 block">Status</label>
              {step < 3 ? (
                <motion.div
                  animate={{
                    scale: step === 2 ? [1, 1.02, 1] : 1
                  }}
                  transition={{ duration: 0.5, repeat: step === 2 ? Infinity : 0 }}
                  className="p-2 bg-yellow-50 border border-yellow-300 rounded-lg"
                >
                  <span className="text-xs px-2 py-1 bg-yellow-400 text-yellow-900 rounded font-medium">
                    Ready for Client
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: [0.95, 1.05, 1] }}
                  className="p-2 bg-green-50 border border-green-300 rounded-lg"
                >
                  <span className="text-xs px-2 py-1 bg-green-500 text-white rounded font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Client Approved
                  </span>
                </motion.div>
              )}
            </div>

            {/* Editor Payment */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <label className="text-xs text-secondary mb-1 block">Editor Payment</label>
                <motion.div
                  animate={{
                    backgroundColor: step >= 4 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                  }}
                  className="p-3 rounded-lg border-2 border-green-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-foreground font-medium">Maria (Editor)</span>
                    </div>
                    <motion.span
                      animate={{
                        color: step >= 4 ? 'rgb(22, 163, 74)' : 'rgb(220, 38, 38)'
                      }}
                      className="text-xs font-bold"
                    >
                      {step >= 4 ? 'Paid ✓' : 'Unpaid'}
                    </motion.span>
                  </div>
                  {step >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 text-xs text-green-600 font-medium"
                    >
                      Payment confirmed
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Dashboard View
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Dashboard</h4>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-secondary mb-1">Active</div>
                <div className="text-2xl font-bold text-primary">8</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-xs text-secondary mb-1">In Progress</div>
                <div className="text-2xl font-bold text-orange-600">5</div>
              </div>
              <motion.div
                animate={{
                  scale: step >= 7 ? [1, 1.08, 1] : 1,
                  borderColor: step >= 8 ? 'rgb(34, 197, 94)' : 'rgb(187, 247, 208)'
                }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-green-50 rounded-lg border-2 border-green-200 relative overflow-hidden"
              >
                <div className="text-xs text-secondary mb-1">Ready</div>
                <motion.div
                  animate={{
                    scale: step >= 7 ? [1, 1.2, 1] : 1
                  }}
                  className="text-2xl font-bold text-green-600"
                >
                  {step >= 7 ? '13' : '12'}
                </motion.div>

                {/* Glow effect */}
                {step >= 8 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1.5, repeat: 2 }}
                    className="absolute inset-0 bg-green-400 rounded-lg"
                    style={{ filter: 'blur(10px)' }}
                  />
                )}
              </motion.div>
            </div>

            {/* Recent Projects */}
            <div className="mt-4">
              <div className="text-xs text-secondary mb-2">Recent Completions</div>
              <div className="space-y-2">
                {step >= 7 && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="p-2 bg-white rounded-lg border border-green-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground">Emma & Ryan</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">
                        Completed
                      </span>
                    </div>
                  </motion.div>
                )}
                <div className="p-2 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">Sarah & James</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti sparkles */}
      {step >= 8 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, opacity: 1, scale: 0 }}
              animate={{
                y: [0, 300],
                opacity: [1, 0],
                scale: [0, 1, 0.5],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.3,
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '50%',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][i % 5],
                }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectJourney;
