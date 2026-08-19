'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, Clock, User } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,106,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground/70 backdrop-blur-sm transition-colors hover:text-accent hover:border-accent/30"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
        >
          {post.category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/60"
        >
          <span className="inline-flex items-center gap-2">
            <User className="size-4 text-accent" />
            {post.author}
          </span>
          <span className="size-1 rounded-full bg-accent/40" />
          <span>{post.date}</span>
          <span className="size-1 rounded-full bg-accent/40" />
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-accent" />
            {post.readingTime}
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  )
}
