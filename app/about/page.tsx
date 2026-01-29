import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutContent } from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about this project - a final year university project showcasing modern web development practices.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <AboutContent />
      </main>

      <Footer />
    </div>
  )
}
