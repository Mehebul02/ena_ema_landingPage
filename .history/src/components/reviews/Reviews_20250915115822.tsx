"use client"

import { useState, useEffect, useRef } from "react"
import * as Avatar from "@radix-ui/react-avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "SaaS Founder",
    avatar: "/professional-woman-diverse.png",
    content:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Fitness Coach",
    avatar: "/fitness-coach-man.jpg",
    content:
      "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "E-Commerce Owner",
    avatar: "/confident-business-woman.png",
    content: "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Lee",
    role: "SaaS Founder",
    avatar: "/tech-entrepreneur.png",
    content:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    rating: 5,
  },
  {
    id: 5,
    name: "David Lee",
    role: "SaaS Founder",
    avatar: "/tech-entrepreneur.png",
    content:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    role: "SaaS Founder",
    avatar: "/tech-entrepreneur.png",
    content:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    rating: 5,
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    console.log("[v0] Auto-playing:", isAutoPlaying, "Paused:", isPaused, "Current index:", currentIndex)

    if (!isAutoPlaying || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      console.log("[v0] Auto-advancing slider")
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % testimonials.length
        console.log("[v0] Moving from", prev, "to", newIndex)
        return newIndex
      })
    }, 3500)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlaying, isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 8 seconds instead of 10
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section
      className="w-full bg-slate-900 py-16 px-4 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        {/* Desktop View - Show all testimonials */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
          {testimonials.slice(0, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors"
            >
              {/* Stars */}
              <div className="pb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="pb-4">
                <blockquote className="text-slate-200 text-sm leading-relaxed">"{testimonial.content}"</blockquote>
              </div>

              {/* Author */}
              <div className="pt-0">
                <div className="flex items-center gap-3">
                  <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-slate-700">
                    <Avatar.Image
                      className="h-full w-full rounded-[inherit] object-cover"
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                    />
                    <Avatar.Fallback className="text-slate-200 leading-1 flex h-full w-full items-center justify-center bg-slate-700 text-sm font-medium">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Enhanced Slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mx-auto max-w-md hover:bg-slate-750 transition-colors">
                    {/* Stars */}
                    <div className="pb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-4">
                      <blockquote className="text-slate-200 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="pt-0">
                      <div className="flex items-center gap-3">
                        <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-slate-700">
                          <Avatar.Image
                            className="h-full w-full rounded-[inherit] object-cover"
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                          <Avatar.Fallback className="text-slate-200 leading-1 flex h-full w-full items-center justify-center bg-slate-700 text-sm font-medium">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar.Fallback>
                        </Avatar.Root>
                        <div>
                          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                          <div className="text-slate-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-500 scale-110" : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && isAutoPlaying && !isPaused && (
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-105"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <div
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                isAutoPlaying && !isPaused ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"
              }`}
            >
              {isAutoPlaying && !isPaused ? "Auto-playing" : "Paused"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
