"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@radix-ui/themes"


const caseStudies = [
  {
    id: 1,
    title: "Restaurant Booking",
    subtitle: "We Plan, You Shine",
    description: "Quick event booking",
    image: "/restaurant-booking-website-with-orange-button.jpg",
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 2,
    title: "Flowpilot",
    subtitle: "Instant team clarity, Without the noise",
    description: "Analytics dashboard with charts and team management",
    image: "/analytics-dashboard-with-charts-and-team-managemen.jpg",
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
  {
    id: 3,
    title: "GrowthSummit",
    subtitle: "Learn What Works in 2025 - From Those Making It Happen",
    description: "Event management and conference platform",
    image: "/purple-conference-event-website-with-speakers-and-.jpg",
    metrics: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"],
  },
]

export default function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-[#0a2f1f] py-20 px-4 relative overflow-hidden">
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
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="grid gri transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0f3d2a] to-[#0a2f1f] border border-green-800/30 rounded-2xl p-8 mx-4">
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
                        <img
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
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
                    <div className="space-y-3 mb-8">
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-green-500" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-xl transition-colors">
            I want similar results →
          </Button>
        </div>
      </div>
    </section>
  )
}
