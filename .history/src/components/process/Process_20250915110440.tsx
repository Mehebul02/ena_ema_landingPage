"use client"

import { motion } from "framer-motion"
import { User, Settings, Send } from "lucide-react"

export default function HomePage() {
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-[#151E1B] via-green-900 to-teal-[#151E1B">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            From Idea to Live Landing Page in <span className="text-emerald-400">Just 5 Days</span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
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
          {/* Day 1 - Book Your Project */}
          <motion.div variants={itemVariants} whileHover="hover" className="relative">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-emerald-800/30 rounded-2xl p-8 text-center h-full"
              variants={cardHoverVariants}
            >
              <motion.div className="inline-block mb-6" whileHover="hover">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-emerald-500/30">
                  <motion.div variants={iconVariants}>
                    <User className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>
                <span className="inline-block bg-emerald-600/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
                  Day 1
                </span>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Book Your Project</h3>
              <p className="text-gray-300 leading-relaxed">Fill out a short form and we'll get started immediately.</p>
            </motion.div>
          </motion.div>

          {/* Day 2-4 - Design & Development */}
          <motion.div variants={itemVariants} whileHover="hover" className="relative">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-emerald-800/30 rounded-2xl p-8 text-center h-full"
              variants={cardHoverVariants}
            >
              <motion.div className="inline-block mb-6" whileHover="hover">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-emerald-500/30">
                  <motion.div variants={iconVariants}>
                    <Settings className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>
                <span className="inline-block bg-emerald-600/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
                  Day 2 - 4
                </span>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Design & Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlimited revisions until perfect. You're involved every step.
              </p>
            </motion.div>
          </motion.div>

          {/* Day 5 - Launch */}
          <motion.div variants={itemVariants} whileHover="hover" className="relative">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-emerald-800/30 rounded-2xl p-8 text-center h-full"
              variants={cardHoverVariants}
            >
              <motion.div className="inline-block mb-6" whileHover="hover">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-emerald-500/30">
                  <motion.div variants={iconVariants}>
                    <Send className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>
                <span className="inline-block bg-emerald-600/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
                  Day 5
                </span>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Launch</h3>
              <p className="text-gray-300 leading-relaxed">
                Fully deployed on your hosting and ready to convert visitors.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
