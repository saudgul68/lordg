import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { FeaturedPost } from '@/components/blog/featured-post'
import { BlogCard } from '@/components/blog/blog-card'
import type { BlogPost } from '@/lib/blog'

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <FeaturedPost post={featured} />

        <div className="mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Latest Insights"
              title="News & Stories"
              align="left"
              className="mb-12"
            />
          </Reveal>

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
