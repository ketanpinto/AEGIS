'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { BlogPost } from '@/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-full p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
          {/* Featured indicator */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
            <span className="text-balance">{post.title}</span>
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
