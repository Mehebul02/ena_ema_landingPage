

import CustomTitle from "../CustomeTitle";

const Benefits = () => {
    return (
        <div className="bg-[#151E1B]">
          <CustomTitle title="Why Businesses" middleText="Trust Us" lastTest="With Their Designs" description="We combine proven conversion frameworks with agency-level design to deliver results that matter."/>
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
              <div className="p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
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
                  className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
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
    );
};

export default Benefits;