import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Projects = () => (
  <section className="section projects" id="projects">
    <SectionHeading
      eyebrow="Case studies"
      title="High-touch launches with measurable lift"
      description="Select collaborations blending product strategy, realtime visuals, and carefully engineered systems."
    />

    <div className="project-stack">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.1, duration: 0.7 }}
        >
          <div className="project-card__media">{project.icon}</div>
          <div className="project-card__body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="project-card__link" href={project.link}>
              Dive deeper →
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

