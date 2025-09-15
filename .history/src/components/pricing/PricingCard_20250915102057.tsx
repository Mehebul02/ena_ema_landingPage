/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from "framer-motion"
import { Check } from 'lucide-react';

interface Plan {
    
}
const PricingCard = ({ plan, index }) => {
    return (
        <div>
             <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" },
                            }}
                            className={`relative bg-[#192420] backdrop-blur-sm rounded-2xl p-8 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 ${plan.popular
                                    ? "border-emerald-400 shadow-lg shadow-emerald-400/20"
                                    : "border-slate-700 hover:border-slate-600"
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                >
                                    <div className="bg-emerald-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </motion.div>
                            )}

                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                    <p className="text-slate-400 text-sm">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                </div>

                                {/* Features */}
                                <div className="space-y-4">
                                    {plan.features.map((feature:any, featureIndex:any) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + featureIndex * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-400" />
                                            </div>
                                            <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 px-6 rounded-xl font-semibold text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular ? "bg-emerald-400 hover:bg-emerald-300" : "bg-emerald-500 hover:bg-emerald-400"
                                        }`}
                                >
                                    Start my project
                                    <motion.div className="group-hover:translate-x-1 transition-transform duration-200">
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </motion.button>
                            </div>
                        </motion.div>
        </div>
    );
};

export default PricingCard;