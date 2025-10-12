'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
      className="bg-blue-500/20 rounded-lg p-2 text-xs"
    >
      <div className="font-semibold text-blue-300">Sarah:</div>
      <div className="text-gray-300">Updated the lighting setup</div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-purple-500/20 rounded-lg p-2 text-xs ml-4"
    >
      <div className="font-semibold text-purple-300">You:</div>
      <div className="text-gray-300">Perfect! Ready to shoot</div>
    </motion.div>
  </div>
);

const PortalDemo = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 text-center"
  >
    <Share2 className="w-8 h-8 mx-auto mb-2 text-purple-300" />
    <div className="text-xs font-semibold text-gray-200">flowshot.app/p/abc123</div>
    <div className="text-xs text-gray-400 mt-1">Secure • Expires in 7 days</div>
  </motion.div>
);

const PriorityDemo = () => {
  const priorityColors: Record<string, string> = {
    red: '#f87171',
    orange: '#fb923c',
    gray: '#9ca3af',
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
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: priorityColors[item.color] }}
          />
          <span className="text-gray-300">{item.label}</span>
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
            item.done ? 'bg-green-500 border-green-500' : 'border-gray-400'
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
        <span className={item.done ? 'line-through text-gray-500' : 'text-gray-300'}>
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
            : 'bg-white/10 text-gray-400'
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
            <span className="text-xs font-semibold text-gray-200">{workspace.name}</span>
          </div>
          <span className="text-xs text-gray-400">{workspace.count} projects</span>
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
  const Icon = feature.icon;
  const DemoComponent = demoComponents[feature.demo as keyof typeof demoComponents];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative group"
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/15">
        {/* Content */}
        <h3 className="text-2xl font-heading font-semibold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-200 mb-6 leading-relaxed">
          {feature.description}
        </p>

        {/* Interactive Demo */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <DemoComponent />
        </div>
      </div>
    </motion.div>
  );
};

const StandoutFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="standout-features"
      className="py-32 relative overflow-hidden"
    >
      {/* Dark gradient background - unique carousel-inspired style */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-cyan-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/25 via-transparent to-blue-950/20" />

      {/* Animated gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl -top-40 -left-40"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/25 via-pink-500/15 to-transparent blur-3xl top-20 right-0"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/20 via-rose-500/12 to-transparent blur-3xl bottom-0 left-1/3"
        />
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
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-cyan-400 uppercase mb-6">
              BUILT DIFFERENT
            </h3>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Features That Make
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Production Teams Faster
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
          <p className="text-lg text-gray-300 mb-6">
            And we're just getting started...
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            See All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StandoutFeatures;
