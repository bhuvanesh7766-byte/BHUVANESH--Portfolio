import FadeIn from './FadeIn';
import { Mail, Phone, Globe, Terminal, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-neutral-200 bg-neutral-100/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-neutral-900">Let's build something <span className="text-neutral-400">extraordinary.</span></h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a href="mailto:bhuvanesh7766@gmail.com" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white shadow-lg rounded-full font-medium hover:scale-105 transition-transform duration-300">
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </FadeIn>

        <FadeIn delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-200 pt-12">
          <a href="mailto:bhuvanesh7766@gmail.com" className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
            <Mail size={24} />
            <span className="text-sm font-medium mt-2">Email</span>
          </a>
          <a href="tel:+916382807605" className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
            <Phone size={24} />
            <span className="text-sm font-medium mt-2">Phone</span>
          </a>
          <a href="https://www.linkedin.com/in/bhuvanesh-s-aa9b05239/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
            <Globe size={24} />
            <span className="text-sm font-medium mt-2">LinkedIn</span>
          </a>
          <a href="https://github.com/bhuvanesh-s" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
            <Terminal size={24} />
            <span className="text-sm font-medium mt-2">GitHub</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
