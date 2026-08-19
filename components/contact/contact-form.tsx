'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30 hover:border-accent/50'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm"
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="mb-5 inline-flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent"
          >
            <CheckCircle2 className="size-7" />
          </motion.span>
          <h3 className="font-serif text-2xl font-semibold">Message received</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thank you for reaching out. A member of the Lord Gibson UK office will
            be in touch with you shortly.
          </p>
          <Button
            variant="outline"
            className="mt-6 rounded-full border-primary/25 bg-transparent"
            onClick={() => setSent(false)}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={fieldClass}
                placeholder="you@example.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 flex flex-col gap-2"
          >
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className={fieldClass}
              placeholder="How can we help?"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 flex flex-col gap-2"
          >
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={`${fieldClass} resize-none`}
              placeholder="Write your message..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              type="submit"
              size="lg"
              className="mt-6 h-12 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8"
            >
              Send Message
              <Send className="size-4" />
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
