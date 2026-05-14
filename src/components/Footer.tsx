'use client';
import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-margin-x w-full max-w-container-max mx-auto gap-8">
        {/* Brand */}
        <div>
          <a href="#" className="font-headline-md text-headline-md text-primary font-bold">
            STUDIO_GRID
          </a>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            © 2024 STUDIO_GRID. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-8 font-label-caps text-label-caps">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                className="text-on-surface-variant hover:text-secondary transition-all duration-300 opacity-80 hover:opacity-100 uppercase"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
