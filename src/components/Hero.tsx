import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useMemo } from 'react';
import {
  availabilityLine,
  heroContent,
  resumePdfHref,
  stats,
} from '../data/content';
import { StatGrid } from './StatGrid';

const rotateRange = [-5, 5];

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateXSpring = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 120, damping: 12 });
  const shine = useTransform(rotateX, [-5, 5], [0.85, 1.1]);

  const panelMotion = useMemo(
    () =>
      reduceMotion
        ? {}
        : {
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
            transformStyle: 'preserve-3d' as const,
          },
    [reduceMotion, rotateXSpring, rotateYSpring],
  );

  const handlePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
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

  useEffect(() => {
    if (reduceMotion) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [reduceMotion, rotateX, rotateY]);

  return (
    <section
      className="relative min-h-[90vh] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 pt-20 max-md:grid-cols-1"
      id="hero"
    >
      <div className="absolute -inset-10 z-[-1] overflow-hidden blur-[50px] pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full opacity-35 mix-blend-screen bg-brand-primary/80 top-[8%] left-[15%]" />
        <div className="absolute w-56 h-56 rounded-full opacity-25 mix-blend-screen bg-brand-secondary/70 bottom-[10%] right-[12%]" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="flex flex-col gap-6 max-w-[640px]">
        <motion.span
          className="text-[0.8rem] tracking-[0.18em] text-brand-secondary uppercase font-medium"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Seeking a technical internship
        </motion.span>
        <motion.h1
          className="text-[clamp(2.5rem,5.5vw,4rem)] m-0 leading-[1.12] font-semibold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          {heroContent.name}
        </motion.h1>
        <p className="m-0 text-lg md:text-xl text-brand-secondary/95 font-medium leading-snug text-pretty">
          {heroContent.headline}
        </p>
        <p className="m-0 text-text-muted leading-[1.7] max-w-xl text-pretty">
          {heroContent.tagline}
        </p>
        <p className="m-0 text-[0.9rem] text-text-muted/90 border-l-2 border-brand-primary/50 pl-4 py-0.5">
          {availabilityLine}
        </p>
        <div className="flex flex-wrap gap-3 max-sm:flex-col max-sm:items-stretch">
          <a href="#projects" className="btn-primary text-center">
            {heroContent.ctaPrimary}
          </a>
          <a href="#contact" className="btn-secondary text-center">
            {heroContent.ctaSecondary}
          </a>
          <a
            href={resumePdfHref}
            className="btn-tertiary text-center"
            download
            target="_blank"
            rel="noreferrer"
          >
            {heroContent.ctaResume}
          </a>
        </div>
        <StatGrid stats={stats} />
      </div>

      <motion.div
        className="bg-bg-panel border border-border rounded-3xl p-8 min-h-[400px] relative overflow-hidden backdrop-blur-lg"
        style={panelMotion}
        onPointerMove={reduceMotion ? undefined : handlePointer}
        onPointerLeave={reduceMotion ? undefined : handleLeave}
      >
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: shine,
              background:
                'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.12), transparent 55%)',
            }}
          />
        )}
        <div className="relative z-[1]">
          <p className="m-0 text-[0.75rem] uppercase tracking-[0.2em] text-text-muted font-semibold">
            Snapshot for recruiters
          </p>
          <h3 className="my-3 m-0 text-xl md:text-2xl font-semibold leading-tight">
            Shipping production-shaped systems, not just tutorials
          </h3>
          <ul className="list-none p-0 mt-6 flex flex-col gap-3 text-[0.95rem] leading-relaxed text-text-muted">
            <li className="flex gap-3">
              <span
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-secondary"
                aria-hidden
              />
              <span>
                <strong className="text-text-base">PocketRoom.lk</strong> —
                modular NestJS APIs, BullMQ + Redis queues, Docker, Firebase &
                GCP deployment.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-secondary"
                aria-hidden
              />
              <span>
                <strong className="text-text-base">Task API</strong> — Spring
                Boot, JWT, RBAC, JPA/Hibernate, MySQL, audit-friendly REST
                design.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-secondary"
                aria-hidden
              />
              <span>
                <strong className="text-text-base">Data pipelines</strong> —
                Python, Pandas, NumPy, multiprocessing for larger batches.
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center gap-4 text-text-muted text-sm">
          <span>Location & work style</span>
          <strong className="text-text-base text-base font-semibold text-right">
            Sri Lanka · Remote OK
          </strong>
        </div>
      </motion.div>
    </section>
  );
};
