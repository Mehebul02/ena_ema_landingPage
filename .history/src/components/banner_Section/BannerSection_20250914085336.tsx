"use client"

import type React from "react"
import * as Label from "@radix-ui/react-label"
import * as Separator from "@radix-ui/react-separator"

import { useState } from "react"
import { Button } from "@radix-ui/themes"
import { TrustBadge } from "./Trust_Badge"
import Image from "next/image"
import { logo } from "@/assets"
import Container from "../Container"

// Import icons
import { User, Mail, Phone } from "lucide-react"

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
    <div className="relative min-h-[1289px] w-full bg-[#151E1B] text-white font-manrope p-2 overflow-hidden">
      {/* Ellipse background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[816px] h-[252px] bg-[#1FFFA5] opacity-20 blur-[351px] rounded-full" />

      {/* Main Content */}
      <Container>
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
            <div className="max-w-2xl mx-auto border border-[#151E1B] rounded-lg shadow-xl shadow-[#1FFFA5] p-8 ">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Name */}
                  <div>
                    <Label.Root htmlFor="name" className="sr-only">
                      Your Name
                    </Label.Root>
                    <div className="flex items-center bg-[#0f2f22] border border-[#2a5a47] rounded-md h-12 px-3">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="bg-transparent text-white placeholder:text-gray-400 w-full outline-none"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label.Root htmlFor="email" className="sr-only">
                      Email Address
                    </Label.Root>
                    <div className="flex items-center bg-[#0f2f22] border border-[#2a5a47] rounded-md h-12 px-3">
                      <Mail className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="email"
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="bg-transparent text-white placeholder:text-gray-400 w-full outline-none"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label.Root htmlFor="phone" className="sr-only">
                      Phone Number
                    </Label.Root>
                    <div className="flex items-center bg-[#0f2f22] border border-[#2a5a47] rounded-md h-12 px-3">
                      <Phone className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="phone"
                        placeholder="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="bg-transparent text-white placeholder:text-gray-400 w-full outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
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
      </Container>
    </div>
  )
}
