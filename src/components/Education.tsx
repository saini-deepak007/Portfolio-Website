import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 px-6 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Education</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="space-y-6">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
          >
            <div className="mt-1 rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
              <p className="text-lg text-emerald-400">
                {edu.studyType} {edu.area && `• ${edu.area}`}
              </p>
              <div className="mt-1 flex items-center gap-4 text-sm text-gray-400">
                <span>{edu.startDate && `${edu.startDate} - `}{edu.endDate}</span>
                {edu.score && (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white">
                    {edu.score}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
