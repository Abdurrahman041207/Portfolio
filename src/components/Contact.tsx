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
    <section className="section contact" id="contact">
      <SectionHeading
        eyebrow="Collab inquiry"
        title="Let’s design the next launch together"
        description="Tell me about your roadmap, your team, or the vibe you want to create. I reply within 48h."
      />

      <div className="contact-shell">
        <div className="contact-info">
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              className="contact-card"
              href={method.href}
              target={method.href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ x: 10 }}
            >
              <span className="contact-card__icon">{method.icon}</span>
              <div>
                <p className="contact-card__label">{method.label}</p>
                <p className="contact-card__value">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input name="name" placeholder="Ava Product Lead" required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>
          <label>
            Project link
            <input
              name="project"
              placeholder="deck, notion doc, or key metrics"
            />
          </label>
          <label>
            What should we build?
            <textarea
              name="message"
              placeholder="Launch goal, timeline, team needs..."
              rows={5}
              required
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

