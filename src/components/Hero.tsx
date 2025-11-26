import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { heroContent, roles, stats } from '../data/content';
import { StatGrid } from './StatGrid';

const rotateRange = [-10, 10];

export const Hero = () => {
  const [activeRole, setActiveRole] = useState(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateXSpring = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 120, damping: 12 });
  const shine = useTransform(rotateX, [-10, 10], [0.8, 1.2]);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveRole((prev) => (prev + 1) % roles.length),
      3500,
    );
    return () => clearInterval(interval);
  }, []);

  const handlePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const percentX = x / bounds.width;
    const percentY = y / bounds.height;
    rotateY.set(rotateRange[0] + (rotateRange[1] - rotateRange[0]) * percentX);
    rotateX.set(
      rotateRange[0] + (rotateRange[1] - rotateRange[0]) * (1 - percentY),
    );
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const roleWords = useMemo(
    () => roles[activeRole].split(' '),
    [activeRole],
  );

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="orb orb--one" />
        <div className="orb orb--two" />
        <div className="grid" />
      </div>
      <div className="hero__content">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for select collaborations
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {heroContent.name}
        </motion.h1>
        <div className="hero__roles">
          {roleWords.map((word, index) => (
            <motion.span
              key={word + index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <p>{heroContent.tagline}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn-primary">
            {heroContent.ctaPrimary}
          </a>
          <a href="#contact" className="btn-secondary">
            {heroContent.ctaSecondary}
          </a>
        </div>
        <StatGrid stats={stats} />
      </div>
      <motion.div
        className="hero__panel"
        onPointerMove={handlePointer}
        onPointerLeave={handleLeave}
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
      >
        <motion.div
          className="hero__panel-shine"
          style={{ opacity: shine }}
        />
        <div className="hero__panel-content">
          <p>Currently building</p>
          <h3>Immersive product stories</h3>
          <ul>
            <li>Conversation design + AI copilots</li>
            <li>Live data narratives</li>
            <li>Systems thinking workshops</li>
          </ul>
        </div>
        <div className="hero__panel-footer">
          <span>Next slot</span>
          <strong>January 2026</strong>
        </div>
      </motion.div>
    </section>
  );
};

