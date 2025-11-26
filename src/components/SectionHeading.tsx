import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}>;

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) => (
  <motion.header
    className={`section-heading section-heading--${align}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
  >
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </motion.header>
);

