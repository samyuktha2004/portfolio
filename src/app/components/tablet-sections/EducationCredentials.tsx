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
            <h4 className="text-[#E9518D] mb-1 break-words">{education.degree.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm mb-1 break-words">{education.degree.specialization}</p>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 break-words">{education.degree.institution}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="px-2 sm:px-3 py-1 bg-[#FFB6C1]/20 text-[#E9518D] rounded-full text-xs sm:text-sm border border-[#E9518D]/40">
                {education.degree.duration}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#87CEEB]/20 text-[#2B7FB5] rounded-full text-xs sm:text-sm border border-[#2B7FB5]/40">
                CGPA: {education.degree.cgpa}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20 mt-4">
          <h5 className="text-[#E9518D] text-sm mb-2">Key Highlights:</h5>
          <ul className="space-y-1">
            {education.degree.highlights.map((highlight, i) => (
              <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                <span className="text-[#E9518D] mt-1 flex-shrink-0">✦</span>
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Leadership Positions */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-[#E9518D] flex-shrink-0" />
          <h4 className="text-[#E9518D]">Leadership Experience</h4>
        </div>
        
        <div className="relative pl-6">
          {/* Continuous line from first dot center to last dot center */}
          {education.leadership.length > 1 && (
            <div className="absolute left-[9px] w-0.5 bg-[#FFB6C1]" style={{ top: '1.25rem', bottom: '1.25rem' }} />
          )}
          {education.leadership.map((position, i) => (
            <div key={i} className={`relative ${i < education.leadership.length - 1 ? 'mb-4' : ''}`}>
              {/* Dot centered vertically on title row (~top-4 + half dot) */}
              <div className="absolute -left-6 top-4 w-3 h-3 rounded-full bg-[#E9518D] border-2 border-white shadow-sm z-10" />
              <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                  <div className="min-w-0">
                    <h5 className="text-[#E9518D] break-words">{position.role}</h5>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">{position.organization}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    {position.duration}
                  </span>
                </div>
                <ul className="space-y-1 mt-3">
                  {position.responsibilities.map((responsibility, j) => (
                    <li key={j} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#2B7FB5] mt-1 flex-shrink-0">•</span>
                      <span className="break-words">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-[#E9518D] flex-shrink-0" />
          <h4 className="text-[#E9518D]">Skills & Expertise</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutMe.skills.map((skillGroup, i) => (
            <div key={i} className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
              <h5 className="text-[#2B7FB5] mb-2 text-sm sm:text-base">{skillGroup.category}</h5>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-[#FFB6C1]/20 text-gray-700 rounded-lg text-xs border border-[#FFB6C1]/60"
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
          <h4 className="text-[#E9518D] mb-4">Certifications</h4>
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