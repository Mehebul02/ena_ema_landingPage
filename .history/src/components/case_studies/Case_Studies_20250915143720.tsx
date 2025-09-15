"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { macBook1, macBook2, macBook3, macBook4, macBook5, macBook6 } from "@/assets"
import Card from "./Card"

const caseStudies = [
    {
        id: 1,
        title: "Restaurant Booking",
        subtitle: "We Plan, You Shine",
        description: "Quick event booking",
        image: macBook1,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
    {
        id: 2,
        title: "Flowpilot",
        subtitle: "Instant team clarity, Without the noise",
        description: "Analytics dashboard with charts and team management",
        image: macBook2,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
    {
        id: 3,
        title: "GrowthSummit",
        subtitle: "Learn What Works in 2025",
        description: "Event management and conference platform",
        image: macBook3,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
    {
        id: 4,
        title: "GrowthSummit",
        subtitle: "Learn What Works in 2025",
        description: "Event management and conference platform",
        image: macBook4,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
    {
        id: 5,
        title: "GrowthSummit",
        subtitle: "Learn What Works in 2025",
        description: "Event management and conference platform",
        image: macBook5,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
    {
        id: 6,
        title: "GrowthSummit",
        subtitle: "Learn What Works in 2025",
        description: "Event management and conference platform",
        image: macBook6,
        metrics: ["20% higher conversion in first week", "Clean and modern design with clear CTA"],
    },
]

export default function CaseStudiesSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(2) // 2 cards per slide default

    // Responsive handling
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1) // mobile
            } else {
                setSlidesPerView(2) // desktop
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const maxSlides = Math.ceil(caseStudies.length / slidesPerView) - 1

    // Auto slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
        }, 4000)
        return () => clearInterval(interval)
    }, [maxSlides])

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlides))
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0))

    return (
        <section className="bg-[#0A0F0D] py-14 px-4 relative overflow-hidden font-manrope">
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
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100)}%)` }}
                        >
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className={`flex-shrink-0 px-4 ${slidesPerView === 2 ? 'w-1/2' : 'w-full'}`}
                                >
                                    <Card study={study} />
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
                                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-green-500" : "bg-green-500/30"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="button px-10 cursor-pointer bg-[#00ff88] hover:bg-[#00e67a] text-black font-semibold h-14 text-lg rounded-lg">
                        I want similar results →
                    </button>
                </div>
            </div>
        </section>
    )
}
