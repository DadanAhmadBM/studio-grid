'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  const words = "We don't just build digital solutions—we craft emotions. Because it's emotions that earn trust, spark interaction, and drive decisions.".split(' ');

  return (
    <section
      id="about"
      ref={ref}
      className="py-section-gap px-margin-x bg-background"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-start-3 md:col-span-8 text-center flex flex-col items-center">
          {/* Section label */}
          <motion.div
            className="flex items-center gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 bg-error block" />
            <span className="font-label-caps text-label-caps text-error tracking-[0.3em] uppercase">
              WHO WE ARE
            </span>
          </motion.div>

          {/* Animated word-by-word headline */}
          <h2 className="font-headline-lg text-headline-lg text-primary mb-16 leading-tight max-w-4xl mx-auto">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0.15, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.04,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Image */}
          <motion.div
            className="w-64 h-40 overflow-hidden mb-12 border border-surface-variant relative group"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF7IU_0NLBlWwGuv3YSTSwEL7XIY1mI8nXldOwJPG6YsLaAqGXvwYhTiitJiCifiXbhLYOP2Fj1q4AAUNmrDdUKSCnyb4g9ffIJwH_HgDgcq7hMsN8mK-pIL-4IWZgmoR8EXZVGr3Qzn2okjSQys-UPmKTYwgC3oobSTcWTDJ0XYTRNbZft5FQEspsG8f9xC0KPxhprzw75YlO-wWhrCbLxPkJTt8l7esB9inMCzkBw1TC4wLVc4GfrWatSrZCDa5l5yOHEDN2_I0"
              alt="Abstract concept"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ delay: 1.2, duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Body copy */}
          <motion.p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            We create meaningful experiences that connect with your audience, turning ideas into
            emotions that inspire engagement, trust, lasting impact, and memorable brand loyalty.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
