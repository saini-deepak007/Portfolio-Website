import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-24 px-6 lg:px-24 relative z-10 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-2xl"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/5 p-2 text-gray-400 hover:bg-emerald-500 hover:text-black transition-all"
                    title="View Project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {project.tech && (
                 <span className="mt-1 inline-block text-xs font-mono text-emerald-500/80">
                   {project.tech}
                 </span>
              )}
              {project.highlights && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-gray-400 leading-relaxed">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="mt-6">
              {/* Keywords removed as they are now integrated or not present in new JSON structure in the same way, 
                  but if we want to keep them we'd need to map from something else. 
                  The new JSON has 'tech' as a string. 
              */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
