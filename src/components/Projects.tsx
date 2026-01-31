import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Projects = () => (
  <section className="my-30 max-sm:my-20" id="projects">
    <SectionHeading
      eyebrow="Case studies"
      title="High-touch launches with measurable lift"
      description="Select collaborations blending product strategy, realtime visuals, and carefully engineered systems."
    />

    <div className="flex flex-col gap-7.5">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="grid grid-cols-[160px_1fr] gap-7.5 p-7.5 rounded-3xl border border-border bg-white/[0.02] backdrop-blur-md max-md:grid-cols-1"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.1, duration: 0.7 }}
        >
          <div
            className="rounded-2xl flex items-center justify-center text-5xl"
            style={{ background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.2), transparent)' }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="m-0 mb-3 text-2xl">{project.title}</h3>
            <p className="text-text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2.5 my-4.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 rounded-full py-1.5 px-3 text-[0.85rem]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a className="text-brand-secondary font-semibold" href={project.link}>
              Dive deeper →
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
