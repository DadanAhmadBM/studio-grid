'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-section-gap px-margin-x bg-surface-container-lowest border-t border-outline-variant/20"
    >
      <div className="max-w-container-max mx-auto text-center flex flex-col items-center gap-12">
        <motion.div
          className="flex items-center gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 bg-secondary block" />
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase">
            Start a Project
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="font-display-xl text-[clamp(48px,8vw,120px)] leading-[0.95] text-primary tracking-tighter text-gradient"
            initial={{ y: 80, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            LET'S MAKE<br />SOMETHING<br />UNFORGETTABLE.
          </motion.h2>
        </div>

        <motion.a
          href="mailto:hello@studiogrid.co"
          className="inline-flex items-center gap-3 bg-secondary text-on-secondary font-label-caps text-label-caps px-10 py-5 hover:bg-primary hover:text-on-primary transition-all duration-300 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          hello@studiogrid.co
          <span className="material-symbols-outlined text-sm">north_east</span>
        </motion.a>
      </div>
    </section>
  );
}
