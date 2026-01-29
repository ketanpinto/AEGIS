'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Hash } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/lib/blog-data'

interface BlogPostContentProps {
  post: BlogPost
}

interface TOCItem {
  id: string
  text: string
  level: number
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

  // Parse markdown content to HTML with syntax highlighting
  const htmlContent = React.useMemo(() => {
    return parseMarkdown(post.content)
  }, [post.content])

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
  }, [htmlContent])

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
      {/* Progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="-ml-4">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        <div className="flex gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Hash className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="text-balance">{post.title}</span>
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-neutral dark:prose-invert max-w-none
                prose-headings:font-display prose-headings:tracking-tight
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-strong:text-foreground
                prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* Sidebar - TOC */}
          {toc.length > 0 && (
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden xl:block w-64 shrink-0"
            >
              <div className="sticky top-24">
                <h2 className="font-semibold text-sm mb-4">On this page</h2>
                <nav className="space-y-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors py-1 ${
                        item.level === 1
                          ? 'font-medium'
                          : item.level === 2
                          ? 'pl-3'
                          : 'pl-6 text-xs'
                      } ${
                        activeId === item.id
                          ? 'text-primary'
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
                </nav>
              </div>
            </motion.aside>
          )}
        </div>
      </article>
    </>
  )
}

// Simple markdown parser
function parseMarkdown(markdown: string): string {
  let html = markdown
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`
    })
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br>')

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>')
  
  return `<p>${html}</p>`
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
