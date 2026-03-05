import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export default function Skills() {
  return (
    <section className="py-24 px-6 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Arsenal</h2>
        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {resumeData.skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-bold text-emerald-400">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.keywords.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-emerald-500/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
