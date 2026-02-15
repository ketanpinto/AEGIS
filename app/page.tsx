'use client'

import React from "react"
import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { CinematicVideo } from '@/components/cinematic-video'
import { BlogCard } from '@/components/blog-card'
import { SectionHeader } from '@/components/section-header'
import { Footer } from '@/components/footer'
import { getFeaturedPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Wifi, Radio, Shield, Brain } from 'lucide-react'
import { ProjectContent } from '@/components/project-content'

import { ParallaxText } from '@/components/parallax-text'
import { Reveal, TextReveal, GlowWrapper, Tilt } from '@/components/motion-utils'

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        <ParallaxText baseVelocity={-2}>AUTONOMOUS GUARDIAN</ParallaxText>

        <CinematicVideo />
        
        <Reveal width="100%" delay={0.1}>
          <ProjectContent />
        </Reveal>

        <ParallaxText baseVelocity={2}>PRIVACY PRESERVING</ParallaxText>

        {/* Project Highlight */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <SectionHeader
                title="The A.E.G.I.S Project"
                description="Privacy-preserving fall detection for elderly care using cutting-edge sensing technology."
                viewAllHref="/project"
                viewAllLabel="Learn more"
              />
            </Reveal>

            <Reveal width="100%" delay={0.3}>
              <GlowWrapper>
                <Card className="glass border-border/50">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left: Description */}
                      <div>
                        <Badge variant="outline" className="mb-4 font-mono">
                          In Development
                        </Badge>
                        <h3 className="font-display text-3xl md:text-4xl font-black mb-6 tracking-tight">
                          Autonomous Elderly Guardian & Intelligent Sensing
                        </h3>
                        <TextReveal
                          text="A device-free fall detection system that uses Wi-Fi Channel State Information and mmWave radar to monitor elderly patients without compromising their privacy. No cameras, no wearables - just intelligent signal analysis."
                          className="text-foreground/70 mb-8 text-lg font-medium leading-relaxed"
                        />
                        <Button asChild>
                          <Link href="/project">
                            Explore the Project
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>

                      {/* Right: Key Features */}
                      <div className="grid grid-cols-2 gap-4">
                        <FeatureCard
                          icon={Shield}
                          title="Privacy-First"
                          description="No cameras or image capture"
                        />
                        <FeatureCard
                          icon={Wifi}
                          title="Wi-Fi CSI"
                          description="Analyzes signal distortions"
                        />
                        <FeatureCard
                          icon={Radio}
                          title="mmWave Radar"
                          description="Vital signs monitoring"
                        />
                        <FeatureCard
                          icon={Brain}
                          title="ML Powered"
                          description="Intelligent fall detection"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlowWrapper>
            </Reveal>
          </div>
        </section>

        <ParallaxText baseVelocity={-2}>INTELLIGENT SENSING</ParallaxText>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard number="12" label="Week Timeline" />
                <StatCard number="6+" label="Blog Posts" />
                <StatCard number="2" label="Sensing Modalities" />
                <StatCard number="2026" label="Completion Year" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <Tilt className="h-full">
      <GlowWrapper className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <Icon className="w-8 h-8 text-primary mb-4" />
        <h4 className="font-display font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </GlowWrapper>
    </Tilt>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <Tilt>
      <GlowWrapper>
        <div className="text-center p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
          <div className="font-display text-5xl sm:text-6xl font-black text-gradient tracking-tighter">
            {number}
          </div>
          <div className="mt-3 text-sm font-display font-semibold uppercase tracking-widest text-muted-foreground/80">{label}</div>
        </div>
      </GlowWrapper>
    </Tilt>
  )
}
