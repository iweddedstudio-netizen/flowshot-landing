'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Package, Calendar, Shield } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSolution = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !headlineRef.current) return;

    // Split text for animation
    const split = new SplitType(headlineRef.current, { types: 'words,chars' });

    // GSAP timeline for headline reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headlineRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // Cleanup
    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="problem-solution"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight max-w-4xl mx-auto"
          >
            Stop juggling tools and chats
          </h2>
        </div>

        {/* Solution Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
        >
          {/* Offer Catalog */}
          <motion.div
            variants={fadeUp}
            className="group"
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
                <Package className="w-7 h-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
              Offer Catalog
            </h3>
            <p className="text-base leading-relaxed text-secondary">
              Build packages and presets in minutes. Price once — reuse across projects.
            </p>
          </motion.div>

          {/* Unified Timeline */}
          <motion.div
            variants={fadeUp}
            className="group"
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-105">
                <Calendar className="w-7 h-7 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent/80" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
              Unified Timeline
            </h3>
            <p className="text-base leading-relaxed text-secondary">
              Kanban + Calendar + Archive: one view for shoots, edits, and delivery.
            </p>
          </motion.div>

          {/* Role-based Invites */}
          <motion.div
            variants={fadeUp}
            className="group md:col-span-2 lg:col-span-1"
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-all duration-300 group-hover:scale-105">
                <Shield className="w-7 h-7 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:text-green-700" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
              Role-based Invites
            </h3>
            <p className="text-base leading-relaxed text-secondary">
              Invite assistants, editors, or clients with precise permissions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
