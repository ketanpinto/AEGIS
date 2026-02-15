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
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="group w-full min-h-[60vh] flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      {/* Media Section */}
      <div className={`w-full md:w-1/2 flex-1 overflow-hidden rounded-2xl bg-muted aspect-video md:aspect-auto md:h-[500px] border border-border relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        {post.videoUrl ? (
          <video
            src={post.videoUrl}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-card">
            <span className="text-muted-foreground">No media available</span>
          </div>
        )}

        {/* Hover overlay with link */}
        <Link
          href={`/blog/${post.slug}`}
          className="absolute inset-0 z-10 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <div className="p-4 rounded-full bg-background/80 backdrop-blur-sm border border-border">
            <ArrowUpRight className="w-6 h-6 text-primary" />
          </div>
        </Link>
      </div>

      {/* Info Section */}
      <div className={`w-full md:w-1/2 space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
              {post.title}
            </h2>
          </Link>

          {/* Excerpt */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            {post.excerpt}
          </p>
        </div>

        {/* Post Meta */}
        <div className="flex items-center gap-6 text-muted-foreground border-t border-border/50 pt-6 max-w-sm">
          <time dateTime={post.date} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
        >
          Read full article
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  )
}
