import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { BlogCard } from '@/components/blog/blog-card'
import { SectionHeading } from '@/components/section-heading'
import type { BlogPost } from '@/lib/blog'

export function ArticleBody({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <article className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={
                  i === 0
                    ? 'text-lg leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent'
                    : 'leading-relaxed text-muted-foreground'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </article>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-card p-10 text-center card-glow">
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-accent/5 blur-2xl" />
            <p className="relative font-serif text-2xl text-balance text-foreground">
              Interested in partnering with LNBG International Investments?
            </p>
            <Link
              href="/contact"
              className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related Articles"
              align="left"
              className="mb-12"
            />
          </Reveal>
          <StaggerGroup className="grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <BlogCard post={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      )}
    </section>
  )
}
