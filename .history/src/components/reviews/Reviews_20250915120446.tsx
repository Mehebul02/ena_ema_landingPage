"use client"

import { useState, useEffect, useRef } from "react"
import * as Avatar from "@radix-ui/react-avatar"
import { Star } from "lucide-react"

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "SaaS Founder", avatar: "/professional-woman-diverse.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
  { id: 2, name: "Mike Chen", role: "Fitness Coach", avatar: "/fitness-coach-man.jpg",
    content:"Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.", rating: 5 },
  { id: 3, name: "Amanda Rodriguez", role: "E-Commerce Owner", avatar: "/confident-business-woman.png",
    content:"Best investment for my business. The ROI was immediate and substantial. Will definitely order again.", rating: 5 },
  { id: 4, name: "David Lee", role: "SaaS Founder", avatar: "/tech-entrepreneur.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
  { id: 5, name: "David Lee", role: "SaaS Founder", avatar: "/tech-entrepreneur.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
  { id: 6, name: "David Lee", role: "SaaS Founder", avatar: "/tech-entrepreneur.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
  { id: 7, name: "David Lee", role: "SaaS Founder", avatar: "/tech-entrepreneur.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
  { id: 8, name: "David Lee", role: "SaaS Founder", avatar: "/tech-entrepreneur.png",
    content:"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!", rating: 5 },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // --- Auto play effect ---
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length)
      }, 3000) // 3s interval
    }

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused])

  const goToSlide = (index: number) => setCurrentIndex(index)
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      className="w-full bg-slate-900 py-16 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
          {testimonials.slice(0, 4).map(t => (
            <div key={t.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors">
              <div className="pb-4 flex gap-1">{[...Array(t.rating)].map((_,i)=><Star key={i} className="w-4 h-4 fill-green-500 text-green-500"/>)}</div>
              <blockquote className="text-slate-200 text-sm leading-relaxed pb-4">"{t.content}"</blockquote>
              <div className="flex items-center gap-3">
                <Avatar.Root className="inline-flex h-10 w-10 overflow-hidden rounded-full bg-slate-700">
                  <Avatar.Image className="h-full w-full object-cover" src={t.avatar} alt={t.name}/>
                  <Avatar.Fallback className="text-slate-200 flex h-full w-full items-center justify-center text-sm font-medium">
                    {t.name.split(" ").map(n=>n[0]).join("")}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(t => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mx-auto max-w-md hover:bg-slate-750 transition-colors">
                    <div className="pb-4 flex gap-1">{[...Array(t.rating)].map((_,i)=><Star key={i} className="w-4 h-4 fill-green-500 text-green-500"/>)}</div>
                    <blockquote className="text-slate-200 text-sm leading-relaxed pb-4">"{t.content}"</blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar.Root className="inline-flex h-10 w-10 overflow-hidden rounded-full bg-slate-700">
                        <Avatar.Image className="h-full w-full object-cover" src={t.avatar} alt={t.name}/>
                        <Avatar.Fallback className="text-slate-200 flex h-full w-full items-center justify-center text-sm font-medium">
                          {t.name.split(" ").map(n=>n[0]).join("")}
                        </Avatar.Fallback>
                      </Avatar.Root>
                      <div>
                        <div className="font-semibold text-white text-sm">{t.name}</div>
                        <div className="text-slate-400 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-500 scale-110" : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
