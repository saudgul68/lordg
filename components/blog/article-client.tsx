'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArticleHeader } from '@/components/blog/article-header'
import { ArticleBody } from '@/components/blog/article-body'
import { ArticleSkeleton } from '@/components/blog/blog-skeleton'
import type { BlogPost } from '@/lib/blog'

export function ArticleClient({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArticleSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="article"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArticleHeader post={post} />
          <ArticleBody post={post} related={related} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
