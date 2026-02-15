import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogListClient } from '@/components/blog-list-client'
import { blogPosts, allTags } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights on web development and software engineering.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technical articles, research notes, and learning logs exploring web development,
              software architecture, and emerging technologies.
            </p>
          </div>

          {/* Blog list with client-side filtering */}
          <BlogListClient posts={blogPosts} tags={allTags} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
