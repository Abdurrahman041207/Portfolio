import { motion } from 'framer-motion';
import { education } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Education = () => (
  <section className="section education" id="education">
    <SectionHeading
      eyebrow="Foundations"
      title="Craft rooted in research and community"
      description="A mix of formal study, lab research, and ongoing peer-led learning keeps curiosity sharp."
    />

    <div className="education-grid">
      {education.map((item, index) => (
        <motion.article
          key={item.title}
          className="education-card"
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-card__icon">{item.icon}</div>
          <div className="education-card__body">
            <h3>{item.title}</h3>
            <span className="education-card__subtitle">{item.subtitle}</span>
            <p>{item.details}</p>
            <div className="education-card__tags">
              {item.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

