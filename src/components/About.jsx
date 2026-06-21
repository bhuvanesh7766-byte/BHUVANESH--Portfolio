import FadeIn from './FadeIn';
import { Database, Terminal, BarChart3, PieChart, Sheet, TrendingUp } from 'lucide-react';

const skills = [
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: Terminal },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Tableau', icon: PieChart },
  { name: 'Excel', icon: Sheet },
  { name: 'Finance', icon: TrendingUp },
];

const courses = [
  'Data Science', 'Advanced Excel', 'RDBMS', 'HR Management', 'Financial Literacy', 'NPTEL Sustainability'
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-200">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-neutral-900">About & Skills</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Intro Card */}
        <FadeIn className="md:col-span-2 bento-card flex flex-col justify-center" delay={0.1}>
          <h3 className="text-2xl font-medium mb-4 text-neutral-900">The Analyst Mindset</h3>
          <p className="text-neutral-600 text-lg leading-relaxed">
            I'm constantly seeking challenging environments where I can leverage my expertise in business analytics, finance, and customer service. My core focus is transforming raw data into actionable visual insights that drive strategic business growth.
          </p>
        </FadeIn>

        {/* Highlight Card */}
        <FadeIn className="bento-card flex flex-col justify-between group" delay={0.2}>
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-neutral-500">Education</span>
            <h3 className="text-2xl font-bold mt-2 leading-tight text-neutral-900">Graduate - BBA</h3>
          </div>
          <div className="mt-8 text-right">
            <span className="text-5xl font-black tracking-tighter text-neutral-900">7.9</span>
            <span className="text-sm font-bold text-neutral-500 ml-1">CGPA</span>
          </div>
        </FadeIn>

        {/* Skills Grid Card */}
        <FadeIn className="md:col-span-2 bento-card" delay={0.3}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-medium text-neutral-900">Core Stack</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:bg-neutral-100 hover:border-neutral-200 transition-colors">
                <skill.icon size={24} className="text-neutral-600" />
                <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Courses List */}
        <FadeIn className="bento-card" delay={0.4}>
          <h3 className="text-xl font-medium mb-6 text-neutral-900">Certifications</h3>
          <ul className="flex flex-col gap-3">
            {courses.map((course, i) => (
              <li key={i} className="text-neutral-600 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                {course}
              </li>
            ))}
          </ul>
        </FadeIn>

      </div>
    </section>
  );
}
