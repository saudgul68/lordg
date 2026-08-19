'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/estate-hero.png"
          alt="A grand English stately home at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <motion.div
        className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Lord of Wheldrake &amp; Warter Priory
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-balance text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          The History of{' '}
          <span className="text-shimmer">Lord Neil Benjamin Gibson</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl"
        >
          A businessman, international investor and philanthropist who built his
          family&apos;s legacy from Leeds, England into an enterprise reaching
          across the world — from the western hemisphere to Dubai, UAE.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="group h-13 rounded-full bg-accent px-8 text-base text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
            render={<Link href="/about" />}
          >
            Read the Story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 rounded-full border-primary-foreground/25 bg-primary-foreground/5 px-8 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 hidden items-center gap-8 border-t border-primary-foreground/10 pt-8 sm:flex"
        >
          {[
            { value: '700+', label: 'Acres in The Bahamas' },
            { value: '27', label: 'Years in the USA' },
            { value: '3', label: 'Continents Reached' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-accent">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex h-11 w-6 items-start justify-center rounded-full border border-primary-foreground/30 p-1.5 backdrop-blur-sm"
          aria-hidden="true"
        >
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
