'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Radio, Brain, Shield, Heart, Wifi } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const features = [
  {
    icon: Shield,
    title: 'Privacy-Preserving',
    description: 'No cameras or images. Only analyzes Wi-Fi signal distortions for complete privacy compliance.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi CSI Sensing',
    description: 'Uses Channel State Information from commodity Wi-Fi to detect human movement and falls.',
  },
  {
    icon: Radio,
    title: 'mmWave Radar Fusion',
    description: 'LD2410 radar sensor provides vital sign monitoring to detect breathing and consciousness.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Machine learning algorithms trained to distinguish falls from normal activities.',
  },
  {
    icon: Heart,
    title: 'Vital Signs Monitoring',
    description: 'Detects breathing patterns post-fall to assess if the person is conscious.',
  },
  {
    icon: Cpu,
    title: 'Edge Processing',
    description: 'All processing happens locally on Raspberry Pi 5 for real-time response.',
  },
]

const technologies = [
  { name: 'ESP32-WROOM-32U', category: 'Sensor Node' },
  { name: 'Raspberry Pi 5', category: 'Processing Hub' },
  { name: 'Python', category: 'AI/Logic' },
  { name: 'C++', category: 'Firmware' },
  { name: 'LD2410', category: 'mmWave Radar' },
  { name: 'TensorFlow', category: 'ML Framework' },
]

export function AboutContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          About Me & A.E.G.I.S.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A final year Computer Systems Engineering student at Middlesex University Dubai, 
          building privacy-preserving technology for elderly care.
        </p>
      </motion.header>

      {/* Photo placeholder note */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-16"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Photo placeholder */}
          <div className="w-48 h-48 rounded-2xl bg-card border border-border flex items-center justify-center shrink-0">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">YN</span>
              </div>
              <p className="text-xs text-muted-foreground">Your Photo Here</p>
            </div>
          </div>
          
          {/* Bio */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I am a final-year Computer Systems Engineering student at Middlesex University Dubai 
              with a deep passion for Embedded Systems, Internet of Things (IoT), and Artificial Intelligence. 
              My academic journey has been driven by a singular vision: bridging the gap between 
              hardware physics and software intelligence to solve real-world humanitarian problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A.E.G.I.S. represents the culmination of this vision—a system that leverages the invisible 
              signals all around us to protect our most vulnerable. By understanding how Wi-Fi waves 
              interact with the human body, we can create monitoring systems that respect privacy 
              while saving lives. This project combines my expertise in embedded systems, signal processing, 
              and machine learning to create something truly impactful.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
          The Problem
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Elderly falls are a leading cause of fatal injuries worldwide. Traditional monitoring 
            solutions face critical limitations: <strong>cameras violate privacy</strong> and cannot be 
            deployed in sensitive areas like bathrooms where many falls occur; <strong>wearable devices</strong> are 
            often forgotten or deliberately removed by patients with dementia or cognitive impairment.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold tracking-tight mb-4 mt-8">
          The Solution: A.E.G.I.S.
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            <strong>A.E.G.I.S.</strong> (Autonomous Elderly Guardian & Intelligent Sensing) is a 
            &ldquo;device-free&rdquo; monitoring system. It uses commodity Wi-Fi signals (CSI) to detect falls 
            by analyzing wave distortions in the room, and fuses this with mmWave Radar sensor data 
            to detect breathing (vital signs) to determine if the person is unconscious after a fall. 
            No cameras. No wearables. Just invisible signals protecting lives.
          </p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-card border border-border text-center"
            >
              <div className="font-mono text-sm text-primary mb-1">{tech.name}</div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Motivation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
          My Motivation
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            The intersection of hardware and software has always fascinated me. While software 
            can create incredible experiences, it is the fusion with physical systems that enables 
            us to make a tangible impact on the real world. A.E.G.I.S. embodies this philosophy—using 
            invisible electromagnetic waves, sophisticated signal processing, and machine learning 
            to create a system that could genuinely save lives while respecting human dignity and privacy.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
