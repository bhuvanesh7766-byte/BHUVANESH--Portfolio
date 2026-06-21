import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative bg-neutral-50 overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <div className="flex flex-col items-start text-left order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm text-sm font-bold text-neutral-600 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 leading-[1.1] mb-6"
          >
            Hi, I'm Bhuvanesh.<br />
            <span className="text-neutral-400">Business Analyst.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed mb-10 font-light"
          >
            I specialize in SQL, Python, and Power BI to transform raw, complex data into actionable, competitive advantages. Let's drive strategic growth together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white shadow-lg rounded-full font-medium hover:scale-105 transition-all duration-300">
              View Works
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="/web_resume.pdf" download="BHUVANESH_SELVARAJ_Resume.pdf" className="group flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 shadow-sm text-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-all duration-300">
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="/profile.jpg" 
              alt="Bhuvanesh Selvaraj" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=BS' }}
            />
            {/* Subtle inner shadow for premium feel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
