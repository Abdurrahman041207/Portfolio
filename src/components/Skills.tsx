import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { skills } from '../data/content';
import { SectionHeading } from './SectionHeading';

const tabVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(skills[0].id);

  const activeCategory = skills.find((skill) => skill.id === activeTab)!;

  return (
    <section className="my-30 max-sm:my-20" id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Stacks that scale craft and impact"
        description="End-to-end ownership from whiteboard sketch to production rollout with calm, well-tested systems."
      />

      <div className="flex gap-4 flex-wrap justify-center mb-8" role="tablist">
        {skills.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={category.id === activeTab}
            className={`bg-transparent border border-border py-3 px-5.5 rounded-full cursor-pointer transition-all duration-300 font-semibold ${category.id === activeTab
                ? 'bg-brand-primary/10 border-brand-primary text-text-base'
                : 'text-text-muted hover:border-text-muted'
              }`}
            onClick={() => setActiveTab(category.id)}
          >
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          className="bg-white/[0.02] border border-border rounded-3xl p-8"
          variants={tabVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-muted mb-6">{activeCategory.description}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {activeCategory.pillars.map((pillar) => (
              <motion.article
                key={pillar.title}
                className="bg-white/[0.02] border border-border rounded-xl p-5"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
              >
                <div>
                  <h3 className="m-0 mb-1.5">{pillar.title}</h3>
                  <p className="text-text-muted m-0 text-[0.95rem]">{pillar.copy}</p>
                </div>
                <div className="mt-4.5 flex flex-wrap gap-2.5">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className="py-1.5 px-3 rounded-full border border-white/10 text-[0.85rem] text-brand-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
