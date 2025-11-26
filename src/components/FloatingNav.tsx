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
    <div className="floating-nav">
      <div className="floating-nav__items">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={active === item.id ? 'active' : ''}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <motion.span className="floating-nav__progress" style={{ scaleX: smoothProgress }} />
    </div>
  );
};

