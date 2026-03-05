import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Professional Experience</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {resumeData.work.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 h-10 w-10 rounded-full border-4 border-black bg-gray-800 flex items-center justify-center md:left-1/2 md:-translate-x-1/2 shadow-lg z-10 group-hover:border-emerald-500 transition-colors duration-300">
              <Briefcase className="h-4 w-4 text-emerald-500" />
            </div>

            {/* Content Card */}
            <div className="ml-16 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/10 md:ml-0 md:w-[calc(50%-40px)]">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-xl font-bold text-white">{job.position}</h3>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <span className="font-semibold text-emerald-400">{job.name}</span>
                {job.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                  </>
                )}
              </div>

              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-300">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
