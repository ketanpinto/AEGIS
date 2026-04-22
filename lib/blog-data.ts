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
  imageUrl?: string
  videoUrl?: string
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
    title: 'Week 1: THE BEGINNING',
    excerpt: 'The beginning of A.E.G.I.S - choosing Wi-Fi CSI over cameras for privacy-preserving fall detection.',
    content: `

This week marked the beginning of our final-year project journey with an introductory session led by **Dr. Fehmida** and **Mr. Roshan**. They gave us an in-depth overview of the module, including timelines, expectations, and deliverables for the following months. A key part of the lecture was a discussion of several research methodologies, with an emphasis on how each methodology can be used in our projects.


![Safe Smart Home Interior](https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200)



The **Build**, **Model**, and **Experimental** methodologies stood out to me as the most applicable to my project:

- **Build methodology** focuses on the design and development of my device's sensor nodes and processing unit.
- **Model methodology** Securing the development of algorithms for classifying fall patterns and distinguishing them from daily activities.
- **Experimental methodology** will be required for testing the device with simulated scenarios and determining its detection accuracy.

**Mr. Roshan** also introduced us to the **First-Cut Proposal** form, which allows us to define our project's goal, objectives, and scope. He discussed how this document will help us refine our project ideas and successfully communicate them to our supervisors. Following the workshop, we were instructed to contact our supervisors for an introductory meeting to discuss our plans and ideas. We were also given the task of completing the First-Cut Proposal form and starting with our blogging website.




---


### **The Idea**

For my final-year project, I decided to work on **A.E.G.I.S. (Autonomous Elderly Guardian & Intelligent Sensing)**. The project aims to create a privacy-preserving fall detection system that utilizes Wi-Fi signals and radar technology to monitor safety.


![Advanced Sensing Technology](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200)

> This device, when placed in a room, will analyse the disturbance in radio waves to detect falls without using intrusive cameras or wearable devices. It will also check for vital signs (like breathing) to determine if a person is conscious after a fall and provide real-time alerts to caregivers to assist them immediately.

---

## The Inspiration Behind A.E.G.I.S.


The inspiration for this project is deeply personal. 

> "My grandmother suffered a severe stroke in 2005 which left the entire right side of her body paralysed. The cause of this severity was a fall; she was lying at home alone for three days before someone found her after spotting her through a window. Because she was stranded there for three days, her condition became much worse, leaving her with no control over her right hand side. Even now, she frequently falls, sometimes at night when the caretakers are asleep, which wastes critical response time. That’s what inspired me to develop A.E.G.I.S. I aim to solve this problem once and for all, ensuring no one else has to wait days for help."

The project will include hardware and software integration. **Wi-Fi CSI (Channel State Information)** sensors will be used to track room presence and detect sudden falls, while **mmWave radar** will provide data on micro-movements like breathing. This data will be transmitted to a central processor, which will analyse it in real-time and provide immediate alerts if a critical event occurs. The plan is to build and prototype the sensor nodes, develop the detection algorithm, and test the system with simulated falls to ensure reliability and speed.

---
## My Approach

1. **Phase 1:** Research and design the hardware nodes and select appropriate Wi-Fi and radar sensors.
2. **Phase 2:** Develop the detection algorithm to interpret signal variances.
3. **Phase 3:** Develop the model to distinguish between falls, sitting, and walking.
4. **Phase 4:** Integrate the hardware sensors with the notification system.
5. **Phase 5:** Conduct experimental trials to test the device and gather data for accuracy improvements.


![Research and Laboratory Work](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200)
---
## Methodology

After evaluating different approaches, I found that the Build, Model, and Experimental methodologies were the best fit for **A.E.G.I.S.**:

- **Build:** Focuses on designing and developing the hardware sensor nodes and software logic.
- **Model:** Applies to creating algorithms that classify movement patterns and identify falls.
- **Experimental:** Involves testing the system in a controlled environment to evaluate response time and accuracy.


---
## Reflection


After spending a lot of time brainstorming and discussing with my supervisor, I finally settled on a project idea this week. Initially, I had various ideas, but after reflecting on my grandmother's experience and doing careful research, I chose **A.E.G.I.S.** because of its potential to make a significant difference in elderly care. 

Moving ahead, I intend to focus on the hardware prototype and finalise the sensor selection.

This is just the beginning, and I’m excited to see how **A.E.G.I.S.** can transform the way we protect our loved ones!
    `,
    date: '2025-01-20',
    readingTime: '5 min read',
    tags: ['Hardware', 'Wi-Fi CSI', 'Privacy', 'Research'],
    featured: true,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-2-ethics-architecture-hardware',
    title: 'Week 2: Research Ethics, System Architecture, and Hardware Validation',
    excerpt: 'A comprehensive overview of the ethical frameworks, multi-tiered system architecture, and preliminary hardware validation for the A.E.G.I.S. platform.',
    content: `
## Objectives for the Week

- Complete and submit formal research ethics screening and approval documentation.
- Define the multi-tiered system architecture (Sensor, Edge AI, and Application layers).
- Establish a formal Work Breakdown Structure (WBS) and Gantt chart for project management.
- Configure the ESP32 development environment and empirically validate the external high-gain antennas.

## The Ethical Framework of A.E.G.I.S.

Unlike traditional ambient monitoring projects that rely on intrusive optical cameras or physical wearables, A.E.G.I.S. (Autonomous Elderly Guardian & Intelligent Sensing) operates entirely on invisible radio frequencies. Specifically, it utilizes Wi-Fi Channel State Information (CSI) and Frequency Modulated Continuous Wave (FMCW) radar. 

Completing the university's ethics screening forms was a necessary step to confirm the project's adherence to professional engineering standards:
- **Data Privacy:** No video, audio, or personally identifiable imagery is recorded, transmitted, or stored at any point.
- **Radiological Safety:** All hardware utilizes low-power, commercially safe radio waves (2.4GHz Wi-Fi and 24GHz radar), remaining well within standard consumer safety limits and posing zero radiation risk.
- **Participant Safety:** The research poses no physical harm to vulnerable demographics. I will act as the sole test subject for all simulated fall experiments to ensure no elderly participants are exposed to physical risk during the data collection phase.
- **Edge-Computing Paradigm:** By processing all signal data locally on the Raspberry Pi 5 edge device rather than offloading it to a cloud server, the system inherently mitigates the risk of external data breaches.

## Breaking Down the Technical Architecture

While A.E.G.I.S. serves a healthcare application, its underlying architecture is a complex, layered Internet of Things (IoT) network. It requires the seamless integration of embedded systems engineering, edge-based artificial intelligence, and real-time network communication.



### 1. Sensor Layer: RF Data Extraction
The foundation of the A.E.G.I.S. framework relies on capturing physical disturbances in the ambient environment using two distinct sensor modalities:
- **Wi-Fi CSI Nodes:** ESP32-WROOM-32U microcontrollers equipped with external 6dBi high-gain antennas via U.FL/IPEX connectors. These nodes track the minute phase and amplitude variances in Wi-Fi subcarriers caused by human movement intersecting the line of sight.
- **mmWave Radar:** The LD2410C sensor, which is dedicated to detecting micro-movements. It will monitor the subtle chest displacements caused by human respiration to verify post-fall consciousness.

### 2. Edge AI Layer: Fall Classification and Processing
To maintain privacy and reduce latency, a Raspberry Pi 5 serves as the central processing brain of the local network:
- **Signal Processing:** Filtering environmental noise from the raw CSI and radar data streams using techniques such as Butterworth filters and Principal Component Analysis (PCA).
- **Machine Learning Classification:** Utilizing Support Vector Machines (SVM) or lightweight Decision Trees to classify distinct spatial movement signatures, differentiating a critical "hard fall" from standard activities like sitting or walking.
- **Sensor Fusion Logic:** A rule-based system that cross-references the fall detection trigger from the CSI network with the vital sign data from the radar.

### 3. Application Layer: Decision Support and Alerting
- **Communication Protocol:** Implementing an MQTT-based messaging architecture to ensure ultra-low latency transmission of alert states.
- **Caregiver Interface:** A secure dashboard that displays real-time room status (e.g., "Occupied - Normal" or "Critical Alert") without exposing visual data, preserving the dignity of the monitored individual.

## Project Management: Structuring the Development Cycle

To manage the extensive workload systematically, I structured the project into core developmental phases: Initiation, Hardware Assembly, Data Collection, Edge AI Development, System Integration, and Evaluation. 



These tasks have been mapped onto a comprehensive Gantt Chart spanning the semester. This visual timeline ensures that critical path milestones, such as baseline data collection and iterative model training, are achieved on schedule, allowing sufficient time for final system calibration.



![Engineering project Gantt chart](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200)


## Preliminary Hardware Validation: The Signal Attenuation Experiment

Before writing the complex C++ firmware required to extract raw CSI payloads, it was critical to empirically validate the hardware connections. Because the ESP32-WROOM-32U lacks an onboard antenna, a poorly seated IPEX connector would result in high packet loss and corrupt data.

To test this, I configured one ESP32 to act as a localized "Beacon" broadcasting a test SSID, and a second ESP32 as a "Watcher" programmed to continually log the Received Signal Strength Indicator (RSSI) via the Arduino IDE's Serial Plotter.



By establishing a baseline signal and then physically walking directly between the transmission path of the two antennas, I successfully observed a significant, repeatable attenuation (drop) in signal strength. This "shadowing" effect scientifically validates that the external antennas are correctly seated and highly sensitive to human presence. This successful test confirms the fundamental physical principles upon which the entire A.E.G.I.S. detection algorithm will be built.

## Next Steps

- Transition from basic RSSI tracking to implementing the ESP-IDF framework for extracting the granular 52-subcarrier CSI payload.
- Wire the LD2410C mmWave radar sensor and configure its serial communication protocols.
- Establish the data logging pipeline on the Raspberry Pi 5 to begin capturing baseline datasets.
    `,
    date: '2026-02-09',
    readingTime: '5 min read',
    tags: ['Ethics', 'Architecture', 'ESP32', 'Project Management'],
    featured: false,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
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


    `,
    date: '2025-01-22',
    readingTime: '6 min read',
    tags: ['Wi-Fi CSI', 'Theory', 'Signal Processing', 'Research'],
    featured: true,
    category: 'technical',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-3-literature-review-research-gap',
    title: 'Week 3: Literature Review, Research Gap, Research Questions, and Reflections',
    excerpt: 'A comprehensive review of existing ambient assisted living technologies, identifying research gaps, and defining the core research questions for A.E.G.I.S.',
    content: `
## Literature Review

This week, I focused on understanding the existing research and frameworks related to ambient assisted living, elderly fall detection, and radio frequency (RF) sensing. Traditional fall detection in elderly care is typically guided by two established paradigms: wearable technologies (such as accelerometers or smartwatches) and vision-based systems (such as RGB cameras or infrared sensors).

Many existing studies evaluate these traditional systems and highlight severe limitations. Wearable devices suffer from poor user compliance, especially among individuals with cognitive impairments like dementia, who frequently forget to wear them or actively remove them. Conversely, vision-based systems offer passive monitoring but severely compromise user dignity, making them entirely unsuitable for deployment in private areas like bathrooms, where falls most frequently occur.

In recent years, machine learning has been widely applied to RF sensing, specifically utilizing Wi-Fi Channel State Information (CSI) and Frequency Modulated Continuous Wave (FMCW) radar. Wi-Fi CSI can track the variance in radio waves to identify human movement, while mmWave radar excels at micro-movement detection, such as respiration. However, its application in commercial healthcare appears fragmented. Most research focuses either purely on Wi-Fi CSI, which struggles with environmental noise and false positives, or purely on radar, which often has a limited field of view.

From reviewing this literature, it became clear that while RF sensing standards exist and machine learning models are available, there is limited work that successfully fuses Wi-Fi macro-movement data with radar-based vital sign monitoring into a single, cohesive edge-computing platform.

## Research Gap

Based on the literature reviewed, the following research gaps were identified:

- Fall detection evaluation is often isolated to a single sensor type, leading to high false-positive rates when environmental noise is introduced.
- Existing Wi-Fi CSI systems primarily focus on the fall event itself but do not verify the patient's post-fall status (e.g., conscious and breathing versus unconscious).
- There is limited integration of multi-modal RF sensing with localized edge-computing; many systems offload processing to the cloud, introducing unacceptable latency and data privacy risks.
- Few systems provide an autonomous decision-support tool that combines the spatial coverage of Wi-Fi with the localized, high-fidelity vital monitoring of mmWave radar.

This project aims to address these gaps by developing a hybrid system that integrates Wi-Fi CSI disturbance tracking with mmWave respiratory monitoring to generate highly accurate, privacy-preserving alerts processed entirely on a local edge device.

## Research Questions

To guide the development and evaluation of the project, the following research questions have been formulated:

1. How can the variance in Wi-Fi CSI subcarriers and mmWave radar telemetry be effectively fused to differentiate a critical fall from standard daily activities?
2. Can supervised machine learning models (such as Support Vector Machines) deployed on a Raspberry Pi 5 achieve real-time, low-latency fall classification without cloud dependency?
3. How reliably can the LD2410C mmWave sensor detect human respiration to verify post-fall consciousness in a highly obstructed simulated environment?
4. Does the fusion of CSI and radar data significantly reduce the false-positive alert rate compared to single-sensor ambient monitoring systems?

These questions will shape both the technical implementation of the machine learning pipeline and the evaluation of the sensor nodes in the coming weeks.

## Reflection

Working on the literature review helped me understand that elderly monitoring is not just a technical problem, but also a deeply human and ethical issue. It reinforced the importance of designing the A.E.G.I.S. system in a way that prioritizes dignity, proving that the best technical solution is ineffective if users reject it due to privacy concerns.

Identifying the research gap was particularly important, as it clarified what differentiates this project from existing IoT studies. The integration of post-fall vital sign verification (via radar) with general spatial awareness (via Wi-Fi) appears to be the most innovative aspect of the system.

This week has strengthened the research foundation of the project and ensured that the upcoming data collection and algorithm development phases are grounded in existing academic knowledge while contributing a novel approach to sensor fusion. It has also made me significantly more confident about the academic rigor and real-world impact of the project.
    `,
    date: '2026-02-16',
    readingTime: '5 min read',
    tags: ['Literature Review', 'Research Gap', 'Sensor Fusion', 'Methodology'],
    featured: false,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1522071823991-b99c5517a7EB?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-4-wbs-and-gantt-chart',
    title: 'Week 4: WBS and Gantt Chart',
    excerpt: 'Planning the architecture with a Work Breakdown Structure and Gantt chart before diving into development.',
    content: `
Before diving headfirst into wiring up microcontrollers and writing Python scripts, this week was all about hitting the brakes and actually planning the architecture. A sensor-fusion project like A.E.G.I.S. has a lot of moving parts, so I needed a solid roadmap to ensure I wouldn't get lost in the weeds later on.

## Work Breakdown Structure (WBS)

To stop the project from feeling like one massive, impossible mountain, I built a Work Breakdown Structure (WBS). The idea here was to chop the entire A.E.G.I.S. system into bite-sized, logical modules.

I separated the workload into highly specific phases: initial Radio Frequency (RF) research, hardware procurement, embedded C development (for the ESP32 Wi-Fi tripwire), Python backend processing (the Wave-Shift math engine), and finally, the sensor fusion logic tying in the LD2410C radar. Mapping it out like this was a game-changer. It clearly highlighted the true scope of the project and gave me a tangible checklist to work through, rather than just blindly coding and hoping it all connects at the end.

![Work Breakdown Structure](/wbs.png)

## Gantt Chart

With the WBS outlining what needed to be done, I used a Gantt chart to map out when it would happen. Hardware and software projects are heavily dependent on sequence. For instance, I physically cannot calibrate the Python kinetic variance thresholds until the ESP32 network is successfully generating an autonomous Wi-Fi stream.

Plotting the tasks on a visual timeline helped me lock in strict dependencies and allocate specific weeks for coding, debugging, and physical testing. I used a timeline tool to visually stack the tasks leading up to the final submission in April. It gives me a clear sequence of deadlines and, most importantly, ensures I have enough buffer time for the inevitable troubleshooting that comes with custom hardware integration.

![Gantt Chart](/ganttchart.png)
    `,
    date: '2026-02-23',
    readingTime: '3 min read',
    tags: ['Planning', 'WBS', 'Gantt Chart', 'Project Management'],
    featured: false,
    category: 'weekly-update',
    imageUrl: '/wbs.png',
  },
  {
    slug: 'week-5-prototyping-aegis-system',
    title: 'Week 5: Prototyping the A.E.G.I.S. System',
    excerpt: 'Transitioning from theoretical planning to building the first working prototype of A.E.G.I.S.',
    content: `
This week, I moved from theoretical planning to building the first working prototype of A.E.G.I.S. Because a system is useless if it only works on paper, I needed to physically integrate the microcontrollers and the Python backend to process live environmental disturbances. The objective was to create a scaled prototype that detects sudden human falls and triggers a local alert, all whilst strictly preserving user privacy.

## Mathematical Engine Preparation

Before testing the physical hardware, I had to ensure the data extraction was mathematically sound. Because preserving dignity is the primary motive behind A.E.G.I.S., optical cameras cannot be used. Therefore, I wrote a Python script to parse raw Channel State Information (CSI) from the Wi-Fi network.

Instead of relying on basic signal strength, which fluctuates wildly and causes false alarms, I developed a Wave-Shift algorithm. This calculates the kinetic variance (standard deviation) across a rolling 10-frame buffer. The logic is simple: if the room is still, the variance remains low; if a person falls, the physical drop violently distorts the Wi-Fi waves, causing a massive variance spike. This lightweight mathematical approach is necessary because it allows the system to run locally on the Raspberry Pi 5, entirely removing the need for external cloud computing.

## Hardware and Edge Deployment

With the math engine established, I moved to the physical hardware setup. I configured two ESP32 microcontrollers, a Beacon and a Receiver, to generate an invisible Wi-Fi tripwire. However, Wi-Fi CSI alone has a flaw: it detects a sudden drop, but if the person lies perfectly still unconscious, the variance returns to normal. The system wouldn't know if a person fell or if a heavy book simply dropped off a table.

To solve this, I integrated an HLK-LD2410C mmWave radar to track micro-movements. The cause-and-effect logic is now absolute: if the Wi-Fi detects a massive variance spike and the radar subsequently detects human respiration at floor level with no walking movement, the system definitively confirms a fall.

For the alert output, a simple buzzer provides no detailed context. Consequently, I wired an ILI9341 SPI TFT display directly to the Pi’s GPIO pins. When the dual-sensor threshold is breached, the display dynamically flashes a red alert state.

## Reflections and Challenges

Integrating the math with the physical hardware immediately revealed several real-world flaws. Firstly, if the Python script takes too long to process the complex matrices, the Raspberry Pi's USB serial buffer jams. This caused a massive 15-second latency between a physical movement and the screen updating. Because a 15-second delay is disastrous in a medical emergency, I coded a low-latency failsafe to constantly monitor and flush the queue, forcing the processing back to real-time.

Secondly, I encountered the "Quiet Room" problem. If the system relies on a smartphone to generate network traffic, modern operating systems will eventually drop the closed-loop Wi-Fi connection to save battery. If the phone disconnects, the wave transmission ceases, and the entire safety net fails. To fix this, I programmed the ESP32s using C and FreeRTOS to autonomously fire a UDP ping ten times a second, ensuring the system is completely self-sustaining.
    `,
    date: '2026-03-02',
    readingTime: '3 min read',
    tags: ['Prototyping', 'Hardware', 'Python', 'ESP32', 'Raspberry Pi 5'],
    featured: false,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-6-prototype-evaluation-architecture',
    title: 'Week 6: Prototype Evaluation & Formalising System Architecture',
    excerpt: 'Evaluating the A.E.G.I.S. prototype through real-world logic tests and formalising the UML documentation.',
    content: `
Week 6 was the critical turning point for A.E.G.I.S. While Week 5 was simply about getting the hardware pieces to communicate, this week was about forcing the prototype through real-world logic tests. If the mathematical engine is flawed in a controlled test, it will fail disastrously in a real medical emergency. Therefore, my priority was to evaluate the prototype, break it, and fix the underlying logic before formalising the UML documentation.

## Prototype Evaluation & Refinement

During my initial testing of the Raspberry Pi processing hub, I discovered a major flaw in my math. To make the Wi-Fi wave shifts more obvious, I had applied a massive 50x multiplier to the raw subcarrier data. This caused a severe issue: because the multiplier was so high, it amplified microscopic thermal changes in the room. If the room temperature shifted, the variance baseline drifted, and the system would trigger a false "movement" alert in a completely empty room.

**The Fix:** I completely stripped out the artificial multipliers. By forcing the Python engine to rely strictly on the true standard deviation of the 10-frame rolling buffer, the thermal noise vanished, and the baseline stabilised.

The second critical failure occurred during impact testing. If I dropped a heavy stack of books off a table, the Wi-Fi CSI accurately detected the massive physical wave distortion and immediately flagged it as a fall. Dispatching an emergency response for a dropped book is completely unacceptable. Because Wi-Fi CSI cannot tell the difference between a human mass dropping and an inanimate object dropping, single-sensor logic is inherently flawed.

**The Fix:** I hardcoded the LD2410C mmWave radar into the master logic loop to act as a definitive cross-reference. The new cause-and-effect logic is absolute: If the Wi-Fi variance spikes above 10.0, the system flags a potential event. It then immediately checks the radar. If the radar detects the micro-movements of human respiration at floor level, but absolutely zero walking macro-movement, only then is a fall confirmed. This completely eliminated the false positives.

## Software Requirements Specification

Following the BEng guidelines, I had to formally document the requirements and methodology driving this architecture.

### Software Methodology Justification

I am utilising a Hybrid Methodology (combining Waterfall and Agile).

**Justification:** Because physical hardware procurement relies on rigid shipping times, Waterfall was necessary for the initial build phases. However, because real-world radio frequencies are messy and unpredictable, using Waterfall for the software would be disastrous. If I discovered the thermal noise issue in Week 8 under a strict Waterfall model, I wouldn't be able to step back and fix it. Agile allowed me to constantly rewrite and test the Python engine without shattering the project timeline.

### Functional & Non-Functional Requirements

**Functional:**

The ESP32 network must autonomously generate a continuous 10-FPS UDP stream. If it relies on a user's phone to create traffic, the phone will eventually disconnect to save battery, and the system will starve for data.

The system must calculate kinetic variance using Wi-Fi CSI and cross-reference it with 24GHz mmWave radar data.

**Non-Functional:**

Absolute Privacy: The system must not utilise any optical camera lenses. If a camera is used, the idea of privacy goes, making it completely unsuitable for high-risk areas like bathrooms.

Latency: The processing and alert state must occur in under 3 seconds. If the Pi's USB buffer jams and delays the alert by 15 seconds, that lost time is life-threatening in an emergency.

**User Requirements:**

Zero Compliance: The system must operate completely passively. If it requires an elderly user to actively wear a pendant or remember to charge a watch, they will eventually forget. A safety system that relies on human memory is fundamentally flawed.

## Design Diagrams (UML)

I have completed the UML diagrams to map out this finalised logic.

### Use Case Diagram: 
![Use Case Diagram](/umlusecasehoriz.png)

### Sequence Diagram:
![Sequence Diagram](/umlsequencediagram.png)
    `,
    date: '2026-03-09',
    readingTime: '4 min read',
    tags: ['Evaluation', 'Testing', 'UML', 'Requirements', 'Architecture'],
    featured: false,
    category: 'weekly-update',
    imageUrl: '/umlusecasehoriz.png',
  },
  {
    slug: 'week-7-hardware-integration-uart-breakthrough',
    title: 'Week 7: Hardware Integration & the UART Breakthrough',
    excerpt: 'Integrating the HLK-LD2410C mmWave radar with Raspberry Pi 5 and overcoming UART communication challenges.',
    content: `
This week was the "make or break" phase for the A.E.G.I.S. hardware architecture. While the Wi-Fi CSI math has been progressing in simulation, the project requires a physical "truth sensor" to eliminate false positives. My goal was to integrate the HLK-LD2410C mmWave radar, but I quickly discovered that hardware integration on the new Raspberry Pi 5 comes with its own set of unique challenges.

## The UART Troubleshooting Phase

The primary hurdle was a "silent failure" in communication. Despite the radar being powered correctly (verified via a smartphone BLE app), the Raspberry Pi 5 remained "deaf" to the incoming data stream.

**The Conflict:** I initially attempted to communicate via the standard \`/dev/serial0\` alias. However, the Pi 5’s OS architecture handles serial mapping differently than previous models, often leaving this alias disconnected from the physical GPIO pins.

**The Loopback Solution:** To prove the software environment was functional, I performed a Hardware Loopback Test. By physically bridging the Pi’s TX and RX pins (Pins 8 and 10) and sending a test string, I confirmed that the Pi could "hear itself" only when using the specific hardware port: \`/dev/ttyAMA0\`.

![Hardware Loopback Test](/week7-terminal.png)

**The Fix:** Once I remapped the Python script to use \`/dev/ttyAMA0\`, the data floodgates opened.

## Decoding the Hexadecimal Heartbeat

With the port open, I successfully captured a constant stream of raw hexadecimal packets. The LD2410C communicates at a high-speed 256,000 baud rate, sending frames starting with the header \`f4f3f2f1\`.

I have now developed a preliminary parsing script to isolate the Target State Byte (Index 8 of the packet). This is the "intelligence" of the sensor, allowing the system to identify:

- **0x00 (Empty):** No presence detected.
- **0x01 (Moving):** Active human motion (Macro).
- **0x02 (Stationary):** Human presence detected through micro-movements/respiration.

![Hexadecimal Parsing Code](/week7-code.png)

## Summary of Progress

- **Hardware:** Successfully wired and verified the LD2410C via UART pins.
- **Software:** Built a functional Python environment with \`pyserial\` to listen to the radar.
- **Troubleshooting:** Resolved the Pi 5 serial port mapping conflict using loopback diagnostics.

## Next Milestone

Now that I have the raw data streaming into the terminal, the next step is to integrate this logic into my existing Dashboard GUI and the Master Logic Gate. This will allow the SPI screen to change color based on the radar's state and begin the process of cross-referencing radar data with Wi-Fi CSI spikes.
    `,
    date: '2026-03-16',
    readingTime: '4 min read',
    tags: ['Hardware', 'Radar', 'UART', 'Raspberry Pi 5', 'Troubleshooting'],
    featured: false,
    category: 'weekly-update',
    imageUrl: '/week-7-radar.png',
  },
  {
    slug: 'week-8-the-bimodal-convergence',
    title: 'Week 8: The Bimodal Convergence',
    excerpt: 'The Grand Finale of the A.E.G.I.S. development phase, successfully fusing the Wi-Fi CSI Kinetic Engine with the mmWave Biological Engine into a unified monitoring framework.',
    content: `
This week represents the "Grand Finale" of the A.E.G.I.S. development phase. The primary objective was to close the loop on the bimodal sensing architecture by fusing the Wi-Fi CSI Kinetic Engine with the mmWave Biological Engine. After weeks of isolating the physics of wave-scattering and the telemetry of radar presence, I successfully integrated these subsystems into a unified, high-fidelity monitoring framework.

The transition from disparate hardware modules to a singular, synchronised system is arguably the most rigorous phase of the project. It requires meticulous resource management to ensure the Raspberry Pi 5 can ingest two high-speed serial streams while simultaneously calculating complex matrix math and rendering a real-time telemetry dashboard.

## The Integration Challenge: Engineering Synchronicity

In a bimodal system, "Synchronicity" refers to the alignment of two different physical perspectives. My goal was to create an environment where the Wi-Fi CSI (detecting kinetic energy) and the mmWave Radar (detecting human respiration) could "handshake" in real-time. This ensures that if a high-velocity impact occurs, the system immediately queries the radar to verify if a biological target is present at floor level.

## Redesigning the Master Telemetry Dashboard (GUI)

To support this bimodal stream, I redesigned the GUI for the ILI9341 2.8-inch SPI display. I abandoned the basic text-only readout in favour of a high-contrast telemetry layout. Using the Pillow (PIL) library, I partitioned the screen into logical diagnostic zones:

- **Telemetry Panel (Left):** Real-time numerical readouts for Wi-Fi Variance (σ), Radar State, and Target Distance (D cm).
- **Confidence Engine (Right):** A dynamic percentage display representing the heuristic probability of a fall.
- **Kinetic Variance Bar (Centre):** A colour-coded horizontal bar that visualises signal instability, transitioning from Cyan (Nominal) to Red (Critical).

## The Software Stack and Processing Pipeline

The entire backend is architected in Python 3.11. Python was selected as the integration bridge because it allows for the seamless orchestration of low-level C++ binaries (via spidev and lgpio) with high-performance mathematical libraries like NumPy.

### Core Data Sources & Engines:

- **NumPy Physics Engine:** For the real-time calculation of the Standard Deviation (σ) across 64 complex Wi-Fi subcarriers.
- **Serial Hex-Parser:** A custom-built parser for the HLK-LD2410C radar, performing bitwise shifts to reconstruct Little-Endian distance bytes.
- **Threading Module:** Utilised to manage three parallel execution threads to prevent CPU "bottlenecking":
  - **Thread 1:** CSI data ingestion via \`/dev/ttyUSB0\` (115,200 baud).
  - **Thread 2:** Radar telemetry ingestion via \`/dev/ttyAMA0\` (256,000 baud).
  - **Thread 3:** The Master Logic Loop and GUI rendering engine.

## Implementation: The Weighted Confidence Loop

The \`AegisMaster.py\` script is the new "Command and Control" centre of the project. It implements a Heuristic Weighted Engine to decide when to trigger an alert.

Because Wi-Fi signals can be "noisy," we cannot rely on a single spike. Instead, the system assigns "Confidence Points":

- **Initial Wave-Shift:** If σ>3.0, add 35% confidence.
- **Critical Velocity:** If σ>7.5, add an additional 35% confidence.
- **Bio-Verification:** If the Radar reports a STATIONARY or MOVING target, add 30% confidence.

If the total confidence exceeds 65%, the GUI is instructed to override the telemetry and render the "FALL DETECTED" alert.

## Troubleshooting and Technical Hurdles

**Challenge 1: The Serial "Traffic Jam"**
- **Problem:** The LD2410C radar broadcasts data at 256,000 baud. During testing, I noticed the radar distance on the screen was "lagging" several seconds behind the person’s actual movement. The Pi 5 was receiving data faster than the Python script could parse it, causing a massive buffer backlog.
- **Resolution:** I implemented a Serial Flush Logic. At the start of every parsing cycle, the code calls \`self.ser.reset_input_buffer()\` if the \`in_waiting\` count exceeds 2,000 bytes. This ensures the system only processes the absolute latest frame, restoring real-time performance.

**Challenge 2: The "Ghost" Occupancy Problem**
- **Problem:** The Wi-Fi variance would occasionally spike when a door was closed or a heavy object was moved, nearly triggering a false alarm.
- **Resolution:** I updated the Logic Gate to strictly require the Radar’s "State 2" (Stationary) or "State 1" (Moving) before the confidence could reach the 65% trigger. If the radar reports "State 0" (Empty), the alert is suppressed, proving that the disturbance was non-biological.

## Week 8 Checklist

- [x] Bimodal Fusion: Successfully combined Wi-Fi CSI and mmWave Radar into a singular logic loop.
- [x] Asynchronous Optimisation: Resolved serial latency issues through buffer management and threading.
- [x] GUI Finalisation: Completed the 320x240 telemetry dashboard with real-time variance bars.
- [x] Empirical Validation: Verified that a "chair drop" (high variance/no radar) does not trigger an alert, while a "human fall" (high variance/radar presence) hits 100% confidence.
    `,
    date: '2026-03-23',
    readingTime: '5 min read',
    tags: ['Integration', 'Architecture', 'Python', 'Sensor Fusion', 'System Design'],
    featured: false,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-9-from-breadboard-to-bedside',
    title: 'Week 9: From Breadboard to Bedside ,  The Hardening Phase',
    excerpt: 'Transitioning the A.E.G.I.S. framework from a fragile breadboard sprawl into a ruggedized standalone prototype through rigorous stress-testing and empirical validation.',
    content: `
Week 9 has been an exercise in architectural hardening. In engineering, there is a vast chasm between a system that functions on a laboratory bench and one that survives the chaotic variables of a real-world environment. This week, the A.E.G.I.S. framework transitioned from a fragile sprawl of jumper wires into a ruggedized, standalone prototype, accompanied by a rigorous stress-testing regime designed to break the software before it reaches the demonstration phase.

## 1. The Physical Embodiment: Engineering the Hub

The "Invisible Guardian" now has a physical presence. The transition from a Raspberry Pi 5 breadboard to a final chassis required a deep dive into spatial ergonomics.

**The Radar Aperture Challenge:**
The HLK-LD2410C mmWave radar operates at 24GHz, meaning its "vision" is easily obscured by high-density materials. I spent this week designing a custom mounting bracket that ensures the radar is angled at exactly 15° downward. This ensures that the "Bio-Verification" beam is focused on the floor area, the primary site of a fall, without being obstructed by the Pi 5's active cooling fans or the SPI display wiring.

## 2. The Philosophy of Reliability: "Edge-Case Hunting"

In a BEng dissertation, testing is not merely a box to be ticked; it is the scientific validation of your claims. I have structured this week's evaluation around the concept of "Technical Integrity versus Human Utility."

- **Technical Integrity (Verification):** Does the Python physics engine maintain a consistent 10-FPS throughput?
- **Human Utility (Validation):** Does the "Red Alert" actually provide enough visual contrast to be noticed by a caregiver from 5 metres away?

## 3. The "Chaos Lab": Experimental Results

Rather than simple pass/fail checks, I conducted a series of "Chaos Experiments" to determine the breaking point of the bimodal logic.

| Experiment ID | Scenario | Mathematical Trigger | System Output | Result |
|---|---|---|---|---|
| EXP-01 | The Rapid Descent | σ>10.0 | Red Alert (100% Conf) | SUCCESS |
| EXP-02 | "The 'Ghost' Disturbance" | σ>10.0 (Chair Drop) | Alert Suppressed (Radar: Empty) | SUCCESS |
| EXP-03 | The Floor-Level Breath | σ<2.5 | Radar: Stationary / Blue State | SUCCESS |
| EXP-04 | Thermal Stress Test | 4-Hour Continuous Runtime | CPU Temp stable at 54°C | SUCCESS |

**The "Chair-Drop" Victory:** The most significant result was Experiment 02. By dropping a high-mass object, I successfully triggered a Wi-Fi variance spike that mirrored a human fall. However, because the Master Logic Loop queried the radar and received an "Empty" status, the 100% alert was blocked. This proves that the bimodal fusion successfully solves the "False Positive" problem that plagues single-sensor systems.

## 4. Technical Deep-Dive: Resolving Race Conditions

The most difficult hurdle this week was a Race Condition within the threading model. Occasionally, the Wi-Fi CSI thread would attempt to update the \`current_confidence\` variable at the exact micro-millisecond the Radar thread was reading it, causing a GIL (Global Interpreter Lock) hang.

**The Solution:** I implemented a Thread-Safe Mutex (Mutual Exclusion) Lock. By using Python’s \`threading.Lock()\`, I ensured that only one sensor could write to the confidence engine at a time. This minor code adjustment reduced "stuttering" on the ILI9341 display and ensured a consistent data-refresh rate of ~120ms.

![Week 9 Prototype](/week9.png)

## 5. The Prototype Status Report

- **Chassis Integration:** Successfully mounted the bimodal sensor array into a semi-permanent housing.
- **Logical Validation:** Proved that bimodal sensing effectively ignores non-biological movement.
- **Latency Benchmarking:** Confirmed that the "Impact-to-Alert" delay is consistently under 450ms.
- **Resource Management:** Validated that the Pi 5 handles the 256k baud radar stream without thermal throttling.

**The Week 10 Horizon:** With the physical build complete and the software validated, we move into Performance Evaluation. I will be conducting formal "Living Room Simulations" to calculate Precision and Recall rates, providing the empirical data required for the final chapters of my dissertation.
    `,
    date: '2026-03-30',
    readingTime: '5 min read',
    tags: ['Testing', 'Hardware', 'Hardware Integration', 'Validation', 'Evaluation'],
    featured: true,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-10-proving-the-system-works',
    title: 'Week 10: Proving the System Works ,  Data and Testing',
    excerpt: 'Moving from building the project to measuring exactly how well it works through formal testing, including speed, accuracy, and stress tests.',
    content: `
This week was all about moving from building the project to measuring exactly how well it works. In a BEng project, it isn't enough to say "it works", you have to prove it with real numbers. I spent the week running formal tests to see how A.E.G.I.S. handles different real-world situations.

## 1. The Testing Plan

To make sure my final report is solid, I focused on three main areas:

- **Accuracy:** Does the system catch a fall every time?
- **Speed:** How long does it take from the moment someone hits the floor to the "Red Alert" appearing?
- **False Alarms:** Can the system tell the difference between a person falling and someone just dropping a bag or sitting down quickly?

I performed 100 separate tests to get a clear picture of the system's performance.

## 2. The Results: Wi-Fi vs. The Full System

I compared using just the Wi-Fi sensor against using my "Bimodal" (Wi-Fi + Radar) system. The results showed exactly why the dual-sensor approach is better.

| Measurement | Wi-Fi Sensor Only | A.E.G.I.S. (Dual Sensors) |
|---|---|---|
| Fall Detection Rate | 92% | 96% |
| False Alarms | 18% | 2% |
| Alert Speed | 380ms | 425ms |

**The Takeaway:** Adding the radar makes the system slightly slower (by only 45 milliseconds), but it makes it much more accurate. It almost completely stopped the false alarms that happened when I only used Wi-Fi.

## 3. The 8-Hour Stress Test

A safety system needs to stay on 24/7. To test this, I ran the Raspberry Pi 5 for 8 hours straight while it processed data.

- **Heat:** The CPU temperature stayed around 56°C, which is very safe.
- **Stability:** The software didn't crash or slow down, even after processing thousands of signals. This proves the system is reliable enough for a real home.

## 4. Smoothing Out the Data

During testing, I noticed the Wi-Fi numbers would sometimes "flicker" because signals were bouncing off the walls. To fix this, I added a Moving Average to the code.

Instead of the system reacting to one tiny spike in data, it now looks at the last few frames to make sure the movement is real. This stopped the dashboard from jumping around and made the "Confidence" score much more stable.

![Week 10 Data Smoothing](/week10.png)

## Week 10 Checklist

- [x] Finished Testing: Completed 100 test runs for the final report.
- [x] Proved the Logic: Showed that the Radar successfully stops false alarms.
- [x] Stress Tested: Confirmed the Pi 5 can run all day without overheating.
- [x] Cleaned the Code: Added filters to make the data more accurate.

**What’s Next:** Now that I have all my data, I am moving into Week 11: The Final Write-up. I’ll be spending my time finishing the last chapters of my dissertation and preparing the final hardware for the demonstration.
    `,
    date: '2026-04-06',
    readingTime: '4 min read',
    tags: ['Testing', 'Data', 'Validation', 'Evaluation', 'Results'],
    featured: false,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'week-11-the-synthesis',
    title: 'Week 11: The Synthesis ,  From Prototype to Proven System',
    excerpt: 'Summarising the project achievements, reflecting on the steep learning curve, and polishing the final academic dissertation and viva presentation.',
    content: `
As I reach the final full week of this 12-week project, the "noise" of building and coding has finally settled into the clarity of a finished system. A.E.G.I.S. is no longer a collection of sensors and jumper wires; it is a validated "Invisible Guardian" sitting in its final housing.

This week was dedicated to the big picture: summarising what the project actually achieved, reflecting on the steep learning curve of the past three months, and polishing the final academic documents, the 7,000-word dissertation and the 10-slide presentation.

## Project Outcomes: What A.E.G.I.S. Achieved

The primary goal was to create a fall detection system that doesn't need cameras or wearables. After the intense testing in Weeks 9 and 10, I can officially state that the system is a fully functional bimodal prototype.

**Final System Readiness:**

- **Accuracy:** The system achieved a 96% success rate in distinguishing between actual falls and daily activities (like sitting down or dropping objects).
- **Latency:** The "Wave-Shift" engine responds in less than 450ms, ensuring that an alert is triggered almost instantly upon impact.
- **Stability:** During my 8-hour stress test, the Raspberry Pi 5 handled the high-speed data from both the Wi-Fi and Radar threads without any crashes or thermal throttling.
- **Implementation:** The prototype is ready for a "Pilot Study" in a real living room environment to see how it handles long-term ambient movement.

## Knowledge and Skills Gained

Looking back at Week 1, my growth as an engineer has been massive, both in technical depth and professional mindset.

**Mastering the "Physics of Radio":**
Before this project, I thought Wi-Fi was just for the internet. This journey forced me to view it as a high-precision sensor. I had to master:
- **CSI Processing:** Learning how to extract 64 subcarriers and perform NumPy matrix math in real-time.
- **Sensor Fusion:** Solving the problem of two sensors "disagreeing" and building a weighted logic gate to find the truth.
- **Embedded Optimisation:** Managing serial buffers and CPU cycles on the Pi 5 to ensure the code never "stutters."

**The Engineering Mindset:**
I learned that in engineering, a "bug" is just a data point. When the radar data was lagging in Week 8, I didn't see it as a failure; I saw it as a requirement for a "Buffer Flush" function. I've learned to document every mistake, as those are often the most important parts of the final report.

## Evaluating Impact: The Privacy Victory

A.E.G.I.S. solves the "Privacy vs. Safety" dilemma I identified in my Literature Review.

- **The Dignity Factor:** The system achieved its goal of 100% camera-free operation. This means elderly users can be protected in private areas like bathrooms without feeling watched.
- **Autonomy:** By solving the "Quiet Room" problem with the UDP ping, I ensured the system stays active even when no one is moving.
- **Passive Protection:** Unlike a pendant, the user doesn't have to "do" anything. The system just exists in the background, which is a huge win for user compliance.

## Limitations and Future Upgrades

An honest engineer has to admit where the system can be improved. A.E.G.I.S. is a successful prototype, but it has boundaries.

**Current Limitations:**
- **Single-Room Scope:** The current setup covers one medium-sized room. For a whole house, I would need a mesh network of ESP32 nodes.
- **Large Pet Interference:** Very large dogs might cause enough wave-scattering to confuse the Wi-Fi engine, though the radar's human-height logic helps filter this.
- **Manual Start:** The system still requires me to run a script manually. It isn't yet a "plug-and-play" consumer device.

**Proposed Improvements:**
- **Mesh Expansion:** Integrating multiple ESP32 beacons to cover an entire flat or house.
- **Emergency API:** Using a service like Twilio to automatically send a text message or place a phone call to a caregiver when the "Red Alert" is triggered.
- **Auto-Boot:** Setting up the Python script as a "System Service" so it starts automatically when the Pi 5 is plugged in.

## Report and Presentation Status

**Dissertation Final Polish:**
I am currently in the final stages of the Results and Discussion chapter. I am making sure that every hardware photo I took matches the data in my testing logs. My goal is to make the report read like a professional engineering audit.

**Presentation Prep:**
My 10-minute viva presentation is ready. I’ve structured it to show the Problem (Privacy), the Solution (Wi-Fi + Radar), and the Proof (the 100% confidence captures). I am practicing my demo to make sure I can explain the "Confidence Weighting" clearly to the examiners.

## Final Reflection

This 12-week journey has changed how I look at technology. A.E.G.I.S. proves that with smart "Hardware-Software Co-Design," we can build life-changing tools that respect human privacy.

**Next Week:** The Final Submission. The 12-week marathon is over.
    `,
    date: '2026-04-13',
    readingTime: '5 min read',
    tags: ['Reflection', 'Final', 'Dissertation', 'System Readiness'],
    featured: true,
    category: 'weekly-update',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
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
