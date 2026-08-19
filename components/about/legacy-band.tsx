'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function LegacyBand() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2])

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/dubai-skyline.png"
          alt="Dubai skyline representing international business expansion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl"
        >
          Lord Neil B. Gibson expands business to Dubai, UAE
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 block h-px w-16 bg-accent"
        />
        <div className="mt-8 space-y-5 leading-relaxed text-primary-foreground/85">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Lord Neil Benjamin Gibson is one of the UK&apos;s most successful
            businessmen around the globe. He shifted his family&apos;s business
            from Leeds, England, turning his real estate projects into
            successful international businesses — all the way from the western
            hemisphere to the Middle East. After 27 years living in the United
            States of America, he took his established business resume to Dubai,
            UAE, developing online gaming businesses and becoming a financial
            mogul.
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto max-w-2xl border-t border-accent/40 pt-6 font-serif text-xl italic text-primary-foreground"
          >
            &ldquo;My inspiration for all these accomplishments came from my
            late father, Wilfred Gibson. He was my biggest teacher in life, and
            I often think in times of decisions, what would my father do? The
            best piece of advice I got from him was: if opportunity doesn&apos;t
            knock, build a door.&rdquo;
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
