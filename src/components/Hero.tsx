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
    <section className="relative min-h-[90vh] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 pt-20 max-md:grid-cols-1" id="hero">
      {/* Background effects */}
      <div className="absolute -inset-10 z-[-1] overflow-hidden blur-[60px]">
        <div className="absolute w-70 h-70 rounded-full opacity-50 mix-blend-screen bg-brand-primary top-[5%] left-[20%]" />
        <div className="absolute w-70 h-70 rounded-full opacity-50 mix-blend-screen bg-[#2563eb] bottom-0 right-[15%]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Hero content */}
      <div className="flex flex-col gap-6">
        <motion.span
          className="text-[0.85rem] tracking-[0.2em] text-brand-secondary uppercase"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for select collaborations
        </motion.span>
        <motion.h1
          className="text-[clamp(3rem,6vw,4.5rem)] m-0 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {heroContent.name}
        </motion.h1>
        <div className="flex flex-wrap gap-3 text-xl text-brand-primary">
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
        <div className="flex flex-wrap gap-4 max-sm:flex-col">
          <a href="#projects" className="btn-primary">
            {heroContent.ctaPrimary}
          </a>
          <a href="#contact" className="btn-secondary">
            {heroContent.ctaSecondary}
          </a>
        </div>
        <StatGrid stats={stats} />
      </div>

      {/* Interactive panel */}
      <motion.div
        className="bg-bg-panel border border-border rounded-3xl p-8 min-h-[420px] relative overflow-hidden backdrop-blur-lg"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d'
        }}
        onPointerMove={handlePointer}
        onPointerLeave={handleLeave}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: shine,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), transparent 60%)'
          }}
        />
        <div className="relative z-[1]">
          <p>Currently building</p>
          <h3 className="my-3">Immersive product stories</h3>
          <ul className="list-none p-0 mt-6 flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-secondary before:inline-block">
              Conversation design + AI copilots
            </li>
            <li className="flex items-center gap-2.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-secondary before:inline-block">
              Live data narratives
            </li>
            <li className="flex items-center gap-2.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-secondary before:inline-block">
              Systems thinking workshops
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-text-muted">
          <span>Next slot</span>
          <strong className="text-text-base text-lg">January 2026</strong>
        </div>
      </motion.div>
    </section>
  );
};
