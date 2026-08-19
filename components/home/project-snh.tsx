'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ProjectSnh() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/bahamas-island.png"
          alt="Pristine tropical island in The Bahamas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
        style={{ y: textY }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-accent"
        >
          Vision
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-serif text-4xl font-semibold text-balance text-primary-foreground sm:text-5xl"
        >
          Project SNH-INC Bahamas
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 block h-px w-16 bg-accent"
        />
        <div className="mt-8 space-y-5 text-left leading-relaxed text-primary-foreground/85 sm:text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Our vision is to build a city composed of modular units that can be
            readily added to or removed from a framework to meet rising demand,
            accommodate the social mobility of owners who wish to upgrade their
            living spaces, and simplify the moving process. Each single modular
            unit is based on a standard 40ft high-cube shipping container.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Units can be combined in a cohesive manner to provide the desired
            living space for each owner. All units will be off-grid capable
            through the use of rooftop solar panels or wind turbines, providing
            their own independent water source — and for tract-home models, a
            virtual marketplace enables owners to seek or advertise available
            space in a particular locale.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
