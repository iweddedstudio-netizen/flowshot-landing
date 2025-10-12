'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Kanban, Flame, Check, ChevronRight, Calendar as CalendarIcon,
  Bell, FileText, Users, MessageSquare, Video, Upload, UserPlus,
  DollarSign, Download, Camera, Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Scene durations in ms - adjusted for better visibility
const SCENES = [
  { name: 'priority', duration: 3000, hint: 'Set priority' },      // Scene 1: Priority
  { name: 'drag-drop', duration: 4000, hint: 'Drag & drop' },     // Scene 2: Drag & Drop
  { name: 'rename-status', duration: 3500, hint: 'Customize statuses' }, // Scene 3: Custom Status
  { name: 'tabs', duration: 4500, hint: 'Intuitive interface' },          // Scene 4: Project Details
  { name: 'calendar', duration: 3500, hint: 'Plan events' },      // Scene 5: Calendar
  { name: 'notifications', duration: 4000, hint: 'Never miss important' }, // Scene 6: Notifications
  { name: 'team-chat', duration: 3500, hint: 'Team chat' },     // Scene 7: Team Chat
  { name: 'team-assign', duration: 4000, hint: 'Assign editors' },   // Scene 8: Team Assignment
  { name: 'payment', duration: 3500, hint: 'Track payments' },       // Scene 9: Payment Toggle
];

const AnimatedMockup = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile and prefers-reduced-motion
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const totalScenes = SCENES.length;

  // Second useEffect - Animation loop (MUST be called before any conditional returns)
  useEffect(() => {
    if (prefersReducedMotion || isPaused || isMobile) return;

    const scene = SCENES[currentScene];
    if (!scene) {
      console.error('Scene not found:', currentScene);
      return;
    }

    const updateInterval = 100; // Update every 100ms (reduced from 50ms)
    let lastUpdateTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastUpdateTime;

      // Only update if enough time has passed
      if (deltaTime >= updateInterval) {
        lastUpdateTime = currentTime;

        setSceneProgress((prev) => {
          const newProgress = prev + deltaTime;

          if (newProgress >= scene.duration) {
            // Move to next scene
            const nextScene = (currentScene + 1) % totalScenes;
            setCurrentScene(nextScene);
            return 0;
          }

          return newProgress;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentScene, isPaused, prefersReducedMotion, totalScenes, isMobile]);

  // Don't render on mobile devices (AFTER all hooks)
  if (isMobile) {
    return null;
  }

  // Calculate progress percentage for current scene
  const progressPercent = (sceneProgress / SCENES[currentScene].duration);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Monitor Glow Effect */}
      <div
        className="absolute inset-0 blur-2xl opacity-50 animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)',
          animationDuration: '3s'
        }}
      />

      {/* Monitor Screen Container - Fixed Size */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-border" style={{ width: '100%', aspectRatio: '16/10' }}>
        {/* Browser-like Top Bar */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Live</span>
          </div>
        </div>

        {/* Content Area - Fixed Height */}
        <div className="relative overflow-hidden" style={{ height: 'calc(100% - 52px)' }}>
          <AnimatePresence mode="wait">
            {currentScene === 0 && <Scene1Priority key="scene1" progress={progressPercent} />}
            {currentScene === 1 && <Scene2DragDrop key="scene2" progress={progressPercent} />}
            {currentScene === 2 && <Scene3RenameStatus key="scene3" progress={progressPercent} />}
            {currentScene === 3 && <Scene4Tabs key="scene4" progress={progressPercent} />}
            {currentScene === 4 && <Scene5Calendar key="scene5" progress={progressPercent} />}
            {currentScene === 5 && <Scene6Notifications key="scene6" progress={progressPercent} />}
            {currentScene === 6 && <Scene7TeamChat key="scene7" progress={progressPercent} />}
            {currentScene === 7 && <Scene8TeamAssign key="scene8" progress={progressPercent} />}
            {currentScene === 8 && <Scene9Payment key="scene9" progress={progressPercent} />}
          </AnimatePresence>
        </div>
      </div>

      {/* Corner tag with dynamic hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-4 right-4 bg-white rounded-lg shadow-md px-3 py-2 border border-border z-30"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentScene}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-medium text-foreground"
          >
            {SCENES[currentScene].hint}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// SCENE 1: Priority Selection
const Scene1Priority = ({ progress }: { progress: number }) => {
  const hoverProject = progress > 0.2 && progress < 0.8;
  const showDropdown = progress > 0.3;
  const selectHigh = progress > 0.6;
  const showTooltip = progress > 0.8 && progress < 0.95;

  const projects = [
    { id: 1, name: 'Corporate Event', client: 'TechCorp Inc.', type: '🎥 Video', date: 'May 20', color: 'from-blue-50 to-cyan-50', border: 'border-blue-100', priority: 'normal' },
    { id: 2, name: 'Brand Campaign', client: 'Fashion Studio', type: '📸 Photo', date: 'May 22', color: 'from-purple-50 to-pink-50', border: 'border-purple-100', priority: 'normal' },
    { id: 3, name: 'Wedding Editorial', client: 'Sarah & James', type: '📸 Photo + Video', date: 'May 25', color: 'from-rose-50 to-orange-50', border: 'border-rose-100', priority: 'normal' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Kanban className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-foreground">Active Projects</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-3">
        {projects.map((project, index) => {
          const isTargetProject = index === 1; // Brand Campaign
          const isHovered = isTargetProject && hoverProject;
          const hasPriority = isTargetProject && selectHigh;

          return (
            <motion.div
              key={project.id}
              className={`bg-gradient-to-br ${project.color} rounded-lg p-3 border ${project.border} relative`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: isHovered ? 1.02 : 1,
                boxShadow: hasPriority
                  ? '0 8px 24px rgba(249, 115, 22, 0.3)'
                  : isHovered
                  ? '0 4px 12px rgba(0,0,0,0.1)'
                  : '0 1px 3px rgba(0,0,0,0.05)'
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">{project.name}</h4>
                  <p className="text-xs text-secondary">{project.client}</p>
                </div>

                {/* Priority Icon with dropdown */}
                <div className="relative">
                  <motion.button
                    className="p-2 hover:bg-white/50 rounded-lg transition-colors relative"
                    animate={{
                      scale: progress > 0.25 && progress < 0.35 ? 1.1 : 1
                    }}
                  >
                    <Flame className={`w-4 h-4 ${
                      hasPriority ? 'text-orange-500' : isHovered ? 'text-orange-400' : 'text-gray-400'
                    }`} />
                  </motion.button>

                  {/* Dropdown - only on target project */}
                  {isTargetProject && (
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 bottom-12 bg-white rounded-lg shadow-xl border border-border p-2 w-32 z-50"
                        >
                          <div className="text-xs space-y-1">
                            <div className="px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2">
                              <Flame className="w-3 h-3 text-red-500" />
                              <span>Urgent</span>
                            </div>
                            <motion.div
                              className="px-2 py-1.5 rounded cursor-pointer flex items-center gap-2"
                              animate={{
                                backgroundColor: selectHigh ? 'rgba(249, 115, 22, 0.1)' : 'rgba(0, 0, 0, 0)'
                              }}
                            >
                              <Flame className="w-3 h-3 text-orange-500" />
                              <span className="font-medium">High</span>
                              {selectHigh && <Check className="w-3 h-3 text-orange-500 ml-auto" />}
                            </motion.div>
                            <div className="px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2">
                              <Flame className="w-3 h-3 text-yellow-500" />
                              <span>Medium</span>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2">
                              <Flame className="w-3 h-3 text-gray-300" />
                              <span>Normal</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.type}</span>
                <span>Due: {project.date}</span>
              </div>

              {/* Glow on select */}
              {hasPriority && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 pointer-events-none"
                />
              )}

              {/* Tooltip */}
              <AnimatePresence>
                {isTargetProject && showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-14 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap z-30"
                  >
                    Priority set to High
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Cursor */}
      <Cursor
        x={progress < 0.3 ? 280 : 300}
        y={progress < 0.6 ? 100 : 130}
        scale={progress > 0.3 && progress < 0.35 ? 0.9 : 1}
      />
    </motion.div>
  );
};

// SCENE 2: Drag & Drop
const Scene2DragDrop = ({ progress }: { progress: number }) => {
  const hovering = progress > 0.1 && progress < 0.2;
  const pickingUp = progress >= 0.2 && progress < 0.35;
  const draggingToReview = progress >= 0.35 && progress < 0.55;
  const draggingToReady = progress >= 0.55 && progress < 0.75;
  const dropped = progress >= 0.75;
  const showTooltip = progress > 0.85;

  // Calculate proper column width and gap
  // Grid has 3 columns with gap-3 (12px total gap space)
  // Each column is roughly 33.33% of width
  const columnWidth = 33.33; // percentage
  const gapSize = 1; // percentage equivalent of gap-3

  // Calculate card position - accounting for column padding (p-3 = 12px) and header
  let cardX = 0;
  let cardY = 0;
  let cardRotate = 0;
  let cardScale = 1;
  let cardOpacity = 1;
  let currentColumn = 0; // 0 = Editing, 1 = Review, 2 = Ready

  // Starting position: inside first column with padding (12px) + header (24px)
  const startX = 12; // Column padding
  const startY = 36; // Header height + padding
  const moveDistance = columnWidth + gapSize; // Move to next column

  if (pickingUp) {
    cardScale = 1.2;
    cardRotate = 4;
    cardX = startX;
    cardY = startY - 40; // Lift up
    cardOpacity = 1;
    currentColumn = 0;
  } else if (draggingToReview) {
    // Moving from Editing (0) to Review (1)
    const t = (progress - 0.35) / 0.2; // 0 to 1
    cardX = startX + t * (moveDistance * 3); // Move across column + gap
    cardY = startY - 50;
    cardRotate = 8;
    cardScale = 1.2;
    cardOpacity = 1;
    currentColumn = t > 0.5 ? 1 : 0;
  } else if (draggingToReady) {
    // Moving from Review (1) to Ready (2)
    const t = (progress - 0.55) / 0.2; // 0 to 1
    cardX = startX + (moveDistance * 3) + t * (moveDistance * 3); // Continue moving
    cardY = startY - 50;
    cardRotate = 8;
    cardScale = 1.2;
    cardOpacity = 1;
    currentColumn = t > 0.5 ? 2 : 1;
  } else if (dropped) {
    cardX = startX + (moveDistance * 6); // Final position in column 3
    cardY = startY;
    cardRotate = 0;
    cardScale = 1;
    cardOpacity = 1;
    currentColumn = 2;
  }

  const isMoving = pickingUp || draggingToReview || draggingToReady;
  const showStaticCard = !isMoving && !dropped;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
        <Kanban className="w-4 h-4 text-primary" />
        <span>Project Board</span>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-3 gap-3 relative">
        {/* Column 1: Editing */}
        <motion.div
          className="bg-gray-50 rounded-lg p-3 min-h-[120px] relative"
          animate={{
            backgroundColor: currentColumn === 0 && (draggingToReview || pickingUp) ? 'rgba(59, 130, 246, 0.08)' : 'rgb(249, 250, 251)',
            borderColor: currentColumn === 0 && (draggingToReview || pickingUp) ? 'rgba(59, 130, 246, 0.4)' : 'rgba(0, 0, 0, 0)'
          }}
          style={{ border: '2px dashed transparent' }}
        >
          <div className="text-xs font-bold text-gray-600 mb-2 uppercase">Editing</div>
          <AnimatePresence>
            {!isMoving && !dropped && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
              >
                <div className="text-xs font-medium mb-1">Brand Campaign</div>
                <Badge className="bg-blue-600 text-white text-xs">Editing</Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Column 2: Review */}
        <motion.div
          className="bg-gray-50 rounded-lg p-3 min-h-[120px]"
          animate={{
            backgroundColor: currentColumn === 1 && isMoving ? 'rgba(59, 130, 246, 0.08)' : 'rgb(249, 250, 251)',
            borderColor: currentColumn === 1 && isMoving ? 'rgba(59, 130, 246, 0.4)' : 'rgba(0, 0, 0, 0)'
          }}
          style={{ border: '2px dashed transparent' }}
        >
          <div className="text-xs font-bold text-gray-600 mb-2 uppercase">Review</div>
        </motion.div>

        {/* Column 3: Ready */}
        <motion.div
          className="bg-gray-50 rounded-lg p-3 min-h-[120px] relative"
          animate={{
            backgroundColor: currentColumn === 2 && isMoving ? 'rgba(59, 130, 246, 0.08)' : 'rgb(249, 250, 251)',
            borderColor: currentColumn === 2 && isMoving ? 'rgba(59, 130, 246, 0.4)' : 'rgba(0, 0, 0, 0)'
          }}
          style={{ border: '2px dashed transparent' }}
        >
          <div className="text-xs font-bold text-gray-600 mb-2 uppercase">Ready</div>
          {dropped && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
            >
              <div className="text-xs font-medium mb-1">Brand Campaign</div>
              <Badge className="bg-green-600 text-white text-xs">Ready</Badge>
            </motion.div>
          )}

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap z-30"
              >
                Status updated
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dragging Card - Absolute positioned with percentage-based positioning */}
        <AnimatePresence>
          {isMoving && (
            <motion.div
              className="absolute z-40 pointer-events-none left-0 top-0"
              animate={{
                x: `${cardX}%`,
                y: cardY,
                rotate: cardRotate,
                scale: cardScale,
                opacity: cardOpacity
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 25
              }}
              style={{
                width: `${columnWidth - 2}%`, // Slightly smaller than column for visibility
                transformOrigin: 'center center'
              }}
            >
              <motion.div
                className="bg-white rounded-lg p-3 border-3 border-primary shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 40px rgba(59, 130, 246, 0.4)',
                    '0 20px 60px rgba(59, 130, 246, 0.6)',
                    '0 15px 40px rgba(59, 130, 246, 0.4)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="text-xs font-bold mb-1 text-primary">Brand Campaign</div>
                <Badge className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white text-xs font-semibold shadow-lg">
                  ✨ Moving...
                </Badge>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Cursor
        x={progress < 0.2 ? 60 : progress < 0.35 ? 60 : progress < 0.55 ? 180 : progress < 0.75 ? 280 : 280}
        y={progress < 0.35 ? 100 : progress < 0.75 ? 90 : 100}
        scale={isMoving ? 0.95 : 1}
      />
    </motion.div>
  );
};

// SCENE 3: Rename Status & Color
const Scene3RenameStatus = ({ progress }: { progress: number }) => {
  const showRename = progress > 0.25 && progress < 0.75;
  const showColorPicker = progress > 0.5;
  const newColor = progress > 0.7;

  const statuses = [
    { name: 'Editing', color: 'bg-blue-500', isEditing: true },
    { name: 'Ready', color: 'bg-green-500', isEditing: false },
    { name: 'Uploaded', color: 'bg-purple-500', isEditing: false },
    { name: 'Delivered', color: 'bg-teal-500', isEditing: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      <div className="text-sm font-semibold text-foreground mb-4">Custom Statuses</div>

      <div className="space-y-2">
        {statuses.map((status, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-lg p-3 ${
              status.isEditing ? 'bg-primary/5 border-2 border-primary/20' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  status.isEditing && newColor ? 'bg-orange-500' : status.color
                }`}
              />

              {status.isEditing ? (
                <AnimatePresence mode="wait">
                  {!showRename ? (
                    <motion.span
                      key="editing"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-sm font-medium"
                    >
                      {status.name}
                    </motion.span>
                  ) : (
                    <motion.input
                      key="review"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-sm font-medium bg-white px-2 py-1 rounded border border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value="In Review"
                      readOnly
                    />
                  )}
                </AnimatePresence>
              ) : (
                <span className="text-sm font-medium text-gray-600">{status.name}</span>
              )}
            </div>

            {/* Color Picker - Only for editing status */}
            {status.isEditing && (
              <AnimatePresence>
                {showColorPicker && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-2 overflow-hidden mt-3 pt-3 border-t border-gray-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-transparent" />
                    <motion.div
                      className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"
                      animate={{
                        scale: newColor ? 1.15 : 1,
                        boxShadow: newColor
                          ? '0 0 0 3px rgba(249, 115, 22, 0.3)'
                          : '0 0 0 0px rgba(249, 115, 22, 0)'
                      }}
                    />
                    <div className="w-6 h-6 rounded-full bg-green-500" />
                    <div className="w-6 h-6 rounded-full bg-purple-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>

      <Cursor
        x={showColorPicker ? 150 : 120}
        y={showColorPicker ? 125 : 90}
        scale={1}
      />
    </motion.div>
  );
};

// SCENE 4: Project Detail Tabs
const Scene4Tabs = ({ progress }: { progress: number }) => {
  let activeTab = 0;
  if (progress > 0.3) activeTab = 1;
  if (progress > 0.55) activeTab = 2;
  if (progress > 0.8) activeTab = 3;

  const tabs = [
    { icon: FileText, label: 'Project Info' },
    { icon: Users, label: 'Client Info' },
    { icon: MessageSquare, label: 'Discussion' },
    { icon: Video, label: 'Shooting Day' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white text-xs font-semibold">
          W
        </div>
        <span>Wedding Editorial</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === index;

          return (
            <motion.div
              key={index}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                isActive ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
              }`}
              animate={{
                backgroundColor: isActive ? '#ffffff' : 'rgba(0, 0, 0, 0)',
                color: isActive ? '#3b82f6' : 'rgb(75, 85, 99)',
                scale: isActive ? 1.05 : 1,
                boxShadow: isActive ? '0 4px 12px rgba(59, 130, 246, 0.2)' : '0 0 0 rgba(0,0,0,0)'
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Content area */}
      <div className="bg-gray-50 rounded-lg p-4 h-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 0 && (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-gray-600">Type:</span><span>Photo + Video</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Location:</span><span>Garden Venue</span></div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-gray-600">Name:</span><span>Sarah & James</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Email:</span><span>sarah@email.com</span></div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="space-y-2">
                <div className="bg-white rounded p-2 text-xs">Latest comment: "Looks great!"</div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-gray-600">Date:</span><span>May 25, 2024</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Time:</span><span>14:00 - 20:00</span></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Cursor
        x={60 + activeTab * 70}
        y={70}
        scale={1}
      />
    </motion.div>
  );
};

// SCENE 5: Calendar View
const Scene5Calendar = ({ progress }: { progress: number }) => {
  const showTooltip1 = progress > 0.3 && progress < 0.6;
  const showPopup = progress > 0.6 && progress < 0.85;
  const toggleChecked = progress > 0.85;

  // Wedding events with different couples and service types
  const weddings = [
    { day: 8, names: 'Emma & Leo', services: ['photo'], color: 'bg-green-50' },
    { day: 12, names: 'Olivia & Noah', services: ['video'], color: 'bg-purple-50' },
    { day: 15, names: 'Sophia & Liam', services: ['photo', 'video'], color: 'bg-teal-50' },
    { day: 18, names: 'Ava & Mason', services: ['photo'], color: 'bg-emerald-50' },
    { day: 22, names: 'Mia & Ethan', services: ['video'], color: 'bg-violet-50' },
    { day: 25, names: 'Isabella & Lucas', services: ['photo', 'video'], color: 'bg-cyan-50' },
    { day: 29, names: 'Charlotte & Jack', services: ['photo'], color: 'bg-lime-50' },
  ];

  const getWeddingByDay = (day: number) => weddings.find(w => w.day === day);
  const isEvent = (day: number) => weddings.some(w => w.day === day);
  const hoveredDay = progress > 0.2 && progress < 0.7 ? 25 : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <CalendarIcon className="w-4 h-4 text-primary" />
          <span>May 2026</span>
        </div>
        {/* Legend */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Camera className="w-3 h-3" />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-1">
            <Video className="w-3 h-3" />
            <span>Video</span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-xs text-gray-500 font-medium py-1">{day}</div>
        ))}

        {[...Array(35)].map((_, i) => {
          const day = i - 2;
          const wedding = getWeddingByDay(day);
          const isHovered = hoveredDay === day;

          return (
            <motion.div
              key={i}
              className={`min-h-[45px] flex flex-col items-start justify-start text-xs rounded-lg relative p-1 ${
                day < 1 || day > 31 ? 'text-gray-300' :
                wedding ? 'bg-primary/10 text-primary cursor-pointer border border-primary/20' :
                'hover:bg-gray-50 cursor-pointer'
              }`}
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.25)' : undefined,
                zIndex: isHovered ? 10 : 1
              }}
            >
              {day > 0 && day <= 31 && (
                <>
                  <span className="text-xs font-semibold mb-0.5">{day}</span>
                  {wedding && (
                    <div className="text-xs leading-tight w-full">
                      <div className="font-medium truncate text-[10px]">{wedding.names}</div>
                      <div className="flex gap-0.5 mt-0.5">
                        {wedding.services.includes('photo') && <Camera className="w-2.5 h-2.5" />}
                        {wedding.services.includes('video') && <Video className="w-2.5 h-2.5" />}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Tooltip */}
              {isHovered && showTooltip1 && wedding && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap z-30"
                >
                  <div className="font-semibold">{wedding.names}</div>
                  <div className="flex items-center gap-1 mt-1 opacity-80">
                    {wedding.services.includes('photo') && <Camera className="w-3 h-3" />}
                    {wedding.services.includes('video') && <Video className="w-3 h-3" />}
                    <span className="capitalize">{wedding.services.join(' + ')}</span>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-6 left-6 right-6 bg-white rounded-lg shadow-2xl border border-border p-4 z-20"
          >
            <div className="text-xs mb-2">
              <div className="font-semibold mb-1 flex items-center gap-2">
                Isabella & Lucas Wedding
                <div className="flex items-center gap-1">
                  <Camera className="w-3 h-3 text-primary" />
                  <Video className="w-3 h-3 text-primary" />
                </div>
              </div>
              <div className="text-gray-600">Photographer: <span className="font-medium text-foreground">Alex</span> • Editor: <span className="font-medium text-foreground">Maria</span></div>
            </div>

            <motion.label
              className="flex items-center gap-2 text-xs cursor-pointer"
              animate={{
                backgroundColor: toggleChecked ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0, 0, 0, 0)'
              }}
            >
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                toggleChecked ? 'border-primary bg-primary' : 'border-gray-300'
              }`}>
                {toggleChecked && <Check className="w-3 h-3 text-white" />}
              </div>
              <span>Send deadline reminder</span>
            </motion.label>
          </motion.div>
        )}
      </AnimatePresence>

      <Cursor
        x={showPopup ? 50 : 240}
        y={showPopup ? 240 : 150}
        scale={1}
      />
    </motion.div>
  );
};

// SCENE 6: Notifications / Inbox
const Scene6Notifications = ({ progress }: { progress: number }) => {
  const showInbox = progress > 0.15;
  const showNotif1 = progress > 0.3;
  const showNotif2 = progress > 0.5;
  const hoverToggle = progress > 0.7;
  const checked = progress > 0.85;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="p-6 relative"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-foreground flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
          </div>
          <span>Notifications</span>
        </div>
        <motion.button
          className="p-2 rounded-lg hover:bg-gray-100 relative"
          animate={{
            scale: progress < 0.2 ? [1, 1.15, 1] : 1
          }}
          transition={{ duration: 0.6, repeat: progress < 0.2 ? Infinity : 0 }}
        >
          <Bell className="w-5 h-5 text-primary" />
          <motion.div
            className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
            animate={{
              scale: progress < 0.2 ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 0.6, repeat: progress < 0.2 ? Infinity : 0 }}
          />
        </motion.button>
      </div>

      {/* Inbox Panel */}
      <AnimatePresence>
        {showInbox && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            {showNotif1 && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-3 shadow-md"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <div className="text-xs font-bold text-blue-900">Status changed to Uploaded</div>
                </div>
                <div className="text-xs text-blue-700 font-medium">Brand Campaign • 5 min ago</div>
              </motion.div>
            )}

            {showNotif2 && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.15 }}
                className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-3 shadow-md"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="text-xs font-bold text-green-900">Files ready for download</div>
                </div>
                <div className="text-xs text-green-700 font-medium">Wedding Editorial • 1 hour ago</div>
              </motion.div>
            )}

            {/* Toggle */}
            {showNotif2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 rounded-lg p-3"
              >
                <motion.label
                  className="flex items-center gap-2 text-xs cursor-pointer"
                  animate={{
                    backgroundColor: hoverToggle ? 'rgba(59, 130, 246, 0.05)' : 'rgba(0, 0, 0, 0)',
                    scale: hoverToggle ? 1.02 : 1
                  }}
                >
                  <div className={`w-10 h-5 rounded-full transition-colors ${
                    checked ? 'bg-primary' : 'bg-gray-300'
                  } relative`}>
                    <motion.div
                      className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                      animate={{
                        left: checked ? '20px' : '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </div>
                  <span>Notify me when Uploaded</span>
                  {checked && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto"
                    >
                      <Check className="w-4 h-4 text-primary" />
                    </motion.span>
                  )}
                </motion.label>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Cursor
        x={hoverToggle ? 80 : 280}
        y={hoverToggle ? 200 : 60}
        scale={1}
      />
    </motion.div>
  );
};

// SCENE 7: Team Chat
const Scene7TeamChat = ({ progress }: { progress: number }) => {
  const showMessage1 = progress > 0.15;
  const showMessage2 = progress > 0.35;
  const showMessage3 = progress > 0.55;
  const showTyping = progress > 0.75 && progress < 0.9;
  const showMessage4 = progress >= 0.9;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
            W
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">Wedding Project</h3>
          <p className="text-xs text-gray-500">3 members online</p>
        </div>
        <MessageSquare className="w-4 h-4 text-primary" />
      </div>

      {/* Chat Messages */}
      <div className="space-y-3 h-[180px] overflow-hidden">
        {/* Message 1 - Alex (Left - Incoming) */}
        <AnimatePresence>
          {showMessage1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                A
              </div>
              <div className="flex-1 max-w-[70%]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-foreground">Alex</span>
                  <span className="text-xs text-gray-400">2:34 PM</span>
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 text-xs">
                  Hey team! Just finished shooting Isabella & Lucas wedding 📸
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message 2 - You (Right - Outgoing) */}
        <AnimatePresence>
          {showMessage2 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-end gap-2 justify-end"
            >
              <div className="flex-1 max-w-[70%] flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">2:35 PM</span>
                  <span className="text-xs font-medium text-foreground">You</span>
                </div>
                <div className="bg-primary text-white rounded-lg rounded-tr-none p-2 text-xs">
                  Great! Can you upload the RAW files? I'll start editing today
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                Y
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message 3 - Alex (Left - Incoming) */}
        <AnimatePresence>
          {showMessage3 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                A
              </div>
              <div className="flex-1 max-w-[70%]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-foreground">Alex</span>
                  <span className="text-xs text-gray-400">2:36 PM</span>
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 text-xs">
                  Sure! Uploading now... 450 photos
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing Indicator - Alex (Left) */}
        <AnimatePresence>
          {showTyping && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                A
              </div>
              <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 px-3">
                <div className="flex gap-1">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message 4 - You (Right - Outgoing) */}
        <AnimatePresence>
          {showMessage4 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-end gap-2 justify-end"
            >
              <div className="flex-1 max-w-[70%] flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">2:37 PM</span>
                  <span className="text-xs font-medium text-foreground">You</span>
                </div>
                <div className="bg-primary text-white rounded-lg rounded-tr-none p-2 text-xs font-medium">
                  Perfect! I'll have them ready by Friday 👍
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                Y
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Cursor
        x={progress < 0.5 ? 80 : 200}
        y={progress < 0.5 ? 120 : 220}
        scale={1}
      />
    </motion.div>
  );
};

// SCENE 8: Team Member Assignment
const Scene8TeamAssign = ({ progress }: { progress: number }) => {
  const showCard = progress > 0.1;
  const showDropdown = progress > 0.3 && progress < 0.75;
  const selectEditor = progress > 0.5;
  const editorAssigned = progress >= 0.75;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
          <Kanban className="w-4 h-4 text-white" />
        </div>
        <span>Project Board</span>
      </div>

      {/* Kanban Column */}
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="text-xs font-bold text-gray-600 mb-2 uppercase">In Progress</div>

        {/* Project Card */}
        {showCard && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="bg-white rounded-lg p-3 shadow-lg border-2 border-gray-200 relative"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-bold text-foreground text-sm mb-1.5">Brand Campaign</h4>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold shadow-md">
                  🔥 High Priority
                </Badge>
              </div>
            </div>

            {/* Team Section */}
            <motion.div
              className="mt-3 pt-3 border-t-2 border-gray-200"
              animate={{
                borderColor: showDropdown ? 'rgba(59, 130, 246, 0.3)' : 'rgb(229, 231, 235)'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-700 font-bold uppercase">Team Members</span>
                {!editorAssigned && (
                  <motion.button
                    className="p-1.5 rounded-lg transition-colors"
                    animate={{
                      scale: progress > 0.25 && progress < 0.35 ? [1, 1.2, 1] : 1,
                      backgroundColor: showDropdown ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0, 0, 0, 0)'
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <UserPlus className="w-4 h-4 text-primary" />
                  </motion.button>
                )}
              </div>

              {/* Team Members */}
              <div className="flex items-center gap-2">
                {/* Photographer - Already assigned */}
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md ring-2 ring-blue-200">
                    A
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>

                {/* Editor - Being assigned */}
                <AnimatePresence>
                  {editorAssigned && (
                    <motion.div
                      initial={{ scale: 0, x: -30, opacity: 0 }}
                      animate={{ scale: 1, x: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="relative"
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md ring-2 ring-purple-200"
                        animate={{
                          boxShadow: ['0 4px 6px rgba(168, 85, 247, 0.4)', '0 8px 16px rgba(168, 85, 247, 0.6)', '0 4px 6px rgba(168, 85, 247, 0.4)']
                        }}
                        transition={{ duration: 1.5, repeat: 2 }}
                      >
                        M
                      </motion.div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="absolute right-3 top-20 bg-white rounded-xl shadow-2xl border-2 border-primary/20 p-3 w-48 z-40"
                >
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-100">
                    <UserPlus className="w-4 h-4 text-primary" />
                    <div className="text-xs font-bold text-primary uppercase">Assign Member</div>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"
                      animate={{
                        backgroundColor: selectEditor ? 'rgba(139, 92, 246, 0.15)' : 'rgba(0, 0, 0, 0)',
                        scale: selectEditor ? 1.02 : 1,
                        boxShadow: selectEditor ? '0 4px 12px rgba(139, 92, 246, 0.2)' : '0 0 0 rgba(0,0,0,0)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md ring-2 ring-purple-200">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-gray-900">Maria</div>
                        <div className="text-xs text-purple-600 font-medium">Editor</div>
                      </div>
                      {selectEditor && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <Check className="w-4 h-4 text-purple-600 font-bold" />
                        </motion.div>
                      )}
                    </motion.div>

                    <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold shadow-md ring-2 ring-green-200">
                        S
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-gray-900">Sam</div>
                        <div className="text-xs text-green-600 font-medium">Videographer</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success notification */}
            <AnimatePresence>
              {editorAssigned && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute -bottom-14 left-0 right-0 flex items-center gap-2 text-xs font-bold text-green-700 bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border-2 border-green-300 shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                    className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                  <span>Maria assigned to project!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Cursor
        x={progress < 0.3 ? 280 : progress < 0.75 ? 200 : 120}
        y={progress < 0.3 ? 80 : progress < 0.75 ? 140 : 120}
        scale={selectEditor && !editorAssigned ? 0.95 : 1}
      />
    </motion.div>
  );
};

// SCENE 9: Payment Toggle
const Scene9Payment = ({ progress }: { progress: number }) => {
  const scrollDown = progress > 0.2;
  const highlightPayment = progress > 0.4 && progress < 0.8;
  const togglePayment = progress > 0.5;
  const paymentEnabled = progress > 0.65;
  const showConfirm = progress > 0.85;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="p-6"
    >
      <div className="text-sm font-semibold mb-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
          W
        </div>
        <span>Wedding Editorial</span>
      </div>

      {/* Project Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header with Project Value */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">Project Value</span>
            </div>
            <span className="text-xl font-bold text-primary">$2,500</span>
          </div>
        </div>

        {/* Project Info Fields */}
        <motion.div
          className="p-4 space-y-3"
          animate={{
            y: scrollDown ? -10 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Client */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-xs text-gray-500 uppercase font-medium">Client</span>
            <span className="text-sm font-medium">Sarah & James</span>
          </div>

          {/* Service Type */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-xs text-gray-500 uppercase font-medium">Service</span>
            <span className="text-sm font-medium">Photo + Video</span>
          </div>

          {/* Date */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-xs text-gray-500 uppercase font-medium">Event Date</span>
            <span className="text-sm font-medium">May 25, 2026</span>
          </div>

          {/* Payment Status Toggle */}
          <motion.div
            className="py-3 px-3 rounded-lg border-2"
            animate={{
              backgroundColor: highlightPayment ? 'rgba(59, 130, 246, 0.05)' : 'rgba(0, 0, 0, 0)',
              borderColor: highlightPayment ? 'rgba(59, 130, 246, 0.2)' : 'rgb(229, 231, 235)',
              scale: highlightPayment ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-medium">Payment Status</span>
                <span className="text-sm font-medium mt-1">
                  {paymentEnabled ? 'Received' : 'Pending'}
                </span>
              </div>

              <div className={`w-12 h-6 rounded-full transition-colors ${
                paymentEnabled ? 'bg-green-500' : 'bg-gray-300'
              } relative`}>
                <motion.div
                  className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{
                    left: paymentEnabled ? '24px' : '2px'
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </div>
            </label>
          </motion.div>

          {/* Status */}
          <div className="flex items-center justify-between py-2">
            <span className="text-xs text-gray-500 uppercase font-medium">Status</span>
            <Badge className="bg-orange-500 text-white text-xs">In Progress</Badge>
          </div>
        </motion.div>

        {/* Confirmation Toast */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-4 mb-4 flex items-center gap-2 text-xs text-green-700 bg-green-50 p-3 rounded-lg border border-green-200"
            >
              <Check className="w-4 h-4" />
              <span className="font-medium">Payment marked as received</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Cursor
        x={togglePayment ? 260 : 200}
        y={togglePayment ? 185 : 80}
        scale={highlightPayment ? 0.95 : 1}
      />
    </motion.div>
  );
};

// Reusable Cursor Component
const Cursor = ({ x, y, scale }: { x: number; y: number; scale?: number }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      animate={{ x, y, scale: scale || 1 }}
      transition={{
        duration: 0.5, // Faster cursor movement
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-lg border-2 border-primary/50"
        animate={{
          boxShadow: scale && scale > 1 ? '0 0 20px rgba(59, 130, 246, 0.4)' : '0 4px 12px rgba(0,0,0,0.15)'
        }}
      />
    </motion.div>
  );
};

export default AnimatedMockup;
