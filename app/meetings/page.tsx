import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogListClient } from '@/components/blog-list-client'
import { blogPosts, allTags } from '@/lib/blog-data'

export const metadata: Metadata = {
    title: 'Supervisor Meetings',
    description: 'Logs and progress reviews from weekly supervisor meetings for the A.E.G.I.S. project.',
}

export default function MeetingsPage() {
    const meetingPosts = blogPosts.filter(post => post.category === 'supervisor-meeting')

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-40 pb-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                            Supervisor Meetings
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Official records of weekly progress reviews, feedback, and action items
                            discussed with the project supervisor.
                        </p>
                    </div>

                    {/* Meetings list */}
                    <BlogListClient posts={meetingPosts} tags={allTags} />
                </div>
            </main>

            <Footer />
        </div>
    )
}
