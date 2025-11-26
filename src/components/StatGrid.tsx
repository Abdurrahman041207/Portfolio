import { motion } from 'framer-motion';
import type { Stat } from '../data/content';

type StatGridProps = {
  stats: Stat[];
};

export const StatGrid = ({ stats }: StatGridProps) => (
  <div className="stat-grid">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        className="stat-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
      >
        <span className="stat-value" style={{ color: stat.accent }}>
          {stat.value}
        </span>
        <span className="stat-label">{stat.label}</span>
      </motion.div>
    ))}
  </div>
);

