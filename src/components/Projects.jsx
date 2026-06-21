import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'SBI Mutual Funds Analysis',
    description: 'Evaluated risk-return characteristics of six SBI Mutual Fund schemes using historical NAV data. Applied quantitative financial metrics (Standard Deviation, Beta, Sharpe Ratio) to highlight risk-trade-offs and identify prime investment opportunities.',
    tags: ['Finance', 'Analytics', 'Quantitative Research'],
    year: '2021'
  },
  {
    title: 'Amarjothi Spinning Mills',
    description: 'Conducted a deep-dive organizational study analyzing departmental workflows, sustainability practices, and operational strategies within the textile industry to find process optimization avenues.',
    tags: ['Business Operations', 'Industry Analysis'],
    year: '2022'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-200">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-neutral-900">Selected Works</h2>
      </FadeIn>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={0.1 * index} className="group relative grid md:grid-cols-12 gap-8 items-start pb-12 border-b border-neutral-200 last:border-0">
            <div className="md:col-span-4">
              <span className="text-neutral-500 font-medium text-sm">{project.year}</span>
              <h3 className="text-2xl font-medium mt-2 text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {project.title}
              </h3>
            </div>
            
            <div className="md:col-span-7">
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-neutral-300 bg-neutral-50 text-xs font-medium text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-1 flex md:justify-end">
              <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 text-neutral-600 transition-all duration-300">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
