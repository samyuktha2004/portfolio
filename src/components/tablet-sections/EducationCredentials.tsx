import React from 'react';
import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import { education, aboutMe } from '../../data/portfolioData';

export function EducationCredentials() {
  return (
    <div className="space-y-6 tablet-section">
      {/* Degree Information */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[#fd6698] mb-1 break-words">{education.degree.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm mb-1 break-words">{education.degree.specialization}</p>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 break-words">{education.degree.institution}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="px-2 sm:px-3 py-1 bg-[#FFB6C1]/20 text-[#fd6698] rounded-full text-xs sm:text-sm">
                {education.degree.duration}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#87CEEB]/20 text-[#87CEEB] rounded-full text-xs sm:text-sm">
                CGPA: {education.degree.cgpa}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20 mt-4">
          <h5 className="text-[#fd6698] text-sm mb-2">Key Highlights:</h5>
          <ul className="space-y-1">
            {education.degree.highlights.map((highlight, i) => (
              <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                <span className="text-[#FFB6C1] mt-1 flex-shrink-0">✦</span>
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Leadership Positions */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-[#fd6698] flex-shrink-0" />
          <h4 className="text-[#fd6698]">Leadership Experience</h4>
        </div>
        
        <div className="space-y-4">
          {education.leadership.map((position, i) => (
            <div key={i} className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                <div className="min-w-0">
                  <h5 className="text-[#fd6698] break-words">{position.role}</h5>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">{position.organization}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                  {position.duration}
                </span>
              </div>
              <ul className="space-y-1 mt-3">
                {position.responsibilities.map((responsibility, j) => (
                  <li key={j} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#87CEEB] mt-1 flex-shrink-0">•</span>
                    <span className="break-words">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-[#fd6698] flex-shrink-0" />
          <h4 className="text-[#fd6698]">Skills & Expertise</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutMe.skills.map((skillGroup, i) => (
            <div key={i} className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
              <h5 className="text-[#87CEEB] mb-2 text-sm sm:text-base">{skillGroup.category}</h5>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-[#FFB6C1]/20 text-gray-700 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications (if any) */}
      {education.certifications && education.certifications.length > 0 && (
        <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
          <h4 className="text-[#fd6698] mb-4">Certifications</h4>
          <div className="grid grid-cols-1 gap-3">
            {education.certifications.map((cert, i) => (
              <div key={i} className="bg-white/50 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-gray-800 text-sm sm:text-base break-words">{cert.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">{cert.issuer}</p>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}