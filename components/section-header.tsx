'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  description?: string
  viewAllHref?: string
  viewAllLabel?: string
}

export function SectionHeader({
  title,
  description,
  viewAllHref,
  viewAllLabel = 'View all',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
    >
      <div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-muted-foreground max-w-xl">{description}</p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group shrink-0"
        >
          {viewAllLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </motion.div>
  )
}
