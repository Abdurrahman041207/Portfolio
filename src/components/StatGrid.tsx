import { motion } from 'framer-motion';
import type { Stat } from '../data/content';

type StatGridProps = {
  stats: Stat[];
};

export const StatGrid = ({ stats }: StatGridProps) => (
  <div className="mt-6 grid gap-4 grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        className="bg-white/[0.02] py-4.5 px-5 border border-border rounded-[18px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
      >
        <span className="text-3xl font-semibold block" style={{ color: stat.accent }}>
          {stat.value}
        </span>
        <span className="block text-text-muted mt-1">{stat.label}</span>
      </motion.div>
    ))}
  </div>
);

