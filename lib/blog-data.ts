export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  featured?: boolean
  category: 'weekly-update' | 'supervisor-meeting' | 'technical' | 'research'
}

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'week-1-project-inception-hardware-selection',
    title: 'Week 1: Project Inception & Hardware Selection',
    excerpt: 'The beginning of A.E.G.I.S - choosing Wi-Fi CSI over cameras for privacy-preserving fall detection.',
    content: `
## Objectives for the Week

This week marked the official start of my final year project. The primary objectives were:

- Define the core problem statement and project scope
- Research existing fall detection solutions and their limitations
- Select the primary sensing technology for the system
- Begin hardware procurement planning

## Technical Challenges Faced

The biggest challenge was deciding on the sensing technology. Traditional approaches use:

1. **Camera-based systems** - Highly accurate but raise serious privacy concerns. Cannot be deployed in bathrooms where many falls occur.
2. **Wearable devices** - Require user compliance. Elderly patients with dementia often forget to wear them or remove them.
3. **Pressure mats** - Limited coverage area and can be tripped over.

I needed a solution that was:
- Device-free (no wearables required)
- Privacy-preserving (no cameras)
- Capable of whole-room coverage
- Able to detect both falls and vital signs

## Solutions Implemented

After extensive research, I chose **Wi-Fi Channel State Information (CSI)** as the primary sensing modality. Here's why:

\`\`\`
Wi-Fi CSI Advantages:
├── Privacy: Only analyzes signal distortions, not images
├── Coverage: Works through walls and covers entire rooms
├── Cost: Uses existing commodity hardware (ESP32)
├── Device-free: No wearables needed
└── 24/7 Monitoring: Works in darkness and all conditions
\`\`\`

The ESP32-WROOM-32U was selected because it supports CSI extraction through modified firmware and is cost-effective for deployment.

To complement fall detection, I'm adding an **LD2410 mmWave radar** for vital sign monitoring. This will detect breathing patterns to determine if a person is unconscious after a fall.

## Next Steps

- Order ESP32-WROOM-32U modules and LD2410 radar sensors
- Set up Raspberry Pi 5 as the central processing hub
- Begin studying CSI extraction techniques and existing research papers
- Create initial system architecture diagrams
    `,
    date: '2025-01-20',
    readingTime: '5 min read',
    tags: ['Hardware', 'Wi-Fi CSI', 'Privacy', 'Research'],
    featured: true,
    category: 'weekly-update',
  },
  {
    slug: 'week-2-esp32-csi-extraction-setup',
    title: 'Week 2: ESP32 CSI Extraction Setup',
    excerpt: 'Setting up the development environment and extracting first CSI data from ESP32.',
    content: `
## Objectives for the Week

- Set up ESP32 development environment
- Flash modified firmware for CSI extraction
- Capture first raw CSI data packets
- Understand CSI data structure and format

## Technical Challenges Faced

The ESP32 doesn't natively expose CSI data through its standard APIs. I needed to use the ESP-IDF framework with specific configurations to access the low-level Wi-Fi subsystem.

Key challenges included:
- Understanding the CSI callback mechanism
- Parsing the raw CSI data format (amplitude and phase for each subcarrier)
- Dealing with noisy data from the 2.4GHz band

## Solutions Implemented

Successfully set up the toolchain and flashed the CSI-enabled firmware:

\`\`\`cpp
// CSI callback registration
esp_wifi_set_csi_rx_cb(&wifi_csi_rx_cb, NULL);

// CSI configuration
wifi_csi_config_t csi_config = {
    .lltf_en = true,
    .htltf_en = true,
    .stbc_htltf2_en = true,
    .ltf_merge_en = true,
    .channel_filter_en = false,
    .manu_scale = false,
};
\`\`\`

The CSI data contains 52 subcarriers, each with amplitude and phase information that changes based on human movement in the environment.

## Next Steps

- Implement data logging to Raspberry Pi
- Begin collecting training data for fall vs. non-fall activities
- Research signal processing techniques for CSI data
    `,
    date: '2025-01-27',
    readingTime: '4 min read',
    tags: ['ESP32', 'CSI', 'Firmware', 'C++'],
    featured: false,
    category: 'weekly-update',
  },
  {
    slug: 'supervisor-meeting-1-project-scope',
    title: 'Supervisor Meeting #1: Project Scope Discussion',
    excerpt: 'Initial meeting with supervisor to discuss project scope, feasibility, and timeline.',
    content: `
## Meeting Details

**Date:** January 18, 2025  
**Duration:** 45 minutes  
**Attendees:** Supervisor, Student

---

## Topics Discussed

1. Overall project feasibility and scope
2. Hardware requirements and budget
3. Timeline for prototype development
4. Ethical considerations for elderly monitoring

## Key Feedback Received

- **Scope:** Supervisor approved the Wi-Fi CSI + mmWave fusion approach. Emphasized the importance of documenting the privacy-preserving nature of the system.

- **Hardware:** Suggested starting with a single-room prototype before scaling. Approved the ESP32 and Raspberry Pi choices.

- **Timeline:** Recommended having a working fall detection prototype by Week 8 to allow time for testing and refinement.

- **Ethics:** Reminded to consider GDPR implications even for non-image data. Suggested adding a "system active" indicator for transparency.

## Action Items

| Priority | Task | Deadline |
|----------|------|----------|
| High | Complete hardware procurement | Week 2 |
| High | Set up development environment | Week 2 |
| Medium | Draft ethics consideration document | Week 3 |
| Medium | Create system architecture diagram | Week 3 |
| Low | Research existing CSI-based systems | Ongoing |

## Notes for Next Meeting

- Prepare demonstration of raw CSI data capture
- Bring preliminary system architecture for review
    `,
    date: '2025-01-18',
    readingTime: '3 min read',
    tags: ['Meeting', 'Planning', 'Feedback'],
    featured: false,
    category: 'supervisor-meeting',
  },
  {
    slug: 'technical-deep-dive-wifi-csi',
    title: 'Technical Deep Dive: Understanding Wi-Fi CSI',
    excerpt: 'A comprehensive look at how Wi-Fi Channel State Information works and why it enables device-free sensing.',
    content: `
## What is Channel State Information?

Channel State Information (CSI) describes how a wireless signal propagates from a transmitter to a receiver. Unlike simple RSSI (signal strength), CSI provides fine-grained information about the wireless channel.

## The Physics Behind CSI

When Wi-Fi signals travel through space, they:

1. **Reflect** off walls and objects
2. **Diffract** around edges
3. **Scatter** from rough surfaces
4. Get **absorbed** by materials

This creates a unique "fingerprint" of the environment at the receiver.

\`\`\`
Signal Path Visualization:

TX ─────────────────────────────► RX (Direct Path)
    ╲                           ╱
     ╲    ┌─────────┐         ╱
      ╲───│  Human  │────────╱  (Reflected Path)
          │  Body   │
          └─────────┘
\`\`\`

## How Human Movement Affects CSI

When a person moves in the environment:

- Their body acts as a reflector/absorber
- Signal paths change dynamically
- CSI values fluctuate in characteristic patterns

**Key insight:** Different activities (walking, sitting, falling) create distinct CSI patterns that can be classified using machine learning.

## CSI Data Structure

Each CSI packet contains data for multiple OFDM subcarriers:

\`\`\`python
# CSI data format (simplified)
csi_data = {
    'timestamp': 1705xxx,
    'rssi': -45,
    'subcarriers': [
        {'index': 0, 'amplitude': 23.5, 'phase': 1.23},
        {'index': 1, 'amplitude': 21.2, 'phase': 0.87},
        # ... 52 subcarriers total
    ]
}
\`\`\`

## Why CSI for Fall Detection?

Falls create a unique signature:
- **Sudden velocity change** - rapid CSI fluctuation
- **Impact signature** - characteristic spike pattern
- **Post-fall stillness** - CSI stabilizes in new configuration

This makes falls distinguishable from normal activities like sitting down quickly.

## Next: Signal Processing Pipeline

In the next technical post, I'll cover the signal processing pipeline for extracting features from raw CSI data.
    `,
    date: '2025-01-22',
    readingTime: '6 min read',
    tags: ['Wi-Fi CSI', 'Theory', 'Signal Processing', 'Research'],
    featured: true,
    category: 'technical',
  },
  {
    slug: 'week-3-raspberry-pi-setup-data-pipeline',
    title: 'Week 3: Raspberry Pi Setup & Data Pipeline',
    excerpt: 'Configuring the Raspberry Pi 5 as the central processing brain and establishing data flow.',
    content: `
## Objectives for the Week

- Set up Raspberry Pi 5 with necessary dependencies
- Establish serial communication with ESP32
- Create data logging and storage system
- Begin implementing basic signal processing

## Technical Challenges Faced

The main challenge was handling the high-frequency CSI data stream. The ESP32 sends CSI packets at approximately 100Hz, which needs efficient handling on the Pi.

## Solutions Implemented

Created a multi-threaded Python application:

\`\`\`python
import threading
import serial
import numpy as np
from collections import deque

class CSIProcessor:
    def __init__(self, port='/dev/ttyUSB0', baud=921600):
        self.serial = serial.Serial(port, baud)
        self.buffer = deque(maxlen=1000)
        self.running = True
        
    def reader_thread(self):
        while self.running:
            if self.serial.in_waiting:
                data = self.serial.readline()
                self.buffer.append(self.parse_csi(data))
                
    def processor_thread(self):
        while self.running:
            if len(self.buffer) >= 100:
                window = list(self.buffer)[-100:]
                features = self.extract_features(window)
                # Feed to ML model
\`\`\`

## Next Steps

- Implement feature extraction algorithms
- Begin collecting labeled training data
- Set up mmWave radar integration
    `,
    date: '2025-02-03',
    readingTime: '4 min read',
    tags: ['Raspberry Pi', 'Python', 'Data Pipeline'],
    featured: false,
    category: 'weekly-update',
  },
  {
    slug: 'supervisor-meeting-2-progress-review',
    title: 'Supervisor Meeting #2: Progress Review',
    excerpt: 'Second supervisor meeting reviewing hardware setup progress and discussing ML approach.',
    content: `
## Meeting Details

**Date:** February 1, 2025  
**Duration:** 30 minutes  
**Attendees:** Supervisor, Student

---

## Topics Discussed

1. Hardware setup progress demonstration
2. CSI data quality assessment
3. Machine learning approach for fall detection
4. Timeline adjustments

## Key Feedback Received

- **Progress:** Impressed with CSI data capture quality. Suggested documenting the setup process thoroughly.

- **ML Approach:** Recommended starting with traditional ML (Random Forest, SVM) before trying deep learning. Emphasized the importance of a diverse training dataset.

- **Data Collection:** Suggested recruiting volunteers for fall simulation data. Reminded about safety protocols.

## Action Items

| Priority | Task | Deadline |
|----------|------|----------|
| High | Create data collection protocol | Week 4 |
| High | Implement basic fall classifier | Week 5 |
| Medium | Document hardware setup | Week 4 |
| Medium | Plan volunteer data collection | Week 5 |

## Notes for Next Meeting

- Demonstrate basic fall detection working
- Present initial accuracy metrics
    `,
    date: '2025-02-01',
    readingTime: '3 min read',
    tags: ['Meeting', 'Progress', 'ML Strategy'],
    featured: false,
    category: 'supervisor-meeting',
  },
]

export const projects: Project[] = [
  {
    slug: 'aegis-fall-detection',
    title: 'A.E.G.I.S - Fall Detection System',
    description: 'Privacy-preserving fall detection using Wi-Fi CSI and mmWave sensor fusion.',
    longDescription: `
A.E.G.I.S (Autonomous Elderly Guardian & Intelligent Sensing) is a comprehensive fall detection and vital monitoring system designed for elderly care facilities and home environments.

## The Problem

Elderly falls are a leading cause of injury-related deaths. Current solutions have significant limitations:
- **Cameras** violate privacy and cannot be used in bathrooms
- **Wearables** are often forgotten or removed by dementia patients
- **Pressure mats** have limited coverage

## Our Solution

A.E.G.I.S uses commodity Wi-Fi signals to detect falls by analyzing wave distortions caused by human movement. Combined with mmWave radar for vital sign monitoring, it provides comprehensive, privacy-preserving elderly monitoring.

## Key Features

- **Device-free monitoring** - No wearables required
- **Privacy-preserving** - No cameras or images
- **Vital sign detection** - Monitors breathing after falls
- **Real-time alerts** - Immediate notification to caregivers
- **Cost-effective** - Uses commodity hardware
    `,
    tags: ['ESP32', 'Python', 'Wi-Fi CSI', 'mmWave', 'Machine Learning', 'Raspberry Pi'],
    githubUrl: 'https://github.com',
    featured: true,
    status: 'in-progress',
  },
  {
    slug: 'csi-data-collector',
    title: 'CSI Data Collection Tool',
    description: 'Python tool for collecting and labeling Wi-Fi CSI data for ML training.',
    longDescription: `
A comprehensive data collection and labeling tool designed specifically for Wi-Fi CSI research.

## Features

- Real-time CSI visualization
- Activity labeling interface
- Automated data segmentation
- Export to multiple formats (CSV, NumPy, TensorFlow)
- Support for multiple ESP32 devices

## Technical Details

Built with Python using PyQt5 for the GUI and NumPy/Pandas for data processing. Communicates with ESP32 devices via serial connection.
    `,
    tags: ['Python', 'PyQt5', 'Data Collection', 'Wi-Fi CSI'],
    githubUrl: 'https://github.com',
    featured: false,
    status: 'completed',
  },
  {
    slug: 'esp32-csi-firmware',
    title: 'ESP32 CSI Extraction Firmware',
    description: 'Custom firmware for ESP32 enabling Wi-Fi CSI data extraction.',
    longDescription: `
Modified ESP-IDF firmware that enables real-time extraction of Wi-Fi Channel State Information from ESP32 devices.

## Features

- 100Hz CSI sampling rate
- Configurable subcarrier selection
- Multiple output formats
- Low-latency serial transmission

## Technical Details

Built on ESP-IDF v5.0 with custom Wi-Fi driver modifications to expose CSI callbacks.
    `,
    tags: ['C++', 'ESP32', 'ESP-IDF', 'Firmware'],
    githubUrl: 'https://github.com',
    featured: false,
    status: 'completed',
  },
  {
    slug: 'vital-signs-monitor',
    title: 'mmWave Vital Signs Monitor',
    description: 'Real-time breathing and heart rate detection using LD2410 radar.',
    longDescription: `
A vital signs monitoring module using the LD2410 mmWave radar sensor.

## Features

- Breathing rate detection
- Presence detection
- Unconsciousness detection (absence of breathing)
- Integration with main A.E.G.I.S system

## Technical Details

Interfaces with LD2410 via UART, processes radar data to extract respiratory patterns.
    `,
    tags: ['mmWave', 'LD2410', 'Python', 'Signal Processing'],
    githubUrl: 'https://github.com',
    featured: false,
    status: 'in-progress',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}

// Pre-computed tags array for imports
export const allTags: string[] = (() => {
  const tags = new Set<string>()
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
})()

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
