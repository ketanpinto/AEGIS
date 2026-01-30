import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for questions, feedback, or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 pt-40 pb-16">
        <ContactContent />
      </main>

      <Footer />
    </div>
  )
}
