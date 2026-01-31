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
    className={`mb-15 max-w-3xl ${align === 'center' ? 'text-center mx-auto' : 'text-left'}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
  >
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] my-2">{title}</h2>
    {description && <p className="text-text-muted">{description}</p>}
  </motion.header>
);

