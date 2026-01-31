import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Intro' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.2,
  });
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-10 bg-bg-dark/80 border border-border rounded-full py-3 px-6 pb-4.5 backdrop-blur-lg shadow-[0_10px_30px_rgba(5,7,15,0.5)] w-[min(480px,90vw)] hidden sm:block">
      <div className="flex justify-between text-[0.85rem]">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`font-semibold transition-colors duration-300 ${active === item.id ? 'text-brand-primary' : 'text-text-muted hover:text-text-base'}`}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <motion.span
        className="block mt-3 h-[3px] rounded-full origin-left"
        style={{
          scaleX: smoothProgress,
          background: 'linear-gradient(90deg, var(--color-brand-secondary), var(--color-brand-primary))'
        }}
      />
    </div>
  );
};

