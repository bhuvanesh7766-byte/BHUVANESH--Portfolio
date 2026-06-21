import FadeIn from './FadeIn';

const experiences = [
  {
    title: 'Subject Matter Expert',
    company: 'Chegg',
    period: 'Feb 2023 – Jun 2025',
    details: 'Addressed theoretical and practical operations & economics questions, leveraging AI tools to enhance efficiency and delivering clear, simplified student support.'
  },
  {
    title: 'Customer Service Associate',
    company: 'Federal Bank',
    period: 'Past Role',
    details: 'Managed customer acquisition, implemented marketing strategies, and specialized in cross-selling banking products while building strong client relationships.'
  },
  {
    title: 'BDA Internship',
    company: 'Learning Vertos',
    period: 'Past Role',
    details: 'Conducted lead generation, assisted in sales and marketing campaigns, and gained practical experience in business development strategies.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-neutral-900">Experience</h2>
      </FadeIn>

      <div className="space-y-12 md:space-y-16 relative before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1} className="relative flex items-center justify-between md:justify-center group">
            
            {/* Circle Marker */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white shrink-0 shadow-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors" />
            </div>
            
            {/* Experience Card */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
              <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <span className="text-sm font-medium text-neutral-500 mb-1">{exp.period}</span>
                <h3 className="text-xl font-bold text-neutral-900">{exp.title}</h3>
                <span className="text-lg text-neutral-600">{exp.company}</span>
              </div>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                {exp.details}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
