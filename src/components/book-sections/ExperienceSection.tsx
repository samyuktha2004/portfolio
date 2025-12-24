import React from 'react';
import { Briefcase } from 'lucide-react';
import { education } from '../../data/portfolioData';

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-white" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-[#fd6698]" />
          <h2 className="text-[#fd6698]">Leadership Experience</h2>
        </div>

        <div className="space-y-8">
          {education.leadership.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-4 border-[#FFB6C1] last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#FFB6C1] border-4 border-white shadow-lg" />
              
              <div className="bg-gradient-to-br from-[#FFF0F5] to-white rounded-2xl p-6 shadow-lg border-2 border-[#FFB6C1]/20">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[#fd6698]">{job.role}</h3>
                    <p className="text-gray-600 mt-1">{job.organization}</p>
                  </div>
                  <span className="px-4 py-2 bg-[#87CEEB] text-white rounded-full text-sm">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.responsibilities.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#FFB6C1] mt-1">✓</span>
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