'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Hash, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/lib/blog-data'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogPostContentProps {
  post: BlogPost
}

interface TOCItem {
  id: string
  text: string
  level: number
}

// Cinematic section component for scroll reveals
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 lg:mb-40"
    >
      {children}
    </motion.section>
  )
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [toc, setToc] = React.useState<TOCItem[]>([])
  const [activeId, setActiveId] = React.useState<string>('')
  const contentRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Extract TOC from content
  React.useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3')
      const items: TOCItem[] = []

      headings.forEach((heading, index) => {
        const id = `heading-${index}`
        heading.id = id
        items.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName[1]),
        })
      })

      setToc(items)
    }
  }, [post.content])

  // Track active heading
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3')
      headings.forEach((heading) => observer.observe(heading))
    }

    return () => observer.disconnect()
  }, [toc])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[60] glow-primary"
        style={{ scaleX }}
      />

      <div className="relative min-h-screen bg-background selection:bg-primary/20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[40%] left-0 w-1/4 h-[800px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 relative">

            {/* Sidebar Left - Metadata */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden xl:flex flex-col w-64 shrink-0"
            >
              <div className="sticky top-32 space-y-12">
                <Button variant="ghost" asChild className="-ml-4 group hover:bg-transparent">
                  <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>Back to Feed</span>
                  </Link>
                </Button>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">Published On</p>
                    <p className="text-sm font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">Read Time</p>
                    <p className="text-sm font-medium">{post.readingTime}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">Category</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase tracking-wider">
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>

                {toc.length > 0 && (
                  <nav className="space-y-4 pt-12 border-t border-border/40">
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium italic">Contents</h3>
                    <div className="space-y-3">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-xs transition-all duration-300 ${activeId === item.id
                            ? 'text-primary translate-x-1 font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                          onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(item.id)?.scrollIntoView({
                              behavior: 'smooth',
                            })
                          }}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </nav>
                )}
              </div>
            </motion.aside>

            {/* Main Content Column */}
            <div className="flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
              {/* Hero Title Area */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 lg:mb-32"
              >
                <div className="inline-flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-primary font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                  {post.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground/80 font-light leading-relaxed italic">
                  {post.excerpt}
                </p>
              </motion.header>

              {/* Main Reading Flow */}
              <div
                ref={contentRef}
                className="prose prose-neutral dark:prose-invert max-w-none 
                  prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                  prose-p:text-lg sm:text-xl prose-p:leading-[1.8] prose-p:text-muted-foreground/90 prose-p:font-light prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:underline
                  prose-blockquote:border-none prose-blockquote:relative prose-blockquote:my-12
                  prose-img:rounded-[2rem] prose-img:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:prose-img:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                  prose-img:my-12 prose-img:mx-auto
                  prose-li:text-lg sm:text-xl prose-li:text-muted-foreground/80 prose-li:leading-relaxed
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-hr:border-none prose-hr:h-px prose-hr:bg-gradient-to-r prose-hr:from-transparent prose-hr:via-border prose-hr:to-transparent prose-hr:my-16"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, ...props }) => (
                      <AnimatedSection>
                        <h2 {...props} className="text-3xl sm:text-4xl lg:text-5xl mb-6 mt-16 leading-tight" />
                      </AnimatedSection>
                    ),
                    h3: ({ node, ...props }) => (
                      <AnimatedSection>
                        <h3 {...props} className="text-2xl sm:text-3xl lg:text-4xl mb-4 mt-12 leading-tight text-foreground/90" />
                      </AnimatedSection>
                    ),
                    p: ({ node, ...props }) => {
                      // Check if the first child is an image to avoid wrapping it in extra spacing
                      const isImage = React.Children.toArray(props.children).some(
                        (child) => React.isValidElement(child) && child.type === 'img'
                      )
                      if (isImage) {
                        return <div className="my-12 lg:my-16">{props.children}</div>
                      }
                      return <p {...props} />
                    },
                    blockquote: ({ node, ...props }) => (
                      <AnimatedSection>
                        <div className="relative isolate px-6 sm:px-8 py-10 bg-muted/30 rounded-[1.5rem] border border-border/50 overflow-hidden">
                          <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10 -z-10 rotate-12" />
                          <blockquote {...props} className="text-xl sm:text-2xl font-light italic text-foreground leading-relaxed m-0" />
                        </div>
                      </AnimatedSection>
                    ),
                    hr: () => (
                      <div className="flex items-center justify-center gap-4 my-16">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                        <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                      </div>
                    ),
                    img: ({ node, ...props }) => (
                      <div className="flex flex-col items-center gap-6">
                        <img
                          {...props}
                          className="rounded-[2rem] lg:rounded-[3rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                          alt={props.alt || ''}
                        />
                        {props.alt && (
                          <span className="text-sm font-light tracking-wide text-muted-foreground italic opacity-70">
                            — {props.alt}
                          </span>
                        )}
                      </div>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Footer / Author Area */}
              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-40 pt-16 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-primary font-display font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">A.E.G.I.S. Project Log</h4>
                    <p className="text-xs text-muted-foreground">Documenting the journey of elderly safety.</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                  Share this Update
                </Button>
              </motion.footer>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
