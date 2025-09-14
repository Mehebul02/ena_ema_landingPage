"use client"

import type React from "react"
import * as Label from "@radix-ui/react-label"
import * as Separator from "@radix-ui/react-separator"

import { TrustBadge } from "./Trust_Badge"
import Image from "next/image"
import { logo } from "@/assets"
import Container from "../Container"

// Import icons

import FormSection from "./FormSection"
import { Lock } from "lucide-react"

export default function BannerSection() {





  return (
    <div className="relative min-h-[1289px] w-full bg-[#151E1B] text-white font-manrope p-2 overflow-hidden">
      {/* Ellipse background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[816px] h-[252px] bg-[#1FFFA5] opacity-20 blur-[351px] rounded-full" />

      {/* Main Content */}
      <Container className={"relative z-10"}>
        <div className="relative z-10">
          {/* Header */}
          <header className="flex justify-center pt-14 pb-32">
            <Image src={logo} alt="logo" width={200} height={200} />
          </header>

          {/* Trust Badge */}
          <TrustBadge />

          {/* Hero Headline */}
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-[36px] md:text-7xl font-bold leading-tight mb-2">
              Strategic Landing Pages That <br />
              Convert From Just <span className="text-[#00ff88]">$200</span>
            </h2>

            {/* Value Proposition Box */}
            <div className="p-6 mb-12 max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed font-manrope">
                Stop wasting traffic on generic pages. We deliver premium,
                conversion-focused landing pages designed, developed, and
                launched in <span className="font-bold">just 5 days</span>.
              </p>
            </div>

            {/* Form */}
           <FormSection/>

            <Separator.Root className="bg-gray-600 h-px w-full max-w-md mx-auto my-8" />

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mt-12 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span><Lock /></span>
                <span>SSL secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Money-back guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
