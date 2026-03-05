import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-24 px-6 lg:px-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let's Connect</h2>
          <p className="mt-4 max-w-md text-gray-400">
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              {resumeData.basics.email}
            </a>
            {resumeData.basics.phone && (
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5" />
                {resumeData.basics.phone}
              </div>
            )}
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="h-5 w-5" />
              {resumeData.basics.location.city}, {resumeData.basics.location.region}, {resumeData.basics.location.countryCode}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {resumeData.basics.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition-all hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                {profile.network === 'LinkedIn' ? <Linkedin className="h-5 w-5" /> : <Github className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          {/* Footer text removed as requested */}
        </div>
      </div>
    </footer>
  );
}
