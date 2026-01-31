import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { SectionHeading } from './SectionHeading';

const contactMethods = [
  {
    label: 'Email',
    value: 'hey@abdur.dev',
    icon: '📧',
    href: 'mailto:hey@abdur.dev',
  },
  {
    label: 'Phone',
    value: '+1 (437) 555-0118',
    icon: '📱',
    href: 'tel:+14375550118',
  },
  {
    label: 'Location',
    value: 'Toronto · Remote friendly',
    icon: '📍',
  },
  {
    label: 'LinkedIn',
    value: '/in/abdurr',
    icon: '💼',
    href: 'https://www.linkedin.com/in/',
  },
];

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      event.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="my-30 max-sm:my-20" id="contact">
      <SectionHeading
        eyebrow="Collab inquiry"
        title="Let's design the next launch together"
        description="Tell me about your roadmap, your team, or the vibe you want to create. I reply within 48h."
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 rounded-4xl border border-border bg-white/[0.02] p-7.5 max-sm:p-5">
        <div className="flex flex-col gap-4">
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              className="rounded-xl border border-border p-4.5 flex gap-4.5 items-center transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03]"
              href={method.href}
              target={method.href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ x: 10 }}
            >
              <span className="w-12 h-12 rounded-2xl bg-brand-secondary/15 grid place-items-center text-xl">
                {method.icon}
              </span>
              <div>
                <p className="m-0 font-semibold">{method.label}</p>
                <p className="m-0 text-text-muted">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
            <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
              Name
              <input
                name="name"
                placeholder="Ava Product Lead"
                required
                className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
              />
            </label>
            <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
              />
            </label>
          </div>
          <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
            Project link
            <input
              name="project"
              placeholder="deck, notion doc, or key metrics"
              className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
            />
          </label>
          <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
            What should we build?
            <textarea
              name="message"
              placeholder="Launch goal, timeline, team needs..."
              rows={5}
              required
              className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans resize-y focus:outline-2 focus:outline-brand-primary/40"
            />
          </label>
          <button
            className="btn-primary"
            type="submit"
            disabled={status !== 'idle'}
          >
            {status === 'idle' && 'Send detailed brief'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Thanks for sharing!'}
          </button>
        </form>
      </div>
    </section>
  );
};
