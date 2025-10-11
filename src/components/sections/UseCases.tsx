'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Building2, User, Users } from 'lucide-react';

const cases = [
  {
    icon: Building2,
    title: 'Studios',
    description: 'Multi-brand, multi-member. One place for bookings, pricing, and status tracking.',
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: User,
    title: 'Freelancers',
    description: 'Ready-to-sell packages. Faster proposals. Less admin, more shooting.',
    color: 'from-accent/10 to-accent/5',
  },
  {
    icon: Users,
    title: 'Agencies',
    description: 'Collaborate with subcontractors and clients — share only what they need.',
    color: 'from-purple-100 to-purple-50',
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Who it's for
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
            Built for studios and solo creators
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="h-full"
              >
                <Card className="h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 border border-border/50 bg-white">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-8 h-8 ${
                        index === 0 ? 'text-primary' :
                        index === 1 ? 'text-accent' :
                        'text-purple-600'
                      }`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {useCase.title}
                  </h3>

                  <p className="text-base leading-relaxed text-secondary">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
