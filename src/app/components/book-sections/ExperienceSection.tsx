import React from 'react';
import { Briefcase } from 'lucide-react';
import { education } from '../../data/portfolioData';

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-white" id="experience" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-[#E9518D]" aria-hidden="true" />
          <h2 id="experience-heading" className="text-[#E9518D]">Leadership Experience</h2>
        </div>

        <div className="space-y-8">
          {education.leadership.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-4 border-[#FFB6C1] last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#FFB6C1] border-4 border-white shadow-lg" />
              
              <div className="bg-[#FFF0F5] rounded-2xl p-6 shadow-md border-2 border-[#FFB6C1]/20 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#FFB6C1] transition-all duration-200">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[#E9518D]">{job.role}</h3>
                    <p className="text-gray-600 mt-1">{job.organization}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-[#FFB6C1]/20 text-[#E9518D] border border-[#FFB6C1]/40 rounded-full text-sm flex-shrink-0">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.responsibilities.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#E9518D] mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}