"use client"

import { motion } from "framer-motion"
import { Rocket, Gamepad2, Zap, DollarSign, RotateCcw, Trophy } from "lucide-react"
import CustomTitle from "../CustomeTitle"


const features = [
  {
    icon: Rocket,
    title: "Proven Conversion Framework",
    description: "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    icon: Gamepad2,
    title: "Agency Level Design",
    description: "Modern, premium, and tailored for your brand - without the agency price tag.",
  },
  {
    icon: Zap,
    title: "5-day Guaranteed Delivery",
    description: "With a highly professional team, we deliver on time, everytime.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, just clear value. What you see is what you pay.",
  },
  {
    icon: RotateCcw,
    title: "Revisions Until You're Happy",
    description: "We keep working until it's right. Your satisfaction is guaranteed.",
  },
  {
    icon: Trophy,
    title: "Results That Speak",
    description: "Our pages consistently outperform industry averages for conversions.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2,
    },
  },
}

const Benefits = () => {
  return (
    <div className="bg-[#151E1B] font-m">
      <CustomTitle
        title="Why Businesses"
        middleText="Trust Us"
        lastTest="With Their Designs"
        description="We combine proven conversion frameworks with agency-level design to deliver results that matter."
      />
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group cursor-pointer"
              >
                <div className="p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <motion.div variants={iconVariants} className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-50 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
