import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { BadgeCheck, Heart, HandHeart, ExternalLink } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="py-24 px-6 lg:px-24 relative z-10 bg-black/20">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Certifications</h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
          </motion.div>

          <div className="grid gap-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-emerald-500/30 hover:bg-white/10 group"
              >
                <div className="mt-1 rounded-lg bg-emerald-500/10 p-2 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-gray-200 block group-hover:text-white transition-colors">
                    {cert.name}
                  </span>
                  {cert.issuer && (
                    <span className="text-sm text-gray-400 block mt-1">
                      {cert.issuer}
                    </span>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Interests & Volunteering */}
        <div className="space-y-12">
           {/* Volunteering */}
           <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white">Volunteering</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-emerald-500" />
            </motion.div>
            <div className="grid gap-4">
              {resumeData.volunteering.map((vol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4"
                >
                  <HandHeart className="h-5 w-5 text-emerald-500" />
                  <div>
                    <h4 className="font-bold text-white">{vol.name}</h4>
                    <p className="text-sm text-gray-400">{vol.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white">Interests</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-emerald-500" />
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {resumeData.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  <Heart className="h-3 w-3 text-emerald-500" />
                  {interest}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
