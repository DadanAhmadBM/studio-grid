'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#services' },
  { label: 'Pricing', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-surface/80 border-b border-outline-variant/20'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-margin-x py-6 w-full max-w-container-max mx-auto">
        {/* Nav Links */}
        <ul className="hidden md:flex flex-col gap-2 font-label-caps text-label-caps">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i + 0.4, duration: 0.4 }}
            >
              <a
                href={link.href}
                className={`transition-colors duration-300 flex items-center gap-2 ${
                  link.active
                    ? 'text-primary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                )}
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Brand Logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="#"
            className="font-headline-md text-headline-md font-bold tracking-tighter text-primary"
          >
            STUDIO_GRID
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 hover:bg-secondary hover:text-on-secondary transition-colors duration-300 inline-block"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
