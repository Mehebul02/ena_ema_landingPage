"use client"

import { motion } from "framer-motion"
import { User, Settings, Rocket } from "lucide-react"
import CustomTitle from "../CustomeTitle"

const processSteps = [
    {
        day: "Day 1",
        title: "Book Your Project",
        description: "Fill out a short form and we'll get started immediately.",
        icon: User,
        delay: 0.2,
    },
    {
        day: "Day 2 - 4",
        title: "Design & Development",
        description: "Unlimited revisions until perfect. You're involved every step.",
        icon: Settings,
        delay: 0.4,
    },
    {
        day: "Day 5",
        title: "Launch",
        description: "Fully deployed on your hosting and ready to convert visitors.",
        icon: Rocket,
        delay: 0.6,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.6,
        },
    },
}

const iconVariants = {
    hidden: {
        scale: 0,
        rotate: -180,
    },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
        },
    },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
        },
    },
}

const dayBadgeVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.1,
        },
    },
}

export function ProcessSection() {
    return (
        <section className="bg-[#151E1B] py-8 px-4 font-manrope">
            <div className="max-w-6xl mx-auto">
                <CustomTitle className="flex justify-center w-full mx-auto text-center mb-14"
                    title="From Idea to Live Landing Page in"
                    middleText="Just 5 Days"
                    description="Our streamlined process ensures fast delivery without compromising quality." />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-3 gap-8 md:gap-12"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="text-center group cursor-pointer bg-[#192420] backdrop-blur-sm rounded-2xl  border-[#1FFFA] hover:border-emerald-500/30 transition-all duration-300 p-8"
                        >
                            <motion.div variants={dayBadgeVariants} className="inline-block mb-6">
                                <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                                    {step.day}
                                </span>
                            </motion.div>

                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                className="w-16 h-16 mx-auto mb-6 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors duration-300"
                            >
                                <step.icon className="w-8 h-8 text-emerald-400" />
                            </motion.div>

                            <motion.h3
                                className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: step.delay + 0.2 }}
                            >
                                {step.title}
                            </motion.h3>

                            <motion.p
                                className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-pretty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: step.delay + 0.4 }}
                            >
                                {step.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated connecting line */}
                <motion.div
                    className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                />
            </div>
        </section>
    )
}
