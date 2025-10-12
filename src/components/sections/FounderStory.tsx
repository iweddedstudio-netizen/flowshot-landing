'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, MessageCircle, Zap } from 'lucide-react';

const FounderStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="story" className="py-32 relative overflow-hidden">
      {/* Dark gradient background */}
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
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-cyan-400 tracking-wider mb-4">
              OUR STORY
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6">
              Built from 10 years of real creative chaos
            </h2>

            <div className="text-base leading-relaxed text-gray-300 space-y-4">
              <p>
                For over a decade, I've worked with dozens of regular clients — from large studios to solo videographers — filming, editing, and managing projects across weddings, events, and commercials.
                Many teams had no proper workflow. Projects got lost, deadlines slipped, and communication scattered across chats and spreadsheets.
              </p>
              <p>
                Over the years, I've collected everything that worked best — from my clients, my own experience, and my team's insights — and turned it into one streamlined system.
                FlowShot is built from 10 years of real creative practice — designed to be simple, visual, and ready out of the box.
              </p>
              <p>
                Together with my team, led by me, <strong className="text-white font-semibold">Alex Ohnevskyi</strong>, we built the tool we always needed — so you can focus on creating, not managing chaos.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 rounded-full px-4 py-2 border border-cyan-500/30">
                <span className="text-sm font-semibold text-cyan-300">10+ years experience</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 border border-purple-500/30">
                <span className="text-sm font-semibold text-purple-300">3,000+ weddings edited worldwide</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2 border border-green-500/30">
                <span className="text-sm font-semibold text-green-300">Built by creators, trusted by pros</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Founder Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900 shadow-2xl border border-white/10">
                <img
                  src="/images/Screenshot_1.png"
                  alt="Alex Ohnevskyi - Founder & Creative Director"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="text-center p-8">
                            <svg class="w-16 h-16 text-primary/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p class="text-sm text-muted-foreground">
                              Add founder photo: /public/images/founder.jpg
                            </p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-white">
                  Alex Ohnevskyi
                </p>
                <p className="text-sm text-gray-400">
                  Founder & Creative Director
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
