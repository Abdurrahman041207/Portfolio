import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { SectionHeading } from './SectionHeading';

const contactMethods: Array<{
  label: string;
  value: string;
  icon: string;
  href?: string;
}> = [
  {
    label: 'Email',
    value: 'abdurrahman20041207@gmail.com',
    icon: '📧',
    href: 'mailto:abdurrahman20041207@gmail.com',
  },
  {
    label: 'Phone',
    value: '(+94) 77 999 5800',
    icon: '📱',
    href: 'tel:+94779995800',
  },
  {
    label: 'Location',
    value: 'Sri Lanka · Remote friendly',
    icon: '📍',
  },
  {
    label: 'LinkedIn',
    value: 'abdurrahman-rushdi',
    icon: '💼',
    href: 'https://www.linkedin.com/in/abdurrahman-rushdi-724035320',
  },
  {
    label: 'GitHub',
    value: 'Abdurrahman041207',
    icon: '🐙',
    href: 'https://github.com/Abdurrahman041207',
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
        eyebrow="Contact"
        title="Hiring managers & recruiters — start here"
        description="Email is best for role discussions and interview scheduling. Share the team stack, timeline, and whether the role is internship or junior-level; I usually respond within one business day."
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 rounded-4xl border border-border bg-white/[0.02] p-7.5 max-sm:p-5">
        <div className="flex flex-col gap-4">
          {contactMethods.map((method) => {
            const inner = (
              <>
                <span className="w-12 h-12 rounded-2xl bg-brand-secondary/15 grid place-items-center text-xl">
                  {method.icon}
                </span>
                <div>
                  <p className="m-0 font-semibold">{method.label}</p>
                  <p className="m-0 text-text-muted">{method.value}</p>
                </div>
              </>
            );
            const className =
              'rounded-xl border border-border p-4.5 flex gap-4.5 items-center transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03]';
            if (method.href) {
              return (
                <motion.a
                  key={method.label}
                  className={className}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 10 }}
                >
                  {inner}
                </motion.a>
              );
            }
            return (
              <motion.div
                key={method.label}
                className={className}
                whileHover={{ x: 10 }}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <p className="m-0 text-[0.85rem] text-text-muted -mt-1">
            This form is a demo on the static site — for real inquiries, prefer
            the email link on the left.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
            <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
              Your name
              <input
                name="name"
                placeholder="Your name"
                required
                className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
              />
            </label>
            <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
              Work email
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                required
                className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
              />
            </label>
          </div>
          <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
            Role / link (optional)
            <input
              name="project"
              placeholder="Job post URL, team name, or requisition ID"
              className="rounded-2xl border border-white/15 bg-bg-dark/80 py-3.5 px-4 text-text-base text-base font-sans focus:outline-2 focus:outline-brand-primary/40"
            />
          </label>
          <label className="font-semibold text-text-muted flex flex-col gap-1.5 text-[0.95rem]">
            Message
            <textarea
              name="message"
              placeholder="Stack, interview process, start date, or questions about my projects…"
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
            {status === 'idle' && 'Send message (demo)'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Thanks — use email for a real reply'}
          </button>
        </form>
      </div>
    </section>
  );
};
