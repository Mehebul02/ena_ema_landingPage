"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-[#0f3d2a] to-[#0a2f1f] border border-green-800/30 rounded-2xl p-8"
            >
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
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-80 object-cover" />
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
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Butto className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-xl transition-colors">
            I want similar results →
          </Butto>
        </div>
      </div>
    </section>
  )
}
