import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for questions, feedback, or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <ContactContent />
      </main>

      <Footer />
    </div>
  )
}
