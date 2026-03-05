import { motion } from 'motion/react';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 lg:px-24">
      <div className="z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {resumeData.basics.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-2xl font-light text-gray-400 sm:text-3xl lg:text-4xl"
        >
          {resumeData.basics.label}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            View Experience
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          
          <a
             href="https://drive.google.com/file/d/1Ru4hIoNsRLjiX2ZIj508m_oF74aHGrFu"
             target="_blank"
             rel="noopener noreferrer"
             className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Download Resume
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />
    </section>
  );
}
