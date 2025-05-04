"use client"

import { useEffect, useState } from "react"

interface AutoScrollProps {
  sections: string[]
  threshold?: number
  delay?: number
}

export default function AutoScroll({ sections, threshold = 0.8, delay = 1000 }: AutoScrollProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [userScrolled, setUserScrolled] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let observer: IntersectionObserver

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrolling) {
          const index = sections.findIndex((id) => id === entry.target.id)
          if (index !== -1) {
            setActiveSection(index)
          }
        }
      })
    }

    observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin: "0px",
    })

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      if (!userScrolled) {
        setUserScrolled(true)
        // Reset after 3 seconds of no scrolling
        clearTimeout(timeout)
        timeout = setTimeout(() => setUserScrolled(false), 3000)
      }
    }

    window.addEventListener("wheel", handleScroll)
    window.addEventListener("touchmove", handleScroll)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("touchmove", handleScroll)
    }
  }, [sections, threshold, isScrolling])

  useEffect(() => {
    if (userScrolled) return

    const timer = setTimeout(() => {
      const nextSection = (activeSection + 1) % sections.length
      const element = document.getElementById(sections[nextSection])

      if (element) {
        setIsScrolling(true)
        element.scrollIntoView({ behavior: "smooth" })

        setTimeout(() => {
          setActiveSection(nextSection)
          setIsScrolling(false)
        }, 1000)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [activeSection, sections, delay, userScrolled])

  return null
}
