import { motion } from 'framer-motion';
import { education } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Education = () => (
  <section className="my-30 max-sm:my-20" id="education">
    <SectionHeading
      eyebrow="Foundations"
      title="Craft rooted in research and community"
      description="A mix of formal study, lab research, and ongoing peer-led learning keeps curiosity sharp."
    />

    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
      {education.map((item, index) => (
        <motion.article
          key={item.title}
          className="flex gap-4.5 p-6 rounded-2xl border border-border bg-white/[0.02]"
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-[18px] bg-brand-primary/10 flex items-center justify-center text-2xl shrink-0">
            {item.icon}
          </div>
          <div>
            <h3 className="m-0">{item.title}</h3>
            <span className="text-text-muted">{item.subtitle}</span>
            <p>{item.details}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="py-1 px-2.5 rounded-full border border-white/[0.08] text-[0.8rem]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
