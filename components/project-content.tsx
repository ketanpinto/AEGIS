'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Wifi,
  Radio,
  Brain,
  Bell,
  Cpu,
  Server,
  Code2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Github,
  Activity,
  Eye,
  EyeOff,
  Heart,
  Users,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const techStack = [
  { name: 'ESP32-WROOM-32U', category: 'Hardware', icon: Cpu },
  { name: 'Raspberry Pi 5', category: 'Processing', icon: Server },
  { name: 'LD2410 mmWave', category: 'Sensor', icon: Radio },
  { name: 'Python', category: 'Backend', icon: Code2 },
  { name: 'C/C++', category: 'Firmware', icon: Code2 },
  { name: 'TensorFlow Lite', category: 'ML', icon: Brain },
]

const features = [
  {
    icon: EyeOff,
    title: 'Privacy-Preserving',
    description: 'No cameras or images. Only analyzes Wi-Fi signal distortions to detect movement patterns.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi CSI Analysis',
    description: 'Extracts Channel State Information from standard Wi-Fi signals to detect falls.',
  },
  {
    icon: Radio,
    title: 'mmWave Vital Signs',
    description: 'Uses radar sensing to monitor breathing and detect unconsciousness after falls.',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Immediate notification to caregivers when a fall is detected.',
  },
  {
    icon: Users,
    title: 'Device-Free',
    description: 'No wearables required. Works for patients with dementia who may remove devices.',
  },
  {
    icon: Activity,
    title: 'Continuous Monitoring',
    description: 'Works 24/7 in all lighting conditions, including complete darkness.',
  },
]

const timeline = [
  { week: 'Week 1-2', title: 'Hardware Selection & Setup', status: 'completed' },
  { week: 'Week 3-4', title: 'CSI Data Collection Pipeline', status: 'completed' },
  { week: 'Week 5-6', title: 'ML Model Development', status: 'in-progress' },
  { week: 'Week 7-8', title: 'mmWave Integration', status: 'planned' },
  { week: 'Week 9-10', title: 'System Testing & Validation', status: 'planned' },
  { week: 'Week 11-12', title: 'Documentation & Presentation', status: 'planned' },
]

const problemStats = [
  { value: '36M+', label: 'Falls per year among elderly globally' },
  { value: '684K', label: 'Fatal falls annually worldwide' },
  { value: '95%', label: 'Falls occur in care facilities' },
  { value: '50%', label: 'Patients forget wearables' },
]

export function ProjectContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-16"
    >
      {/* Hero Section */}
      {/* <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 font-mono">
              Final Year Project 2026
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">A.E.G.I.S.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Autonomous Elderly Guardian & Intelligent Sensing
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A privacy-preserving fall detection and vital monitoring system using 
              Wi-Fi Channel State Information and mmWave sensor fusion technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/blog">
                  Read Development Blog
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Problem Statement */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Falls are a leading cause of injury and death among the elderly.
              Current detection methods have significant limitations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problemStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                custom={index}
                className="text-center"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Limitations of Current Solutions</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Camera Systems</p>
                      <p className="text-sm text-muted-foreground">Privacy violations, cannot be used in bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Wearable Devices</p>
                      <p className="text-sm text-muted-foreground">Often forgotten or removed by dementia patients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Pressure Mats</p>
                      <p className="text-sm text-muted-foreground">Limited coverage, can be tripped over</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A.E.G.I.S. combines Wi-Fi sensing with mmWave radar to provide comprehensive,
              privacy-preserving elderly monitoring.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                custom={index}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The system uses a multi-stage pipeline to detect falls and monitor vital signs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Signal Capture', desc: 'ESP32 extracts CSI from Wi-Fi signals at 100Hz', icon: Wifi },
                { step: '02', title: 'Feature Extraction', desc: 'Raspberry Pi processes signal patterns in real-time', icon: Cpu },
                { step: '03', title: 'ML Classification', desc: 'TensorFlow Lite model classifies activity patterns', icon: Brain },
                { step: '04', title: 'Alert System', desc: 'Immediate notification with vital sign status', icon: Bell },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <Card className="h-full glass border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-display font-bold text-primary/20 mb-2">
                        {item.step}
                      </div>
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with carefully selected hardware and software for optimal performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                custom={index}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 text-center">
                    <tech.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium text-sm">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Development Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track the progress of A.E.G.I.S. throughout the academic year.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={item.week}
                  className="flex items-center gap-4"
                >
                  <div className="w-24 text-sm font-mono text-muted-foreground shrink-0">
                    {item.week}
                  </div>
                  <div className="shrink-0">
                    {item.status === 'completed' && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                    {item.status === 'in-progress' && (
                      <Clock className="w-5 h-5 text-primary animate-pulse" />
                    )}
                    {item.status === 'planned' && (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Card className={`glass border-border/50 ${item.status === 'in-progress' ? 'border-primary/50' : ''}`}>
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{item.title}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <Card className="glass border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold mb-4">
                  Follow the Development Journey
                </h2>
                <p className="text-muted-foreground mb-6">
                  Read weekly updates, technical deep-dives, and supervisor meeting logs
                  documenting the entire development process.
                </p>
                <Button asChild size="lg">
                  <Link href="/blog">
                    Read the Blog
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
