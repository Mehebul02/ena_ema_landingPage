import React from 'react';

const FormSection = () => {

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
         <div className="max-w-2xl mx-auto bg-[#151E1B] border border-[#2A3C36] rounded-lg shadow-[0px_12px_32px_0px_rgba(31,255,165,0.35)] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Name */}
                  <div>
                    <Label.Root htmlFor="name" className="sr-only">
                      Your Name
                    </Label.Root>
                    <div className="flex items-center bg-[#0f2f22] border border-[#2a5a47] rounded-md h-12 px-3">
                      <User className="w-5 h-5 text-[#1FFFA5] mr-2 " />
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
                      <Mail className="w-5 h-5 text-[#1FFFA5] mr-2" />
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
                      <Phone className="w-5 h-5 text-[#1FFFA5] mr-2" />
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
                  className="button w-full cursor-pointer bg-[#00ff88] hover:bg-[#00e67a] text-black font-semibold h-14 text-lg rounded-lg"
                >
                  Get my high-converting landing page
                  <span className="ml-2">→</span>
                </Button>
              </form>
            </div>
    );
};

export default FormSection;