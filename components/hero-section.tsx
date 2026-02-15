'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Magnetic, TextReveal, Tilt, AnimatedGradientText, InteractiveGlow } from '@/components/motion-utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveGlow />
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Grid pulse effect */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_50%)] opacity-10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Final Year Project
            </motion.div>

            <div className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] relative z-10 mb-6">
              <TextReveal
                text="A.E.G.I.S"
                initialDelay={0.4}
                animateGradient={true}
                className="justify-center lg:justify-start"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Autonomous Elderly Guardian & Intelligent Sensing.
              <br />
              <span className="text-foreground/80 mt-2 block">
                A device-free fall detection system using Wi-Fi CSI and mmWave sensor fusion for privacy-preserving monitoring.
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Magnetic strength={0.2}>
                <Button asChild size="lg" className="group">
                  <Link href="/blog">
                    Read Articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@techlog.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right content - Animated code block */}
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full max-w-xl"
          >
            <Tilt>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70" />
                <div className="relative glass rounded-xl overflow-hidden">
                  {/* Window header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                      <div className="w-3 h-3 rounded-full bg-chart-2/60" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">
                      aegis.py
                    </span>
                  </div>
                  {/* Code content */}
                  <div className="p-4 font-mono text-sm">
                    <CodeLine delay={0.5} lineNumber={1}>
                      <span className="text-chart-3">class</span>{' '}
                      <span className="text-accent">AEGIS</span>
                      <span className="text-muted-foreground">:</span>
                    </CodeLine>
                    <CodeLine delay={0.7} lineNumber={2}>
                      {'  '}
                      <span className="text-chart-3">def</span>{' '}
                      <span className="text-primary">detect_fall</span>
                      <span className="text-muted-foreground">(</span>
                      <span className="text-accent">self</span>
                      <span className="text-muted-foreground">,</span>{' '}
                      <span className="text-accent">csi_data</span>
                      <span className="text-muted-foreground">):</span>
                    </CodeLine>
                    <CodeLine delay={0.9} lineNumber={3}>
                      {'    '}
                      <span className="text-muted-foreground"># Wi-Fi CSI Analysis</span>
                    </CodeLine>
                    <CodeLine delay={1.1} lineNumber={4}>
                      {'    '}
                      <span className="text-accent">features</span>{' '}
                      <span className="text-muted-foreground">=</span>{' '}
                      <span className="text-chart-2">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-primary">extract</span>
                      <span className="text-muted-foreground">(</span>
                      <span className="text-accent">csi_data</span>
                      <span className="text-muted-foreground">)</span>
                    </CodeLine>
                    <CodeLine delay={1.3} lineNumber={5}>
                      {'    '}
                      <span className="text-chart-3">if</span>{' '}
                      <span className="text-chart-2">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-primary">is_fall</span>
                      <span className="text-muted-foreground">(</span>
                      <span className="text-accent">features</span>
                      <span className="text-muted-foreground">):</span>
                    </CodeLine>
                    <CodeLine delay={1.5} lineNumber={6}>
                      {'      '}
                      <span className="text-chart-2">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-primary">check_vitals</span>
                      <span className="text-muted-foreground">()</span>
                    </CodeLine>
                    <CodeLine delay={1.7} lineNumber={7}>
                      {'      '}
                      <span className="text-chart-2">self</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-primary">alert_caregiver</span>
                      <span className="text-muted-foreground">()</span>
                    </CodeLine>
                    <CodeLine delay={1.9} lineNumber={8}>
                      {'    '}
                      <span className="text-chart-3">return</span>{' '}
                      <span className="text-chart-4">True</span>
                    </CodeLine>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function CodeLine({
  children,
  delay,
  lineNumber,
}: {
  children: React.ReactNode
  delay: number
  lineNumber: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex"
    >
      <span className="text-muted-foreground/50 select-none w-6 text-right mr-4">
        {lineNumber}
      </span>
      <span>{children}</span>
    </motion.div>
  )
}
