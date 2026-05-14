import { motion } from 'framer-motion';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { SectionHeading } from './SectionHeading';

export const Projects = () => {
  const { projects, loading, error } = useGitHubProjects('Abdurrahman041207');

  return (
    <section className="my-30 max-sm:my-20" id="projects">
      <SectionHeading
        eyebrow="Technical experience"
        title="Code you can review before we talk"
        description="All public repositories from GitHub, most recently updated first — READMEs, tests, and topics are the fastest way to assess fit."
      />

      <div className="flex flex-col gap-7.5">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-secondary"></div>
          </div>
        )}

        {error && (
          <div className="p-10 rounded-3xl border border-red-500/20 bg-red-500/5 text-center">
            <p className="text-red-400 mb-4">Failed to load projects: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="text-brand-secondary underline"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && projects.map((project, index) => (
          <motion.article
            key={project.link}
            className="grid grid-cols-[160px_1fr] gap-7.5 p-7.5 rounded-3xl border border-border bg-white/[0.02] backdrop-blur-md max-md:grid-cols-1 overflow-hidden relative group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
          >
            <div
              className="rounded-2xl flex items-center justify-center text-5xl aspect-square max-md:aspect-video"
              style={{ background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.2), transparent)' }}
            >
              {project.icon}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="m-0 text-2xl">{project.title}</h3>
                {project.stars > 0 && (
                  <span className="flex items-center gap-1 text-sm text-text-muted bg-white/5 px-2 py-1 rounded-md">
                    ⭐ {project.stars}
                  </span>
                )}
              </div>
              
              <p className="text-text-muted mb-4">{project.description}</p>
              
              {/* Completeness Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5 text-text-muted uppercase tracking-wider font-semibold">
                  <span>Completeness</span>
                  <span>{project.completeness}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.completeness}%` }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-auto mb-4.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 rounded-full py-1.5 px-3 text-[0.85rem] bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                className="text-brand-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all" 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <span className="text-xl">→</span>
              </a>
            </div>
          </motion.article>
        ))}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>No public repositories found for this GitHub user.</p>
          </div>
        )}
      </div>
    </section>
  );
};
