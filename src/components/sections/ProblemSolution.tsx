'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Package, Calendar, Shield } from 'lucide-react';
import Image from 'next/image';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSolution = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

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
      className="py-24 relative overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute w-full h-[140%] -top-[20%]"
        >
          <Image
            src="/images/problem-background.jpg"
            alt="Problem background"
            fill
            className="object-cover"
            quality={90}
            priority={false}
          />
        </motion.div>
        {/* White overlay with subtle blur */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
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
            className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <div className="mb-6">
              <Package className="w-8 h-8 text-slate-700 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
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
            className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <div className="mb-6">
              <Calendar className="w-8 h-8 text-slate-700 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
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
            className="group md:col-span-2 lg:col-span-1 p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <div className="mb-6">
              <Shield className="w-8 h-8 text-slate-700 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
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
