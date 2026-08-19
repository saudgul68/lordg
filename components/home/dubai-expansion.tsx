import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export function DubaiExpansion() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" delay={0.15} className="order-2 lg:order-1">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Global Reach
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Lord Neil B. Gibson expands business to Dubai, UAE
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Lord Neil Gibson shifted his family&apos;s business from Leeds,
                England, turning his real estate projects into successful
                international businesses — all the way from the western hemisphere
                to the Middle East. After spending 27 years living in the United
                States of America, Lord Neil Gibson took his established business
                resume to the UAE.
              </p>
              <p>
                His resume involved real estate projects, restaurant and club
                ownership and online gaming businesses, establishing him as a
                financial mogul. This allowed Lord Gibson to take his
                philanthropic ambitions across all nations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: 'Leeds', label: 'England Origin' },
                { value: '27 yrs', label: 'In the USA' },
                { value: 'Dubai', label: 'UAE Expansion' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" className="order-1 lg:order-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
            <Image
              src="/dubai-skyline.png"
              alt="Modern Dubai skyline at golden hour"
              fill
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-primary/40 p-5 backdrop-blur-md">
                <Quote className="size-6 shrink-0 text-accent" />
                <blockquote className="text-sm italic leading-relaxed text-primary-foreground/90">
                  &ldquo;My inspiration for all these accomplishments came to me
                  from my late father, Wilfred Gibson. The best piece of advice I
                  got from him was: if opportunity doesn&apos;t knock, build a
                  door.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
