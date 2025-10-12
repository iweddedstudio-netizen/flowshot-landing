'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Kanban, Calendar, Users } from 'lucide-react';

const tours = [
  {
    id: 1,
    icon: Package,
    title: 'Catalog & Pricing',
    message: 'Build service packages, brand presets, and reusable templates.',
    description: 'Keep your catalog organized and ready to send in minutes.',
    color: 'from-primary/10 to-primary/5',
  },
  {
    id: 2,
    icon: Kanban,
    title: 'Project Pipeline',
    message: 'Manage shoots, edits, notes, and approvals in real time.',
    description: '',
    examples: ['Wedding', 'Event', 'Commercial', 'Family Session'],
    color: 'from-accent/10 to-accent/5',
  },
  {
    id: 3,
    icon: Calendar,
    title: 'Calendar & Notifications',
    message: 'Auto-reminders keep deadlines aligned across the team and clients.',
    description: '',
    reminders: [
      'Shoot: Sat 3 PM — reminder to crew (24h)',
      'Edit draft due: Tue — client ping',
      'Final delivery: link expires in 14 days'
    ],
    color: 'from-green-100 to-green-50',
  },
];

const ProductTour = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (tours.length - 1));
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="product-tour"
      className="py-32 bg-gradient-to-b from-white via-primary/[0.02] to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Explore how FlowShot streamlines your creative workflow
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Everything you need to plan, manage, and deliver photo & video projects.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {tours.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none snap-center min-w-[85vw] md:min-w-[70vw] lg:min-w-[45vw]"
              >
                <div className="h-full bg-white rounded-xl shadow-xl p-8 md:p-10 border border-border/50">
                  {/* Icon with gradient */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tour.color} flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-8 h-8 ${
                        index === 0 ? 'text-primary' :
                        index === 1 ? 'text-accent' :
                        'text-green-600'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3">
                    {tour.title}
                  </h3>
                  <p className="text-lg font-medium mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {tour.message}
                  </p>

                  {/* Inline Examples for Project Pipeline */}
                  {(tour as any).examples && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {(tour as any).examples.join(' • ')}
                    </p>
                  )}

                  {/* Description if present */}
                  {tour.description && (
                    <p className="text-base leading-relaxed text-secondary mb-4">
                      {tour.description}
                    </p>
                  )}

                  {/* Mini List for Calendar & Notifications */}
                  {(tour as any).reminders && (
                    <ul className="space-y-2 mb-4">
                      {(tour as any).reminders.map((reminder: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{reminder}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Lighter Visual with gradient accent */}
                  <div className="mt-8 aspect-video bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-purple-50/30 rounded-xl border border-primary/10 flex items-center justify-center overflow-hidden relative">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-50" />
                    <div className="relative z-10 flex items-center gap-2 text-muted-foreground/40">
                      <Icon className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {tours.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.scrollWidth / tours.length;
                  scrollRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductTour;
