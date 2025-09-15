import { CheckCircle } from "lucide-react"

export default function SpecialOffer() {
  return (
    <div className="min-h-screen  p-4">
      <div className=" space-y-6">
        {/* Limited Availability Section */}
        <div className=" rounded-lg p-6 border border-gray-700">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">Limited Availability</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We only onboard a few clients per month - 2 spots left for this month - secure yours today.
              </p>
            </div>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="bg-[#192420] rounded-lg p-8 border border-gray-700 text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Special Offer For Early Clients</h1>
          <p className="text-gray-300 text-lg mb-8">Get 10% OFF + Free Hosting Setup when you book this week.</p>
          <button className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
            Claim my 10% discount →
          </button>
        </div>
      </div>
    </div>
  )
}
