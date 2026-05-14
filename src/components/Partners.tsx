'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const partners = ['▲Vercel', '_zapier', 'CURSOR', 'X', 'coinbase', 'stripe', 'linear', 'notion'];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 bg-surface-container-lowest overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-margin-x mb-12">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-primary block" />
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.3em]">
            Powered by our partners
          </h3>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="font-headline-md text-[28px] text-primary font-bold tracking-tight opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
