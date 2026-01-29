'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, GraduationCap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'student@mdx.ac.ae',
    href: 'mailto:student@mdx.ac.ae',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/aegis-project',
    href: 'https://github.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    icon: GraduationCap,
    label: 'University',
    value: 'Middlesex University Dubai',
    href: 'https://www.mdx.ac.ae',
  },
]

export function ContactContent() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Interested in learning more about A.E.G.I.S. or exploring collaboration opportunities?
          I would love to hear from you. Whether you are a fellow researcher, potential industry partner,
          or simply curious about the project, please do not hesitate to reach out.
        </p>
      </motion.header>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isSubmitted ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest in A.E.G.I.S. I will get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Research inquiry, collaboration, etc."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your interest in A.E.G.I.S..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">
              Connect With Me
            </h2>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {link.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Additional info */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold mb-2">Project Inquiries Welcome</h3>
            <p className="text-sm text-muted-foreground">
              I am open to discussing research collaborations, industry partnerships,
              or academic inquiries about the A.E.G.I.S. project. Whether you represent
              a healthcare facility, research institution, or are a fellow student interested
              in similar work, I would be glad to connect.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
