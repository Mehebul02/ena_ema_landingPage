import { motion } from "framer-motion"
const Card = ({f}) => {
    return (
        <div>
            <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group cursor-pointer"
              >
                <div className="p-8 rounded-lg bg-[#192420] backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 h-full min-h-[280px] flex flex-col">
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
        </div>
    );
};

export default Card;