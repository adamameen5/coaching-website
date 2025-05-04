"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import BookingModal from "@/components/booking-modal"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import ScrollIndicator from "@/components/scroll-indicator"
import AutoScroll from "@/components/auto-scroll"
import ParallaxBackground from "@/components/parallax-background"
import AnimatedCounter from "@/components/animated-counter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold">
            Javeria Awan
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <BookingModal>
              <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                <Calendar className="h-4 w-4" />
                Book a Session
              </Button>
            </BookingModal>
            <Button size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-background">
          <ParallaxBackground />
          <div className="container px-4 md:px-6 relative">
            {/* Circular Benefits */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {[
                {
                  text: "Overcome Limiting Beliefs",
                  color: "from-teal-400 to-teal-500",
                  delay: 0.2,
                  stat: { value: 94, suffix: "%", description: "Success Rate" },
                },
                {
                  text: "Build Resilience",
                  color: "from-emerald-400 to-emerald-500",
                  delay: 0.4,
                  stat: { value: 3, suffix: "x", description: "Stress Reduction" },
                },
                {
                  text: "Achieve Your Goals",
                  color: "from-teal-500 to-emerald-400",
                  delay: 0.6,
                  stat: { value: 89, suffix: "%", description: "Goal Achievement" },
                },
                {
                  text: "Reduce Stress",
                  color: "from-emerald-500 to-teal-400",
                  delay: 0.8,
                  stat: { value: 78, suffix: "%", description: "Anxiety Decrease" },
                },
                {
                  text: "Improve Focus",
                  color: "from-teal-400 to-emerald-300",
                  delay: 1.0,
                  stat: { value: 40, suffix: "%", description: "Productivity Boost" },
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="absolute hidden md:block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: benefit.delay, duration: 0.5 }}
                  style={{
                    left: `${30 + Math.sin(index * ((Math.PI * 2) / 5)) * 25}%`,
                    top: `${30 + Math.cos(index * ((Math.PI * 2) / 5)) * 25}%`,
                  }}
                >
                  <div
                    className={`h-24 w-24 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center p-1 shadow-lg`}
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-full h-full w-full flex flex-col items-center justify-center p-1">
                      <div className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        <AnimatedCounter end={benefit.stat.value} suffix={benefit.stat.suffix} />
                      </div>
                      <p className="text-[10px] text-muted-foreground mb-1">{benefit.stat.description}</p>
                      <p className="text-[9px] font-medium text-center leading-tight">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Mindset, Transform Your Life
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Personalized mindset coaching to help you overcome obstacles, build resilience, and achieve your full
                  potential.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <BookingModal>
                    <Button size="lg" className="gap-2">
                      Book Your Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mx-auto lg:mr-0 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur-[64px] opacity-20" />
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Javeria Awan, Mindset Coach"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-white shadow-xl"
                  width={400}
                  height={400}
                />
              </motion.div>
            </div>
            {/* Mobile Benefits */}
            <div className="md:hidden mt-8">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    text: "Overcome Limiting Beliefs",
                    color: "from-teal-400 to-teal-500",
                    delay: 0.2,
                    stat: { value: 94, suffix: "%", description: "Success Rate" },
                  },
                  {
                    text: "Build Resilience",
                    color: "from-emerald-400 to-emerald-500",
                    delay: 0.4,
                    stat: { value: 3, suffix: "x", description: "Stress Reduction" },
                  },
                  {
                    text: "Achieve Your Goals",
                    color: "from-teal-500 to-emerald-400",
                    delay: 0.6,
                    stat: { value: 89, suffix: "%", description: "Goal Achievement" },
                  },
                  {
                    text: "Reduce Stress",
                    color: "from-emerald-500 to-teal-400",
                    delay: 0.8,
                    stat: { value: 78, suffix: "%", description: "Anxiety Decrease" },
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: benefit.delay * 0.5, duration: 0.5 }}
                  >
                    <div
                      className={`rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center p-1 shadow-md`}
                    >
                      <div className="bg-white dark:bg-slate-900 rounded-lg h-full w-full flex flex-col items-center justify-center p-3">
                        <div className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          <AnimatedCounter end={benefit.stat.value} suffix={benefit.stat.suffix} />
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{benefit.stat.description}</p>
                        <p className="text-xs font-medium text-center">{benefit.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <ScrollIndicator targetId="about" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-20 invisible"
            onViewportEnter={() => {
              // Wait a moment then scroll to the about section
              setTimeout(() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }, 500)
            }}
          />
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm">
                  About Javeria
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Your Guide to Mental Clarity & Growth
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  With over a decade of experience in mindset coaching, I help individuals break through limiting
                  beliefs and develop the mental resilience needed to thrive in today's challenging world.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  My approach combines evidence-based techniques with personalized strategies tailored to your unique
                  challenges and goals.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                    <span className="font-medium">Certified Life Coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                    <span className="font-medium">NLP Practitioner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-500" />
                    <span className="font-medium">Mindfulness Expert</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-teal-500">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Clients Coached</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-teal-500">10+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-teal-500">98%</div>
                    <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-teal-500">5</div>
                    <div className="text-sm text-muted-foreground mt-1">Coaching Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm">
                My Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tailored Coaching Programs
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover the perfect coaching program to help you overcome challenges and achieve your goals.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <AnimatedSection delay={0.3} distance={30}>
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <Star className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold">Personal Growth</h3>
                    <p className="mt-2 text-muted-foreground">
                      Overcome limiting beliefs and develop a growth mindset to achieve your personal goals.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">8-week personalized program</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Weekly 1:1 coaching sessions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Custom growth plan</span>
                      </li>
                    </ul>
                    <Button className="mt-6 w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.5} distance={30}>
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-10" />
                  <CardContent className="p-6 relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <Star className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                    <h3 className="text-xl font-bold">Career Transformation</h3>
                    <p className="mt-2 text-muted-foreground">
                      Navigate career transitions and develop leadership skills to excel professionally.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">12-week intensive program</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Bi-weekly coaching sessions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Career strategy blueprint</span>
                      </li>
                    </ul>
                    <Button className="mt-6 w-full">Learn More</Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.7} distance={30}>
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <Star className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold">Stress Management</h3>
                    <p className="mt-2 text-muted-foreground">
                      Learn practical techniques to manage stress and build resilience in daily life.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">6-week focused program</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Weekly coaching sessions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="text-sm">Daily mindfulness practices</span>
                      </li>
                    </ul>
                    <Button className="mt-6 w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm">
                Client Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What My Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Read about the transformative experiences of those who have worked with me.
              </p>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <TestimonialCarousel />
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Your Transformation Today</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Have questions or ready to begin? Reach out to schedule your free consultation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-teal-500" />
                    <span>hello@javeriaawan.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-teal-500" />
                    <span>Available Monday-Friday, 9am-5pm</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell me about your goals and challenges"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AutoScroll sections={["about", "services", "testimonials", "contact"]} delay={5000} />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Javeria Awan. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
