'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Share2, Zap, CheckSquare, Download, Users } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Project-based Chat',
    description: 'Each project has its own chat — no more scrolling through endless messages.',
    color: 'from-blue-500 to-cyan-500',
    demo: 'chat',
  },
  {
    icon: Share2,
    title: 'Client Portal',
    description: 'Your clients can track project progress, sign contracts, send feedback, and make payments — all through one secure link.',
    color: 'from-purple-500 to-pink-500',
    demo: 'portal',
    comingSoon: true,
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
    icon: Download,
    title: 'Delivery Page',
    description: 'Clients preview and download films directly — no messy cloud links.',
    color: 'from-indigo-500 to-blue-500',
    demo: 'delivery',
  },
  {
    icon: Users,
    title: 'Project Page',
    description: 'A clear space for your workflow — info, clients, discussions, and the day-of plan.',
    color: 'from-pink-500 to-rose-500',
    demo: 'projectpage',
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
  const priorities = [
    { label: 'Urgent', hasFlame: true, color: 'text-red-400' },
    { label: 'High', hasFlame: false, color: 'text-orange-400' },
    { label: 'Medium', hasFlame: false, color: 'text-yellow-400' },
    { label: 'Normal', hasFlame: false, color: 'text-gray-400' },
  ];

  return (
    <div className="space-y-1">
      {/* Dropdown header */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10 mb-2"
      >
        <span className="text-xs text-gray-400">Set Priority</span>
        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Priority options */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-xl"
      >
        {priorities.map((priority, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.08 }}
            className="px-3 py-2 border-b border-white/5 last:border-b-0 flex items-center gap-2"
          >
            <span className={`text-sm font-medium ${priority.color}`}>
              {priority.label}
            </span>
            {priority.hasFlame && (
              <svg
                className="w-6 h-6 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c-1.5 4-4 6-7 7 3.5 1 5.5 3.5 6 7 .5-3.5 2.5-6 6-7-3-1-5.5-3-5-7z" />
              </svg>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ChecklistDemo = () => {
  const feedbackItems = [
    { time: '02:07', label: 'Trim groom reaction shot', done: true },
    { time: '03:05', label: 'Add logo at the end', done: true },
    { time: '05:40', label: 'Brighten the ceremony clip', done: false },
  ];

  return (
    <div className="space-y-2">
      {/* Header with version badge */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10"
      >
        <span className="text-xs font-semibold text-gray-300">Client Feedback</span>
        <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded">
          V1
        </span>
      </motion.div>

      {/* Checklist items */}
      {feedbackItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-start gap-2 p-2 rounded-lg"
        >
          {/* Checkbox */}
          <div
            className={`flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center mt-0.5 ${
              item.done ? 'bg-blue-500 border-blue-500' : 'border-gray-500'
            }`}
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
          </div>

          {/* Time and label */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-blue-400 flex-shrink-0">
                {item.time}
              </span>
              <span className={`text-xs ${item.done ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const DeliveryDemo = () => {
  return (
    <div className="space-y-2">
      {/* Video Preview Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative w-full h-32 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40 rounded-lg overflow-hidden border border-white/10"
      >
        {/* Play button overlay */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </motion.div>

        {/* Video title */}
        <div className="absolute bottom-1.5 left-1.5 right-1.5">
          <div className="text-xs font-semibold text-white/90 backdrop-blur-sm bg-black/30 px-2 py-0.5 rounded text-center">
            Wedding_Final.mp4
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded text-xs font-semibold shadow-md"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-white/10 border border-white/20 text-gray-200 rounded text-xs font-semibold"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Feedback
        </motion.button>
      </div>
    </div>
  );
};

const ProjectPageDemo = () => {
  const tabs = [
    { icon: '📄', label: 'Project Info', active: true },
    { icon: '👤', label: 'Client Info', active: false },
    { icon: '💬', label: 'Discussion', active: false },
  ];

  const fields = [
    { label: 'PROJECT NAME', value: 'Alex + Maria' },
    { label: 'PROJECT TYPE', value: 'Wedding', tag: true },
    { label: 'STATUS', value: 'Scheduled', status: true },
    { label: 'EVENT DATE', value: 'Oct 10, 2025', date: true },
  ];

  return (
    <div className="space-y-2">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-1 mb-3 pb-2 border-b border-white/10"
      >
        {tabs.map((tab, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
              tab.active
                ? 'bg-white/10 text-gray-200 font-semibold'
                : 'text-gray-500'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Fields */}
      <div className="space-y-2">
        {fields.map((field, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.1 }}
            className="flex items-center justify-between text-xs"
          >
            <span className="text-gray-500 uppercase text-[10px] font-semibold tracking-wide">
              {field.label}
            </span>
            <div className="flex items-center gap-1">
              {field.tag ? (
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-xs font-semibold border border-blue-500/30">
                  {field.value}
                </span>
              ) : field.status ? (
                <span className="px-2 py-0.5 bg-green-500/20 text-green-300 rounded text-xs font-semibold border border-green-500/30">
                  {field.value}
                </span>
              ) : field.date ? (
                <span className="text-gray-300 font-medium flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {field.value}
                </span>
              ) : (
                <span className="text-gray-300 font-medium">{field.value}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const demoComponents = {
  chat: ChatDemo,
  portal: PortalDemo,
  priority: PriorityDemo,
  checklist: ChecklistDemo,
  delivery: DeliveryDemo,
  projectpage: ProjectPageDemo,
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const DemoComponent = demoComponents[feature.demo as keyof typeof demoComponents];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative group"
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:bg-white/15">
        {/* Coming Soon Badge */}
        {feature.comingSoon && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
            Coming soon
          </div>
        )}

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
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      ref={sectionRef}
      id="standout-features"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Static background - optimized for mobile */}
      <div className="absolute inset-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/25 via-transparent to-blue-950/20" />

        {/* Static gradient orbs for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl -top-40 -left-40" />
          <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/12 via-pink-500/8 to-transparent blur-3xl top-20 right-0" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/6 to-transparent blur-3xl bottom-0 left-1/3" />
        </div>
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
              Based on real experience
            </h3>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tools that make sense
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built to simplify how studios and creators work.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StandoutFeatures;
