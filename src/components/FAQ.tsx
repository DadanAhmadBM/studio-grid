'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    id: 'process',
    code: 'EN',
    label: 'PROCESS',
    content: 'Our process begins with deep discovery—understanding your goals, audience, and market position. From there we move through strategy, concept, design, and delivery in iterative sprints with full transparency at every stage.',
  },
  {
    id: 'timeline',
    code: 'TM',
    label: 'TIMELINE',
    content: 'Typical projects run 6–12 weeks depending on scope. Brand identity alone takes 3–4 weeks; full digital experiences range 8–16 weeks. We align timelines to your business needs and communicate milestones clearly.',
  },
  {
    id: 'pricing',
    code: 'PR',
    label: 'PRICING',
    content: 'We offer fixed-scope proposals and retainer arrangements. Projects start from $8,000 for focused brand work and scale to $80,000+ for full platform builds. Every engagement includes a free discovery call.',
  },
  {
    id: 'deliverables',
    code: 'DL',
    label: 'DELIVERABLES',
    content: 'You receive all source files, handoff documentation, and a thorough walkthrough of every asset. Brand projects include logo suite, guidelines PDF, and brand kit. Digital builds include full codebase and deployment.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-section-gap px-margin-x bg-background border-t border-outline-variant/30"
    >
      <div className="max-w-container-max mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 bg-primary block" />
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase">
            FAQ
          </span>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === faq.id;
            return (
              <motion.div
                key={faq.id}
                className="border-t border-outline-variant/30 last:border-b"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between py-10 group hover:bg-surface-container/30 transition-colors px-0 text-left"
                >
                  <div className="flex items-start">
                    <motion.h2
                      className="font-headline-md text-[40px] md:text-[64px] leading-none uppercase text-primary tracking-tight"
                      animate={{ color: isOpen ? '#e9c176' : '#ffffff' }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.label}
                    </motion.h2>
                    <span className="font-label-caps text-[10px] text-on-surface-variant ml-2 mt-2">
                      {faq.code}
                    </span>
                  </div>

                  <motion.span
                    className="material-symbols-outlined text-primary"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    add
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body-lg text-body-lg text-on-surface-variant pb-10 max-w-3xl">
                        {faq.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
