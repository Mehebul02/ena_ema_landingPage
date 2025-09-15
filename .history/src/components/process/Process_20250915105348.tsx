"use client"

import { motion } from "framer-motion"
import { User, MessageCircle, Rocket } from "lucide-react"

const steps = [
  {
    day: "Day 1",
    title: "Book Your Project",
    description: "Fill out a short form and we'll get started immediately.",
    icon: User,
  },
  {
    day: "Day 2-4",
    title: "Design & Development",
    description: "Unlimited revisions until perfect. You're involved every step.",
    icon: MessageCircle,
  },
  {
    day: "Day 5",
    title: "Launch",
    description: "Fully deployed on your hosting and ready to convert visitors.",
    icon: Rocket,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5,
    },
  },
}

export default function ProcessSection() {
  return (bgmin-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            From Idea to Live Landing Page in{" "}
            <motion.span
              className="text-emerald-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Just 5 Days
            </motion.span>
          </h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Our streamlined process ensures fast delivery without compromising quality.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300"
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <step.icon className="w-8 h-8 text-emerald-400" />
              </motion.div>

              <motion.div
                className="inline-block px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
              >
                {step.day}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
