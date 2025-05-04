"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Executive",
    content:
      "Working with Javeria transformed my approach to leadership. Her coaching helped me overcome imposter syndrome and develop the confidence to lead my team effectively.",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    content:
      "Javeria's mindset coaching was exactly what I needed to push through the challenges of starting my business. Her practical strategies for managing stress and maintaining focus have been invaluable.",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Healthcare Professional",
    content:
      "After feeling burnt out for years, Javeria helped me rediscover my passion for my work and develop healthy boundaries. I now have tools to manage stress and prevent burnout in the future.",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PP",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-none shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-teal-500/20 mb-6" />
                <p className="text-lg md:text-xl italic mb-6 max-w-2xl">"{testimonial.content}"</p>
                <Avatar className="h-12 w-12 border-2 border-teal-100">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="mt-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-teal-500" : "bg-muted-foreground/20"
            }`}
            onClick={() => {
              setIsAnimating(true)
              setActiveIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full opacity-70 hover:opacity-100 hidden md:flex"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full opacity-70 hover:opacity-100 hidden md:flex"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}
