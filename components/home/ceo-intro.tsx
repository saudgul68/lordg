import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

export function CeoIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,106,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="LNBG International Investments"
            title="CEO &amp; Founder of LNBG International Investment"
          />
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <div className="space-y-6 text-center text-lg leading-relaxed text-muted-foreground">
            <p>
              LNBG International Investments is an IBC (International Business
              Company), also known by the acronym &ldquo;LNBG&rdquo;. It is a
              company offering an alternative to traditional funding.
            </p>
            <p>
              As did the United Kingdom of Great Britain from Europe, people are
              forced to follow guidelines which are long, tedious and
              overwhelming. LNBG streamlines the process — making it simple, easy
              and quick, while assuring positive results for our clients.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3} className="mt-10">
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-primary/25 bg-transparent px-6 text-foreground hover:bg-secondary"
              render={<Link href="/about" />}
            >
              View More
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
