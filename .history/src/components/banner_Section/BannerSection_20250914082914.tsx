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
     <Container>

        Container
     </Container>
    </div>
  )
}