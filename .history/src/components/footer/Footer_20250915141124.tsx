import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-[#00ff9f] px-6 py-4 mt-14">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>

        {/* Copyright Text */}
        <div className="text-black text-sm font-medium">All rights reserved to Ena-Ema Technologies</div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-black hover:text-gray-700 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-700 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-700 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-700 transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-700 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
