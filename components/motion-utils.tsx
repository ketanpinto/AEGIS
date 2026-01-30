'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue, useTransform, useInView, Variants, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Magnetic component that follows the cursor subtly
 */
export function Magnetic({ children, strength = 0.5 }: { children: React.ReactNode; strength?: number }) {
    const shouldReduceMotion = useReducedMotion()
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY

        x.set(distanceX * strength)
        y.set(distanceY * strength)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    )
}

/**
 * Reveal component for staggered entry animations
 */
export function Reveal({
    children,
    width = "fit-content",
    delay = 0.2,
    y = 75
}: {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    y?: number;
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}

/**
 * Tilt component for 3D perspective effects on hover
 */
export function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("perspective-1000", className)}
        >
            {children}
        </motion.div>
    )
}

/**
 * GlowWrapper adds a border sweep and hover glow to cards
 */
export function GlowWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn("relative group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:bg-white/[0.05]", className)}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    )
}

/**
 * TextReveal component for word-by-word reveal
 */
export function TextReveal({
    text,
    className = "",
    initialDelay = 0,
    animateGradient = false
}: {
    text: string;
    className?: string;
    initialDelay?: number;
    animateGradient?: boolean;
}) {
    const words = text.split(" ")

    return (
        <motion.div
            className={cn("flex flex-wrap", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: initialDelay + index * 0.05,
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }}
                    key={index}
                    className={cn(
                        "inline-block mr-[0.25em]",
                        animateGradient && "bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-flow"
                    )}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}

/**
 * InteractiveGlow component for mouse-following background and click effects
 */
export function InteractiveGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

    // Spring physics for smooth following
    const springX = useSpring(mouseX, { damping: 20, stiffness: 100 })
    const springY = useSpring(mouseY, { damping: 20, stiffness: 100 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleClick = (e: MouseEvent) => {
            const id = Date.now()
            setRipples(prev => [...prev, { id, x: e.clientX, y: e.clientY }])
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== id))
            }, 1000)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("click", handleClick)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("click", handleClick)
        }
    }, [mouseX, mouseY])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
            {/* Smooth Following Glow */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute top-0 left-0 w-[300px] h-[300px] opacity-30 blur-[80px] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)]"
            />

            {/* Click "Blow" Effect */}
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    initial={{
                        x: ripple.x,
                        y: ripple.y,
                        scale: 0.5,
                        opacity: 0.8,
                        translateX: "-50%",
                        translateY: "-50%",
                        filter: "blur(15px)"
                    }}
                    animate={{
                        scale: 6,
                        opacity: 0,
                        filter: "blur(60px)"
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary/20 pointer-events-none"
                />
            ))}
        </div>
    )
}

/**
 * AnimatedGradientText as a controlled wrapper
 */
export function AnimatedGradientText({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string
}) {
    return (
        <motion.div
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
            className={cn(
                "w-fit bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] font-bold",
                className
            )}
        >
            {children}
        </motion.div>
    )
}
