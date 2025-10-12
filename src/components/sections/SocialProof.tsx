'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const metrics = [
  { value: 32, suffix: '%', label: 'Faster booking confirmations', prefix: '+' },
  { value: 45, suffix: '%', label: 'Less onboarding time', prefix: '-' },
  { value: 100, suffix: '+', label: 'Studios using FlowShot', prefix: '' },
];

const testimonials = [
  {
    quote: 'Finally ditched Notion and sheets - FlowShot keeps everything in sync.',
    author: 'Chloe & Zac',
    role: 'Wedding Studio',
    location: 'Texas',
  },
  {
    quote: 'Our crew can see priorities change in real-time. No more "did you get my text?" chaos.',
    author: 'Marcus Lee',
    role: 'Commercial Production',
    location: 'Los Angeles',
  },
  {
    quote: 'Multi-brand support is a game changer. We manage three studios in one FlowShot workspace.',
    author: 'Sarah K.',
    role: 'Freelancer Collective',
    location: 'New York',
  },
];

function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1.2 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  // Check for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <span ref={ref}>
      {prefix}
      {prefersReducedMotion ? value : displayValue}
      {suffix}
    </span>
  );
}

const SocialProof = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section ref={sectionRef} id="social-proof" className="py-32 bg-gradient-to-b from-white via-accent/[0.03] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Trusted by studios worldwide
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Real results from real production teams
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  duration={1.2}
                />
              </div>
              <p className="text-base text-secondary font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 rounded-2xl shadow-lg border-0 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

                <p className="text-base leading-relaxed text-foreground mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-secondary">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
