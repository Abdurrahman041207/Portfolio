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
    <section className="section skills" id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Stacks that scale craft and impact"
        description="End-to-end ownership from whiteboard sketch to production rollout with calm, well-tested systems."
      />

      <div className="skill-tabs" role="tablist">
        {skills.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={category.id === activeTab}
            className={`skill-tab ${
              category.id === activeTab ? 'skill-tab--active' : ''
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
          className="skill-panel"
          variants={tabVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <p className="skill-panel__description">{activeCategory.description}</p>
          <div className="skill-grid">
            {activeCategory.pillars.map((pillar) => (
              <motion.article
                key={pillar.title}
                className="skill-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
              >
                <div className="skill-card__header">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </div>
                <div className="skill-card__tags">
                  {pillar.items.map((item) => (
                    <span key={item}>{item}</span>
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

