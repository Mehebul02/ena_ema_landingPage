"use client"
import CustomTitle from "../CustomeTitle"
import PricingCard from "./PricingCard"
import SpecialOffer from "./SpecialOffer"

const plans = [
    {
        name: "Basic",
        price: "$200",
        description: "Perfect for entrepreneurs",
        features: ["Landing Page Design + Development", "Hosting Deployment", "Mobile Delivery", "Email Support"],
        popular: false,
    },
    {
        name: "Standard",
        price: "$300",
        description: "Best balance of value & features",
        features: [
            "Everything in Basic",
            "Extra Custom Sections",
            "Fast Loading Setup",
            "Third-Party Integrations",
            "Priority Support",
        ],
        popular: true,
    },
    {
        name: "Premium",
        price: "$500",
        description: "For startups & agencies",
        features: [
            "Everything in Standard",
            "Advanced Animations",
            "Custom Illustrations",
            "6 Months Free Support",
            "SEO Optimization",
        ],
        popular: false,
    },
]

export default function PricingSection() {
    return (
        <div className=" bg-[#0A0F0D] py-14 px-4 font-manrope">


            <div className="relative max-w-6xl mx-auto">
            <CustomTitle className="bg-[#0A0F0D] flex justify-start" title="Simple, Transparent Pricing — " middleText="Choose Your Plan" description="No hidden fees, no surprises. Just premium landing pages at unbeatable prices." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {plans.map((plan, index) => <PricingCard key={index} plan={plan} index={index} />)}
                </div>
            </div>
            <SpecialOffer/>
        </div>
    )
}
