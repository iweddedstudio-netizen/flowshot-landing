'use client';

import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useRef } from 'react';

const faqs = [
  {
    question: 'Can FlowShot support only photo or only video?',
    answer: 'Yes! FlowShot is designed to handle both photo and video workflows separately or together. You can customize your catalog, pipeline stages, and team roles to match your specific production type.',
  },
  {
    question: 'How do I invite freelancers and crew members?',
    answer: 'Use invite mode with granular permissions. You can assign roles (Editor, Coordinator, Viewer) and control what each team member can see and edit. Invites are sent via email, and members can join your workspace instantly.',
  },
  {
    question: 'How does billing work?',
    answer: 'FlowShot offers simple per-organization pricing with unlimited users. You pay for each studio or brand workspace you create. Contact our team to discuss custom pricing for larger collectives or enterprise needs.',
  },
  {
    question: 'Can we track revisions and approval trails?',
    answer: 'Yes! FlowShot includes revision tracking and approval history on every project. See who changed what and when, with in-thread approvals that keep your entire team on the same page.',
  },
  {
    question: 'What happens if we cancel?',
    answer: 'You can export your data anytime.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section ref={sectionRef} id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white via-primary/[0.01] to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Questions? We have answers.
          </h2>
          <p className="text-lg text-secondary">
            Everything you need to know about FlowShot
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-secondary pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
