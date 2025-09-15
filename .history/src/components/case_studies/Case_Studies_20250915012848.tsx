"use client"

import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { macBook1, macBook2, macBook3, macBook4, macBook5, macBook6 } from "@/assets"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "Restaurant Booking",
    subtitle: "We Plan, You Shine",
    description: "Quick event booking",
    image: macBook1,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 2,
    title: "Flowpilot",
    subtitle: "Instant team clarity, Without the noise",
    description: "Analytics dashboard with charts and team management",
    image: macBook2,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 3,
    title: "GrowthSummit",
    subtitle: "Learn What Works in 2025 - From Those Making It Happen",
    description: "Event management and conference platform",
    image: macBook3,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 4,
    title: "GrowthSummit",
    subtitle: "Learn What Works in 2025 - From Those Making It Happen",
    description: "Event management and conference platform",
    image: macBook4,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 5,
    title: "GrowthSummit",
    subtitle: "Learn What Works in 2025 - From Those Making It Happen",
    description: "Event management and conference platform",
    image: macBook5,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 6,
    title: "GrowthSummit",
    subtitle: "Learn What Works in 2025 - From Those Making It Happen",
    description: "Event management and conference platform",
    image: macBook6,
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
]

export default function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const maxSlides = Math.max(0, caseStudies.length - 1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // Loop back to start when reaching the end
        if (prev >= maxSlides) {
          return 0
        }
        return prev + 1
      })
    }, 4000) // Auto-advance every 4 seconds

    return () => clearInterval(interval)
  }, [maxSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="bg-[#0A0F0D] py-20 px-4 relative overflow-hidden font-manrope">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-300 text-lg">See the designs that delivered results</p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-16">
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-1/2 flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#0f3d2a] to-[#0a2f1f] border border-green-800/30 rounded-2xl p-8">
                    {/* Laptop Mockup */}
                    <div className="relative mb-8">
                      <div className="bg-gray-800 rounded-t-xl p-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="bg-gray-700 rounded h-6 flex items-center px-3">
                          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                          <div className="bg-gray-600 rounded h-3 flex-1"></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-b-xl overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={600}
                          height={}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300">{study.subtitle}</p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-green-500 rounded-full p-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-full p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-green-400" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlides}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-full p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-green-400" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-green-500" : "bg-green-500/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-xl transition-colors">
            I want similar results →
          </button>
        </div>
      </div>
    </section>
  )
}
