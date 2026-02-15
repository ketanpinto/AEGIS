'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function CinematicVideo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const isInView = useInView(containerRef, { amount: 0.5 })
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [progress, setProgress] = useState(0)
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

    const handleInteraction = useCallback(() => {
        setShowControls(true)
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current)
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false)
            }
        }, 2000)
    }, [isPlaying])

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime
            const total = videoRef.current.duration
            if (total) {
                setProgress((current / total) * 100)
            }
        }
    }

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seekValue = parseFloat(e.target.value)
        if (videoRef.current) {
            const seekTime = (seekValue / 100) * videoRef.current.duration
            videoRef.current.currentTime = seekTime
            setProgress(seekValue)
            handleInteraction()
        }
    }

    useEffect(() => {
        if (!videoRef.current) return

        if (isInView) {
            const playPromise = videoRef.current.play()
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented
                    // Fallback to muted play
                    if (videoRef.current) {
                        videoRef.current.muted = true
                        setIsMuted(true)
                        videoRef.current.play().catch((e) => {
                            console.error("Autoplay missed", e)
                        })
                    }
                })
            }
        } else {
            videoRef.current.pause()
        }
    }, [isInView])

    useEffect(() => {
        const handleScroll = () => {
            // Only interact on scroll if playing/viewable to avoid excessive updates
            if (isInView) {
                handleInteraction()
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isInView, handleInteraction])

    // Initial hide timer if playing
    useEffect(() => {
        if (isPlaying) {
            handleInteraction()
        } else {
            setShowControls(true)
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
        }
    }, [isPlaying, handleInteraction])


    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
            handleInteraction()
        }
    }

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
            handleInteraction()
        }
    }

    return (
        <section ref={containerRef} className="py-24 bg-black overflow-hidden group">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-left ml-4 md:ml-18">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        AEGIS: Demo Trailer
                    </motion.h2>
                </div>

                <motion.div
                    style={{ scale, opacity }}
                    className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    onMouseMove={handleInteraction}
                    onMouseLeave={() => {
                        if (isPlaying) setShowControls(false)
                    }}
                >
                    <video
                        ref={videoRef}
                        src="/trailer.mp4"
                        className="w-full h-full object-cover"
                        muted={isMuted}
                        loop
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onTimeUpdate={handleTimeUpdate}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Controls Overlay */}
                    <AnimatePresence>
                        {showControls && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-20 pointer-events-none bg-black/20 backdrop-blur-[2px]"
                            >
                                {/* Center Play/Pause & Mute */}
                                <div className="absolute inset-0 flex items-center justify-center gap-8 pointer-events-none">
                                    <button
                                        onClick={togglePlay}
                                        className="pointer-events-auto p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20 text-white group-hover:scale-110 active:scale-95"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? <Pause className="w-8 h-8 md:w-10 md:h-10 fill-current" /> : <Play className="w-8 h-8 md:w-10 md:h-10 fill-current pl-1" />}
                                    </button>
                                    <button
                                        onClick={toggleMute}
                                        className="pointer-events-auto p-4 md:p-6 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20 text-white group-hover:scale-110 active:scale-95"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                    >
                                        {isMuted ? <VolumeX className="w-8 h-8 md:w-10 md:h-10" /> : <Volume2 className="w-8 h-8 md:w-10 md:h-10" />}
                                    </button>
                                </div>

                                {/* Seek Slider at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        value={progress}
                                        onChange={handleSeek}
                                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer outline-none focus:outline-none transition-all
                                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                                        [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                                        [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none"
                                        aria-label="Video progress"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
