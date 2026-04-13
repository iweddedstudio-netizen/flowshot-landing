'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn, revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const faqCategories = [
  {
    category: 'Product',
    items: [
      {
        question: 'What makes FlowShot different from Trello, Asana, or Monday?',
        answer:
          'FlowShot is built specifically for photo and video production. Unlike generic project tools, it has built-in video review with drawing tools, client questionnaires, branded delivery pages, automatic Google Drive and Dropbox folder creation, and a preset library designed for shoots — not sprints. Every feature is tailored to how studios actually work.',
      },
      {
        question: 'Can FlowShot handle both photo and video projects?',
        answer:
          'Yes. Every project supports photo, video, or both. You can link photo and video projects together so they share the same client info, cloud folder, and timeline. Crew assignments, packages, and deliverables are format-specific, so each side of the project gets exactly the right setup.',
      },
      {
        question: 'How does the Google Drive / Dropbox integration work?',
        answer:
          'Connect your cloud storage account once in Settings. When you create a new project, FlowShot automatically creates a folder with your custom subfolder structure — for example, RAW, Edited, and Delivery. You can customize the folder name template and subfolders for each provider.',
      },
      {
        question: 'Can I send questionnaires to my clients?',
        answer:
          'Yes. FlowShot includes a drag-and-drop questionnaire builder with 5 industry templates: Wedding, Corporate, Real Estate, Portrait, and Product. Send branded questionnaires to clients via email, track responses in real time, and send reminders — all from the project drawer.',
      },
    ],
  },
  {
    category: 'Team',
    items: [
      {
        question: 'How do I invite freelancers and crew members?',
        answer:
          'Send email invitations with specific roles — Owner, Co-Owner, Videographer, Video Editor, Photographer, Photo Editor, or Assistant. Each role sees only what is relevant to their work. Freelancers and crew join your workspace instantly via the invite link.',
      },
      {
        question: 'Is there a limit on team members?',
        answer:
          'Each plan includes a set number of seats: 1 on Starter, 3 on Pro, and 10 on Business. Seats are counted per organization. You can manage multiple organizations on Pro and Business plans.',
      },
    ],
  },
  {
    category: 'Billing & Data',
    items: [
      {
        question: 'Is my data secure?',
        answer:
          'FlowShot runs on Google Cloud with enterprise-grade security. Your data is scoped to your organization with strict multi-tenant isolation — no one outside your team can access it. All connections are encrypted, and Firestore security rules enforce access control at every level.',
      },
      {
        question: 'What happens if I cancel my subscription?',
        answer:
          'You can export your project data anytime. After cancellation, your account switches to read-only mode for 30 days, then data is archived. Cloud storage folders in Google Drive or Dropbox are yours and are never deleted by FlowShot.',
      },
      {
        question: 'Do you offer a free plan?',
        answer:
          'We offer an extended free trial for all early access users. After launch, every plan will include a 14-day free trial. No credit card is required to get started.',
      },
      {
        question: 'Can I switch plans later?',
        answer:
          'Yes, you can upgrade or downgrade anytime. Changes take effect at the start of your next billing cycle. There is no penalty for switching between plans.',
      },
    ],
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
          <Accordion type="single" collapsible className="w-full">
            {faqCategories.map((cat, catIndex) => (
              <div key={cat.category}>
                <div
                  className={cn(
                    'flex items-center gap-3 py-4',
                    catIndex === 0 ? 'pt-0' : 'pt-8'
                  )}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                    {cat.category}
                  </span>
                  <span className="block h-px flex-1 bg-amber/20" />
                </div>
                {cat.items.map((faq, itemIndex) => (
                  <AccordionItem
                    key={`${catIndex}-${itemIndex}`}
                    value={`${cat.category}-${itemIndex}`}
                  >
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
