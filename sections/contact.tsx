'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/const/sections';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id={SECTION_IDS.contact} className="px-6 sm:px-10 md:px-12 py-12 pb-24 flex flex-col items-center gap-6">
      <motion.h1
        className="heading-1 w-full"
        {...fadeUp}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-muted-foreground w-full max-w-lg"
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a brand deal, collaboration, or just want to connect? Send me a message and I'll get back to you.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-secondary rounded-2xl p-8 flex flex-col gap-4"
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What's on your mind?"
            className="rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
          className="self-start rounded-xl bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Message'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </section>
  );
}
