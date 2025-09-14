"use client"

import type React from "react"
import * as Label from "@radix-ui/react-label"
import * as Separator from "@radix-ui/react-separator"

import { useState } from "react"
import { Button } from "@radix-ui/themes"
import { TrustBadge } from "./Trust_Badge"
import Image from "next/image"
import { logo } from "@/assets"


export default function BannerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: formData.name ? "" : "Please enter your name",
      email: formData.email
        ? formData.email.includes("@")
          ? ""
          : "Please enter a valid email"
        : "Please enter your email",
      phone: formData.phone ? "" : "Please enter your phone number",
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      console.log("Form submitted:", formData)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[linear-gradient(135deg,#0b2d1a_0%,#05110b_100%)] text-white font-manrope p-2">
      {/* Header */}
      <header className="flex justify-center pt-8 pb-8">
        <Image src={logo} alt="logo" width={200} height={200} />
      </header>

      {/* Trust Badge */}
     <TrustBadge/>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Hero Headline */}
        <h2 className="text-[36px] md:text-7xl font-bold leading-tight mb-2">
          Strategic Landing Pages That <br />
          Convert From Just <span className="text-[#00ff88]">$200</span>
        </h2>

        {/* Value Proposition Box */}
        <div className=" p-6 mb-12 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed font-manrope">
            Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed,
            developed, and launched in <span className="font-bold">just 5 days</span>.
          </p>
        </div>

        <div className="max-w-2xl mx-auto border border-[#151E1B] rounded-md shadow-amber-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label.Root htmlFor="name" className="sr-only">
                  Your Name
                </Label.Root>
                <input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-[#0f2f22] border-[#2a5a47] text-white placeholder:text-gray-400 h-12"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label.Root htmlFor="email" className="sr-only">
                  Email Address
                </Label.Root>
                <input
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-[#0f2f22] border-[#2a5a47] text-white placeholder:text-gray-400 h-12"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label.Root htmlFor="phone" className="sr-only">
                  Phone Number
                </Label.Root>
                <input
                  id="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-[#0f2f22] border-[#2a5a47] text-white placeholder:text-gray-400 h-12"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <Button
              type="submit"
              className="button w-full bg-[#00ff88] hover:bg-[#00e67a] text-black font-semibold h-14 text-lg rounded-lg"
            >
              Get my high-converting landing page
              <span className="ml-2">→</span>
            </Button>
          </form>
        </div>

        <Separator.Root className="bg-gray-600 h-px w-full max-w-md mx-auto my-8" />

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-8 mt-12 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span>🔒</span>
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
  )
}