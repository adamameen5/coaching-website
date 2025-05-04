"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3])
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.2])
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.1])
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-teal-200/20 dark:bg-teal-900/10"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-emerald-200/20 dark:bg-emerald-900/10"
      />
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-teal-200/20 dark:bg-teal-900/10"
      />
    </div>
  )
}
