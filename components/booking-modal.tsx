"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingModal({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [service, setService] = useState<string>("")

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    alert("Booking request submitted! We'll be in touch soon.")
    setStep(1)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book a Coaching Session</DialogTitle>
          <DialogDescription>Schedule your free consultation or coaching session with Javeria.</DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <RadioGroup value={service} onValueChange={setService} className="grid gap-3">
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="consultation" id="consultation" />
                  <Label htmlFor="consultation" className="flex flex-col">
                    <span>Free Consultation</span>
                    <span className="text-sm font-normal text-muted-foreground">30 minutes</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="personal-growth" id="personal-growth" />
                  <Label htmlFor="personal-growth" className="flex flex-col">
                    <span>Personal Growth Session</span>
                    <span className="text-sm font-normal text-muted-foreground">60 minutes</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="career" id="career" />
                  <Label htmlFor="career" className="flex flex-col">
                    <span>Career Coaching Session</span>
                    <span className="text-sm font-normal text-muted-foreground">60 minutes</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="stress" id="stress" />
                  <Label htmlFor="stress" className="flex flex-col">
                    <span>Stress Management Session</span>
                    <span className="text-sm font-normal text-muted-foreground">60 minutes</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button onClick={handleNext} disabled={!service}>
                Next
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Select Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Select Time
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className="flex justify-between sm:justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={!date || !time}>
                Next
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What would you like to discuss?</Label>
              <Textarea id="message" rows={3} />
            </div>
            <DialogFooter className="flex justify-between sm:justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button type="submit">Book Session</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
