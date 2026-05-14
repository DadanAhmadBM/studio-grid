'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    id: '01',
    name: 'STRATEGY',
    description: 'Crafting data-driven roadmaps that align your vision with measurable outcomes and market opportunities.',
    image: null,
  },
  {
    id: '02',
    name: 'CREATIVE DESIGN',
    description: 'Forging immersive visual identities that transcend aesthetics to evoke genuine, lasting emotional connections.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7IU_0NLBlWwGuv3YSTSwEL7XIY1mI8nXldOwJPG6YsLaAqGXvwYhTiitJiCifiXbhLYOP2Fj1q4AAUNmrDdUKSCnyb4g9ffIJwH_HgDgcq7hMsN8mK-pIL-4IWZgmoR8EXZVGr3Qzn2okjSQys-UPmKTYwgC3oobSTcWTDJ0XYTRNbZft5FQEspsG8f9xC0KPxhprzw75YlO-wWhrCbLxPkJTt8l7esB9inMCzkBw1TC4wLVc4GfrWatSrZCDa5l5yOHEDN2_I0',
    active: true,
  },
  {
    id: '03',
    name: 'DIGITAL GROWTH',
    description: "Accelerating your brand's digital presence through targeted campaigns, SEO, and conversion optimization.",
    image: null,
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>('02');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="py-section-gap px-margin-x bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-start mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-secondary block" />
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
            OUR AREA OF SPECIALIZATION
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col w-full border-t border-outline-variant/30">
          {services.map((service, i) => {
            const isActive = hovered === service.id;
            return (
              <motion.div
                key={service.id}
                className={`group relative flex flex-col md:flex-row items-center border-b border-outline-variant/30 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive ? 'bg-black py-12 px-4 md:px-12 -mx-4 md:-mx-12 shadow-2xl' : 'py-8'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.7 }}
                onHoverStart={() => setHovered(service.id)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* Service name */}
                <div className="w-full md:w-1/3 text-left font-headline-md text-3xl md:text-4xl uppercase text-primary tracking-tight mb-6 md:mb-0 z-10">
                  {service.name}
                </div>

                {/* Image preview (only when active) */}
                <AnimatePresence>
                  {isActive && service.image && (
                    <motion.div
                      className="relative md:absolute md:left-[32%] lg:left-[35%] w-48 h-64 z-20 shadow-2xl overflow-hidden rounded-md mb-6 md:mb-0 border border-white/10"
                      initial={{ opacity: 0, scale: 0.85, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: 10 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Number */}
                <div
                  className={`w-16 md:w-32 text-center font-body-lg z-10 md:ml-auto transition-colors duration-300 ${
                    isActive ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  {service.id}
                </div>

                {/* Description + arrow */}
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-end gap-8 z-10">
                  <AnimatePresence>
                    {isActive && service.description && (
                      <motion.p
                        className="font-body-md text-on-surface-variant max-w-[280px] text-left leading-relaxed"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.35 }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? 'bg-secondary text-on-secondary shadow-lg'
                        : 'bg-transparent text-primary'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-black font-label-caps text-label-caps px-8 py-4 hover:bg-secondary hover:text-on-secondary transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Our Projects
            <span className="material-symbols-outlined text-sm">north_east</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
