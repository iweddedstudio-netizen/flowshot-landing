'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageSquare, Share2, Zap, CheckSquare, Calendar, Users } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Real-Time Project Chat',
    description: 'Keep all conversations in context. No more switching between apps.',
    color: 'from-blue-500 to-cyan-500',
    demo: 'chat',
  },
  {
    icon: Share2,
    title: 'Client Portal',
    description: 'Share projects with clients via secure link. No account needed.',
    color: 'from-purple-500 to-pink-500',
    demo: 'portal',
  },
  {
    icon: Zap,
    title: 'Priority Indicators',
    description: 'Visual priority system keeps everyone aligned on what matters.',
    color: 'from-orange-500 to-red-500',
    demo: 'priority',
  },
  {
    icon: CheckSquare,
    title: 'Revision Checklists',
    description: 'Track changes with interactive checklists. Never miss feedback.',
    color: 'from-green-500 to-emerald-500',
    demo: 'checklist',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Auto-schedule shoots based on team availability and priorities.',
    color: 'from-indigo-500 to-blue-500',
    demo: 'calendar',
  },
  {
    icon: Users,
    title: 'Multi-Brand Workspaces',
    description: 'Manage multiple brands and teams in one organized space.',
    color: 'from-pink-500 to-rose-500',
    demo: 'workspace',
  },
];

// Mini demo components for each feature
const ChatDemo = () => (
  <div className="space-y-2">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-blue-500/10 rounded-lg p-2 text-xs"
    >
      <div className="font-semibold text-blue-600">Sarah:</div>
      <div className="text-gray-600">Updated the lighting setup</div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-purple-500/10 rounded-lg p-2 text-xs ml-4"
    >
      <div className="font-semibold text-purple-600">You:</div>
      <div className="text-gray-600">Perfect! Ready to shoot</div>
    </motion.div>
  </div>
);

const PortalDemo = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3 text-center"
  >
    <Share2 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
    <div className="text-xs font-semibold text-gray-700">flowshot.app/p/abc123</div>
    <div className="text-xs text-gray-500 mt-1">Secure • Expires in 7 days</div>
  </motion.div>
);

const PriorityDemo = () => {
  const priorityColors: Record<string, string> = {
    red: '#ef4444',
    orange: '#f97316',
    gray: '#6b7280',
  };

  return (
    <div className="space-y-2">
      {[
        { label: 'Product Launch', priority: 'high', color: 'red' },
        { label: 'Social Content', priority: 'medium', color: 'orange' },
        { label: 'Archive Shoot', priority: 'low', color: 'gray' },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-center gap-2 text-xs"
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: priorityColors[item.color] }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          <span className="text-gray-700">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

const ChecklistDemo = () => (
  <div className="space-y-2">
    {[
      { label: 'Adjust color grading', done: true },
      { label: 'Add client logo', done: true },
      { label: 'Export final cut', done: false },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + i * 0.1 }}
        className="flex items-center gap-2 text-xs"
      >
        <motion.div
          className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
            item.done ? 'bg-green-500 border-green-500' : 'border-gray-300'
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {item.done && (
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              className="w-3 h-3 text-white"
              viewBox="0 0 20 20"
              fill="none"
            >
              <motion.path
                d="M6 10l3 3 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </motion.div>
        <span className={item.done ? 'line-through text-gray-400' : 'text-gray-700'}>
          {item.label}
        </span>
      </motion.div>
    ))}
  </div>
);

const CalendarDemo = () => (
  <div className="grid grid-cols-7 gap-1">
    {Array.from({ length: 14 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 + i * 0.02 }}
        className={`aspect-square rounded text-xs flex items-center justify-center ${
          [3, 5, 9].includes(i)
            ? 'bg-indigo-500 text-white font-semibold'
            : 'bg-gray-100 text-gray-400'
        }`}
      >
        {i + 1}
      </motion.div>
    ))}
  </div>
);

const WorkspaceDemo = () => {
  const workspaceData = [
    {
      name: 'Studio A',
      count: 12,
      bgColor: 'rgba(236, 72, 153, 0.1)',
      gradientFrom: '#f472b6',
      gradientTo: '#db2777',
    },
    {
      name: 'Studio B',
      count: 8,
      bgColor: 'rgba(59, 130, 246, 0.1)',
      gradientFrom: '#60a5fa',
      gradientTo: '#2563eb',
    },
    {
      name: 'Studio C',
      count: 15,
      bgColor: 'rgba(16, 185, 129, 0.1)',
      gradientFrom: '#34d399',
      gradientTo: '#059669',
    },
  ];

  return (
    <div className="space-y-2">
      {workspaceData.map((workspace, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="rounded-lg p-2 flex items-center justify-between"
          style={{ backgroundColor: workspace.bgColor }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full"
              style={{
                background: `linear-gradient(to bottom right, ${workspace.gradientFrom}, ${workspace.gradientTo})`,
              }}
            />
            <span className="text-xs font-semibold text-gray-700">{workspace.name}</span>
          </div>
          <span className="text-xs text-gray-500">{workspace.count} projects</span>
        </motion.div>
      ))}
    </div>
  );
};

const demoComponents = {
  chat: ChatDemo,
  portal: PortalDemo,
  priority: PriorityDemo,
  checklist: ChecklistDemo,
  calendar: CalendarDemo,
  workspace: WorkspaceDemo,
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  const Icon = feature.icon;
  const DemoComponent = demoComponents[feature.demo as keyof typeof demoComponents];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ y }}
      className="relative group"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: -5,
        }}
        style={{
          rotateX,
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden h-full"
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

        {/* Floating icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateZ: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-secondary mb-6 leading-relaxed">
          {feature.description}
        </p>

        {/* Interactive Demo */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <DemoComponent />
        </div>

        {/* 3D depth effect */}
        <motion.div
          className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{
            background: `linear-gradient(to bottom right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const StandoutFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="standout-features"
      className="py-32 relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-accent/[0.05] to-white"
        style={{ y: backgroundY }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{
              background: `linear-gradient(to right, ${['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][i]}, transparent)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

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
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-primary uppercase mb-6">
              BUILT DIFFERENT
            </h3>
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
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

export default StandoutFeatures;
