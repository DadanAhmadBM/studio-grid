'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = ['FB', 'BE', 'X', 'DR'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <header
      ref={ref}
      className="relative min-h-screen flex items-end pt-[120px] pb-margin-x px-margin-x overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQ_hetOYtPBlSqZTIPtgDvQxP_dpJxDPFnf0xy7bHhh-gtZay4o0r9lxvu_ve7pYk57R6lVi7_geakX3Of0T25BQh74hj4Bg4tg8XsngePyQgJfG9hKKvAeIvlkyENbGIbMnnqL-bWafw0bd_7BXZPfYooMD-RMHK_M19bpG4JnZy15R61jSw8mJnLJQ_pVulWBvhtnbeVcxhCigcv4olls97KCSwGR__vqQeNWZgv2hkh5sphEn05koU6mtjxRugyPTXOZHTyyA"
          alt="Abstract dark fluid background"
          className="w-full h-full object-cover opacity-80 mix-blend-lighten scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Animated grain overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-container-max mx-auto flex flex-col justify-end"
        style={{ opacity }}
      >
        <motion.div
          className="grid grid-cols-12 gap-gutter w-full mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Descriptor */}
          <motion.div
            className="col-span-12 md:col-span-4 flex flex-col justify-end"
            variants={itemVariants}
          >
            <span className="material-symbols-outlined text-primary mb-4">south_east</span>
            <p className="font-label-caps text-label-caps text-primary uppercase max-w-xs leading-relaxed">
              Breathing life into ideas by shaping them into meaningful emotions.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="col-span-12 md:col-span-8 flex justify-end items-end gap-8 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest"
            variants={itemVariants}
          >
            {socialLinks.map((s, i) => (
              <span key={s} className="flex items-center gap-8">
                <a href="#" className="hover:text-primary transition-colors">
                  {s}
                </a>
                {i < socialLinks.length - 1 && (
                  <span className="text-outline-variant">/</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display-xl text-display-xl text-primary tracking-tighter w-full mb-8 leading-none"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            DESIGNING<br />THE FUTURE GRID.
          </motion.h1>
        </div>

        {/* Meta info */}
        <motion.div
          className="flex justify-between items-center w-full border-t border-outline-variant/30 pt-6 mt-8 font-label-caps text-label-caps text-on-surface-variant uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>SCROLL DOWN</span>
          <HeroClock />
          <span>LONDON | UK</span>
        </motion.div>
      </motion.div>
    </header>
  );
}

function HeroClock() {
  const [time, setTime] = (typeof window !== 'undefined'
    ? [null, null]
    : [null, null]) as [string | null, React.Dispatch<React.SetStateAction<string | null>>];

  return (
    <span suppressHydrationWarning>
      {typeof window !== 'undefined'
        ? new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
        : '—:— '}
    </span>
  );
}
