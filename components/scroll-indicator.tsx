"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ScrollIndicator({ targetId }: { targetId: string }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
          onClick={scrollToSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-medium mb-2 text-muted-foreground">Discover Benefits</span>
            <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
              <ChevronDown className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
