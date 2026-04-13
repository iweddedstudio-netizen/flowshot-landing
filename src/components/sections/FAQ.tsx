'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const faqs = [
  {
    question: 'Can FlowShot support only photo or only video?',
    answer:
      'Yes! FlowShot is designed to handle both photo and video workflows separately or together. You can customize your catalog, pipeline stages, and team roles to match your specific production type.',
  },
  {
    question: 'How do I invite freelancers and crew members?',
    answer:
      'Use invite mode with granular permissions. You can assign roles (Editor, Coordinator, Viewer) and control what each team member can see and edit. Invites are sent via email, and members can join your workspace instantly.',
  },
  {
    question: 'How does billing work?',
    answer:
      'FlowShot offers simple per-organization pricing with unlimited users. You pay for each studio or brand workspace you create. Contact our team to discuss custom pricing for larger collectives or enterprise needs.',
  },
  {
    question: 'Can we track revisions and approval trails?',
    answer:
      'Yes! FlowShot includes revision tracking and approval history on every project. See who changed what and when, with in-thread approvals that keep your entire team on the same page.',
  },
  {
    question: 'What happens if we cancel?',
    answer: 'You can export your data anytime.',
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-amber/10 bg-background py-32 lg:py-40"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={revealUp} className="mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              FAQ
            </span>
            <span className="block h-px w-8 bg-amber/60" />
          </motion.div>
          <motion.h2
            variants={revealUp}
            className="font-heading text-4xl leading-[1.05] text-foreground md:text-6xl"
          >
            Questions?{' '}
            <span className="italic font-light text-amber">We have answers.</span>
          </motion.h2>
          <motion.p
            variants={revealUp}
            className="mt-6 text-lg text-muted-foreground"
          >
            Everything you need to know about FlowShot.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <Accordion type="single" collapsible className="w-full border-t border-amber/10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
