'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Me', href: '/about' },
      { label: 'The Project', href: '/project' },
      { label: 'Blog Posts', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { label: 'Wi-Fi CSI', href: '/blog?tag=Wi-Fi+CSI' },
      { label: 'Hardware', href: '/blog?tag=Hardware' },
      { label: 'ESP32', href: '/blog?tag=ESP32' },
      { label: 'Research', href: '/blog?tag=Research' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'GitHub', href: 'https://github.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'University', href: 'https://www.mdx.ac.ae', external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                A.E.G.I.S.
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Privacy-preserving fall detection using Wi-Fi CSI and mmWave sensor fusion.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@techlog.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} A.E.G.I.S. Middlesex University Dubai - Final Year Project.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Next.js
            </a>
            {' & '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
