/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"


const ProcessCard = ({ step, index, itemVariants, iconVariants, dayBadgeVariants }:any) => {
    return (
        <div>
             <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="text-center group cursor-pointer bg-[#192420] backdrop-blur-sm rounded-2xl  border-[#1FFFA5] hover:border-emerald-500/30 transition-all duration-300 p-8"
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
        </div>
    );
};

export default ProcessCard;