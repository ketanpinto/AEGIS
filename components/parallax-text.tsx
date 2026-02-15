'use client'

import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from 'framer-motion'

interface ParallaxProps {
    children: string
    baseVelocity: number
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    /**
     * This is a magic number to determine how much the text should offset relative
     * to the viewport.
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what causes the velocity of the scroll to influence the
         * velocity of the animation
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    /**
     * The number of times to repeat the child text should be enough to fill the viewport
     * width and allow for scrolling.
     */
    return (
        <div className="parallax flex whitespace-nowrap flex-nowrap overflow-hidden leading-[0.8] m-0 py-8 lg:py-16 select-none opacity-5">
            <motion.div className="flex whitespace-nowrap flex-nowrap uppercase text-6xl sm:text-8xl lg:text-[12rem] font-bold tracking-tighter" style={{ x }}>
                <span className="mr-12 lg:mr-24">{children} </span>
                <span className="mr-12 lg:mr-24">{children} </span>
                <span className="mr-12 lg:mr-24">{children} </span>
                <span className="mr-12 lg:mr-24">{children} </span>
            </motion.div>
        </div>
    )
}
